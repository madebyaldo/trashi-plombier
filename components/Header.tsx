"use client";

import Link from "next/link";
import { useEffect, useState, useRef, useCallback } from "react";
import { BUSINESS, NAVIGATION } from "@/lib/seo-data";

type DropdownId = "urgence" | "plomberie" | "chauffage" | "zones";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownId | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const open = useCallback((id: DropdownId) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(id);
  }, []);

  const close = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  }, []);

  return (
    <>
      {/* ── Top bar ── */}
      <div className="bg-brand-950 h-9 text-[13px] relative z-[60] hidden md:block">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <a
            href={`tel:${BUSINESS.phoneClean}`}
            className="flex items-center gap-2 text-white font-semibold hover:text-copper-400 transition-colors"
          >
            <IconPhone />
            {BUSINESS.phone}
          </a>
          <div className="flex items-center gap-4 text-ink-400">
            <span className="flex items-center gap-1.5">
              <IconPin />
              Metz et alentours
            </span>
            <Dot />
            <span>24h/24 – 7j/7</span>
            <Dot />
            <a
              href={`mailto:${BUSINESS.email}`}
              className="hover:text-white transition-colors"
            >
              {BUSINESS.email}
            </a>
          </div>
        </div>
      </div>

      {/* ── Main nav ── */}
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
          scrolled ? "shadow-[0_2px_12px_rgba(0,0,0,0.08)]" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 lg:h-[68px]">

            {/* Logo */}
            <Link href="/" className="shrink-0">
              <span className="font-heading text-[20px] font-extrabold text-ink-900 tracking-tight">
                TRASHI
              </span>
              <span className="font-heading text-[20px] font-extrabold text-copper-500 tracking-tight ml-1.5">
                PLOMBIER
              </span>
            </Link>

            {/* Desktop center nav */}
            <nav className="hidden lg:flex items-center gap-1 h-full">
              {(["plomberie", "chauffage", "zones"] as const).map((id) => (
                <div
                  key={id}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => open(id)}
                  onMouseLeave={close}
                >
                  <button
                    className={`px-4 h-full flex items-center gap-1 text-[15px] font-semibold transition-colors ${
                      openDropdown === id ? "text-ink-900" : "text-ink-700 hover:text-ink-900"
                    }`}
                  >
                    {id === "plomberie" ? "Plomberie" : id === "chauffage" ? "Chauffage" : "Zones"}
                    <Chevron rotated={openDropdown === id} />
                  </button>

                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-150 ${
                      openDropdown === id
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-1 pointer-events-none"
                    }`}
                  >
                    <DropdownPanel id={id} />
                  </div>
                </div>
              ))}

              <Link
                href="/realisations"
                className="px-4 h-full flex items-center text-[15px] font-semibold text-ink-700 hover:text-ink-900 transition-colors"
              >
                Réalisations
              </Link>
              <Link
                href="/contact"
                className="px-4 h-full flex items-center text-[15px] font-semibold text-ink-700 hover:text-ink-900 transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Desktop right: URGENCE pill + Devis */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Divider */}
              <div className="h-5 w-px bg-sand-200" />

              <div
                className="relative flex items-center"
                onMouseEnter={() => open("urgence")}
                onMouseLeave={close}
              >
                <button
                  className={`flex items-center gap-2.5 px-4 py-[9px] rounded-lg text-[13.5px] font-semibold transition-colors ${
                    openDropdown === "urgence"
                      ? "bg-copper-600 text-white"
                      : "bg-copper-500 text-white hover:bg-copper-600"
                  }`}
                >
                  <PulseDot />
                  Urgence 24h/24
                  <Chevron rotated={openDropdown === "urgence"} />
                </button>

                <div
                  className={`absolute top-full right-0 pt-2 transition-all duration-150 ${
                    openDropdown === "urgence"
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-1 pointer-events-none"
                  }`}
                >
                  <UrgenceDropdown />
                </div>
              </div>

              <Link
                href="/contact"
                className="border border-ink-900 text-ink-900 text-[13.5px] font-semibold px-5 py-[9px] rounded-lg hover:bg-ink-900 hover:text-white transition-colors"
              >
                Devis gratuit
              </Link>
            </div>

            {/* Mobile right */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={`tel:${BUSINESS.phoneClean}`}
                className="flex items-center gap-1.5 bg-copper-500 text-white text-[13px] font-semibold px-4 py-2 rounded-lg"
              >
                <PulseDot small />
                Urgence
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="w-10 h-10 flex items-center justify-center text-ink-900"
                aria-label="Menu"
              >
                {mobileOpen ? <IconClose /> : <IconHamburger />}
              </button>
            </div>
          </div>
        </div>

        {/* ── Mobile panel ── */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-sand-200 bg-white">
            <div className="max-h-[calc(100dvh-64px)] overflow-y-auto">
              <div className="px-4 py-3">

                {/* Urgence block — highlighted at top */}
                <div className="mb-3 rounded-xl bg-copper-50 border border-copper-100 p-3.5">
                  <div className="flex items-center gap-2 mb-2.5">
                    <PulseDot copper />
                    <span className="text-[12px] font-bold text-copper-700 uppercase tracking-widest">
                      Urgence 24h/24
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-x-3">
                    {NAVIGATION.urgence.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="py-1.5 text-[13px] text-copper-700 hover:text-copper-900 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Other sections */}
                {(["plomberie", "chauffage", "zones"] as const).map((id) => {
                  const label = id === "plomberie" ? "Plomberie" : id === "chauffage" ? "Chauffage" : "Zones";
                  const items = getMobileItems(id);
                  return (
                    <div key={id} className="border-b border-sand-100 last:border-0">
                      <button
                        onClick={() => setMobileSection(mobileSection === id ? null : id)}
                        className="w-full flex items-center justify-between py-3.5 text-[15px] font-medium text-ink-900"
                      >
                        {label}
                        <Chevron rotated={mobileSection === id} />
                      </button>
                      {mobileSection === id && (
                        <div className="pb-3 pl-1">
                          {items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                              className="block py-2 text-[14px] text-ink-500 hover:text-ink-900 transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}

                <Link
                  href="/realisations"
                  onClick={() => setMobileOpen(false)}
                  className="block py-3.5 text-[15px] font-medium text-ink-900 border-b border-sand-100"
                >
                  Réalisations
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block py-3.5 text-[15px] font-medium text-ink-900"
                >
                  Contact
                </Link>
              </div>

              <div className="px-4 pb-5 pt-2 border-t border-sand-100 flex flex-col gap-2">
                <a
                  href={`tel:${BUSINESS.phoneClean}`}
                  className="block w-full text-center bg-copper-500 text-white text-[14px] font-semibold py-3 rounded-xl"
                >
                  Appeler – {BUSINESS.phone}
                </a>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center border border-sand-200 text-ink-700 text-[14px] font-medium py-2.5 rounded-xl"
                >
                  Devis gratuit
                </Link>
                <p className="text-center text-[12px] text-ink-400 mt-1">
                  Metz et alentours · 24h/24 – 7j/7
                </p>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

/* ─────────────────────────────────────────
   HELPERS
───────────────────────────────────────── */

function getMobileItems(id: "plomberie" | "chauffage" | "zones") {
  if (id === "zones") return [...NAVIGATION.zones.plombier, ...NAVIGATION.zones.chauffagiste];
  return NAVIGATION[id];
}

/* ─────────────────────────────────────────
   SMALL UI ATOMS
───────────────────────────────────────── */

function Dot() {
  return <span className="text-ink-700">·</span>;
}

function Chevron({ rotated }: { rotated: boolean }) {
  return (
    <svg
      className={`w-3.5 h-3.5 transition-transform duration-150 ${rotated ? "rotate-180" : ""}`}
      viewBox="0 0 12 12"
      fill="none"
    >
      <path
        d="M3 4.5L6 7.5L9 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PulseDot({ small, copper }: { small?: boolean; copper?: boolean }) {
  const size = small ? "h-2 w-2" : "h-2.5 w-2.5";
  const dotSize = small ? "h-2 w-2" : "h-2.5 w-2.5";
  const color = copper ? "bg-copper-500" : "bg-white";
  const ring = copper ? "" : "ring-2 ring-white/30";
  return (
    <span className={`relative flex ${size}`}>
      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${color} opacity-60`} />
      <span className={`relative inline-flex rounded-full ${dotSize} ${color} ${ring}`} />
    </span>
  );
}

