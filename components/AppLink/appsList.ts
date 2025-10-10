export interface AppsProps {
  title: string;
  image: string;
  shortDescription: string;
  longDescription: string;
  mainnet: boolean,
  live: boolean,
  externalApp: boolean,
  linkApp: string;
  createdAt: string;
  links: { title: string; href: string; }[]

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
    mainnet: true,
    live: true,
    externalApp: false,
    linkApp: 'https://regenerationcredit.org',
    createdAt: '2025-10-10 00:00:00',
    links: [
      {
        title: 'Website',
        href: 'https://regenerationcredit.org'
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
    shortDescription: 'apps.appStore',
    longDescription: 'apps.appStore',
    mainnet: true,
    live: true,
    externalApp: false,
    linkApp: '',
    createdAt: '2025-10-10 00:00:00',
    links: []
  } as AppsProps,
  education: {
    title: 'Free Education Center',
    image: 'https://ipfs.sintrop.com/ipfs/QmWqnH9dHwPSkVTfTc9DC1gHmm6svYMHMHswxbQa2fKmGU',
    shortDescription: 'apps.education',
    longDescription: 'apps.education',
    mainnet: true,
    live: true,
    externalApp: false,
    linkApp: 'https://education.sintrop.com',
    createdAt: '2025-10-10 00:00:00',
    links: [
      {
        title: 'Github',
        href: 'https://github.com/Sintrop/operating-system/blob/main/contracts/FreeEducationCenter.sol'
      }
    ]
  } as AppsProps,
  whitePaperCenter: {
    title: 'Whitepaper Center',
    image: 'https://ipfs.sintrop.com/ipfs/QmbTAWqwru1FNcKCeXWdTWMeRYhGZ4ciKa39BBFj1M8QbU',
    shortDescription: 'apps.whitepaperCenter',
    longDescription: 'apps.whitepaperCenter',
    mainnet: true,
    live: true,
    externalApp: false,
    linkApp: '',
    createdAt: '2025-10-10 00:00:00',
    links: [
      {
        title: 'Github',
        href: 'https://github.com/Sintrop/operating-system/blob/main/contracts/WhitepaperCenter.sol'
      }
    ]
  } as AppsProps,
  globalPlantCatalog: {
    title: 'Global Plant Catalog',
    image: 'https://ipfs.sintrop.com/ipfs/QmaHPPKadFghQ4Rc7QNqtK23qd8rfj42ujZEvnzvX7s4Rc',
    shortDescription: 'apps.globalPlant',
    longDescription: 'apps.globalPlant',
    mainnet: true,
    live: true,
    externalApp: false,
    linkApp: '',
    createdAt: '2025-10-10 00:00:00',
    links: [
      {
        title: 'Github',
        href: 'https://github.com/Sintrop/operating-system/blob/main/contracts/GlobalPlantCatalog.sol'
      }
    ]
  } as AppsProps,
  humansPeaceTreaty: {
    title: 'Humans Peace Treaty',
    image: 'https://ipfs.sintrop.com/ipfs/QmbMJsJNx3XXnwCrTpuhzqRnfmTgMD5YNHxzpJru33Tr8K',
    shortDescription: 'apps.humansPeaceTreaty',
    longDescription: 'apps.humansPeaceTreaty',
    mainnet: true,
    live: true,
    externalApp: false,
    linkApp: '',
    createdAt: '2025-10-10 00:00:00',
    links: [
      {
        title: 'Github',
        href: 'https://github.com/Sintrop/operating-system/blob/main/contracts/HumansPeaceTreaty.sol'
      }
    ]
  } as AppsProps,
}

export type AppsName = keyof typeof appsList;