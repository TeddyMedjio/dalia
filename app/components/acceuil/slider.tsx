import Image from "next/image";
import React from "react";

export default function Slider() {
  return (
    <div className="w-full">
      <div className="mx-auto bg-vert-fonce py-5 w-full relative">
        <div className="wrapper">
          <div className="marquee">
            <p className="text-vert-citron text-xl font-medium uppercase">
              Papiers Thermiques
              <span className="h-[24px] w-[30px] flex items-center justify-center">
                <Image src="fleur.svg" alt="icon logo" width={15} height={12} />
              </span>
              Papiers Hygiéniques
              <span className="h-[24px] w-[30px] flex items-center justify-center">
                <Image src="fleur.svg" alt="icon logo" width={15} height={12} />
              </span>
              Rame de Format
              <span className="h-[24px] w-[30px] flex items-center justify-center">
                <Image src="fleur.svg" alt="icon logo" width={15} height={12} />
              </span>
              Papiers Hygiéniques
              <span className="h-[24px] w-[30px] flex items-center justify-center">
                <Image src="fleur.svg" alt="icon logo" width={15} height={12} />
              </span>
              Rame de Format
              <span className="h-[24px] w-[30px] flex items-center justify-center mr-5">
                <Image src="fleur.svg" alt="icon logo" width={15} height={12} />
              </span>
            </p>
            {/* deuxieme */}
            <p className="text-vert-citron text-xl font-medium uppercase">
              Papiers Thermiques{" "}
              <span className="h-[24px] w-[30px] flex items-center justify-center">
                <Image src="fleur.svg" alt="icon logo" width={15} height={12} />
              </span>
              Papiers Hygiéniques
              <span className="h-[24px] w-[30px] flex items-center justify-center">
                <Image src="fleur.svg" alt="icon logo" width={15} height={12} />
              </span>
              Rame de Format
              <span className="h-[24px] w-[30px] flex items-center justify-center">
                <Image src="fleur.svg" alt="icon logo" width={15} height={12} />
              </span>
              Papiers Hygiéniques
              <span className="h-[24px] w-[30px] flex items-center justify-center">
                <Image src="fleur.svg" alt="icon logo" width={15} height={12} />
              </span>
              Rame de Format
              <span className="h-[24px] w-[30px] flex items-center justify-center">
                <Image src="fleur.svg" alt="icon logo" width={15} height={12} />
              </span>
            </p>
            <p className="text-vert-citron text-xl font-medium uppercase">
              Papiers Thermiques{" "}
              <span className="h-[24px] w-[30px] flex items-center justify-center">
                <Image src="fleur.svg" alt="icon logo" width={15} height={12} />
              </span>
              Papiers Hygiéniques
              <span className="h-[24px] w-[30px] flex items-center justify-center">
                <Image src="fleur.svg" alt="icon logo" width={15} height={12} />
              </span>
              Rame de Format
              <span className="h-[24px] w-[30px] flex items-center justify-center">
                <Image src="fleur.svg" alt="icon logo" width={15} height={12} />
              </span>
              Papiers Hygiéniques
              <span className="h-[24px] w-[30px] flex items-center justify-center">
                <Image src="fleur.svg" alt="icon logo" width={30} height={24} />
              </span>
              Rame de Format
              <span className="h-[24px] w-[30px] flex items-center justify-center">
                <Image src="fleur.svg" alt="icon logo" width={15} height={12} />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
