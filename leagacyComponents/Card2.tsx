import Image from "next/image";
import Img1 from '../assets/img-1.png';

interface Props{
    title: string;
    description: string;
    img: string;
}

export function Card2({title, description, img}: Props){
    return(
        <div className={
            `flex flex-col gap-2 w-[300px] items-center`
            }
        >
            <Image 
                alt='Imagem de 4 icones'
                src={require(`../assets/${img}.png`)}
                className='w-[90px] h-[90px]'
            />

            <h1 className='font-bold text-white text-lg'>
                {title}
            </h1>
            <p className="text-justify text-white">{description}</p>
        </div>
    )
}