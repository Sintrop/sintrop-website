export interface TutorialProps{
    id: string;
    title: string;
    username: string;
    repo: string;
    pathFile: string
}

const tutorialsListEN: TutorialProps[] = [
    {
        id: 'run-a-sintrop-node',
        title: 'howToRunASintropNode',
        username: 'sintrop',
        repo: 'go-sintrop',
        pathFile: '/tutorials/nodes/how-to-run-sintrop.md'
    },
    {
        id: 'run-a-sintrop-node-with-docker',
        title: 'howToRunASintropNodeWithDocker',
        username: 'sintrop',
        repo: 'go-sintrop',
        pathFile: '/tutorials/nodes/run-sintrop-with-docker.md'
    },
    {
        id: 'run-a-bootnode',
        title: 'howToRunABootnode',
        username: 'sintrop',
        repo: 'go-sintrop',
        pathFile: '/tutorials/nodes/how-to-run-bootnode.md'
    },
    {
        id: 'run-a-sequoia-node-with-docker',
        title: 'howToRunASequoiaNodeWithDocker',
        username: 'sintrop',
        repo: 'go-sintrop',
        pathFile: '/tutorials/nodes/run-sequoia-with-docker.md'
    },
];

const tutorialsListPT: TutorialProps[] = [
    {
        id: 'como-rodar-um-node-da-sintrop',
        title: 'howToRunASintropNode',
        username: 'sintrop',
        repo: 'go-sintrop',
        pathFile: '/tutorials/nodes/how-to-run-sintrop.md'
    },
    {
        id: 'como-rodar-um-node-da-sintrop-com-docker',
        title: 'howToRunASintropNodeWithDocker',
        username: 'sintrop',
        repo: 'go-sintrop',
        pathFile: '/tutorials/nodes/run-sintrop-with-docker.md'
    },
    {
        id: 'como-rodar-um-bootnode',
        title: 'howToRunABootnode',
        username: 'sintrop',
        repo: 'go-sintrop',
        pathFile: '/tutorials/nodes/how-to-run-bootnode.md'
    },
    {
        id: 'como-rodar-um-node-da-sequoiatestnet-com-docker',
        title: 'howToRunASequoiaNodeWithDocker',
        username: 'sintrop',
        repo: 'go-sintrop',
        pathFile: '/tutorials/nodes/run-sequoia-with-docker.md'
    },
];

export const tutorialsListPerLanguage = {
    en: tutorialsListEN,
    pt: tutorialsListPT
}

export type LanguagesAvailablesForTutorials = keyof typeof tutorialsListPerLanguage