export interface PostsProps{
    id: string;
    title: string;
    description: string;
    bannerUrl: string;
    bannerAlt: string;
    bodyPost: string;
    language: string;
    createdAt: string;
    keywords: string;
    url: string;
    authorData: string;
}

export interface BodyPostProps{
    tag: string;
    content: string;
    imgSrc?: string;
    imgAlt?: string;
    imgStyle?: string;
    href?: string;
}