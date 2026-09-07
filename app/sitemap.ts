import type { MetadataRoute } from "next";
import { SITE_URL, localizedUrl } from "@/lib/metadata";
import { tutorialsListPerLanguage } from "./[locale]/tutorials/tutorialsList";

const LOCALES = ["en", "pt"] as const;

/** Routes that exist in both locales, without the locale prefix. */
const STATIC_PATHS: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/run-a-node", priority: 0.9 },
  { path: "/build", priority: 0.9 },
  { path: "/network", priority: 0.8 },
  { path: "/resources", priority: 0.7 },
  { path: "/tutorials", priority: 0.7 },
  { path: "/about", priority: 0.6 },
  { path: "/regeneration-credit/privacy-policy", priority: 0.3 },
];

function alternates(path: string) {
  return {
    languages: {
      en: localizedUrl(path, "en"),
      pt: localizedUrl(path, "pt"),
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map(
    ({ path, priority }) => ({
      url: `${SITE_URL}${path === "/" ? "" : path}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority,
      alternates: alternates(path),
    })
  );

  const tutorialEntries: MetadataRoute.Sitemap = LOCALES.flatMap((locale) =>
    tutorialsListPerLanguage[locale].map((tutorial) => {
      const path = `/tutorials/${tutorial.id}`;
      return {
        url: localizedUrl(path, locale),
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.5,
        alternates: {
          languages: {
            en: localizedUrl(
              `/tutorials/${tutorialsListPerLanguage.en.find((x) => x.title === tutorial.title)?.id ?? tutorial.id}`,
              "en"
            ),
            pt: localizedUrl(
              `/tutorials/${tutorialsListPerLanguage.pt.find((x) => x.title === tutorial.title)?.id ?? tutorial.id}`,
              "pt"
            ),
          },
        },
      };
    })
  );

  return [...staticEntries, ...tutorialEntries];
}
