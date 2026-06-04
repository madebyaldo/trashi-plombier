import { Metadata } from "next";
import { Phone } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import CTABanner from "@/components/CTABanner";
import ContactForm from "@/components/ui/contact-form";
import { BUSINESS } from "@/lib/seo-data";

export const metadata: Metadata = {
  title: `Contact – Devis Gratuit | ${BUSINESS.name} | Plombier Metz`,
  description:
    "Contactez Trashi Plombier à Metz pour un devis gratuit ou une intervention d'urgence 24h/24. Formulaire en ligne, téléphone, email.",
  alternates: { canonical: `${BUSINESS.url}/contact` },
};

const ZONES = [
  "Metz", "Woippy", "Montigny-lès-Metz", "Longeville-lès-Metz", "Metz-Sablon",
  "Augny", "Marly", "Amnéville", "Hagondange", "Talange",
  "Maizières-lès-Metz", "Thionville", "Moselle (57)",
];

export default function ContactPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Contact" },
        ]}
      />

      {/* Hero */}
      <section style={{ background: "#0c1c35" }} className="py-16 text-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1
              className="font-heading font-black text-white leading-tight mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Besoin d&apos;un plombier ?<br />On est là.
            </h1>
            <p className="text-white/60 text-[16px] leading-relaxed mb-8 max-w-xl">
              Urgence ou devis, appelez directement ou remplissez le formulaire. On intervient sur Metz et toute la Moselle, 24h/24.
            </p>

            <a
              href={`tel:${BUSINESS.phoneClean}`}
              className="inline-flex items-center gap-3 px-7 py-4 rounded-xl font-black text-[20px] transition-opacity hover:opacity-90"
              style={{ background: "#EA580C", color: "#ffffff" }}
            >
              <Phone className="w-6 h-6" />
              {BUSINESS.phone}
            </a>
            <p className="text-white/40 text-[13px] mt-3">24h/24 – 7j/7 – Urgences incluses</p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_380px] gap-14 items-start">

            {/* Left — form */}
            <div>
              <div className="mb-8">
                <h2 className="font-heading font-black text-ink-900 text-[24px] mb-2">
                  Demande de devis
                </h2>
                <p className="text-ink-400 text-[15px]">
                  On vous rappelle sous 24h. Pour une urgence, appelez directement.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Right — info */}
            <div className="lg:sticky lg:top-24 space-y-8">

              {/* Phone block */}
              <div className="rounded-2xl p-6 text-white" style={{ background: "#0c1c35" }}>
                <p className="text-white/40 text-[12px] font-semibold uppercase tracking-widest mb-3">Urgence / Appel direct</p>
                <a
                  href={`tel:${BUSINESS.phoneClean}`}
                  className="font-black text-[26px] text-white hover:text-[#EA580C] transition-colors block mb-1"
                >
                  {BUSINESS.phone}
                </a>
                <p className="text-white/40 text-[13px]">Disponible 24h/24 – 7j/7</p>
              </div>

              {/* Simple info list */}
              <div className="space-y-5 text-[14px]">
                <div>
                  <p className="text-ink-400 text-[12px] uppercase tracking-wider mb-1">Email</p>
                  <a href={`mailto:${BUSINESS.email}`} className="font-semibold text-ink-900 hover:text-[#EA580C] transition-colors">
                    {BUSINESS.email}
                  </a>
                </div>
                <div className="border-t border-sand-100 pt-5">
                  <p className="text-ink-400 text-[12px] uppercase tracking-wider mb-1">Zone d&apos;intervention</p>
                  <p className="font-semibold text-ink-900">Metz &amp; Moselle (57)</p>
                </div>
                <div className="border-t border-sand-100 pt-5">
                  <p className="text-ink-400 text-[12px] uppercase tracking-wider mb-3">Horaires</p>
                  <div className="space-y-1.5">
                    {[
                      ["Lun – Ven", "7h00 – 20h00"],
                      ["Samedi", "8h00 – 18h00"],
                      ["Dimanche", "Urgences uniquement"],
                    ].map(([day, hours]) => (
                      <div key={day} className="flex justify-between gap-4">
                        <span className="text-ink-500">{day}</span>
                        <span className="font-semibold text-ink-900">{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Zone coverage */}
      <section className="bg-sand-50 py-10 border-t border-sand-200">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <p className="text-[12px] font-semibold text-ink-400 uppercase tracking-widest mb-3">Zones desservies</p>
          <p className="text-ink-600 text-[14px] leading-relaxed">
            {ZONES.join(" · ")}
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
