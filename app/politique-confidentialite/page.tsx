import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Politique de Confidentialité – Trashi Plombier",
  description: "Politique de confidentialité du site Trashi Plombier, plombier et chauffagiste à Metz.",
  robots: { index: false, follow: true },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Politique de confidentialité" },
        ]}
      />
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="font-heading text-4xl font-bold text-ink-900 mb-8">Politique de Confidentialité</h1>
          <div className="bg-sand-50 border-2 border-dashed border-sand-300 rounded-lg p-8 text-center">
            <p className="text-ink-700 font-medium">Contenu de la politique de confidentialité à compléter</p>
          </div>
          <div className="mt-8 text-center">
            <Link href="/" className="text-brand-700 hover:text-brand-800 font-medium">&larr; Retour à l&apos;accueil</Link>
          </div>
        </div>
      </main>
    </>
  );
}
