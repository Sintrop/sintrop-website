import { notFound } from 'next/navigation';
import { Anta } from "next/font/google";
import i18nConfig from '../../i18nconfig';
import "./globals.css";
import "./markdown.css";

const antaFont = Anta({
  variable: "--font-anta",
  subsets: ["latin"],
  weight: "400"
})

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export default async function RootLayout({
    children,
    params: {locale}
  }: {
    children: React.ReactNode,
    params: {locale: string}
  }) {

    if (!i18nConfig.locales.includes(locale)) {
      notFound();
    }

    return (
      <html lang="en">
        <body className={`${antaFont.variable} antialiased`}>
          {children}
        </body>
      </html>
    )
  }