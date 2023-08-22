import Image from "next/image";
import { useTranslation } from "react-i18next";
import { ImpactProps } from "../src/interfaces/impact";
import { NumericFormat } from 'react-number-format';

interface Props{
    title: string;
    type?: string;
    impact: ImpactProps;
}

export function CardImpact({title, type, impact}: Props){
    const {t} = useTranslation();
    const balanceProducers = 706478034251675353685778110;
    const balanceDevelopers = 13333334000000000000000003;
    const totalBalanceProducers = 750000000000000000000000000;
    const totalBalanceDevelopers = 15000000000000000000000000;
    const sacProducers = totalBalanceProducers - balanceProducers;
    const sacDevelopers = totalBalanceDevelopers - balanceDevelopers;
    const totalSac = sacProducers + sacDevelopers;
    const carbon = Number(impact?.carbon) / (totalSac / 10 ** 18);
    const bio = Number(impact?.bio) / (totalSac / 10 ** 18);
    const water = Number(impact?.agua) / (totalSac / 10 ** 18);
    const soil = Number(impact?.solo) / (totalSac / 10 ** 18);

    return(
        <div className={`flex flex-col border-2 rounded-lg overflow-hidden w-full lg:w-[350px] ${type === 'impactToken' ? 'bg-arvore-2' : 'bg-card-impact'} bg-center`}>
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
                    
                    {type === 'impactToken' ? (
                        <p className="font-bold text-white text-xl">{(carbon * 1000).toFixed(2).replace('.',',')} g</p>
                    ) : (
                        <div className="flex items-center gap-1">
                        <NumericFormat 
                            value={(impact?.carbon / 1000).toFixed(0)} 
                            allowLeadingZeros 
                            thousandSeparator="." 
                            decimalSeparator="," 
                            className="font-bold text-white bg-transparent text-xl text-end w-28"
                        />
                        <p className="font-bold text-white text-lg">t</p>
                        </div>
                    )}
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
                    
                    {type === 'impactToken' ? (
                        <p className="font-bold text-white text-xl">{(soil * 10000).toFixed(2).replace('.',',')} cm²</p>
                    ) : (
                        <div className="flex items-center gap-1">
                        <NumericFormat 
                            value={impact?.solo?.toFixed(0)} 
                            allowLeadingZeros 
                            thousandSeparator="." 
                            decimalSeparator="," 
                            className="font-bold text-white bg-transparent text-xl text-end w-28"
                        />
                        <p className="font-bold text-white text-lg">m²</p>
                        </div>
                    )}
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
                    
                    {type === 'impactToken' ? (
                        <p className="font-bold text-white text-xl">{(bio).toFixed(2).replace('.',',')} uv</p>
                    ) : (
                        <div className="flex items-center gap-1">
                        <NumericFormat 
                            value={impact?.bio?.toFixed(0)} 
                            allowLeadingZeros 
                            thousandSeparator="." 
                            decimalSeparator="," 
                            className="font-bold text-white bg-transparent text-xl text-end w-28"
                        />
                        <p className="font-bold text-white text-lg">uv</p>
                        </div>
                    )}
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
                    
                    {type === 'impactToken' ? (
                        <p className="font-bold text-white text-xl">{(water * 1000).toFixed(2).replace('.',',')} L</p>
                    ) : (
                        <div className="flex items-center gap-1">
                        <NumericFormat 
                            value={impact?.agua?.toFixed(0)} 
                            allowLeadingZeros 
                            thousandSeparator="." 
                            decimalSeparator="," 
                            className="font-bold text-white bg-transparent text-xl text-end w-28"
                        />
                        <p className="font-bold text-white text-lg">m³</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}