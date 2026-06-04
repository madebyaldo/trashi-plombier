import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
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
      <section style={{ background: "#0c1c35" }} className="py-20 text-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "#EA580C" }}
              >
                <MessageSquare className="w-4 h-4 text-white" />
              </div>
              <span className="text-[13px] font-semibold text-white/50 uppercase tracking-widest">
                Devis gratuit & urgence
              </span>
            </div>

            <h1
              className="font-heading font-black text-white leading-tight mb-5"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Contactez Trashi Plombier
            </h1>
            <p className="text-white/70 text-[17px] leading-relaxed mb-8 max-w-xl">
              Pour une urgence ou un projet de rénovation à Metz et en Moselle, nous sommes disponibles 24h/24, 7j/7. Réponse rapide garantie.
            </p>

            {/* Big phone CTA */}
            <a
              href={`tel:${BUSINESS.phoneClean}`}
              className="inline-flex items-center gap-3 px-7 py-4 rounded-sm font-black text-[20px] transition-opacity hover:opacity-90"
              style={{ background: "#EA580C", color: "#ffffff" }}
            >
              <Phone className="w-6 h-6" />
              {BUSINESS.phone}
            </a>
            <p className="text-white/40 text-[13px] mt-3">Disponible 24h/24 – 7j/7 – Urgences incluses</p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_420px] gap-14 items-start">

            {/* Left — form */}
            <div>
              <div className="mb-8">
                <h2 className="font-heading font-black text-ink-900 text-[24px] mb-2">
                  Demande de devis gratuit
                </h2>
                <p className="text-ink-500 text-[15px]">
                  Remplissez le formulaire ci-dessous, nous vous rappelons sous 24h.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Right — info cards */}
            <div className="space-y-4 lg:sticky lg:top-24">

              {/* Phone */}
              <div
                className="rounded-2xl p-6 text-white"
                style={{ background: "#0c1c35" }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "#EA580C" }}
                  >
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/50 text-[11px] font-semibold uppercase tracking-widest mb-1">
                      Urgence / Téléphone
                    </p>
                    <a
                      href={`tel:${BUSINESS.phoneClean}`}
                      className="font-black text-[22px] text-white hover:text-[#EA580C] transition-colors"
                    >
                      {BUSINESS.phone}
                    </a>
                    <p className="text-white/50 text-[13px] mt-1">
                      Disponible 24h/24 – 7j/7
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="rounded-2xl border border-sand-200 p-5 bg-white">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "rgba(234,88,12,0.1)" }}
                  >
                    <Mail className="w-5 h-5" style={{ color: "#EA580C" }} />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-ink-400 uppercase tracking-widest mb-1">
                      Email
                    </p>
                    <a
                      href={`mailto:${BUSINESS.email}`}
                      className="text-[15px] font-semibold text-ink-900 hover:text-[#EA580C] transition-colors"
                    >
                      {BUSINESS.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="rounded-2xl border border-sand-200 p-5 bg-white">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "rgba(234,88,12,0.1)" }}
                  >
                    <MapPin className="w-5 h-5" style={{ color: "#EA580C" }} />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-ink-400 uppercase tracking-widest mb-1">
                      Zone d&apos;intervention
                    </p>
                    <p className="text-[15px] font-semibold text-ink-900">
                      Metz &amp; Moselle (57)
                    </p>
                    <p className="text-[13px] text-ink-400 mt-0.5">
                      {BUSINESS.address.postalCode} {BUSINESS.address.city}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="rounded-2xl border border-sand-200 p-5 bg-white">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "rgba(234,88,12,0.1)" }}
                  >
                    <Clock className="w-5 h-5" style={{ color: "#EA580C" }} />
                  </div>
                  <div className="w-full">
                    <p className="text-[11px] font-semibold text-ink-400 uppercase tracking-widest mb-2">
                      Horaires
                    </p>
                    <div className="space-y-1.5">
                      {[
                        ["Lundi – Vendredi", "7h00 – 20h00"],
                        ["Samedi", "8h00 – 18h00"],
                        ["Dimanche & jours fériés", "Urgences uniquement"],
                      ].map(([day, hours]) => (
                        <div key={day} className="flex justify-between gap-4">
                          <span className="text-[13px] text-ink-500">{day}</span>
                          <span className="text-[13px] font-semibold text-ink-900 text-right">{hours}</span>
                        </div>
                      ))}
                    </div>
                    <div
                      className="mt-3 px-3 py-2 rounded-sm text-[12px] font-semibold text-white text-center"
                      style={{ background: "#EA580C" }}
                    >
                      Urgences 24h/24 – 7j/7
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Zone coverage */}
      <section className="bg-sand-50 py-12 border-t border-sand-200">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="shrink-0">
              <p className="text-[11px] font-semibold text-ink-400 uppercase tracking-widest mb-1">
                Zones desservies
              </p>
              <p className="font-heading font-black text-ink-900 text-[18px]">
                Toute la Moselle
              </p>
            </div>
            <div className="w-px h-12 bg-sand-200 hidden md:block" />
            <div className="flex flex-wrap gap-2">
              {ZONES.map((zone) => (
                <span
                  key={zone}
                  className="px-3 py-1.5 rounded-full text-[12px] font-semibold bg-white border border-sand-200 text-ink-700"
                >
                  {zone}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
