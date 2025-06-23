import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

export function NavMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <MenuIcon size={30} className="md:hidden" />
      </SheetTrigger>
      <SheetContent
        side="top"
        className={`${cn("pb-10 border-secondary bg-background")}`}
      >
        <SheetHeader className={`${cn("border-b border-jaune-clair")}`}>
          <SheetTitle>
            <Link href="/">
              <Image src="/logo.svg" alt="logo dalia" width={97} height={44} />
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div className="flex items-center gap-14">
          <ul className="px-5 flex flex-col gap-5 text-vert-contrast  ">
            {navigation.map((nav, index) => (
              <li key={index}>
                <a
                  href={nav.link}
                  className=" capitalize font-medium hover:text-secondary text-lg transition duration-300 ease-in-out"
                >
                  {nav.name}
                </a>
              </li>
            ))}
          </ul>
          <Image src="/fleur.svg" alt="logo dalia" width={150} height={150} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
