"use client";
import React from "react";
import Container from "./common/container";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { NavMobile } from "./nav-mobile";
import { MailIcon } from "lucide-react";

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
    <nav className="sticky top-0 z-50 bg-white py-4 border-b border-vert-secondary/80 shadow-sm">
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="logo dalia"
              width={97}
              height={44}
              quality={100}
            />
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
            target="blank"
            href="https://wa.me/237699620387"
            className="hidden md:flex items-center bg-vert px-4 py-2 rounded-full text-white border border-vert font-medium gap-2"
          >
            <Image
              src="/whatsapp.svg"
              alt="icon whatsapp"
              height={20}
              width={20}
            />
            Whatsapp
          </Link>
          <NavMobile />
        </div>
      </Container>
    </nav>
  );
}
