"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { PLOMBERIE_PAGES } from "@/lib/seo-data";

const SERVICE_IMAGES = [
  "/images/plomberie-installation.jpg",
  "/images/plomberie-robinetterie.jpg",
  "/images/plomberie-salle-de-bain.jpg",
  "/images/plomberie-wc.jpg",
  "/images/plomberie-douche.jpg",
  "/images/plomberie-fuite.jpg",
];

export default function PlomberieSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);

  return (
    <section id="plomberie" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12">
          <span className="inline-block text-[12px] font-bold uppercase tracking-widest text-brand-700 mb-3">
            Plomberie
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-ink-900 leading-tight">
            Services de plomberie
          </h2>
        </div>

        {/* Split: list left / image right */}
        <div className="grid lg:grid-cols-[1fr_420px] gap-0 lg:gap-10 items-start">
          {/* List */}
          <div className="border-t-2 border-ink-900">
            {PLOMBERIE_PAGES.map((page, i) => {
              const isActive = hoveredIndex === i;
              return (
                <Link
                  key={page.slug}
                  href={`/${page.slug}`}
                  className="group block border-b border-sand-200 relative"
                  onMouseEnter={() => setHoveredIndex(i)}
                >
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-600 to-brand-800 transition-opacity duration-200 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  <div className="relative flex items-center gap-5 md:gap-8 py-5 md:py-6 pl-5 md:pl-7 pr-4">
                    <span
                      className={`font-heading text-[13px] font-bold transition-colors duration-200 w-5 shrink-0 ${
                        isActive ? "text-brand-600" : "text-ink-200"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="flex-1 min-w-0">
                      <h3
                        className={`font-heading text-lg md:text-xl lg:text-[22px] font-extrabold transition-colors duration-200 tracking-tight ${
                          isActive ? "text-brand-700" : "text-ink-800"
                        }`}
                      >
                        {page.h1.split("–")[0].trim()}
                      </h3>
                      <p
                        className={`text-[13px] leading-relaxed mt-1 transition-all duration-300 ${
                          isActive
                            ? "text-ink-500 max-h-16 opacity-100"
                            : "text-ink-300 max-h-0 opacity-0 overflow-hidden"
                        }`}
                      >
                        {page.metaDescription}
                      </p>
                    </div>

                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                        isActive
                          ? "bg-brand-700 shadow-lg shadow-brand-700/25 scale-110"
                          : "bg-sand-100"
                      }`}
                    >
                      <svg
                        className={`w-4 h-4 transition-all duration-200 ${
                          isActive ? "text-white translate-x-0.5" : "text-ink-300"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Image preview — desktop only */}
          <div className="hidden lg:block relative h-full min-h-[480px] rounded-2xl overflow-hidden">
            {SERVICE_IMAGES.map((src, i) => (
              <div
                key={src}
                className={`absolute inset-0 transition-all duration-500 ease-out ${
                  hoveredIndex === i
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-105"
                }`}
              >
                <Image
                  src={src}
                  alt={PLOMBERIE_PAGES[i].h1.split("–")[0].trim()}
                  fill
                  className="object-cover"
                  sizes="420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 via-transparent to-transparent" />
              </div>
            ))}

            {/* Label overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-block bg-white/90 backdrop-blur-sm text-brand-800 text-[12px] font-bold px-3 py-1.5 rounded-lg">
                {PLOMBERIE_PAGES[hoveredIndex]?.h1.split("–")[0].trim()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
