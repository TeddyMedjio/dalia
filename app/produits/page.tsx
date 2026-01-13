import { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Nos Produits - Papier Thermique, Ramettes & Papier Hygiénique",
  description:
    "Découvrez nos produits : papier thermique Irondo (57×40mm, 80×80mm), ramettes Papyrus A4/A3 80g, papier hygiénique Dalia Premium en rouleaux standard, maxi et jumbo. Qualité professionnelle garantie au Cameroun.",
  keywords: [
    "papier thermique Irondo",
    "ramette Papyrus A4",
    "papier hygiénique jumbo",
    "rouleau TPE 57x40",
    "rouleau TPE 80x80",
    "papier photocopie A3",
    "papier bureau Cameroun",
    "fourniture hôtel",
  ],
  openGraph: {
    title: "Nos Produits - Solutions Papier Professionnel au Cameroun",
    description:
      "Papier thermique Irondo, ramettes Papyrus, papier hygiénique Dalia Premium. Qualité supérieure pour professionnels.",
    url: "https://www.dalia.cm/produits",
  },
};

export default function Page() {
  return (
    <div>
      {/* papier dalia premium */}
      <div className="flex flex-col md:flex-row">
        {/* left */}
        <div className="md:flex-1/2 md:grid place-items-center bg-vert-secondary relative h-79 md:h-104">
          <Image
            src="/paquets.jpg"
            alt="image papier"
            fill={true}
            className="object-cover"
          />
        </div>
        {/* right */}

        <div className="flex-1/2 grid place-items-center bg-vert px-5 py-10 md:py-0 md:p-10">
          <div className="max-w-lg space-y-5">
            <h1 className="text-white text-[34px] leading-10 md:text-4xl lg:text-5xl font-medium md:leading-10 lg:leading-none">
              <span className="uppercase">Dalia Premium</span>
            </h1>
            <p className="text-white">
              Nous proposons une gamme variée de papiers hygiéniques et papiers
              essuie tout adaptés aux ménages, particuliers, collectivités,
              hôtels et entreprises. Disponibles en rouleaux standard, maxi ou
              jumbo.
            </p>
          </div>
        </div>
      </div>
      {/* autres papiers */}
      <div className="flex flex-col md:flex-row">
        {/* left */}
        <div className="flex-1/2 grid place-items-center bg-vert-contrast px-5 py-10 md:py-0 md:p-10">
          <div className="max-w-lg space-y-5">
            <h1 className="text-white text-[34px] leading-10 md:text-4xl lg:text-5xl font-medium md:leading-10 lg:leading-none">
              <span className="uppercase">autres produits</span>
            </h1>
            <p className="text-white">
              Dalia Environnement Sarl commercialise aussi une gamme de produits
              internationaux de qualité supérieure.
            </p>
          </div>
        </div>
        {/* right */}
        <div className="md:flex-1/2 md:grid place-items-center bg-vert-secondary relative h-79 md:h-104">
          <Image
            src="/papier.jpg"
            alt="image papier"
            fill={true}
            className="object-cover"
          />
        </div>
      </div>
      {/* ramettes de papier papyrus */}
      <div className="flex flex-col-reverse md:flex-row">
        {/* left */}
        <div className="md:flex-1/2 md:grid place-items-center bg-vert-secondary relative h-79 md:h-104">
          <Image
            src="/rame.jpg"
            alt="image papier"
            fill={true}
            className=" object-cover"
          />
        </div>
        {/* right */}
        <div className="flex-1/2 grid place-items-center bg-vert-citron px-5 py-10 md:py-0 md:p-10">
          <div className="max-w-lg space-y-5">
            <h1 className="text-vert text-[34px] leading-10 md:text-4xl lg:text-5xl font-medium md:leading-10 lg:leading-none">
              Rame de papier <span className="uppercase">papyrus</span>
            </h1>
            <p className="text-vert-contrast">
              Papier blanc ou recyclé, format A4 ou A3, 80g. Idéal pour
              impression, photocopie, usage scolaire ou administratif.
            </p>
          </div>
        </div>
      </div>
      {/* papier thermique irondo */}
      <div className="flex flex-col md:flex-row">
        {/* left */}
        <div className="flex-1/2 grid place-items-center bg-vert-fonce px-5 py-10 md:py-0 md:p-10">
          <div className="max-w-lg space-y-5">
            <h1 className="text-jaune-clair text-[34px] leading-10 md:text-4xl lg:text-5xl font-medium md:leading-10 lg:leading-none">
              Papier thermique <span className="uppercase">irondo</span>
            </h1>
            <p className="text-white">
              Rouleaux pour imprimantes de tickets de caisse, TPE, balances
              électroniques. <br />
              Formats : 57×40 mm, 80×80 mm, etc.
            </p>
          </div>
        </div>
        {/* right */}
        <div className="md:flex-1/2 md:grid place-items-center bg-vert-secondary relative h-79 md:h-104">
          <Image
            src="/thermique.jpg"
            alt="image papier"
            fill={true}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
