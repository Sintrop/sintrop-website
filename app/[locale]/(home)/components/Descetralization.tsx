import { TType } from "@/types/t";
import Image from "next/image";
import ImageDescentralization from '@/public/assets/images/descentralization-image.png';
import { Button } from "@/components/ui/button";

interface Props{
    t: TType;
}

export function Descetralization({t}: Props){
    return(
        <section className="my-10 lg:my-20 flex items-center flex-wrap justify-between gap-5">
            <div className="flex flex-col w-full md:max-w-[48%]">
                <h3 className="text-2xl md:text-4xl text-text-title text-center md:text-start">{t('decentralization')}</h3>
                <p className="text-text-subtitle mt-3">{t('descriptionDescentralization')}</p>

                <Button
                    className="bg-[#FB571C] rounded-md text-white px-10 h-10 w-fit mt-10"
                >
                    {t('runANode')}
                </Button>
            </div>

            <div className="flex flex-col w-full md:max-w-[48%] items-center justify-center">
                <Image
                    src={ImageDescentralization}
                    width={400}
                    height={400}
                    quality={100}
                    alt="image representing descetralization"
                    className="w-full h-full object-contain md:w-[400px] md:h-[400px]"
                />
            </div>
        </section>
    )
}