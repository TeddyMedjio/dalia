"use client";
import Container from "./components/common/container";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <Container>
        <div className="grid place-items-center py-20 space-y-10">
          <h1 className=" text-center text-vert-fonce text-[34px] leading-10 md:text-5xl font-medium md:leading-14 max-w-4xl">
            Oupps!! <br />
            La page n&apos;existe plus ou a été déplacé
          </h1>

          <Link
            href="/"
            className="bg-vert px-4 py-2 rounded-full text-white border border-vert font-medium gap-2"
          >
            Retour à l&apos;Acceuil
          </Link>
        </div>
      </Container>
    </div>
  );
}
