import Link from "next/link";
import {
  BUSINESS,
  URGENCE_PAGES,
  PLOMBERIE_PAGES,
  CHAUFFAGE_PAGES,
  ZONE_PAGES,
} from "@/lib/seo-data";

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-ink-400">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="font-heading text-white text-lg font-bold mb-4">
              {BUSINESS.name}
            </h3>
            <p className="text-sm mb-4">
              Plombier et chauffagiste professionnel à Metz. Intervention
              d&apos;urgence 24h/24 et 7j/7.
            </p>
            <p className="text-sm">
              {BUSINESS.address.street}
              <br />
              {BUSINESS.address.postalCode} {BUSINESS.address.city}
            </p>
            <a
              href={`tel:${BUSINESS.phoneClean}`}
              className="block mt-4 text-copper-400 font-bold text-lg hover:text-copper-500 transition-colors"
            >
              {BUSINESS.phone}
            </a>
          </div>

          <div>
            <h3 className="font-heading text-white text-lg font-bold mb-4">Urgence</h3>
            <ul className="space-y-2">
              {URGENCE_PAGES.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/${p.slug}`}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {p.h1.split("–")[0].trim()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-white text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {[...PLOMBERIE_PAGES, ...CHAUFFAGE_PAGES].slice(0, 8).map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/${p.slug}`}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {p.h1.split("–")[0].trim()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-white text-lg font-bold mb-4">
              Zones d&apos;intervention
            </h3>
            <ul className="space-y-2">
              {ZONE_PAGES.map((z) => (
                <li key={z.slug}>
                  <Link
                    href={`/${z.slug}`}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {z.type === "plombier" ? "Plombier" : "Chauffagiste"}{" "}
                    {z.city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-ink-500">
            &copy; {new Date().getFullYear()} {BUSINESS.name}. Tous droits
            réservés.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/mentions-legales" className="hover:text-white transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-white transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="/realisations" className="hover:text-white transition-colors">
              Réalisations
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
