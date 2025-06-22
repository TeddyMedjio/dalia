import React from "react";
import Container from "./common/container";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-20 border-t border-neutral-200">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="mb-10 lg:mb-0">
            <Link href="/">
              <Image src="/logo.svg" alt="image logo" width={157} height={71} />
            </Link>
            <p className="max-w-[300px] text-sm text-vert-contrast leading-4 mt-4">
              est une entreprise camerounaise spécialisée dans la fourniture de
              papiers à usage professionnel.
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
            <div className="space-y-3 hidden md:block">
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
            </div>
            {/* Contacts */}
            <div className="space-y-3">
              <p className="text-vert-secondary font-medium">Contacts</p>
              <ul className="text-vert-fonce space-y-3">
                <li>
                  <Link href="mailto:email_address">
                    contact@daliaenvironnement.cm
                  </Link>
                </li>
                <li>
                  <Link href="tel:">
                    <span className="text-vert-secondary font-medium mr-2">
                      Phone:
                    </span>
                    +237 655 12 31 14
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className="text-vert-secondary font-medium mr-2">
                      BP:
                    </span>
                    1234 Bld de la liberté Akwa
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
