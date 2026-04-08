import { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/seo-data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${BUSINESS.url}/sitemap.xml`,
  };
}
