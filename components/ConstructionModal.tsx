"use client";

import { useEffect } from "react";
import { BUSINESS } from "@/lib/seo-data";

export default function ConstructionModal() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4" style={{ background: "rgba(0,0,0,0.6)" }}>
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-[480px] w-full overflow-hidden">

        {/* Yellow top bar */}
        <div className="h-2 w-full" style={{ background: "#d4ea00" }} />

        <div className="px-10 py-10 text-center">
          {/* Icon */}
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "#d4ea00" }}>
            <span className="text-2xl">🚧</span>
          </div>

          <h2 className="font-heading font-black text-ink-900 text-[2.4rem] leading-tight mb-3">
            Site en construction
          </h2>
          <p className="text-ink-700 font-semibold text-[17px] leading-relaxed mb-8">
            Notre nouveau site est en cours de finalisation. En attendant, nous sommes disponibles <span style={{ color: "#1a3a2a" }}>24h/24</span> pour toutes vos urgences plomberie et chauffage.
          </p>

          {/* Phone CTA */}
          <a
            href={`tel:${BUSINESS.phoneClean}`}
            className="flex items-center justify-center gap-3 w-full py-4 rounded-xl font-bold text-[16px] mb-4 transition-opacity hover:opacity-90"
            style={{ background: "#d4ea00", color: "#14200a" }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            {BUSINESS.phone}
          </a>

        </div>
      </div>
    </div>
  );
}
