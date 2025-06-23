import React from "react";
import Container from "../components/common/container";
import Image from "next/image";
import ContactForm from "../components/formulaire/form";

export default function Page() {
  return (
    <div>
      <Container>
        <div className="grid place-items-center py-20 space-y-10">
          <h2 className=" text-center text-vert-fonce text-[34px] leading-10 md:text-5xl font-medium md:leading-14 max-w-4xl">
            Quelle que soit la raison, nous sommes impatients de vous entendre!
          </h2>
          <div className="space-y-4 grid place-items-center">
            <Image
              src="/whatsapp.svg"
              alt="logo whatsapp"
              width={64}
              height={64}
            />
            <h2 className="text-vert text-[34px] leading-10 md:text-5xl font-medium md:leading-14">
              655 12 31 14
            </h2>
          </div>
          <p className="text-center max-w-3xl text-vert-fonce">
            Veuillez nous appeler du lundi au vendredi, entre 8 h 30 et 17 h 30.
            Si notre bureau est fermé, veuillez nous laisser un message et nous
            vous rappellerons rapidement.
          </p>
        </div>
      </Container>
      <div className="bg-vert-fonce py-20 grid place-items-center">
        <Container>
          <div className="grid place-items-start md:place-items-center">
            <h2 className=" text-start md:text-center text-vert-citron text-[34px] leading-10 md:text-5xl font-medium md:leading-14 max-w-4xl mb-10 md:mb-20">
              Envoyez un message
            </h2>
            <div className="lg:w-[80%]">
              {/* formulaire */}
              <div className="flex flex-col-reverse md:flex-row md:items-start gap-10 lg:gap-30 w-full">
                <div className="flex-1/2">
                  <p className="text-white text-lg md:text-2xl font-medium">
                    Questions générales et commentaires
                  </p>{" "}
                  <br />
                  <p className="text-white text-sm lg:text-base">
                    <span className="font-bold">Remarque:</span> si vous avez un
                    problème ou une plainte concernant un produit, veuillez
                    conserver le produit et son emballage, car il se peut que
                    l’on vous demande de le renvoyer; Tous les frais
                    d’expédition seront pris en charge par{" "}
                    <span className="font-bold">DALIA ENVIRONNEMENT</span>.
                  </p>
                  <br />
                  <p className="text-white text-sm lg:text-base">
                    <span className="font-bold">DALIA ENVIRONNEMENT</span>{" "}
                    n’accepte pas et ne répond pas aux messages des personnes
                    âgées de moins de treize ans. Si vous avez moins de treize
                    ans, veuillez demander à vos parents ou à votre tuteur
                    d'envoyer la question en votre nom.
                  </p>
                  <br />
                  <p className="text-white text-sm lg:text-base">
                    Quelle que soit la façon dont vous nous contactez, soyez
                    assuré qu’en aucun cas les renseignements que vous
                    fournissez ne seront partagés ou vendus et qu’ils ne seront
                    utilisés que par{" "}
                    <span className="font-bold">DALIA ENVIRONNEMENT</span> et
                    ses sociétés affiliées.
                  </p>
                </div>
                <div className="flex-1/2">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
