import { TType } from "@/types/t";
import Image from "next/image";
import ImageDescentralization from '@/public/assets/images/descentralization-image.png';
import { Button } from "@/components/ui/button";

interface Props{
    t: TType;
}

export function Pow({t}: Props){
    return(
        <section className="my-10 lg:my-20 flex flex-wrap justify-between gap-5">
            <div className="flex flex-col w-full md:max-w-[48%] md:pr-12">
                <h3 className="text-4xl text-text-title">{t('whyPow')}</h3>
                <p className="text-text-subtitle mt-3">{t('descriptionDescentralization')}</p>
            </div>

            <div className="flex flex-col w-full md:max-w-[48%]">
                <h3 className="text-4xl text-text-title">{t('startMinning')}</h3>
                
                <div className="h-[200px]"/>

                <Button
                    className="bg-[#FB571C] rounded-md text-white px-10 h-10 w-fit mt-10"
                >
                    {t('start minning')}
                </Button>
            </div>
        </section>
    )
}