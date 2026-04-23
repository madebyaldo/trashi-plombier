"use client";

import Image from "next/image";
import { useState } from "react";

const TESTIMONIALS = [
  { name: "Tiffany",   role: "Cliente satisfaite", initials: "TI", text: "J'ai contacté Trashi pour remplacer mon chauffe-eau. Intervention rapide, soignée et efficace. Je recommande vivement et referai appel à lui sans hésiter." },
  { name: "Christine", role: "Cliente fidèle",      initials: "CH", text: "M. Trashi a su diagnostiquer mon problème de chauffage avec clarté. Sérieux, ponctuel et passionné, c'est un artisan de confiance que je recommande." },
  { name: "Mathilde",  role: "Cliente satisfaite",  initials: "MA", text: "Très satisfaits du travail de M. Trashi : délais respectés, finition impeccable et relation agréable. Un professionnel que nous recommandons sans réserve." },
  { name: "Olivier P.", role: "Client satisfait",   initials: "OP", text: "Très satisfait de la prestation effectuée, tout s'est passé nickel de la prise de contact jusqu'à la réalisation. Je referai appel à ses services sans hésiter." },
];

const Star = () => (
  <svg className="w-5 h-5" viewBox="0 0 20 20" style={{ fill: "#1a3a2a" }}>
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
  </svg>
);

export default function TestimonialsSlider() {
  const [idx, setIdx] = useState(0);
  const t = TESTIMONIALS[idx];
  const prev = () => setIdx((idx - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setIdx((idx + 1) % TESTIMONIALS.length);

  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-8">

      {/* Single container — image with overlays */}
      <div className="relative rounded-2xl overflow-hidden" style={{ height: "580px" }}>

        {/* ONE wide background image */}
        <Image
          src="/images/service-1.avif"
          alt="Trashi Plombier intervention"
          fill className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.18)" }} />

        {/* Header — white bg overlaying top-left of image (speech bubble style) */}
        <div
          className="absolute top-0 left-0 z-10 bg-white px-8 py-7"
          style={{ borderTopLeftRadius: "1rem", borderBottomRightRadius: "1.5rem", maxWidth: "520px" }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: "#d4ea00" }}>
              <svg className="w-4 h-4 text-ink-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
            <span className="text-[13px] font-semibold text-ink-400 uppercase tracking-widest">Vrais avis, vraie satisfaction</span>
          </div>
          <h2 className="font-heading font-black text-ink-900 leading-tight" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.6rem)" }}>
            Nos clients<br />parlent d&apos;eux-mêmes
          </h2>
        </div>

        {/* Testimonial card — overlapping bottom-right */}
        <div
          className="absolute bottom-0 right-0 z-10 bg-white overflow-hidden"
          style={{ width: "52%", borderTopLeftRadius: "1.5rem" }}
        >
          <div className="px-8 pt-7 pb-6">
            <p className="text-ink-900 text-[16px] font-medium leading-relaxed mb-6">
              &ldquo;{t.text}&rdquo;
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-white font-bold text-[14px]"
                  style={{ background: "#1a3a2a" }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-ink-900 text-[15px]">{t.name}</p>
                  <p className="text-ink-400 text-[12px]">{t.role}</p>
                </div>
              </div>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} />)}
              </div>
            </div>
          </div>

          {/* Prev / Next */}
          <div className="grid grid-cols-2">
            <button
              onClick={prev}
              className="flex items-center justify-center gap-2 py-4 text-[14px] font-bold text-ink-900 hover:opacity-90 transition-opacity"
              style={{ background: "#d4ea00" }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
              </svg>
              Précédent
            </button>
            <button
              onClick={next}
              className="flex items-center justify-center gap-2 py-4 text-[14px] font-bold text-white hover:opacity-90 transition-opacity"
              style={{ background: "#1a3a2a" }}
            >
              Suivant
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
