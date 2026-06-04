export type RealisationCategory = "Plomberie" | "Chauffage" | "Urgence";

export interface Realisation {
  slug: string;
  category: RealisationCategory;
  location: string;
  title: string;
  shortDescription: string;
  image: string;        // cover photo, used in the grid card
  images?: string[];    // all gallery photos, falls back to [image] if not set
  metaTitle: string;
  metaDescription: string;
  bodyParagraphs: string[];
  details: { label: string; value: string }[];
}

export const REALISATIONS: Realisation[] = [
  {
    slug: "renovation-salle-de-bain-metz-centre",
    category: "Plomberie",
    location: "Metz Centre",
    title: "Rénovation complète salle de bain",
    shortDescription:
      "Dépose de l'ancienne baignoire, pose d'une douche à l'italienne, remplacement de toute la robinetterie et mise aux normes de la plomberie.",
    image: "/images/realisations/renovation-salle-de-bain-metz-centre/salle-de-bain-renovee-douche-wc-vasque-robinetterie-or-metz.jpg",
    images: [
      "/images/realisations/renovation-salle-de-bain-metz-centre/avant-travaux-depose-ancienne-salle-de-bain-metz.jpg",
      "/images/realisations/renovation-salle-de-bain-metz-centre/demolition-pose-cloison-plomberie-cuivre-metz.jpg",
      "/images/realisations/renovation-salle-de-bain-metz-centre/travaux-cloison-hydrofuge-carrelage-douche-metz.jpg",
      "/images/realisations/renovation-salle-de-bain-metz-centre/chape-beton-sol-carrelage-mural-douche-metz.jpg",
      "/images/realisations/renovation-salle-de-bain-metz-centre/pose-receveur-douche-carrelage-mural-beige-metz.jpg",
      "/images/realisations/renovation-salle-de-bain-metz-centre/salle-de-bain-renovee-douche-wc-vasque-robinetterie-or-metz.jpg",
    ],
    metaTitle: "Rénovation Salle de Bain Metz – Trashi Plombier",
    metaDescription:
      "Rénovation complète d'une salle de bain à Metz Centre par Trashi Plombier : douche italienne, robinetterie, mise aux normes. Découvrez le chantier.",
    bodyParagraphs: [
      "Notre client, situé en plein cœur de Metz Centre, souhaitait transformer une salle de bain vieillissante en espace moderne et fonctionnel. Après un diagnostic complet de l'installation existante, nous avons proposé un projet de rénovation intégrale sur 3 jours.",
      "La première étape consistait à déposer l'ancienne baignoire encastrée et l'ensemble du carrelage de sol sur 8 m². Nous avons ensuite réalisé l'étanchéité du receveur pour la future douche à l'italienne, avant de procéder à la reprise complète des évacuations et des arrivées d'eau.",
      "La douche à l'italienne a été créée avec un receveur extra-plat à carreler, une paroi en verre trempé 8 mm et un mitigeur thermostatique encastré. L'ensemble de la robinetterie, lavabo, WC et douche, a été remplacé par des modèles chromés de qualité professionnelle.",
      "La mise aux normes électriques de la salle de bain (zones de sécurité, protection différentielle) a été coordonnée avec un électricien partenaire. Le résultat final : une salle de bain neuve, étanche, et conforme aux normes NF C 15-100.",
    ],
    details: [
      { label: "Catégorie", value: "Plomberie" },
      { label: "Ville", value: "Metz Centre" },
      { label: "Durée du chantier", value: "3 jours" },
      { label: "Surface", value: "8 m²" },
      { label: "Prestations", value: "Douche italienne, robinetterie, évacuations" },
    ],
  },
  {
    slug: "remplacement-chaudiere-gaz-montigny",
    category: "Chauffage",
    location: "Montigny-lès-Metz",
    title: "Remplacement chaudière gaz condensation",
    shortDescription:
      "Dépose d'une ancienne chaudière fioul et installation d'une chaudière gaz à condensation haute performance. Raccordement complet et mise en service.",
    image: "/images/realisations/remplacement-chaudiere-gaz-montigny/installation-chaudiere-viessmann-sol-ballon-tampon-cuivre-montigny.jpg",
    images: [
      "/images/realisations/remplacement-chaudiere-gaz-montigny/installation-chaudiere-viessmann-sol-ballon-tampon-cuivre-montigny.jpg",
    ],
    metaTitle: "Remplacement Chaudière Gaz Montigny-lès-Metz – Trashi Plombier",
    metaDescription:
      "Remplacement d'une chaudière fioul par une chaudière gaz à condensation à Montigny-lès-Metz. Économies de 40%. Découvrez le chantier Trashi Plombier.",
    bodyParagraphs: [
      "Cette intervention à Montigny-lès-Metz concernait le remplacement d'une ancienne chaudière fioul datant de plus de 20 ans. L'appareil présentait des fuites et une efficacité thermique très dégradée. Notre client souhaitait passer au gaz naturel pour réduire ses factures de chauffage.",
      "Après une étude thermique du logement (maison de 110 m² avec double vitrage récent), nous avons dimensionné une chaudière gaz à condensation de 24 kW. Ce type d'appareil récupère la chaleur des fumées, atteignant un rendement supérieur à 109 % PCI.",
      "Le chantier a débuté par la dépose de l'ancienne chaudière et la vidange du circuit de chauffage. Nous avons ensuite réalisé le raccordement au réseau gaz existant (après vérification de conformité), posé la nouvelle chaudière, raccordé le circuit chauffage et installé un thermostat connecté.",
      "À la mise en service, les mesures de combustion ont confirmé un rendement optimal. Les économies estimées sur la facture de chauffage sont de l'ordre de 40 % par rapport à l'ancienne installation fioul, avec un retour sur investissement en 5 à 7 ans.",
    ],
    details: [
      { label: "Catégorie", value: "Chauffage" },
      { label: "Ville", value: "Montigny-lès-Metz" },
      { label: "Durée du chantier", value: "1 journée" },
      { label: "Puissance installée", value: "24 kW condensation" },
      { label: "Économies estimées", value: "~40% sur la facture chauffage" },
    ],
  },
  {
    slug: "installation-plancher-chauffant-augny",
    category: "Chauffage",
    location: "Augny",
    title: "Installation plancher chauffant hydraulique",
    shortDescription:
      "Pose d'un plancher chauffant hydraulique sur 45 m² dans une maison neuve. Raccordement à la chaudière existante et réglage de la régulation.",
    image: "/images/realisations/installation-plancher-chauffant-augny/pose-tubes-per-serpentin-plancher-chauffant-hydraulique-augny.jpg",
    images: [
      "/images/realisations/installation-plancher-chauffant-augny/pose-tubes-per-serpentin-plancher-chauffant-hydraulique-augny.jpg",
    ],
    metaTitle: "Installation Plancher Chauffant Augny – Trashi Plombier",
    metaDescription:
      "Pose d'un plancher chauffant hydraulique 45 m² à Augny. Raccordement chaudière et réglage régulation par Trashi Plombier. Découvrez le chantier.",
    bodyParagraphs: [
      "Dans le cadre de la construction d'une maison individuelle à Augny, nous avons réalisé la pose complète d'un plancher chauffant hydraulique (PCH) sur 45 m² comprenant le salon, la salle à manger et le couloir.",
      "Le plancher chauffant hydraulique a été posé sur une dalle isolante de 10 cm (R > 2,5 m².K/W). Les tubes PER de 16 mm ont été déroulés en escargot avec un espacement de 15 cm pour assurer une homogénéité parfaite de la température en surface.",
      "Le raccordement au collecteur de distribution a ensuite été réalisé, avec équilibrage hydraulique de chaque boucle pour garantir une température uniforme dans chaque zone. La chaudière à condensation existante a été réglée avec une loi d'eau adaptée aux basses températures du plancher chauffant (35 °C maxi).",
      "La régulation a été configurée avec deux thermostats zonés : un pour le séjour, un pour la circulation. La mise en eau et le test de pression (6 bars pendant 2 heures) ont validé l'étanchéité parfaite de l'installation avant la coulée de la chape.",
    ],
    details: [
      { label: "Catégorie", value: "Chauffage" },
      { label: "Ville", value: "Augny" },
      { label: "Surface", value: "45 m²" },
      { label: "Type", value: "Plancher chauffant hydraulique" },
      { label: "Durée du chantier", value: "2 jours" },
    ],
  },
  {
    slug: "chauffe-eau-thermodynamique-metz-queuleu",
    category: "Chauffage",
    location: "Metz Queuleu",
    title: "Pose chauffe-eau thermodynamique 270 L",
    shortDescription:
      "Remplacement d'un cumulus électrique par un chauffe-eau thermodynamique de 270 L. Économies d'énergie estimées à 60 % sur l'eau chaude sanitaire.",
    image: "/images/realisations/chauffe-eau-thermodynamique-metz-queuleu/installation-chaudiere-viessmann-ballon-tampon-metz-queuleu.jpg",
    images: [
      "/images/realisations/chauffe-eau-thermodynamique-metz-queuleu/installation-chaudiere-viessmann-ballon-tampon-metz-queuleu.jpg",
    ],
    metaTitle: "Chauffe-eau Thermodynamique Metz Queuleu – Trashi Plombier",
    metaDescription:
      "Installation d'un chauffe-eau thermodynamique 270 L à Metz Queuleu. Économies 60% sur l'eau chaude. Trashi Plombier, devis gratuit.",
    bodyParagraphs: [
      "Notre client de Metz Queuleu disposait d'un vieux cumulus électrique de 200 L arrivé en fin de vie. Face à des factures d'électricité élevées, il souhaitait s'orienter vers une solution plus économique. Nous lui avons recommandé un chauffe-eau thermodynamique de 270 L.",
      "Le chauffe-eau thermodynamique fonctionne comme une pompe à chaleur : il capte les calories de l'air ambiant pour chauffer l'eau sanitaire. Son coefficient de performance (COP) de 3,2 signifie qu'il consomme 3 fois moins d'électricité qu'un chauffe-eau classique pour produire la même quantité d'eau chaude.",
      "L'installation a nécessité le démontage de l'ancien cumulus, la pose du nouveau chauffe-eau thermodynamique dans le garage (air non confiné), le raccordement aux arrivées et départs d'eau chaude sanitaire, et le branchement électrique sur un circuit dédié.",
      "Après mise en service et réglage de la température (55 °C pour la sécurité anti-légionelle), les économies estimées sur la facture d'eau chaude sanitaire atteignent 60 %, soit environ 250 € par an pour une famille de 4 personnes. L'investissement est amorti en moins de 4 ans.",
    ],
    details: [
      { label: "Catégorie", value: "Chauffage" },
      { label: "Ville", value: "Metz Queuleu" },
      { label: "Volume", value: "270 L thermodynamique" },
      { label: "COP", value: "3,2" },
      { label: "Économies estimées", value: "~60% sur l'eau chaude" },
    ],
  },
  {
    slug: "refection-reseau-per-longeville",
    category: "Plomberie",
    location: "Longeville-lès-Metz",
    title: "Réfection réseau PER multicouche",
    shortDescription:
      "Remplacement complet du réseau de distribution d'eau en cuivre vétuste par des tuyauteries PER multicouche. Travail soigné, garantie 10 ans.",
    image: "/images/realisations/refection-reseau-per-longeville/raccordement-tuyauterie-per-radiateur-fonte-longeville-metz.jpg",
    images: [
      "/images/realisations/refection-reseau-per-longeville/raccordement-tuyauterie-per-radiateur-fonte-longeville-metz.jpg",
    ],
    metaTitle: "Réfection Réseau Plomberie Longeville-lès-Metz – Trashi Plombier",
    metaDescription:
      "Remplacement réseau cuivre vétuste par PER multicouche à Longeville-lès-Metz. Garantie 10 ans. Trashi Plombier.",
    bodyParagraphs: [
      "L'appartement de notre client à Longeville-lès-Metz datait des années 1970. Le réseau de distribution d'eau en cuivre présentait de multiples micro-fuites dues à la corrosion, et une pression insuffisante aux points de puisage les plus éloignés.",
      "Après un diagnostic complet des réseaux, nous avons proposé un remplacement intégral par des tuyauteries PER (polyéthylène réticulé) multicouche. Ce matériau est insensible à la corrosion, résiste aux coups de bélier et offre une durée de vie supérieure à 50 ans.",
      "Le chantier s'est déroulé sur 2 jours. Nous avons remplacé l'ensemble des colonnes montantes et distributions horizontales en PER multicouche gainé, avec passage en saignées minimales pour préserver au maximum les finitions existantes. Tous les raccords ont été réalisés à sertissage pour garantir l'étanchéité.",
      "Une fois le réseau mis en eau, un test de pression à 6 bars pendant 2 heures a validé la conformité de l'installation. La garantie de 10 ans couvre l'ensemble des matériaux et de la main-d'œuvre. La pression dans tous les robinets est désormais homogène.",
    ],
    details: [
      { label: "Catégorie", value: "Plomberie" },
      { label: "Ville", value: "Longeville-lès-Metz" },
      { label: "Matériau", value: "PER multicouche gainé" },
      { label: "Durée du chantier", value: "2 jours" },
      { label: "Garantie", value: "10 ans matériaux + main-d'œuvre" },
    ],
  },
  {
    slug: "entretien-chaudiere-talange",
    category: "Chauffage",
    location: "Talange",
    title: "Entretien annuel chaudière gaz murale",
    shortDescription:
      "Entretien annuel réglementaire d'une chaudière gaz murale. Nettoyage du brûleur, vérification des organes de sécurité, délivrance du certificat.",
    image: "/images/realisations/entretien-chaudiere-talange/installation-ballon-eau-chaude-adoucisseur-eau-talange.jpg",
    images: [
      "/images/realisations/entretien-chaudiere-talange/installation-ballon-eau-chaude-adoucisseur-eau-talange.jpg",
    ],
    metaTitle: "Entretien Chaudière Gaz Talange – Trashi Plombier",
    metaDescription:
      "Entretien annuel obligatoire chaudière gaz murale à Talange par Trashi Plombier. Attestation délivrée. Prise de RDV rapide.",
    bodyParagraphs: [
      "L'entretien annuel de chaudière est une obligation légale en France (décret du 9 juin 2009) pour tous les appareils de puissance comprise entre 4 et 400 kW. Notre intervention à Talange portait sur une chaudière gaz murale à condensation de 24 kW installée depuis 6 ans.",
      "Notre technicien certifié a réalisé l'entretien complet en 1h30 : démontage et nettoyage du brûleur, nettoyage de l'échangeur thermique, vérification et réglage de l'électrode d'allumage, contrôle de l'analyseur de combustion (CO, CO2, température fumées, rendement).",
      "Les organes de sécurité ont été contrôlés un par un : thermostat de sécurité haute limite, pressostat eau, soupape de sécurité, vase d'expansion. Le circuit hydraulique a été vérifié (pression, purge), ainsi que le conduit de fumées pour l'absence d'obstruction.",
      "À l'issue de l'intervention, l'attestation d'entretien conforme a été remise au client. Celle-ci est exigée par les assurances habitation en cas de sinistre. La prochaine date d'entretien recommandée a été notée sur l'étiquette apposée sur la chaudière.",
    ],
    details: [
      { label: "Catégorie", value: "Chauffage" },
      { label: "Ville", value: "Talange" },
      { label: "Type d'appareil", value: "Chaudière gaz condensation 24 kW" },
      { label: "Durée", value: "1h30" },
      { label: "Document remis", value: "Attestation d'entretien réglementaire" },
    ],
  },
  {
    slug: "pose-wc-suspendu-metz-sablon",
    category: "Plomberie",
    location: "Metz Sablon",
    title: "Pose WC suspendu & meuble vasque",
    shortDescription:
      "Dépose d'un WC au sol, installation d'un bâti-support et d'un WC suspendu. Pose d'un meuble vasque 90 cm avec mitigeur et raccordement.",
    image: "/images/realisations/pose-wc-suspendu-metz-sablon/wc-suspendu-bati-support-carrelage-marbre-noir-metz-sablon.jpg",
    images: [
      "/images/realisations/pose-wc-suspendu-metz-sablon/wc-suspendu-bati-support-carrelage-marbre-noir-metz-sablon.jpg",
    ],
    metaTitle: "Pose WC Suspendu Metz Sablon – Trashi Plombier",
    metaDescription:
      "Installation WC suspendu sur bâti-support et meuble vasque 90 cm à Metz Sablon. Trashi Plombier, devis gratuit.",
    bodyParagraphs: [
      "Notre client du quartier Sablon à Metz souhaitait moderniser ses toilettes en remplaçant un WC au sol vieillissant par un WC suspendu, et ajouter un meuble vasque pour créer un vrai espace de salle d'eau.",
      "Après dépose du WC existant, nous avons scellé dans la maçonnerie un bâti-support pour WC suspendu (réservoir encastré). Cette opération demande précision et rigueur : le bâti doit être parfaitement d'aplomb et ancré solidement pour supporter un poids de 400 kg minimum.",
      "Le WC suspendu a ensuite été fixé sur le bâti, avec raccordement de l'évacuation en DN100 et des arrivées d'eau de la chasse. Nous avons posé la plaque de déclenchement encastrée. Parallèlement, le meuble vasque 90 cm (vasque encastrée + colonne) a été installé avec mitigeur mécanique et raccordements.",
      "Toutes les fixations ont été vérifiées et les joints d'étanchéité testés. L'espace final est épuré et fonctionnel, avec un accès simplifié au sol pour le nettoyage.",
    ],
    details: [
      { label: "Catégorie", value: "Plomberie" },
      { label: "Ville", value: "Metz Sablon" },
      { label: "Durée du chantier", value: "1 journée" },
      { label: "Prestations", value: "Bâti-support, WC suspendu, meuble vasque" },
      { label: "Garantie", value: "2 ans pièces et main-d'œuvre" },
    ],
  },
  {
    slug: "installation-pac-hagondange",
    category: "Chauffage",
    location: "Hagondange",
    title: "Installation pompe à chaleur air/eau",
    shortDescription:
      "Pose d'une PAC air/eau pour une maison de 120 m². Dossier MaPrimeRénov' géré par nos soins. COP de 4,2 mesuré à la mise en service.",
    image: "/images/realisations/installation-pac-hagondange/pompe-chaleur-chaffoteaux-inverter-dc-unite-exterieure-hagondange.jpg",
    images: [
      "/images/realisations/installation-pac-hagondange/pompe-chaleur-chaffoteaux-inverter-dc-unite-exterieure-hagondange.jpg",
    ],
    metaTitle: "Installation Pompe à Chaleur Hagondange – Trashi Plombier",
    metaDescription:
      "Installation PAC air/eau maison 120 m² à Hagondange. COP 4,2 – dossier MaPrimeRénov' géré. Trashi Plombier.",
    bodyParagraphs: [
      "Cette réalisation à Hagondange concernait le remplacement d'une ancienne chaudière gaz par une pompe à chaleur air/eau pour une maison individuelle de 120 m² bien isolée (RT 2005). L'objectif : réduire drastiquement la facture de chauffage et valoriser le bien immobilier.",
      "Nous avons réalisé une étude thermique complète du bâtiment avant de dimensionner la PAC à 9 kW monobloc. Le réseau de chauffage existant (radiateurs basse température) a été vérifié et adapté pour fonctionner à 45 °C, température compatible avec le fonctionnement optimal d'une PAC.",
      "L'installation comprenait : pose de l'unité extérieure sur plots anti-vibratoires, raccordement hydraulique au circuit de chauffage avec disconnecteur et vase d'expansion, installation d'un ballon tampon de 100 L, et mise en place de la régulation connectée avec sonde extérieure.",
      "Nous avons intégralement géré le dossier MaPrimeRénov' et les certificats d'économie d'énergie (CEE), permettant à notre client d'obtenir une subvention couvrant 35 % du coût de l'installation. Le COP mesuré à la mise en service était de 4,2, la PAC produit 4,2 fois plus d'énergie qu'elle n'en consomme.",
    ],
    details: [
      { label: "Catégorie", value: "Chauffage" },
      { label: "Ville", value: "Hagondange" },
      { label: "Surface chauffée", value: "120 m²" },
      { label: "Puissance PAC", value: "9 kW monobloc air/eau" },
      { label: "COP mesuré", value: "4,2" },
      { label: "Subvention obtenue", value: "35% via MaPrimeRénov'" },
    ],
  },
  {
    slug: "installation-douche-italienne-thionville",
    category: "Plomberie",
    location: "Thionville",
    title: "Création douche italienne premium",
    shortDescription:
      "Création d'une douche à l'italienne avec receveur extra-plat, paroi en verre trempé et mitigeur thermostatique. Finitions carrelées au sol.",
    image: "/images/realisations/installation-douche-italienne-thionville/salle-de-bain-baignoire-ilot-douche-carrelage-marbre-noir-thionville.jpg",
    images: [
      "/images/realisations/installation-douche-italienne-thionville/pose-receveur-douche-extra-plat-cloison-hydrofuge-thionville.jpg",
      "/images/realisations/installation-douche-italienne-thionville/pose-carrelage-marbre-noir-colonne-douche-thionville.jpg",
      "/images/realisations/installation-douche-italienne-thionville/salle-de-bain-baignoire-ilot-douche-carrelage-marbre-noir-thionville.jpg",
    ],
    metaTitle: "Installation Douche Italienne Thionville – Trashi Plombier",
    metaDescription:
      "Création d'une douche italienne premium à Thionville : receveur extra-plat, paroi verre trempé, mitigeur thermostatique. Trashi Plombier.",
    bodyParagraphs: [
      "Notre client de Thionville souhaitait remplacer une douche bac acrylique vieillissante par une douche à l'italienne moderne dans sa salle de bain de 6 m². Ce type de transformation apporte confort et modernité tout en valorisant significativement le bien.",
      "Le chantier a débuté par la dépose complète de l'ancienne douche (bac, paroi, carrelage mural). Nous avons réalisé l'étanchéité en système SPEC (système de protection à l'eau sous carrelage) sur toute la zone de douche, garantissant une imperméabilité parfaite sur 10 ans.",
      "Le receveur extra-plat à carreler de 90 × 120 cm a été mis à niveau avec un siphon de sol à grille linéaire. La paroi en verre trempé 8 mm (traitement anti-calcaire) a été fixée sur profilés aluminium anodisé. Le mitigeur thermostatique encastré assure une température constante et une sécurité anti-brûlure.",
      "La pose du carrelage grand format (60 × 120 cm) en sol et mur a été réalisée avec joints minimaux pour un rendu épuré. L'ensemble de la douche italienne est désormais à la fois esthétique, facile d'entretien et d'une solidité éprouvée.",
    ],
    details: [
      { label: "Catégorie", value: "Plomberie" },
      { label: "Ville", value: "Thionville" },
      { label: "Dimensions", value: "90 × 120 cm" },
      { label: "Durée du chantier", value: "2 jours" },
      { label: "Garantie étanchéité", value: "10 ans SPEC" },
    ],
  },
];

export function getRealisationBySlug(slug: string): Realisation | undefined {
  return REALISATIONS.find((r) => r.slug === slug);
}
