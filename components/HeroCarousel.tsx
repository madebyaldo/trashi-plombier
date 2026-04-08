"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { BUSINESS } from "@/lib/seo-data";

const SLIDES = [
  {
    image: "/images/plomberie-salle-de-bain.jpg",
    tag: "Plomberie · Metz",
    title: "Votre expert\nplomberie à Metz",
    subtitle:
      "Rénovation salle de bain, pose de douche, robinetterie — travail soigné, garanti et livré dans les délais.",
    cta: "Demander un devis",
  },
  {
    image: "/images/chauffage-installation.jpg",
    tag: "Chauffage · Moselle",
    title: "Installation &\nentretien chaudière",
    subtitle:
      "Chaudière gaz, fioul, électrique — toutes marques. Contrat d'entretien annuel avec certificat de conformité.",
    cta: "Contacter un expert",
  },
  {
    image: "/images/urgence-plombier.jpg",
    tag: "Urgence 24h/24 · 7j/7",
    title: "Intervention\nen moins de 30 min",
    subtitle:
      "Fuite d'eau, canalisation bouchée, panne de chauffage — un technicien disponible immédiatement.",
    cta: "Appeler maintenant",
  },
];

const TRACK = [...SLIDES, SLIDES[0]];

export default function HeroCarousel() {
  const [trackIndex, setTrackIndex] = useState(0);
  const [animated, setAnimated] = useState(true);

  const current = trackIndex % SLIDES.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimated(true);
      setTrackIndex((t) => t + 1);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (trackIndex === SLIDES.length) {
      const t = setTimeout(() => {
        setAnimated(false);
        setTrackIndex(0);
      }, 1000);
      return () => clearTimeout(t);
    }
  }, [trackIndex]);

  useEffect(() => {
    if (!animated) {
      const t = setTimeout(() => setAnimated(true), 50);
      return () => clearTimeout(t);
    }
  }, [animated]);

  return (
    <section className="hero-full relative w-full overflow-hidden bg-black">

      {/* ── Sliding track ── */}
      <div
        className="flex h-full"
        style={{
          width: `${TRACK.length * 100}%`,
          transform: `translateX(-${(trackIndex / TRACK.length) * 100}%)`,
          transition: animated ? "transform 1s cubic-bezier(0.16, 1, 0.3, 1)" : "none",
        }}
      >
        {TRACK.map((slide, i) => {
          const isActive = i === trackIndex;

          return (
            <div
              key={i}
              className="relative h-full flex flex-col justify-center overflow-hidden"
              style={{ width: `${100 / TRACK.length}%` }}
            >
              {/* Image */}
              <Image
                src={slide.image}
                alt={slide.title.replace("\n", " ")}
                fill
                priority={i === 0}
                className="object-cover object-center"
                sizes="100vw"
                quality={90}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

              {/* Content — fades up after slide arrives */}
              <div className="relative z-10 px-6 sm:px-10 md:px-20 max-w-7xl mx-auto w-full">
                <div className="max-w-2xl">

                  <p
                    className="text-copper-400 text-[11px] font-bold uppercase tracking-[0.25em] mb-5 animate-fade-up"
                    style={{ animationDelay: isActive ? "0.7s" : "0s", opacity: isActive ? undefined : 0 }}
                  >
                    {slide.tag}
                  </p>

                  <h1
                    className="font-heading font-extrabold text-white uppercase tracking-tight leading-[0.9] mb-5 whitespace-pre-line animate-fade-up"
                    style={{
                      fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
                      animationDelay: isActive ? "0.85s" : "0s",
                      opacity: isActive ? undefined : 0,
                    }}
                  >
                    {slide.title}
                  </h1>

                  <p
                    className="text-white/55 text-[14px] md:text-[17px] leading-relaxed max-w-md mb-8 animate-fade-up"
                    style={{ animationDelay: isActive ? "1s" : "0s", opacity: isActive ? undefined : 0 }}
                  >
                    {slide.subtitle}
                  </p>

                  <div
                    className="flex flex-col sm:flex-row gap-3 animate-fade-up"
                    style={{ animationDelay: isActive ? "1.1s" : "0s", opacity: isActive ? undefined : 0 }}
                  >
                    <a
                      href={`tel:${BUSINESS.phoneClean}`}
                      className="inline-flex items-center justify-center gap-2.5 bg-copper-500 hover:bg-copper-400 text-white font-heading font-bold text-[15px] px-7 py-3.5 rounded-lg transition-all duration-200 shadow-lg shadow-copper-500/30 hover:-translate-y-0.5"
                    >
                      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {BUSINESS.phone}
                    </a>
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white/50 bg-white/5 hover:bg-white/10 text-white font-semibold text-[15px] px-7 py-3.5 rounded-lg transition-all duration-200"
                    >
                      {slide.cta}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Slide counter ── */}
      <div className="absolute bottom-8 right-6 sm:right-10 md:right-20 z-10 text-white/30 text-[12px] font-mono tracking-widest">
        {String(current + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
      </div>

    </section>
  );
}
