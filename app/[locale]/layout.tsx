import { notFound } from 'next/navigation';
import { Anta, Akatab } from "next/font/google";
import i18nConfig from '../../i18nconfig';
import { GoogleTagManager } from '@next/third-parties/google';
import "./globals.css";
import "./markdown.css";

const antaFont = Anta({
  variable: "--font-anta",
  subsets: ["latin"],
  weight: "400"
})

const akatabFont = Akatab({
  variable: "--font-akatab",
  subsets: ["latin"],
  weight: "400"
})

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export default async function RootLayout({
    children,
    params
  }: {
    children: React.ReactNode,
    params: {locale: string}
  }) {

    const {locale} = await params;

    if (!i18nConfig.locales.includes(locale)) {
      notFound();
    }

    return (
      <html lang="en">
        <GoogleTagManager gtmId="GTM-WZK3VDF" />
        <body className={`${antaFont.variable} ${akatabFont.variable} antialiased`}>
          {children}
        </body>
      </html>
    )
  }