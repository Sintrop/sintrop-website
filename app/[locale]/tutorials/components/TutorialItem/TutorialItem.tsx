import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { marked } from 'marked';

interface Props {

}
export async function TutorialItem({ }: Props) {
    const response = await fetch('https://api.github.com/repos/sintrop/go-sintrop/contents/tutorials/nodes/how-to-run-sintrop.md');
    const data = await response.json();
    if (data.message === 'Not Found') {
        return { notFound: true };
    }

    const content = Buffer.from(data.content, 'base64').toString('utf-8');
    const htmlContent = marked(content);

    return (
        <AccordionItem
            value="1"
            className="w-full h-[50px] bg-[#E9E9E9] rounded-md px-5"
        >
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent
                className="bg-green-2 w-full p-5 rounded-md"
            >
                <div 
                    dangerouslySetInnerHTML={{ __html: htmlContent }} 
                    className="markdown-content"
                />
            </AccordionContent>
        </AccordionItem>
    )
}