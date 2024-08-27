interface Props{
    tag: string
}

export function Tags({tag}: Props){
    return(
        <div className="px-3 h-5 rounded-full bg-[#def7e3] flex items-center">
            <p className="text-[10px] text-[#8c8c8c]">
                {tag === 'development' && 'Em desenvolvimento'}
                {tag === 'comming-soon' && 'Em breve'}
                {tag === 'live' && 'Live'}
            </p>
        </div>
    )
}