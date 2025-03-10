import { TType } from "@/types/t"

interface Props {
    t: TType;
}

export function HeroAbout({t}: Props) {
    return (
        <section className="container mx-auto flex flex-col gap-10 px-5 pb-10 lg:pt-20 lg:px-20 lg:pb-36">
            <h2 className="text-white text-center font-bold text-4xl md:text-7xl">
                {t('about')}
            </h2>
        </section>
    )
}