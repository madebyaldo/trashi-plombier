import Link from "next/link";
import { Metadata } from "next";
import { Phone } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import CTABanner from "@/components/CTABanner";
import RealisationsGrid from "@/components/ui/realisations-grid";
import { BUSINESS } from "@/lib/seo-data";

export const metadata: Metadata = {
  title: `Nos Réalisations – ${BUSINESS.name} | Plombier & Chauffagiste Metz`,
  description:
    "Découvrez nos réalisations en plomberie et chauffage à Metz et en Moselle. Rénovations, installations, dépannages : nos chantiers en détail.",
  alternates: { canonical: `${BUSINESS.url}/realisations` },
};

export default function RealisationsPage() {
  return (
    <>
      {/* Hero */}
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Nos réalisations" },
        ]}
      />

      <section style={{ background: "#0c1c35" }} className="py-20 text-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "#EA580C" }}
              >
                <svg className="w-4 h-4" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
              <span className="text-[13px] font-semibold text-white/50 uppercase tracking-widest">
                Nos chantiers
              </span>
            </div>

            <h1
              className="font-heading font-black text-white leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              Nos Réalisations à Metz<br />et en Moselle
            </h1>
            <p className="text-white/70 text-[18px] leading-relaxed mb-8 max-w-2xl">
              Chaque intervention est l&apos;occasion de montrer notre savoir-faire. Plomberie, chauffage, urgences : retrouvez ici une sélection de nos chantiers réalisés dans la région messine.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${BUSINESS.phoneClean}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-[15px] transition-opacity hover:opacity-90"
                style={{ background: "#EA580C", color: "#ffffff" }}
              >
                <Phone className="w-4 h-4" />
                {BUSINESS.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-[15px] border-2 border-white/30 text-white hover:border-white/60 transition-colors"
              >
                Devis gratuit
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filterable grid — client component */}
      <RealisationsGrid />

      <CTABanner />
    </>
  );
}
