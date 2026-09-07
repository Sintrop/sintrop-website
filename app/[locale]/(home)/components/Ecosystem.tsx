import Link from "next/link";
import Image from "next/image";
import { TType } from "@/types/t";
import { FiArrowUpRight } from "react-icons/fi";
import { appsList, AppsName } from "@/components/AppLink/appsList";

interface Props {
  t: TType;
}

const FEATURED: AppsName[] = [
  "regenerationCredit",
  "sintropAppStore",
  "education",
  "whitePaperCenter",
  "globalPlantCatalog",
  "humansPeaceTreaty",
];

export function Ecosystem({ t }: Props) {
  return (
    <section className="bg-surface-sunken">
      <div className="container mx-auto px-5 py-16 lg:px-20 lg:py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl">{t("ecosystemTitle")}</h2>
          <p className="mt-3 text-lg text-ink-soft">{t("ecosystemLead")}</p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED.map((name) => {
            const app = appsList[name];
            const href = app.linkApp || app.links[0]?.href || "#";
            const external = href.startsWith("http");
            return (
              <Link
                key={name}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group flex flex-col rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-brand"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-brand-forest p-2">
                    <Image
                      alt=""
                      src={app.image}
                      width={40}
                      height={40}
                      quality={100}
                      className="h-full w-full object-contain"
                    />
                  </span>
                  <h3 className="text-lg leading-tight">{t(app.title)}</h3>
                  <FiArrowUpRight
                    size={16}
                    className="ml-auto shrink-0 text-ink-soft transition-transform group-hover:translate-x-0.5"
                  />
                </div>
                <p className="mt-3 text-sm text-ink-soft">
                  {t(app.shortDescription)}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
