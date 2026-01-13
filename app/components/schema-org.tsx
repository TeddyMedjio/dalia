export default function SchemaOrg() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dalia Environnement",
    url: "https://dalia-rho.vercel.app",
    logo: "https://dalia-rho.vercel.app/logo.png",
    description:
      "Fournisseur leader de papier thermique, rouleaux pour imprimantes et solutions d'impression professionnelles au Cameroun et en Afrique Centrale",
    address: {
      "@type": "PostalAddress",
      addressCountry: "CM",
      addressLocality: "Douala",
      addressRegion: "Littoral",
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Cameroun",
      },
      {
        "@type": "Place",
        name: "Afrique Centrale",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Service Client",
      availableLanguage: ["French"],
    },
    sameAs: [
      // Ajoutez vos liens réseaux sociaux ici
      // "https://www.facebook.com/dalia-environnement",
      // "https://www.linkedin.com/company/dalia-environnement",
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Dalia Environnement",
    image: "https://dalia-rho.vercel.app/logo.png",
    "@id": "https://dalia-rho.vercel.app",
    url: "https://dalia-rho.vercel.app",
    telephone: "+237-XXX-XXX-XXX", // Remplacez par votre numéro
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "", // Ajoutez votre adresse
      addressLocality: "Douala",
      addressRegion: "Littoral",
      postalCode: "",
      addressCountry: "CM",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 4.0511, // Coordonnées de Douala (à ajuster)
      longitude: 9.7679,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </>
  );
}
