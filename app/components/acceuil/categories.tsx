import React from "react";
import Container from "../common/container";
import Image from "next/image";
import Link from "next/link";

export default function Categories() {
  return (
    <div className="bg-vert py-20">
      <Container>
        <h2 className="text-vert-citron text-5xl font-medium leading-14 max-w-md">
          Nos catégories de produits
        </h2>
        <p className=" text-white text-lg max-w-md mt-3 leading-tight">
          Nous proposons trois grandes catégories de produits, soigneusement
          sélectionnés pour leur qualité, leur durabilité et leur performance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          <Link
            href="#"
            className=" relative h-[504] w-full overflow-hidden rounded-3xl hover:shadow-lg transition-all duration-300 ease-in-out hover:border border-vert-secondary"
          >
            {/* <div className="transition-opacity duration-300 ease-in-out hover:opacity-100 opacity-0 bg-gradient-to-t from-vert via-vert/90 to-transparent absolute  bottom-0 w-full h-full z-5" /> */}
            <div className="transition-opacity duration-300 ease-in-out hover:opacity-100 opacity-0 bg-gradient-to-t from-vert via-vert/90 to-transparent absolute  bottom-0 w-full h-full z-5">
              <p className="absolute bottom-10 px-10 text-white text-4xl font-medium">
                Papier hygiénique <br />
                Dalia Premium
              </p>
            </div>
            <Image
              src="/dalia.jpg"
              alt="image papier hygienique"
              fill={true}
              className="absolute inset-0 object-cover"
            />
          </Link>
          <div className="space-y-5 flex flex-col">
            <Link
              href="#"
              className="relative flex-1 rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-300 ease-in-out hover:border border-vert-secondary "
            >
              <div className="transition-opacity duration-300 ease-in-out hover:opacity-100 opacity-0 bg-gradient-to-t from-vert via-vert/90 to-transparent absolute  bottom-0 w-full h-full z-5">
                <p className="absolute bottom-10 px-10 text-white text-4xl font-medium">
                  Ramettes de papier <br />
                  Papyrus
                </p>
              </div>
              <Image
                src="/ramettes.jpg"
                alt="image papier hygienique"
                fill={true}
                className="absolute inset-0 object-cover"
              />
            </Link>
            <Link
              href="#"
              className="relative flex-1 rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-300 ease-in-out hover:border border-vert-secondary"
            >
              <div className="transition-opacity duration-300 ease-in-out hover:opacity-100 opacity-0 bg-gradient-to-t from-vert via-vert/90 to-transparent absolute  bottom-0 w-full h-full z-5">
                <p className="absolute bottom-10 px-10 text-white text-4xl font-medium">
                  Papier thermique <br />
                  Irondo
                </p>
              </div>
              <Image
                src="/imprimante.jpg"
                alt="image papier hygienique"
                fill={true}
                className="absolute inset-0 object-cover"
              />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
