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
        {
            url: 'https://sintrop.com/resources',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
            alternates: {
                languages: {
                    en: 'https://sintrop.com/resources',
                    pt: 'https://sintrop.com/pt/resources'
                }
            }
        },
        {
            url: 'https://sintrop.com/tutorials',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
            alternates: {
                languages: {
                    en: 'https://sintrop.com/tutorials',
                    pt: 'https://sintrop.com/pt/tutorials'
                }
            }
        },
        {
            url: 'https://sintrop.com/about',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
            alternates: {
                languages: {
                    en: 'https://sintrop.com/about',
                    pt: 'https://sintrop.com/pt/about'
                }
            }
        },
    ]
}