"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/seo-data";

const STATS = [
  { value: "10+",    label: "Ans d'expérience" },
  { value: "120+",   label: "Clients satisfaits" },
  { value: "98%",    label: "Taux de satisfaction" },
  { value: "30 min", label: "Délai d'intervention" },
];

export default function AboutSection() {
  return (
    <section className="bg-white pt-12 pb-16 md:pt-16 md:pb-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "#d4ea00" }}>
            <svg className="w-4 h-4" fill="none" stroke="#14200a" viewBox="0 0 24 24" strokeWidth={2.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
          <span className="text-[13px] font-semibold text-ink-500 uppercase tracking-widest">Qui sommes-nous</span>
        </div>

        {/* Heading — centered */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2
            className="font-heading font-black text-ink-900 leading-[1.0] tracking-tight mb-5"
            style={{ fontSize: "clamp(2.4rem, 4.5vw, 4.2rem)" }}
          >
            Votre plombier de confiance<br />à Metz depuis 10 ans.
          </h2>
          <p className="text-ink-500 text-[15px] leading-relaxed">
            Trashi Plombier intervient sur Metz et la Moselle pour tous vos besoins en plomberie et chauffage. Urgences, rénovations, entretien — disponible 24h/24, 7j/7.
          </p>
        </div>

        {/* CTAs — centered */}
        <div className="flex items-center justify-center gap-3 mb-16">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-[14px] transition-opacity hover:opacity-90"
            style={{ background: "#14200a", color: "#d4ea00" }}
          >
            Demander un devis <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={`tel:${BUSINESS.phoneClean}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-[14px] border-2 hover:bg-sand-50 transition-colors"
            style={{ borderColor: "#14200a", color: "#14200a" }}
          >
            {BUSINESS.phone}
          </a>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-sand-200 border-t border-sand-200">
          {STATS.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center justify-center py-10 px-6 text-center">
              <span
                className="font-heading font-black text-ink-900 leading-none mb-2"
                style={{ fontSize: "clamp(2.4rem, 4vw, 3.6rem)" }}
              >
                {value}
              </span>
              <span className="text-ink-400 text-[13px] font-medium">{label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