function IconPhone() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.01z" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconHamburger() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M2 5H18M2 10H18M2 15H14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

/* ─────────────────────────────────────────
   DROPDOWN SHELL
───────────────────────────────────────── */

function DropdownShell({
  children,
  width = "w-[560px]",
  footer,
}: {
  children: React.ReactNode;
  width?: string;
  footer?: React.ReactNode;
}) {
  return (
    <div className={`${width} bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-sand-200 overflow-hidden`}>
      <div className="p-6">{children}</div>
      {footer && (
        <div className="border-t border-sand-100 px-6 py-3.5 bg-sand-50">
          {footer}
        </div>
      )}
    </div>
  );
}

function ColumnLabel({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-1.5 font-heading text-[12px] font-bold text-ink-400 uppercase tracking-wider mb-3 pb-2 border-b border-sand-200">
      {icon && <span className="text-ink-400">{icon}</span>}
      {children}
    </div>
  );
}

function DropdownLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-2.5 py-[7px] text-[13.5px] text-ink-700 hover:text-copper-600 transition-colors"
    >
      <span className="w-1 h-1 rounded-full bg-sand-300 group-hover:bg-copper-500 transition-colors shrink-0" />
      {label}
    </Link>
  );
}

/* ─────────────────────────────────────────
   DROPDOWN PANELS
───────────────────────────────────────── */

