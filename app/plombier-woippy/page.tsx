import { Metadata } from "next";
import ZonePageTemplate from "@/components/ZonePageTemplate";
import { ZONE_PAGES } from "@/lib/seo-data";

const ZONE = ZONE_PAGES.find((z) => z.slug === "plombier-woippy")!;

export const metadata: Metadata = {
  title: ZONE.metaTitle,
  description: ZONE.metaDescription,
  alternates: { canonical: `https://www.trashi-plombier.fr/${ZONE.slug}` },
};

export default function Page() {
  return <ZonePageTemplate zone={ZONE} />;
}
