import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import clsx from "clsx";
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
  const pathname = usePathname();
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
        <div className="flex items-center justify-between pr-10 gap-14">
          <ul className="px-5 flex flex-col gap-5 text-vert-contrast  ">
            {navigation.map((nav, index) => (
              <li
                key={index}
                className={clsx(
                  pathname === nav.link ? "font-bold text-vert" : ""
                )}
              >
                <SheetClose asChild>
                  <Link
                    href={nav.link}
                    className=" capitalize text-lg transition duration-300 ease-in-out"
                  >
                    {nav.name}
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>

          {/* <Image src="/fleur.svg" alt="logo dalia" width={150} height={150} /> */}
          <Link
            target="blank"
            href="https://wa.me/237699620387"
            className="flex items-center bg-vert p-4 rounded-full border border-vert font-medium gap-2 animate-bounce"
          >
            <Image
              src="/whatsapp.svg"
              alt="icon whatsapp"
              height={50}
              width={50}
            />
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
