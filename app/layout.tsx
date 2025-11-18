import type { Metadata } from "next";
import { Inter, Quicksand } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://oddinai-preview.vercel.app"),
  title: {
    default: "OddinAI — L'IA qui voit le jeu avant tout le monde",
    template: "%s | OddinAI",
  },
  description:
    "Landing page premium pour OddinAI : analyse en temps réel, simulateur de gains, plans Stripe-ready et animations Framer Motion.",
  keywords: [
    "OddinAI",
    "paris sportifs",
    "intelligence artificielle",
    "simulateur",
    "Framer Motion",
  ],
  openGraph: {
    title: "OddinAI — L'IA qui anticipe les cotes",
    description:
      "Plateforme IA en français inspirée d'OddsJam : données live, simulateur de gains, alertes Telegram.",
    url: "https://oddinai-preview.vercel.app",
    siteName: "OddinAI",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "OddinAI hero preview",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OddinAI — Landing page data-driven",
    description:
      "Un site ultra premium en dark mode avec animations, simulateur et CTA Telegram.",
    images: ["/og.svg"],
  },
  alternates: {
    canonical: "https://oddinai-preview.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${quicksand.variable} bg-night text-white antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
