import { BUSINESS } from "@/lib/seo-data";

export default function SchemaLocalBusiness() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": `${BUSINESS.url}/#organization`,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: BUSINESS.url,
    telephone: BUSINESS.phoneClean,
    email: BUSINESS.email,
    description: BUSINESS.description,
    priceRange: BUSINESS.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      postalCode: BUSINESS.address.postalCode,
      addressRegion: BUSINESS.address.region,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: [
      { "@type": "City", name: "Metz" },
      { "@type": "City", name: "Montigny-lès-Metz" },
      { "@type": "City", name: "Woippy" },
      { "@type": "City", name: "Augny" },
      { "@type": "City", name: "Marly" },
      { "@type": "City", name: "Longeville-lès-Metz" },
      { "@type": "City", name: "Maizières-lès-Metz" },
      { "@type": "City", name: "Talange" },
      { "@type": "City", name: "Hagondange" },
      { "@type": "City", name: "Amnéville" },
      { "@type": "City", name: "Thionville" },
    ],
    sameAs: [],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services de plomberie et chauffage",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Urgence Plomberie",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Plombier urgence" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dépannage plomberie" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fuite d'eau urgence" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Débouchage canalisation" } },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Services Plomberie",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Installation plomberie" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rénovation salle de bain" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Remplacement robinetterie" } },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Services Chauffage",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Installation chauffage" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Entretien chaudière" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Réparation chaudière" } },
          ],
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
