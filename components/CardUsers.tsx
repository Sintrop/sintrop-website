import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";

interface Props {
    title: string;
    bgColor: string;
    description: string;
    typeUser: string;
}

export function CardUsers({ title, bgColor, description, typeUser }: Props) {
    const { t } = useTranslation();

    return (
        <div className={`flex flex-col justify-between border-2 p-3 rounded-2xl overflow-hidden h-[400px] w-[95%] lg:w-[300px] ${bgColor === 'transparent' ? 'border-yellow-400' : 'border-green-900 bg-[#34812B]'}`}>
            <div>
                <Image
                    src={require(`../public/assets/${typeUser}.png`)}
                    alt="Icone"
                    className="w-[80px] object-contain"
                    quality={100}
                />
                <p className='font-bold text-white text-xl mt-3'>{t(title)}</p>
                <p className='text-white mt-1'>{t(description)}</p>
            </div>

            {typeUser === 'investidor' ? (
                <Link
                    href='https://pages.sintrop.com/apoiador'
                    className="text-sm text-yellow-400 font-bold"
                    target="_blank"
                >{t('SABER MAIS')}</Link>
            ) : (
                <>
                    {typeUser === 'produtor' ? (
                        <Link
                            href='https://pages.sintrop.com/produtor'
                            className="text-sm text-yellow-400 font-bold"
                            target="_blank"
                        >{t('SABER MAIS')}</Link>
                    ) : (
                        <Link
                            href={`/${typeUser}`}
                            className="text-sm text-yellow-400 font-bold"
                        >{t('SABER MAIS')}</Link>
                    )}
                </>
            )}
        </div>
    )
}