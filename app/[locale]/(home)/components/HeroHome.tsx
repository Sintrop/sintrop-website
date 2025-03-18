import { Button } from "@/components/ui/button";
import { TType } from "@/types/t";
import Link from "next/link";

interface Props{
    t: TType;
    locale: string;
}
export function HeroHome({t, locale}: Props) {
    return (
        <section className="container mx-auto flex flex-col gap-10 px-5 pb-10 lg:pt-20 lg:px-20 lg:pb-36">
            <h1 className="text-white text-xl md:text-3xl text-center font-bold lg:max-w-[40%] lg:text-4xl lg:text-start">
                {t('titleHero')}
            </h1>

            <h2 className="text-white text-center lg:text-start lg:text-2xl lg:max-w-[50%] font-[akatab]">
                {t('descriptionHero')}
            </h2>

            <div className="flex flex-col items-center gap-5 md:gap-10 md:flex-row">
                <Link
                    className="bg-blue-primary h-[50px] md:h-[60px] rounded-md text-white w-[200px] flex items-center justify-center"
                    href={`https://sintrop.com/docs/whitepaper-${locale}.pdf`}
                    target="_blank"
                    rel="noopener noreferer"
                >
                    {t('whitepaper')}
                </Link>
            </div>
        </section>
    )
}