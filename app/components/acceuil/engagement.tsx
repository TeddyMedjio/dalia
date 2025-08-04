import React from "react";
import Container from "../common/container";
import Image from "next/image";

export default function Engagement() {
  return (
    <div className="py-20">
      <Container>
        <h2 className=" text-[34px] md:text-5xl leading-10 text-vert-fonce font-medium md:leading-14">
          Pourquoi choisir <br className="hidden md:block" /> Dalia
          Environnement Sarl?
        </h2>
        <p className="md:text-lg text-vert-contrast max-w-md mt-3 leading-tight">
          Notre engagement envers la qualité et le service fait toute la
          différence.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10 flex-wrap">
          {/* card one */}
          <div className="p-5 rounded-2xl bg-neutral-50 border-neutral-300 hover:bg-vert-citron hover:border-vert-secondary transition duration-300 ease-in-out border space-y-4 w-full">
            <div className="flex items-center gap-3">
              <h3 className="text-vert capitalize text-3xl font-medium">
                écologique
              </h3>
              <Image
                src="/feuille.svg"
                alt="icon feuille"
                height={38}
                width={38}
              />
            </div>
            <p className="text-vert-fonce">
              Nos produits sont fabriqués à partir de matériaux recyclés et de
              sources durables.
            </p>
          </div>
          {/* card two */}
          <div className="p-5 rounded-2xl bg-neutral-50 border-neutral-300 hover:bg-vert-citron hover:border-vert-secondary transition duration-300 ease-in-out border space-y-4 w-full">
            <div className="flex items-center gap-3">
              <h3 className="text-vert capitalize text-3xl font-medium">
                Haute Certfiée
              </h3>
              <Image
                src="/bouclier.svg"
                alt="icon feuille"
                height={38}
                width={38}
              />
            </div>
            <p className="text-vert-fonce">
              Une sélection rigoureuse de produits pour une performance et une
              durabilité optimale.
            </p>
          </div>
          {/* card three */}
          <div className="p-5 rounded-2xl bg-neutral-50 border-neutral-300 hover:bg-vert-citron hover:border-vert-secondary transition duration-300 ease-in-out border space-y-4 w-full">
            <div className="flex items-center gap-3">
              <h3 className="text-vert capitalize text-3xl font-medium">
                Livraison Rapide
              </h3>
              <Image src="/car.svg" alt="icon feuille" height={38} width={38} />
            </div>
            <p className="text-vert-fonce">
              Service de livraison express pour répondre rapidement à vos
              besoins.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
