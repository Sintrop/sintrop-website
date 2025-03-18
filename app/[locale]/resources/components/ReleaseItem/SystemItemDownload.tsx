import { AssetReleaseProps } from "@/types/github";
import Link from "next/link";
import WindowsIcon from '@/public/assets/icons/win.png';
import LinuxIcon from '@/public/assets/icons/linux.png';
import MacosIcon from '@/public/assets/icons/macos.png';
import Image from "next/image";
import { TType } from '@/types/t';

interface Props{
    system: SystemNames;
    assets: AssetReleaseProps[];
    t: TType;
    pageReleaseUrl: string;
}
export function SystemItemDownload({system, assets, t, pageReleaseUrl}: Props){
    const systemData = systemToData[system];

    let linkDownload = '';

    if(system === 'allVersions'){
        linkDownload = pageReleaseUrl;
    }else{
        const filterAssets = assets.filter(item => item.name.includes(systemData?.archiveIncludeName) && !item.name.includes('sha256'));
        linkDownload = filterAssets[0].browser_download_url;
    }


    return(
        <Link
            href={linkDownload}
            target="_blank"
            rel="noopener noreferer"
            className="w-[120px] h-[150px] bg-green-3 rounded-md flex flex-col items-center justify-center p-2"
        >
            {system !== 'allVersions' && (
                <Image
                    alt="icon operation system"
                    src={systemData?.image}
                    height={50}
                    width={50}
                />
            )}

            <p className="text-white mt-3 text-center">{t(systemData?.label)}</p>
            {system !== 'allVersions' && (
                <p className="text-center font-[akatab] text-gray-300 text-xs">{t('clickToDownload')}</p>
            )}
        </Link>
    )
}

const systemToData = {
    windows: {
        label: 'windows',
        image: WindowsIcon,
        archiveIncludeName: 'go-sintrop-alltools-win64',
    },
    linux: {
        label: 'linux/ubuntu',
        image: LinuxIcon,
        archiveIncludeName: 'go-sintrop-alltools-linux',
    },
    macos: {
        label: 'macos',
        image: MacosIcon,
        archiveIncludeName: 'go-sintrop-alltools-osx',
    },
    allVersions: {
        label: 'clickHereToSeeAllVersions',
        image: WindowsIcon,
        archiveIncludeName: 'go-sintrop-alltools-win64'
    }
}

type SystemNames = keyof typeof systemToData;