export const BUSINESS = {
  name: "Trashi Plombier",
  legalName: "Trashi Plombier SARL",
  phone: "078 720 30 23",
  phoneClean: "+41787203023",
  email: "plombier.trashi@gmail.com",
  url: "https://www.trashi-plombier.fr",
  address: {
    street: "XX Rue de Metz",
    city: "Metz",
    postalCode: "57000",
    region: "Grand Est",
    country: "FR",
  },
  geo: { lat: 49.1193, lng: 6.1757 },
  openingHours: "Mo-Su 00:00-23:59",
  priceRange: "€€",
  description:
    "Plombier et chauffagiste à Metz. Dépannage urgence 24h/24, installation, entretien chaudière, rénovation salle de bain. Intervention rapide sur Metz et alentours.",
};

export type SiloType = "urgence" | "plomberie" | "chauffage" | "zones";

export interface PageData {
  slug: string;
  silo: SiloType;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  seoParagraph: string;
  relatedSlugs: string[];
  localSlug?: string;
}

// --------------- SILO 1 — URGENCE ---------------

export const URGENCE_PAGES: PageData[] = [
  {
    slug: "plombier-urgence-metz",
    silo: "urgence",
    h1: "Plombier Urgence à Metz – Intervention Rapide 24h/24",
    metaTitle: "Plombier Urgence Metz | Dépannage 24h/24 – Trashi Plombier",
    metaDescription:
      "Besoin d'un plombier en urgence à Metz ? Intervention rapide 24h/24 et 7j/7. Dépannage fuite d'eau, débouchage, réparation immédiate.",
    seoParagraph:
      "Notre service de plomberie d'urgence à Metz garantit une intervention rapide à votre domicile...",
    relatedSlugs: ["depannage-plomberie-metz", "fuite-eau-urgence-metz"],
    localSlug: "plombier-metz",
  },
  {
    slug: "depannage-plomberie-metz",
    silo: "urgence",
    h1: "Dépannage Plomberie à Metz – Service Rapide",
    metaTitle:
      "Dépannage Plomberie Metz | Intervention Express – Trashi Plombier",
    metaDescription:
      "Dépannage plomberie à Metz : fuite d'eau, canalisation bouchée, robinet cassé. Intervention rapide par un plombier qualifié.",
    seoParagraph:
      "Spécialistes du dépannage plomberie à Metz, nous intervenons rapidement pour résoudre tous vos problèmes...",
    relatedSlugs: ["plombier-urgence-metz", "debouchage-canalisation-metz"],
    localSlug: "plombier-metz",
  },
  {
    slug: "fuite-eau-urgence-metz",
    silo: "urgence",
    h1: "Fuite d'Eau Urgence à Metz – Réparation Immédiate",
    metaTitle:
      "Fuite d'Eau Urgence Metz | Réparation Rapide – Trashi Plombier",
    metaDescription:
      "Fuite d'eau à Metz ? Intervention d'urgence 24h/24 pour stopper et réparer toute fuite. Plombier qualifié, devis gratuit.",
    seoParagraph:
      "Une fuite d'eau nécessite une intervention immédiate pour limiter les dégâts...",
    relatedSlugs: ["plombier-urgence-metz", "recherche-de-fuite-metz"],
    localSlug: "plombier-metz",
  },
  {
    slug: "chauffagiste-urgence-metz",
    silo: "urgence",
    h1: "Chauffagiste Urgence à Metz – Dépannage Chauffage 24h/24",
    metaTitle:
      "Chauffagiste Urgence Metz | Dépannage 24h/24 – Trashi Plombier",
    metaDescription:
      "Panne de chauffage à Metz ? Chauffagiste d'urgence disponible 24h/24. Réparation chaudière, radiateur, chauffe-eau.",
    seoParagraph:
      "Notre service de chauffagiste d'urgence à Metz assure le dépannage rapide de votre installation...",
    relatedSlugs: ["reparation-chaudiere-metz", "depannage-chaudiere-gaz-metz"],
    localSlug: "chauffagiste-metz",
  },
  {
    slug: "reparation-chaudiere-metz",
    silo: "urgence",
    h1: "Réparation Chaudière à Metz – Dépannage Rapide",
    metaTitle: "Réparation Chaudière Metz | Dépannage Express – Trashi Plombier",
    metaDescription:
      "Réparation de chaudière à Metz : gaz, fioul, électrique. Diagnostic rapide et intervention par un chauffagiste certifié.",
    seoParagraph:
      "Votre chaudière est en panne ? Nos chauffagistes à Metz diagnostiquent et réparent tous types de chaudières...",
    relatedSlugs: [
      "chauffagiste-urgence-metz",
      "depannage-chaudiere-gaz-metz",
    ],
    localSlug: "chauffagiste-metz",
  },
  {
    slug: "remplacement-chauffe-eau-metz",
    silo: "urgence",
    h1: "Remplacement Chauffe-Eau à Metz – Installation Rapide",
    metaTitle:
      "Remplacement Chauffe-Eau Metz | Installation – Trashi Plombier",
    metaDescription:
      "Remplacement de chauffe-eau à Metz. Installation rapide, toutes marques. Devis gratuit par un plombier chauffagiste qualifié.",
    seoParagraph:
      "Nous assurons le remplacement de votre chauffe-eau à Metz avec une installation conforme...",
    relatedSlugs: ["pose-chauffe-eau-metz", "entretien-ballon-eau-chaude-metz"],
    localSlug: "plombier-metz",
  },
  {
    slug: "debouchage-canalisation-metz",
    silo: "urgence",
    h1: "Débouchage Canalisation à Metz – Intervention Rapide",
    metaTitle:
      "Débouchage Canalisation Metz | Service Express – Trashi Plombier",
    metaDescription:
      "Canalisation bouchée à Metz ? Débouchage professionnel rapide : évier, WC, douche, égout. Devis gratuit.",
    seoParagraph:
      "Le débouchage de canalisation à Metz est l'une de nos spécialités...",
    relatedSlugs: ["depannage-plomberie-metz", "recherche-de-fuite-metz"],
    localSlug: "plombier-metz",
  },
];

