import Link from "next/link";
import Image from "next/image";
import ImageSintrop from "@/public/assets/images/sintrop-logo-white.png";
import { TType } from "@/types/t";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { NavMenuMobile } from "./components/NavMenuMobile";
import { NAV_LINKS } from "./navLinks";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";

interface Props {
  t: TType;
}
export function Header({ t }: Props) {
  return (
    <header className="container mx-auto flex items-center justify-between px-5 py-6 lg:px-20">
      <Link className="flex items-center gap-3" href="/">
        <Image
          src={ImageSintrop}
          alt={t("brandName")}
          quality={100}
          className="w-[120px] object-contain md:w-[140px]"
          priority
        />
      </Link>

      <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="whitespace-nowrap text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            {t(link.label)}
          </Link>
        ))}
        <Link
          href="/run-a-node"
          className="inline-flex h-10 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-brand-forest transition-colors hover:bg-brand-tint"
        >
          {t("navRunANode")}
        </Link>
      </nav>

      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger aria-label="Open menu">
            <HiOutlineBars3BottomRight size={26} color="white" />
          </SheetTrigger>
          <NavMenuMobile t={t} />
        </Sheet>
      </div>
    </header>
  );
}
