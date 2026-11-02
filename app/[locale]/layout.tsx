import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Anta, Fraunces, Figtree } from "next/font/google";
import i18nConfig from '../../i18nconfig';
import { GoogleTagManager } from '@next/third-parties/google';
import { SITE_URL } from "@/lib/metadata";
import "./globals.css";
import "./markdown.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Sintrop — Impact Blockchain",
  applicationName: "Sintrop",
  robots: { index: true, follow: true },
};

// Body / UI text.
const bodyFont = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

// Headings and other display type.
const displayFont = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

// Wordmark and on-chain figures.
const antaFont = Anta({
  variable: "--font-anta",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export default async function RootLayout({
    children,
    params
  }: {
    children: React.ReactNode,
    params: Promise<{ locale: string }>
  }) {

    const { locale } = await params;

    if (!i18nConfig.locales.includes(locale)) {
      notFound();
    }

    return (
      <html lang={locale}>
        <GoogleTagManager gtmId="GTM-WZK3VDF" />
        <body
          className={`${bodyFont.variable} ${displayFont.variable} ${antaFont.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    );
  }