// --------------- SILO 2 — PLOMBERIE ---------------

export const PLOMBERIE_PAGES: PageData[] = [
  {
    slug: "installation-plomberie-metz",
    silo: "plomberie",
    h1: "Installation Plomberie à Metz – Neuf & Rénovation",
    metaTitle:
      "Installation Plomberie Metz | Neuf & Rénovation – Trashi Plombier",
    metaDescription:
      "Installation de plomberie à Metz pour construction neuve et rénovation. Plombier qualifié, devis gratuit.",
    seoParagraph:
      "Nous réalisons l'installation complète de votre plomberie à Metz...",
    relatedSlugs: [
      "renovation-salle-de-bain-metz",
      "remplacement-robinetterie-metz",
    ],
    localSlug: "plombier-metz",
  },
  {
    slug: "remplacement-robinetterie-metz",
    silo: "plomberie",
    h1: "Remplacement Robinetterie à Metz – Toutes Marques",
    metaTitle:
      "Remplacement Robinetterie Metz | Toutes Marques – Trashi Plombier",
    metaDescription:
      "Remplacement de robinetterie à Metz : robinet, mitigeur, mélangeur. Installation par un plombier professionnel.",
    seoParagraph:
      "Besoin de remplacer votre robinetterie à Metz ? Nous installons tous types de robinets...",
    relatedSlugs: [
      "installation-plomberie-metz",
      "renovation-salle-de-bain-metz",
    ],
    localSlug: "plombier-metz",
  },
  {
    slug: "renovation-salle-de-bain-metz",
    silo: "plomberie",
    h1: "Rénovation Salle de Bain à Metz – Devis Gratuit",
    metaTitle:
      "Rénovation Salle de Bain Metz | Devis Gratuit – Trashi Plombier",
    metaDescription:
      "Rénovation complète de salle de bain à Metz. Plomberie, carrelage, douche italienne. Devis gratuit.",
    seoParagraph:
      "Transformez votre salle de bain à Metz grâce à notre service de rénovation complète...",
    relatedSlugs: ["installation-douche-metz", "installation-plomberie-metz"],
    localSlug: "plombier-metz",
  },
  {
    slug: "pose-wc-metz",
    silo: "plomberie",
    h1: "Pose de WC à Metz – Installation & Remplacement",
    metaTitle: "Pose WC Metz | Installation & Remplacement – Trashi Plombier",
    metaDescription:
      "Pose et remplacement de WC à Metz. WC suspendu, WC à poser, broyeur. Installation professionnelle.",
    seoParagraph:
      "Nous assurons la pose de WC à Metz, qu'il s'agisse d'un remplacement ou d'une nouvelle installation...",
    relatedSlugs: [
      "installation-plomberie-metz",
      "renovation-salle-de-bain-metz",
    ],
    localSlug: "plombier-metz",
  },
  {
    slug: "installation-douche-metz",
    silo: "plomberie",
    h1: "Installation Douche à Metz – Douche Italienne & Classique",
    metaTitle:
      "Installation Douche Metz | Douche Italienne – Trashi Plombier",
    metaDescription:
      "Installation de douche à Metz : douche italienne, cabine de douche, receveur. Plombier qualifié.",
    seoParagraph:
      "L'installation de votre douche à Metz est réalisée par nos plombiers qualifiés...",
    relatedSlugs: [
      "renovation-salle-de-bain-metz",
      "remplacement-robinetterie-metz",
    ],
    localSlug: "plombier-metz",
  },
  {
    slug: "recherche-de-fuite-metz",
    silo: "plomberie",
    h1: "Recherche de Fuite à Metz – Détection Professionnelle",
    metaTitle:
      "Recherche de Fuite Metz | Détection Pro – Trashi Plombier",
    metaDescription:
      "Recherche de fuite d'eau à Metz par détection professionnelle. Caméra thermique, gaz traceur. Devis gratuit.",
    seoParagraph:
      "Notre service de recherche de fuite à Metz utilise les technologies les plus avancées...",
    relatedSlugs: ["fuite-eau-urgence-metz", "depannage-plomberie-metz"],
    localSlug: "plombier-metz",
  },
];

