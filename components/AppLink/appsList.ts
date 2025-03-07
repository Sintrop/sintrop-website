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
        links: [
            {
                title: string;
                link: string;
            }
        ]
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
                title: 'Github',
                link: 'https://github.com/sintrop/sintropscan-frontend'
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
        linkApp: 'https://sintropexplorer.netlify.app',
        createdAt: '2024-11-20 00:00:00',
        links: [
            {
                title: 'Github',
                link: 'https://github.com/sintrop/sintropscan-frontend'
            }
        ]
    } as AppsProps,
}

export type AppsName = keyof typeof appsList;