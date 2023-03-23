import { useEffect, useState } from 'react';
import type {NextPage} from 'next';
import Head from 'next/head';
import Script from 'next/script';
import { api } from '../../src/services/api';
import { CardPost } from '../../components/CardPost';
import { PostsProps } from '../../src/interfaces/Posts';

const Blog: NextPage = () => {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState<PostsProps[]>([]);

    useEffect(() => {
        getPost();
    }, []);

    async function getPost(){
        try{
            setLoading(true);
            const response = await api.get('/posts');
            setPosts(response.data.posts);
        }catch(err){
            console.log(err);
        }finally{
            setLoading(false);
        }
    }

    return(
        <div>
            <Head>
                <title>Blog da Regeneração</title>
                <meta name='description' content='Nossa missão é regenerar o planeta através da tecnologia. Conheça nosso Sistema e o Token Crédito de Carbono Regenerativo.'/>
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

            <div>
                <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WZK3VDF" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>

                <div className='flex flex-col w-[100%] h-[200px] items-center bg-[url("../assets/bg-11.png")] bg-cover bg-center'>
                    <div className='w-[100%] h-[100%] bg-[rgba(0,0,0,0.5)] flex flex-col items-center justify-center p-2 lg:py-20 lg:p-10'>
                        <div className='flex flex-col mt-32 items-center w-[100%] lg:items-start lg:w-[1000px] lg:mt-0'>
                            <h2 className='text-3xl text-center mt-5 text-white font-bold lg:text-left lg:w-[500px]'>
                                Blog da Regeneração do planeta
                            </h2>

                            <h3 className='mt-5 text-lg text-white text-center lg:text-left lg:w-[700px]'>
                                Fique por dentro de todas as ações que estamos proporcionando para um mundo regenerativo!
                            </h3>

                        </div>
                    </div>
                </div>
            </div>

            <section className='flex flex-col w-full items-center mt-5'>
                <div className='lg:w-[700px] gap-8 p-3'>
                    {posts.map(item => (
                        <CardPost
                            key={item.id}
                            data={item}
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Blog