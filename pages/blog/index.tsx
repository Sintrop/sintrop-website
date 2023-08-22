import { useEffect, useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import { api } from '../../src/services/api';
import { CardPost } from '../../components/CardPost';
import { PostsProps } from '../../src/interfaces/Posts';
import { ContextProps } from '../../src/interfaces/ContextServerSide';
import { Header } from '../../components/Header';
import { useRouter } from 'next/router';

interface ServerSideProps{
    posts: PostsProps[]
}

const Blog = ({posts}: ServerSideProps) => {
    const router = useRouter()

    return(
        <div>
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

            <div>
                <div className='flex flex-col justify-center items-center h-[110px] bg-green-700'>
                    <Header
                        blog
                    />
                </div>

                <div className='flex flex-col justify-center items-center w-full mt-5'>
                    <h2 className='text-green-700 font-bold text-3xl'>Blog</h2>
                </div>
            </div>

            <section className='flex flex-col w-full items-center justify-center mt-5'>
                <div className='lg:w-[1200px] gap-8 p-3 flex flex-wrap items-center justify-center'>
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

export const getServerSideProps = async (context: ContextProps) => {
    try{
        const response = await api.get(`/posts/${context.locale}`)
        return{
            props:{
                posts: response.data.posts
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