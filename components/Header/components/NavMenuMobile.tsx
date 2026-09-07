import { TType } from "@/types/t";
import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import Image from "next/image";
import ImageSintrop from "@/public/assets/images/sintrop-logo-gray.png";
import Link from "next/link";
import { Github } from "lucide-react";
import DiscordIcon from "@/public/assets/icons/discord-white-icon.png";
import { NAV_LINKS } from "../navLinks";

interface Props {
  t: TType;
}
export function NavMenuMobile({ t }: Props) {
  return (
    <SheetContent className="flex flex-col gap-6 bg-page p-6">
      <SheetHeader className="p-0">
        <Link className="flex items-center justify-start gap-3" href="/">
          <SheetTitle>
            <Image
              src={ImageSintrop}
              alt={t("brandName")}
              quality={100}
              className="object-contain"
              width={120}
            />
          </SheetTitle>
        </Link>
      </SheetHeader>

      <nav className="flex flex-col">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="border-b border-line py-3 text-base font-medium text-ink transition-colors hover:text-brand-deep"
          >
            {t(link.label)}
          </Link>
        ))}
      </nav>

      <div className="mt-auto flex flex-col gap-3">
        <Link
          href="https://github.com/sintrop"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 rounded-lg bg-ink py-2.5 text-white transition-opacity hover:opacity-90"
        >
          <Github size={22} color="white" />
          {t("github")}
        </Link>

        <Link
          href="https://discord.gg/dAGBBFnTM7"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 rounded-lg bg-[#5865F2] py-2.5 text-white transition-opacity hover:opacity-90"
        >
          <Image
            src={DiscordIcon}
            alt=""
            quality={100}
            width={22}
            height={22}
          />
          {t("discord")}
        </Link>
      </div>
    </SheetContent>
  );
}
