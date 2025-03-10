import { TType } from "@/types/t"

interface Props{
    t: TType;
}
export function Abstract({t}: Props){
    return(
        <section className="w-full p-5 lg:p-10 bg-green-2 rounded-2xl my-10 lg:my-20">
            <h3 className="text-2xl md:text-4xl text-text-title font-bold">{t('abstract')}</h3>
            <p className="text-text-subtitle md:text-lg mt-3 font-medium">{t('descriptionAbstract')}</p>
        </section>
    )
}