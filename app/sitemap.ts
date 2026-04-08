import { MetadataRoute } from "next";
import { ALL_SERVICE_PAGES, ALL_ZONE_PAGES, BUSINESS } from "@/lib/seo-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BUSINESS.url;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/realisations`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = ALL_SERVICE_PAGES.map(
    (page) => ({
      url: `${baseUrl}/${page.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: page.silo === "urgence" ? 0.9 : 0.8,
    })
  );

  const zonePages: MetadataRoute.Sitemap = ALL_ZONE_PAGES.map((zone) => ({
    url: `${baseUrl}/${zone.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: zone.slug.includes("metz") && !zone.slug.includes("-les-") ? 0.9 : 0.7,
  }));

  return [...staticPages, ...servicePages, ...zonePages];
}
