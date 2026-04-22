import Link from "next/link";
import { BUSINESS, URGENCE_PAGES, PLOMBERIE_PAGES, CHAUFFAGE_PAGES, ZONE_PAGES } from "@/lib/seo-data";

export default function Footer() {
  return (
    <footer className="bg-ink-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="text-[13px]">🏠</span>
              <span className="font-heading text-[17px] font-black text-white tracking-tight uppercase">Trashi</span>
            </div>
            <p className="text-white/40 text-[13px] leading-relaxed mb-5 max-w-xs">
              Plombier et chauffagiste professionnel à Metz. Intervention d&apos;urgence 24h/24 et 7j/7 sur toute la Moselle.
            </p>
            <p className="text-white/30 text-[12px] mb-1">
              {BUSINESS.address.street}<br />{BUSINESS.address.postalCode} {BUSINESS.address.city}
            </p>
            <a href={`tel:${BUSINESS.phoneClean}`} className="inline-block mt-3 font-heading font-bold text-[17px] text-copper-400 hover:text-copper-300 transition-colors">
              {BUSINESS.phone}
            </a>
          </div>

          {/* Urgence */}
          <div>
            <h3 className="text-[11px] font-bold text-white/40 uppercase tracking-widest mb-5">Urgence</h3>
            <ul className="space-y-2.5">
              {URGENCE_PAGES.map((p) => (
                <li key={p.slug}>
                  <Link href={`/${p.slug}`} className="text-[13px] text-white/40 hover:text-white transition-colors">
                    {p.h1.split("–")[0].trim()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[11px] font-bold text-white/40 uppercase tracking-widest mb-5">Services</h3>
            <ul className="space-y-2.5">
              {[...PLOMBERIE_PAGES, ...CHAUFFAGE_PAGES].slice(0, 8).map((p) => (
                <li key={p.slug}>
                  <Link href={`/${p.slug}`} className="text-[13px] text-white/40 hover:text-white transition-colors">
                    {p.h1.split("–")[0].trim()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones */}
          <div>
            <h3 className="text-[11px] font-bold text-white/40 uppercase tracking-widest mb-5">Zones</h3>
            <ul className="space-y-2.5">
              {ZONE_PAGES.map((z) => (
                <li key={z.slug}>
                  <Link href={`/${z.slug}`} className="text-[13px] text-white/40 hover:text-white transition-colors">
                    {z.type === "plombier" ? "Plombier" : "Chauffagiste"} {z.city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-white/20">&copy; {new Date().getFullYear()} {BUSINESS.name}. Tous droits réservés.</p>
          <div className="flex gap-6 text-[12px] text-white/20">
            <Link href="/mentions-legales" className="hover:text-white/50 transition-colors">Mentions légales</Link>
            <Link href="/politique-confidentialite" className="hover:text-white/50 transition-colors">Confidentialité</Link>
            <Link href="/realisations" className="hover:text-white/50 transition-colors">Réalisations</Link>
            <Link href="/contact" className="hover:text-white/50 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
