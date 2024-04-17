import React, { useEffect, useState } from "react";
import Image from "next/image";
import { api } from "../src/services/api";
import Link from "next/link";

interface ImpactProps{
    carbon: number;
    bio: number;
    soil: number;
    water: number;
}

export function TopBar() {
    const [era, setEra] = useState(1);
    const [nextEra, setNextEra] = useState(0);
    const [impactToken, setImpactToken] = useState({} as ImpactProps);

    const blocosEmSegundos = nextEra * 13.5
    const blocosEmMinutos = blocosEmSegundos / 60
    const blocosEmHoras = blocosEmMinutos / 60
    const blocosEmDias = blocosEmHoras / 24;

    useEffect(() => {
        getEraInfo();
        getImpact();
    }, []);

    useEffect(() => {
        setTimeout(() => {
            const next = nextEra - 1;
            setNextEra(next);
        }, 13500);
    }, [nextEra]);

    async function getEraInfo() {
        const response = await api.get('/web3/era-info');
        setNextEra(response.data.nextEraIn);
        setEra(response.data.eraAtual)
    }

    async function getImpact() {
        const response = await api.get('/impact-per-token');
        setImpactToken(response.data.impact);
    }

    return (
        <div className="w-full h-[40px] bg-green-700 flex fixed top-0 left-0 items-center z-50 overflow-auto">
            <div className="flex items-center min-w-[1400px] px-3 gap-5">
                <p className=" text-gray-200 text-xs">Era atual: <span className="font-bold text-green-300">{era}</span></p>

                <p className=" text-gray-200 text-xs">
                    Próx. era:
                    <span className="font-bold text-green-300"> {Intl.NumberFormat('pt-BR').format(nextEra)} blocos </span>
                    <span className="text-white font-bold">
                        {blocosEmSegundos > 86400 && (` (${blocosEmDias.toFixed(0)} dias)`)}
                        {blocosEmSegundos > 3600 && blocosEmSegundos < 86400 ? (` (${blocosEmHoras.toFixed(0)} horas)`) : null}
                        {blocosEmSegundos > 1 && blocosEmSegundos < 3600 ? (` (${blocosEmMinutos.toFixed(0)} minutos)`) : null}
                    </span>
                </p>

                <div className="flex items-center gap-1">
                    <Image
                        alt='Logo do crédito de regeneração'
                        src={require('../public/assets/token.png')}
                        className="w-6 h-6 object-contain"
                    />
                    <p className="font-bold text-white text-xs">R$ 0,0282</p>
                </div>

                
                <p className=" text-gray-200 text-xs gap-3">
                    Impacto por token:
                    <span className="font-bold text-green-300"> Carbono: {Intl.NumberFormat('pt-BR', { maximumFractionDigits: 3 }).format(impactToken?.carbon * 1000)} g</span>
                    <span className="font-bold text-green-300"> | Água: {Intl.NumberFormat('pt-BR', { maximumFractionDigits: 4 }).format(impactToken?.water * 1000)} L</span>
                    <span className="font-bold text-green-300"> | Solo: {Intl.NumberFormat('pt-BR', { maximumFractionDigits: 4 }).format(impactToken?.soil * 10000)} cm²</span>
                    <span className="font-bold text-green-300"> | Biodver.: {Intl.NumberFormat('pt-BR', { maximumFractionDigits: 4 }).format(impactToken?.bio)} uv</span>
                </p>
                

                <Link 
                    className="items-center justify-center h-8 px-2 rounded-md bg-red-500 flex gap-2" 
                    target="_blank"
                    href='https://app.sintrop.com/pre-sale'
                >
                    <Image
                        src={require('../public/assets/token.png')}
                        className="w-5 h-5 object-contain"
                        alt='Logo do crédito de regeneração'
                    />
                    <p className="font-bold text-white text-xs">Pré-venda do Crédito De Regeneração</p>
                </Link>
            </div>
        </div>
    )
}