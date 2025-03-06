import { notFound } from 'next/navigation';
import i18nConfig from '../../i18nconfig';
import "./globals.css";

export default async function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
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
        <body>{children}</body>
      </html>
    )
  }