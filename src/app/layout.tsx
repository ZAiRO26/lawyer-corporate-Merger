import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Merger & Co | Global M&A Law Firm & Corporate Advisory",
  description: "Premier boutique law firm specializing in cross-border mergers, acquisitions, private equity, and corporate restructuring. Strategic legal counsel for global enterprises.",
  keywords: ["M&A Law Firm", "Corporate Mergers", "Cross-border Acquisitions", "Private Equity Law", "Corporate Restructuring", "Global Deal Advisory", "Legal Counsel", "Merger & Co"],
  openGraph: {
    title: "Merger & Co | Global M&A Law Firm",
    description: "Facilitating strategic mergers globally with elite legal counsel for complex cross-border transactions.",
    url: "https://www.mergerandco.com",
    siteName: "Merger & Co",
    images: [
      {
        url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "Merger & Co Office",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Merger & Co | Strategic M&A Advisory",
    description: "Premier boutique law firm specializing in cross-border mergers and acquisitions.",
    images: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.mergerandco.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Merger & Co",
  "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
  "url": "https://www.mergerandco.com",
  "telephone": "+1-212-555-0123",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Financial District",
    "addressLocality": "New York",
    "addressRegion": "NY",
    "postalCode": "10005",
    "addressCountry": "US"
  },
  "priceRange": "$$$$",
  "description": "Boutique law firm specializing in cross-border mergers, private equity, and corporate restructuring.",
  "founder": {
    "@type": "Person",
    "name": "Alexander Sterling"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
