import { BUSINESS } from "@/lib/seo-data";

interface SchemaServiceProps {
  serviceName: string;
  description: string;
  slug: string;
}

export default function SchemaService({
  serviceName,
  description,
  slug,
}: SchemaServiceProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description,
    url: `${BUSINESS.url}/${slug}`,
    provider: {
      "@type": "Plumber",
      "@id": `${BUSINESS.url}/#organization`,
      name: BUSINESS.name,
    },
    areaServed: {
      "@type": "City",
      name: "Metz",
    },
    serviceType: serviceName,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
