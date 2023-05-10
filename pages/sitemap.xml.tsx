import { api } from "../src/services/api";
import { GetServerSidePropsContext } from "next";
import { PostsProps } from "../src/interfaces/Posts";

interface GenerateProps{
    posts: PostsProps[];
}

function generateSiteMap({posts}: GenerateProps) {
    console.log(posts);
    return `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <url>
                <loc>https://sintrop.com/pt-BR/produtor</loc>
            </url>
            <url>
                <loc>https://sintrop.com/en-US/produtor</loc>
            </url>
            <url>
                <loc>https://sintrop.com/pt-BR/ativista</loc>
            </url>
            <url>
                <loc>https://sintrop.com/en-US/ativista</loc>
            </url>
            <url>
                <loc>https://sintrop.com/pt-BR/pesquisador</loc>
            </url>
            <url>
                <loc>https://sintrop.com/en-US/pesquisador</loc>
            </url>
            <url>
                <loc>https://sintrop.com/pt-BR/investidor</loc>
            </url>
            <url>
                <loc>https://sintrop.com/en-US/investidor</loc>
            </url>
            <url>
                <loc>https://sintrop.com/pt-BR/consumidor</loc>
            </url>
            <url>
                <loc>https://sintrop.com/en-US/consumidor</loc>
            </url>
            <url>
                <loc>https://sintrop.com/pt-BR/contato</loc>
            </url>
            <url>
                <loc>https://sintrop.com/en-US/contato</loc>
            </url>
            <url>
                <loc>https://sintrop.com/pt-BR/blog</loc>
            </url>
            <url>
                <loc>https://sintrop.com/en-US/blog</loc>
            </url>
            <url>
                <loc>https://sintrop.com/pt-BR/sobre</loc>
            </url>
            <url>
                <loc>https://sintrop.com/en-US/sobre</loc>
            </url>

            ${posts && posts.map(({language, url}) => (
                `<url>
                    <loc>${`https://sintrop.com/${language}/blog/${url}`}</loc>
                </url>`
            )).join('')}
        </urlset>
    `;
}

export const getServerSideProps = async ({res, locale}: GetServerSidePropsContext) => {
    const posts = await api.get(`/posts/${locale}`);

    const sitemap = await generateSiteMap(posts.data);

    res.setHeader('Content-Type', 'text/xml')
    res.write(sitemap);
    res.end();

    return{
        props:{}
    }
} 

export default function Sitemap(){}