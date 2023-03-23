import { BodyPostProps } from "../src/interfaces/Posts";

interface Props{
    data: BodyPostProps;
    onDelete: (content: string) => void;
}

const DynamicTag = ({data, onDelete}: Props) => {
    if(data.tag === 'img'){
        return(
            <img
                src={data.imgSrc}
                className='w-full h-[400px] object-contain'
                alt={data.imgAlt}
            />
        )
    }

    if(data.tag === 'H2'){
        return(
            <h2 
                className="font-bold text-xl my-5"
                onDoubleClick={() => onDelete(data.content)}
            >
                {data.content}
            </h2>
        )
    }

    if(data.tag === 'H3'){
        return(
            <h3 
                className="font-bold text-lg my-5"
                onDoubleClick={() => onDelete(data.content)}
            >
                {data.content}
            </h3>
        )
    }

    if(data.tag === 'H4'){
        return(
            <h4 
                className="font-bold text-md my-5"
                onDoubleClick={() => onDelete(data.content)}
            >
                {data.content}
            </h4>
        )
    }

    if(data.tag === 'a'){
        return(
            <a 
                href={data.content} 
                target="_blank" 
                className="text-md decoration-1 underline text-blue-700"
                onDoubleClick={() => onDelete(data.content)}
            >
                {data.content}
            </a>
        )
    }

    return (
        <p 
            className='text-justify mb-2'
            onDoubleClick={() => onDelete(data.content)}
        >
            {data.content}
        </p>
    )
}

export default DynamicTag;