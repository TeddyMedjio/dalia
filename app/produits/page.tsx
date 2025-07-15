import { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
  title: "apropos/Dalia Environnement",
  description:
    "Nous proposons une gamme variée de papiers hygiéniques adaptés aux particuliers, collectivités, hôtels et entreprises. Disponibles en rouleaux standard, maxi ou jumbo.",
};

export default function Page() {
  return (
    <div>
      {/* papier dalia premium */}
      <div className="flex flex-col md:flex-row">
        {/* left */}
        <div className="flex-1/2 grid place-items-center bg-vert px-5 py-10 md:py-0 md:p-10">
          <div className="max-w-lg space-y-5">
            <h1 className="text-white text-[34px] leading-10 md:text-4xl lg:text-5xl font-medium md:leading-10 lg:leading-none">
              <span className="uppercase">Dalia Premium</span>
            </h1>
            <p className="text-white">
              Nous proposons une gamme variée de papiers hygiéniques et papiers
              essuie tout adaptés aux particuliers, collectivités, hôtels et
              entreprises. Disponibles en rouleaux standard, maxi ou jumbo.
            </p>
          </div>
        </div>
        {/* right */}
        <div className="md:flex-1/2 md:grid place-items-center bg-vert-secondary relative h-[316px] md:h-[416px]">
          <Image
            src="/papiers.jpg"
            alt="image papier"
            fill={true}
            className="object-cover"
          />
        </div>
      </div>
      {/* ramettes de papier papyrus */}
      <div className="flex flex-col-reverse md:flex-row">
        {/* left */}
        <div className="md:flex-1/2 md:grid place-items-center bg-vert-secondary relative h-[316px] md:h-[416px]">
          <Image
            src="/ramettes.png"
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
        <div className="md:flex-1/2 md:grid place-items-center bg-vert-secondary relative h-[316px] md:h-[416px]">
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
