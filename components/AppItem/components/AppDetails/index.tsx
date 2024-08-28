import { AppDetailProps } from "../..";
import Image from "next/image";
import Link from "next/link";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import {Tags} from "../Tags";
import * as Dialog from '@radix-ui/react-dialog';

interface Props {
    data: AppDetailProps;
}

export function AppDetails({ data }: Props) {
    return (
        <Dialog.Portal >
            <Dialog.Overlay className="bg-black/50 fixed inset-0" />
            <Dialog.Content className="bg-white fixed top-[50%] left-[50%] h-[300px] w-[320px] lg:w-[500px] p-5 transform translate-x-[-50%] translate-y-[-50%] rounded-lg overflow-y-auto">
                {/* <Dialog.Header>
                    <Dialog.Close>
                        teste
                    </Dialog.Close>
                </Dialog.Header> */}

                <div className="flex gap-3">
                    <div className="bg-gray-200 rounded-2xl w-20 h-20">
                        <Image
                            alt='Icone do app'
                            src={data?.iconUrl}
                            width={100}
                            height={100}
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <div className="flex flex-col">
                        <h3 className="font-semibold text-[#8c8c8c] text-xl">{data?.title}</h3>
                        <p className="text-[#8c8c8c] text-md">{data?.description}</p>
                        {data?.tags && (
                            <div className="flex gap-3">
                                {data?.tags.map(item => (
                                    <Tags
                                        key={item}
                                        tag={item}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-5">
                    <p className="text-[#8c8c8c]">{data?.longDescription}</p>
                </div>

                <div
                    className="flex gap-3 mt-5"
                >
                    {data?.linkWeb && (
                        <Link
                            href={data?.linkWeb}
                            target="_blank"
                            className="px-5 h-10 rounded-md bg-blue-500 text-white font-semibold w-fit flex items-center justify-center gap-2"
                        >
                            <GiEarthAfricaEurope color='white' size={20} />
                            Web
                        </Link>
                    )}

                    {data?.linkGooglePlay && (
                        <Link
                            href={data?.linkGooglePlay}
                            target="_blank"
                            className="px-5 h-10 rounded-md bg-blue-500 text-white font-semibold w-fit flex items-center justify-center gap-2"
                        >
                            <FaGooglePlay color='white' size={20} />
                            Google Play
                        </Link>
                    )}

                    {data?.linkAppleStore && (
                        <Link
                            href={data?.linkAppleStore}
                            target="_blank"
                            className="px-5 h-10 rounded-md bg-blue-500 text-white font-semibold w-fit flex items-center justify-center gap-2"
                        >
                            <FaApple color='white' size={20} />
                            App Store
                        </Link>
                    )}
                </div>
            </Dialog.Content>
        </Dialog.Portal>
    )
}