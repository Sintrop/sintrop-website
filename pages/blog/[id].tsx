import { useState, useEffect } from "react";
import Head from "next/head";
import Script from "next/script"; 
import { api } from "../../src/services/api";
import { PostsProps } from "../../src/interfaces/Posts";
import DynamicTag from "../../components/DynamicTag";
import { BodyPostProps } from "../../src/interfaces/Posts";
import { ContextProps } from "../../src/interfaces/ContextServerSide";
import { useRouter } from "next/router";
import { Header } from "../../components/Header";
import {format} from "date-fns";

interface ServerSideProps{
    post: PostsProps
}

const DetailPost = ({post}: ServerSideProps) => {
    const router = useRouter();
    const [bodyPost, setBodyPost] = useState<BodyPostProps[]>([]);

    useEffect(() => {
        setBodyPost(JSON.parse(post.bodyPost));
    },[]);

    return(
        <div>
            <Head>
                <title>{post.title}</title>
                <meta name='description' content={post.description}/>
                <meta name="keywords" content="Agricultura, Regeneração, Sustentabilidade, Produtores regenerativos, comunidade"/>
                <meta name="robots" content="index,follow"/>
                <meta name="googlebot" content="index,follow"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content={`sintrop.com/${router.locale}${router.asPath}`}/>
                <meta property="og:title" content={post.title}/>
                <meta property="og:description" content={post.description}/>
                <meta property="og:locale" content={router.locale}/> 
                <link rel="canonical" href="https://sintrop.com"/>
                <link rel='icon' type='image/png' href='/favicon.png'/>
            </Head>
            <div className='flex flex-col items-center'>
                <div>
                    <div className='flex flex-col justify-center w-[100vw] mb-5 items-center h-[110px] bg-green-700'>
                        <Header
                            blog
                        />
                    </div>
                </div>
                <div className='lg:w-[900px] mb-6 mx-2'>
                    <h1 className="font-bold text-4xl">{post.title}</h1>
                    <p className="mt-1 text-lg">{post.description}</p>
                    <p className='text-sm'>{format(new Date(post.createdAt), 'dd/MM/yyyy - kk:mm')}</p>
                </div>
                <img
                    src={post.bannerUrl}
                    alt={post.bannerAlt}
                    className='object-cover lg:w-[900px] lg:h-[400px]'
                />
                <div className='flex flex-col lg:w-[900px] px-2'>
                    {bodyPost.map(item => {
                        return(
                            <DynamicTag 
                                key={item.content}
                                data={item}
                                onDelete={() => {}}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default DetailPost;

export const getServerSideProps = async(context: ContextProps) => {
    try{
        const response = await api.get(`/post/${context.query.id}`);
        console.log(response.data)

        return{
            props:{
                post: response.data.post
            }
        }
    }catch(err){
        return{
            redirect:{
                destination: `/${context.locale}/blog`,
                permanent: false
            }
        }
    }
}