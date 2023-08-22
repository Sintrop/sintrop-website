import { UseTranslation, useTranslation } from "next-i18next";

interface Props{
    title: string;
    years: string;
    area: string;
    average: string;
    total: string;
    distribution: string;
    impactToken: string;
    co2Pricing: string;
    estimatedValueToken: string;
    marketCap: string;
    emissionGlobal: string;
}

export function CardGoals({title, years, area, average, total, distribution, impactToken, co2Pricing, estimatedValueToken, marketCap, emissionGlobal}:Props){
    const {t} = useTranslation();

    return(
        <div className="flex flex-col p-3 rounded-lg border-2 border-yellow-500 w-full lg:w-[400px]">
            <div className="flex justify-center w-full">
                <h5 className="font-bold text-2xl text-yellow-500 text-center bg-green-800 px-7 py-1 rounded-2xl">{t(`${title}`)}</h5>
            </div>
            
            <div className="flex items-center justify-between w-full mt-5">
                <p className="text-gray-300 text-sm lg:text-normal">{t('Atingir no')}</p>
                <p className="text-white font-bold text-sm lg:text-normal">{t(`${years}`)}</p>
            </div>
            <div className="flex items-center justify-between w-full mt-3">
                <p className="text-gray-300 text-sm lg:text-normal">{t('Área total')} (ha)</p>
                <p className="text-white font-bold text-sm lg:text-normal">{area}</p>
            </div>
            <div className="flex items-center justify-between w-full mt-3">
                <p className="text-gray-300 text-sm lg:text-normal">{t('Sequestro médio')} (t CO²/ha/era)</p>
                <p className="text-white font-bold text-sm lg:text-normal">{average}</p>
            </div>
            <div className="flex items-center justify-between w-full mt-3">
                <p className="text-gray-300 text-sm lg:text-normal">{t('Sequestro total')} (t CO²/era)</p>
                <p className="text-white font-bold text-sm lg:text-normal">{total}</p>
            </div>
            <div className="flex items-center justify-between w-full mt-3">
                <p className="text-gray-300 text-sm lg:text-normal">{t('Distribuição por era')}</p>
                <p className="text-white font-bold text-sm lg:text-normal">{distribution}</p>
            </div>
            <div className="flex items-center justify-between w-full mt-3">
                <p className="text-gray-300 w-[30ch] text-sm lg:text-normal">{t('Impacto de CO² por token')} (Kg CO²/token)</p>
                <p className="text-white font-bold text-sm lg:text-normal">{impactToken}</p>
            </div>
            <div className="flex items-center justify-between w-full mt-3">
                <p className="text-gray-300 w-[30ch] text-sm lg:text-normal">{t('Preço da tonelada de CO²')}</p>
                <p className="text-white font-bold text-sm lg:text-normal">{co2Pricing}</p>
            </div>
            <div className="flex items-center justify-between w-full mt-3">
                <p className="text-gray-300 text-sm lg:text-normal">{t('Valor estimado do token')}</p>
                <p className="text-white font-bold text-sm lg:text-normal">{estimatedValueToken}</p>
            </div>
            <div className="flex items-center justify-between w-full mt-3">
                <p className="text-gray-300 text-sm lg:text-normal">{t('Valor de mercado')}</p>
                <p className="text-white font-bold text-sm lg:text-normal">{marketCap}</p>
            </div>
            <div className="flex items-center justify-between w-full mt-3">
                <p className="text-gray-300 w-[25ch] text-sm lg:text-normal">% {t('das emissões anuais de CO²')}</p>
                <p className="text-white font-bold text-sm lg:text-normal">{emissionGlobal}</p>
            </div>
        </div>
    )
}