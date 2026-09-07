/**
 * Stable external URLs that are also linked from other Sintrop properties.
 * These must not change — treat them as a public contract.
 */

const WHITEPAPER_BY_LOCALE: Record<string, string> = {
  en: "https://sintrop.com/assets/sintrop.pdf",
  pt: "https://sintrop.com/assets/sintrop-pt.pdf",
};

export function whitepaperUrl(locale: string): string {
  return WHITEPAPER_BY_LOCALE[locale] ?? WHITEPAPER_BY_LOCALE.en;
}

export const DISCORD_URL = "https://discord.gg/dAGBBFnTM7";
export const GITHUB_ORG_URL = "https://github.com/sintrop";
export const STATUS_URL = "http://status.sintrop.com:3000";
