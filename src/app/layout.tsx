import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, Tiro_Devanagari_Hindi } from "next/font/google";
import "./globals.css";
import { Navbar, Footer, ScrollProgress, CursorGlow, LoadingScreen, WhatsAppFloat, MobileBottomBar, SmoothScroll } from "@/components/chrome";
import { SITE } from "@/lib/site";

const display = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const hindi = Tiro_Devanagari_Hindi({ subsets: ["latin"], weight: "400", variable: "--font-hindi" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Kalam Kranti Education Foundation | Empowering Every Child Through Education",
    template: "%s | Kalam Kranti Education Foundation",
  },
  description:
    "Kalam Kranti Education Foundation (शिक्षा के लिए एक साझा प्रयास) — free education, scholarships, digital learning, girls education & skill development across Kaimur, Bihar. Led by Er. Akshay Lal Yadav.",
  keywords: ["NGO Bihar", "education NGO", "Kalam Kranti", "free education", "scholarship Bihar", "girls education", "Kaimur NGO", "donate education India"],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: SITE.name,
    title: "Kalam Kranti Education Foundation — शिक्षा के लिए एक साझा प्रयास",
    description: "Free education, scholarships, digital classrooms & girls education in rural Bihar. Join the mission.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalam Kranti Education Foundation",
    description: "Empowering Every Child Through Education — शिक्षा के लिए एक साझा प्रयास",
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE.url },
};

export const viewport: Viewport = {
  themeColor: "#041a3f",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const ngoSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: SITE.name,
  slogan: SITE.tagline,
  url: SITE.url,
  founder: { "@type": "Person", name: SITE.director },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kaimur (Bhabhua)",
    addressRegion: "Bihar",
    addressCountry: "IN",
  },
  identifier: SITE.corporateNo,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${hindi.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ngoSchema) }} />
      </head>
      <body className="min-h-screen antialiased">
        <LoadingScreen />
        <ScrollProgress />
        <CursorGlow />
        <SmoothScroll />
        <Navbar />
        <main className="min-h-screen overflow-x-clip">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <MobileBottomBar />
      </body>
    </html>
  );
}
