import Image from "next/image";

interface Props{
    title: string;
    img: string;
}

export function Card4({title, img}: Props){
    return(
        <div className='flex gap-2 w-[280px] h-[200px] bg-[#0a4303] items-center rounded-lg p-5 drop-shadow-lg border-2'
        >
            <Image 
                alt='Imagem de 4 icones'
                src={require(`../assets/${img}.png`)}
                className='w-[60px] h-[60px] object-contain'
            />

            <h1 className='font-bold text-white text-xl'>
                {title}
            </h1>
        </div>
    )
}