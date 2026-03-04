import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/search"], // Exclude internal APIs and search pages from indexing
    },
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL || "https://duahub.vercel.app"}/sitemap.xml`,
  };
}
