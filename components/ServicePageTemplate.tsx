import Link from "next/link";
import { Clock, Wrench, ShieldCheck, Phone } from "lucide-react";
import Breadcrumb from "./Breadcrumb";
import CTABanner from "./CTABanner";
import InternalLinks from "./InternalLinks";
import SchemaService from "./SchemaService";
import ServiceFAQ from "./ui/service-faq";
import { BUSINESS, PageData, getPageBySlug, getZoneBySlug, SILO_LABELS } from "@/lib/seo-data";

const WHY_US = [
  {
    num: "01",
    icon: Clock,
    title: "Rapidité",
    desc: "Intervention en moins de 30 minutes sur Metz et alentours, 24h/24 et 7j/7, week-ends et jours fériés inclus.",
  },
  {
    num: "02",
    icon: Wrench,
    title: "Expertise",
    desc: "Plus de 10 ans d'expérience. Matériel professionnel haute pression, furet électrique et caméra d'inspection.",
  },
  {
    num: "03",
    icon: ShieldCheck,
    title: "Prix transparent",
    desc: "Devis gratuit avant toute intervention. Tarif annoncé à l'avance, sans frais cachés ni mauvaise surprise.",
  },
];

const TRUST_BADGES = ["Intervention 24h/24", "Arrivée en 30 min", "Metz & Moselle", "Devis gratuit"];

const SIDEBAR_POINTS = [
  "Intervention en 30 min",
  "Disponible 24h/24, 7j/7",
  "Devis gratuit, sans engagement",
  "Techniciens qualifiés",
  "Metz et toute la Moselle",
];

export default function ServicePageTemplate({ page }: { page: PageData }) {
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

  const serviceTitle = page.h1.split("–")[0].trim();

  return (
    <>
      <SchemaService
        serviceName={serviceTitle}
        description={page.metaDescription}
        slug={page.slug}
      />

      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: SILO_LABELS[page.silo], href: `/#${page.silo}` },
          { label: serviceTitle },
        ]}
      />

      {/* Hero */}
      <section style={{ background: "#0c1c35" }} className="py-20 text-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1
              className="font-heading font-black text-white leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              {page.h1}
            </h1>
            <p className="text-white/70 text-[18px] leading-relaxed mb-8">
              {page.seoParagraph}
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href={`tel:${BUSINESS.phoneClean}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm font-bold text-[15px] transition-opacity hover:opacity-90"
                style={{ background: "#EA580C", color: "#ffffff" }}
              >
                <Phone className="w-4 h-4" />
                {BUSINESS.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm font-bold text-[15px] border-2 border-white/30 text-white hover:border-white/60 transition-colors"
              >
                Devis gratuit
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {TRUST_BADGES.map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-white/60 text-[14px]">
                  <span style={{ color: "#EA580C" }} className="font-bold">✓</span>
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12 items-start">

            {/* Prose */}
            <div>
              <h2
                className="font-heading font-black text-ink-900 mb-6"
                style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
              >
                {serviceTitle} : notre expertise à Metz
              </h2>
              <div className="space-y-5">
                {(page.bodyParagraphs ?? []).map((para, i) => (
                  <p key={i} className="text-ink-600 text-[16px] leading-relaxed">
                    {para}
                  </p>
                ))}
                {(!page.bodyParagraphs || page.bodyParagraphs.length === 0) && (
                  <div className="bg-sand-50 border-2 border-dashed border-sand-300 rounded-lg p-8 text-center">
                    <p className="text-ink-500 font-medium">
                      Contenu SEO à développer pour : {page.h1}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Sticky sidebar */}
            <div className="sticky top-24">
              <div className="rounded-2xl border border-sand-200 overflow-hidden shadow-sm">
                <div style={{ background: "#0c1c35" }} className="p-6">
                  <p className="text-white/50 text-[12px] font-semibold uppercase tracking-widest mb-4">
                    Intervention rapide
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
                <div className="p-6 bg-white">
                  {SIDEBAR_POINTS.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-3 py-2.5 border-b border-sand-100 last:border-0"
                    >
                      <span style={{ color: "#EA580C" }} className="font-bold text-[16px] leading-none">
                        ✓
                      </span>
                      <span className="text-ink-700 text-[14px]">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why us */}
      <section style={{ background: "#0c1c35" }} className="py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

          {/* Eyebrow + heading */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: "#EA580C" }}>
                <svg className="w-4 h-4" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
              <span className="text-[13px] font-semibold text-white/50 uppercase tracking-widest">Nos engagements</span>
            </div>
            <h2
              className="font-heading font-black text-white leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
            >
              Pourquoi choisir<br />Trashi Plombier ?
            </h2>
          </div>

          {/* Items — vertical dividers on desktop */}
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {WHY_US.map(({ num, icon: Icon, title, desc }) => (
              <div key={title} className="py-8 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0">
                <span
                  className="font-heading font-black leading-none mb-5 block"
                  style={{ fontSize: "clamp(3rem, 5vw, 4rem)", color: "#EA580C" }}
                >
                  {num}
                </span>
                <div className="flex items-center gap-2 mb-3">
                  <Icon className="w-4 h-4 text-white/40" />
                  <h3 className="font-heading font-black text-white text-[18px]">{title}</h3>
                </div>
                <p className="text-white/60 text-[15px] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ */}
      {page.faqItems && page.faqItems.length > 0 && (
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
            <div className="mb-12 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: "#EA580C" }}>
                  <svg className="w-4 h-4" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
                <span className="text-[13px] font-semibold text-ink-500 uppercase tracking-widest">FAQ</span>
              </div>
              <h2
                className="font-heading font-black text-ink-900 tracking-tight"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)" }}
              >
                Questions fréquentes
              </h2>
            </div>
            <div className="max-w-[1000px] mx-auto">
              <ServiceFAQ items={page.faqItems} />
            </div>
          </div>
        </section>
      )}

      <CTABanner />
      <InternalLinks links={allLinks} />
    </>
  );
}
