import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, ArrowLeft } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import CTABanner from "@/components/CTABanner";
import { REALISATIONS, getRealisationBySlug } from "@/lib/realisations-data";
import { BUSINESS } from "@/lib/seo-data";

export function generateStaticParams() {
  return REALISATIONS.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const r = getRealisationBySlug(params.slug);
  if (!r) return {};
  return {
    title: r.metaTitle,
    description: r.metaDescription,
    alternates: { canonical: `${BUSINESS.url}/realisations/${r.slug}` },
  };
}

const BADGE_COLOR: Record<string, string> = {
  Plomberie: "bg-[#f0f4ff] text-[#0c1c35]",
  Chauffage: "bg-orange-50 text-[#EA580C]",
  Urgence: "bg-blue-50 text-blue-700",
};

export default function RealisationPage({
  params,
}: {
  params: { slug: string };
}) {
  const r = getRealisationBySlug(params.slug);
  if (!r) notFound();

  const related = REALISATIONS.filter(
    (x) => x.slug !== r.slug && x.category === r.category
  ).slice(0, 3);

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Réalisations", href: "/realisations" },
          { label: r.title },
        ]}
      />

      {/* Hero image */}
      <section className="relative h-[55vh] min-h-[360px] bg-ink-900">
        <Image
          src={r.image}
          alt={r.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: "rgba(8,14,24,0.55)" }} />
        <div className="absolute inset-0 flex flex-col justify-end pb-10 px-6 lg:px-8 max-w-[1200px] mx-auto">
          <span className={`inline-block self-start text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-4 ${BADGE_COLOR[r.category]}`}
            style={{ background: "rgba(255,255,255,0.92)" }}
          >
            {r.category}
          </span>
          <h1
            className="font-heading font-black text-white leading-tight mb-3"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
          >
            {r.title}
          </h1>
          <span className="flex items-center gap-1.5 text-white/60 text-[14px]">
            <MapPin className="w-4 h-4" />
            {r.location}
          </span>
        </div>
      </section>

      {/* Content + sidebar */}
      <section className="bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-start">

            {/* Body */}
            <div>
              <Link
                href="/realisations"
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink-400 hover:text-ink-900 transition-colors mb-8"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Retour aux réalisations
              </Link>

              <div className="space-y-5">
                {r.bodyParagraphs.map((para, i) => (
                  <p key={i} className="text-ink-600 text-[16px] leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Sticky sidebar */}
            <div className="sticky top-24 space-y-4">
              {/* Details card */}
              <div className="rounded-2xl border border-sand-200 overflow-hidden shadow-sm">
                <div style={{ background: "#0c1c35" }} className="px-5 py-4">
                  <p className="text-white/50 text-[11px] font-semibold uppercase tracking-widest">
                    Détails du chantier
                  </p>
                </div>
                <div className="bg-white divide-y divide-sand-100">
                  {r.details.map(({ label, value }) => (
                    <div key={label} className="flex justify-between gap-4 px-5 py-3">
                      <span className="text-[13px] text-ink-400 shrink-0">{label}</span>
                      <span className="text-[13px] font-semibold text-ink-900 text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA card */}
              <div className="rounded-2xl border border-sand-200 overflow-hidden shadow-sm">
                <div style={{ background: "#0c1c35" }} className="p-5">
                  <p className="text-white/50 text-[11px] font-semibold uppercase tracking-widest mb-4">
                    Un projet similaire ?
                  </p>
                  <a
                    href={`tel:${BUSINESS.phoneClean}`}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-sm font-bold text-[15px] mb-3 transition-opacity hover:opacity-90"
                    style={{ background: "#EA580C", color: "#ffffff" }}
                  >
                    <Phone className="w-4 h-4" />
                    {BUSINESS.phone}
                  </a>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-sm font-semibold text-[14px] border border-white/20 text-white hover:border-white/40 transition-colors"
                  >
                    Demander un devis gratuit
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Related realisations */}
      {related.length > 0 && (
        <section className="bg-sand-50 py-16">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: "#EA580C" }}>
                <svg className="w-4 h-4" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
              <h2 className="font-heading font-black text-ink-900 text-[20px] uppercase tracking-tight">
                Autres réalisations {r.category}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/realisations/${rel.slug}`}
                  className="bg-white rounded-2xl border border-sand-200 overflow-hidden hover:border-[#EA580C] hover:shadow-md transition-all duration-200 group"
                >
                  <div className="relative h-44 bg-sand-100 overflow-hidden">
                    <Image
                      src={rel.image}
                      alt={rel.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width:768px) 100vw, 400px"
                    />
                  </div>
                  <div className="p-5">
                    <span className="flex items-center gap-1 text-[12px] text-ink-400 mb-2">
                      <MapPin className="w-3 h-3" />
                      {rel.location}
                    </span>
                    <p className="font-heading font-black text-ink-900 text-[15px] leading-tight group-hover:text-[#EA580C] transition-colors">
                      {rel.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
}
