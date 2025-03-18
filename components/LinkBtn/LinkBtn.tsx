import { ArrowRight, Link2 } from "lucide-react";
import Link from "next/link";

interface Props{
    href: string;
    label: string;
}
export function LinkBtn({href, label}: Props){
    return(
        <Link
            href={href}
            target="_blank"
            className="rounded-[40px] border-black border-2 border-b-4 border-r-4 p-3 bg-white flex items-center justify-between w-full lg:max-w-[48%]"
            rel="noopener noreferer"
        >
            <div className="flex items-center gap-3">
                <Link2 size={25}/>
                <p className="font-semibold">{label}</p>
            </div>

            <ArrowRight size={30}/>
        </Link>
    )
}