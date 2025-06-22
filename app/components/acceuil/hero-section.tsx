import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "../common/container";

export default function HeroSection() {
  return (
    <div className="relative h-[604px] w-full">
      <Container>
        <div className="absolute h-full z-10 max-w-[700px] flex items-center ">
          <div>
            <h1 className=" text-[52px] leading-12 md:leading-none md:text-7xl font-bold text-white -tracking-[4%]">
              Des solutions papier{" "}
              <span className="text-jaune-clair">haut de gamme</span> pour vos
              besoins.
            </h1>
            <p className="text-sm text-white max-w-[580px] mt-5">
              Dalia Environnement vous offre une gamme complète de papiers
              hygiéniques, Ramettes de papier et papiers pour imprimantes
              thermiques de qualité supérieure— livrés partout au Cameroun.
            </p>
            <div className="space-x-5 mt-10">
              <Link
                href="#"
                className="text-sm md:text-base bg-vert-citron hover:bg-vert hover:text-vert-citron transition duration-300 text-vert py-3 px-8 font-medium rounded-full border border-vert"
              >
                Nos Produits
              </Link>
              <Link
                href="#"
                className="text-sm md:text-base bg-vert-secondary hover:bg-vert transition duration-300 text-vert-citron py-3 px-8 font-medium rounded-full border-vert border"
              >
                Contactez-nous
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <div className="bg-vert/75 lg:bg-transparent lg:bg-gradient-to-r from-vert via-vert/90 to-transparent absolute inset-0 w-full h-full z-5" />
      <Image
        src="/background.jpg"
        alt="image background"
        fill={true}
        className="absolute object-cover w-full h-full"
      />
    </div>
  );
}
