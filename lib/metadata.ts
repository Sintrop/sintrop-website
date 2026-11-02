import type { Metadata } from "next";

export const SITE_URL = "https://sintrop.com";
export const DEFAULT_LOCALE = "en";
export const OG_IMAGE = `${SITE_URL}/assets/images/sintrop-og.png`;

/**
 * Builds a locale-aware absolute URL. The default locale is served without a
 * path prefix; every other locale is prefixed with its code.
 */
export function localizedUrl(path: string, locale: string): string {
  const normalizedPath = path === "/" ? "" : path.replace(/\/$/, "");
  const prefix = locale === DEFAULT_LOCALE ? "" : `/${locale}`;
  return `${SITE_URL}${prefix}${normalizedPath}` || SITE_URL;
}

/**
 * Canonical + hreflang alternates for a given route. `path` is the route
 * without locale prefix (e.g. "/network", "/" for the home page).
 */
export function localizedAlternates(
  path: string,
  locale: string
): NonNullable<Metadata["alternates"]> {
  return {
    canonical: localizedUrl(path, locale),
    languages: {
      en: localizedUrl(path, "en"),
      pt: localizedUrl(path, "pt"),
      "x-default": localizedUrl(path, "en"),
    },
  };
}
