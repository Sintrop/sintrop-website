import ImageSintrop from "@/public/assets/images/sintrop-logo-white.png";
import Image from "next/image";
import Link from "next/link";
import { TType } from "@/types/t";
import LanguageChanger from "../LanguageChanger";
import { Github } from "lucide-react";
import DiscordIcon from "@/public/assets/icons/discord-white-icon.png";

interface Props {
  t: TType;
}

export function Footer({ t }: Props) {
  const paths = [
    { href: "/run-a-node", label: t("navRunANode") },
    { href: "/build", label: t("navBuild") },
    { href: "/network", label: t("navNetwork") },
  ];

  const project = [
    { href: "/about", label: t("navAbout") },
    { href: "/resources", label: t("navResources") },
    { href: "/tutorials", label: t("navTutorials") },
    { href: "https://explorer.sintrop.com", label: t("explorer"), external: true },
  ];

  return (
    <footer className="bg-hero-forest">
      <div className="container mx-auto px-5 py-14 lg:px-20">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src={ImageSintrop}
                alt={t("brandName")}
                quality={100}
                className="w-[140px] object-contain"
              />
            </Link>
            <p className="max-w-xs text-sm text-white/70">{t("footerTagline")}</p>
            <div className="mt-2 flex gap-3">
              <Link
                href="https://github.com/sintrop"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
              >
                <Github size={18} color="white" />
              </Link>
              <Link
                href="https://discord.gg/dAGBBFnTM7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
              >
                <Image src={DiscordIcon} alt="" width={18} height={18} />
              </Link>
            </div>
          </div>

          <FooterColumn title={t("footerPaths")} links={paths} />
          <FooterColumn title={t("footerProject")} links={project} />

          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
              {t("language")}
            </p>
            <LanguageChanger />
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/50">
          © {new Date().getFullYear()} {t("brandName")}. {t("footerRights")}
        </div>
      </div>
    </footer>
  );
}

interface FooterColumnProps {
  title: string;
  links: { href: string; label: string; external?: boolean }[];
}
function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
        {title}
      </p>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          className="text-sm text-white/75 transition-colors hover:text-white"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
