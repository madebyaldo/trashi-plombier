"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";
import { REALISATIONS, type RealisationCategory } from "@/lib/realisations-data";

const CATEGORIES = ["Tous", "Plomberie", "Chauffage", "Urgence"] as const;

const BADGE: Record<RealisationCategory, string> = {
  Plomberie: "bg-[#f0f4ff] text-[#0c1c35]",
  Chauffage: "bg-orange-50 text-[#EA580C]",
  Urgence: "bg-blue-50 text-blue-700",
};

export default function RealisationsGrid() {
  const [active, setActive] = useState<string>("Tous");

  const filtered =
    active === "Tous"
      ? REALISATIONS
      : REALISATIONS.filter((r) => r.category === active);

  return (
    <section className="py-16 md:py-20 bg-sand-50">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          {CATEGORIES.map((cat) => {
            const count =
              cat === "Tous"
                ? REALISATIONS.length
                : REALISATIONS.filter((r) => r.category === cat).length;
            const isActive = active === cat;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`inline-flex items-center gap-2 px-5 py-2 rounded-xl text-[13px] font-bold uppercase tracking-wider transition-all duration-150 ${
                  isActive
                    ? "text-white shadow-sm"
                    : "bg-white text-ink-600 border border-sand-200 hover:border-[#EA580C] hover:text-[#EA580C]"
                }`}
                style={isActive ? { background: "#0c1c35" } : {}}
              >
                {cat}
                <span className={`text-[11px] tabular-nums ${isActive ? "text-white/50" : "text-ink-400"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <Link
              key={project.slug}
              href={`/realisations/${project.slug}`}
              className="bg-white rounded-2xl border border-sand-200 overflow-hidden hover:border-[#EA580C] hover:shadow-md transition-all duration-200 group flex flex-col"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden bg-sand-100 shrink-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 400px"
                />
                {/* Category badge over image */}
                <span
                  className={`absolute top-3 left-3 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-sm ${BADGE[project.category]}`}
                  style={{ background: "rgba(255,255,255,0.9)" }}
                >
                  {project.category}
                </span>
              </div>

              {/* Card body */}
              <div className="p-5 flex flex-col flex-1">
                {/* Location */}
                <span className="flex items-center gap-1 text-[12px] text-ink-400 mb-3">
                  <MapPin className="w-3 h-3 shrink-0" />
                  {project.location}
                </span>

                {/* Title */}
                <h2 className="font-heading font-black text-ink-900 text-[17px] leading-tight mb-3 group-hover:text-[#EA580C] transition-colors">
                  {project.title}
                </h2>

                {/* Description */}
                <p className="text-[14px] text-ink-500 leading-relaxed flex-1 line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* CTA */}
                <div
                  className="flex items-center gap-1.5 mt-5 text-[13px] font-semibold transition-colors"
                  style={{ color: "#EA580C" }}
                >
                  Voir le chantier
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-ink-400 text-[15px]">
            Aucune réalisation dans cette catégorie pour l&apos;instant.
          </div>
        )}
      </div>
    </section>
  );
}
