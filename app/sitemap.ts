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
        ...tutorialsPtSitemap,
        ...tutorialsEnSitemap,
    ]
}

const tutorialsPtSitemap: MetadataRoute.Sitemap = [
    {
        url: 'https://sintrop.com/pt/tutorials/como-rodar-um-node-na-sintrop',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
        alternates: {
            languages: {
                en: 'https://sintrop.com/tutorials/how-to-run-a-sintrop-node',
                pt: 'https://sintrop.com/pt/tutorials/como-rodar-um-node-na-sintrop'
            }
        }
    },
    {
        url: 'https://sintrop.com/pt/tutorials/como-rodar-um-bootnode-na-sintrop',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
        alternates: {
            languages: {
                en: 'https://sintrop.com/tutorials/how-to-run-a-bootnode',
                pt: 'https://sintrop.com/pt/tutorials/como-rodar-um-bootnode-na-sintrop'
            }
        }
    },
    {
        url: 'https://sintrop.com/pt/tutorials/comandos-e-operacoes',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
        alternates: {
            languages: {
                en: 'https://sintrop.com/tutorials/operation-and-commands',
                pt: 'https://sintrop.com/pt/tutorials/comandos-e-operacoes'
            }
        }
    },
    {
        url: 'https://sintrop.com/pt/tutorials/como-rodar-um-node-da-sintrop-com-docker',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
        alternates: {
            languages: {
                en: 'https://sintrop.com/tutorials/how-to-run-a-sintrop-node-with-docker',
                pt: 'https://sintrop.com/pt/tutorials/como-rodar-um-node-da-sintrop-com-docker'
            }
        }
    },
    {
        url: 'https://sintrop.com/pt/tutorials/como-rodar-sequoia-testnet-com-docker',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
        alternates: {
            languages: {
                en: 'https://sintrop.com/tutorials/how-to-run-a-sequoia-node-with-docker',
                pt: 'https://sintrop.com/pt/tutorials/como-rodar-sequoia-testnet-com-docker'
            }
        }
    },
    {
        url: 'https://sintrop.com/pt/tutorials/como-minerar-solo-sintrop',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
        alternates: {
            languages: {
                en: 'https://sintrop.com/tutorials/how-to-mine-sintrop-alone',
                pt: 'https://sintrop.com/pt/tutorials/como-minerar-solo-sintrop'
            }
        }
    },
];

const tutorialsEnSitemap: MetadataRoute.Sitemap = [
    {
        url: 'https://sintrop.com/tutorials/how-to-run-a-sintrop-node',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
        alternates: {
            languages: {
                en: 'https://sintrop.com/tutorials/how-to-run-a-sintrop-node',
                pt: 'https://sintrop.com/pt/tutorials/como-rodar-um-node-na-sintrop'
            }
        }
    },
    {
        url: 'https://sintrop.com/tutorials/how-to-run-a-bootnode',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
        alternates: {
            languages: {
                en: 'https://sintrop.com/tutorials/how-to-run-a-bootnode',
                pt: 'https://sintrop.com/pt/tutorials/como-rodar-um-bootnode-na-sintrop'
            }
        }
    },
    {
        url: 'https://sintrop.com/tutorials/operation-and-commands',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
        alternates: {
            languages: {
                en: 'https://sintrop.com/tutorials/operation-and-commands',
                pt: 'https://sintrop.com/pt/tutorials/comandos-e-operacoes'
            }
        }
    },
    {
        url: 'https://sintrop.com/tutorials/how-to-run-a-sintrop-node-with-docker',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
        alternates: {
            languages: {
                en: 'https://sintrop.com/tutorials/how-to-run-a-sintrop-node-with-docker',
                pt: 'https://sintrop.com/pt/tutorials/como-rodar-um-node-da-sintrop-com-docker'
            }
        }
    },
    {
        url: 'https://sintrop.com/tutorials/how-to-run-a-sequoia-node-with-docker',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
        alternates: {
            languages: {
                en: 'https://sintrop.com/tutorials/how-to-run-a-sequoia-node-with-docker',
                pt: 'https://sintrop.com/pt/tutorials/como-rodar-sequoia-testnet-com-docker'
            }
        }
    },
    {
        url: 'https://sintrop.com/tutorials/how-to-mine-sintrop-alone',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
        alternates: {
            languages: {
                en: 'https://sintrop.com/tutorials/how-to-mine-sintrop-alone',
                pt: 'https://sintrop.com/pt/tutorials/como-minerar-solo-sintrop'
            }
        }
    },
]