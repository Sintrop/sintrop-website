import Link from "next/link";
import Image from "next/image";
import { TType } from "@/types/t";
import { FiArrowUpRight } from "react-icons/fi";
import ImageFeatureApp from "@/public/assets/images/featured-app.png";

interface Props {
  t: TType;
}

export function FeaturedRC({ t }: Props) {
  return (
    <section className="bg-hero-forest">
      <div className="container mx-auto flex flex-col gap-10 px-5 py-16 lg:flex-row lg:items-center lg:px-20 lg:py-24">
        <div className="lg:max-w-[55%]">
          <span className="font-anta text-xs uppercase tracking-[0.2em] text-brand-tint">
            {t("featuredKicker")}
          </span>
          <h2 className="mt-3 text-3xl text-white md:text-4xl">
            {t("regenerationCredit")}
          </h2>
          <p className="mt-4 text-lg text-white/75">{t("featuredDesc")}</p>
          <Link
            href="https://regenerationcredit.org"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 font-semibold text-brand-forest transition-colors hover:bg-brand-tint"
          >
            {t("featuredCta")}
            <FiArrowUpRight size={17} />
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <Image
            src={ImageFeatureApp}
            width={360}
            height={360}
            quality={100}
            alt=""
            className="h-auto w-[280px] object-contain lg:w-[360px]"
          />
        </div>
      </div>
    </section>
  );
}