// --------------- SILO 3 — CHAUFFAGE ---------------

export const CHAUFFAGE_PAGES: PageData[] = [
  {
    slug: "installation-chauffage-metz",
    silo: "chauffage",
    h1: "Installation Chauffage à Metz – Tous Systèmes",
    metaTitle:
      "Installation Chauffage Metz | Tous Systèmes – Trashi Plombier",
    metaDescription:
      "Installation de chauffage à Metz : chaudière gaz, pompe à chaleur, plancher chauffant. Chauffagiste certifié.",
    seoParagraph:
      "Nous installons tous types de systèmes de chauffage à Metz...",
    relatedSlugs: ["entretien-chaudiere-metz", "pose-chauffe-eau-metz"],
    localSlug: "chauffagiste-metz",
  },
  {
    slug: "entretien-chaudiere-metz",
    silo: "chauffage",
    h1: "Entretien Chaudière à Metz – Contrat Annuel",
    metaTitle: "Entretien Chaudière Metz | Contrat Annuel – Trashi Plombier",
    metaDescription:
      "Entretien annuel de chaudière à Metz. Chaudière gaz, fioul, électrique. Certificat de conformité délivré.",
    seoParagraph:
      "L'entretien annuel de votre chaudière à Metz est obligatoire et essentiel pour votre sécurité...",
    relatedSlugs: [
      "installation-chauffage-metz",
      "depannage-chaudiere-gaz-metz",
    ],
    localSlug: "chauffagiste-metz",
  },
  {
    slug: "pose-chauffe-eau-metz",
    silo: "chauffage",
    h1: "Pose Chauffe-Eau à Metz – Installation Professionnelle",
    metaTitle:
      "Pose Chauffe-Eau Metz | Installation Pro – Trashi Plombier",
    metaDescription:
      "Pose de chauffe-eau à Metz : électrique, thermodynamique, solaire. Installation par un chauffagiste qualifié.",
    seoParagraph:
      "La pose de votre chauffe-eau à Metz est réalisée dans les règles de l'art...",
    relatedSlugs: [
      "remplacement-chauffe-eau-metz",
      "entretien-ballon-eau-chaude-metz",
    ],
    localSlug: "chauffagiste-metz",
  },
  {
    slug: "entretien-ballon-eau-chaude-metz",
    silo: "chauffage",
    h1: "Entretien Ballon d'Eau Chaude à Metz",
    metaTitle:
      "Entretien Ballon Eau Chaude Metz | Maintenance – Trashi Plombier",
    metaDescription:
      "Entretien et maintenance de ballon d'eau chaude à Metz. Détartrage, remplacement anode, vidange. Devis gratuit.",
    seoParagraph:
      "L'entretien régulier de votre ballon d'eau chaude à Metz prolonge sa durée de vie...",
    relatedSlugs: ["pose-chauffe-eau-metz", "remplacement-chauffe-eau-metz"],
    localSlug: "chauffagiste-metz",
  },
  {
    slug: "depannage-chaudiere-gaz-metz",
    silo: "chauffage",
    h1: "Dépannage Chaudière Gaz à Metz – Intervention Rapide",
    metaTitle:
      "Dépannage Chaudière Gaz Metz | Réparation – Trashi Plombier",
    metaDescription:
      "Dépannage de chaudière gaz à Metz. Diagnostic, réparation, mise en service. Chauffagiste certifié PG.",
    seoParagraph:
      "Notre service de dépannage chaudière gaz à Metz intervient rapidement...",
    relatedSlugs: [
      "reparation-chaudiere-metz",
      "depannage-chaudiere-fioul-metz",
    ],
    localSlug: "chauffagiste-metz",
  },
  {
    slug: "depannage-chaudiere-fioul-metz",
    silo: "chauffage",
    h1: "Dépannage Chaudière Fioul à Metz",
    metaTitle:
      "Dépannage Chaudière Fioul Metz | Réparation – Trashi Plombier",
    metaDescription:
      "Dépannage et réparation de chaudière fioul à Metz. Intervention rapide par un chauffagiste expérimenté.",
    seoParagraph:
      "Spécialistes du dépannage de chaudière fioul à Metz, nous intervenons sur toutes les marques...",
    relatedSlugs: [
      "depannage-chaudiere-gaz-metz",
      "depannage-chaudiere-electrique-metz",
    ],
    localSlug: "chauffagiste-metz",
  },
  {
    slug: "depannage-chaudiere-electrique-metz",
    silo: "chauffage",
    h1: "Dépannage Chaudière Électrique à Metz",
    metaTitle:
      "Dépannage Chaudière Électrique Metz | Réparation – Trashi Plombier",
    metaDescription:
      "Dépannage de chaudière électrique à Metz. Diagnostic et réparation rapide. Devis gratuit.",
    seoParagraph:
      "Nous assurons le dépannage de chaudière électrique à Metz avec un diagnostic précis...",
    relatedSlugs: [
      "depannage-chaudiere-fioul-metz",
      "entretien-chaudiere-metz",
    ],
    localSlug: "chauffagiste-metz",
  },
];

