"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SQRT_5000 = Math.sqrt(5000);

const TESTIMONIALS = [
  {
    id: 0,
    text: "J'ai contacté Trashi pour remplacer mon chauffe-eau. Intervention rapide, soignée et efficace. Je recommande vivement et referai appel à lui sans hésiter.",
    by: "Tiffany",
    role: "Cliente satisfaite",
    imgSrc: "https://i.pravatar.cc/150?img=47",
  },
  {
    id: 1,
    text: "M. Trashi a su diagnostiquer mon problème de chauffage avec clarté. Sérieux, ponctuel et passionné, c'est un artisan de confiance que je recommande.",
    by: "Christine",
    role: "Cliente fidèle",
    imgSrc: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 2,
    text: "Très satisfaits du travail de M. Trashi : délais respectés, finition impeccable et relation agréable. Un professionnel que nous recommandons sans réserve.",
    by: "Mathilde",
    role: "Cliente satisfaite",
    imgSrc: "https://i.pravatar.cc/150?img=25",
  },
  {
    id: 3,
    text: "Très satisfait de la prestation effectuée, tout s'est passé nickel de la prise de contact jusqu'à la réalisation. Je referai appel à ses services sans hésiter.",
    by: "Olivier P.",
    role: "Client satisfait",
    imgSrc: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 4,
    text: "Urgence un dimanche soir, Trashi était là en moins de 30 minutes. Problème réglé rapidement, tarif honnête. Un vrai professionnel de confiance.",
    by: "Marc D.",
    role: "Client satisfait",
    imgSrc: "https://i.pravatar.cc/150?img=67",
  },
  {
    id: 5,
    text: "Rénovation complète de notre salle de bain réalisée dans les délais et le budget. Travail soigné, équipe propre et sérieuse. Merci à toute l'équipe !",
    by: "Sophie M.",
    role: "Cliente satisfaite",
    imgSrc: "https://i.pravatar.cc/150?img=44",
  },
  {
    id: 6,
    text: "Dépannage rapide pour une fuite sous l'évier. Artisan sérieux, propre et efficace. Je n'hésiterai pas à faire appel à Trashi Plombier à nouveau.",
    by: "Jean-Luc B.",
    role: "Client satisfait",
    imgSrc: "https://i.pravatar.cc/150?img=53",
  },
];

const N = TESTIMONIALS.length; // 7 — odd, perfect symmetry

export default function StaggerTestimonials() {
  const [offset, setOffset] = useState(0);
  const [cardSize, setCardSize] = useState(280);

  const next = () => setOffset((o) => (o + 1) % N);
  const prev = () => setOffset((o) => (o - 1 + N) % N);

  useEffect(() => {
    const update = () =>
      setCardSize(window.matchMedia("(min-width: 640px)").matches ? 280 : 220);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-8">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-16">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
              style={{ background: "#EA580C" }}
            >
              <svg className="w-4 h-4" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
            <span className="text-[13px] font-semibold text-white/50 uppercase tracking-widest">
              Témoignages clients
            </span>
          </div>
          <h2
            className="font-heading font-black text-white leading-tight"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
          >
            Nos clients<br />parlent d&apos;eux-mêmes.
          </h2>
        </div>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 text-[14px] font-semibold px-6 py-3 rounded-sm shrink-0 transition-opacity hover:opacity-90"
          style={{ background: "#EA580C", color: "#ffffff" }}
        >
          Demander un devis
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>

      {/* Cards — stable keys = smooth bidirectional transitions */}
      <div className="relative w-full overflow-hidden" style={{ height: 420 }}>
        {TESTIMONIALS.map((t) => {
          // Compute circular position relative to current center
          const raw = (t.id - offset + N) % N;
          const half = Math.floor(N / 2);
          const pos = raw <= half ? raw : raw - N;
          // pos ranges: -3 … 0 … 3
          const isCenter = pos === 0;

          return (
            <div
              key={t.id}
              onClick={() => setOffset((o) => (o + pos + N) % N)}
              className="absolute left-1/2 top-1/2 cursor-pointer transition-all duration-500 ease-in-out"
              style={{
                width: cardSize,
                height: cardSize,
                clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
                background: isCenter ? "#0c1c35" : "#ffffff",
                border: isCenter ? "2px solid #0c1c35" : "2px solid #e4e4e7",
                transform: `
                  translate(-50%, -50%)
                  translateX(${(cardSize / 1.5) * pos}px)
                  translateY(${isCenter ? -65 : pos % 2 ? 15 : -15}px)
                  rotate(${isCenter ? 0 : pos % 2 ? 2.5 : -2.5}deg)
                `,
                zIndex: isCenter ? 10 : Math.max(0, 5 - Math.abs(pos)),
                boxShadow: isCenter ? "0px 8px 0px 4px #e4e4e7" : "none",
              }}
            >
              {/* Cut corner diagonal */}
              <span
                className="absolute block origin-top-right rotate-45"
                style={{
                  right: -2,
                  top: 48,
                  width: SQRT_5000,
                  height: 2,
                  background: isCenter ? "rgba(255,255,255,0.15)" : "#e4e4e7",
                }}
              />

              <div className="p-8 h-full flex flex-col">
                <img
                  src={t.imgSrc}
                  alt={t.by}
                  className="mb-4 h-14 w-12 object-cover object-top"
                  style={{
                    boxShadow: isCenter
                      ? "3px 3px 0px rgba(255,255,255,0.1)"
                      : "3px 3px 0px #f4f4f5",
                  }}
                />
                <p
                  className="text-[15px] sm:text-[16px] font-medium leading-relaxed flex-1"
                  style={{ color: isCenter ? "rgba(255,255,255,0.92)" : "#18181b" }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>
                <p
                  className="mt-6 text-[14px] italic"
                  style={{ color: isCenter ? "rgba(255,255,255,0.45)" : "#71717a" }}
                >
                  — {t.by}, {t.role}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Nav — bottom center */}
      <div className="flex justify-center gap-2 mt-4">
        <button
          onClick={prev}
          className="w-14 h-14 flex items-center justify-center border-2 transition-colors hover:bg-sand-50"
          style={{ borderColor: "rgba(255,255,255,0.2)", color: "white" }}
          aria-label="Précédent"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="w-14 h-14 flex items-center justify-center border-2 transition-colors hover:bg-white/10"
          style={{ borderColor: "rgba(255,255,255,0.2)", color: "white" }}
          aria-label="Suivant"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
