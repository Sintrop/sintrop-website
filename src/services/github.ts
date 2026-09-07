import { ReleaseProps } from '@/types/github';
import { marked } from 'marked';

// Cache GitHub responses for an hour. The API allows only 60 unauthenticated
// requests per hour per IP; without this a burst of builds or visitors trips
// the rate limit and the endpoints below start returning error objects.
const GITHUB_FETCH_OPTIONS = { next: { revalidate: 3600 } } as const;

interface GetContentMDFromGitHubProps {
    username: string;
    repo: string;
    pathFile: string;
}

export async function getContentMDFromGitHub(props: GetContentMDFromGitHubProps) {
    const { pathFile, repo, username } = props;

    try {
        const response = await fetch(
            `https://api.github.com/repos/${username}/${repo}/contents${pathFile}`,
            GITHUB_FETCH_OPTIONS
        );
        const data = await response.json();

        if (!response.ok || typeof data?.content !== 'string') {
            return '';
        }

        const content = Buffer.from(data.content, 'base64').toString('utf-8');
        return (await marked(content)) as string;
    } catch {
        return '';
    }
}

interface GetReleasesFromGitHubProps {
    username: string;
    repo: string;
}

export async function getReleasesFromGitHub(
    props: GetReleasesFromGitHubProps
): Promise<ReleaseProps[]> {
    const { repo, username } = props;

    try {
        const response = await fetch(
            `https://api.github.com/repos/${username}/${repo}/releases`,
            GITHUB_FETCH_OPTIONS
        );
        const data = await response.json();

        // A rate-limited or failed call returns an object, not an array.
        return Array.isArray(data) ? data : [];
    } catch {
        return [];
    }
}
