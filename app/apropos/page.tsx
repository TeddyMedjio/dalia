import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "produits/Dalia Environnement",
  description:
    "DALIA ENVIRONNEMENT est une entreprise camerounaise spécialisée dans la fourniture de papiers à usage professionnel. Depuis plus de 5 ans, nous accompagnons les entreprises, administrations et commerces dans leur approvisionnement en papiers de qualité.",
};

export default function Page() {
  return (
    <div>
      {/* papier dalia premium */}
      <div className="flex flex-row">
        {/* left */}
        <div className="flex-1/2 bg-vert px-5 py-10 md:p-20 space-y-10 md:rounded-br-[200px]">
          <div className="max-w-lg space-y-5">
            <h1 className="text-white text-[34px] leading-10 md:text-4xl lg:text-5xl font-medium md:leading-10 lg:leading-none">
              Qui sommes-nous ?
            </h1>
            <p className="text-white">
              <span className="font-semibold">DALIA ENVIRONNEMENT</span> est une
              entreprise camerounaise spécialisée dans la fourniture de papiers
              à usage professionnel. Depuis plus de 5 ans, nous accompagnons les
              entreprises, administrations et commerces dans leur
              approvisionnement en papiers de qualité.
            </p>
          </div>
          <div className="max-w-lg space-y-5">
            <h1 className="text-white text-[34px] leading-10 md:text-4xl lg:text-5xl font-medium md:leading-10 lg:leading-none">
              Nos engagements
            </h1>
            <ul className="text-white ml-5 font-medium list-disc">
              <li>Fourniture rapide et fiable</li>
              <li>Produits aux normes internationales</li>
              <li>Service client réactif</li>
              <li>Tarifs compétitifs pour les grandes quantités</li>
            </ul>
          </div>
        </div>
        {/* right */}
        <div className="hidden flex-1/2 lg:grid place-items-center">
          <Image src="/logo.svg" alt="logo dalia" width={579} height={263} />
        </div>
      </div>
    </div>
  );
}
