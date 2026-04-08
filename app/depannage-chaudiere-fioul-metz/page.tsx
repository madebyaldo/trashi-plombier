import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { CHAUFFAGE_PAGES } from "@/lib/seo-data";

const PAGE = CHAUFFAGE_PAGES.find((p) => p.slug === "depannage-chaudiere-fioul-metz")!;

export const metadata: Metadata = {
  title: PAGE.metaTitle,
  description: PAGE.metaDescription,
  alternates: { canonical: `https://www.trashi-plombier.fr/${PAGE.slug}` },
};

export default function Page() {
  return <ServicePageTemplate page={PAGE} />;
}
