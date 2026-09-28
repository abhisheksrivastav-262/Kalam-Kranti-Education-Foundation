import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/programs", "/gallery", "/impact", "/volunteer", "/donate", "/contact"];
  return pages.map((p) => ({
    url: `${SITE.url}${p || "/"}`,
    lastModified: new Date(),
    changeFrequency: p === "" ? "daily" : "weekly",
    priority: p === "" ? 1 : p === "/donate" ? 0.9 : 0.8,
  }));
}
