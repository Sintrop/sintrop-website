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
import Tiptap from "../../components/TipTap";

interface ServerSideProps{
    post: PostsProps
}

const DetailPost = ({post}: ServerSideProps) => {
    const router = useRouter();
    const [bodyPost, setBodyPost] = useState<BodyPostProps[]>([]);
    const [contentPost, setContentPost] = useState('');
    const [newVersion, setNewVersion] = useState(false);

    useEffect(() => {
        if(typeof(JSON.parse(post.bodyPost)) === 'string'){
            setNewVersion(true);
            setContentPost(JSON.parse(post.bodyPost))
        }else{
            setNewVersion(false);
            setBodyPost(JSON.parse(post.bodyPost))
        }
    },[]);

    return(
        <main className="flex flex-col items-center w-full scrollbar-thin scrollbar-thumb-green-900 scrollbar-thumb-rounded-md">  
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
                <Header blog/>
                
                <div className='lg:w-[1000px] mb-6 mx-2 lg:mt-40 flex flex-col items-start w-full px-2 lg:px-0'>
                    <h1 className="font-bold text-xl lg:text-4xl text-[#062C01]">{post.title}</h1>
                    <div className='flex items-center gap-5'>
                        <p className='text-sm'>Por: André Rav</p>
                        <p className='text-sm'>{format(new Date(post.createdAt), 'dd/MM/yyyy - kk:mm')}</p>
                    </div>
                </div>
                <img
                    src={post.bannerUrl}
                    alt={post.bannerAlt}
                    className='object-cover lg:w-[1000px] lg:h-[400px]'
                />
                <p className="mt-1 lg:text-lg px-2 max-w-[1000px]">{post.description}</p>
                <div className='flex flex-col lg:w-[1000px] px-2'>
                    {newVersion ? (
                        <div className='flex w-full flex-col'>
                        <Tiptap
                            attContent={() => {}}
                            viewMode
                            content={contentPost}
                        />
                        </div>
                    ) : (
                        <>
                        {bodyPost.map(item => {
                            return(
                                <DynamicTag 
                                    key={item.content}
                                    data={item}
                                    onDelete={() => {}}
                                />
                            )
                        })}
                        </>
                    )}
                </div>
            </div>
        </main>
    )
}

export default DetailPost;

export const getServerSideProps = async(context: ContextProps) => {
    try{
        const response = await api.get(`/post/${context.query.id}`);

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