import type { MetadataRoute } from "next";
import { brand } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/athlete-intake", "/videos", "/videos/*"],
      },
    ],
    sitemap: `${brand.url}/sitemap.xml`,
  };
}
