import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://webconverted.com",
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 1,
    },
    {
      url: "https://webconverted.com/404",
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
  ];
}
