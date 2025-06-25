import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dalia Environnement",
  description:
    "Dalia Environnement est une entreprise camerounaise spécialisée dans la fourniture des solutions de papiers haut de gamme pour vos besoins à usage professionnel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      {/* <!-- HTML Meta Tags --> */}
      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content="https://dalia-rho.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Dalia Environnement" />
      <meta
        property="og:description"
        content="Des solutions papier haut de gamme pour vos besoins."
      />
      <meta
        property="og:image"
        content="https://opengraph.b-cdn.net/production/images/9af1431b-847a-4d2a-bfc2-cdcc5de44e91.png?token=mrQkfSeC5wdQcNPW-HqrUIaWhtOGs0cq4T2xQm822Ik&height=643&width=1200&expires=33286713745"
      />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="dalia-rho.vercel.app" />
      <meta property="twitter:url" content="https://dalia-rho.vercel.app/" />
      <meta name="twitter:title" content="Dalia Environnement" />
      <meta
        name="twitter:description"
        content="Des solutions papier haut de gamme pour vos besoins."
      />
      <meta
        name="twitter:image"
        content="https://opengraph.b-cdn.net/production/images/9af1431b-847a-4d2a-bfc2-cdcc5de44e91.png?token=mrQkfSeC5wdQcNPW-HqrUIaWhtOGs0cq4T2xQm822Ik&height=643&width=1200&expires=33286713745"
      />

      <body className={`${geist.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
