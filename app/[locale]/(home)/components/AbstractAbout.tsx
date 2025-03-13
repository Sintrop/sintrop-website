import { TType } from "@/types/t"
import Link from "next/link";

interface Props {
    t: TType;
}
export function AbstractAbout({ t }: Props) {
    return (
        <section className="w-full p-5 lg:p-10 bg-green-2 rounded-2xl my-10 lg:my-20">
            <h3 className="text-2xl md:text-4xl text-text-title font-bold">{t('about')}</h3>
            <p className="text-text-subtitle md:text-lg mt-3 font-medium">{t('descriptionAbout')}</p>

            <Link
                href="/about"
                className="bg-[#FB571C] rounded-md text-white px-10 h-10 w-fit mt-8 flex justify-center items-center"
            >
                {t('knowMore')}
            </Link>
        </section>
    )
}