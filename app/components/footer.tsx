"use client";
import React from "react";
import Container from "./common/container";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="pt-10 md:pt-10 border-t border-neutral-200 bg-vert-citron">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="mb-10 lg:mb-0">
            <Link href="/">
              <Image src="/logo.svg" alt="image logo" width={157} height={71} />
            </Link>
            <p className="w-full md:max-w-[300px] text-sm text-vert-contrast leading-4 mt-4">
              Dalia Environnement est une entreprise camerounaise spécialisée
              dans la fourniture de papiers à usage professionnel.
            </p>
          </div>
          <div className="flex flex-row flex-wrap items-start gap-10 lg:gap-20">
            {/* Menus */}
            <div className="space-y-3">
              <p className="text-vert-secondary font-medium">Menu</p>
              <ul className="text-vert-fonce space-y-3 capitalize">
                <li>
                  <Link href="/produits">Produits</Link>
                </li>
                <li>
                  <Link href="/apropos">à propos</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            {/* Liens */}
            {/* <div className="space-y-3 hidden md:block">
              <p className="text-vert-secondary font-medium">Suivez-nous</p>
              <ul className="text-vert-fonce space-y-3">
                <li>
                  <Link href="#">Facebook</Link>
                </li>
                <li>
                  <Link href="#">Instagram</Link>
                </li>
                <li>
                  <Link href="#">Linkkedin</Link>
                </li>
              </ul>
            </div> */}
            {/* Contacts */}
            <div className="space-y-3">
              <p className="text-vert-secondary font-medium">Contacts</p>
              <ul className="text-vert-fonce space-y-3">
                <li>
                  <span className="text-vert-secondary font-medium mr-2">
                    Email:
                  </span>
                  sophie.fossuo@dalia.cm
                </li>
                <li>
                  <span className="text-vert-secondary font-medium mr-2">
                    Phone:
                  </span>
                  +237 699 62 03 87
                </li>
                <li>
                  <span className="text-vert-secondary font-medium mr-2">
                    BP:
                  </span>
                  1590 Douala-Cameroun
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <div className="bg-vert-secondary/20 py-2 mt-10">
        <Container>
          <div className="flex items-center justify-between">
            <p className="font-medium text-vert-contrast text-sm">
              © {new Date().getFullYear()} Copyright
            </p>
            <p className="font-medium text-vert-contrast text-sm">
              Design & Develop by{" "}
              <span className="text-vert-fonce font-semibold">
                <Link target="blank" href="https://ux.medjio.me">
                  Medjio Teddy
                </Link>
              </span>
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
