import Image from "next/image";
import {AppDetails} from "./components/AppDetails";
import {Tags} from "./components/Tags";
import * as Dialog from '@radix-ui/react-dialog';

export interface AppDetailProps {
    type: string;
    iconUrl: string;
    backgroundUrl: string;
    title: string;
    description: string;
    description2?: string;
    longDescription?: string;
    linkWeb?: string;
    linkGooglePlay?: string;
    linkAppleStore?: string;
    tags?: string[]
}

export function AppItem({ backgroundUrl, description, description2, iconUrl, title, type, longDescription, linkAppleStore, linkGooglePlay, linkWeb, tags }: AppDetailProps) {
    if (type === 'card') {
        return (
            <Dialog.Root>
                <Dialog.Trigger asChild>
                    <button className={`flex w-full lg:w-[390px] h-[290px] rounded-lg relative overflow-hidden shadow-xl`}>
                        <img
                            alt='Background do app'
                            src={backgroundUrl}
                            className="w-full h-full object-cover flex"
                        />

                        <div className="w-full h-full absolute flex flex-col justify-end bg-gradient-to-t from-[#03364B] to-transparent">
                            <p className="font-bold text-xl text-[#75D63A] mx-5 text-left">{description}</p>
                            <div className="flex py-5 px-5 gap-3">
                                <div className="w-16 h-16 bg-white rounded-full p-1">
                                    <Image
                                        alt="icon app"
                                        src={iconUrl}
                                        width={100}
                                        height={100}
                                        className="w-full h-full rounded-full object-contain"
                                    />
                                </div>

                                <div className="flex flex-col items-start">
                                    <h4 className="font-bold text-white text-lg text-left">{title}</h4>
                                    <p className="text-white">{description2}</p>
                                </div>
                            </div>
                        </div>

                        {tags && (
                            <div className="flex gap-3 absolute top-2 right-2">
                                {tags.map(item => (
                                    <Tags
                                        key={item}
                                        tag={item}
                                    />
                                ))}
                            </div>
                        )}
                    </button>
                </Dialog.Trigger>

                <AppDetails
                    data={{
                        backgroundUrl,
                        description,
                        iconUrl,
                        title,
                        type,
                        longDescription,
                        description2,
                        linkAppleStore,
                        linkGooglePlay,
                        linkWeb,
                        tags
                    }}
                />
            </Dialog.Root>
        )
    }

    return (
        <Dialog.Root>
            <Dialog.Trigger className="w-fit">
                <button className='flex gap-3 w-fit'>
                    <div className='w-20 h-20 bg-[#d9d9d9] rounded-2xl'>
                        <Image
                            alt="icon app"
                            src={iconUrl}
                            width={100}
                            height={100}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className='flex flex-col items-start'>
                        <h4 className='text-[#8C8C8C] font-bold text-xl text-left'>{title}</h4>
                        <p className='text-[#8c8c8c]'>{description2}</p>

                        {tags && (
                            <div className="flex gap-3">
                                {tags.map(item => (
                                    <Tags
                                        key={item}
                                        tag={item}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </button>
            </Dialog.Trigger>

            <AppDetails
                data={{
                    backgroundUrl,
                    description,
                    iconUrl,
                    title,
                    type,
                    longDescription,
                    description2,
                    linkAppleStore,
                    linkGooglePlay,
                    linkWeb,
                    tags
                }}
            />
        </Dialog.Root>


    )
}