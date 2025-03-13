import type {MetadataRoute} from 'next';

export default function sitemap(): MetadataRoute.Sitemap{
    return [
        {
            url: 'https://sintrop.com',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
            alternates: {
                languages: {
                    en: 'https://sintrop.com',
                    pt: 'https://sintrop.com/pt'
                }
            }
        },
    ]
}