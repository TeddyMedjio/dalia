import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Analytics from "./components/analytics";
import SchemaOrg from "./components/schema-org";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Dalia Environnement Sarl - Papier Thermique & Solutions d'Impression au Cameroun",
    template: "%s | Dalia Environnement Sarl",
  },
  description:
    "Fournisseur leader de papier thermique, rouleaux pour imprimantes et solutions d'impression professionnelles au Cameroun. Livraison rapide à Douala, Yaoundé et toute l'Afrique Centrale. Qualité supérieure garantie.",
  keywords: [
    "papier thermique Cameroun",
    "rouleau imprimante thermique",
    "papier imprimante Douala",
    "papier imprimante Yaoundé",
    "fourniture bureau Cameroun",
    "papier professionnel",
    "rouleau caisse enregistreuse",
    "papier ticket de caisse",
    "impression thermique",
    "fournisseur papier Afrique",
    "papier haut de gamme",
    "Dalia Environnement Sarl",
    "Dalia",
    "solutions impression Cameroun",
    "papier TPE",
    "papier terminal de paiement",
  ],
  authors: [{ name: "Dalia Environnement Sarl" }],
  creator: "Dalia Environnement Sarl",
  publisher: "Dalia Environnement Sarl",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.dalia.cm"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title:
      "Dalia Environnement Sarl - Solutions Papier Professionnel au Cameroun",
    description:
      "Papier thermique et rouleaux pour imprimantes de qualité supérieure. Livraison dans tout le Cameroun et l'Afrique Centrale.",
    url: "https://www.dalia.cm",
    siteName: "Dalia Environnement Sarl",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/68b12e58-b8ef-42e1-a2c5-139318953264.jpg?token=LSZ3i9YiHspJPzTt7Zz_udMkiBPRBxby7bmZIChtwSw&height=630&width=1200&expires=33286872273",
        width: 1200,
        height: 630,
        alt: "Dalia Environnement Sarl - Solutions Papier Professionnel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dalia Environnement Sarl - Papier Thermique au Cameroun",
    description:
      "Fournisseur de papier thermique et solutions d'impression professionnelles au Cameroun",
    images: [
      "https://opengraph.b-cdn.net/production/images/68b12e58-b8ef-42e1-a2c5-139318953264.jpg?token=LSZ3i9YiHspJPzTt7Zz_udMkiBPRBxby7bmZIChtwSw&height=630&width=1200&expires=33286872273",
    ],
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
  verification: {
    // Ajoutez votre Google Search Console verification code ici
    // google: 'votre-code-verification',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta
          name="google-site-verification"
          content="a7M05A9fqZNAAfvO08Ula0zMhnrIBg7obsflFuOfnlo"
        />
        <SchemaOrg />
      </head>

      <body className={`${geist.variable} antialiased`}>
        <Analytics />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
