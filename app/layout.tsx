import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = "https://aspirio.theryters.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aspirio Limited | Property & Medical Equipment",
    template: "%s | Aspirio Limited",
  },
  description:
    "Aspirio Limited is an Abuja based Nigerian company operating across two divisions: Aspirio Properties, offering property sales, letting and development, and Aspirio Medicals, supplying quality medical equipment.",
  keywords: [
    "Aspirio Limited",
    "Aspirio Properties",
    "Aspirio Medicals",
    "real estate Nigeria",
    "property development Nigeria",
    "medical equipment supplier Nigeria",
  ],
  authors: [{ name: "Aspirio Limited" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Aspirio Limited",
    title: "Aspirio Limited | Property & Medical Equipment",
    description:
      "Two divisions, one standard of excellence: Aspirio Properties and Aspirio Medicals.",
    images: [
      {
        url: "/logo.jpg",
        width: 1080,
        height: 1080,
        alt: "Aspirio Limited",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Aspirio Limited",
    description:
      "Two divisions, one standard of excellence: Aspirio Properties and Aspirio Medicals.",
    images: ["/logo.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Aspirio Limited",
  url: siteUrl,
  logo: `${siteUrl}/logo.jpg`,
  taxID: "RC 1274067",
  foundingDate: "2015-07-13",
  address: {
    "@type": "PostalAddress",
    streetAddress: "NICON Insurance Plaza",
    addressLocality: "Abuja",
    addressCountry: "NG",
  },
  telephone: "+234 703 875 2663",
  sameAs: [
    "https://www.instagram.com/aspiriolimited/",
    "https://web.facebook.com/shade.gold.940",
  ],
  subOrganization: [
    { "@type": "Organization", name: "Aspirio Properties" },
    { "@type": "Organization", name: "Aspirio Medicals" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
