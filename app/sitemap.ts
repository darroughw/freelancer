import { MetadataRoute } from "next";
import { caseStudies } from "./data/case-studies";
import { SITE_URL } from "./site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...caseStudies.map((study) => ({
      url: `${SITE_URL}/work/${study.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];
}
