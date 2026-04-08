import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { BUSINESS } from "@/lib/seo-data";

export const metadata: Metadata = {
  title: "Contact | Plombier Chauffagiste Metz – Trashi Plombier",
  description:
    "Contactez Trashi Plombier à Metz pour un devis gratuit ou une intervention d'urgence. Téléphone, formulaire en ligne, adresse.",
  alternates: { canonical: "https://www.trashi-plombier.fr/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Contact" },
        ]}
      />

      <main>
        <section className="bg-brand-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl text-brand-100/70">
              Demandez un devis gratuit ou appelez-nous pour une intervention
              d&apos;urgence à Metz.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="font-heading text-2xl font-bold text-ink-900 mb-6">
                  Nos coordonnées
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-100 rounded flex items-center justify-center text-brand-700 shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-ink-900">Téléphone</h3>
                      <a
                        href={`tel:${BUSINESS.phoneClean}`}
                        className="text-copper-500 text-lg font-semibold hover:text-copper-600 transition-colors"
                      >
                        {BUSINESS.phone}
                      </a>
                      <p className="text-sm text-ink-400 mt-1">
                        Disponible 24h/24 – 7j/7
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-100 rounded flex items-center justify-center text-brand-700 shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="2" y="4" width="20" height="16" rx="2" strokeWidth={2} />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 7l-10 5L2 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-ink-900">Email</h3>
                      <a
                        href={`mailto:${BUSINESS.email}`}
                        className="text-brand-700 hover:text-brand-800 transition-colors"
                      >
                        {BUSINESS.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-100 rounded flex items-center justify-center text-brand-700 shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-ink-900">Adresse</h3>
                      <p className="text-ink-500">
                        {BUSINESS.address.street}
                        <br />
                        {BUSINESS.address.postalCode} {BUSINESS.address.city}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-ink-900 mb-6">
                  Demande de devis gratuit
                </h2>
                <div className="bg-sand-50 border-2 border-dashed border-sand-300 rounded-lg p-8 text-center">
                  <p className="text-ink-700 font-medium text-lg">
                    Formulaire de contact à intégrer
                  </p>
                  <p className="text-ink-500 mt-2 text-sm">
                    Champs : Nom, Téléphone, Email, Type de service, Message
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 bg-sand-50">
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
