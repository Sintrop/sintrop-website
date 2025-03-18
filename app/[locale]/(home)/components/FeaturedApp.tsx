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
                <div className="flex flex-col w-full lg:max-w-[48%]">
                    <h3 className="text-2xl md:text-4xl text-green-1">{t('featuredApp')}</h3>
                    <h4 className="text-white text-2xl mt-3">{t('regenerationCredit')}</h4>

                    <p className="text-white font-[akatab]">{t('descFeaturedApp')}</p>

                    {/* TODO: Display links when website regeneration credit is live */}
                    {/* <div className="flex flex-wrap gap-5 mt-10">
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
                    </div> */}
                </div>

                <div className="hidden flex-col items-center justify-center w-full lg:max-w-[48%] lg:flex">
                    <Image
                        src={ImageFeatureApp}
                        width={350}
                        height={350}
                        quality={100}
                        alt="image regeneration credit"
                        className="w-[400px] h-[400px] object-contain"
                    />
                </div>
            </div>
        </section>
    )
}