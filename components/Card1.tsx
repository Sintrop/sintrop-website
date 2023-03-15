interface Props{
    title: string;
    cardCenter?: boolean;
}

export function Card1({title, cardCenter}: Props){
    return(
        <div className={
            `w-[350px] h-20 ${cardCenter ? 'bg-[#f1f1f1]' : 'bg-[#7FB529]'} rounded-xl drop-shadow-lg flex flex-col justify-center px-10`
            }
        >
            <h1 className='font-bold text-[#2B2B2B] text-lg text-center'>
                {title}
            </h1>
        </div>
    )
}