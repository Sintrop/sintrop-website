import Image from "next/image";

interface Props{
    title: string;
    text: string;
}

export function Card5({title, text}: Props){
    return(
        <div className="flex w-[350px] py-3 border-2 mx-4">
            <Image
                alt='Ícone de checagem'
                src={require('../assets/check.png')}
                className='h-[75px] w-[75px]'
            />

            <div className="flex flex-col ml-3 h-[100%] justify-center">
                <h3 className="font-bold text-white text-xl">{title}</h3>
                <p className="text-white">{text}</p>
            </div>
        </div>
    )
}