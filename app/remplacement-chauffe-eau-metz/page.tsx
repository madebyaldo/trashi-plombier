import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { URGENCE_PAGES } from "@/lib/seo-data";

const PAGE = URGENCE_PAGES.find((p) => p.slug === "remplacement-chauffe-eau-metz")!;

export const metadata: Metadata = {
  title: PAGE.metaTitle,
  description: PAGE.metaDescription,
  alternates: { canonical: `https://www.trashi-plombier.fr/${PAGE.slug}` },
};

export default function Page() {
  return <ServicePageTemplate page={PAGE} />;
}
