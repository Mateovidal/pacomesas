"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("vis")),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".fi").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return null;
}
