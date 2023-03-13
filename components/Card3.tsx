import Image from "next/image";
import Link from "next/link";

interface Props{
    title: string;
    description: string;
    img: string;
}

export function Card3({title, description, img}: Props){
    return(
        <div className='flex flex-col gap-2 w-[250px] h-[400px] bg-gray-100 items-center rounded-lg p-5 drop-shadow-lg'
        >
            <div className='w-[110px] h-[110px] bg-gray-100 p-4 rounded-[50px] mt-[-60px]'>
                <Image 
                    alt='Imagem de 4 icones'
                    src={require(`../assets/${img}.png`)}
                    className='w-[90px] h-[90px] object-contain'
                />
            </div>

            <h1 className='font-bold text-[#0A4303] text-2xl mt-5'>
                {title}
            </h1>
            <p className="text-justify">{description}</p>

            <Link 
                href={title.toLowerCase()} 
                className='mt-5 bg-[#68A021] w-60 h-28 rounded flex items-center justify-center'
            >
                <p className='font-bold text-white text-xl'>Saber Mais</p>
            </Link>
        </div>
    )
}