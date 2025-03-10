import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

interface Props {

}
export function TutorialItem({ }: Props) {
    return (
        <AccordionItem 
            value="1"
            className="w-full h-[50px] bg-[#E9E9E9] rounded-md px-5"
        >
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent
                className="bg-green-2 w-full p-5 rounded-md"
            >
                Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
        </AccordionItem>
    )
}