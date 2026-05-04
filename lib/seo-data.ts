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
  bodyParagraphs?: string[];
  faqItems?: { q: string; a: string }[];
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
      "Trashi Plombier est votre spécialiste de la plomberie d'urgence à Metz et en Moselle, disponible 24h/24, 7j/7, avec une intervention garantie en moins de 30 minutes pour stopper toute fuite, déboucher vos canalisations ou réparer une installation défaillante.",
    relatedSlugs: ["depannage-plomberie-metz", "fuite-eau-urgence-metz"],
    localSlug: "plombier-metz",
    bodyParagraphs: [
      "Quand une urgence plomberie survient à Metz — fuite d'eau soudaine, canalisation bouchée, WC hors service ou tuyau éclaté — chaque minute compte. Trashi Plombier met à votre disposition une équipe de plombiers qualifiés, disponibles 24h/24 et 7j/7, jours fériés inclus. Nos techniciens sont positionnés stratégiquement pour couvrir Metz et les communes voisines comme Montigny-lès-Metz, Woippy et Longeville-lès-Metz, garantissant une arrivée sur place en moins de 30 minutes après votre appel.",
      "Nos interventions d'urgence couvrent l'ensemble des pannes et sinistres plomberie : réparation de fuites sur tuyaux apparents ou encastrés, débouchage de canalisations par haute pression ou furet électrique, remplacement de joints défectueux, réparation ou remplacement de robinetterie cassée, et remise en service des installations sanitaires. Chaque technicien arrive avec un véhicule entièrement équipé en pièces de rechange courantes, pour résoudre la grande majorité des problèmes en une seule intervention.",
      "Avec plus de 10 ans d'expérience dans la plomberie d'urgence à Metz et plus de 120 clients satisfaits, Trashi Plombier affiche un taux de satisfaction de 98 %. Notre engagement : un diagnostic transparent, un devis gratuit avant toute intervention, et des tarifs clairs sans surprises. Nous intervenons aussi bien chez les particuliers que dans les commerces, immeubles et établissements professionnels sur tout le secteur de la Moselle.",
      "En cas d'urgence plomberie, voici les bons réflexes à avoir en attendant notre arrivée : coupez immédiatement l'alimentation en eau au robinet d'arrêt général (généralement situé sous l'évier ou au compteur), placez des serviettes ou des récipients pour limiter les dégâts des eaux, et prenez des photos pour votre assurance. Notre équipe vous guidera également par téléphone avant d'arriver, afin de minimiser les dommages causés par la fuite.",
      "Trashi Plombier intervient sur l'intégralité du secteur messin : Metz intramuros, Marly, Augny, Talange, Hagondange, Amnéville, Maizières-lès-Metz et Thionville. Appelez-nous dès maintenant au 078 720 30 23 — notre équipe d'urgence décroche à toute heure et dépêche un plombier qualifié chez vous sans délai. Devis gratuit, sans engagement.",
    ],
    faqItems: [
      {
        q: "En combien de temps un plombier d'urgence arrive-t-il à Metz ?",
        a: "Trashi Plombier s'engage à intervenir en moins de 30 minutes sur Metz et les communes proches. Nos techniciens sont disponibles 24h/24, 7j/7, y compris les nuits, week-ends et jours fériés.",
      },
      {
        q: "Quelles urgences plomberie prenez-vous en charge ?",
        a: "Nous traitons toutes les urgences : fuite d'eau, tuyau éclaté, canalisation bouchée, WC hors service, robinet cassé, cumulus en panne, pression d'eau anormale. Si vous avez un doute, appelez-nous — nous évaluons la situation gratuitement par téléphone.",
      },
      {
        q: "Le devis d'urgence est-il gratuit ?",
        a: "Oui, le diagnostic et le devis sont toujours gratuits et sans engagement. Vous connaissez le tarif exact avant que nos techniciens commencent les travaux. Aucune mauvaise surprise sur la facture.",
      },
      {
        q: "Que faire en attendant le plombier d'urgence ?",
        a: "Coupez l'alimentation en eau au robinet d'arrêt général de votre logement, éponger le surplus d'eau pour limiter les dégâts, et prenez des photos de la fuite pour votre déclaration d'assurance. Notre technicien vous guide également par téléphone à l'appel.",
      },
      {
        q: "Intervenez-vous uniquement à Metz ou aussi dans les communes alentour ?",
        a: "Nous couvrons tout le bassin messin : Metz, Montigny-lès-Metz, Woippy, Augny, Marly, Longeville-lès-Metz, Maizières-lès-Metz, Talange, Hagondange, Amnéville et Thionville. Le délai d'intervention reste inférieur à 30 minutes sur l'ensemble de cette zone.",
      },
    ],
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
      "Trashi Plombier assure le dépannage plomberie à Metz en moins de 30 minutes, 24h/24 et 7j/7 : robinet cassé, fuite, canalisation bouchée ou WC défaillant — nos plombiers qualifiés diagnostiquent et réparent chaque panne au premier passage.",
    relatedSlugs: ["plombier-urgence-metz", "debouchage-canalisation-metz"],
    localSlug: "plombier-metz",
    bodyParagraphs: [
      "Le dépannage plomberie à Metz recouvre une large gamme de pannes qui peuvent survenir à n'importe quel moment : robinet qui fuit ou cassé, joint de siphon défaillant, tuyau percé, WC qui déborde, pression d'eau insuffisante, ou encore chasse d'eau hors service. Trashi Plombier traite chacun de ces problèmes avec réactivité et professionnalisme. Nos plombiers interviennent avec des véhicules équipés de l'outillage et des pièces détachées les plus courants, pour régler la situation en une seule visite dans la grande majorité des cas.",
      "Notre approche du dépannage repose sur un diagnostic rigoureux avant toute intervention. Avant de réaliser quoi que ce soit, notre technicien identifie précisément l'origine du problème — qu'il soit apparent ou caché — et vous explique clairement la nature de la panne et les solutions disponibles. Vous recevez un devis gratuit et transparent avant le début des travaux, sans frais cachés. Cette démarche nous permet d'afficher un taux de satisfaction de 98 % auprès de nos 120+ clients en Moselle.",
      "Parmi les dépannages plomberie les plus fréquents que nous réalisons à Metz et dans les communes proches comme Woippy, Montigny-lès-Metz et Marly : remplacement de cartouche de mitigeur, réparation de fuite sous évier, changement de joint de robinet, déblocage de vanne d'arrêt grippée, réparation de siphon de douche, et remplacement de mécanisme de WC. Ces interventions courantes sont souvent résolues en 30 à 60 minutes.",
      "Pour les dépannages plus complexes — détection de fuite encastrée, réparation de canalisation enterrée, remplacement de tronçon de tuyauterie — Trashi Plombier dispose du matériel spécialisé nécessaire : caméra d'inspection, détecteur acoustique, équipement de soudure et de coupage. Nous intervenons sur toutes les tuyauteries : cuivre, PER, multicouche, acier, PVC. Aucun dépannage n'est trop complexe pour notre équipe forte de 10 ans d'expérience.",
      "Disponible 24h/24, 7j/7, Trashi Plombier est le partenaire de dépannage plomberie de référence sur Metz et la Moselle. Notre numéro d'urgence 078 720 30 23 est accessible à toute heure. Que vous soyez à Metz, Thionville, Hagondange ou Amnéville, un technicien qualifié peut être chez vous en moins de 30 minutes. Contactez-nous pour un devis gratuit et sans engagement.",
    ],
    faqItems: [
      {
        q: "Quels types de dépannages plomberie réalisez-vous à Metz ?",
        a: "Nous prenons en charge tous les dépannages plomberie : fuites d'eau, robinets cassés, canalisations bouchées, WC défaillants, siphons à remplacer, joints détériorés, problèmes de pression d'eau, et réparations de tuyauterie. Nos techniciens disposent du matériel pour traiter chaque situation.",
      },
      {
        q: "Combien coûte un dépannage plomberie à Metz ?",
        a: "Le tarif dépend de la nature et de la complexité de la panne. Le diagnostic et le devis sont gratuits. Nous vous communiquons le prix avant de commencer, sans surprise. Les interventions simples (changement de joint, remplacement de cartouche) commencent à partir de 60 €.",
      },
      {
        q: "Pouvez-vous intervenir le week-end et les jours fériés ?",
        a: "Oui, Trashi Plombier est disponible 7j/7, 24h/24, y compris les week-ends et jours fériés. Nos tarifs de dépannage nocturne et de week-end vous sont communiqués de manière transparente avant l'intervention.",
      },
      {
        q: "Intervenez-vous pour les copropriétés et les professionnels ?",
        a: "Absolument. Nous réalisons des dépannages plomberie pour les particuliers, les copropriétés, les syndics d'immeubles et les professionnels (commerces, restaurants, bureaux). Des contrats d'entretien peuvent être établis pour les clients récurrents.",
      },
      {
        q: "Comment puis-je limiter les dégâts avant l'arrivée du plombier ?",
        a: "Fermez le robinet d'arrêt général de votre logement (souvent sous l'évier ou au compteur) pour couper l'alimentation en eau. Éponger l'eau visible et placez des serviettes. Photographiez les dégâts pour votre assurance. Appelez-nous : nos techniciens vous guident aussi par téléphone.",
      },
    ],
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
      "Une fuite d'eau à Metz exige une réaction immédiate : Trashi Plombier intervient en urgence en moins de 30 minutes, 24h/24 et 7j/7, pour localiser, stopper et réparer toute fuite avant que les dégâts des eaux ne s'aggravent.",
    relatedSlugs: ["plombier-urgence-metz", "recherche-de-fuite-metz"],
    localSlug: "plombier-metz",
    bodyParagraphs: [
      "Une fuite d'eau non traitée peut rapidement provoquer des dégâts considérables : planchers endommagés, murs humides, moisissures, court-circuit électrique et sinistres coûteux à déclarer en assurance. À Metz et dans toute la Moselle, Trashi Plombier répond aux appels d'urgence fuite d'eau 24 heures sur 24, 7 jours sur 7. Notre objectif est simple : être chez vous en moins de 30 minutes et stopper la fuite avant qu'elle ne se transforme en catastrophe.",
      "Les fuites d'eau se présentent sous de multiples formes. Les plus visibles — robinet qui goûte, joint de siphon percé, raccord de tuyau qui suinte — sont détectées facilement. Les fuites cachées, en revanche, peuvent rester invisibles pendant des semaines : conduites encastrées dans les murs, canalisations sous dalle, joints de baignoire ou de douche dégradés. Trashi Plombier utilise des équipements de détection spécialisés (caméra thermique, corrélateur acoustique, gaz traceur) pour localiser ces fuites invisibles sans démolition inutile.",
      "Nos plombiers prennent en charge tous les types de fuites à Metz et alentours — Montigny-lès-Metz, Longeville-lès-Metz, Augny — qu'il s'agisse d'une fuite sur robinetterie, sur joint de baignoire ou de douche, sur raccordement de lave-linge ou lave-vaisselle, sur canalisation d'alimentation ou d'évacuation, ou encore sur le circuit de chauffage. Chaque réparation est réalisée avec des matériaux de qualité et garantie dans le temps.",
      "En cas de fuite importante, pensez à prévenir votre assurance habitation le plus tôt possible : la déclaration de dégâts des eaux doit généralement être faite dans les 5 jours ouvrés. Notre équipe peut vous fournir un rapport d'intervention détaillé pour faciliter vos démarches. Nous travaillons régulièrement avec les compagnies d'assurance sur Metz et la Moselle et connaissons leurs exigences documentaires.",
      "Pour les fuites récurrentes ou les logements anciens, une inspection préventive de votre réseau d'eau est vivement recommandée. Trashi Plombier propose un diagnostic complet de vos canalisations à Metz : vérification de la pression, contrôle des joints et raccords, détection de micro-fuites. Ce service vous permet d'anticiper les pannes futures et d'éviter des urgences coûteuses. Appelez-nous au 078 720 30 23, devis gratuit et sans engagement.",
    ],
    faqItems: [
      {
        q: "Comment savoir si j'ai une fuite d'eau cachée chez moi à Metz ?",
        a: "Plusieurs signes peuvent indiquer une fuite cachée : une facture d'eau anormalement élevée, des taches d'humidité sur les murs ou plafonds, un compteur d'eau qui tourne en l'absence de toute utilisation, ou des moisissures inexpliquées. Trashi Plombier réalise une détection de fuite non destructive à Metz pour identifier précisément l'origine.",
      },
      {
        q: "Que faire immédiatement en cas de fuite d'eau urgente ?",
        a: "Fermez le robinet d'arrêt général de votre logement pour couper l'alimentation en eau. Si la fuite est proche d'installations électriques, coupez le disjoncteur de la zone concernée. Appelez Trashi Plombier au 078 720 30 23 — nous intervenons en moins de 30 minutes sur Metz et environs.",
      },
      {
        q: "La réparation d'une fuite d'eau est-elle prise en charge par l'assurance ?",
        a: "Les dégâts causés par une fuite d'eau sont généralement couverts par votre assurance habitation dans le cadre de la garantie dégâts des eaux. Vous devez déclarer le sinistre sous 5 jours ouvrés. Trashi Plombier vous fournit un rapport d'intervention complet pour faciliter votre déclaration.",
      },
      {
        q: "Réparez-vous les fuites sur les canalisations encastrées ?",
        a: "Oui. Grâce à nos équipements de détection (caméra thermique, corrélateur acoustique), nous localisons précisément les fuites dans les murs ou sous les dalles, minimisant ainsi les travaux de démolition. Nous réparons ensuite la canalisation endommagée et remettons en état la zone.",
      },
      {
        q: "Intervenez-vous la nuit pour une fuite d'eau à Metz ?",
        a: "Oui, notre service de dépannage fuite d'eau est disponible 24h/24, y compris la nuit et les week-ends. Une fuite nocturne est traitée avec la même réactivité qu'en journée. Nos tarifs de nuit vous sont communiqués avant toute intervention.",
      },
    ],
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
      "Trashi Plombier met à votre disposition un chauffagiste d'urgence à Metz, disponible 24h/24 et 7j/7, pour dépanner votre chaudière, radiateur ou chauffe-eau en moins de 30 minutes — même en plein hiver, la nuit ou le week-end.",
    relatedSlugs: ["reparation-chaudiere-metz", "depannage-chaudiere-gaz-metz"],
    localSlug: "chauffagiste-metz",
    bodyParagraphs: [
      "Une panne de chauffage en plein hiver à Metz est une urgence absolue, surtout avec des températures qui descendent régulièrement sous zéro en Moselle. Trashi Plombier dispose d'une équipe de chauffagistes d'urgence opérationnels 24h/24, 7j/7, prêts à intervenir dans les 30 minutes sur Metz et les communes environnantes : Montigny-lès-Metz, Marly, Woippy, Maizières-lès-Metz et Thionville. Aucune panne de chauffage ne vous laisse dans le froid.",
      "Les pannes de chauffage que nous traitons en urgence sont nombreuses : chaudière gaz qui ne démarre plus, chaudière fioul avec brûleur en défaut, chauffe-eau électrique hors service, radiateurs qui ne chauffent pas ou chauffent de façon inégale, plancher chauffant défaillant, et problèmes de pression dans le circuit de chauffage. Nos chauffagistes identifient rapidement l'origine de la panne grâce à un diagnostic précis et procèdent à la réparation immédiate, dans la mesure où les pièces nécessaires sont disponibles en stock.",
      "Fort de plus de 10 ans d'expérience, Trashi Plombier intervient sur toutes les marques et tous les types de chaudières : Chaffoteaux, Vaillant, Buderus, Viessmann, De Dietrich, Atlantic, Saunier Duval, Elm Leblanc. Nos techniciens sont certifiés pour les travaux sur les installations gaz (certification PG obligatoire), garantissant une intervention conforme aux normes de sécurité en vigueur. La sécurité de votre famille est notre priorité absolue.",
      "En attendant notre arrivée pour un dépannage chauffage urgent, quelques vérifications simples peuvent vous aider : contrôlez que le disjoncteur de votre chaudière n'a pas sauté, vérifiez la pression du circuit de chauffage sur le manomètre (elle doit être entre 1 et 2 bars), et assurez-vous que le thermostat d'ambiance est correctement réglé. Si vous sentez une odeur de gaz, quittez le logement, ne touchez à aucun interrupteur, et appelez immédiatement le 0800 47 33 33 (urgence gaz GRDF).",
      "Trashi Plombier assure également des contrats d'entretien annuel pour prévenir les pannes de chauffage — l'entretien régulier de votre chaudière réduit considérablement le risque de panne en hiver. Nous réalisons ces entretiens sur Metz et toute la Moselle avec remise d'un certificat de conformité. Contactez-nous au 078 720 30 23 pour un devis gratuit, urgence ou entretien.",
    ],
    faqItems: [
      {
        q: "Mon chauffage est tombé en panne la nuit, que faire ?",
        a: "Appelez Trashi Plombier au 078 720 30 23 — notre service d'urgence chauffage est disponible 24h/24, y compris la nuit. Un chauffagiste qualifié intervient chez vous à Metz en moins de 30 minutes. En attendant, vérifiez la pression du circuit (manomètre) et que le disjoncteur de la chaudière n'a pas sauté.",
      },
      {
        q: "Intervenez-vous sur toutes les marques de chaudières ?",
        a: "Oui, nos chauffagistes interviennent sur toutes les marques : Vaillant, Viessmann, Chaffoteaux, De Dietrich, Atlantic, Saunier Duval, Buderus, Elm Leblanc et bien d'autres. Nous travaillons sur chaudières gaz, fioul et électriques.",
      },
      {
        q: "Quelle est la différence entre un dépannage chauffage et un entretien annuel ?",
        a: "Le dépannage intervient quand votre chauffage est en panne et nécessite une réparation immédiate. L'entretien annuel est une visite préventive obligatoire (pour les chaudières gaz et fioul) qui permet d'éviter les pannes et de maintenir le bon rendement de votre installation. Trashi Plombier propose les deux services.",
      },
      {
        q: "Ma chaudière affiche un code d'erreur, est-ce urgent ?",
        a: "Un code d'erreur sur votre chaudière signale une anomalie détectée par l'électronique de l'appareil. Certains codes indiquent une panne grave (fuite de gaz, surchauffe, défaut électronique) qui nécessite une intervention immédiate. D'autres sont des alertes mineures. Appelez-nous : nous vous aidons à interpréter le code par téléphone.",
      },
      {
        q: "Le dépannage chauffage d'urgence est-il plus cher ?",
        a: "Une majoration tarifaire s'applique pour les interventions nocturnes, les week-ends et jours fériés — c'est une pratique standard. Nos tarifs d'urgence vous sont communiqués de manière transparente avant l'intervention. Le devis reste gratuit et sans engagement.",
      },
    ],
  },
  {
    slug: "reparation-chaudiere-metz",
    silo: "urgence",
    h1: "Réparation Chaudière à Metz – Dépannage Rapide",
    metaTitle: "Réparation Chaudière Metz | Dépannage Express – Trashi Plombier",
    metaDescription:
      "Réparation de chaudière à Metz : gaz, fioul, électrique. Diagnostic rapide et intervention par un chauffagiste certifié.",
    seoParagraph:
      "Votre chaudière est en panne à Metz ? Trashi Plombier diagnostique et répare tous types de chaudières — gaz, fioul et électrique — avec une intervention rapide, des techniciens certifiés et un devis gratuit avant chaque réparation.",
    relatedSlugs: [
      "chauffagiste-urgence-metz",
      "depannage-chaudiere-gaz-metz",
    ],
    localSlug: "chauffagiste-metz",
    bodyParagraphs: [
      "La réparation de chaudière à Metz est l'une des interventions les plus fréquentes de notre équipe, surtout lors des mois d'hiver où les équipements sont mis à rude épreuve. Trashi Plombier intervient sur tous les types de chaudières — à condensation gaz, fioul à basse température, chaudières électriques et à micro-cogénération — sur Metz et l'ensemble de la Moselle, y compris Hagondange, Talange et Amnéville. Nos chauffagistes disposent d'une expérience de plus de 10 ans sur toutes les marques du marché.",
      "Le diagnostic est la première étape indispensable d'une bonne réparation de chaudière. Notre technicien commence toujours par une analyse complète de votre installation : lecture des codes d'erreur affichés, contrôle de la pression, vérification de l'allumeur et des électrodes, test du brûleur, inspection de l'échangeur thermique, et mesure du rendement de combustion. Ce diagnostic approfondi nous permet d'identifier précisément la pièce défaillante et d'éviter les réparations inutiles.",
      "Nous réparons l'ensemble des composants d'une chaudière : échangeur de chaleur, brûleur, corps de chauffe, électronique de régulation, pompe de circulation, vase d'expansion, soupape de sécurité, résistances électriques, et tous les joints et raccords. Nos véhicules d'intervention sont équipés de pièces détachées pour les pannes les plus courantes, nous permettant de réaliser la grande majorité des réparations de chaudière en une seule visite.",
      "Toutes nos réparations de chaudières à Metz sont réalisées dans le strict respect des normes en vigueur (DTU, NF, CE). Nos techniciens sont certifiés pour les travaux sur installations gaz (certification PG), une habilitation obligatoire que tout particulier doit exiger de son chauffagiste. À l'issue de chaque intervention, nous effectuons un test complet de bon fonctionnement et vous remettons un rapport d'intervention détaillé.",
      "Si votre chaudière est ancienne (plus de 15 ans) et nécessite des réparations répétées, il peut être plus économique de la remplacer. Trashi Plombier vous conseille objectivement : notre technicien évalue le coût de la réparation par rapport à celui d'un remplacement et vous présente les aides disponibles comme MaPrimeRénov' pour le financement d'une nouvelle chaudière à condensation ou d'une pompe à chaleur. Appelez-nous au 078 720 30 23 pour un devis gratuit.",
    ],
    faqItems: [
      {
        q: "Combien coûte la réparation d'une chaudière à Metz ?",
        a: "Le coût dépend de la panne et des pièces à remplacer. Le diagnostic et le devis sont gratuits. Une réparation simple (remplacement de joint, réinitialisation électronique) peut coûter entre 80 et 150 €. Le remplacement d'un échangeur ou d'un brûleur est plus onéreux. Nous vous donnons le prix exact avant de commencer.",
      },
      {
        q: "Réparez-vous toutes les marques de chaudières ?",
        a: "Oui, Trashi Plombier intervient sur toutes les grandes marques : Vaillant, Viessmann, De Dietrich, Chaffoteaux, Buderus, Atlantic, Saunier Duval, Elm Leblanc, Bosch, Frisquet, et bien d'autres. Nos techniciens sont formés sur les dernières technologies de chaudières à condensation.",
      },
      {
        q: "Vaut-il mieux réparer ou remplacer une vieille chaudière ?",
        a: "Si votre chaudière a plus de 15 ans ou nécessite des réparations fréquentes et coûteuses, le remplacement est souvent plus rentable. Une nouvelle chaudière à condensation permet des économies d'énergie de 20 à 30 %, et des aides comme MaPrimeRénov' peuvent financer une partie du remplacement. Nous vous conseillons sans engagement.",
      },
      {
        q: "Quelle est la durée d'une réparation de chaudière ?",
        a: "La plupart des réparations de chaudière se réalisent en 1 à 2 heures. Certaines pannes nécessitant des pièces sur commande peuvent prendre plus longtemps. Dans ce cas, nous vous proposons des solutions de chauffage temporaire si nécessaire.",
      },
      {
        q: "La réparation de chaudière est-elle garantie ?",
        a: "Oui, toutes nos réparations sont garanties. Les pièces remplacées bénéficient de la garantie fabricant et notre main-d'œuvre est garantie. En cas de problème après notre intervention, nous revenons sans frais supplémentaires.",
      },
    ],
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
      "Trashi Plombier assure le remplacement de votre chauffe-eau à Metz dans les règles de l'art : dépose de l'ancien appareil, installation conforme du nouveau modèle, raccordement hydraulique et électrique, avec un devis gratuit et la possibilité de bénéficier de MaPrimeRénov' pour les équipements éligibles.",
    relatedSlugs: ["pose-chauffe-eau-metz", "entretien-ballon-eau-chaude-metz"],
    localSlug: "plombier-metz",
    bodyParagraphs: [
      "Le remplacement d'un chauffe-eau à Metz devient nécessaire lorsque l'appareil présente des signes de vieillissement avancé : eau tiède même au réglage maximum, temps de chauffe anormalement long, corrosion visible sur la cuve, fuites au niveau du ballon, ou panne irréparable de la résistance. La durée de vie moyenne d'un chauffe-eau électrique est de 10 à 15 ans. Trashi Plombier prend en charge l'ensemble de l'opération : dépose de l'ancien appareil, installation du nouveau, raccordements et mise en service.",
      "Nous proposons le remplacement de tous types de chauffe-eaux à Metz et dans les communes proches comme Marly, Augny et Woippy. Le chauffe-eau électrique à résistance est le plus répandu et le moins coûteux à l'achat. Le chauffe-eau thermodynamique (pompe à chaleur sur air) offre des économies d'énergie de 60 à 70 % et est éligible à MaPrimeRénov'. Le chauffe-eau solaire individuel (CESI) est la solution la plus écologique pour les maisons avec toiture bien exposée.",
      "L'aide MaPrimeRénov' peut financer une partie significative du remplacement de votre chauffe-eau par un modèle thermodynamique ou solaire. Trashi Plombier vous aide dans ces démarches administratives : nous vérifions votre éligibilité, vous conseillons sur le choix du matériel, et nous nous assurons que l'installation respecte les critères techniques exigés pour l'obtention de l'aide. Notre équipe connaît parfaitement ces dispositifs et accompagne régulièrement des clients messinois dans leurs demandes.",
      "Chaque remplacement de chauffe-eau réalisé par Trashi Plombier à Metz comprend : la dépose et l'évacuation de l'ancien appareil, la vérification et l'adaptation des raccordements existants, la pose et la fixation murale du nouvel équipement, le raccordement hydraulique (eau froide/eau chaude) et électrique, la mise en service avec réglage de la température, et un test de fonctionnement complet avant de quitter les lieux.",
      "Trashi Plombier travaille avec les meilleures marques du marché — Atlantic, Thermor, Chaffoteaux, Ariston, Bosch, Viessmann — et vous conseille sur le choix de la capacité adaptée à votre foyer (50 à 300 litres selon le nombre d'occupants). Nous intervenons sur Metz, Thionville, Hagondange, Amnéville et tout le secteur de la Moselle. Devis gratuit et sans engagement au 078 720 30 23.",
    ],
    faqItems: [
      {
        q: "Combien coûte le remplacement d'un chauffe-eau à Metz ?",
        a: "Le coût total dépend du type de chauffe-eau choisi et de la complexité de l'installation. Un remplacement standard chauffe-eau électrique (fourniture + pose) est généralement entre 400 et 800 €. Un modèle thermodynamique coûte plus à l'achat, mais des aides comme MaPrimeRénov' peuvent réduire significativement le reste à charge. Devis gratuit sur demande.",
      },
      {
        q: "Puis-je bénéficier de MaPrimeRénov' pour mon chauffe-eau ?",
        a: "Oui, le remplacement d'un chauffe-eau électrique par un chauffe-eau thermodynamique (pompe à chaleur) ou solaire est éligible à MaPrimeRénov'. Le montant de l'aide dépend de votre revenu fiscal. Trashi Plombier vous aide à vérifier votre éligibilité et à constituer le dossier.",
      },
      {
        q: "Quelle capacité de chauffe-eau choisir ?",
        a: "La règle générale : comptez 50 litres par personne. Pour 2 personnes, un 100 litres suffit. Pour 4 personnes, prévoyez 200 litres. Si vous avez une baignoire, augmentez la capacité d'environ 50 litres. Notre technicien vous conseille sur le dimensionnement optimal lors du devis.",
      },
      {
        q: "Combien de temps dure l'installation d'un chauffe-eau ?",
        a: "Le remplacement d'un chauffe-eau par un modèle similaire prend généralement 2 à 3 heures. Une installation plus complexe (passage au thermodynamique, modification des raccordements) peut nécessiter une demi-journée. Nous intervenons rapidement à Metz et en Moselle.",
      },
      {
        q: "Quels signes indiquent qu'il faut remplacer mon chauffe-eau ?",
        a: "Les principaux signes sont : eau qui ne chauffe plus ou chauffe mal, temps de chauffe très long, bruits inhabituels (claquements, sifflements), corrosion ou fuites sur le ballon, eau colorée ou avec des dépôts, et âge supérieur à 12-15 ans. Si votre appareil présente plusieurs de ces signes, le remplacement est souvent plus économique que la réparation.",
      },
    ],
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
      "Canalisation bouchée à Metz ? Trashi Plombier intervient en moins de 30 minutes, 24h/24 et 7j/7. Débouchage professionnel par haute pression ou furet électrique — WC, évier, douche, colonnes d'immeuble.",
    relatedSlugs: ["depannage-plomberie-metz", "recherche-de-fuite-metz"],
    localSlug: "plombier-metz",
    bodyParagraphs: [
      "Un débouchage de canalisation à Metz, c'est notre spécialité depuis plus de 10 ans. Qu'il s'agisse d'un WC bouché, d'un évier qui ne s'écoule plus ou d'une colonne d'immeuble obstruée, nos techniciens interviennent rapidement avec le matériel adapté pour résoudre le problème durablement.",
      "Nous utilisons deux techniques principales selon la nature et la gravité du bouchon : le débouchage à haute pression (hydrocurage), qui nettoie en profondeur les canalisations à l'aide d'un jet d'eau puissant, et le furet électrique, idéal pour les bouchons solides résistants. Dans les cas complexes, une caméra d'inspection nous permet de localiser précisément l'obstruction avant toute intervention.",
      "Les causes les plus fréquentes de canalisations bouchées à Metz sont l'accumulation de graisses dans les conduites de cuisine, les dépôts calcaires (l'eau de Metz est particulièrement calcaire), les lingettes et produits non dégradables dans les WC, ainsi que les racines d'arbres qui infiltrent les canalisations enterrées. Un bouchon non traité peut provoquer des refoulements, des mauvaises odeurs et des dégâts des eaux coûteux.",
      "Nous intervenons sur tout type de canalisation : PVC, fonte, grès, acier. Nos prestations couvrent les particuliers, les copropriétés et les professionnels sur Metz et toute la Moselle — Montigny-lès-Metz, Woippy, Thionville, Hagondange et environs. Le déplacement et le devis sont gratuits.",
      "Pour éviter les bouchons récurrents, nous proposons également un contrat d'entretien préventif avec hydrocurage annuel de vos canalisations — une solution économique qui évite les interventions d'urgence et prolonge la durée de vie de votre réseau.",
    ],
    faqItems: [
      {
        q: "Combien coûte un débouchage de canalisation à Metz ?",
        a: "Le tarif dépend de la nature du bouchon et de la technique utilisée. Nous établissons un devis gratuit avant toute intervention. Un débouchage simple commence à partir de 80 €. L'intervention d'urgence la nuit ou le week-end peut entraîner une majoration. Vous ne paierez jamais de surprise : tout est annoncé avant que nous commencions.",
      },
      {
        q: "Intervenez-vous la nuit et le week-end ?",
        a: "Oui, Trashi Plombier est disponible 24h/24 et 7j/7, y compris les jours fériés. En cas d'urgence, un technicien peut être chez vous en moins de 30 minutes sur Metz et les communes proches.",
      },
      {
        q: "Pourquoi ma canalisation se bouche-t-elle régulièrement ?",
        a: "Des bouchons récurrents indiquent souvent un problème structurel : mauvaise pente de la canalisation, dépôts calcaires accumulés, ou racines d'arbres infiltrées. Une inspection par caméra permet d'identifier la cause exacte et de proposer une solution durable, pas seulement un débouchage temporaire.",
      },
      {
        q: "Pouvez-vous déboucher les colonnes d'immeuble ?",
        a: "Oui, nous intervenons régulièrement pour des copropriétés et syndics sur Metz et la Moselle. Le débouchage de colonnes communes nécessite un matériel professionnel haute pression que nous possédons. Nous pouvons établir un devis pour un contrat d'entretien annuel.",
      },
      {
        q: "Quels types de canalisations débouchez-vous ?",
        a: "Nous débouchons tous types de canalisations : WC et toilettes, éviers et lavabos, douches et baignoires, lave-linge, colonnes d'immeuble, canalisations enterrées et tout-à-l'égout. Nos techniciens interviennent sur PVC, fonte, grès et acier.",
      },
    ],
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
      "Trashi Plombier réalise l'installation complète de votre plomberie à Metz, que ce soit pour une construction neuve ou une rénovation : tuyauterie, sanitaires, alimentation eau chaude/froide, évacuations — dans le respect des normes DTU et avec un devis gratuit.",
    relatedSlugs: [
      "renovation-salle-de-bain-metz",
      "remplacement-robinetterie-metz",
    ],
    localSlug: "plombier-metz",
    bodyParagraphs: [
      "L'installation de plomberie à Metz est une étape cruciale dans tout projet de construction ou de rénovation. Que vous construisiez une maison neuve, rénoviez un appartement haussmannien en centre-ville de Metz, ou transformiez un local en logement, Trashi Plombier vous accompagne de la conception jusqu'à la mise en service de votre réseau d'eau. Nos plombiers qualifiés maîtrisent l'ensemble des techniques d'installation : soudure cuivre, raccords à compression, tuyauterie PER, multicouche et PVC.",
      "Une installation plomberie de qualité commence par une étude rigoureuse du projet. Notre équipe réalise un plan de l'installation tenant compte de la configuration des lieux, des points d'eau à créer (cuisine, salle de bains, WC, buanderie), des contraintes structurelles du bâtiment, et des normes en vigueur (DTU 60.1, NF EN 806). Ce travail préparatoire garantit une installation pérenne, étanche et facile à entretenir — évitant les problèmes futurs de fuites ou de mauvaise pression.",
      "Nos installations plomberie à Metz et dans les communes proches comme Montigny-lès-Metz et Longeville-lès-Metz couvrent tous les aspects : pose des canalisations d'alimentation en eau froide et chaude, installation du réseau d'évacuation et de ventilation (VMC), raccordement des équipements sanitaires (WC, lavabo, douche, baignoire, évier), installation du chauffe-eau ou du ballon d'eau chaude, et mise en place de la robinetterie et des accessoires.",
      "Dans le cadre d'une rénovation, nous intervenons également pour la reprise et la mise aux normes d'installations existantes : remplacement de vieilles canalisations en plomb (interdites depuis 1995 dans les constructions neuves), modernisation des évacuations, augmentation des points d'eau, et adaptation du réseau à une nouvelle configuration de pièces. Ces travaux de réhabilitation améliorent la qualité de l'eau et la performance globale de l'installation.",
      "Trashi Plombier travaille en coordination avec les autres corps de métier sur vos chantiers de construction ou rénovation à Metz : maçons, carreleurs, électriciens, menuisiers. Nous respectons scrupuleusement les délais convenus et assurons un chantier propre et bien organisé. À l'issue des travaux, vous recevez les schémas de l'installation et toutes les informations nécessaires à l'entretien futur de votre réseau. Devis gratuit au 078 720 30 23.",
    ],
    faqItems: [
      {
        q: "Combien coûte une installation plomberie complète à Metz ?",
        a: "Le coût d'une installation plomberie complète dépend de la surface, du nombre de points d'eau et de la configuration du logement. Pour un appartement de 60 m², il faut compter entre 3 000 et 7 000 € en moyenne. Trashi Plombier établit un devis détaillé et gratuit après visite du chantier.",
      },
      {
        q: "Quelles normes respectez-vous pour l'installation plomberie ?",
        a: "Nous respectons les Documents Techniques Unifiés (DTU 60.1 pour les canalisations d'alimentation, DTU 64.1 pour les réseaux d'évacuation) ainsi que les normes NF en vigueur. Nos installations sont conformes aux exigences des assurances et des organismes de contrôle.",
      },
      {
        q: "Intervenez-vous sur les chantiers neufs et en rénovation ?",
        a: "Oui, nous intervenons aussi bien sur les constructions neuves (en coordination avec le maître d'œuvre et les autres corps de métier) que sur les projets de rénovation totale ou partielle. Nous pouvons également réaliser uniquement une partie de l'installation si vous avez déjà un autre plombier sur le chantier.",
      },
      {
        q: "Utilisez-vous du PER ou du cuivre pour les canalisations ?",
        a: "Nous utilisons les matériaux les mieux adaptés à chaque situation. Le PER (polyéthylène réticulé) et le multicouche sont flexibles et résistants au tartre, idéaux pour les constructions neuves. Le cuivre reste un excellent choix pour sa durabilité et sa résistance. Nous vous conseillons sur le meilleur choix selon votre budget et vos contraintes.",
      },
      {
        q: "Pouvez-vous remplacer les vieilles canalisations en plomb ?",
        a: "Absolument. Le remplacement des canalisations en plomb est une priorité de santé publique — le plomb est interdit dans les nouvelles installations depuis 1995 et nocif pour la santé. Trashi Plombier réalise la dépose des canalisations en plomb et leur remplacement par des matériaux modernes sur Metz et toute la Moselle.",
      },
    ],
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
      "Trashi Plombier remplace votre robinetterie à Metz avec rapidité et précision : mitigeur de cuisine, robinet de salle de bain, mitigeur thermostatique, mélangeur — toutes marques, tous modèles, avec un devis gratuit et une intervention le jour même.",
    relatedSlugs: [
      "installation-plomberie-metz",
      "renovation-salle-de-bain-metz",
    ],
    localSlug: "plombier-metz",
    bodyParagraphs: [
      "Le remplacement de robinetterie à Metz est une intervention en apparence simple, mais qui requiert le savoir-faire d'un plombier qualifié pour garantir une installation étanche et durable. Un robinet mal posé peut entraîner des fuites, des dégâts des eaux ou une pression insuffisante. Trashi Plombier intervient sur tous les types de robinetterie — mitigeur de cuisine, robinet de lavabo, mitigeur de douche, robinet de baignoire, et robinets extérieurs — avec plus de 10 ans d'expérience dans la pose et le remplacement.",
      "Nous installons des robinetteries de toutes gammes et de toutes marques : Grohe, Hansgrohe, Vitra, Jacob Delafon, Ideal Standard, Roca, Delabie, et bien d'autres. Que vous souhaitiez simplement remplacer un robinet défectueux par un modèle équivalent, ou en profiter pour moderniser votre salle de bain ou cuisine avec une robinetterie design haut de gamme, nos plombiers vous conseillent sur le choix et réalisent l'installation dans les règles de l'art.",
      "Le mitigeur thermostatique est de plus en plus prisé à Metz et dans les communes environnantes comme Marly et Augny. Ce type de robinetterie maintient automatiquement la température réglée, indépendamment des variations de pression — idéal pour les foyers avec enfants. Il réduit également la consommation d'eau chaude, donc les coûts énergétiques. Trashi Plombier est spécialisé dans l'installation de mitigeurs thermostatiques pour douches et baignoires.",
      "Les robinets présentent des signes annonciateurs de défaillance bien avant de lâcher complètement : fuite au niveau du bec, goutte-à-goutte persistant malgré le remplacement du joint, manette qui force, tartre visible sur l'aérateur. À Metz, l'eau est relativement calcaire, ce qui accélère l'usure des cartouches et des joints. Un remplacement préventif de robinetterie vous évite des dégâts des eaux et vous permet de choisir sereinement votre nouveau modèle.",
      "Trashi Plombier intervient pour le remplacement de robinetterie à Metz et dans tout le secteur de la Moselle — Woippy, Maizières-lès-Metz, Talange, Hagondange. Nos techniciens se déplacent rapidement, avec le matériel nécessaire pour la plupart des configurations de raccordement. La durée d'intervention est généralement de 30 à 60 minutes. Appelez-nous au 078 720 30 23 pour un devis gratuit et une intervention rapide.",
    ],
    faqItems: [
      {
        q: "Combien coûte le remplacement d'un mitigeur à Metz ?",
        a: "Le coût dépend du modèle choisi et de la complexité du raccordement. Hors fourniture du robinet, la pose seule est généralement entre 60 et 120 €. Si vous fournissez votre propre robinetterie, Trashi Plombier se charge de la dépose de l'ancien et de la pose du nouveau. Devis gratuit sur demande.",
      },
      {
        q: "Peut-on changer de type de robinetterie lors du remplacement ?",
        a: "Oui, dans la plupart des cas. Passer d'un mélangeur à deux robinets à un mitigeur monocommande, ou installer un mitigeur thermostatique à la place d'un mitigeur classique, est tout à fait possible. Nos plombiers évaluent la faisabilité lors du devis gratuit et réalisent les adaptations nécessaires.",
      },
      {
        q: "Quelle marque de robinetterie recommandez-vous ?",
        a: "Pour un bon rapport qualité/prix, nous recommandons Grohe, Hansgrohe ou Ideal Standard. Pour l'entrée de gamme, des marques comme Vitra ou Roca offrent une bonne durabilité. Pour le haut de gamme, Dornbracht ou Axor (Hansgrohe) sont d'excellents choix. Nous vous conseillons selon votre budget et vos attentes.",
      },
      {
        q: "Intervenez-vous pour les copropriétés à Metz ?",
        a: "Oui, nous réalisons des remplacements de robinetterie pour les particuliers comme pour les copropriétés et les professionnels (hôtels, restaurants, bureaux) sur Metz et la Moselle. Des tarifs adaptés aux volumes sont proposés pour les clients professionnels.",
      },
      {
        q: "Combien de temps dure la pose d'un robinet ?",
        a: "Le remplacement d'un robinet simple dure généralement 30 à 45 minutes. L'installation d'un mitigeur thermostatique encastré ou d'une robinetterie de douche avec colonne peut prendre 1 à 2 heures. Nos techniciens interviennent efficacement pour minimiser la coupure d'eau.",
      },
    ],
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
      "Trashi Plombier transforme votre salle de bain à Metz en espace moderne et fonctionnel : rénovation complète ou partielle, douche italienne, remplacement de baignoire, nouvelle robinetterie haut de gamme — devis gratuit, délais respectés, 98 % de clients satisfaits.",
    relatedSlugs: ["installation-douche-metz", "installation-plomberie-metz"],
    localSlug: "plombier-metz",
    bodyParagraphs: [
      "La rénovation de salle de bain à Metz est l'un de nos projets phares chez Trashi Plombier. Que vous souhaitiez rénover entièrement votre salle de bain — démolition, carrelage, plomberie, robinetterie, meubles — ou simplement moderniser certains éléments, notre équipe vous propose un accompagnement complet. Avec plus de 10 ans d'expérience dans la rénovation sanitaire sur Metz et la Moselle, nous avons transformé de nombreuses salles de bains vieillissantes en espaces modernes et confortables.",
      "Nos rénovations de salle de bain à Metz incluent l'ensemble des corps de métier plomberie : dépose des équipements existants (ancienne baignoire, douche bac à l'ancienne, vieux lavabo), réfection complète de l'étanchéité, pose de la nouvelle robinetterie, installation de la douche (italienne, à receveur, ou cabine), pose du nouveau WC suspendu ou à poser, installation du meuble vasque et miroir, et raccordement de tous les équipements. Nous intervenons également en coordination avec les carreleurs pour une rénovation clé en main.",
      "La douche italienne — aussi appelée douche à l'italienne ou douche de plain-pied — est l'une des demandes les plus fréquentes dans nos projets de rénovation salle de bain à Metz. Ce type d'installation sans receveur ni porte offre un espace plus ouvert, plus facile à nettoyer, et convient aux personnes à mobilité réduite. Sa réalisation nécessite une attention particulière à l'étanchéité (système d'imperméabilisation sous carrelage) et une bonne création de pente d'écoulement — deux points que nos plombiers maîtrisent parfaitement.",
      "Côté budget, une rénovation de salle de bain à Metz varie selon l'ampleur des travaux et les matériaux choisis. Une rénovation légère (remplacement robinetterie, nouveau lavabo, faïence) peut être réalisée pour 2 000 à 4 000 €. Une rénovation complète avec douche italienne, carrelage grand format et robinetterie haut de gamme peut atteindre 8 000 à 15 000 €. Trashi Plombier établit un devis détaillé et gratuit, avec différentes options pour s'adapter à votre budget.",
      "Notre zone d'intervention pour la rénovation de salle de bain couvre Metz et les communes limitrophes : Montigny-lès-Metz, Longeville-lès-Metz, Marly, Augny. Nos équipes s'engagent sur des délais précis et respectent les plannings de chantier. Chaque rénovation est réalisée avec soin, dans un souci du détail et de la finition qui explique notre taux de satisfaction de 98 %. Contactez-nous au 078 720 30 23 pour discuter de votre projet.",
    ],
    faqItems: [
      {
        q: "Combien de temps dure une rénovation de salle de bain à Metz ?",
        a: "Une rénovation complète de salle de bain dure en général de 5 à 10 jours ouvrés, selon l'ampleur des travaux et les délais de livraison des matériaux. Une rénovation partielle (remplacement douche, nouveau lavabo) peut être réalisée en 1 à 3 jours. Trashi Plombier vous communique un planning précis avant le démarrage.",
      },
      {
        q: "Réalisez-vous les travaux de carrelage en plus de la plomberie ?",
        a: "Nous nous chargeons principalement de la plomberie et de l'installation des équipements sanitaires. Pour le carrelage, nous pouvons intervenir directement ou en coordination avec un carreleur partenaire pour une rénovation clé en main. Nous vous proposons la solution la plus adaptée à votre projet.",
      },
      {
        q: "Peut-on supprimer une baignoire pour mettre une douche italienne ?",
        a: "Oui, c'est l'une des transformations les plus demandées. La douche à l'italienne remplace la baignoire avec une configuration d'espace améliorée. Cette transformation nécessite des travaux d'étanchéité spécifiques et une adaptation du sol. Trashi Plombier réalise ces installations à Metz avec toutes les garanties d'étanchéité.",
      },
      {
        q: "Des aides financières existent-elles pour la rénovation de salle de bain ?",
        a: "Certaines rénovations peuvent être financées en partie par des aides à l'adaptation du logement (pour les personnes âgées ou handicapées via l'ANAH, l'Anah Ma Prime Adapt'). Pour une rénovation standard, des financements bancaires ou des crédits travaux sont disponibles. Renseignez-vous auprès de votre conseiller.",
      },
      {
        q: "Peut-on rénover une salle de bain dans un appartement en copropriété à Metz ?",
        a: "Oui, sous réserve d'informer votre syndic si les travaux concernent des parties communes (colonnes d'eau) et de respecter le règlement de copropriété. Trashi Plombier connaît bien ces contraintes et vous guide dans les démarches nécessaires avant le démarrage du chantier.",
      },
    ],
  },
  {
    slug: "pose-wc-metz",
    silo: "plomberie",
    h1: "Pose de WC à Metz – Installation & Remplacement",
    metaTitle: "Pose WC Metz | Installation & Remplacement – Trashi Plombier",
    metaDescription:
      "Pose et remplacement de WC à Metz. WC suspendu, WC à poser, broyeur. Installation professionnelle.",
    seoParagraph:
      "Trashi Plombier assure la pose et le remplacement de WC à Metz pour toutes configurations : WC suspendu, WC à poser, WC broyeur — installation soignée, raccordements étanches, devis gratuit et intervention rapide sur Metz et la Moselle.",
    relatedSlugs: [
      "installation-plomberie-metz",
      "renovation-salle-de-bain-metz",
    ],
    localSlug: "plombier-metz",
    bodyParagraphs: [
      "La pose de WC à Metz est une intervention qui requiert précision et savoir-faire pour garantir un raccordement étanche et un fonctionnement optimal. Trashi Plombier réalise l'installation et le remplacement de WC pour toutes configurations : WC à poser (classique au sol), WC suspendu avec bâti-support, et WC broyeur pour les pièces sans évacuation gravitaire. Avec 10 ans d'expérience et plus de 120 clients satisfaits en Moselle, nous maîtrisons chaque type de montage.",
      "Le WC suspendu est aujourd'hui très demandé à Metz pour sa modernité, sa facilité de nettoyage (le sol sous la cuvette est entièrement accessible) et la possibilité d'intégrer le réservoir dans le mur ou dans un bâti encastré. Son installation nécessite la mise en place d'un cadre de fixation (bâti-support) qui doit être ancré solidement dans la structure du bâtiment. Trashi Plombier réalise ces installations dans les règles de l'art, avec des bâtis de marques reconnues comme Geberit, Grohe ou Jacob Delafon.",
      "Le WC broyeur est la solution idéale lorsqu'on souhaite créer des toilettes dans un endroit sans accès direct à une évacuation gravitaire — sous-sol, chambre convertie, pièce éloignée de la colonne d'évacuation. Ce type d'appareil broie les matières avant de les évacuer par une tuyauterie de petit diamètre (22 mm), pouvant remonter sur plusieurs mètres. Nos plombiers installent des WC broyeurs de toutes marques à Metz et dans les communes proches comme Woippy, Marly et Augny.",
      "Lors du remplacement d'un WC, nous prenons soin de vérifier l'état de la bride d'évacuation, du raccordement à la chasse d'eau et du joint de cuvette. Ces vérifications systématiques permettent d'éviter les fuites après installation. Nous fixons solidement la cuvette, réglons le mécanisme de chasse d'eau pour un rinçage efficace, et testons l'étanchéité complète avant de quitter les lieux. La zone de travail est laissée propre.",
      "Trashi Plombier propose également l'installation de WC à double chasse d'eau (pour économiser l'eau) et de WC lavants (Washlets) qui intègrent un bidet électronique. Ces équipements innovants gagnent en popularité à Metz. Nos techniciens vous conseillent sur les meilleures options selon votre budget et vos préférences. Contactez-nous au 078 720 30 23 pour un devis gratuit et sans engagement.",
    ],
    faqItems: [
      {
        q: "Combien coûte la pose d'un WC suspendu à Metz ?",
        a: "La pose d'un WC suspendu avec bâti-support (hors fourniture) est généralement entre 150 et 300 € de main-d'œuvre. Si vous fournissez votre WC et votre bâti, nous nous chargeons de l'installation. Trashi Plombier peut également fournir et poser l'ensemble — devis gratuit sur demande.",
      },
      {
        q: "Peut-on installer un WC suspendu dans un mur en placo ?",
        a: "Oui, à condition que le bâti-support soit correctement ancré — soit dans la dalle ou dans le mur porteur, soit via un bâti autoportant fixé au sol et au plafond. Nos plombiers évaluent la faisabilité lors du devis et choisissent la solution de fixation adaptée à votre configuration.",
      },
      {
        q: "Quelle est la différence entre un WC à poser et un WC suspendu ?",
        a: "Le WC à poser repose directement sur le sol avec le réservoir visible. Le WC suspendu est fixé au mur, la cuvette ne touche pas le sol (facilite le nettoyage) et le réservoir est encastré. Le WC suspendu est plus esthétique et moderne mais son installation est plus complexe et plus coûteuse.",
      },
      {
        q: "Installez-vous des WC broyeurs à Metz ?",
        a: "Oui, nous installons des WC broyeurs de toutes marques (SFA Sanibroyeur, Grundfos, Watermatic) à Metz et en Moselle. Le WC broyeur est idéal pour créer des toilettes dans une pièce sans accès à une évacuation gravitaire directe.",
      },
      {
        q: "Combien de temps prend la pose d'un WC ?",
        a: "Le remplacement d'un WC classique prend généralement 1 à 2 heures. La pose d'un WC suspendu avec bâti-support (sans travaux de placo) dure 2 à 4 heures. Si des travaux supplémentaires sont nécessaires (création d'évacuation, travaux de placo), le délai est plus long.",
      },
    ],
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
      "Trashi Plombier réalise l'installation de votre douche à Metz dans les règles de l'art : douche italienne à l'italienne, cabine de douche, receveur extra-plat, colonnes de douche thermostatiques — étanchéité parfaite, finitions soignées et devis gratuit.",
    relatedSlugs: [
      "renovation-salle-de-bain-metz",
      "remplacement-robinetterie-metz",
    ],
    localSlug: "plombier-metz",
    bodyParagraphs: [
      "L'installation d'une douche à Metz est une intervention qui demande expertise et rigueur, particulièrement pour les douches à l'italienne dont l'étanchéité est cruciale. Trashi Plombier réalise tous types d'installations de douche dans les logements du secteur messin : douche italienne (plain-pied), douche à receveur (acrylique, résine, céramique), cabine de douche intégrale, et douche balnéo avec jets de massage. Nos plombiers qualifiés s'adaptent à toutes les configurations de salle de bain.",
      "La douche italienne est devenue la référence en matière de rénovation de salle de bain à Metz et dans les communes proches comme Montigny-lès-Metz et Longeville-lès-Metz. Sans receveur ni bord à enjamber, elle offre un espace ouvert et accessible, idéal pour tous les âges. Sa réalisation nécessite plusieurs étapes techniques indispensables : création de la pente d'écoulement, mise en place d'un système d'imperméabilisation sous carrelage (membrane d'étanchéité), installation d'un caniveau ou d'une bonde de sol design, et pose de la robinetterie encastrée.",
      "Pour les douches à receveur, nous proposons l'installation de receveurs extra-plats (8 à 12 cm) qui offrent un aspect proche de la douche italienne tout en facilitant la pose. Ces receveurs existent dans toutes les dimensions et formes (rectangulaires, carrés, pentagonaux) et en différents matériaux (acrylique renforcé, résine de synthèse, céramique). Le raccordement hydraulique est réalisé avec des siphons à faible encombrement permettant leur installation sur dalles béton comme sur planchers bois.",
      "La robinetterie de douche est un élément déterminant du confort et de l'esthétique. Trashi Plombier propose l'installation de colonnes de douche thermostatiques (maintien automatique de la température), de robinetteries encastrées pour un rendu épuré, et de têtes de douche à économie d'eau. Nous travaillons avec des marques premium comme Grohe, Hansgrohe, Dornbracht et des gammes accessible comme Ideal Standard ou Roca — selon votre budget.",
      "Une installation de douche réussie à Metz repose avant tout sur la qualité de l'étanchéité. Trashi Plombier utilise des membranes d'étanchéité certifiées et des mastics silicone professionnels pour assurer une protection durable contre les infiltrations. Chaque installation est testée à l'eau avant la pose du carrelage. Nous proposons un délai d'intervention rapide sur Metz et toute la Moselle. Contactez-nous au 078 720 30 23 pour un devis gratuit.",
    ],
    faqItems: [
      {
        q: "Combien coûte l'installation d'une douche italienne à Metz ?",
        a: "Le coût d'une douche italienne (main-d'œuvre plomberie uniquement, hors carrelage) est généralement entre 600 et 1 500 € selon la configuration et la robinetterie choisie. Si on inclut la réalisation de l'étanchéité et l'installation de la robinetterie encastrée, le budget plomberie monte à 1 000 à 2 500 €. Devis gratuit sur demande.",
      },
      {
        q: "Quelle est la différence entre une douche italienne et une douche à receveur extra-plat ?",
        a: "La douche italienne n'a pas de receveur : le sol de la pièce est directement carrelé avec une pente vers la bonde. Le receveur extra-plat est une cuvette de très faible hauteur (8-12 cm) posée sur le sol. La douche italienne offre un rendu plus haut de gamme mais sa réalisation est plus complexe et exige une étanchéité parfaite.",
      },
      {
        q: "Peut-on installer une douche italienne dans un appartement en étage ?",
        a: "Oui, mais cela nécessite une évaluation préalable de l'épaisseur du plancher disponible (pour créer la pente) et de la solidité du plancher. Dans les immeubles anciens de Metz, certaines contraintes techniques peuvent nécessiter l'utilisation d'un receveur extra-plat plutôt qu'une vraie douche de plain-pied.",
      },
      {
        q: "Intervenez-vous uniquement pour la plomberie ou aussi pour le carrelage ?",
        a: "Trashi Plombier intervient pour la partie plomberie et étanchéité de l'installation de douche. Pour le carrelage, nous pouvons travailler en coordination avec un carreleur partenaire pour une intervention complète et clé en main.",
      },
      {
        q: "Combien de temps dure l'installation d'une douche ?",
        a: "L'installation d'une douche à receveur prend 1 à 2 jours (plomberie + étanchéité + pose receveur). Une douche italienne nécessite 2 à 3 jours pour les travaux plomberie et d'étanchéité, auxquels s'ajoutent les délais de séchage avant carrelage. Nous vous communiquons un planning précis avant démarrage.",
      },
    ],
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
      "Trashi Plombier réalise la recherche de fuite à Metz avec des technologies non destructives de pointe — caméra thermique, corrélateur acoustique, gaz traceur — pour localiser précisément toute fuite cachée dans vos murs, dalles ou canalisations enterrées, sans démolition inutile.",
    relatedSlugs: ["fuite-eau-urgence-metz", "depannage-plomberie-metz"],
    localSlug: "plombier-metz",
    bodyParagraphs: [
      "La recherche de fuite à Metz est une prestation hautement spécialisée qui requiert des équipements professionnels et un savoir-faire technique éprouvé. Contrairement à une fuite visible (joint qui goutte, robinet qui fuit), les fuites cachées — dans les murs, sous les dalles, dans les canalisations enterrées — sont difficiles à détecter sans les bons outils. Chez Trashi Plombier, nous utilisons des technologies de détection non destructives qui permettent de localiser précisément l'origine d'une fuite sans casser les murs ni ouvrir les dalles, minimisant les dégâts et les coûts de remise en état.",
      "Notre arsenal de détection comprend plusieurs méthodes complémentaires. La caméra thermique permet de visualiser les différences de température provoquées par une fuite d'eau dans une paroi. Le corrélateur acoustique détecte les vibrations sonores générées par l'écoulement d'eau sous pression dans une canalisation percée. Le gaz traceur (mélange d'azote et d'hydrogène inoffensif) est injecté dans la canalisation suspecte et remonte à travers le sol ou la paroi jusqu'à la fissure, où notre détecteur le capte avec précision.",
      "Les situations nécessitant une recherche de fuite professionnelle à Metz sont nombreuses : compteur d'eau qui tourne en l'absence de toute consommation (test du compteur à faire la nuit), taches d'humidité sur les murs sans cause apparente, facture d'eau anormalement élevée, plancher qui sonne creux ou qui gondole, moisissures inexpliquées dans une pièce. Trashi Plombier intervient rapidement sur Metz, Amnéville, Thionville et tout le secteur de la Moselle pour ces diagnostics.",
      "Une fois la fuite localisée, notre équipe procède à la réparation dans les meilleurs délais. Selon l'accessibilité et l'étendue des dégâts, la réparation peut nécessiter une ouverture chirurgicale dans la paroi ou le plancher — la plus petite possible grâce à la précision de notre localisation. Nous réalisons la réparation, effectuons un test d'étanchéité complet, puis vous accompagnons pour les démarches avec votre assurance habitation si nécessaire.",
      "Le rapport de recherche de fuite établi par Trashi Plombier est un document reconnu par les compagnies d'assurance pour la déclaration de sinistre dégâts des eaux. Il détaille la localisation de la fuite, les méthodes utilisées pour la détecter, et les travaux nécessaires à la réparation. Ce rapport facilite considérablement vos démarches auprès de votre assureur. Devis gratuit pour toute recherche de fuite à Metz — appelez le 078 720 30 23.",
    ],
    faqItems: [
      {
        q: "Comment savoir si j'ai une fuite cachée à Metz ?",
        a: "Fermez tous les robinets de votre logement et regardez votre compteur d'eau : s'il tourne encore, vous avez une fuite. D'autres signes : facture d'eau anormalement haute, taches d'humidité sur les murs, moisissures sans raison apparente, plancher qui sonne creux. Appelez Trashi Plombier pour un diagnostic.",
      },
      {
        q: "La recherche de fuite nécessite-t-elle de casser les murs ?",
        a: "Grâce à nos technologies de détection non destructives (caméra thermique, corrélateur acoustique, gaz traceur), nous localisons la fuite avec une grande précision sans ouvrir les murs. Si une ouverture est nécessaire pour la réparation, elle est aussi petite que possible — beaucoup moins invasive qu'une recherche à l'aveugle.",
      },
      {
        q: "Qui paye la recherche de fuite : moi ou l'assurance ?",
        a: "Dans le cadre d'un sinistre dégâts des eaux, les frais de recherche de fuite sont généralement pris en charge par votre assurance habitation ou par celle de votre voisin si la fuite vient d'un appartement supérieur. Trashi Plombier vous fournit un rapport détaillé pour votre déclaration de sinistre.",
      },
      {
        q: "Intervenez-vous pour les syndics et copropriétés à Metz ?",
        a: "Oui, nous intervenons régulièrement pour des syndics et copropriétés à Metz et en Moselle pour la recherche de fuites dans les parties communes (colonnes d'eau, toitures-terrasses, parkings souterrains). Un rapport complet est fourni après chaque intervention.",
      },
      {
        q: "Combien coûte une recherche de fuite à Metz ?",
        a: "Le tarif d'une recherche de fuite dépend de la complexité de l'investigation et des techniques utilisées. Le devis est gratuit. La recherche de fuite simple commence à partir de 150 €. Pour les cas complexes nécessitant plusieurs techniques, le coût peut être plus élevé mais reste justifié par rapport aux dégâts qu'une fuite non traitée peut causer.",
      },
    ],
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
      "Trashi Plombier installe tous types de systèmes de chauffage à Metz : chaudière à condensation gaz, pompe à chaleur air/eau, plancher chauffant hydraulique — nos chauffagistes certifiés vous conseillent sur la solution la plus adaptée à votre logement et à votre budget, avec devis gratuit.",
    relatedSlugs: ["entretien-chaudiere-metz", "pose-chauffe-eau-metz"],
    localSlug: "chauffagiste-metz",
    bodyParagraphs: [
      "L'installation d'un système de chauffage à Metz est un investissement important qui engage votre confort thermique et vos dépenses énergétiques pour 15 à 20 ans. Trashi Plombier vous accompagne dans le choix et l'installation de la solution la plus adaptée à votre logement, à votre budget et à vos habitudes de consommation. Avec plus de 10 ans d'expérience en installation chauffage sur Metz et la Moselle, nous avons mis en service des centaines de systèmes de chauffage chez des particuliers, professionnels et copropriétés.",
      "Les systèmes de chauffage que nous installons à Metz couvrent toutes les technologies : chaudière à condensation gaz (la plus répandue, rendement > 109 %), chaudière fioul basse température, pompe à chaleur air/eau (économies d'énergie jusqu'à 75 %, éligible MaPrimeRénov'), pompe à chaleur géothermique, plancher chauffant hydraulique (confort thermique optimal), et radiateurs à eau basse température. Chaque installation est dimensionnée selon une étude thermique de votre logement.",
      "Le remplacement d'une ancienne chaudière gaz ou fioul par une pompe à chaleur air/eau est aujourd'hui l'une des rénovations énergétiques les plus populaires à Metz, notamment grâce aux aides financières disponibles. MaPrimeRénov', la prime énergie CEE et l'éco-prêt à taux zéro permettent de financer une grande partie du remplacement. Trashi Plombier vous aide à estimer vos droits aux aides et à constituer votre dossier — un service que nous proposons gratuitement à nos clients.",
      "Toutes nos installations de chauffage à Metz respectent les normes en vigueur : DTU 65.11 et DTU 65.14 pour les chaudières et circuits de chauffage, réglementation thermique RE2020 pour les constructions neuves, et réglementation PG (qualification gaz) pour les raccordements gaz. Nos techniciens sont certifiés pour les travaux gaz et PAC, et réalisent la mise en service avec un test de rendement pour s'assurer du bon fonctionnement de l'installation.",
      "Trashi Plombier couvre tout le bassin messin pour l'installation de chauffage : Metz, Montigny-lès-Metz, Marly, Longeville-lès-Metz, Maizières-lès-Metz, Talange, Hagondange et Amnéville. Notre équipe coordonne les travaux de génie civil si nécessaires (tranchées pour PAC géothermique, percement pour cheminée de chaudière). Contactez-nous au 078 720 30 23 pour un devis gratuit, avec étude thermique de votre logement incluse.",
    ],
    faqItems: [
      {
        q: "Quel système de chauffage choisir pour un logement à Metz ?",
        a: "Le choix dépend de plusieurs facteurs : type de logement (maison ou appartement), isolation thermique existante, accès au gaz naturel, surface à chauffer, et budget. Pour une maison bien isolée, la pompe à chaleur air/eau est souvent le meilleur choix. Pour un appartement en immeuble collectif, la chaudière à condensation gaz reste très pertinente. Trashi Plombier réalise une étude gratuite pour vous conseiller.",
      },
      {
        q: "Quelles aides financières pour l'installation d'une chaudière ou PAC à Metz ?",
        a: "MaPrimeRénov', les Certificats d'Économies d'Énergie (CEE), l'éco-prêt à taux zéro (Éco-PTZ) et la TVA à taux réduit (5,5 %) peuvent financer une large part de votre installation. Trashi Plombier vous aide à identifier et à demander toutes les aides auxquelles vous avez droit.",
      },
      {
        q: "Combien de temps prend l'installation d'une chaudière ?",
        a: "L'installation d'une chaudière à condensation gaz en remplacement d'une ancienne chaudière prend généralement 1 à 2 jours. L'installation d'une pompe à chaleur air/eau avec un nouveau circuit de chauffage peut nécessiter 3 à 5 jours selon la complexité du projet.",
      },
      {
        q: "Réalisez-vous aussi l'installation du plancher chauffant ?",
        a: "Oui, Trashi Plombier installe les planchers chauffants hydrauliques (eau chaude) dans le cadre de constructions neuves ou de rénovations importantes. Le plancher chauffant hydraulique offre un confort de chaleur radiant idéal et fonctionne très bien avec une pompe à chaleur à basse température.",
      },
      {
        q: "Vos installations de chauffage sont-elles garanties ?",
        a: "Oui, toutes nos installations bénéficient des garanties constructeur sur les équipements, de notre garantie de main-d'œuvre, et de l'assurance décennale pour les travaux importants. Les chaudières et PAC installées sont accompagnées de leur certificat de mise en service.",
      },
    ],
  },
  {
    slug: "entretien-chaudiere-metz",
    silo: "chauffage",
    h1: "Entretien Chaudière à Metz – Contrat Annuel",
    metaTitle: "Entretien Chaudière Metz | Contrat Annuel – Trashi Plombier",
    metaDescription:
      "Entretien annuel de chaudière à Metz. Chaudière gaz, fioul, électrique. Certificat de conformité délivré.",
    seoParagraph:
      "L'entretien annuel de chaudière à Metz est une obligation légale et la meilleure protection contre les pannes en hiver : Trashi Plombier réalise cette visite obligatoire sur toutes marques et tous types de chaudières, avec remise du certificat de conformité réglementaire.",
    relatedSlugs: [
      "installation-chauffage-metz",
      "depannage-chaudiere-gaz-metz",
    ],
    localSlug: "chauffagiste-metz",
    bodyParagraphs: [
      "L'entretien annuel de chaudière à Metz est obligatoire depuis le décret du 9 octobre 2009 (modifié en 2023). Cette visite annuelle est obligatoire pour toutes les chaudières gaz et fioul dont la puissance est comprise entre 4 et 400 kW. Son non-respect peut entraîner des sanctions, mais surtout des risques pour la sécurité : intoxication au monoxyde de carbone (CO), incendie, explosion. Trashi Plombier réalise ces entretiens annuels sur Metz et toute la Moselle avec remise d'un certificat de conformité.",
      "Une visite d'entretien chaudière réalisée par Trashi Plombier à Metz comprend toutes les opérations réglementaires : nettoyage du corps de chauffe et de l'échangeur, vérification et nettoyage du brûleur, contrôle et réglage de la combustion (mesure du taux de CO₂, O₂, CO et de la température des fumées), vérification du tirage et de l'évacuation des gaz brûlés, contrôle de la pression du circuit, vérification des dispositifs de sécurité, et test du thermostat. À l'issue, nous remettons un certificat signé conforme aux exigences légales.",
      "Au-delà de l'obligation légale, l'entretien régulier de votre chaudière à Metz présente de nombreux avantages concrets. Une chaudière bien entretenue consomme jusqu'à 15 % d'énergie en moins qu'une chaudière encrassée. Elle tombe moins souvent en panne — évitant les dépannages d'urgence coûteux, surtout en hiver. Sa durée de vie est prolongée de plusieurs années. Et votre assurance habitation ne peut pas refuser une indemnisation liée à un sinistre chaudière si vous justifiez d'un entretien annuel régulier.",
      "Trashi Plombier entretient toutes les marques de chaudières sur Metz et les communes avoisinantes comme Woippy, Marly et Augny : Vaillant, Viessmann, De Dietrich, Chaffoteaux, Buderus, Atlantic, Saunier Duval, Elm Leblanc, Bosch, Frisquet. Nos techniciens sont certifiés pour les travaux sur chaudières gaz et maîtrisent aussi bien les anciennes chaudières atmosphériques que les modernes chaudières à condensation avec régulation électronique avancée.",
      "Pour simplifier votre gestion, Trashi Plombier propose des contrats d'entretien annuel avec rappel automatique par SMS ou email lorsque la date de votre prochain entretien approche. Ces contrats peuvent inclure une couverture panne avec intervention prioritaire en cas de défaillance. Appelez-nous au 078 720 30 23 pour réserver votre entretien de chaudière à Metz — devis gratuit, intervention rapide, 98 % de clients satisfaits.",
    ],
    faqItems: [
      {
        q: "L'entretien annuel de chaudière est-il vraiment obligatoire à Metz ?",
        a: "Oui, c'est une obligation légale en France depuis 2009 (décret n° 2009-649). L'entretien annuel est obligatoire pour toutes les chaudières gaz et fioul de 4 à 400 kW. À défaut, votre assurance peut réduire ou refuser ses garanties en cas de sinistre. Trashi Plombier réalise ces entretiens et délivre le certificat réglementaire.",
      },
      {
        q: "Que comprend l'entretien annuel de chaudière ?",
        a: "L'entretien légal comprend : nettoyage du corps de chauffe et du brûleur, réglage de la combustion, vérification des sécurités, contrôle de l'évacuation des fumées, mesure du CO, vérification de la pression du circuit. À la fin, vous recevez un certificat signé par notre technicien certifié.",
      },
      {
        q: "Combien coûte l'entretien annuel d'une chaudière à Metz ?",
        a: "L'entretien annuel d'une chaudière gaz à condensation est généralement entre 100 et 180 € selon le modèle. Les chaudières fioul sont légèrement plus chères (130 à 200 €). Trashi Plombier vous communique le tarif exact avant l'intervention. Devis gratuit.",
      },
      {
        q: "Quand faut-il faire entretenir sa chaudière ?",
        a: "L'entretien doit être réalisé une fois par an. Il est conseillé de le faire à la fin du printemps ou en été (avant la saison de chauffe) pour anticiper d'éventuelles pannes et ne pas être pris au dépourvu en octobre. Trashi Plombier peut vous envoyer un rappel automatique.",
      },
      {
        q: "L'entretien couvre-t-il les réparations si une pièce est défectueuse ?",
        a: "L'entretien standard couvre la visite, le nettoyage et le réglage. Si une pièce est défectueuse, son remplacement est facturé en supplément (pièce + main-d'œuvre), avec devis préalable. Trashi Plombier propose des contrats d'entretien avec couverture panne pour une protection plus complète.",
      },
    ],
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
      "Trashi Plombier réalise la pose de votre chauffe-eau à Metz dans les règles de l'art : chauffe-eau électrique, thermodynamique ou solaire — raccordement hydraulique et électrique conforme aux normes, devis gratuit, et accompagnement pour MaPrimeRénov' sur les modèles éligibles.",
    relatedSlugs: [
      "remplacement-chauffe-eau-metz",
      "entretien-ballon-eau-chaude-metz",
    ],
    localSlug: "chauffagiste-metz",
    bodyParagraphs: [
      "La pose d'un chauffe-eau à Metz est une opération technique qui va bien au-delà d'un simple raccordement. Elle exige une connaissance approfondie des normes d'installation (NF C 15-100 pour la partie électrique, DTU 60.1 pour la partie hydraulique), des règles de sécurité, et une bonne maîtrise des différentes technologies de production d'eau chaude sanitaire. Trashi Plombier réalise ces installations sur Metz et dans toute la Moselle depuis plus de 10 ans, avec un savoir-faire reconnu par 98 % de clients satisfaits.",
      "La pose d'un chauffe-eau électrique à accumulation est l'installation la plus courante. Elle implique : la fixation murale de l'appareil (généralement 50 à 300 litres), le raccordement sur le réseau d'eau froide avec groupe de sécurité, le raccordement sur le réseau d'eau chaude, et le branchement électrique sur un circuit dédié avec disjoncteur adapté. Le groupe de sécurité — pièce essentielle qui protège le ballon contre la surpression — est obligatoire et doit être posé correctement pour éviter tout risque.",
      "Le chauffe-eau thermodynamique représente aujourd'hui la solution de prédilection pour les maisons individuelles à Metz grâce à ses économies d'énergie spectaculaires (jusqu'à 70 % d'économies par rapport à un chauffe-eau électrique classique) et son éligibilité à MaPrimeRénov'. Son installation est plus complexe : l'appareil intègre une pompe à chaleur qui capte les calories de l'air ambiant, ce qui nécessite une implantation dans un local suffisamment grand (minimum 20 m³) et bien ventilé, ou avec une connexion à l'air extérieur.",
      "Pour les maisons avec toiture bien exposée au sud, le chauffe-eau solaire individuel (CESI) est la solution la plus économe et la plus écologique. Il combine des capteurs solaires thermiques posés en toiture avec un ballon de stockage, complété par un appoint électrique ou gaz pour les jours sans ensoleillement. Trashi Plombier réalise l'installation complète des CESI à Metz et sur les communes proches comme Amnéville et Hagondange, en coordination avec les couvreurs pour la pose des capteurs.",
      "À l'issue de chaque pose de chauffe-eau à Metz, Trashi Plombier réalise une mise en service complète : vérification de l'étanchéité hydraulique, test du groupe de sécurité, réglage de la température (conseillée à 55-60 °C pour tuer la légionelle), et vérification électrique. Nous vous expliquons le fonctionnement de votre nouvel appareil et les bons réglages à adopter pour maximiser les économies d'énergie. Appelez le 078 720 30 23 pour un devis gratuit.",
    ],
    faqItems: [
      {
        q: "Quelle capacité de chauffe-eau choisir pour mon logement à Metz ?",
        a: "Comptez environ 50 litres par personne pour un usage normal. Pour 2 personnes : 100 litres. Pour 4 personnes : 200 litres. Si vous avez une baignoire, ajoutez 50 à 75 litres. Pour un chauffe-eau à accumulation (qui chauffe la nuit en heures creuses), il est conseillé de majorer légèrement pour couvrir la demande des douches matinales.",
      },
      {
        q: "Le chauffe-eau thermodynamique est-il adapté à un appartement ?",
        a: "Le chauffe-eau thermodynamique nécessite un local de minimum 20 m³ bien ventilé (il prélève des calories dans l'air et rejette de l'air froid). Il peut être installé dans une buanderie, un sous-sol ou un garage. Pour les petits appartements sans espace suffisant, un chauffe-eau électrique classique ou un chauffe-eau solaire reste plus approprié.",
      },
      {
        q: "Puis-je bénéficier de MaPrimeRénov' pour la pose d'un chauffe-eau à Metz ?",
        a: "Oui, le remplacement d'un chauffe-eau électrique classique par un chauffe-eau thermodynamique ou solaire est éligible à MaPrimeRénov'. Le montant de l'aide dépend de votre tranche de revenus. Trashi Plombier vous aide à vérifier votre éligibilité et à constituer votre dossier.",
      },
      {
        q: "Le groupe de sécurité est-il obligatoire sur un chauffe-eau ?",
        a: "Oui, le groupe de sécurité est obligatoire sur tous les chauffe-eaux à accumulation. Il protège le ballon contre la surpression en permettant l'évacuation de l'eau lors du cycle de chauffe (il goutte normalement). Son absence peut entraîner une surpression dangereuse et annule la garantie de l'appareil.",
      },
      {
        q: "Combien de temps dure la pose d'un chauffe-eau ?",
        a: "La pose d'un chauffe-eau électrique standard prend généralement 2 à 3 heures (plus dépose de l'ancien si nécessaire). L'installation d'un chauffe-eau thermodynamique est plus longue (4 à 6 heures) en raison des adaptations de ventilation et de plomberie. Le chauffe-eau solaire peut nécessiter 1 à 2 jours.",
      },
    ],
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
      "Trashi Plombier assure l'entretien complet de votre ballon d'eau chaude à Metz : détartrage, remplacement de l'anode magnésium, vidange et vérification du groupe de sécurité — pour doubler la durée de vie de votre chauffe-eau et maintenir une eau saine.",
    relatedSlugs: ["pose-chauffe-eau-metz", "remplacement-chauffe-eau-metz"],
    localSlug: "chauffagiste-metz",
    bodyParagraphs: [
      "L'entretien du ballon d'eau chaude à Metz est une opération souvent négligée par les propriétaires, alors qu'elle peut doubler la durée de vie de l'appareil et éviter des problèmes sérieux. Un ballon d'eau chaude non entretenu accumule du tartre (l'eau de Metz est assez calcaire, avec un titre hydrotimétrique élevé), voit son anode magnésium se consommer jusqu'à épuisement, et finit par se corroder de l'intérieur — ce qui entraîne une eau rouillée et une fuite inéluctable. Trashi Plombier réalise ces entretiens sur Metz et toute la Moselle.",
      "L'anode magnésium est la pièce la plus importante à surveiller dans l'entretien d'un ballon d'eau chaude. Cette tige de métal actif se sacrifie par électrolyse pour protéger la cuve en acier de la corrosion. Elle doit être vérifiée tous les 2 à 3 ans et remplacée lorsqu'elle est consommée à plus de 50 %. Un ballon sans anode fonctionnelle se corrode rapidement, développe des bactéries (dont la légionelle), et doit être remplacé bien avant sa durée de vie théorique de 10 à 15 ans.",
      "Le détartrage du ballon d'eau chaude est nécessaire dans les régions à eau dure comme la Moselle. Le tartre (calcaire) s'accumule sur la résistance électrique et le fond du ballon, créant une isolation thermique qui oblige la résistance à chauffer plus longtemps — consommant davantage d'électricité. Un ballon fortement entartré consomme de 15 à 30 % d'énergie supplémentaire. Trashi Plombier réalise la vidange et le détartrage de votre ballon à Metz, avec un nettoyage complet de la résistance si nécessaire.",
      "La vidange annuelle du ballon est recommandée pour les régions calcaires. Cette opération permet d'éliminer les dépôts sédimentaires qui s'accumulent au fond de la cuve, d'inspecter l'intérieur de la cuve et la résistance, et de vérifier l'état du groupe de sécurité. Le groupe de sécurité doit lui-même être vérifié et remplacé tous les 5 ans environ, car ses joints peuvent se durcir et l'empêcher de jouer son rôle protecteur contre la surpression.",
      "Trashi Plombier propose un contrat d'entretien ballon d'eau chaude sur Metz et les communes proches (Montigny-lès-Metz, Woippy, Marly, Talange) incluant la visite annuelle avec vérification de l'anode, vidange partielle, test du groupe de sécurité et diagnostic de l'état général. Cet entretien préventif vous évite les pannes inopinées et les remplacements prématurés. Contactez-nous au 078 720 30 23 pour un devis gratuit.",
    ],
    faqItems: [
      {
        q: "À quelle fréquence faut-il entretenir son ballon d'eau chaude ?",
        a: "Il est recommandé de vérifier le groupe de sécurité chaque année et de faire un entretien complet (anode, vidange, détartrage) tous les 2 à 3 ans. L'anode magnésium se consomme plus rapidement dans les régions à eau dure comme la Moselle — elle peut nécessiter un remplacement tous les 2 ans.",
      },
      {
        q: "Comment savoir si l'anode de mon ballon est à remplacer ?",
        a: "Sans ouverture du ballon, il est impossible de voir l'état de l'anode. C'est pourquoi une visite de maintenance tous les 2 à 3 ans est recommandée. Certains signes indirects existent : eau avec une légère odeur d'œuf pourri (signe d'une anode défaillante), eau chaude rougeâtre, ou ballon qui vieillit mal.",
      },
      {
        q: "Mon groupe de sécurité goutte, est-ce normal ?",
        a: "Oui, le groupe de sécurité est conçu pour laisser s'écouler un peu d'eau lors des cycles de chauffe (dilatation thermique). Un filet d'eau pendant la chauffe est normal. En revanche, un écoulement constant en dehors des périodes de chauffe signale un groupe défectueux à remplacer rapidement.",
      },
      {
        q: "Vaut-il mieux entretenir ou remplacer un vieux ballon ?",
        a: "Si votre ballon a moins de 10 ans, l'entretien est rentable. Au-delà de 12-15 ans, le remplacement est souvent plus économique car les risques de fuite interne augmentent significativement. Trashi Plombier évalue l'état de votre ballon et vous conseille objectivement lors du devis gratuit.",
      },
      {
        q: "L'entretien du ballon réduit-il la consommation électrique ?",
        a: "Oui, significativement. Un ballon avec une résistance entartrée ou une anode défaillante consomme 15 à 30 % d'énergie de plus. Un entretien régulier (détartrage, remplacement de l'anode) maintient le rendement de l'appareil à son niveau optimal et réduit votre facture d'électricité.",
      },
    ],
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
      "Trashi Plombier assure le dépannage de chaudière gaz à Metz avec une intervention rapide en moins de 30 minutes : nos chauffagistes certifiés PG diagnostiquent et réparent tous codes d'erreur, toutes marques — 24h/24, 7j/7, devis gratuit.",
    relatedSlugs: [
      "reparation-chaudiere-metz",
      "depannage-chaudiere-fioul-metz",
    ],
    localSlug: "chauffagiste-metz",
    bodyParagraphs: [
      "La chaudière gaz est le système de chauffage le plus répandu dans les logements de Metz et de la Moselle. Lorsqu'elle tombe en panne — surtout en hiver — l'inconfort est immédiat. Trashi Plombier met à votre disposition des chauffagistes certifiés PG (qualification obligatoire pour tout travail sur les installations gaz) disponibles 24h/24, 7j/7, pour dépanner votre chaudière gaz à Metz et dans les communes proches comme Hagondange, Maizières-lès-Metz et Amnéville. Intervention garantie en moins de 30 minutes.",
      "Nos techniciens sont formés sur toutes les technologies de chaudières gaz modernes : chaudières à condensation (les plus performantes et les plus répandues dans les constructions récentes), chaudières à ventouse, chaudières atmosphériques, chaudières sol, et micro-cogénération. Quel que soit le fabricant — Vaillant, Viessmann, Chaffoteaux, De Dietrich, Saunier Duval, Buderus, Atlantic, Frisquet, Elm Leblanc, Bosch — nos chauffagistes connaissent les codes d'erreur et les points de défaillance courants.",
      "Les pannes de chaudière gaz les plus fréquentes à Metz sont : le manque d'allumage (problème d'électrode, de vanne gaz ou d'électronique d'allumage), le code d'erreur pression basse (circuit de chauffage à regonfler), le blocage de la pompe de circulation (roulement grippé après l'été), la défaillance de la sonde de température (NTC), le givrage du condenseur en hiver, et la défaillance du circulateur. Nos techniciens identifient rapidement la cause et procèdent à la réparation.",
      "La sécurité gaz est notre priorité absolue lors de tout dépannage de chaudière gaz à Metz. Si vous sentez une odeur de gaz, evacuez immédiatement le logement, n'actionnez aucun interrupteur électrique, et appelez le 0800 47 33 33 (urgence gaz GRDF, gratuit) avant de nous contacter. Nos techniciens certifiés PG vérifient systématiquement l'étanchéité des raccords gaz lors de chaque intervention et s'assurent de l'absence de fuite avant la remise en service de la chaudière.",
      "Après chaque dépannage de chaudière gaz, Trashi Plombier réalise un test complet de bon fonctionnement : vérification de la combustion, mesure du CO, test de la régulation et du thermostat, et contrôle de la pression du circuit. Un rapport d'intervention vous est remis. Si votre chaudière est vieillissante et nécessite des réparations fréquentes, nous vous présentons objectivement les avantages d'un remplacement et les aides MaPrimeRénov' disponibles. Devis gratuit au 078 720 30 23.",
    ],
    faqItems: [
      {
        q: "Ma chaudière gaz affiche un code d'erreur, que faire ?",
        a: "Notez le code affiché sur votre chaudière et appelez Trashi Plombier au 078 720 30 23. Certains codes (comme pression basse) peuvent être résolus en regonflant le circuit, d'autres nécessitent une intervention technique. Nos techniciens connaissent les codes d'erreur de toutes les marques.",
      },
      {
        q: "Est-ce dangereux de rallumer manuellement une chaudière gaz ?",
        a: "La réinitialisation manuelle (bouton reset) est généralement sans danger si la chaudière ne repart pas après la première tentative, attendez 15 minutes avant de réessayer. Si elle ne repart toujours pas après deux tentatives, appelez un chauffagiste. Ne jamais forcer le reset en cas d'odeur de gaz.",
      },
      {
        q: "Pourquoi ma chaudière gaz s'arrête toutes les 5 minutes ?",
        a: "Ce symptôme (court-cyclage) peut indiquer plusieurs problèmes : sonde de température défectueuse, mauvais réglage de la puissance, problème de circulation dans le circuit, ou échangeur encrassé. Un diagnostic par notre technicien est nécessaire pour identifier la cause exacte et y remédier.",
      },
      {
        q: "Intervenez-vous sur les chaudières gaz de toutes marques à Metz ?",
        a: "Oui, Trashi Plombier intervient sur toutes les marques de chaudières gaz : Vaillant, Viessmann, De Dietrich, Chaffoteaux, Buderus, Saunier Duval, Atlantic, Elm Leblanc, Bosch, Frisquet. Nos techniciens sont certifiés PG et formés aux technologies modernes de chaudières à condensation.",
      },
      {
        q: "Faut-il faire entretenir sa chaudière gaz chaque année ?",
        a: "Oui, l'entretien annuel est obligatoire pour les chaudières gaz (décret 2009). Cet entretien prévient les pannes, maintient le rendement optimal et garantit la sécurité de l'installation. Trashi Plombier réalise ces entretiens sur Metz et délivre le certificat réglementaire.",
      },
    ],
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
      "Trashi Plombier est spécialiste du dépannage de chaudière fioul à Metz : nos chauffagistes expérimentés interviennent rapidement sur toutes marques, diagnostiquent brûleur, cuve et circuit, et vous conseillent sur une éventuelle conversion vers une pompe à chaleur.",
    relatedSlugs: [
      "depannage-chaudiere-gaz-metz",
      "depannage-chaudiere-electrique-metz",
    ],
    localSlug: "chauffagiste-metz",
    bodyParagraphs: [
      "Bien que de plus en plus de logements à Metz passent au gaz naturel ou aux pompes à chaleur, de nombreuses maisons individuelles sur les communes périphériques comme Marly, Augny, Amnéville et Hagondange fonctionnent encore avec une chaudière fioul. Trashi Plombier intervient pour le dépannage de ces chaudières fioul avec la même réactivité que pour tout autre équipement : diagnostic rapide, réparation efficace, et tarifs transparents. Nos techniciens cumulent plus de 10 ans d'expérience sur les chaudières fioul toutes marques.",
      "Les pannes les plus courantes sur une chaudière fioul concernent principalement le brûleur : encrassement de la gicleur, électrode d'allumage usée, résistance de préchauffage défaillante, photorésistance (cellule de détection de flamme) colmatée, ou pompe à fioul grippée. Le dépannage d'un brûleur fioul nécessite une expertise spécifique que nos techniciens possèdent. Nous intervenons sur tous les brûleurs des grandes marques : Riello, Bentone, Cuenod, Weishaupt, Herrmann.",
      "Les problèmes liés à la cuve et au circuit d'alimentation en fioul sont également fréquents : cuve vide ou presque (panne sèche), fioul contaminé par de l'eau (condensation), filtre à fioul colmaté, ou gicleur encrassé. Trashi Plombier vérifie systématiquement l'état de l'alimentation en fioul lors de chaque intervention de dépannage à Metz et dans les communes avoisinantes. Nous pouvons également conseiller sur l'entretien et le remplacement des cuves à fioul.",
      "Dans le contexte de la transition énergétique, de nombreux propriétaires de chaudières fioul à Metz s'interrogent sur la conversion vers une solution plus économique et écologique. L'interdiction de vente de chaudières fioul neuves (effective depuis 2022) et la hausse du prix du fioul domestique rendent le remplacement de plus en plus pertinent. Trashi Plombier vous conseille objectivement sur les solutions alternatives : pompe à chaleur air/eau, chaudière gaz à condensation, et vous informe sur les aides disponibles (MaPrimeRénov').",
      "Trashi Plombier assure le dépannage de chaudières fioul sur tout le secteur de Metz et la Moselle — Woippy, Maizières-lès-Metz, Talange, Amnéville, Thionville. Notre service est disponible 24h/24, 7j/7, pour les urgences chauffage en plein hiver. Chaque intervention se termine par un test de rendement de combustion, vous garantissant une chaudière fioul réparée et optimisée. Devis gratuit — appelez le 078 720 30 23.",
    ],
    faqItems: [
      {
        q: "Ma chaudière fioul ne s'allume plus, que faire ?",
        a: "Vérifiez d'abord votre jauge de fioul — une panne sèche (cuve vide) est la cause n°1 de panne de chaudière fioul. Si la cuve a du fioul, appuyez une fois sur le bouton de reset du brûleur (bouton rouge ou jaune). Si la chaudière ne repart pas, appelez Trashi Plombier au 078 720 30 23.",
      },
      {
        q: "Doit-on faire entretenir une chaudière fioul chaque année ?",
        a: "Oui, l'entretien annuel est obligatoire pour les chaudières fioul (décret 2009), au même titre que les chaudières gaz. Cet entretien comprend le nettoyage du brûleur et de la chaudière, le réglage de la combustion, et la délivrance d'un certificat. Trashi Plombier réalise ces entretiens sur Metz.",
      },
      {
        q: "Ma chaudière fioul consomme beaucoup, est-ce normal ?",
        a: "Une chaudière fioul qui consomme excessivement peut avoir un brûleur mal réglé (trop riche en fioul), un échangeur encrassé, ou une perte de rendement due au vieillissement. Un entretien avec réglage de la combustion peut réduire la consommation de 10 à 20 %. Si la chaudière est ancienne, le remplacement peut être plus rentable.",
      },
      {
        q: "Conseillez-vous de remplacer une vieille chaudière fioul par une pompe à chaleur ?",
        a: "Dans la plupart des cas, oui — surtout pour les maisons bien isolées. Une pompe à chaleur air/eau réduit les coûts de chauffage de 50 à 70 % par rapport au fioul, et des aides comme MaPrimeRénov' peuvent financer une partie significative du remplacement. Trashi Plombier réalise une étude comparative gratuite.",
      },
      {
        q: "Intervenez-vous sur les chaudières fioul de toutes marques à Metz ?",
        a: "Oui, nous dépannons toutes les marques de chaudières fioul : De Dietrich, Chaffoteaux, Buderus, Vaillant, Atlantic, Saunier Duval, ainsi que toutes les marques de brûleurs : Riello, Bentone, Weishaupt, Cuenod. Nos techniciens sont expérimentés sur les technologies fioul basse température et à condensation.",
      },
    ],
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
      "Trashi Plombier assure le dépannage de votre chaudière électrique à Metz avec un diagnostic précis et une réparation rapide : résistance, thermostat, sécurité thermique, carte électronique — tous composants réparés ou remplacés, devis gratuit, intervention 24h/24.",
    relatedSlugs: [
      "depannage-chaudiere-fioul-metz",
      "entretien-chaudiere-metz",
    ],
    localSlug: "chauffagiste-metz",
    bodyParagraphs: [
      "La chaudière électrique est une solution de chauffage central appréciée pour sa simplicité d'installation, l'absence de conduit de fumée et de combustible à stocker, et son fonctionnement silencieux. À Metz et dans les communes de la Moselle, on la trouve principalement dans les immeubles collectifs et les logements sans accès au gaz naturel. Trashi Plombier assure le dépannage de chaudières électriques de toutes marques et puissances sur l'ensemble du secteur messin.",
      "Les pannes les plus fréquentes sur une chaudière électrique à Metz concernent les éléments chauffants (résistances électriques), le thermostat de sécurité (thermostat de réarmement), la sonde de température NTC, le régulateur électronique, la pompe de circulation du circuit de chauffage, et le vase d'expansion. Trashi Plombier procède à un diagnostic électronique complet de votre chaudière avant toute intervention, pour identifier précisément la pièce défaillante et éviter les remplacements inutiles.",
      "Une panne fréquente sur les chaudières électriques est le déclenchement répété du thermostat de sécurité (thermostat de réarmement manuel, généralement accessible derrière une trappe). Ce composant se déclenche en cas de surchauffe pour protéger la chaudière. S'il se réenclenche mais que la chaudière tombe en défaut à nouveau rapidement, cela indique une cause sous-jacente à investiguer : résistance partiellement grippée, débit insuffisant dans le circuit (pompe grippée), ou problème de régulation. Un diagnostic par Trashi Plombier est nécessaire.",
      "Le tartre est l'ennemi numéro un des chaudières électriques à Metz, où la dureté de l'eau est significative. Il s'accumule sur les résistances électriques, créant une enveloppe isolante qui réduit les échanges thermiques et provoque des surchauffes. Un détartrage régulier des résistances prolonge considérablement la durée de vie de la chaudière et maintient son efficacité énergétique. Trashi Plombier réalise ces opérations de maintenance préventive sur Metz et les communes limitrophes.",
      "Trashi Plombier intervient pour le dépannage de chaudières électriques sur tout le secteur de Metz : Longeville-lès-Metz, Montigny-lès-Metz, Woippy, Maizières-lès-Metz. Notre service est disponible 24h/24 et 7j/7. Si votre chaudière électrique est ancienne (plus de 15 ans), nous vous présentons également les avantages d'une conversion vers une pompe à chaleur air/eau, bien plus économique en énergie. Appelez le 078 720 30 23 pour un devis gratuit et une intervention rapide.",
    ],
    faqItems: [
      {
        q: "Pourquoi ma chaudière électrique ne chauffe-t-elle plus ?",
        a: "Les causes les plus fréquentes sont : résistance électrique hors service, thermostat de sécurité déclenché (à réarmer manuellement), sonde de température défectueuse, problème d'alimentation électrique (disjoncteur déclenché), ou pompe de circulation grippée. Trashi Plombier diagnostique et répare votre chaudière électrique à Metz.",
      },
      {
        q: "Le thermostat de sécurité de ma chaudière s'est déclenché, que faire ?",
        a: "Laissez la chaudière refroidir 15 à 20 minutes, puis appuyez sur le bouton de réarmement (thermostat de sécurité). Si la chaudière redémarre normalement, surveillez si elle déclenche à nouveau. Un déclenchement répété indique un problème à diagnostiquer — appelez Trashi Plombier.",
      },
      {
        q: "Peut-on entretenir une chaudière électrique soi-même ?",
        a: "Les interventions électriques sur une chaudière doivent être réalisées par un professionnel qualifié. En revanche, vous pouvez vérifier régulièrement la pression du circuit de chauffage (manomètre entre 1 et 2 bars) et purger les radiateurs en début de saison. Pour tout le reste, faites appel à Trashi Plombier.",
      },
      {
        q: "Une chaudière électrique est-elle plus chère à la réparation qu'une chaudière gaz ?",
        a: "Pas nécessairement. Les composants d'une chaudière électrique (résistances, sonde NTC, carte électronique) sont souvent moins complexes que ceux d'une chaudière gaz. En revanche, si la carte électronique est défaillante, le coût peut être important. Le diagnostic gratuit de Trashi Plombier vous permet de prendre une décision éclairée.",
      },
      {
        q: "Vaut-il mieux remplacer une vieille chaudière électrique par une pompe à chaleur ?",
        a: "Dans de nombreux cas, oui. Une pompe à chaleur air/eau consomme 3 à 4 fois moins d'électricité qu'une chaudière électrique pour le même confort. Des aides comme MaPrimeRénov' peuvent financer une partie du remplacement. Trashi Plombier réalise une étude comparative gratuite pour vous aider à décider.",
      },
    ],
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
  bodyParagraphs?: string[];
  faqItems?: { q: string; a: string }[];
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
      "Trashi Plombier, votre plombier à Metz depuis plus de 10 ans : urgence 24h/24, dépannage rapide, installation et rénovation salle de bain. Intervention en moins de 30 minutes sur Metz (57000) et toute la Moselle, devis gratuit.",
    relatedZoneSlugs: ["plombier-montigny-les-metz", "plombier-woippy"],
    bodyParagraphs: [
      "Trashi Plombier est votre plombier de référence à Metz depuis plus de 10 ans. Basés en Moselle, nous intervenons sur l'ensemble de la ville de Metz — centre-ville, Queuleu, Borny, Bellecroix, Sablon, Ban-Saint-Martin et tous les quartiers — pour tous vos travaux de plomberie, du dépannage d'urgence à la rénovation complète de salle de bain.",
      "Notre service de dépannage plomberie à Metz fonctionne 24h/24 et 7j/7. Fuite d'eau, canalisation bouchée, WC hors service, chauffe-eau en panne : un technicien qualifié est chez vous en moins de 30 minutes. Avec plus de 120 clients satisfaits et un taux de satisfaction de 98 %, nous sommes l'un des plombiers les plus recommandés de Metz.",
      "Nous prenons en charge l'intégralité de vos travaux de plomberie à Metz : installation de tuyauterie neuve, remplacement de robinetterie, pose de WC et douche à l'italienne, rénovation complète de salle de bain, recherche de fuite par caméra thermique, débouchage par haute pression. Chaque intervention est réalisée dans les règles de l'art avec des matériaux de qualité et une finition soignée.",
      "Trashi Plombier intervient également dans toutes les communes de l'agglomération messine : Montigny-lès-Metz, Woippy, Marly, Augny, Longeville-lès-Metz, Maizières-lès-Metz, Talange, Hagondange, Amnéville et Thionville. Quel que soit l'endroit où vous vous trouvez en Moselle (57), nous pouvons être là en moins de 30 minutes.",
      "Tous nos devis sont gratuits et sans engagement. Avant chaque intervention, nous vous communiquons une estimation détaillée : aucune surprise sur votre facture. Nous pratiquons des tarifs transparents, sans majoration cachée le soir ou le week-end. Appelez-nous au 078 720 30 23 pour une intervention rapide à Metz.",
    ],
    faqItems: [
      { q: "Quel plombier appeler en urgence à Metz ?", a: "Appelez Trashi Plombier au 078 720 30 23. Nous sommes disponibles 24h/24 et 7j/7, avec une intervention garantie en moins de 30 minutes sur Metz et ses alentours." },
      { q: "Combien coûte un plombier à Metz ?", a: "Le tarif dépend de la nature de l'intervention. Un dépannage simple commence à partir de 80 €. Nous établissons un devis gratuit avant tout travail : vous connaissez le prix avant que nous commencions." },
      { q: "Intervenez-vous dans tous les quartiers de Metz ?", a: "Oui, nous couvrons tous les quartiers de Metz : centre-ville, Queuleu, Borny, Bellecroix, Sablon, Devant-les-Ponts, Ban-Saint-Martin, Magny, et toutes les communes de l'agglomération messine." },
      { q: "Proposez-vous des devis gratuits à Metz ?", a: "Oui, tous nos devis à Metz sont gratuits et sans engagement. Nous vous remettons une estimation détaillée avant chaque intervention, que ce soit pour un dépannage ou des travaux de rénovation." },
      { q: "Combien de temps mettez-vous pour arriver à Metz ?", a: "Nous garantissons une intervention en moins de 30 minutes sur Metz en situation d'urgence. Pour les travaux planifiés, nous convenons d'un rendez-vous à votre convenance." },
    ],
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
      "Besoin d'un plombier à Montigny-lès-Metz (57158) ? Trashi Plombier intervient en moins de 30 minutes pour tout dépannage, installation ou rénovation — disponible 24h/24 et 7j/7.",
    relatedZoneSlugs: ["plombier-metz", "plombier-longeville-les-metz"],
    bodyParagraphs: [
      "Montigny-lès-Metz est une commune résidentielle de la banlieue sud de Metz, comptant plus de 20 000 habitants. Trashi Plombier y intervient régulièrement pour des missions de dépannage plomberie, d'installation sanitaire et de rénovation de salle de bain. Notre base à Metz nous permet d'atteindre Montigny-lès-Metz (57158) en moins de 15 minutes.",
      "Pour toute urgence plomberie à Montigny-lès-Metz, appelez-nous au 078 720 30 23. Que ce soit une fuite sous l'évier, un WC bouché en pleine nuit ou un chauffe-eau qui lâche un dimanche matin, un technicien qualifié est disponible 24h/24 et 7j/7 pour intervenir rapidement à votre domicile ou dans votre entreprise.",
      "Nous réalisons l'ensemble des travaux de plomberie à Montigny-lès-Metz : remplacement de robinetterie (mitigeurs, thermostatiques), pose de douche à l'italienne ou de baignoire, installation de WC suspendu, recherche et réparation de fuite d'eau, débouchage de canalisation par haute pression. Nos plombiers sont certifiés et travaillent avec des matériaux conformes aux normes en vigueur.",
      "Les habitants de Montigny-lès-Metz font confiance à Trashi Plombier depuis plus de 10 ans. Avec 98 % de clients satisfaits et plus de 120 interventions réalisées dans la région messine, nous sommes le plombier de proximité recommandé à Montigny-lès-Metz et dans les communes voisines de Metz, Longeville-lès-Metz et Augny.",
      "Devis gratuit et sans engagement pour toute intervention à Montigny-lès-Metz. Nous vous communiquons le prix avant de commencer — pas de surprise sur la facture. Pour un dépannage urgent ou pour planifier vos travaux de plomberie à Montigny-lès-Metz (57158), contactez-nous dès maintenant.",
    ],
    faqItems: [
      { q: "Y a-t-il un plombier disponible en urgence à Montigny-lès-Metz ?", a: "Oui, Trashi Plombier intervient en urgence à Montigny-lès-Metz 24h/24 et 7j/7. Depuis Metz, nous atteignons Montigny-lès-Metz en moins de 15 minutes." },
      { q: "Quel est le tarif d'un plombier à Montigny-lès-Metz ?", a: "Le devis est gratuit. Le tarif varie selon le type d'intervention : dépannage simple à partir de 80 €, tarif indiqué avant toute intervention." },
      { q: "Réparez-vous les fuites d'eau à Montigny-lès-Metz ?", a: "Oui, nous intervenons pour toutes les fuites d'eau à Montigny-lès-Metz : robinets, canalisations, joints, tuyauterie encastrée. Nous utilisons une caméra d'inspection pour les fuites cachées." },
      { q: "Débouchez-vous les canalisations à Montigny-lès-Metz ?", a: "Oui, nous réalisons le débouchage de canalisations à Montigny-lès-Metz par haute pression ou furet électrique : WC, éviers, douches, colonnes d'immeuble." },
      { q: "Faites-vous la rénovation de salle de bain à Montigny-lès-Metz ?", a: "Oui, nous réalisons des rénovations complètes ou partielles de salle de bain à Montigny-lès-Metz : pose de douche, remplacement de baignoire, installation de robinetterie haut de gamme." },
    ],
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
      "Trashi Plombier intervient à Woippy (57140) pour tous vos besoins en plomberie — urgence 24h/24, débouchage, installation et rénovation. Moins de 20 minutes depuis Metz, devis gratuit.",
    relatedZoneSlugs: ["plombier-metz", "plombier-maizieres-les-metz"],
    bodyParagraphs: [
      "Woippy est une commune de la banlieue nord de Metz, avec un tissu mixte de logements résidentiels et d'activités industrielles. Trashi Plombier y assure des interventions de plomberie rapides et fiables, que vous soyez un particulier, un bailleur social ou un professionnel. Depuis notre base messine, nous sommes à Woippy (57140) en moins de 20 minutes.",
      "En cas d'urgence plomberie à Woippy, notre équipe est disponible 24h/24 et 7j/7. Fuite d'eau importante, canalisation bouchée, panne de chauffe-eau : nous intervenons le jour même, y compris les week-ends et jours fériés. Un diagnostic précis est posé sur place avant tout travail, et le devis vous est remis gratuitement.",
      "Nos services à Woippy couvrent : débouchage de canalisation par hydrocurage haute pression, réparation et remplacement de tuyauterie, installation de robinetterie et de sanitaires, pose de WC suspendu ou à poser, rénovation de salle de bain, recherche de fuite non destructive par caméra ou gaz traceur.",
      "Nous connaissons bien le parc immobilier de Woippy, avec ses copropriétés et maisons individuelles aux installations parfois anciennes. Nos techniciens sont équipés pour intervenir sur toutes les configurations : tuyauterie en fonte, PVC ou cuivre, robinetterie ancienne ou moderne. Nous couvrons également les communes voisines de Maizières-lès-Metz et Metz.",
      "Faites confiance à Trashi Plombier pour vos travaux de plomberie à Woippy. Avec 10 ans d'expérience en Moselle et 98 % de clients satisfaits, notre réputation est bâtie sur la qualité du travail et la transparence des tarifs. Appelez le 078 720 30 23 pour un devis gratuit ou une intervention d'urgence à Woippy (57140).",
    ],
    faqItems: [
      { q: "Quel plombier intervient en urgence à Woippy ?", a: "Trashi Plombier intervient en urgence à Woippy 24h/24 et 7j/7. Depuis Metz, nous arrivons à Woippy en moins de 20 minutes." },
      { q: "Intervenez-vous pour les copropriétés à Woippy ?", a: "Oui, nous travaillons avec des syndics et copropriétés à Woippy pour le débouchage de colonnes, la réparation de fuites communes et l'entretien des installations sanitaires." },
      { q: "Peut-on déboucher une canalisation en urgence à Woippy ?", a: "Oui, le débouchage d'urgence à Woippy est disponible 24h/24. Nous utilisons la haute pression ou le furet électrique selon le type de bouchon." },
      { q: "Remplacez-vous des tuyauteries anciennes à Woippy ?", a: "Oui, nous remplaçons les tuyauteries vieillissantes en fonte ou plomb à Woippy par des canalisations en PVC ou cuivre, conformes aux normes actuelles." },
      { q: "Quel est le délai d'intervention d'un plombier à Woippy ?", a: "En urgence, moins de 20 minutes depuis Metz. Pour les travaux planifiés, nous convenons d'un rendez-vous à votre convenance dans la semaine." },
    ],
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
      "Plombier à Augny (57685) — Trashi Plombier prend en charge tous vos travaux de plomberie à Augny et ses environs. Dépannage 24h/24, devis gratuit, intervention express depuis Metz.",
    relatedZoneSlugs: ["plombier-metz", "plombier-marly-moselle"],
    bodyParagraphs: [
      "Augny est une petite commune de la banlieue sud-ouest de Metz, proche de l'aéroport Metz-Nancy-Lorraine. Trashi Plombier dessert Augny (57685) pour l'ensemble des besoins en plomberie : dépannage d'urgence, installation de sanitaires, rénovation de salle de bain et débouchage de canalisation. Notre temps d'intervention depuis Metz est inférieur à 25 minutes.",
      "Les habitants d'Augny peuvent compter sur Trashi Plombier à toute heure. Notre service d'urgence plomberie est actif 24h/24 et 7j/7, y compris les week-ends et jours fériés. Qu'il s'agisse d'une fuite sous l'évier, d'un WC bouché ou d'une canalisation obstruée, nous intervenons rapidement avec le matériel adapté.",
      "À Augny, nous réalisons : installation et remplacement de robinetterie (mitigeurs, thermostatiques, cuisine, salle de bain), pose de douche à l'italienne ou de baignoire, installation de WC suspendu avec bâti-support, rénovation complète de salle de bain, débouchage par haute pression, réparation de fuite visible ou encastrée.",
      "Le tissu résidentiel d'Augny comprend de nombreuses maisons individuelles avec des installations parfois datées. Nos plombiers expérimentés interviennent aussi bien sur les constructions récentes que sur les maisons anciennes, pour des réparations ponctuelles ou des rénovations complètes. Nous intervenons également à Marly (57155), commune voisine d'Augny.",
      "Demandez votre devis gratuit pour vos travaux de plomberie à Augny. Trashi Plombier vous garantit des tarifs transparents, un travail soigné et une intervention rapide. Pour une urgence ou pour planifier une rénovation à Augny (57685), appelez le 078 720 30 23.",
    ],
    faqItems: [
      { q: "Y a-t-il un plombier à Augny disponible 24h/24 ?", a: "Oui, Trashi Plombier intervient à Augny 24h/24 et 7j/7. Depuis Metz, le délai d'intervention est inférieur à 25 minutes." },
      { q: "Faites-vous la rénovation de salle de bain à Augny ?", a: "Oui, nous réalisons des rénovations complètes de salle de bain à Augny : douche italienne, baignoire, robinetterie haut de gamme, WC suspendu. Devis gratuit." },
      { q: "Intervenez-vous pour les maisons individuelles à Augny ?", a: "Oui, nous intervenons pour les maisons individuelles et les appartements à Augny pour tout type de travaux de plomberie." },
      { q: "Quel est le tarif d'un dépannage plomberie à Augny ?", a: "Le devis est gratuit. Un dépannage simple commence à partir de 80 €. Nous vous communiquons le prix avant tout commencement des travaux." },
      { q: "Débouchez-vous les canalisations à Augny ?", a: "Oui, nous débouchons WC, éviers, douches et colonnes à Augny par haute pression ou furet électrique. Intervention possible le jour même." },
    ],
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
      "Votre plombier à Marly en Moselle (57155) — Trashi Plombier intervient pour dépannage urgence, installation et rénovation à Marly, 24h/24 et 7j/7, moins de 20 minutes de Metz.",
    relatedZoneSlugs: ["plombier-metz", "plombier-augny"],
    bodyParagraphs: [
      "Marly est une commune résidentielle du sud de Metz, fortement peuplée et dotée d'un parc immobilier varié. Trashi Plombier est votre plombier de proximité à Marly (57155), spécialisé dans le dépannage toutes heures, l'installation sanitaire et la rénovation de salle de bain. Nous atteignons Marly depuis notre base messine en moins de 20 minutes.",
      "Notre service d'urgence plomberie à Marly est opérationnel 24h/24 et 7j/7. Trashi Plombier gère toutes les situations critiques : fuite d'eau soudaine, canalisation bouchée, panne de chauffe-eau en plein hiver, dégâts des eaux. Nous diagnostiquons et réparons sur place, avec le matériel nécessaire directement dans notre véhicule d'intervention.",
      "Pour les travaux de plomberie à Marly, notre offre est complète : remplacement et installation de robinetterie haut de gamme, pose de douche à l'italienne, rénovation intégrale de salle de bain, installation de WC suspendu ou broyeur, débouchage de canalisation par hydrocurage, détection de fuite non destructive. Chaque chantier est remis propre et dans les délais convenus.",
      "Marly compte de nombreuses résidences construites dans les années 1970-1990, dont les installations sanitaires commencent à vieillir. Nos plombiers sont habitués à ce type de parc immobilier et proposent des solutions de mise aux normes efficaces et économiques. Nous intervenons aussi bien pour une réparation urgente que pour une rénovation planifiée.",
      "Trashi Plombier est le plombier recommandé à Marly (Moselle) pour sa réactivité, son sérieux et ses tarifs transparents. Devis gratuit et sans engagement sur simple appel au 078 720 30 23. Nous couvrons également Augny (57685) et Metz (57000), communes voisines de Marly.",
    ],
    faqItems: [
      { q: "Quel plombier appeler en urgence à Marly (Moselle) ?", a: "Trashi Plombier est disponible 24h/24 à Marly. Appelez le 078 720 30 23 pour une intervention en moins de 20 minutes." },
      { q: "Faites-vous la pose de douche italienne à Marly ?", a: "Oui, nous installons des douches à l'italienne à Marly avec receveur extra-plat, paroi en verre et robinetterie thermostatique. Devis gratuit." },
      { q: "Remplacez-vous un chauffe-eau en urgence à Marly ?", a: "Oui, nous remplaçons les chauffe-eaux en panne à Marly le jour même en cas d'urgence. Toutes marques, tous types." },
      { q: "Faites-vous la rénovation salle de bain à Marly ?", a: "Oui, rénovation complète ou partielle à Marly : douche, baignoire, WC, robinetterie. Nous respectons votre budget et vos délais." },
      { q: "Intervenez-vous le dimanche à Marly ?", a: "Oui, Trashi Plombier est disponible le dimanche et les jours fériés à Marly. Pas de majoration cachée : le tarif est annoncé avant intervention." },
    ],
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
      "Plombier à Longeville-lès-Metz (57050) — Trashi Plombier assure dépannage urgence 24h/24, installation et rénovation. Intervention rapide depuis Metz, devis gratuit.",
    relatedZoneSlugs: ["plombier-metz", "plombier-montigny-les-metz"],
    bodyParagraphs: [
      "Longeville-lès-Metz est une commune de l'agglomération messine, située à l'ouest de Metz, avec un parc résidentiel dense. Trashi Plombier intervient à Longeville-lès-Metz (57050) pour tous vos besoins en plomberie : urgences, travaux d'installation, rénovation de salle de bain et débouchage. Temps de trajet depuis Metz : moins de 15 minutes.",
      "Disponible 24h/24 et 7j/7, notre service d'urgence plomberie couvre Longeville-lès-Metz à toute heure. Nos techniciens interviennent rapidement pour stopper une fuite, déboucher une canalisation ou remplacer un équipement défaillant. Nous apportons tout le matériel nécessaire à bord de notre véhicule pour résoudre la plupart des problèmes en une seule visite.",
      "À Longeville-lès-Metz, nous réalisons : réparation et remplacement de robinetterie et mitigeurs, installation de douche à l'italienne ou cabine de douche, pose et remplacement de WC (suspendu, à poser, broyeur), rénovation complète de salle de bain, détection et réparation de fuite d'eau, débouchage par haute pression.",
      "Les maisons et appartements de Longeville-lès-Metz présentent des configurations variées. Nos plombiers sont expérimentés sur toutes les typologies de logements et toutes les générations d'installations sanitaires. Que vous soyez propriétaire ou locataire, nous intervenons avec le même niveau de soin et d'efficacité.",
      "Pour un devis gratuit ou une intervention d'urgence à Longeville-lès-Metz (57050), contactez Trashi Plombier au 078 720 30 23. Nous intervenons également à Montigny-lès-Metz (57158) et Metz (57000), communes voisines.",
    ],
    faqItems: [
      { q: "Trashi Plombier intervient-il à Longeville-lès-Metz ?", a: "Oui, nous couvrons Longeville-lès-Metz 24h/24. Depuis Metz, l'intervention est possible en moins de 15 minutes." },
      { q: "Peut-on avoir un devis gratuit à Longeville-lès-Metz ?", a: "Oui, tous nos devis à Longeville-lès-Metz sont gratuits et sans engagement. Contactez-nous pour obtenir une estimation." },
      { q: "Faites-vous le débouchage à Longeville-lès-Metz ?", a: "Oui, débouchage de WC, évier, douche et canalisation à Longeville-lès-Metz, disponible en urgence 24h/24." },
      { q: "Installez-vous des douches italiennes à Longeville-lès-Metz ?", a: "Oui, installation complète de douche à l'italienne à Longeville-lès-Metz : receveur, paroi, robinetterie. Devis gratuit." },
      { q: "Réparez-vous les fuites d'eau à Longeville-lès-Metz ?", a: "Oui, réparation de fuites visibles ou encastrées à Longeville-lès-Metz. Inspection par caméra si nécessaire." },
    ],
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
      "Trashi Plombier, votre plombier à Maizières-lès-Metz (57280) : dépannage urgence 24h/24, débouchage canalisation, installation sanitaire. Intervention rapide depuis Metz, devis gratuit.",
    relatedZoneSlugs: ["plombier-metz", "plombier-talange"],
    bodyParagraphs: [
      "Maizières-lès-Metz est une commune industrielle et résidentielle de la vallée de la Moselle, au nord de Metz. Trashi Plombier y intervient pour tous types de travaux de plomberie : urgences nocturnes, débouchage, réparation de fuite et rénovation sanitaire. Depuis notre base à Metz (57000), nous atteignons Maizières-lès-Metz (57280) en moins de 25 minutes.",
      "Notre service d'urgence plomberie à Maizières-lès-Metz fonctionne 24h/24 et 7j/7. En cas de fuite d'eau, de WC bouché ou de canalisation obstruée, appelez le 078 720 30 23. Un technicien qualifié prend en charge votre urgence rapidement et vous communique le tarif avant toute intervention.",
      "Nos interventions à Maizières-lès-Metz comprennent : débouchage de canalisation par hydrocurage haute pression ou furet électrique, réparation et remplacement de robinetterie, installation de sanitaires (WC, douche, baignoire), rénovation de salle de bain, recherche de fuite par caméra d'inspection. Nous intervenons sur maisons individuelles et copropriétés.",
      "Maizières-lès-Metz abrite de nombreuses résidences collectives dont certaines ont besoin d'une remise aux normes des installations sanitaires. Trashi Plombier travaille avec les syndics de copropriété et les bailleurs de la commune pour l'entretien et la rénovation des réseaux plomberie. Nos techniciens sont habilités pour intervenir dans les parties communes.",
      "Pour toute intervention de plomberie à Maizières-lès-Metz (57280), contactez Trashi Plombier. Devis gratuit, tarifs transparents, 10 ans d'expérience en Moselle. Nous couvrons également Talange (57525) et Metz (57000).",
    ],
    faqItems: [
      { q: "Y a-t-il un plombier d'urgence à Maizières-lès-Metz ?", a: "Oui, Trashi Plombier intervient en urgence à Maizières-lès-Metz 24h/24, 7j/7. Délai d'intervention : moins de 25 minutes depuis Metz." },
      { q: "Faites-vous le débouchage à Maizières-lès-Metz ?", a: "Oui, débouchage professionnel à Maizières-lès-Metz par haute pression ou furet. WC, évier, colonne d'immeuble. Urgence disponible." },
      { q: "Intervenez-vous pour les copropriétés à Maizières-lès-Metz ?", a: "Oui, nous travaillons avec les syndics de Maizières-lès-Metz pour l'entretien et la réparation des installations sanitaires communes." },
      { q: "Réparez-vous les fuites d'eau à Maizières-lès-Metz ?", a: "Oui, réparation de toutes fuites à Maizières-lès-Metz. Caméra d'inspection disponible pour les fuites cachées." },
      { q: "Quel tarif pour un plombier à Maizières-lès-Metz ?", a: "Devis gratuit avant intervention. Dépannage à partir de 80 €, tarif communiqué avant tout travail." },
    ],
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
      "Plombier à Talange (57525) — Trashi Plombier, spécialiste du dépannage et de l'installation plomberie en Moselle. Urgence 24h/24, intervention rapide, devis gratuit.",
    relatedZoneSlugs: ["plombier-hagondange", "plombier-maizieres-les-metz"],
    bodyParagraphs: [
      "Talange est une petite commune de la vallée de la Moselle, entre Maizières-lès-Metz et Hagondange. Trashi Plombier dessert Talange (57525) pour toutes vos urgences et travaux de plomberie. Depuis notre base à Metz, nous sommes présents à Talange en moins de 30 minutes.",
      "Disponible 24h/24 et 7j/7, Trashi Plombier répond à toutes les urgences plomberie à Talange : fuite d'eau, WC bouché, canalisation obstruée, chauffe-eau hors service. Un diagnostic est réalisé sur place et le tarif vous est communiqué avant toute intervention. Pas de surprise sur la facture.",
      "Nos prestations à Talange incluent : dépannage plomberie toutes causes, débouchage par haute pression ou furet électrique, réparation et remplacement de robinetterie, installation de WC (suspendu, à poser, broyeur), pose de douche, rénovation de salle de bain. Nous utilisons du matériel professionnel de qualité.",
      "Les habitants de Talange apprécient notre réactivité et notre sérieux. En 10 ans d'activité en Moselle, nous avons bâti une solide réputation dans toute la vallée de la Moselle, de Metz à Hagondange. Notre taux de satisfaction de 98 % témoigne de notre engagement envers la qualité.",
      "Pour un devis gratuit ou une intervention d'urgence à Talange (57525), appelez Trashi Plombier au 078 720 30 23. Nous couvrons également Hagondange (57300) et Maizières-lès-Metz (57280).",
    ],
    faqItems: [
      { q: "Trashi Plombier intervient-il à Talange ?", a: "Oui, nous couvrons Talange (57525) 24h/24 et 7j/7. Délai d'intervention depuis Metz : moins de 30 minutes." },
      { q: "Débouchez-vous les canalisations à Talange ?", a: "Oui, débouchage à Talange par haute pression ou furet. WC, évier, colonne. Urgence disponible 24h/24." },
      { q: "Remplacez-vous la robinetterie à Talange ?", a: "Oui, remplacement de robinets, mitigeurs et thermostatiques à Talange. Toutes marques. Devis gratuit." },
      { q: "Quel délai pour un plombier à Talange ?", a: "En urgence, moins de 30 minutes depuis Metz. Pour travaux planifiés, rendez-vous dans la semaine." },
      { q: "Faites-vous de la rénovation de salle de bain à Talange ?", a: "Oui, rénovation complète ou partielle à Talange. Douche italienne, WC suspendu, robinetterie. Devis gratuit." },
    ],
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
      "Trashi Plombier intervient à Hagondange (57300) pour tous vos besoins en plomberie : urgence 24h/24, dépannage, installation, rénovation. Délai d'intervention inférieur à 30 minutes depuis Metz.",
    relatedZoneSlugs: ["plombier-talange", "plombier-amneville"],
    bodyParagraphs: [
      "Hagondange est une commune de la vallée de la Moselle, ancienne ville industrielle reconvertie, avec un parc immobilier varié. Trashi Plombier est votre plombier de confiance à Hagondange (57300) pour le dépannage d'urgence, l'installation sanitaire et la rénovation de salle de bain. Notre équipe intervient en moins de 30 minutes depuis Metz.",
      "Notre numéro d'urgence plomberie à Hagondange est le 078 720 30 23, disponible 24h/24 et 7j/7. Fuite d'eau, WC bouché, canalisation obstruée ou chauffe-eau défaillant : nos techniciens interviennent rapidement avec le matériel nécessaire pour résoudre votre problème le jour même.",
      "Nos services à Hagondange : débouchage de canalisation par haute pression, réparation de fuite d'eau, remplacement de robinetterie et mitigeurs, installation de douche à l'italienne, pose de WC suspendu, rénovation complète de salle de bain. Chaque intervention est réalisée dans le respect des normes DTU en vigueur.",
      "Hagondange possède un parc immobilier diversifié, avec des maisons individuelles et des immeubles collectifs. Nos plombiers interviennent sur tous types de logements, du studio à la grande maison. Nous connaissons les contraintes spécifiques des installations de cette région industrielle de Moselle.",
      "Trashi Plombier, c'est 10 ans d'expérience en Moselle, 120+ clients satisfaits et 98 % de taux de satisfaction. Pour un devis gratuit à Hagondange (57300), contactez-nous. Nous couvrons également Talange (57525) et Amnéville (57360).",
    ],
    faqItems: [
      { q: "Quel plombier appeler en urgence à Hagondange ?", a: "Trashi Plombier, au 078 720 30 23, disponible 24h/24 à Hagondange. Intervention en moins de 30 minutes depuis Metz." },
      { q: "Faites-vous la rénovation de salle de bain à Hagondange ?", a: "Oui, rénovation complète à Hagondange : douche italienne, baignoire, WC, robinetterie. Devis gratuit, délais respectés." },
      { q: "Débouchez-vous les canalisations à Hagondange ?", a: "Oui, débouchage professionnel à Hagondange. WC, éviers, colonnes d'immeuble. Disponible 24h/24." },
      { q: "Remplacez-vous un chauffe-eau à Hagondange ?", a: "Oui, remplacement et installation de chauffe-eau à Hagondange. Toutes marques. Devis gratuit." },
      { q: "Trashi Plombier intervient-il le week-end à Hagondange ?", a: "Oui, nous intervenons le week-end et les jours fériés à Hagondange, sans majoration cachée." },
    ],
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
      "Plombier à Amnéville (57360) — Trashi Plombier, votre expert plomberie en Moselle. Dépannage urgence 24h/24, installation, rénovation salle de bain. Devis gratuit, intervention rapide.",
    relatedZoneSlugs: ["plombier-hagondange", "plombier-metz"],
    bodyParagraphs: [
      "Amnéville est une commune de la Moselle connue pour son complexe de loisirs, son zoo et ses thermes. Elle accueille de nombreux résidents et professionnels qui ont besoin d'un plombier fiable et réactif. Trashi Plombier intervient à Amnéville (57360) pour tous vos besoins en plomberie, en moins de 30 minutes depuis Metz.",
      "Notre service de plomberie d'urgence à Amnéville est disponible 24h/24 et 7j/7. Nous intervenons pour les particuliers et les professionnels (hôtels, restaurants, établissements de loisirs) pour tout problème sanitaire urgent. Devis gratuit avant intervention, tarifs transparents.",
      "À Amnéville, nous proposons : dépannage plomberie toutes urgences, débouchage de canalisation, réparation de fuite d'eau, installation et remplacement de robinetterie, pose de douche et de WC, rénovation de salle de bain. Nos plombiers sont équipés du dernier matériel professionnel pour une intervention efficace dès la première visite.",
      "Trashi Plombier connaît bien les établissements d'Amnéville et leurs contraintes spécifiques en matière de plomberie. Que vous soyez un particulier dans une résidence ou un professionnel avec un besoin urgent, nous sommes votre interlocuteur local fiable. 10 ans d'expérience, 98 % de clients satisfaits.",
      "Pour une urgence ou un devis gratuit à Amnéville (57360), contactez Trashi Plombier au 078 720 30 23. Nous intervenons également à Hagondange (57300) et Metz (57000).",
    ],
    faqItems: [
      { q: "Y a-t-il un plombier à Amnéville disponible 24h/24 ?", a: "Oui, Trashi Plombier intervient à Amnéville 24h/24 et 7j/7. Délai d'intervention : moins de 30 minutes depuis Metz." },
      { q: "Intervenez-vous pour les professionnels à Amnéville ?", a: "Oui, nous intervenons pour les hôtels, restaurants et établissements de loisirs à Amnéville pour tout problème plomberie." },
      { q: "Faites-vous le débouchage à Amnéville ?", a: "Oui, débouchage professionnel à Amnéville par haute pression ou furet. Urgence disponible 24h/24." },
      { q: "Réparez-vous les fuites à Amnéville ?", a: "Oui, réparation de fuites d'eau à Amnéville, visibles ou cachées. Caméra d'inspection disponible." },
      { q: "Quel est le tarif d'un plombier à Amnéville ?", a: "Devis gratuit. Dépannage à partir de 80 €. Tarif communiqué avant tout travail, sans surprise." },
    ],
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
      "Trashi Plombier à Thionville (57100) : plombier disponible 24h/24 pour dépannage urgent, installation et rénovation. Intervention rapide en Moselle nord, devis gratuit.",
    relatedZoneSlugs: ["plombier-hagondange", "plombier-metz"],
    bodyParagraphs: [
      "Thionville est la deuxième ville de la Moselle, située à 30 km au nord de Metz. Trashi Plombier y étend son activité pour desservir les habitants et entreprises de Thionville (57100) en matière de plomberie. Notre équipe qualifiée se déplace à Thionville pour les urgences et les travaux planifiés, avec un engagement de qualité et de réactivité.",
      "Notre service d'urgence plomberie est actif 24h/24 et 7j/7 à Thionville. Que vous ayez une fuite d'eau soudaine, une canalisation bouchée ou un chauffe-eau en panne, appelez le 078 720 30 23. Nous intervenons dans les meilleurs délais sur Thionville et les communes environnantes de Moselle nord.",
      "Nos prestations à Thionville couvrent l'ensemble des besoins plomberie : dépannage urgent, débouchage de canalisation par hydrocurage, réparation et remplacement de robinetterie, installation de douche à l'italienne, pose de WC suspendu, rénovation complète de salle de bain, recherche et réparation de fuite. Devis gratuit avant toute intervention.",
      "Thionville est une ville dynamique avec un parc immobilier diversifié : appartements en copropriété, maisons individuelles, logements sociaux. Nos plombiers expérimentés sont habitués à toutes les configurations et interviennent aussi bien pour un robinet qui goutte que pour une rénovation complète de salle de bain.",
      "Trashi Plombier s'engage à intervenir rapidement à Thionville (57100) avec des tarifs transparents et un travail de qualité. 10 ans d'expérience en Moselle, 120+ clients satisfaits. Contactez-nous pour un devis gratuit ou une intervention d'urgence. Nous couvrons également Hagondange (57300) et toute la Moselle.",
    ],
    faqItems: [
      { q: "Trashi Plombier intervient-il à Thionville ?", a: "Oui, nous couvrons Thionville (57100) et toute la Moselle nord. Appelez le 078 720 30 23 pour une intervention urgente ou un devis." },
      { q: "Quel plombier appeler en urgence à Thionville ?", a: "Trashi Plombier est disponible 24h/24 à Thionville. Nous intervenons pour toute urgence plomberie dans les meilleurs délais." },
      { q: "Faites-vous la rénovation salle de bain à Thionville ?", a: "Oui, rénovation complète à Thionville : douche italienne, baignoire, WC, robinetterie. Devis gratuit, travail soigné." },
      { q: "Débouchez-vous les canalisations à Thionville ?", a: "Oui, débouchage professionnel à Thionville par haute pression ou furet. WC, éviers, colonnes. Urgence 24h/24." },
      { q: "Proposez-vous des devis gratuits à Thionville ?", a: "Oui, tous nos devis à Thionville sont gratuits et sans engagement. Contactez-nous par téléphone ou via notre formulaire en ligne." },
    ],
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
      "Trashi Plombier, votre chauffagiste à Metz depuis 10 ans : installation chaudière, entretien annuel, dépannage chauffage 24h/24. Certifié toutes marques, intervention rapide sur Metz (57000), devis gratuit.",
    relatedZoneSlugs: [
      "chauffagiste-montigny-les-metz",
      "chauffagiste-woippy",
    ],
    bodyParagraphs: [
      "Trashi Plombier est votre chauffagiste de référence à Metz depuis plus de 10 ans. Nous installons, entretenons et dépannons tous types de systèmes de chauffage à Metz (57000) : chaudières gaz, fioul et électriques, pompes à chaleur, planchers chauffants, chauffe-eaux thermodynamiques. Certifiés et qualifiés, nos techniciens interviennent sur toutes les marques.",
      "Notre service d'urgence chauffage à Metz est disponible 24h/24 et 7j/7. En plein hiver, une panne de chaudière est une urgence absolue. Trashi Plombier garantit une intervention en moins de 30 minutes sur Metz pour remettre votre chauffage en service rapidement. Nous diagnostiquons la panne sur place et effectuons la réparation le jour même dans la mesure du possible.",
      "L'entretien annuel de votre chaudière à Metz est obligatoire selon la loi. Trashi Plombier réalise cet entretien pour toutes les chaudières gaz, fioul et électriques, toutes marques. Nous vous remettons un certificat de conformité à l'issue de chaque visite. Un entretien régulier réduit vos factures d'énergie de 10 à 15 % et prolonge la durée de vie de votre appareil.",
      "En matière d'installation chauffage à Metz, nous vous conseillons sur les meilleures solutions : remplacement d'une vieille chaudière par un modèle à condensation, installation d'une pompe à chaleur air/eau avec aide MaPrimeRénov', pose d'un plancher chauffant hydraulique. Nos techniciens vous accompagnent dans vos démarches de financement.",
      "Trashi Plombier couvre tout Metz et l'agglomération messine pour vos besoins en chauffage. Devis gratuit, tarifs transparents, 98 % de clients satisfaits. Appelez le 078 720 30 23 pour une urgence chauffage ou pour planifier votre entretien annuel de chaudière à Metz.",
    ],
    faqItems: [
      { q: "Quel chauffagiste appeler en urgence à Metz ?", a: "Trashi Plombier, au 078 720 30 23, disponible 24h/24 à Metz. Intervention garantie en moins de 30 minutes pour toute panne de chauffage." },
      { q: "L'entretien de chaudière est-il obligatoire à Metz ?", a: "Oui, l'entretien annuel est obligatoire pour toutes les chaudières gaz et fioul. Trashi Plombier réalise cet entretien à Metz avec remise d'un certificat de conformité." },
      { q: "Installez-vous des pompes à chaleur à Metz ?", a: "Oui, nous installons des PAC air/eau et air/air à Metz. Nous vous accompagnons pour les aides MaPrimeRénov' et les déductions fiscales applicables." },
      { q: "Combien coûte l'entretien chaudière à Metz ?", a: "Le tarif dépend du type et de la marque de la chaudière. Devis gratuit sur simple appel. Entretien à partir de 100 € avec certificat de conformité." },
      { q: "Dépannez-vous toutes les marques de chaudières à Metz ?", a: "Oui, nos techniciens sont formés sur toutes les marques : Viessmann, De Dietrich, Vaillant, Chaffoteaux, Saunier Duval, Atlantic, et toutes autres marques présentes à Metz." },
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
      "Votre chauffagiste à Montigny-lès-Metz (57158) — Trashi Plombier assure entretien chaudière, dépannage chauffage 24h/24 et installation. Moins de 15 minutes depuis Metz, devis gratuit.",
    relatedZoneSlugs: ["chauffagiste-metz", "chauffagiste-augny"],
    bodyParagraphs: [
      "Trashi Plombier est votre chauffagiste de confiance à Montigny-lès-Metz (57158). Depuis notre base à Metz, nous intervenons rapidement sur Montigny-lès-Metz pour l'entretien annuel de chaudière, le dépannage d'urgence et l'installation de nouveaux équipements de chauffage. Délai d'intervention : moins de 15 minutes.",
      "L'entretien annuel de chaudière à Montigny-lès-Metz est une obligation légale. Trashi Plombier réalise cet entretien pour toutes les chaudières gaz, fioul et électriques, toutes marques, à Montigny-lès-Metz. Nous vous remettons un certificat de conformité et vous conseillons sur l'optimisation de votre consommation énergétique.",
      "En cas de panne de chauffage à Montigny-lès-Metz, appelez le 078 720 30 23. Notre service d'urgence chauffage est disponible 24h/24 et 7j/7. Nous diagnostiquons votre panne rapidement (chaudière, radiateur, chauffe-eau, plancher chauffant) et effectuons la réparation dans les meilleurs délais.",
      "Pour les travaux d'installation chauffage à Montigny-lès-Metz, nous vous proposons : remplacement de chaudière par un modèle à condensation, installation de chauffe-eau thermodynamique, pose de plancher chauffant hydraulique. Nos conseils en matière d'aides financières (MaPrimeRénov', CEE) vous permettent de réaliser des économies substantielles.",
      "Pour un devis gratuit ou une urgence chauffage à Montigny-lès-Metz (57158), contactez Trashi Plombier. 10 ans d'expérience, 98 % de clients satisfaits, tarifs transparents.",
    ],
    faqItems: [
      { q: "Y a-t-il un chauffagiste à Montigny-lès-Metz disponible 24h/24 ?", a: "Oui, Trashi Plombier intervient à Montigny-lès-Metz 24h/24. Depuis Metz, délai d'arrivée inférieur à 15 minutes." },
      { q: "Faites-vous l'entretien chaudière à Montigny-lès-Metz ?", a: "Oui, entretien annuel obligatoire à Montigny-lès-Metz pour toutes marques, avec certificat de conformité. Devis gratuit." },
      { q: "Dépannez-vous les chaudières à Montigny-lès-Metz ?", a: "Oui, dépannage de chaudières gaz, fioul et électriques à Montigny-lès-Metz. Toutes marques. Urgence 24h/24." },
      { q: "Installez-vous des chauffe-eaux thermodynamiques à Montigny-lès-Metz ?", a: "Oui, installation de chauffe-eaux thermodynamiques à Montigny-lès-Metz avec aide MaPrimeRénov'. Devis gratuit." },
      { q: "Quel tarif pour l'entretien chaudière à Montigny-lès-Metz ?", a: "À partir de 100 € avec certificat. Devis gratuit sur appel au 078 720 30 23." },
    ],
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
      "Chauffagiste à Woippy (57140) — Trashi Plombier : entretien chaudière, dépannage urgence chauffage 24h/24, installation. Intervention en moins de 20 minutes depuis Metz, devis gratuit.",
    relatedZoneSlugs: ["chauffagiste-metz", "chauffagiste-montigny-les-metz"],
    bodyParagraphs: [
      "Trashi Plombier dessert Woippy (57140) pour tous vos besoins en chauffage : entretien annuel de chaudière, dépannage d'urgence, installation de nouveaux équipements. Notre proximité avec Metz nous permet d'intervenir à Woippy en moins de 20 minutes.",
      "Notre service d'urgence chauffage à Woippy est disponible 24h/24 et 7j/7. Panne de chaudière, radiateur froid, chauffe-eau défaillant : nos techniciens interviennent rapidement pour rétablir votre confort thermique. Diagnostic sur place, devis gratuit avant réparation.",
      "À Woippy, nous réalisons l'entretien annuel obligatoire de toutes les chaudières, le dépannage toutes marques, le remplacement de chaudière par un modèle à condensation, l'installation de chauffe-eau thermodynamique et la pose de radiateurs. Nos techniciens certifiés connaissent toutes les marques du marché.",
      "Woippy possède un parc immobilier avec de nombreuses maisons individuelles et des résidences collectives. Nos chauffagistes sont expérimentés sur toutes les configurations d'installation de chauffage, des plus anciennes aux plus modernes. Nous conseillons les propriétaires sur les aides disponibles pour la rénovation énergétique.",
      "Devis gratuit pour vos travaux de chauffage à Woippy (57140). Trashi Plombier : 10 ans d'expérience, tarifs transparents, 98 % de satisfaction. Appelez le 078 720 30 23.",
    ],
    faqItems: [
      { q: "Trashi Plombier est-il disponible pour le chauffage à Woippy ?", a: "Oui, nous couvrons Woippy 24h/24 pour le chauffage. Depuis Metz, délai d'intervention inférieur à 20 minutes." },
      { q: "Faites-vous l'entretien chaudière à Woippy ?", a: "Oui, entretien annuel obligatoire à Woippy pour toutes marques. Certificat de conformité remis. Devis gratuit." },
      { q: "Dépannez-vous les pannes de chauffage à Woippy ?", a: "Oui, dépannage de chauffage 24h/24 à Woippy. Chaudière, radiateur, chauffe-eau. Toutes marques." },
      { q: "Installez-vous des PAC à Woippy ?", a: "Oui, installation de pompes à chaleur à Woippy avec accompagnement MaPrimeRénov'. Devis gratuit." },
      { q: "Quel tarif pour le dépannage chaudière à Woippy ?", a: "Devis gratuit avant intervention. Dépannage à partir de 80 €, tarif communiqué avant tout travail." },
    ],
  },
  {
    slug: "chauffagiste-augny",
    city: "Augny",
    postalCode: "57685",
    type: "chauffagiste",
    h1: "Chauffagiste à Augny – Installation & Entretien",
    metaTitle: "Chauffagiste Augny | Dépannage – Trashi Plombier",
    metaDescription:
      "Chauffagiste à Augny pour installation chauffage, entretien chaudière et dépannage. Devis gratuit. Intervention rapide en Moselle.",
    seoParagraph:
      "Trashi Plombier, votre chauffagiste à Augny (57685), intervient rapidement pour l'installation, l'entretien et le dépannage de votre système de chauffage. Disponible 24h/24 et 7j/7, nous garantissons un service professionnel à tarif transparent.",
    bodyParagraphs: [
      "Augny est une commune résidentielle de la périphérie messine où les maisons individuelles sont nombreuses. Trashi Plombier connaît parfaitement les besoins en chauffage de ce secteur : chaudières à gaz, pompes à chaleur, planchers chauffants et radiateurs à inertie. Notre équipe intervient à Augny pour toute installation neuve ou remplacement d'équipement vétuste.",
      "L'entretien annuel de votre chaudière à Augny est une obligation légale pour les contrats de gaz. Nos techniciens certifiés réalisent la visite complète : nettoyage du brûleur, vérification des sécurités, mesure du rendement et délivrance de l'attestation d'entretien. Un équipement bien entretenu consomme jusqu'à 15 % de moins et dure bien plus longtemps.",
      "En cas de panne de chauffage à Augny, notre service d'urgence est mobilisable en moins de 30 minutes. Nous diagnostiquons les problèmes d'allumage, les fuites de gaz, les défauts de pressostat et les pannes de circulateur. Chaque intervention est précédée d'un devis oral clair afin qu'aucune mauvaise surprise ne figure sur votre facture.",
      "Trashi Plombier accompagne les habitants d'Augny dans la transition énergétique. Nous installons des pompes à chaleur air/eau éligibles aux aides MaPrimeRénov' et CEE, permettant de réduire significativement les factures de chauffage. Notre bureau d'étude calcule le dimensionnement optimal pour votre surface et votre isolation.",
      "Nous intervenons également pour la pose de thermostats connectés et de robinets thermostatiques à Augny, optimisant le confort pièce par pièce. Confiez votre confort thermique à Trashi Plombier : devis gratuit, sans engagement, et techniciens qualifiés à votre service.",
    ],
    faqItems: [
      { q: "Intervenez-vous en urgence à Augny ?", a: "Oui, notre équipe est disponible 24h/24 et 7j/7 à Augny. Nous arrivons en moins de 30 minutes pour toute panne de chauffage urgente." },
      { q: "Proposez-vous l'entretien de chaudière à Augny ?", a: "Absolument. Nos techniciens certifiés réalisent l'entretien annuel obligatoire de votre chaudière à Augny et délivrent l'attestation réglementaire." },
      { q: "Installez-vous des pompes à chaleur à Augny ?", a: "Oui, nous installons des PAC air/eau et air/air à Augny, avec accompagnement pour les aides MaPrimeRénov' et les certificats CEE. Devis gratuit." },
      { q: "Quel est le délai d'intervention à Augny ?", a: "En urgence, nous intervenons en moins de 30 minutes. Pour une installation planifiée, nous proposons des créneaux sous 48 h selon disponibilités." },
      { q: "Faites-vous un devis gratuit à Augny ?", a: "Oui, le devis est entièrement gratuit et sans engagement. Nous vous communiquons le tarif avant de commencer les travaux." },
    ],
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
      "Chauffagiste à Marly (57155) : installation chauffage, entretien chaudière et dépannage rapide. Trashi Plombier, devis gratuit.",
    seoParagraph:
      "Trashi Plombier intervient à Marly (57155) pour tous vos besoins en chauffage : installation de chaudière, entretien annuel, dépannage en urgence et installation de pompe à chaleur. Disponible 24h/24, devis gratuit et sans engagement.",
    bodyParagraphs: [
      "Marly est une ville dynamique au sud de Metz avec un parc immobilier varié. Trashi Plombier y assure l'installation et le remplacement de chaudières gaz à condensation, de chaudières fioul et de systèmes de chauffage électrique. Nous conseillons nos clients sur les solutions les plus économiques selon leur logement et leur budget.",
      "L'entretien de chaudière à Marly est indispensable pour garantir la sécurité et les performances de votre installation. Nos techniciens certifiés RGE interviennent pour le nettoyage, le réglage et la vérification complète de votre appareil. Vous recevez l'attestation officielle d'entretien nécessaire pour votre assurance habitation.",
      "En cas de panne de chauffage à Marly, notre équipe d'urgence se déplace en moins de 30 minutes. Nous traitons les pannes de brûleur, les problèmes de vase d'expansion, les défauts de sonde et toute autre défaillance. Notre priorité est de vous rendre le confort thermique le plus rapidement possible.",
      "Trashi Plombier propose à Marly l'installation de pompes à chaleur air/eau permettant de diviser par deux à trois votre facture de chauffage. Nous gérons le dossier de subventions MaPrimeRénov' et CEE pour vous, afin que vous bénéficiiez des aides maximales disponibles. Un investissement rentabilisé en quelques années.",
      "Nous intervenons aussi pour l'installation de planchers chauffants, de robinets thermostatiques et de thermostats connectés à Marly. Pour un devis gratuit ou une intervention urgente, contactez Trashi Plombier dès maintenant.",
    ],
    faqItems: [
      { q: "Êtes-vous disponible en urgence à Marly ?", a: "Oui, Trashi Plombier intervient en urgence à Marly 24h/24 et 7j/7. Délai d'arrivée : moins de 30 minutes." },
      { q: "Faites-vous l'entretien de chaudière à Marly ?", a: "Oui, nos techniciens certifiés réalisent l'entretien annuel obligatoire à Marly et délivrent l'attestation réglementaire." },
      { q: "Installez-vous des PAC à Marly ?", a: "Oui, nous installons des pompes à chaleur air/eau à Marly avec aide aux démarches pour MaPrimeRénov'. Devis gratuit." },
      { q: "Intervenez-vous pour les chaudières fioul à Marly ?", a: "Oui, nous dépannons et entretenons les chaudières fioul à Marly, et pouvons conseiller sur la conversion vers une énergie plus propre." },
      { q: "Le devis est-il gratuit à Marly ?", a: "Oui, le devis est 100 % gratuit et sans engagement. Tarif communiqué avant tout démarrage des travaux." },
    ],
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
      "Chauffagiste à Longeville-lès-Metz (57050) : installation, entretien chaudière et dépannage chauffage rapide. Trashi Plombier.",
    seoParagraph:
      "Trashi Plombier, chauffagiste à Longeville-lès-Metz (57050), assure l'installation, l'entretien et le dépannage de tous vos équipements de chauffage. Intervention en moins de 30 minutes, 24h/24 et 7j/7, devis gratuit.",
    bodyParagraphs: [
      "Longeville-lès-Metz est une commune résidentielle proche de Metz où Trashi Plombier intervient régulièrement pour l'installation de chaudières à condensation, de planchers chauffants et de systèmes de climatisation réversible. Nos équipes connaissent le bâti local et adaptent les solutions au profil thermique de chaque habitation.",
      "L'entretien annuel de votre chaudière à Longeville-lès-Metz est obligatoire et garantit la sécurité de votre foyer. Nos techniciens certifiés procèdent au nettoyage du brûleur, à la mesure de combustion et à la vérification des organes de sécurité. Vous obtenez l'attestation d'entretien requise par votre contrat d'assurance.",
      "Panne de chauffage à Longeville-lès-Metz ? Notre équipe d'urgence intervient en moins de 30 minutes pour rétablir votre confort. Nous diagnostiquons et réparons tous types de pannes : ignition défaillante, fuite de gaz, sonde hors service, circulateur HS. Devis oral avant intervention, sans surprise.",
      "Trashi Plombier accompagne les habitants de Longeville-lès-Metz dans le remplacement de leur ancienne chaudière par une pompe à chaleur performante. Nous montons votre dossier d'aides MaPrimeRénov' et CEE pour maximiser le remboursement. L'installation d'une PAC air/eau permet de réduire la consommation énergétique de 50 à 70 %.",
      "Nous proposons également l'installation de thermostats connectés, de robinets thermostatiques et de régulations zonées à Longeville-lès-Metz. Pour tout projet chauffage, contactez Trashi Plombier pour un devis gratuit et sans engagement.",
    ],
    faqItems: [
      { q: "Intervenez-vous en urgence à Longeville-lès-Metz ?", a: "Oui, 24h/24 et 7j/7. Nos techniciens arrivent en moins de 30 minutes à Longeville-lès-Metz pour tout dépannage chauffage urgent." },
      { q: "Faites-vous l'entretien de chaudière à Longeville-lès-Metz ?", a: "Oui, entretien annuel obligatoire réalisé par nos techniciens certifiés avec délivrance de l'attestation réglementaire." },
      { q: "Proposez-vous l'installation de PAC à Longeville-lès-Metz ?", a: "Oui, nous installons des pompes à chaleur à Longeville-lès-Metz et gérons les démarches MaPrimeRénov'. Devis gratuit." },
      { q: "Réparez-vous les planchers chauffants à Longeville-lès-Metz ?", a: "Oui, nous intervenons sur les planchers chauffants hydrauliques et électriques : fuite, déséquilibre, panne de régulation." },
      { q: "Quel est le tarif d'un entretien chaudière à Longeville-lès-Metz ?", a: "Tarif communiqué avant intervention lors du devis gratuit. Prix à partir de 80 € pour un entretien standard." },
    ],
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
      "Chauffagiste à Maizières-lès-Metz (57280) : installation chauffage, entretien chaudière et dépannage rapide. Devis gratuit – Trashi Plombier.",
    seoParagraph:
      "Besoin d'un chauffagiste à Maizières-lès-Metz (57280) ? Trashi Plombier intervient rapidement pour l'installation, l'entretien et le dépannage de votre chauffage. Service disponible 24h/24, 7j/7, devis 100 % gratuit.",
    bodyParagraphs: [
      "Maizières-lès-Metz est une commune industrielle et résidentielle du nord de la Moselle. Trashi Plombier y assure l'installation de chaudières à gaz à condensation, de systèmes bi-énergie et de pompes à chaleur adaptés aux maisons individuelles et aux petits immeubles. Nous intervenons aussi bien pour les constructions neuves que pour la rénovation.",
      "L'entretien de votre chaudière à Maizières-lès-Metz est obligatoire chaque année. Nos techniciens certifiés effectuent le nettoyage complet, la vérification des sécurités, la mesure du rendement de combustion et la mise en conformité de l'installation. L'attestation d'entretien est remise à l'issue de chaque visite.",
      "En cas de panne de chauffage à Maizières-lès-Metz, notre service d'urgence est disponible à toute heure. Nous rétablissons rapidement le fonctionnement de votre installation : diagnostic électronique, remplacement de pièces défectueuses, purge du circuit. Délai d'intervention : moins de 30 minutes.",
      "Trashi Plombier vous accompagne dans la transition énergétique à Maizières-lès-Metz. L'installation d'une pompe à chaleur ou d'une chaudière hybride peut vous faire bénéficier d'aides importantes via MaPrimeRénov' et les certificats d'économie d'énergie. Nous gérons l'ensemble du dossier pour vous simplifier la démarche.",
      "Nous proposons également la pose de thermostats connectés Nest ou Somfy à Maizières-lès-Metz, permettant de programmer et piloter votre chauffage à distance. Contactez Trashi Plombier pour un devis gratuit et sans engagement.",
    ],
    faqItems: [
      { q: "Intervenez-vous en urgence à Maizières-lès-Metz ?", a: "Oui, 24h/24 et 7j/7. Nos techniciens arrivent en moins de 30 minutes à Maizières-lès-Metz pour tout dépannage chauffage." },
      { q: "Faites-vous l'entretien de chaudière à Maizières-lès-Metz ?", a: "Oui, entretien annuel obligatoire avec délivrance de l'attestation réglementaire. Techniciens certifiés, tarif transparent." },
      { q: "Installez-vous des pompes à chaleur à Maizières-lès-Metz ?", a: "Oui, installation PAC air/eau avec aide aux dossiers MaPrimeRénov' et CEE. Devis gratuit à votre domicile." },
      { q: "Posez-vous des thermostats connectés à Maizières-lès-Metz ?", a: "Oui, nous installons et configurons des thermostats connectés (Nest, Somfy, etc.) pour piloter votre chauffage à distance." },
      { q: "Le devis est-il gratuit à Maizières-lès-Metz ?", a: "Oui, le devis est entièrement gratuit. Nous vous communiquons le tarif précis avant de commencer toute intervention." },
    ],
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
      "Chauffagiste à Talange (57525) : installation chauffage, entretien chaudière, dépannage 24h/24. Devis gratuit – Trashi Plombier.",
    seoParagraph:
      "Trashi Plombier, votre chauffagiste à Talange (57525), intervient pour l'installation, l'entretien et le dépannage de votre système de chauffage. Disponible 24h/24, 7j/7, intervention en moins de 30 minutes, devis gratuit.",
    bodyParagraphs: [
      "Talange est une commune de la vallée de la Moselle où Trashi Plombier intervient pour toutes les prestations de chauffage. Nous installons des chaudières à gaz à condensation, des chaudières à granulés et des pompes à chaleur pour les maisons pavillonnaires et les appartements. Nos techniciens sont formés aux dernières technologies de chauffage.",
      "L'entretien annuel de chaudière à Talange est une obligation légale. Trashi Plombier envoie ses techniciens certifiés pour le nettoyage complet du brûleur et de l'échangeur, le contrôle des organes de sécurité et le réglage des paramètres de combustion. L'attestation est délivrée à la fin de chaque intervention.",
      "En cas de panne de chauffage à Talange, notre équipe est disponible en urgence. Moins de 30 minutes pour arriver chez vous et diagnostiquer la panne. Nous emportons les pièces les plus courantes (sondes, vannes, circulateurs) pour réparer en une seule intervention dans la majorité des cas.",
      "Pour améliorer votre confort et réduire vos factures à Talange, Trashi Plombier vous propose l'installation de pompes à chaleur avec aide au montage du dossier MaPrimeRénov'. Une PAC air/eau bien dimensionnée peut couvrir 80 % de vos besoins en chauffage avec une énergie renouvelable.",
      "Nous intervenons également pour la pose de systèmes de chauffage par le sol à Talange, notamment lors de rénovations complètes. Pour un devis gratuit ou une intervention urgente, appelez Trashi Plombier maintenant.",
    ],
    faqItems: [
      { q: "Êtes-vous disponible en urgence à Talange ?", a: "Oui, 24h/24 et 7j/7. Notre équipe intervient à Talange en moins de 30 minutes pour tout dépannage chauffage urgent." },
      { q: "Réalisez-vous l'entretien de chaudière à Talange ?", a: "Oui, entretien annuel obligatoire par nos techniciens certifiés. Attestation d'entretien délivrée à chaque visite." },
      { q: "Installez-vous des chaudières à granulés à Talange ?", a: "Oui, nous installons et entretenons les chaudières à granulés de bois à Talange. Devis gratuit selon votre logement." },
      { q: "Proposez-vous des PAC à Talange ?", a: "Oui, installation de pompes à chaleur à Talange avec gestion du dossier MaPrimeRénov'. Devis et conseil gratuits." },
      { q: "Quel délai pour un devis à Talange ?", a: "Nous pouvons établir un devis gratuit sous 24 à 48 heures à Talange, ou en urgence le jour même si nécessaire." },
    ],
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
      "Chauffagiste à Hagondange (57300) : entretien chaudière, installation chauffage et dépannage 24h/24. Trashi Plombier, devis gratuit.",
    seoParagraph:
      "Trashi Plombier, chauffagiste à Hagondange (57300), intervient pour l'entretien, le dépannage et l'installation de votre système de chauffage. Disponible 24h/24, 7j/7, intervention rapide et devis gratuit.",
    bodyParagraphs: [
      "Hagondange est une ville en plein essor au nord de la Moselle. Trashi Plombier y est présent pour toutes vos demandes en chauffage : installation de chaudières à gaz à condensation, remplacement de radiateurs, pose de planchers chauffants et installation de systèmes de climatisation réversible. Nos techniciens interviennent aussi bien dans le neuf que dans l'ancien.",
      "L'entretien annuel de chaudière à Hagondange assure la sécurité de votre famille et l'efficacité de votre installation. Nos techniciens certifiés réalisent le nettoyage complet, la vérification des brûleurs, le contrôle des tuyauteries de gaz et le réglage des paramètres. L'attestation d'entretien est remise à l'issue de chaque visite.",
      "En cas de panne de chauffage à Hagondange, ne restez pas dans le froid. Trashi Plombier intervient en moins de 30 minutes, 24h/24. Nous diagnostiquons précisément la panne grâce à notre équipement électronique et procédons à la réparation immédiate. La plupart des pannes courantes sont résolues en une seule intervention.",
      "Trashi Plombier accompagne les résidents d'Hagondange dans la rénovation énergétique. Nous installons des pompes à chaleur air/eau éligibles aux subventions MaPrimeRénov' et gérons l'ensemble du dossier administratif. Une PAC bien dimensionnée permet des économies de 50 à 70 % sur la facture de chauffage.",
      "Nous proposons également la pose de thermostats intelligents et la régulation des zones de chauffage à Hagondange. Pour optimiser votre confort et vos consommations, faites confiance à Trashi Plombier.",
    ],
    faqItems: [
      { q: "Intervenez-vous en urgence à Hagondange ?", a: "Oui, 24h/24 et 7j/7. Nos techniciens arrivent en moins de 30 minutes à Hagondange pour toute panne de chauffage urgente." },
      { q: "Faites-vous l'entretien de chaudière à Hagondange ?", a: "Oui, entretien annuel obligatoire avec techniciens certifiés. Attestation d'entretien délivrée après chaque visite à Hagondange." },
      { q: "Installez-vous des pompes à chaleur à Hagondange ?", a: "Oui, installation PAC air/eau avec gestion du dossier MaPrimeRénov' et CEE à Hagondange. Devis gratuit." },
      { q: "Réparez-vous toutes les marques de chaudières à Hagondange ?", a: "Oui, nos techniciens sont formés sur toutes les grandes marques : Viessmann, De Dietrich, Chappée, Bulex, Vaillant, Atlantic et autres." },
      { q: "Quel est le coût d'une intervention à Hagondange ?", a: "Le devis est gratuit. Nous vous communiquons le tarif exact avant toute intervention. Pas de frais cachés." },
    ],
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
      "Chauffagiste à Amnéville (57360) : installation chauffage, entretien chaudière et dépannage rapide 24h/24. Trashi Plombier, devis gratuit.",
    seoParagraph:
      "Trashi Plombier intervient à Amnéville (57360) pour l'installation, l'entretien et le dépannage de tous vos équipements de chauffage. Service disponible 24h/24, 7j/7, devis gratuit et intervention en moins de 30 minutes.",
    bodyParagraphs: [
      "Amnéville est une ville touristique et résidentielle de la Moselle où Trashi Plombier assure des prestations de chauffage complètes. Nous intervenons pour l'installation de chaudières à gaz, de chaudières hybrides et de pompes à chaleur dans les maisons individuelles et les copropriétés. Nos techniciens sont disponibles toute l'année, y compris les jours fériés.",
      "L'entretien de chaudière à Amnéville est obligatoire chaque année pour les appareils au gaz. Trashi Plombier envoie ses techniciens certifiés pour un contrôle approfondi : nettoyage du brûleur, vérification de l'échangeur thermique, test des sécurités et mesure de la combustion. Attestation officielle délivrée après chaque entretien.",
      "Dépannage chauffage à Amnéville : notre équipe d'urgence est mobilisable 24h/24, 7j/7. Nous intervenons en moins de 30 minutes pour les pannes de chaudière, les défauts d'allumage, les fuites de gaz et les problèmes de circulateur. Nous repartons dans la plupart des cas avec une installation fonctionnelle.",
      "Trashi Plombier propose à Amnéville l'installation de pompes à chaleur air/eau éligibles aux aides de l'État. Nous calculons le dimensionnement optimal de votre PAC et constituons le dossier MaPrimeRénov' pour vous. Économisez jusqu'à 70 % sur votre facture de chauffage grâce aux énergies renouvelables.",
      "Nous intervenons aussi pour la pose de chaudières à condensation haute efficacité, de radiateurs à inertie et de planchers chauffants à Amnéville. Pour un devis personnalisé gratuit, contactez Trashi Plombier dès maintenant.",
    ],
    faqItems: [
      { q: "Êtes-vous disponible en urgence à Amnéville ?", a: "Oui, 24h/24 et 7j/7 à Amnéville. Nos techniciens interviennent en moins de 30 minutes pour tout dépannage chauffage urgent." },
      { q: "Réalisez-vous l'entretien annuel de chaudière à Amnéville ?", a: "Oui, entretien obligatoire réalisé par nos techniciens certifiés à Amnéville. Attestation délivrée à l'issue de la visite." },
      { q: "Installez-vous des PAC à Amnéville ?", a: "Oui, installation de pompes à chaleur air/eau à Amnéville avec accompagnement MaPrimeRénov' et CEE. Devis gratuit." },
      { q: "Intervenez-vous pour les copropriétés à Amnéville ?", a: "Oui, Trashi Plombier intervient pour les particuliers comme pour les copropriétés et les petits immeubles à Amnéville." },
      { q: "Le devis est-il gratuit à Amnéville ?", a: "Oui, le devis est 100 % gratuit et sans engagement. Tarif communiqué avant tout démarrage des travaux." },
    ],
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
      "Chauffagiste à Thionville (57100) : installation chauffage, entretien chaudière et dépannage 24h/24. Trashi Plombier, devis gratuit.",
    seoParagraph:
      "Trashi Plombier, chauffagiste à Thionville (57100), intervient pour l'installation, l'entretien et le dépannage de votre chauffage. Disponible 24h/24, 7j/7 sur Thionville et toute la Moselle Nord, devis gratuit.",
    bodyParagraphs: [
      "Thionville est la deuxième ville de Moselle et un centre économique important du nord du département. Trashi Plombier y propose une gamme complète de services de chauffage : installation de chaudières à gaz à condensation, de chaudières hybrides, de pompes à chaleur et de systèmes de climatisation réversible. Nous intervenons pour les particuliers, les bailleurs et les professionnels.",
      "L'entretien annuel de chaudière à Thionville est obligatoire pour tous les appareils à gaz et fioul. Nos techniciens certifiés se déplacent dans tout Thionville et ses quartiers pour le nettoyage du brûleur, la vérification des sécurités, le contrôle de la combustion et la délivrance de l'attestation d'entretien. Un entretien régulier prolonge la durée de vie de votre chaudière de plusieurs années.",
      "Panne de chauffage à Thionville ? Notre service d'urgence fonctionne 24h/24 et 7j/7. En moins de 30 minutes, nos techniciens sont chez vous pour diagnostiquer et réparer votre installation. Nous intervenons sur toutes les marques : Viessmann, De Dietrich, Vaillant, Chappée, Bulex, Atlantic. Devis oral avant chaque intervention.",
      "Trashi Plombier accompagne les Thionvillois dans la rénovation énergétique de leur logement. Nous installons des pompes à chaleur air/eau éligibles à MaPrimeRénov', permettant de réduire la consommation de chauffage de 50 à 70 %. Notre bureau d'étude dimensionne chaque installation et constitue le dossier de subventions pour vous.",
      "Nous intervenons également pour l'installation de planchers chauffants hydrauliques, de robinets thermostatiques et de thermostats connectés à Thionville. Faites confiance à Trashi Plombier pour tous vos projets de chauffage : devis gratuit, prix transparent et techniciens qualifiés.",
    ],
    faqItems: [
      { q: "Intervenez-vous en urgence à Thionville ?", a: "Oui, 24h/24 et 7j/7 à Thionville et ses environs. Nos techniciens arrivent en moins de 30 minutes pour tout dépannage chauffage urgent." },
      { q: "Faites-vous l'entretien de chaudière à Thionville ?", a: "Oui, entretien annuel obligatoire réalisé par nos techniciens certifiés à Thionville. Attestation délivrée à chaque visite." },
      { q: "Installez-vous des pompes à chaleur à Thionville ?", a: "Oui, nous installons des PAC air/eau à Thionville avec gestion du dossier MaPrimeRénov' et des CEE. Devis gratuit." },
      { q: "Couvrez-vous toute la zone de Thionville ?", a: "Oui, nous intervenons à Thionville et dans toutes les communes environnantes : Yutz, Florange, Fameck, Uckange et alentours." },
      { q: "Quel est le tarif d'une intervention à Thionville ?", a: "Le devis est gratuit. Nous vous communiquons le tarif précis avant toute intervention. Aucun frais caché." },
    ],
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
