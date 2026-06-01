import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { LeadProvider } from "@/lib/LeadContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollReveal from "@/components/ScrollReveal";

const sora = Sora({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-sora", display: "swap" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-inter", display: "swap" });

export const metadata = {
  metadataBase: new URL("https://truecapital.com"),
  title: {
    default: "True Capital & Advisory Pvt Ltd — Fast Loan. Trusted Solution.",
    template: "%s | True Capital & Advisory",
  },
  description:
    "True Capital & Advisory Pvt Ltd — Fast loans and trusted financial solutions across India. Home, Personal, Business & MSME loans, LAP, project finance, DSA, insurance & wealth advisory. Quick approval, transparent process.",
  keywords: [
    "loan consulting", "home loan", "personal loan", "MSME loan", "business loan",
    "DSA services", "loan against property", "EMI calculator", "Haridwar", "financial advisory", "private funding",
  ],
  authors: [{ name: "True Capital & Advisory Pvt Ltd" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "True Capital & Advisory",
    title: "True Capital & Advisory Pvt Ltd — Fast Loan. Trusted Solution.",
    description: "Fast loans and trusted financial solutions across India. Quick approval, transparent process, pan-India support.",
  },
  twitter: {
    card: "summary_large_image",
    title: "True Capital & Advisory Pvt Ltd",
    description: "Fast Loan. Trusted Solution. Loans & financial advisory across India.",
  },
};

export const viewport = {
  themeColor: "#0A0A0F",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      {/*
        Analytics & tracking integration points (paste your tags here):
        - Google Analytics (GA4): add <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXX"/> + config
        - Meta (Facebook) Pixel: fbq('init','YOUR_PIXEL_ID'); fbq('track','PageView');
        - Google Ads conversion: gtag('event','conversion',{ send_to:'AW-XXXX/XXXX' });
        Use next/script with strategy="afterInteractive".
      */}
      <body>
        <LeadProvider>
          <Navbar />
          <ScrollReveal />
          <main className="page-enter">{children}</main>
          <Footer />
          <FloatingButtons />
        </LeadProvider>
      </body>
    </html>
  );
}
