import { PostsProps } from "../src/interfaces/Posts";
import Link from "next/link";
import {format} from 'date-fns';
import { useEffect } from "react";

interface Props{
    data: PostsProps;
}

export function CardPost({data}: Props){
    return(
        <Link 
            href={`/blog/${data.url}`}
            className="flex flex-col rounded-md cursor-pointer mb-5 border-2 lg:w-[370px] lg:h-[400px]"
        >
            <img
                src={data.bannerUrl}
                alt={data.bannerAlt}
                className='object-cover h-[280px]'
            />
            <div className='flex flex-col p-2'>
                <h2 className='font-bold text-2xl mt-2'>{data.title}</h2>
                <p className='text-justify lg:max-w-[100ch] lg:overflow-hidden lg:text-ellipsis lg:whitespace-nowrap'>{data.description}</p>
                <p className="text-xs">{format(new Date(data.createdAt), 'dd/MM/yyyy - kk:mm')}</p>
            </div>
        </Link>
    )
}