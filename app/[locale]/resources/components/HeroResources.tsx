import { TType } from "@/types/t"

interface Props {
    t: TType;
}

export function HeroResources({t}: Props) {
    return (
        <section className="container mx-auto flex flex-col gap-10 px-5 pb-10 lg:pt-20 lg:px-20 lg:pb-36">
            <h1 className="text-white text-center font-bold text-4xl md:text-7xl">
                {t('resources')}
            </h1>
        </section>
    )
}