import Link from "next/link";
import Image from "next/image";

interface Props{
    close: () => void;
    mobile?: boolean;
}

export function ModalComunity({close, mobile}: Props){
    return(
        
            <div className={`w-40 h-62 gap-1 bg-white flex flex-col rounded-lg ml-[-20px] mt-3 ${mobile ? 'fixed' : 'absolute'}`}>
                <Link 
                    href='/produtor'
                    className="flex w-[100%] h-10 items-center hover:bg-gray-300 hover:cursor-pointer rounded-lg px-2 gap-2"
                >
                    <Image
                        alt='Icone do produtor'
                        src={require('../assets/produtor.png')}
                        className='w-8'
                    />
                    <p className="font-bold text-green-600">Produtor</p>
                </Link>

                <Link 
                    href='/ativista'
                    className="flex w-[100%] h-10 items-center hover:bg-gray-300 hover:cursor-pointer rounded-lg px-2 gap-2"
                >
                    <Image
                        alt='Icone do produtor'
                        src={require('../assets/ativista.png')}
                        className='w-8'
                    />
                    <p className="font-bold text-green-600">Ativista</p>
                </Link>

                <Link 
                    href='/pesquisador'
                    className="flex w-[100%] h-10 items-center hover:bg-gray-300 hover:cursor-pointer rounded-lg px-2 gap-2"
                >
                    <Image
                        alt='Icone do produtor'
                        src={require('../assets/transparent.png')}
                        className='w-8'
                    />
                    <p className="font-bold text-green-600">Pesquisador</p>
                </Link>

                <Link 
                    href='/investidor'
                    className="flex w-[100%] h-10 items-center hover:bg-gray-300 hover:cursor-pointer rounded-lg px-2 gap-2"
                >
                    <Image
                        alt='Icone do produtor'
                        src={require('../assets/isa.png')}
                        className='w-8'
                    />
                    <p className="font-bold text-green-600">Investidor</p>
                </Link>

                <Link 
                    href='/consumidor'
                    className="flex w-[100%] h-10 items-center hover:bg-gray-300 hover:cursor-pointer rounded-lg px-2 gap-2"
                >
                    <Image
                        alt='Icone do produtor'
                        src={require('../assets/transparent.png')}
                        className='w-8'
                    />
                    <p className="font-bold text-green-600">Consumidor</p>
                </Link>

                <button 
                    onClick={close}
                    className="flex w-[100%] h-10 items-center justify-center hover:bg-gray-300 hover:cursor-pointer rounded-lg px-2 gap-2"
                >
                    <p className="font-bold text-gray-600">Fechar</p>
                </button>
            </div>
        
    )
}