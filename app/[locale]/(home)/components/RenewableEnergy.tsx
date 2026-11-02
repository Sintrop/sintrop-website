import Image from "next/image";
import { TType } from "@/types/t";
import ImageEnergy from "@/public/assets/images/energy.png";

interface Props {
  t: TType;
}

export function RenewableEnergy({ t }: Props) {
  return (
    <section className="container mx-auto px-5 py-16 lg:px-20 lg:py-24">
      <div className="grid gap-10 rounded-3xl border border-line bg-surface p-8 lg:grid-cols-2 lg:items-center lg:p-12">
        <div className="flex items-center justify-center">
          <Image
            src={ImageEnergy}
            width={460}
            height={360}
            quality={100}
            alt=""
            className="h-auto w-full max-w-[420px] object-contain"
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl">{t("energyTitle")}</h2>
          <p className="mt-4 text-lg text-ink-soft">{t("energyDesc")}</p>
        </div>
      </div>
    </section>
  );
}
