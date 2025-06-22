import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div>
      {/* papier dalia premium */}
      <div className="flex flex-row">
        {/* left */}
        <div className="flex-1/2 grid place-items-center bg-vert px-5 py-10 md:py-0 md:p-10">
          <div className="max-w-lg space-y-5">
            <h2 className="text-white text-[34px] leading-10 md:text-4xl lg:text-5xl font-medium md:leading-10 lg:leading-none">
              Papier hygiénique <span className="uppercase">Dalia Premium</span>
            </h2>
            <p className="text-white">
              Nous proposons une gamme variée de papiers hygiéniques adaptés aux
              particuliers, collectivités, hôtels et entreprises. Disponibles en
              rouleaux standard, maxi ou jumbo.
            </p>
          </div>
        </div>
        {/* right */}
        <div className="hidden flex-1/2 md:grid place-items-center bg-vert-secondary relative h-[416px]">
          <Image
            src="/papiers.jpg"
            alt="image papier"
            fill={true}
            className="object-cover"
          />
        </div>
      </div>
      {/* ramettes de papier papyrus */}
      <div className="flex flex-row">
        {/* left */}
        <div className="hidden flex-1/2 md:grid place-items-center bg-vert-secondary relative h-[416px]">
          <Image
            src="/dalia.jpg"
            alt="image papier"
            fill={true}
            className="object-cover"
          />
        </div>
        {/* right */}
        <div className="flex-1/2 grid place-items-center bg-vert-citron px-5 py-10 md:py-0 md:p-10">
          <div className="max-w-lg space-y-5">
            <h2 className="text-vert text-[34px] leading-10 md:text-4xl lg:text-5xl font-medium md:leading-10 lg:leading-none">
              Ramettes de papier <span className="uppercase">papyrus</span>
            </h2>
            <p className="text-vert-contrast">
              Papier blanc ou recyclé, format A4 ou A3, 70g, 75g, ou 80g. Idéal
              pour impression, photocopie, usage scolaire ou administratif.
            </p>
          </div>
        </div>
      </div>
      {/* papier thermique irondo */}
      <div className="flex flex-row">
        {/* left */}
        <div className="flex-1/2 grid place-items-center bg-vert-fonce px-5 py-10 md:py-0 md:p-10">
          <div className="max-w-lg space-y-5">
            <h2 className="text-jaune-clair text-[34px] leading-10 md:text-4xl lg:text-5xl font-medium md:leading-10 lg:leading-none">
              Papier thermique <span className="uppercase">irondo</span>
            </h2>
            <p className="text-white">
              Rouleaux pour imprimantes de tickets de caisse, TPE, balances
              électroniques. <br />
              Formats : 57×40 mm, 80×80 mm, etc.
            </p>
          </div>
        </div>
        {/* right */}
        <div className="hidden flex-1/2 md:grid place-items-center bg-vert-secondary relative h-[416px]">
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
