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
            className="flex flex-col items-center rounded-md cursor-pointer mb-5 lg:flex-row"
        >
            <img
                src={data.bannerUrl}
                alt={data.bannerAlt}
                className='object-cover lg:w-[700px] h-[350px] rounded-lg shadow-xl shadow-black/20'
            />
            <div className='flex flex-col p-2 bg-white rounded-lg shadow-xl shadow-black/20 border mt-[-100px] lg:w-[400px] lg:ml-[-100px] lg:mt-0 gap-2'>
                <h2 className='font-bold text-2xl mt-2'>{data.title}</h2>
                <p className='text-justify '>{data.description}</p>
                <p className="text-xs">{format(new Date(data.createdAt), 'dd/MM/yyyy - kk:mm')}</p>
            </div>
        </Link>
    )
}