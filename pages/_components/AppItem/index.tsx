import Image from "next/image";

interface Props {
    type: string;
    iconUrl: string;
    backgroundUrl: string;
    title: string;
    description: string;
    description2?: string;
}

export function AppItem({ backgroundUrl, description, description2, iconUrl, title, type }: Props) {
    if (type === 'card') {
        return (
            <div className={`flex w-[390px] h-[290px]  rounded-lg relative overflow-hidden shadow-xl`}>
                <img
                    alt='Background do app'
                    src={backgroundUrl}
                    className="w-full h-full object-cover flex"
                />

                <div className="w-full h-full absolute flex flex-col justify-end bg-gradient-to-t from-[#03364B] to-transparent">
                    <p className="font-bold text-xl text-[#75D63A] mx-5">{description}</p>
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

                        <div className="flex flex-col">
                            <h4 className="font-bold text-white text-lg">{title}</h4>
                            <p className="text-white">{description2}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='flex gap-3'>
            <div className='w-20 h-20 bg-[#d9d9d9] rounded-lg p-2'>
                <Image
                    alt="icon app"
                    src={iconUrl}
                    width={100}
                    height={100}
                    className="w-full h-full rounded-full object-contain"
                />
            </div>
            <div className='flex flex-col '>
                <h4 className='text-[#8C8C8C] font-bold text-xl'>{title}</h4>
                <p className='text-[#8c8c8c] text-lg'>{description2}</p>
            </div>
        </div>
    )
}