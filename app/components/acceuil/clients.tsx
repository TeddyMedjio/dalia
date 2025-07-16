import React from "react";
import Container from "../common/container";
import Image from "next/image";

export default function Clients() {
  return (
    <div className="bg-vert-citron py-20 text-center">
      <Container>
        <div className="w-full grid place-items-center">
          <h2 className="text-vert-fonce text-[34px] leading-10 md:text-5xl font-medium md:leading-14 max-w-lg">
            Nos Clients restent pour une raison
          </h2>
          <p className=" text-vert md:text-lg max-w-2xl mt-3 leading-tight">
            Fournisseur de qualité en papier hygiénique, rame de papier et
            papier thermique pour professionnels et particuliers. Nous
            commercialisons aussi certianes marques internationales.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          {/* premier bloc */}
          <div className="flex flex-col h-[382px] md:h-[482px] gap-5">
            <div className="bg-jaune-clair p-10 rounded-2xl grid place-items-center flex-1/3">
              <p className="text-vert-fonce lg:text-xl">
                Produits aux normes internationales.
              </p>
            </div>
            <div className="relative w-auto h-full overflow-hidden rounded-3xl flex-2/3">
              <Image
                src="/papier.jpg"
                fill={true}
                alt="image rouleau de papier"
                className="absolute inset-0 object-cover"
              />
            </div>
          </div>
          {/* deuxieme bloc */}
          <div className="flex flex-col-reverse md:flex-col h-[482px] gap-5">
            <div className="relative w-auto h-full overflow-hidden rounded-3xl flex-2/3">
              <Image
                src="/rame.jpg"
                fill={true}
                alt="image rouleau de papier"
                className="absolute inset-0 object-cover"
              />
            </div>
            <div className="bg-jaune-clair p-10 rounded-2xl grid place-items-center flex-1/3">
              <p className="text-vert-fonce lg:text-xl max-w-xs">
                Tarifs compétitifs pour les grandes quantités.
              </p>
            </div>
          </div>
          {/* troisieme bloc */}
          <div className="flex flex-col h-[382px] md:h-[482px] gap-5">
            <div className="bg-jaune-clair p-10 rounded-2xl grid place-items-center flex-1/3">
              <p className="text-vert-fonce lg:text-xl">
                Papiers Hygiénique jettables dans les toilettes à 100%.
              </p>
            </div>
            <div className="relative w-auto h-full overflow-hidden rounded-3xl flex-2/3">
              <Image
                src="/paquets.jpg"
                fill={true}
                alt="image rouleau de papier"
                className="absolute inset-0 object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
