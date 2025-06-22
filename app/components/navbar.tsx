"use client";
import React from "react";
import Container from "./common/container";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navigation = [
  {
    name: "acceuil",
    link: "/",
  },
  {
    name: "produits",
    link: "/produits",
  },
  {
    name: "à propos",
    link: "/apropos",
  },
  {
    name: "contact",
    link: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="py-5 border-b border-jaune-clair shadow-md">
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.svg" alt="logo dalia" width={97} height={44} />
          </Link>
          <ul className="hidden md:flex items-center gap-8 text-vert-fonce capitalize">
            {navigation.map((nav, indx) => (
              <li key={indx}>
                <Link
                  href={nav.link}
                  className={clsx(
                    "transition-all duration-300 ease-in-out hover:text-vert",
                    pathname === nav.link ? "font-semibold text-vert" : ""
                  )}
                >
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="#"
            className="hidden md:flex items-center bg-vert-secondary px-4 py-2 rounded-full text-white border border-vert font-medium gap-2"
          >
            <span>
              <Image src="/phone.svg" width={24} height={24} alt="icon phone" />
            </span>
            655 12 31 14
          </Link>
        </div>
      </Container>
    </nav>
  );
}