// --------------- SILO 4 — ZONES D'INTERVENTION ---------------

export interface ZonePageData {
  slug: string;
  city: string;
  postalCode: string;
  type: "plombier" | "chauffagiste";
  h1: string;
  metaTitle: string;
  metaDescription: string;
  seoParagraph: string;
  relatedZoneSlugs: string[];
}

export const ZONE_PAGES: ZonePageData[] = [
  // Plombier zones
  {
    slug: "plombier-metz",
    city: "Metz",
    postalCode: "57000",
    type: "plombier",
    h1: "Plombier à Metz – Dépannage & Installation",
    metaTitle: "Plombier Metz | Dépannage & Installation – Trashi Plombier",
    metaDescription:
      "Plombier à Metz : dépannage urgent, installation, rénovation. Intervention rapide 24h/24. Devis gratuit.",
    seoParagraph:
      "Votre plombier de confiance à Metz pour tous vos travaux de plomberie...",
    relatedZoneSlugs: ["plombier-montigny-les-metz", "plombier-woippy"],
  },
  {
    slug: "plombier-montigny-les-metz",
    city: "Montigny-lès-Metz",
    postalCode: "57158",
    type: "plombier",
    h1: "Plombier à Montigny-lès-Metz – Intervention Rapide",
    metaTitle:
      "Plombier Montigny-lès-Metz | Dépannage – Trashi Plombier",
    metaDescription:
      "Plombier à Montigny-lès-Metz pour dépannage, installation et rénovation. Intervention rapide.",
    seoParagraph:
      "Nous intervenons à Montigny-lès-Metz pour tous vos besoins en plomberie...",
    relatedZoneSlugs: ["plombier-metz", "plombier-longeville-les-metz"],
  },
  {
    slug: "plombier-woippy",
    city: "Woippy",
    postalCode: "57140",
    type: "plombier",
    h1: "Plombier à Woippy – Service de Proximité",
    metaTitle: "Plombier Woippy | Dépannage & Installation – Trashi Plombier",
    metaDescription:
      "Plombier à Woippy : dépannage urgent, installation, entretien. Service rapide et professionnel.",
    seoParagraph:
      "Notre équipe de plombiers intervient à Woippy pour tous vos travaux...",
    relatedZoneSlugs: ["plombier-metz", "plombier-maizieres-les-metz"],
  },
  {
    slug: "plombier-augny",
    city: "Augny",
    postalCode: "57685",
    type: "plombier",
    h1: "Plombier à Augny – Dépannage & Travaux",
    metaTitle: "Plombier Augny | Dépannage – Trashi Plombier",
    metaDescription:
      "Plombier à Augny pour dépannage, installation et rénovation plomberie. Devis gratuit.",
    seoParagraph:
      "Besoin d'un plombier à Augny ? Nous intervenons rapidement...",
    relatedZoneSlugs: ["plombier-metz", "plombier-marly-moselle"],
  },
  {
    slug: "plombier-marly-moselle",
    city: "Marly",
    postalCode: "57155",
    type: "plombier",
    h1: "Plombier à Marly (Moselle) – Intervention Rapide",
    metaTitle: "Plombier Marly Moselle | Dépannage – Trashi Plombier",
    metaDescription:
      "Plombier à Marly en Moselle : dépannage plomberie, installation, rénovation. Devis gratuit.",
    seoParagraph:
      "Nous proposons nos services de plomberie à Marly et ses environs...",
    relatedZoneSlugs: ["plombier-metz", "plombier-augny"],
  },
  {
    slug: "plombier-longeville-les-metz",
    city: "Longeville-lès-Metz",
    postalCode: "57050",
    type: "plombier",
    h1: "Plombier à Longeville-lès-Metz",
    metaTitle:
      "Plombier Longeville-lès-Metz | Dépannage – Trashi Plombier",
    metaDescription:
      "Plombier à Longeville-lès-Metz pour vos urgences et travaux de plomberie. Intervention rapide.",
    seoParagraph:
      "Notre service de plomberie couvre Longeville-lès-Metz et les alentours...",
    relatedZoneSlugs: ["plombier-metz", "plombier-montigny-les-metz"],
  },
  {
    slug: "plombier-maizieres-les-metz",
    city: "Maizières-lès-Metz",
    postalCode: "57280",
    type: "plombier",
    h1: "Plombier à Maizières-lès-Metz",
    metaTitle:
      "Plombier Maizières-lès-Metz | Dépannage – Trashi Plombier",
    metaDescription:
      "Plombier à Maizières-lès-Metz : dépannage urgence, installation, entretien plomberie.",
    seoParagraph:
      "Nous intervenons à Maizières-lès-Metz pour tous vos besoins en plomberie...",
    relatedZoneSlugs: ["plombier-metz", "plombier-talange"],
  },
  {
    slug: "plombier-talange",
    city: "Talange",
    postalCode: "57525",
    type: "plombier",
    h1: "Plombier à Talange – Service Rapide",
    metaTitle: "Plombier Talange | Dépannage Rapide – Trashi Plombier",
    metaDescription:
      "Plombier à Talange pour dépannage, installation et entretien. Intervention rapide et devis gratuit.",
    seoParagraph:
      "Notre équipe de plombiers se déplace à Talange pour tous vos travaux...",
    relatedZoneSlugs: ["plombier-hagondange", "plombier-maizieres-les-metz"],
  },
  {
    slug: "plombier-hagondange",
    city: "Hagondange",
    postalCode: "57300",
    type: "plombier",
    h1: "Plombier à Hagondange – Dépannage & Installation",
    metaTitle: "Plombier Hagondange | Dépannage – Trashi Plombier",
    metaDescription:
      "Plombier à Hagondange : urgence plomberie, installation, rénovation. Intervention rapide.",
    seoParagraph:
      "Faites appel à notre service de plomberie à Hagondange...",
    relatedZoneSlugs: ["plombier-talange", "plombier-amneville"],
  },
  {
    slug: "plombier-amneville",
    city: "Amnéville",
    postalCode: "57360",
    type: "plombier",
    h1: "Plombier à Amnéville – Intervention Rapide",
    metaTitle: "Plombier Amnéville | Dépannage – Trashi Plombier",
    metaDescription:
      "Plombier à Amnéville pour dépannage, installation et entretien plomberie. Devis gratuit.",
    seoParagraph:
      "Nous intervenons à Amnéville pour tous vos besoins en plomberie...",
    relatedZoneSlugs: ["plombier-hagondange", "plombier-metz"],
  },
  {
    slug: "plombier-thionville",
    city: "Thionville",
    postalCode: "57100",
    type: "plombier",
    h1: "Plombier à Thionville – Dépannage & Travaux",
    metaTitle:
      "Plombier Thionville | Dépannage & Installation – Trashi Plombier",
    metaDescription:
      "Plombier à Thionville : dépannage urgence 24h/24, installation plomberie, rénovation. Devis gratuit.",
    seoParagraph:
      "Notre service de plomberie couvre Thionville et ses environs...",
    relatedZoneSlugs: ["plombier-hagondange", "plombier-metz"],
  },
  // Chauffagiste zones
  {
    slug: "chauffagiste-metz",
    city: "Metz",
    postalCode: "57000",
    type: "chauffagiste",
    h1: "Chauffagiste à Metz – Installation & Dépannage",
    metaTitle:
      "Chauffagiste Metz | Installation & Dépannage – Trashi Plombier",
    metaDescription:
      "Chauffagiste à Metz : installation chauffage, entretien chaudière, dépannage. Intervention rapide.",
    seoParagraph:
      "Votre chauffagiste de confiance à Metz pour l'installation et l'entretien de votre chauffage...",
    relatedZoneSlugs: [
      "chauffagiste-montigny-les-metz",
      "chauffagiste-woippy",
    ],
  },
  {
    slug: "chauffagiste-montigny-les-metz",
    city: "Montigny-lès-Metz",
    postalCode: "57158",
    type: "chauffagiste",
    h1: "Chauffagiste à Montigny-lès-Metz",
    metaTitle:
      "Chauffagiste Montigny-lès-Metz | Dépannage – Trashi Plombier",
    metaDescription:
      "Chauffagiste à Montigny-lès-Metz : installation, entretien et dépannage chauffage. Devis gratuit.",
    seoParagraph:
      "Nous intervenons à Montigny-lès-Metz pour tous vos besoins en chauffage...",
    relatedZoneSlugs: ["chauffagiste-metz", "chauffagiste-augny"],
  },
  {
    slug: "chauffagiste-woippy",
    city: "Woippy",
    postalCode: "57140",
    type: "chauffagiste",
    h1: "Chauffagiste à Woippy – Service de Proximité",
    metaTitle: "Chauffagiste Woippy | Dépannage – Trashi Plombier",
    metaDescription:
      "Chauffagiste à Woippy pour installation, entretien chaudière et dépannage chauffage.",
    seoParagraph:
      "Notre équipe de chauffagistes intervient à Woippy pour tous vos travaux...",
    relatedZoneSlugs: ["chauffagiste-metz", "chauffagiste-montigny-les-metz"],
  },
  {
    slug: "chauffagiste-augny",
    city: "Augny",
    postalCode: "57685",
    type: "chauffagiste",
    h1: "Chauffagiste à Augny – Installation & Entretien",
    metaTitle: "Chauffagiste Augny | Dépannage – Trashi Plombier",
    metaDescription:
      "Chauffagiste à Augny pour installation chauffage, entretien chaudière et dépannage. Devis gratuit.",
    seoParagraph:
      "Besoin d'un chauffagiste à Augny ? Nous intervenons rapidement...",
    relatedZoneSlugs: ["chauffagiste-metz", "chauffagiste-montigny-les-metz"],
  },
  {
    slug: "chauffagiste-marly-moselle",
    city: "Marly",
    postalCode: "57155",
    type: "chauffagiste",
    h1: "Chauffagiste à Marly – Installation & Dépannage",
    metaTitle: "Chauffagiste Marly | Installation & Dépannage – Trashi Plombier",
    metaDescription:
      "Chauffagiste à Marly pour installation chauffage, entretien chaudière et dépannage. Intervention rapide.",
    seoParagraph:
      "Notre équipe de chauffagistes intervient à Marly pour tous vos besoins en chauffage...",
    relatedZoneSlugs: ["chauffagiste-metz", "chauffagiste-augny"],
  },
  {
    slug: "chauffagiste-longeville-les-metz",
    city: "Longeville-lès-Metz",
    postalCode: "57050",
    type: "chauffagiste",
    h1: "Chauffagiste à Longeville-lès-Metz – Entretien & Réparation",
    metaTitle: "Chauffagiste Longeville-lès-Metz | Dépannage – Trashi Plombier",
    metaDescription:
      "Chauffagiste à Longeville-lès-Metz : installation, entretien chaudière et dépannage chauffage. Devis gratuit.",
    seoParagraph:
      "Nous intervenons à Longeville-lès-Metz pour tous vos travaux de chauffage...",
    relatedZoneSlugs: ["chauffagiste-metz", "chauffagiste-montigny-les-metz"],
  },
  {
    slug: "chauffagiste-maizieres-les-metz",
    city: "Maizières-lès-Metz",
    postalCode: "57280",
    type: "chauffagiste",
    h1: "Chauffagiste à Maizières-lès-Metz – Installation & Entretien",
    metaTitle: "Chauffagiste Maizières-lès-Metz | Dépannage – Trashi Plombier",
    metaDescription:
      "Chauffagiste à Maizières-lès-Metz pour installation chauffage, entretien et dépannage chaudière.",
    seoParagraph:
      "Besoin d'un chauffagiste à Maizières-lès-Metz ? Notre équipe intervient rapidement...",
    relatedZoneSlugs: ["chauffagiste-metz", "chauffagiste-hagondange"],
  },
  {
    slug: "chauffagiste-talange",
    city: "Talange",
    postalCode: "57525",
    type: "chauffagiste",
    h1: "Chauffagiste à Talange – Dépannage & Installation",
    metaTitle: "Chauffagiste Talange | Installation & Dépannage – Trashi Plombier",
    metaDescription:
      "Chauffagiste à Talange : installation chauffage, entretien chaudière, dépannage. Devis gratuit.",
    seoParagraph:
      "Votre chauffagiste de confiance à Talange pour l'entretien et l'installation de votre chauffage...",
    relatedZoneSlugs: ["chauffagiste-hagondange", "chauffagiste-maizieres-les-metz"],
  },
  {
    slug: "chauffagiste-hagondange",
    city: "Hagondange",
    postalCode: "57300",
    type: "chauffagiste",
    h1: "Chauffagiste à Hagondange – Entretien & Dépannage",
    metaTitle: "Chauffagiste Hagondange | Dépannage – Trashi Plombier",
    metaDescription:
      "Chauffagiste à Hagondange pour entretien chaudière, installation chauffage et dépannage. Intervention rapide.",
    seoParagraph:
      "Notre service de chauffage couvre Hagondange et ses environs...",
    relatedZoneSlugs: ["chauffagiste-talange", "chauffagiste-amneville"],
  },
  {
    slug: "chauffagiste-amneville",
    city: "Amnéville",
    postalCode: "57360",
    type: "chauffagiste",
    h1: "Chauffagiste à Amnéville – Installation & Entretien",
    metaTitle: "Chauffagiste Amnéville | Installation – Trashi Plombier",
    metaDescription:
      "Chauffagiste à Amnéville : installation chauffage, entretien chaudière, dépannage rapide. Devis gratuit.",
    seoParagraph:
      "Besoin d'un chauffagiste à Amnéville ? Nous intervenons pour tous vos travaux de chauffage...",
    relatedZoneSlugs: ["chauffagiste-hagondange", "chauffagiste-metz"],
  },
  {
    slug: "chauffagiste-thionville",
    city: "Thionville",
    postalCode: "57100",
    type: "chauffagiste",
    h1: "Chauffagiste à Thionville – Installation & Dépannage",
    metaTitle: "Chauffagiste Thionville | Installation & Dépannage – Trashi Plombier",
    metaDescription:
      "Chauffagiste à Thionville : installation chauffage, entretien chaudière, dépannage. Intervention rapide en Moselle.",
    seoParagraph:
      "Notre service de chauffage couvre Thionville et ses environs...",
    relatedZoneSlugs: ["chauffagiste-hagondange", "chauffagiste-metz"],
  },
];

