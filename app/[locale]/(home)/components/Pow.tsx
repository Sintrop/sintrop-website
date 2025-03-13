import { TType } from "@/types/t";
import Image from "next/image";
import ImagePow from '@/public/assets/images/pow-image.png';
import { Button } from "@/components/ui/button";

interface Props {
    t: TType;
}

export function Pow({ t }: Props) {
    return (
        <section className="my-10 lg:my-20 flex flex-wrap justify-between gap-5">
            <div className="flex flex-col w-full md:max-w-[48%] md:pr-12">
                <h3 className="text-2xl md:text-4xl text-text-title text-center md:text-start">{t('whyPow')}</h3>
                <p className="text-text-subtitle mt-3">{t('descriptionDescentralization')}</p>
            </div>

            <div className="flex flex-col items-center w-full md:max-w-[48%]">
                <h3 className="text-2xl md:text-4xl text-text-title text-center md:text-start">{t('startMinning')}</h3>
                <h4 className="text-2xl text-text-title text-center">{t('SINTROP coin')}</h4>


                <Image
                    src={ImagePow}
                    alt="icon computer mining"
                    width={300}
                    height={300}
                    className=""
                />

                <Button
                    className="bg-[#FB571C] rounded-md text-white px-10 h-10 w-fit mt-10"
                >
                    {t('start minning')}
                </Button>
            </div>
        </section>
    )
}