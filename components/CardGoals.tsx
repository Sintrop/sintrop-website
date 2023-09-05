import { UseTranslation, useTranslation } from "next-i18next";

interface Props{
    title: string;
    area: string;
    distribution: string;
    impactToken: string;
    impactTotal: string;
    estimatedValueToken: string;
    marketCap: string;
    emissionGlobal: string;
    roi: string;
    circulatingSuply: string;
}

export function CardGoals({title, roi, area, circulatingSuply,distribution, impactToken, impactTotal, estimatedValueToken, marketCap, emissionGlobal}:Props){
    const {t} = useTranslation();

    return(
        <div className="flex flex-col p-3 rounded-lg border-2 border-yellow-500 w-[300px] lg:w-[400px]">
            <div className="flex justify-center w-full">
                <h5 className="font-bold text-2xl text-yellow-500 text-center bg-green-800 px-7 py-1 rounded-2xl">{t(`${title}`)}</h5>
            </div>
            
            <div className="flex items-center justify-between w-full mt-3">
                <p className="text-gray-300 text-sm lg:text-normal">{t('Área total')} (ha)</p>
                <p className="text-white font-bold text-sm lg:text-normal">{area}</p>
            </div>
            <div className="flex items-center justify-between w-full mt-3">
                <p className="text-gray-300 w-[30ch] text-sm lg:text-normal">{t('Total circulante')} (CR)</p>
                <p className="text-white font-bold text-sm lg:text-normal">{circulatingSuply}</p>
            </div>
            <div className="flex items-center justify-between w-full mt-3">
                <p className="text-gray-300 text-sm lg:text-normal">{t('Distribuição por era contratos')} (CR)</p>
                <p className="text-white font-bold text-sm lg:text-normal">{distribution}</p>
            </div>
            <div className="flex items-center justify-between w-full mt-3">
                <p className="text-gray-300 w-[30ch] text-sm lg:text-normal">{t('Impacto total')} (tCO2)</p>
                <p className="text-white font-bold text-sm lg:text-normal">{impactTotal}</p>
            </div>
            <div className="flex items-center justify-between w-full mt-3">
                <p className="text-gray-300 w-[30ch] text-sm lg:text-normal">{t('Impacto por token')} (Kg CO2 / CR)</p>
                <p className="text-white font-bold text-sm lg:text-normal">{impactToken}</p>
            </div>
            <div className="flex items-center justify-between w-full mt-3">
                <p className="text-gray-300 text-sm lg:text-normal">{t('Valor do token')}</p>
                <p className="text-white font-bold text-sm lg:text-normal">{estimatedValueToken}</p>
            </div>
            <div className="flex items-center justify-between w-full mt-3">
                <p className="text-gray-300 text-sm lg:text-normal">{t('Valor circulante')}</p>
                <p className="text-white font-bold text-sm lg:text-normal">{marketCap}</p>
            </div>
            <div className="flex items-center justify-between w-full mt-3">
                <p className="text-gray-300 w-[30ch] text-sm lg:text-normal">{t('ROI')}</p>
                <p className="text-white font-bold text-sm lg:text-normal">{roi}</p>
            </div>
            <div className="flex items-center justify-between w-full mt-3">
                <p className="text-gray-300 w-[25ch] text-sm lg:text-normal">% {t('das emissões anuais de CO²')}</p>
                <p className="text-white font-bold text-sm lg:text-normal">{emissionGlobal}</p>
            </div>
        </div>
    )
}