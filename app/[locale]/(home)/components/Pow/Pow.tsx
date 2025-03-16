import { TType } from "@/types/t";
import Image from "next/image";
import ImagePow from '@/public/assets/images/pow-image.png';
import { Button } from "@/components/ui/button";
import { StartMineButton } from "./StartMineButton";

interface Props {
    t: TType;
    locale: string;
}

export function Pow({ t, locale }: Props) {
    return (
        <section className="my-10 lg:my-20 flex flex-wrap justify-between gap-5">
            <div className="flex flex-col w-full md:max-w-[48%] md:pr-12">
                <h3 className="text-2xl md:text-4xl text-text-title text-center md:text-start">{t('whyPow')}</h3>
                <p className="text-text-subtitle mt-3 font-[akatab]">{t('descWhyPow')}</p>
                
                <StartMineButton
                    label={t('startMining')}
                    locale={locale}
                />
            </div>

            <div className="flex flex-col items-center w-full md:max-w-[48%]">
                <h3 className="text-2xl md:max-w-[50%] text-text-title text-center">{t('startMiningAndEarn')}</h3>

                <Image
                    src={ImagePow}
                    alt="icon computer mining"
                    width={300}
                    height={300}
                    className=""
                />
            </div>
        </section>
    )
}