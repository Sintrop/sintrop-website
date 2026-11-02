import Link from "next/link";
import { TType } from "@/types/t";
import { FiArrowRight } from "react-icons/fi";
import { Sprout, Network, Pickaxe } from "lucide-react";

interface Props {
  t: TType;
}

export function WhyChain({ t }: Props) {
  const cards = [
    {
      icon: Sprout,
      title: t("whatCard1Title"),
      desc: t("whatCard1Desc"),
    },
    {
      icon: Network,
      title: t("whatCard2Title"),
      desc: t("whatCard2Desc"),
    },
    {
      icon: Pickaxe,
      title: t("whatCard3Title"),
      desc: t("whatCard3Desc"),
    },
  ];

  return (
    <section className="bg-surface-sunken">
      <div className="container mx-auto px-5 py-16 lg:px-20 lg:py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl">{t("whatTitle")}</h2>
          <p className="mt-3 text-lg text-ink-soft">{t("whatLead")}</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="rounded-2xl border border-line bg-surface p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-tint text-brand-deep">
                  <Icon size={22} />
                </span>
                <h3 className="mt-4 text-xl">{card.title}</h3>
                <p className="mt-2 text-ink-soft">{card.desc}</p>
              </div>
            );
          })}
        </div>

        <Link
          href="/about"
          className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-deep hover:underline"
        >
          {t("whatMore")}
          <FiArrowRight size={15} />
        </Link>
      </div>
    </section>
  );
}
