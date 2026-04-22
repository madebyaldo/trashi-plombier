"use client";

import Link from "next/link";
import { useEffect, useState, useRef, useCallback } from "react";
import { BUSINESS, NAVIGATION } from "@/lib/seo-data";

type DropdownId = "plomberie" | "urgence" | "chauffage" | "zones";

export default function Header() {
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [openDropdown, setOpenDropdown]   = useState<DropdownId | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const open  = useCallback((id: DropdownId) => { if (closeTimer.current) clearTimeout(closeTimer.current); setOpenDropdown(id); }, []);
  const close = useCallback(() => { closeTimer.current = setTimeout(() => setOpenDropdown(null), 140); }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.08)]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        <div className="flex items-center h-[68px] gap-8">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="font-heading text-[20px] font-black uppercase tracking-tight text-ink-900">
              Trashi<span className="text-ink-400 font-light mx-0.5">–</span>Plombier
            </span>
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="hidden lg:flex items-center gap-1 flex-1">
            <Link href="/" className="px-3.5 py-2 text-[15px] font-semibold text-ink-900 hover:text-ink-600 transition-colors">
              Accueil
            </Link>

            {(["plomberie", "urgence", "chauffage", "zones"] as const).map(id => (
              <div key={id} className="relative" onMouseEnter={() => open(id)} onMouseLeave={close}>
                <button className="flex items-center gap-1 px-3.5 py-2 text-[15px] font-semibold text-ink-700 hover:text-ink-900 transition-colors">
                  {id === "plomberie" ? "Plomberie" : id === "urgence" ? "Urgence" : id === "chauffage" ? "Chauffage" : "Zones"}
                  <svg
                    className={`w-3 h-3 text-ink-400 transition-transform ${openDropdown === id ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 12 12"
                  >
                    <path d="M3 4.5L6 7.5L9 4.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-150 ${openDropdown === id ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1 pointer-events-none"}`}>
                  <DropdownPanel id={id} />
                </div>
              </div>
            ))}

            <Link href="/realisations" className="px-3.5 py-2 text-[15px] font-semibold text-ink-700 hover:text-ink-900 transition-colors">
              Réalisations
            </Link>
            <Link href="/contact" className="px-3.5 py-2 text-[15px] font-semibold text-ink-700 hover:text-ink-900 transition-colors">
              Contact
            </Link>
          </nav>

          {/* ── Desktop right: phone + devis ── */}
          <div className="hidden lg:flex items-center gap-4 ml-auto shrink-0">
            <a
              href={`tel:${BUSINESS.phoneClean}`}
              className="flex items-center gap-2 text-[15px] font-semibold text-ink-700 hover:text-ink-900 transition-colors"
            >
              <svg className="w-4 h-4 text-ink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              {BUSINESS.phone}
            </a>
            <div className="w-px h-5 bg-sand-200" />
            <Link
              href="/contact"
              className="text-[13.5px] font-semibold px-5 py-[9px] rounded-sm bg-ink-900 text-white hover:bg-ink-800 transition-colors"
            >
              Devis gratuit
            </Link>
          </div>

          {/* ── Mobile ── */}
          <div className="flex lg:hidden items-center gap-2 ml-auto">
            <a
              href={`tel:${BUSINESS.phoneClean}`}
              className="text-[13px] font-semibold px-4 py-2 rounded-full bg-ink-900 text-white"
            >
              Urgence
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-10 h-10 flex items-center justify-center text-ink-900"
              aria-label="Menu"
            >
              {mobileOpen
                ? <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
                : <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M1 4h16M1 9h16M1 14h11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-sand-200 bg-white">
          <div className="max-h-[calc(100dvh-68px)] overflow-y-auto px-6 py-4">
            {(["plomberie", "urgence", "chauffage", "zones"] as const).map(id => {
              const label = id === "plomberie" ? "Plomberie" : id === "urgence" ? "Urgence" : id === "chauffage" ? "Chauffage" : "Zones";
              const items = id === "zones" ? [...NAVIGATION.zones.plombier, ...NAVIGATION.zones.chauffagiste] : NAVIGATION[id];
              return (
                <div key={id} className="border-b border-sand-100">
                  <button
                    onClick={() => setMobileSection(mobileSection === id ? null : id)}
                    className="w-full flex items-center justify-between py-3.5 text-[15px] font-medium text-ink-900"
                  >
                    {label}
                    <svg className={`w-4 h-4 transition-transform ${mobileSection === id ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 12 12">
                      <path d="M3 4.5L6 7.5L9 4.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  {mobileSection === id && (
                    <div className="pb-3 pl-2">
                      {items.map(item => (
                        <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="block py-2 text-[14px] text-ink-500 hover:text-ink-900 transition-colors">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <Link href="/realisations" onClick={() => setMobileOpen(false)} className="block py-3.5 text-[15px] font-medium text-ink-900 border-b border-sand-100">Réalisations</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="block py-3.5 text-[15px] font-medium text-ink-900">Contact</Link>
            <div className="pt-4 pb-2 flex flex-col gap-2">
              <a href={`tel:${BUSINESS.phoneClean}`} className="block text-center bg-ink-900 text-white text-[14px] font-semibold py-3 rounded-full">
                Appeler – {BUSINESS.phone}
              </a>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="block text-center border border-sand-200 text-ink-700 text-[14px] py-2.5 rounded-full">
                Devis gratuit
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/* ── Dropdown panels ── */

function DropdownPanel({ id }: { id: DropdownId }) {
  const cols =
    id === "plomberie" ? [
      { label: "Plomberie", items: NAVIGATION.plomberie.slice(0, 6) },
    ] :
    id === "urgence" ? [
      { label: "Urgence", items: NAVIGATION.urgence.slice(0, 6) },
    ] :
    id === "chauffage" ? [
      { label: "Installation", items: NAVIGATION.chauffage.slice(0, 3) },
      { label: "Entretien",    items: NAVIGATION.chauffage.slice(3, 6) },
    ] : [
      { label: "Metz",    items: NAVIGATION.zones.plombier.slice(0, 4) },
      { label: "Moselle", items: NAVIGATION.zones.plombier.slice(4, 8) },
    ];

  return (
    <div className="bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-sand-200 overflow-hidden" style={{ minWidth: 360 }}>
      <div className="p-5 grid gap-5" style={{ gridTemplateColumns: `repeat(${cols.length}, 1fr)` }}>
        {cols.map(col => (
          <div key={col.label}>
            <p className="text-[11px] font-bold text-ink-400 uppercase tracking-widest mb-3 pb-2 border-b border-sand-200">{col.label}</p>
            {col.items.map(item => (
              <Link key={item.href} href={item.href} className="block py-1.5 text-[13px] text-ink-700 hover:text-copper-600 transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="border-t border-sand-100 px-5 py-3 bg-sand-50">
        <Link href="/contact" className="text-[13px] font-semibold text-ink-700 hover:text-ink-900 transition-colors">
          Demander un devis gratuit →
        </Link>
      </div>
    </div>
  );
}