function DropdownPanel({ id }: { id: "plomberie" | "chauffage" | "zones" }) {
  if (id === "plomberie") return <PlomberieDropdown />;
  if (id === "chauffage") return <ChauffageDropdown />;
  return <ZonesDropdown />;
}

function UrgenceDropdown() {
  const col1 = NAVIGATION.urgence.slice(0, 3);
  const col2 = NAVIGATION.urgence.slice(3, 5);
  const col3 = NAVIGATION.urgence.slice(5);

  return (
    <DropdownShell
      footer={
        <a
          href={`tel:${BUSINESS.phoneClean}`}
          className="flex items-center justify-between text-[13px] font-semibold text-copper-600 hover:text-copper-700 transition-colors"
        >
          <span className="flex items-center gap-2">
            <PulseDot copper />
            Appeler maintenant – {BUSINESS.phone}
          </span>
          <span className="text-[11px] text-ink-400 font-normal">Disponible 24h/24</span>
        </a>
      }
    >
      <div className="grid grid-cols-3 gap-6">
        <div>
          <ColumnLabel icon={<IconLightning />}>Dépannage urgent</ColumnLabel>
          {col1.map((item) => (
            <DropdownLink key={item.href} href={item.href} label={item.label} />
          ))}
        </div>
        <div>
          <ColumnLabel icon={<IconFlame />}>Chauffage</ColumnLabel>
          {col2.map((item) => (
            <DropdownLink key={item.href} href={item.href} label={item.label} />
          ))}
        </div>
        <div>
          <ColumnLabel icon={<IconWrench />}>Réparations</ColumnLabel>
          {col3.map((item) => (
            <DropdownLink key={item.href} href={item.href} label={item.label} />
          ))}
        </div>
      </div>
    </DropdownShell>
  );
}

