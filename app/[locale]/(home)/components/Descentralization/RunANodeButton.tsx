"use client"

import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

interface Props{
    locale: string;
    label: string;
}
export function RunANodeButton({locale, label}: Props) {
    function handleGoToTutorial(){
        if(locale === 'en'){
            redirect('/tutorials/how-to-run-a-sintrop-node');
        }
        if(locale === 'pt'){
            redirect('/tutorials/como-rodar-um-node-na-sintrop');
        }
    }

    return (
        <Button
            className="bg-[#FB571C] rounded-md text-white px-10 h-10 w-fit mt-10 hover:cursor-pointer hover:bg-orange-600 duration-300"
            onClick={handleGoToTutorial}
        >
            {label}
        </Button>
    )
}