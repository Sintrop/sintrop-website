interface Props{
    data: ContentProps;
}

interface ContentProps{
    tag: string;
    content: string;
    imgSrc?: string;
    imgAlt?: string;
    imgStyle?: string;
}

const DynamicTag = ({data}: Props) => {
    const Tag = data.tag;

    if(data.tag === 'img'){
        return(
            <img
                src={data.imgSrc}
                className='w-full h-[400px] object-contain'
                alt={data.imgAlt}
            />
        )
    }

    if(data.tag === 'H1'){
        return(
            <h1 className="font-bold text-2xl mb-5">
                {data.content}
            </h1>
        )
    }

    if(data.tag === 'H2'){
        return(
            <h2 className="font-bold text-xl mb-5">
                {data.content}
            </h2>
        )
    }

    if(data.tag === 'H3'){
        return(
            <h3 className="font-bold text-lg mb-5">
                {data.content}
            </h3>
        )
    }

    if(data.tag === 'H4'){
        return(
            <h4 className="font-bold text-md mb-5">
                {data.content}
            </h4>
        )
    }

    if(data.tag === 'a'){
        return(
            <a href={data.content} target="_blank" className="text-md decoration-1 underline text-blue-700">
                {data.content}
            </a>
        )
    }

    return (
        <p className='text-justify mb-2'>
            {data.content}
        </p>
    )
}

export default DynamicTag;