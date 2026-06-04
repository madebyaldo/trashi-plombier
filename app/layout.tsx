import type { Metadata } from "next";
import { Oswald, Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BUSINESS } from "@/lib/seo-data";

const heading = Oswald({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const display = DM_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.url),
  title: {
    default: "Plombier & Chauffagiste Metz | Urgence 24h/24 – Trashi Plombier",
    template: "%s – Trashi Plombier",
  },
  description: BUSINESS.description,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: BUSINESS.url,
    siteName: BUSINESS.name,
    title: "Plombier & Chauffagiste Metz | Urgence 24h/24 – Trashi Plombier",
    description: BUSINESS.description,
  },
  alternates: { canonical: BUSINESS.url },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${heading.variable} ${body.variable} ${display.variable} font-body antialiased bg-white text-ink-900`}>
        <Header />
        <div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
