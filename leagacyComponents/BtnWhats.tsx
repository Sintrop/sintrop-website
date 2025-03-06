import Link from "next/link";
import Image from "next/image";

export function BtnWhats(){
    return(
        <Link
            href='https://api.whatsapp.com/send/?phone=%2B5548988133635&text&type=phone_number&app_absent=0'
            target='_blank'
            className="fixed bottom-2 right-2 drop-shadow-2xl lg:bottom-10 lg:right-10 z-50"
        >   
            <div className="rounded-full bg-green-700 flex items-center justify-center h-[65px] w-[65px] drop-shadow-2xl border-4">
                <Image
                    alt='Icone do WhatsApp'
                    src={require('../assets/ICON-WHATS.png')}
                    className='flex w-[45px] h-[45px] rounded-2xl mt-2'
                />
            </div>
        </Link>
    )
}