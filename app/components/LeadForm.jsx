"use client";

import { useState } from "react";
import WaIcon from "./WaIcon";

const WA_URL =
  "https://wa.me/5491137978242?text=" +
  encodeURIComponent("Hola, estoy interesado en las mesas de pool importadas. ¿Me pueden enviar info del catálogo?");

// ⚠️ REEMPLAZAR con tu URL de Google Apps Script después de deployar
// Ver paco-mesas-apps-script.js para instrucciones
const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbxiVPkWkbTUT37N1dZWbwQQCemRLz0DyYoSLaNwKs127BUjW5sbngUn0afb_BfESHWMZA/exec";

export default function LeadForm() {
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", interes: "mesa" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.nombre.trim()) errs.nombre = true;
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = true;
    if (!form.telefono.trim()) errs.telefono = true;
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setSubmitting(true);
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
          ...form,
          timestamp: new Date().toISOString(),
          source: "Paco Mesas Landing",
        }),
      });
      setSubmitted(true);
    } catch {
      window.open(WA_URL, "_blank");
    }
    setSubmitting(false);
  };

  const inp = (field, val) => {
    setForm((f) => ({ ...f, [field]: val }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: false }));
  };

  if (submitted) {
    return (
      <div className="ok-msg">
        <h3>✓ Recibimos tu solicitud</h3>
        <p>Te contactamos en las próximas 48 horas con el catálogo y los precios. Si preferís una respuesta inmediata:</p>
        <a className="wa-btn" href={WA_URL} target="_blank" rel="noopener noreferrer">
          <WaIcon /> Contactar por WhatsApp
        </a>
      </div>
    );
  }

  return (
    <>
      <div>
        <div className={`fg${errors.nombre ? " err" : ""}`}>
          <label>Nombre</label>
          <input type="text" placeholder="Tu nombre" value={form.nombre} onChange={(e) => inp("nombre", e.target.value)} />
          {errors.nombre && <div className="err-msg">Este campo es obligatorio</div>}
        </div>
        <div className={`fg${errors.email ? " err" : ""}`}>
          <label>Email</label>
          <input type="email" placeholder="tu@email.com" value={form.email} onChange={(e) => inp("email", e.target.value)} />
          {errors.email && <div className="err-msg">Ingresá un email válido</div>}
        </div>
        <div className={`fg${errors.telefono ? " err" : ""}`}>
          <label>WhatsApp / Teléfono</label>
          <input type="tel" placeholder="+54 9 11 1234-5678" value={form.telefono} onChange={(e) => inp("telefono", e.target.value)} />
          {errors.telefono && <div className="err-msg">Dejanos un número de contacto</div>}
        </div>
        <div className="fg">
          <label>¿Qué te interesa?</label>
          <select value={form.interes} onChange={(e) => inp("interes", e.target.value)}>
            <option value="mesa">Mesa de pool</option>
            <option value="taco">Taco importado</option>
            <option value="ambos">Mesa + Taco</option>
            <option value="otro">Otro / Consulta general</option>
          </select>
        </div>
        <button type="button" className="form-btn" disabled={submitting} onClick={handleSubmit}>
          {submitting ? "Enviando..." : "Solicitar Catálogo con Precios →"}
        </button>
      </div>
      <div className="divider">o escribinos directamente</div>
      <a className="wa-btn" href={WA_URL} target="_blank" rel="noopener noreferrer">
        <WaIcon /> Contactar por WhatsApp
      </a>
      <p className="form-fine">Sin compromiso de compra. Nos sirve para dimensionar la demanda antes de confirmar la importación.</p>
    </>
  );
}
