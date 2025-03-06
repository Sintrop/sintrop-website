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
                <loc>https://sintrop.com/regeneration-credit/produtor</loc>
            </url>
            <url>
                <loc>https://sintrop.com/pt/regeneration-credit/produtor</loc>
            </url>
            <url>
                <loc>https://sintrop.com/en/regeneration-credit/produtor</loc>
            </url>
            <url>
                <loc>https://sintrop.com/regeneration-credit/ativista</loc>
            </url>
            <url>
                <loc>https://sintrop.com/pt/regeneration-credit/ativista</loc>
            </url>
            <url>
                <loc>https://sintrop.com/en/regeneration-credit/ativista</loc>
            </url>
            <url>
                <loc>https://sintrop.com/regeneration-credit/inspetor</loc>
            </url>
            <url>
                <loc>https://sintrop.com/pt/regeneration-credit/inspetor</loc>
            </url>
            <url>
                <loc>https://sintrop.com/en/regeneration-credit/inspetor</loc>
            </url>
            <url>
                <loc>https://sintrop.com/regeneration-credit/pesquisador</loc>
            </url>
            <url>
                <loc>https://sintrop.com/pt/regeneration-credit/pesquisador</loc>
            </url>
            <url>
                <loc>https://sintrop.com/en/regeneration-credit/pesquisador</loc>
            </url>
            <url>
                <loc>https://sintrop.com/regeneration-credit/investidor</loc>
            </url>
            <url>
                <loc>https://sintrop.com/pt/regeneration-credit/investidor</loc>
            </url>
            <url>
                <loc>https://sintrop.com/en/regeneration-credit/investidor</loc>
            </url>
            <url>
                <loc>https://sintrop.com/regeneration-credit/consumidor</loc>
            </url>
            <url>
                <loc>https://sintrop.com/pt/regeneration-credit/consumidor</loc>
            </url>
            <url>
                <loc>https://sintrop.com/en/regeneration-credit/consumidor</loc>
            </url>
            <url>
                <loc>https://sintrop.com/contato</loc>
            </url>
            <url>
                <loc>https://sintrop.com/pt/contato</loc>
            </url>
            <url>
                <loc>https://sintrop.com/en/contato</loc>
            </url>
            <url>
                <loc>https://sintrop.com/blog</loc>
            </url>
            <url>
                <loc>https://sintrop.com/pt/blog</loc>
            </url>
            <url>
                <loc>https://sintrop.com/en/blog</loc>
            </url>
            <url>
                <loc>https://sintrop.com/sobre</loc>
            </url>
            <url>
                <loc>https://sintrop.com/pt/sobre</loc>
            </url>
            <url>
                <loc>https://sintrop.com/en/sobre</loc>
            </url>
            <url>
                <loc>https://sintrop.com/regeneration-credit/privacy-policy</loc>
            </url>
            <url>
                <loc>https://sintrop.com/pt/regeneration-credit/privacy-policy</loc>
            </url>
            <url>
                <loc>https://sintrop.com/en/regeneration-credit/privacy-policy</loc>
            </url>

            ${posts && posts.map(({language, url}) => (
                `<url>
                    <loc>${`https://sintrop.com/${language}/blog/${url}`}</loc>
                </url>`
            )).join('')}

            ${posts && posts.map(({language, url}) => (
                `<url>
                    <loc>${`https://sintrop.com/blog/${url}`}</loc>
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