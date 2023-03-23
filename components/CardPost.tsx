import { PostsProps } from "../src/interfaces/Posts";
import Link from "next/link";
import {format} from 'date-fns';

interface Props{
    data: PostsProps;
}

export function CardPost({data}: Props){
    return(
        <Link 
            href={`/blog/${data.title}`}
            className="flex flex-col rounded-md p-3 cursor-pointer mb-5 border-2"
        >
            <img
                src={data.bannerUrl}
                alt={data.bannerAlt}
                className='object-cover h-[400px]'
            />
            <h2 className='font-bold text-2xl mt-2'>{data.title}</h2>
            <p className='text-justify'>{data.description}</p>
            <p className="text-xs">{format(new Date(data.createdAt), 'dd/MM/yyyy - kk:mm')}</p>
        </Link>
    )
}