import Link from "next/link";
import { Metadata } from "next";
import { BUSINESS } from "@/lib/seo-data";

export const metadata: Metadata = {
  title: `Nos Réalisations – ${BUSINESS.name} | Plombier & Chauffagiste Metz`,
  description:
    "Découvrez nos réalisations en plomberie et chauffage à Metz et en Moselle. Rénovations, installations, dépannages : nos chantiers en images.",
  alternates: { canonical: `${BUSINESS.url}/realisations` },
};

const REALISATIONS = [
  {
    title: "Rénovation complète salle de bain",
    category: "Plomberie",
    location: "Metz Centre",
    description:
      "Rénovation intégrale d'une salle de bain de 8m² : dépose de l'ancienne baignoire, pose d'une douche à l'italienne, remplacement de toute la robinetterie et mise aux normes de la plomberie.",
    color: "bg-brand-800",
  },
  {
    title: "Remplacement chaudière gaz",
    category: "Chauffage",
    location: "Montigny-lès-Metz",
    description:
      "Dépose d'une ancienne chaudière fioul et installation d'une chaudière gaz à condensation haute performance. Raccordement complet et mise en service.",
    color: "bg-copper-700",
  },
  {
    title: "Dépannage fuite en urgence",
    category: "Urgence",
    location: "Woippy",
    description:
      "Intervention en moins de 25 minutes pour une fuite importante sous évier. Remplacement du siphon et des flexibles, remise en état immédiate.",
    color: "bg-brand-700",
  },
  {
    title: "Installation plancher chauffant",
    category: "Chauffage",
    location: "Augny",
    description:
      "Pose d'un plancher chauffant hydraulique sur 45m² dans une maison neuve. Raccordement à la chaudière existante et réglage de la régulation.",
    color: "bg-copper-600",
  },
  {
    title: "Débouchage canalisation",
    category: "Plomberie",
    location: "Marly",
    description:
      "Débouchage mécanique et hydrocurage d'une canalisation principale obstruée par des racines. Inspection caméra et rapport complet fourni au client.",
    color: "bg-brand-900",
  },
  {
    title: "Installation chauffe-eau thermodynamique",
    category: "Chauffage",
    location: "Metz Queuleu",
    description:
      "Remplacement d'un cumulus électrique par un chauffe-eau thermodynamique de 270L. Économies d'énergie estimées à 60% sur la production d'eau chaude.",
    color: "bg-copper-500",
  },
  {
    title: "Réfection réseau cuivre",
    category: "Plomberie",
    location: "Longeville-lès-Metz",
    description:
      "Remplacement complet du réseau de distribution d'eau en cuivre vétuste par des tuyauteries PER multicouche. Travail propre et garantie 10 ans.",
    color: "bg-brand-800",
  },
  {
    title: "Entretien chaudière annuel",
    category: "Chauffage",
    location: "Talange",
    description:
      "Entretien annuel réglementaire d'une chaudière gaz murale. Nettoyage du brûleur, vérification des organes de sécurité, délivrance du certificat.",
    color: "bg-copper-700",
  },
  {
    title: "Pose WC suspendu et meuble vasque",
    category: "Plomberie",
    location: "Metz Sablon",
    description:
      "Dépose d'un WC au sol, installation d'un bâti-support et d'un WC suspendu. Pose d'un meuble vasque 90cm avec mitigeur et raccordement.",
    color: "bg-brand-700",
  },
];

const CATEGORIES = ["Tous", "Plomberie", "Chauffage", "Urgence"];

export default function RealisationsPage() {
  return (
    <>
      <section className="bg-brand-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-[13px] text-brand-100/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Accueil
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Réalisations</span>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Nos Réalisations
          </h1>
          <p className="text-lg text-brand-100/70 max-w-2xl">
            Découvrez une sélection de nos chantiers en plomberie et chauffage
            réalisés à Metz et dans toute la Moselle. Chaque projet témoigne de
            notre savoir-faire et de notre exigence de qualité.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 mb-12">
            {CATEGORIES.map((cat) => (
              <span
                key={cat}
                className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-colors cursor-default ${
                  cat === "Tous"
                    ? "bg-brand-900 text-white"
                    : "bg-white text-ink-600 border border-sand-200"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REALISATIONS.map((project, i) => (
              <article
                key={i}
                className="bg-white rounded-xl border border-sand-200 overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div
                  className={`${project.color} h-52 flex items-center justify-center`}
                >
                  <div className="text-center text-white/30">
                    <CameraIcon />
                    <p className="text-[12px] mt-2 font-medium">Photo à venir</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                        project.category === "Urgence"
                          ? "bg-copper-50 text-copper-600"
                          : project.category === "Chauffage"
                          ? "bg-copper-50 text-copper-600"
                          : "bg-brand-50 text-brand-700"
                      }`}
                    >
                      {project.category}
                    </span>
                    <span className="text-[12px] text-ink-400">
                      {project.location}
                    </span>
                  </div>
                  <h2 className="font-heading text-lg font-bold text-ink-900 mb-2 group-hover:text-brand-700 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-[14px] text-ink-500 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-900 py-14">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">
            Un projet en tête ?
          </h2>
          <p className="text-brand-100/60 mb-8">
            Contactez-nous pour un devis gratuit et personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BUSINESS.phoneClean}`}
              className="inline-flex items-center justify-center bg-copper-500 hover:bg-copper-600 text-white font-bold px-8 py-3.5 rounded-lg transition-colors"
            >
              {BUSINESS.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors border border-white/15"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function CameraIcon() {
  return (
    <svg
      className="w-10 h-10 mx-auto"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}
