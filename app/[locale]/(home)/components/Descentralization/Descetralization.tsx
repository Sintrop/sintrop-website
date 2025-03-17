import { TType } from "@/types/t";
import Image from "next/image";
import ImageDescentralization from '@/public/assets/images/descentralization-image.png';
import { RunANodeButton } from "./RunANodeButton";

interface Props {
    t: TType;
    locale: string;
}

export function Descetralization({ t, locale }: Props) {
    return (
        <section className="my-20 lg:my-30 flex items-center flex-wrap justify-between gap-5">
            <div className="flex flex-col w-full md:max-w-[48%]">
                <h3 className="text-2xl md:text-4xl text-text-title text-center md:text-start">{t('decentralization')}</h3>
                <p className="text-text-subtitle mt-3 font-[akatab]">{t('descriptionDecentralization')}</p>

                <div className="hidden md:flex">
                    <RunANodeButton
                        locale={locale}
                        label={t('runANode')}
                    />
                </div>
            </div>

            <div className="flex flex-col w-full md:max-w-[48%] items-center justify-center">
                <Image
                    src={ImageDescentralization}
                    width={400}
                    height={300}
                    quality={100}
                    alt="image representing descetralization"
                    className="w-full h-[300px] object-contain md:w-[400px]"
                />

                <div className="flex md:hidden">
                    <RunANodeButton
                        locale={locale}
                        label={t('runANode')}
                    />
                </div>
            </div>
        </section>
    )
}