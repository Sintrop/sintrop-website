import { useState, useEffect } from "react";
import Head from "next/head";
import Script from "next/script"; 
import { api } from "../../src/services/api";
import { PostsProps } from "../../src/interfaces/Posts";
import DynamicTag from "../../components/DynamicTag";
import { BodyPostProps } from "../../src/interfaces/Posts";
import { Header } from "../../components/Header";

interface ServerSideProps{
    post: PostsProps
}

const DetailPost = ({post}: ServerSideProps) => {
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
                <meta property="og:url" content="https://sintrop.com"/>
                <meta property="og:title" content="Sintrop - Tecnologia e Sustentabilidade"/>
                <meta property="og:description" content="Nossa missão é regenerar o planeta através da tecnologia. Conheça nosso Sistema e o Token Crédito de Carbono Regenerativo."/>
                {/* <meta property="og:locale" content={_props._nextI18Next?.initialLocale}/> */}
                <link rel="canonical" href="https://sintrop.com"/>
                <link rel='icon' type='image/png' href='/favicon.png'/>
                <Script strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id=%27+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WZK3VDF');`}}></Script>
            </Head>
            <div className='flex flex-col items-center'>
                <div className='flex flex-col w-[100%] h-[200px] items-center bg-[url("../assets/bg-11.png")] bg-cover bg-center'>
                    <div className='w-[100%] h-[100%] bg-[rgba(0,0,0,0.5)] flex flex-col items-center justify-center p-2 lg:py-20 lg:p-10'>
                        <div className='flex flex-col mt-32 items-center w-[100%] lg:items-start lg:w-[1000px] lg:mt-0'>
                            

                        </div>
                    </div>
                </div>
                <img
                    src={post.bannerUrl}
                    alt={post.bannerAlt}
                    className='object-cover lg:w-[700px] mt-10'
                />
                <div className='flex flex-col lg:w-[700px]'>
                    {bodyPost.map(item => {
                        return(
                            <DynamicTag 
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

interface ContextProps{
    params: string;
    req: string;
    res: string;
    query: {
        id: string;
    }
    locale: string;
}

export const getServerSideProps = async(context: ContextProps) => {
    try{
        const response = await api.get(`/posts/${context.query.id}`);
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