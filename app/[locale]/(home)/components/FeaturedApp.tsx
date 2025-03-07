import { TType } from "@/types/t";
import Link from "next/link";
import Image from "next/image";
import ImageFeatureApp from '@/public/assets/images/featured-app.png';

interface Props {
    t: TType;
}
export function FeaturedApp({ t }: Props) {
    return (
        <section className="w-full mt-10 lg:mt-20 bg-green-3 py-10">
            <div className="container mx-auto px-5 lg:px-20 flex flex-wrap justify-between gap-5">
                <div className="flex flex-col w-full md:max-w-[48%]">
                    <h3 className="text-4xl text-green-1">{t('featureApp')}</h3>
                    <h4 className="text-white text-2xl mt-3">{t('regenerationCredit')}</h4>

                    <p className="text-white">{t('descriptionFeatureApp')}</p>

                    <div className="flex flex-wrap gap-5 mt-10">
                        <Link
                            href="https://google.com.br"
                            target="_blank"
                            rel="noopener noreferer"
                            className="bg-green-1 h-10 rounded-md px-10 flex items-center justify-center text-white font-semibold"
                        >
                            {t('downloadApp')}
                        </Link>

                        <Link
                            href="https://google.com.br"
                            target="_blank"
                            rel="noopener noreferer"
                            className="bg-green-1 h-10 rounded-md px-10 flex items-center justify-center text-white font-semibold"
                        >
                            {t('webPlatform')}
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col items-end w-full md:max-w-[48%] md:pr-20">
                    <Image
                        src={ImageFeatureApp}
                        width={500}
                        height={500}
                        quality={100}
                        alt="image regeneration credit"
                        className="w-full h-full object-contain md:w-[350px] md:h-[350px]"
                    />
                </div>
            </div>
        </section>
    )
}