import Image from "next/image";
import Link from "next/link";

interface Props{
    title: string;
    description: string;
    img: string;
}

export function Card3({title, description, img}: Props){
    return(
        <div className='flex flex-col gap-2 w-[250px] h-[400px] bg-[#0a4303] items-center justify-between rounded-lg p-5 drop-shadow-lg border-2'
        >
            <div className="flex flex-col items-center">
                <div className='w-[110px] h-[110px] bg-[#0a4303] p-4 rounded-[50px] mt-[-60px] border-2'>
                    <Image 
                        alt='Imagem de 4 icones'
                        src={require(`../assets/${img}.png`)}
                        className='w-[90px] h-[90px] object-contain'
                    />
                </div>

                <h1 className='font-bold text-white text-xl mt-5'>
                    {title}
                </h1>
                
                <p className="text-center mt-3 text-white">{description}</p>
            </div>

            <Link 
                href={title.toLowerCase()} 
                className='mt-5 bg-blue-600 w-48 h-14 rounded flex items-center justify-center'
            >
                <p className='font-bold text-white text-lg'>Saber Mais</p>
            </Link>
        </div>
    )
}