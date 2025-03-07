import { TType } from "@/types/t";
import Image from "next/image";
import ImageEnergy from '@/public/assets/images/energy.png';

interface Props {
    t: TType;
}
export function Energy({ t }: Props) {
    return (
        <section className="w-full flex flex-wrap gap-5 p-5 lg:p-10 bg-green-2 rounded-2xl my-10 lg:my-20">
            <div className="flex flex-col w-full md:max-w-[48%] items-center justify-center">
                <Image
                    src={ImageEnergy}
                    width={500}
                    height={500}
                    quality={100}
                    alt="image representing descetralization"
                    className="w-full h-full object-contain md:w-[450px] md:h-[350px]"
                />
            </div>

            <div className="flex flex-col w-full md:max-w-[48%]">
                <h3 className="text-4xl text-text-title">{t('energy')}</h3>
                <p className="text-text-subtitle mt-3">{t('descriptionDescentralization')}</p>
            </div>
        </section>
    )
}