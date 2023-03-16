interface Props{
    title: string;
    cardCenter?: boolean;
}

export function Card1({title, cardCenter}: Props){
    return(
        <div className={
            `w-[310px] h-20 ${cardCenter ? 'bg-[#f1f1f1]' : 'bg-green-700'} rounded-xl drop-shadow-lg flex flex-col justify-center px-10`
            }
        >
            <h1 className='font-bold text-black text-lg text-center'>
                {title}
            </h1>
        </div>
    )
}