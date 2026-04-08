import Link from "next/link";
import Breadcrumb from "./Breadcrumb";
import CTABanner from "./CTABanner";
import InternalLinks from "./InternalLinks";
import {
  ZonePageData,
  getZoneBySlug,
  URGENCE_PAGES,
  PLOMBERIE_PAGES,
  CHAUFFAGE_PAGES,
  BUSINESS,
} from "@/lib/seo-data";

interface ZonePageTemplateProps {
  zone: ZonePageData;
}

export default function ZonePageTemplate({ zone }: ZonePageTemplateProps) {
  const relatedZoneLinks = zone.relatedZoneSlugs
    .map((slug) => {
      const related = getZoneBySlug(slug);
      if (related) {
        return {
          href: `/${related.slug}`,
          label: `${related.type === "plombier" ? "Plombier" : "Chauffagiste"} ${related.city}`,
        };
      }
      return null;
    })
    .filter(Boolean) as { href: string; label: string }[];

  const serviceLinks =
    zone.type === "plombier"
      ? [...URGENCE_PAGES.slice(0, 3), ...PLOMBERIE_PAGES.slice(0, 3)].map(
          (p) => ({ href: `/${p.slug}`, label: p.h1.split("–")[0].trim() })
        )
      : [...CHAUFFAGE_PAGES.slice(0, 4), ...URGENCE_PAGES.slice(3, 5)].map(
          (p) => ({ href: `/${p.slug}`, label: p.h1.split("–")[0].trim() })
        );

  const allLinks = [
    { href: "/", label: "Accueil – Plombier Metz" },
    ...relatedZoneLinks,
    ...serviceLinks,
    { href: "/contact", label: "Contactez-nous" },
  ];

  const localSchema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: `${BUSINESS.name} – ${zone.city}`,
    url: `${BUSINESS.url}/${zone.slug}`,
    telephone: BUSINESS.phoneClean,
    address: {
      "@type": "PostalAddress",
      addressLocality: zone.city,
      postalCode: zone.postalCode,
      addressRegion: "Grand Est",
      addressCountry: "FR",
    },
    areaServed: { "@type": "City", name: zone.city },
    parentOrganization: { "@type": "Plumber", "@id": `${BUSINESS.url}/#organization` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />

      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Zones d'intervention", href: "/#zones" },
          { label: `${zone.type === "plombier" ? "Plombier" : "Chauffagiste"} ${zone.city}` },
        ]}
      />

      <main>
        <section className="bg-brand-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">{zone.h1}</h1>
            <p className="text-xl text-brand-100/70">{zone.seoParagraph}</p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-sand-50 border-2 border-dashed border-sand-300 rounded-lg p-8 text-center">
              <p className="text-ink-700 font-medium text-lg">
                Contenu local SEO à développer pour : {zone.city}
              </p>
              <p className="text-ink-500 mt-2 text-sm">
                Cette section contiendra le contenu optimisé pour le référencement
                local à {zone.city} ({zone.postalCode}).
              </p>
            </div>
          </div>
        </section>

        <CTABanner />
        <InternalLinks links={allLinks} title={`Nos services à ${zone.city}`} />

        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <Link
              href="/"
              className="text-brand-700 hover:text-brand-800 font-medium transition-colors"
            >
              &larr; Retour à l&apos;accueil
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