// --------------- AGGREGATE ---------------

export const ALL_SERVICE_PAGES: PageData[] = [
  ...URGENCE_PAGES,
  ...PLOMBERIE_PAGES,
  ...CHAUFFAGE_PAGES,
];

export const ALL_ZONE_PAGES: ZonePageData[] = ZONE_PAGES;

export function getPageBySlug(slug: string): PageData | undefined {
  return ALL_SERVICE_PAGES.find((p) => p.slug === slug);
}

export function getZoneBySlug(slug: string): ZonePageData | undefined {
  return ALL_ZONE_PAGES.find((p) => p.slug === slug);
}

export const SILO_LABELS: Record<SiloType, string> = {
  urgence: "Urgence",
  plomberie: "Services Plomberie",
  chauffage: "Services Chauffage",
  zones: "Zones d'Intervention",
};

export const NAVIGATION = {
  urgence: URGENCE_PAGES.map((p) => ({ href: `/${p.slug}`, label: p.h1.split("–")[0].trim() })),
  plomberie: PLOMBERIE_PAGES.map((p) => ({ href: `/${p.slug}`, label: p.h1.split("–")[0].trim() })),
  chauffage: CHAUFFAGE_PAGES.map((p) => ({ href: `/${p.slug}`, label: p.h1.split("–")[0].trim() })),
  zones: {
    plombier: ZONE_PAGES.filter((z) => z.type === "plombier").map((z) => ({
      href: `/${z.slug}`,
      label: `Plombier ${z.city}`,
    })),
    chauffagiste: ZONE_PAGES.filter((z) => z.type === "chauffagiste").map((z) => ({
      href: `/${z.slug}`,
      label: `Chauffagiste ${z.city}`,
    })),
  },
};
