import Image from "next/image";
import EightBallLogo from "./components/EightBallLogo";
import WaIcon from "./components/WaIcon";
import LeadForm from "./components/LeadForm";
import ScrollReveal from "./components/ScrollReveal";

const WA_URL =
  "https://wa.me/5491137978242?text=" +
  encodeURIComponent("Hola, estoy interesado en las mesas de pool importadas. ¿Me pueden enviar info del catálogo?");

const IMG = {
  hero: "/images/break.jpg",
  room: "/images/room.jpg",
  table1: "/images/gallery-hall.webp",
  detail: "/images/detail.jpg",
  table2: "/images/room.jpg",
  cue: "/images/cues.webp",
};

const BRANDS = ["Brunswick", "Olhausen", "Diamond", "Predator", "Meucci", "McDermott", "Aramith", "Simonis"];

export default function Page() {
  return (
    <>
      <ScrollReveal />

      {/* NAV */}
      <nav className="nav">
        <a href="/" className="nav-logo" aria-label="Paco Mesas — Inicio">
          <EightBallLogo size={30} />
          <span className="nav-logo-text">Paco Mesas</span>
        </a>
        <a href="#catalogo" className="nav-btn">Ver Catálogo</a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg"><Image src={IMG.hero} alt="Mesa de pool profesional americana Brunswick en sala de juego" fill priority sizes="100vw" /></div>
        <div className="hero-ov" />
        <div className="hero-in">
          <div className="hero-badge">Primera Importación — Cupos Limitados</div>
          <h1>
            Si vas a comprar una mesa de pool,<br />
            <em>que valga la pena</em>
          </h1>
          <p className="hero-p">
            Mesas de billar americanas con pizarra de tres piezas, madera maciza y
            paño profesional. Calidad notablemente superior a lo que se consigue
            en el mercado argentino — y a un precio que no te lo esperás.
          </p>
          <div className="hero-ctas">
            <a href="#catalogo" className="cta-gold">Ver el Catálogo →</a>
            <a className="cta-out" href={WA_URL} target="_blank" rel="noopener noreferrer">
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[0, 1].map((i) => (
            <div className="ticker-set" key={i}>
              {BRANDS.map((b) => (
                <span className="ticker-item" key={`${b}-${i}`}>
                  <span className="ticker-dot" />{b}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* SOCIAL PROOF */}
      <div className="proof-banner">
        Más de 50 personas ya solicitaron el catálogo — cupos limitados por contenedor
      </div>

      {/* COMPARACIÓN */}
      <div className="sec-dark">
        <div className="sec">
          <div className="fi">
            <div className="sec-tag">La Diferencia Real</div>
            <h2>Mesa de pool nacional vs. mesa de pool importada de USA</h2>
            <p className="sec-p">
              La mayoría de las mesas de pool que se venden en Argentina —incluso las que se
              promocionan como &quot;profesionales&quot; en Mercado Libre y otros sitios— están fabricadas
              con materiales que no resisten el uso diario ni garantizan una superficie de juego
              pareja. La diferencia con una mesa de billar americana bien construida se nota
              desde el primer tiro.
            </p>
          </div>
          <div className="cmp fi d1">
            <div className="cmp-col bad">
              <div className="cmp-head">✕ Mesa de Pool Nacional Típica</div>
              <div className="cmp-row"><span className="cmp-ico">✕</span> Pizarra de una sola pieza o MDF — difícil de nivelar correctamente</div>
              <div className="cmp-row"><span className="cmp-ico">✕</span> Madera blanda o aglomerado que se deforma con los cambios de humedad</div>
              <div className="cmp-row"><span className="cmp-ico">✕</span> Gomas genéricas sin estándar — rebotes irregulares e impredecibles</div>
              <div className="cmp-row"><span className="cmp-ico">✕</span> Paño grueso de baja calidad que pierde velocidad y se deteriora rápido</div>
              <div className="cmp-row"><span className="cmp-ico">✕</span> Sin respaldo de marca reconocida ni especificaciones técnicas claras</div>
            </div>
            <div className="cmp-col good">
              <div className="cmp-head">◈ Mesa de Pool Importada de USA</div>
              <div className="cmp-row"><span className="cmp-ico">✓</span> Pizarra de 1&quot; en tres piezas — nivelación precisa en cualquier superficie</div>
              <div className="cmp-row"><span className="cmp-ico">✓</span> Madera maciza (roble, arce) — estructura sólida y durable a largo plazo</div>
              <div className="cmp-row"><span className="cmp-ico">✓</span> Gomas K66 de calidad — rebote consistente y previsible</div>
              <div className="cmp-row"><span className="cmp-ico">✓</span> Paño profesional tipo Simonis — velocidad, durabilidad, terminación impecable</div>
              <div className="cmp-row"><span className="cmp-ico">✓</span> Marcas de referencia mundial: Brunswick, Olhausen, Diamond</div>
            </div>
          </div>
        </div>
      </div>

      {/* GALERÍA */}
      <div className="sec fi">
        <div className="sec-tag">Calidad Superior</div>
        <h2>La mejor mesa de pool que podés comprar en Argentina</h2>
        <p className="sec-p">
          Mesas de billar diseñadas y fabricadas en Estados Unidos con estándares de calidad
          que no se consiguen en el mercado local. Materiales nobles, terminaciones
          cuidadas, y una experiencia de juego que no tiene comparación con ninguna
          mesa de pool argentina.
        </p>
        <div className="gal">
          <div className="gal-main">
            <Image src={IMG.room} alt="Sala de juegos con mesa de pool americana Brunswick importada de 8 pies" fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 66vw" />
          </div>
          <div className="gal-side">
            <Image src={IMG.table1} alt="Mesa de billar profesional importada con paño verde Simonis y gomas K66" fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 33vw" />
          </div>
          <div className="gal-side">
            <Image src={IMG.detail} alt="Set de bolas de billar Aramith profesionales sobre pizarra de tres piezas" fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 33vw" />
          </div>
        </div>
      </div>

      {/* SPECS */}
      <div className="sec-dark">
        <div className="sec fi">
          <div className="sec-tag">Especificaciones</div>
          <h2>Los detalles que marcan la diferencia en una mesa de pool</h2>
          <div className="specs">
            <div className="sp">
              <div className="sp-val">3</div>
              <div className="sp-lbl">Piezas de Pizarra</div>
              <p className="sp-desc">Pizarra de 1&quot; cortada en tres piezas para una nivelación precisa y una superficie de juego perfecta.</p>
            </div>
            <div className="sp">
              <div className="sp-val">K66</div>
              <div className="sp-lbl">Gomas de Banda</div>
              <p className="sp-desc">Perfil K66, el estándar en mesas de billar de calidad. Rebote uniforme y previsible.</p>
            </div>
            <div className="sp">
              <div className="sp-val">21oz</div>
              <div className="sp-lbl">Paño Profesional</div>
              <p className="sp-desc">Velocidad controlada, alta durabilidad, y una superficie que se mantiene impecable con el uso.</p>
            </div>
            <div className="sp">
              <div className="sp-val">8-9&apos;</div>
              <div className="sp-lbl">Pies de Largo</div>
              <p className="sp-desc">Mesa de pool de 8 pies o 9 pies. Tamaño reglamentario, disponible según tu espacio.</p>
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCTOS */}
      <div className="sec fi">
        <div className="sec-tag">Catálogo</div>
        <h2>Mesas de pool y tacos importados de Estados Unidos</h2>
        <p className="sec-p">
          Equipamiento usado en excelente estado, inspeccionado unidad por unidad
          antes del embarque. Calidad de juego equivalente a un producto nuevo,
          a un precio significativamente menor que comprar una mesa de pool nueva
          de estas marcas.
        </p>
        <div className="prods">
          <div className="prod">
            <div className="prod-img">
              <Image src={IMG.table2} alt="Mesa de pool americana Brunswick importada de 8 pies con pizarra de tres piezas" fill style={{ objectFit: "cover", transition: "transform 0.6s" }} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="prod-body">
              <h3>Mesas de Pool Americanas</h3>
              <p>
                Brunswick, Olhausen, Diamond — las marcas que definen el estándar
                de calidad en mesas de billar a nivel internacional. Ahora disponibles
                en Argentina a través de importación directa, sin intermediarios.
              </p>
              <ul className="prod-li">
                <li>Pizarra de 3 piezas, 1&quot; de espesor</li>
                <li>Marco y patas de madera maciza</li>
                <li>Gomas K66 de calidad profesional</li>
                <li>Paño profesional incluido</li>
                <li>Sistema de retorno de bolas</li>
                <li>Set de bolas Aramith incluido</li>
              </ul>
            </div>
          </div>
          <div className="prod">
            <div className="prod-img">
              <Image src={IMG.cue} alt="Tacos de pool profesionales importados Predator McDermott y Meucci" fill style={{ objectFit: "cover", transition: "transform 0.6s" }} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="prod-body">
              <h3>Tacos de Pool Importados</h3>
              <p>
                Predator, Meucci, McDermott, Lucasi. Tacos de pool de fabricación americana
                con materiales y balance que marcan una diferencia tangible en cada jugada.
              </p>
              <ul className="prod-li">
                <li>Puntas y virolas de alta calidad</li>
                <li>Eje de bajo deflexión</li>
                <li>Maderas nobles: maple, ébano, cocobolo</li>
                <li>Balance y peso calibrados</li>
                <li>Joint de acero inoxidable</li>
                <li>Cada taco incluye estuche rígido</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* TRUST */}
      <div className="sec-dark">
        <div className="sec fi" style={{ textAlign: "center" }}>
          <div className="sec-tag">Importación Directa</div>
          <h2>Sin intermediarios, mejor precio</h2>
          <p className="sec-p" style={{ margin: "0 auto" }}>
            Compramos mesas de pool directamente en Estados Unidos, verificamos el estado de cada
            producto, y coordinamos el envío puerta a puerta hasta Argentina. Sin intermediarios
            que encarezcan el proceso. El resultado: calidad muy superior
            a lo que se ofrece en el mercado local de mesas de billar, a un precio más accesible
            que las opciones &quot;premium&quot; que encontrás en Mercado Libre.
          </p>
          <div className="trust">
            <div className="trust-item">
              <div className="trust-num">100%</div>
              <div className="trust-lbl">Inspección Pre-Embarque</div>
            </div>
            <div className="trust-item">
              <div className="trust-num">USA</div>
              <div className="trust-lbl">Origen Directo</div>
            </div>
            <div className="trust-item">
              <div className="trust-num">60-90</div>
              <div className="trust-lbl">Días de Entrega</div>
            </div>
            <div className="trust-item">
              <div className="trust-num">1era</div>
              <div className="trust-lbl">Partida Exclusiva</div>
            </div>
          </div>
        </div>
      </div>

      {/* SEO CONTENT — GUÍA DE COMPRA */}
      <div className="sec fi">
        <div className="sec-tag">Guía de Compra</div>
        <h2>Qué tener en cuenta antes de comprar una mesa de pool en Argentina</h2>
        <div className="seo-content">
          <p>
            Comprar una mesa de pool es una inversión importante, y en Argentina las opciones
            disponibles pueden resultar confusas. La mayoría de las mesas de billar que se venden
            en el mercado local —tanto en locales especializados como en plataformas como Mercado
            Libre— están fabricadas con materiales que no cumplen los estándares mínimos de calidad
            que se exigen en otros países. Entender qué buscar te va a ahorrar plata y frustración.
          </p>
          <h3>La pizarra: el componente más importante de una mesa de pool</h3>
          <p>
            La superficie de juego de una mesa de pool de calidad está hecha de pizarra natural,
            un tipo de piedra que se pule hasta lograr una planitud casi perfecta. Las mejores mesas
            de billar del mundo usan pizarra de una pulgada de espesor, cortada en tres piezas
            independientes. Este diseño permite que cada sección se nivele por separado, adaptándose
            a cualquier irregularidad del piso. Las mesas nacionales suelen usar pizarra de una sola
            pieza (más fina y propensa a rajarse) o directamente MDF, un material que no ofrece
            las mismas propiedades de juego.
          </p>
          <h3>Madera maciza vs. aglomerado: la estructura que sostiene todo</h3>
          <p>
            El marco, las patas y los rieles de una mesa de pool soportan un peso enorme — solo la
            pizarra puede pesar más de 200 kilos. Las mesas americanas de marcas como Brunswick,
            Olhausen y Diamond utilizan madera maciza (roble, arce o poplar) que no se deforma con
            los cambios de temperatura y humedad. Muchas mesas de pool argentinas utilizan aglomerado
            o maderas blandas que, con el tiempo, pierden rigidez y afectan directamente el rebote
            de las bandas.
          </p>
          <h3>Gomas, paño y accesorios: lo que define la experiencia de juego</h3>
          <p>
            Las gomas de las bandas determinan la consistencia del rebote. El perfil K66 es el
            estándar utilizado en mesas de pool de calidad en todo el mundo. El paño profesional
            (como el Simonis 860, de 21 onzas) ofrece una velocidad controlada y una durabilidad
            que los paños nacionales no pueden igualar. Completar la mesa con bolas Aramith —el
            estándar de la industria— asegura una experiencia de juego completa y consistente.
          </p>
          <h3>¿Mesa de pool de 8 pies o 9 pies?</h3>
          <p>
            La elección entre una mesa de pool de 8 pies y una de 9 pies depende del espacio
            disponible. Como regla general, necesitás al menos 1,5 metros libres alrededor de la
            mesa para poder jugar con comodidad. Una mesa de 8 pies requiere una sala de
            aproximadamente 4,5 x 5,5 metros, mientras que una de 9 pies necesita unos 5 x 6 metros.
            Ambos tamaños son reglamentarios y están disponibles en nuestro catálogo.
          </p>
          <h3>¿Por qué comprar una mesa de pool importada usada?</h3>
          <p>
            Una mesa de pool americana bien mantenida dura décadas. Los materiales con los que están
            construidas — pizarra natural, madera maciza, gomas de alta densidad — no pierden sus
            propiedades con el uso normal. Una mesa usada en excelente estado ofrece exactamente
            la misma calidad de juego que una nueva, a una fracción del precio. Es la forma más
            inteligente de acceder a una mesa de billar de primer nivel en Argentina sin pagar
            el sobreprecio de una unidad nueva importada.
          </p>
        </div>
      </div>

      {/* FORM */}
      <section className="form-sec" id="catalogo">
        <div className="form-wrap fi">
          <div className="sec-tag">Acceso Prioritario</div>
          <h2>Solicitá el catálogo con precios</h2>
          <p className="sub">
            Los cupos están limitados por la capacidad del contenedor. Dejá tus datos
            y te enviamos el catálogo completo con fotos, precios y condiciones de las
            mesas de pool importadas antes que a nadie.
          </p>
          <LeadForm />
        </div>
      </section>

      {/* FAQ */}
      <div className="sec fi">
        <div className="sec-tag">Preguntas Frecuentes</div>
        <h2>Todo lo que necesitás saber sobre nuestras mesas de pool</h2>
        <div className="faq">
          <div className="faq-item">
            <div className="faq-q">¿Las mesas de pool son nuevas o usadas?</div>
            <p className="faq-a">Son usadas en excelente estado. Cada unidad se inspecciona antes del embarque: se verifica que la pizarra no tenga fisuras, que la madera esté firme y que las gomas conserven su elasticidad. La calidad de juego es equivalente a una mesa de billar nueva.</p>
          </div>
          <div className="faq-item">
            <div className="faq-q">¿Qué marcas de mesas de pool importan?</div>
            <p className="faq-a">En mesas de pool: Brunswick, Olhausen, Diamond y Valley. En tacos de pool: Predator, Meucci, McDermott y Lucasi. La disponibilidad exacta varía según cada partida de importación.</p>
          </div>
          <div className="faq-item">
            <div className="faq-q">¿Cuánto cuesta una mesa de pool importada comparada con una nacional?</div>
            <p className="faq-a">Una mesa de pool importada de estas características tiene un precio comparable —y en muchos casos menor— al de las opciones que se comercializan como &quot;premium&quot; en el mercado argentino. La diferencia en calidad de materiales y construcción, sin embargo, es muy significativa.</p>
          </div>
          <div className="faq-item">
            <div className="faq-q">¿Cuánto demora la entrega de la mesa de pool?</div>
            <p className="faq-a">Desde la confirmación de la reserva, estimamos entre 60 y 90 días según la logística marítima y los tiempos de aduana. Mantenemos informados a todos los compradores en cada etapa del proceso.</p>
          </div>
          <div className="faq-item">
            <div className="faq-q">¿Incluyen el armado de la mesa de billar?</div>
            <p className="faq-a">El armado profesional se coordina por separado con técnicos especializados en tu zona. Una mesa de pool con pizarra de tres piezas requiere instalación profesional para asegurar una nivelación correcta.</p>
          </div>
          <div className="faq-item">
            <div className="faq-q">¿Qué diferencia tiene la pizarra de 3 piezas?</div>
            <p className="faq-a">La pizarra de tres piezas permite una nivelación mucho más precisa que la de una sola pieza. Cada sección se ajusta de forma independiente, garantizando una superficie perfectamente plana. Es el estándar en mesas de pool de calidad en todo el mundo.</p>
          </div>
          <div className="faq-item">
            <div className="faq-q">¿Dejar mis datos implica un compromiso de compra?</div>
            <p className="faq-a">No. Te contactamos con el catálogo completo y los precios, y vos decidís si te interesa avanzar. La información nos permite estimar la demanda real antes de confirmar la importación de las mesas de pool.</p>
          </div>
        </div>
      </div>

      {/* CIERRE */}
      <div className="sec-dark">
        <div className="sec fi" style={{ textAlign: "center", padding: "80px 28px" }}>
          <h2>Calidad que se nota desde el primer tiro</h2>
          <p className="sec-p" style={{ margin: "0 auto 28px", textAlign: "center" }}>
            Si estás evaluando comprar una mesa de pool en Argentina, te invitamos a conocer lo que
            realmente existe antes de decidir. Los cupos de esta primera importación
            son limitados por la capacidad del contenedor.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#catalogo" className="cta-gold">Solicitar Catálogo →</a>
            <a className="cta-out" href={WA_URL} target="_blank" rel="noopener noreferrer">WhatsApp Directo</a>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="foot">
        <div className="foot-logo">
          <EightBallLogo size={26} />
          <span className="foot-brand">Paco Mesas</span>
        </div>
        <p>Mesas de pool importadas de USA · Tacos de billar profesionales · Argentina</p>
        <p style={{ marginTop: 6 }}>&copy; {new Date().getFullYear()} Paco Mesas. Todos los derechos reservados.</p>
      </footer>

      {/* FLOATING WA */}
      <a className="float-wa" href={WA_URL} target="_blank" rel="noopener noreferrer" aria-label="Contactar a Paco Mesas por WhatsApp">
        <WaIcon size={28} />
      </a>
    </>
  );
}
