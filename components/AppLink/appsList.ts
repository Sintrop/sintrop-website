export interface AppsProps{
    title: string;
        image: string;
        shortDescription: string;
        longDescription: string;
        mainnet: boolean,
        live: boolean,
        externalApp: boolean,
        linkApp: string;
        createdAt: string;
        links: {title: string; href: string;}[]
        
}

export const appsList = {
    explorerMainnet: {
        title: 'sintropExplorer',
        image: 'https://www.sintrop.com/assets/images/icon-chain.png',
        shortDescription: 'descrição curta',
        longDescription: 'descrição longa',
        mainnet: true,
        live: true,
        externalApp: false,
        linkApp: 'https://explorer.sintrop.com',
        createdAt: '2025-03-02 00:00:00',
        links: [
            {
                title: 'Launch App',
                href: 'https://explorer.sintrop.com'
            },
            {
                title: 'Github',
                href: 'https://github.com/sintrop/sintropscan-frontend'
            }
        ]
    } as AppsProps,
    sequoiaExplorer: {
        title: 'sequoiaExplorer',
        image: 'https://www.sintrop.com/assets/images/icon-chain.png',
        shortDescription: 'descrição curta',
        longDescription: 'descrição longa',
        mainnet: false,
        live: true,
        externalApp: false,
        linkApp: 'https://sequoia.sintrop.com',
        createdAt: '2024-11-20 00:00:00',
        links: [
            {
                title: 'Launch App',
                href: 'https://sequoia.sintrop.com'
            },
            {
                title: 'Github',
                href: 'https://github.com/sintrop/sintropscan-frontend'
            }
        ]
    } as AppsProps,
    regenerationCredit: {
        title: 'regenerationCredit',
        image: 'https://www.sintrop.com/assets/token.png',
        shortDescription: 'shortDescriptionRC',
        longDescription: 'longDescriptionRC',
        mainnet: false,
        live: true,
        externalApp: false,
        linkApp: 'https://v8.sintrop.com',
        createdAt: '2024-11-20 00:00:00',
        links: [
            {
                title: 'Launch App',
                href: 'https://v8.sintrop.com'
            },
            {
                title: 'Github',
                href: 'https://github.com/sintrop/regeneration-credit'
            }
        ]
    } as AppsProps,
    sintropAppStore: {
        title: 'App Store',
        image: 'https://www.sintrop.com/assets/images/sintrop-store.png',
        shortDescription: 'descrição curta',
        longDescription: 'descrição longa',
        mainnet: true,
        live: false,
        externalApp: false,
        linkApp: 'https://v8.sintrop.com',
        createdAt: '2024-11-20 00:00:00',
        links: []
    } as AppsProps,
    education: {
        title: 'education',
        image: 'https://www.sintrop.com/assets/images/icon-treinamentos.png',
        shortDescription: 'descrição curta',
        longDescription: 'descrição longa',
        mainnet: true,
        live: false,
        externalApp: false,
        linkApp: 'https://v8.sintrop.com',
        createdAt: '2024-11-20 00:00:00',
        links: []
    } as AppsProps,
}

export type AppsName = keyof typeof appsList;