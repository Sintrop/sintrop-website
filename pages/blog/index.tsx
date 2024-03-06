import { useEffect, useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import { api } from '../../src/services/api';
import { CardPost } from '../../components/CardPost';
import { PostsProps } from '../../src/interfaces/Posts';
import { ContextProps } from '../../src/interfaces/ContextServerSide';
import { Header } from '../../components/Header';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { db } from '../../src/lib/prisma';

interface ServerSideProps{
    posts: PostsProps[]
}

const Blog = ({posts}: ServerSideProps) => {
    const router = useRouter();
    const {t} = useTranslation();

    return(
        <main className="flex flex-col items-center w-full scrollbar-thin scrollbar-thumb-green-900 scrollbar-thumb-rounded-md">  
            <Head>
                <title>Blog da Regeneração</title>
                <meta name='description' content='Nossa missão é regenerar o planeta através da tecnologia. Conheça nosso Sistema e o Token Crédito de Regeneração.'/>
                <meta name="keywords" content=""/>
                <meta name="robots" content="index,follow"/>
                <meta name="googlebot" content="index,follow"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://sintrop.com"/>
                <meta property="og:title" content="Sintrop - Tecnologia e Sustentabilidade"/>
                <meta property="og:description" content="Nossa missão é regenerar o planeta através da tecnologia. Conheça nosso Sistema e o Token Crédito de Regeneração."/>
                <meta property="og:locale" content={router.locale}/>
                <link rel="canonical" href="https://sintrop.com"/>
                <link rel='icon' type='image/png' href='/favicon.png'/>
            </Head>

            <div className={`flex flex-col items-center w-full bg-post bg-left lg:bg-center bg-no-repeat bg-cover lg:h-[550px]`}>
                <Header/>

                <div className='flex flex-col items-center w-full h-full bg-black/80 pb-5'>
                <section className='flex flex-col px-2 lg:w-[1000px] lg:mt-44'>
                    <h2 className='font-bold text-center text-white text-2xl lg:text-start lg:text-3xl lg:max-w-[32ch] mt-10 lg:mt-0'>
                        {t('Em destaque')}
                    </h2>

                    <h2 className='font-bold text-center text-[#BBFFB2] text-2xl lg:text-start lg:text-3xl lg:max-w-[32ch] mt-10'>
                        {posts[0]?.title}
                    </h2>

                    <h3 className='text-white text-center max-w-[45ch] mt-5 lg:text-start'>
                        {posts[0]?.description}
                    </h3>

                    <div className='mt-10 flex flex-col items-center gap-5 lg:flex-row'>
                        <Link
                            href={`/blog/${posts[0]?.url}`}
                            className='w-40 h-12 border-2 rounded-xl bg-[#3E9EF5] text-white text-sm font-bold flex items-center justify-center'
                        >
                            {t('Ver postagem')}
                        </Link>
                    </div>
                </section>
                </div>
            </div>

            <section className='flex flex-col w-full items-center justify-center mt-5'>
                <div className='lg:w-[1000px] gap-8 p-3 flex flex-wrap items-center justify-center'>
                    {posts.map(item => (
                        <CardPost
                            key={item.id}
                            data={item}
                        />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Blog

export const getServerSideProps = async (context: ContextProps) => {
    try{
        const response = await db.post.findMany({
            where:{
                language: context.locale,
            },
            orderBy:{
                createdAt: 'desc',
            }
        })
        return{
            props:{
                posts: JSON.parse(JSON.stringify(response))
            }
        }
    }catch(err){
        return {
            props:{
                posts: []
            }
        }
    }
}