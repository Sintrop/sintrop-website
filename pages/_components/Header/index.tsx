import Image from "next/image";

export function Header(){
    return(
        <header className="w-full h-20 bg-white border-b border-gray-200 shadow-xl flex items-center justify-center">
            <div className="flex justify-between items-center w-full lg:max-w-[1024px]">
                <Image
                    alt='logo sintrop'
                    src={require('../../../assets/logo.png')}
                    width={100}
                    height={100}
                    className="w-[150px] h-[50px] object-contain"
                />

                <nav className="flex items-center gap-10">
                    <p className="font-semibold text-[#2b2b2b]">Solutions</p>
                    <p className="font-semibold text-[#2b2b2b]">About</p>
                    <button className="h-10 px-14 rounded-md bg-[#7FD349] text-[#2b2b2b] font-semibold">
                        Link
                    </button>
                </nav>
            </div>
        </header>
    )
}