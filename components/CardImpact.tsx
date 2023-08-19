import Image from "next/image";
import { useTranslation } from "react-i18next";
import { ImpactProps } from "../src/interfaces/impact";

interface Props{
    title: string;
    type?: string;
    impact: ImpactProps;
}

export function CardImpact({title, type, impact}: Props){
    const {t} = useTranslation();

    return(
        <div className="flex flex-col border-2 rounded-lg overflow-hidden w-full lg:w-[350px] bg-card-impact bg-center">
            <div className="flex items-center justify-center h-10 bg-lime-600 border-b-2 px-3">
                <p className="font-bold text-white text-center">{t(`${title}`)}</p>
            </div>
            <div className="w-full flex flex-col items-center justify-center h-[300px] bg-black/50 gap-5 px-5">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center justify-center">
                        <Image
                            src={require('../assets/co2.png')}
                            alt='carbono'
                            className="w-[50px] object-contain mr-2"
                        />
                        <p className="font-bold text-white text-lg">{t('Carbono')}</p>
                        {type === 'impactToken' && (
                            <>
                            <p className="font-bold text-white text-lg">/</p>
                            <Image
                                src={require('../assets/token.png')}
                                alt='carbono'
                                className="w-[20px] object-contain"
                            />
                            </>
                        )}
                    </div>

                    <p className="font-bold text-white text-xl">{(impact?.carbon / 1000).toFixed(0)} t</p>
                </div>
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center justify-center">
                        <Image
                            src={require('../assets/solo.png')}
                            alt='carbono'
                            className="w-[50px] object-contain mr-2"
                        />
                        <p className="font-bold text-white text-lg">{t('Solo')}</p>
                        {type === 'impactToken' && (
                            <>
                            <p className="font-bold text-white text-lg">/</p>
                            <Image
                                src={require('../assets/token.png')}
                                alt='carbono'
                                className="w-[20px] object-contain"
                            />
                            </>
                        )}
                    </div>

                    <p className="font-bold text-white text-xl">{impact?.solo?.toFixed(0)} m²</p>
                </div>
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center justify-center">
                        <Image
                            src={require('../assets/bio.png')}
                            alt='carbono'
                            className="w-[50px] object-contain mr-2"
                        />
                        <p className="font-bold text-white text-lg">{t('Bio.')}</p>
                        {type === 'impactToken' && (
                            <>
                            <p className="font-bold text-white text-lg">/</p>
                            <Image
                                src={require('../assets/token.png')}
                                alt='carbono'
                                className="w-[20px] object-contain"
                            />
                            </>
                        )}
                    </div>

                    <p className="font-bold text-white text-xl">{impact?.bio?.toFixed(0)} uv</p>
                </div>
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center justify-center">
                        <Image
                            src={require('../assets/agua.png')}
                            alt='carbono'
                            className="w-[50px] object-contain mr-2"
                        />
                        <p className="font-bold text-white text-lg">{t('Água')}</p>
                        {type === 'impactToken' && (
                            <>
                            <p className="font-bold text-white text-lg">/</p>
                            <Image
                                src={require('../assets/token.png')}
                                alt='carbono'
                                className="w-[20px] object-contain"
                            />
                            </>
                        )}
                    </div>

                    <p className="font-bold text-white text-xl">{impact?.agua?.toFixed(0)} m³</p>
                </div>
            </div>
        </div>
    )
}