function PlomberieDropdown() {
  const col1 = NAVIGATION.plomberie.slice(0, 3);
  const col2 = NAVIGATION.plomberie.slice(3);

  return (
    <DropdownShell
      footer={
        <Link
          href="/contact"
          className="text-[13px] font-semibold text-brand-700 hover:text-brand-800 transition-colors"
        >
          Demander un devis plomberie &rarr;
        </Link>
      }
    >
      <div className="grid grid-cols-2 gap-6">
        <div>
          <ColumnLabel icon={<IconWrench />}>Installation</ColumnLabel>
          {col1.map((item) => (
            <DropdownLink key={item.href} href={item.href} label={item.label} />
          ))}
        </div>
        <div>
          <ColumnLabel icon={<IconSearch />}>Rénovation &amp; diagnostic</ColumnLabel>
          {col2.map((item) => (
            <DropdownLink key={item.href} href={item.href} label={item.label} />
          ))}
        </div>
      </div>
    </DropdownShell>
  );
}

function ChauffageDropdown() {
  const col1 = NAVIGATION.chauffage.slice(0, 3);
  const col2 = NAVIGATION.chauffage.slice(3, 5);
  const col3 = NAVIGATION.chauffage.slice(5);

  return (
    <DropdownShell
      footer={
        <Link
          href="/entretien-chaudiere-metz"
          className="text-[13px] font-semibold text-brand-700 hover:text-brand-800 transition-colors"
        >
          Contrat entretien chaudière &rarr;
        </Link>
      }
    >
      <div className="grid grid-cols-3 gap-6">
        <div>
          <ColumnLabel icon={<IconFlame />}>Installation</ColumnLabel>
          {col1.map((item) => (
            <DropdownLink key={item.href} href={item.href} label={item.label} />
          ))}
        </div>
        <div>
          <ColumnLabel icon={<IconCheck />}>Entretien</ColumnLabel>
          {col2.map((item) => (
            <DropdownLink key={item.href} href={item.href} label={item.label} />
          ))}
        </div>
        <div>
          <ColumnLabel icon={<IconLightning />}>Dépannage</ColumnLabel>
          {col3.map((item) => (
            <DropdownLink key={item.href} href={item.href} label={item.label} />
          ))}
        </div>
      </div>
    </DropdownShell>
  );
}

function ZonesDropdown() {
  const plom1 = NAVIGATION.zones.plombier.slice(0, 3);
  const plom2 = NAVIGATION.zones.plombier.slice(3, 6);
  const plom3 = NAVIGATION.zones.plombier.slice(6, 9);
  const chauff = NAVIGATION.zones.chauffagiste.slice(0, 3);

  return (
    <DropdownShell
      width="w-[720px]"
      footer={
        <Link
          href="/#zones"
          className="text-[13px] font-semibold text-brand-700 hover:text-brand-800 transition-colors"
        >
          Voir toutes les zones d&apos;intervention &rarr;
        </Link>
      }
    >
      <div className="grid grid-cols-4 gap-6">
        <div>
          <ColumnLabel icon={<IconPin />}>Plombier — Metz</ColumnLabel>
          {plom1.map((item) => (
            <DropdownLink key={item.href} href={item.href} label={item.label} />
          ))}
        </div>
        <div>
          <ColumnLabel icon={<IconPin />}>Plombier — Moselle</ColumnLabel>
          {plom2.map((item) => (
            <DropdownLink key={item.href} href={item.href} label={item.label} />
          ))}
        </div>
        <div>
          <ColumnLabel icon={<IconPin />}>Plombier — Nord</ColumnLabel>
          {plom3.map((item) => (
            <DropdownLink key={item.href} href={item.href} label={item.label} />
          ))}
        </div>
        <div>
          <ColumnLabel icon={<IconFlame />}>Chauffagiste</ColumnLabel>
          {chauff.map((item) => (
            <DropdownLink key={item.href} href={item.href} label={item.label} />
          ))}
        </div>
      </div>
    </DropdownShell>
  );
}

/* ─────────────────────────────────────────
   SMALL ICONS (16×16)
───────────────────────────────────────── */

function IconLightning() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function IconFlame() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}

function IconWrench() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function IconSearch() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="M22 4 12 14.01l-3-3" />
    </svg>
  );
}
