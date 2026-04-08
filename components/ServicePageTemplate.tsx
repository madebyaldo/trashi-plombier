import Link from "next/link";
import Breadcrumb from "./Breadcrumb";
import CTABanner from "./CTABanner";
import InternalLinks from "./InternalLinks";
import SchemaService from "./SchemaService";
import { PageData, getPageBySlug, getZoneBySlug, SILO_LABELS } from "@/lib/seo-data";

interface ServicePageTemplateProps {
  page: PageData;
}

export default function ServicePageTemplate({ page }: ServicePageTemplateProps) {
  const relatedLinks = page.relatedSlugs
    .map((slug) => {
      const related = getPageBySlug(slug);
      if (related) return { href: `/${related.slug}`, label: related.h1.split("–")[0].trim() };
      return null;
    })
    .filter(Boolean) as { href: string; label: string }[];

  const localZone = page.localSlug ? getZoneBySlug(page.localSlug) : null;

  const allLinks = [
    { href: "/", label: "Accueil – Plombier Metz" },
    ...relatedLinks,
    ...(localZone
      ? [{ href: `/${localZone.slug}`, label: `${localZone.type === "plombier" ? "Plombier" : "Chauffagiste"} ${localZone.city}` }]
      : []),
    { href: "/contact", label: "Contactez-nous" },
  ];

  return (
    <>
      <SchemaService
        serviceName={page.h1.split("–")[0].trim()}
        description={page.metaDescription}
        slug={page.slug}
      />

      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: SILO_LABELS[page.silo], href: `/#${page.silo}` },
          { label: page.h1.split("–")[0].trim() },
        ]}
      />

      <main>
        <section className="bg-brand-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">{page.h1}</h1>
            <p className="text-xl text-brand-100/70">{page.seoParagraph}</p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-sand-50 border-2 border-dashed border-sand-300 rounded-lg p-8 text-center">
              <p className="text-ink-700 font-medium text-lg">
                Contenu SEO à développer pour : {page.h1}
              </p>
              <p className="text-ink-500 mt-2 text-sm">
                Cette section contiendra le contenu optimisé pour le mot-clé
                principal de cette page.
              </p>
            </div>
          </div>
        </section>

        <CTABanner />
        <InternalLinks links={allLinks} />

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
