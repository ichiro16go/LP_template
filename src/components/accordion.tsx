import React from "react";
import { Accordion,AccordionItem,AccordionTrigger,AccordionContent } from "./ui/accordion";

interface AccordionProps {
    className?: string;
    accordionItems: Array<{
        title: string; 
        content: string;
    }>;
}


export default function AccordionComponent({className, accordionItems}: AccordionProps) {
    return(
        <Accordion className={className} type="single" collapsible>
            {accordionItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-lg font-semibold">{item.title}</AccordionTrigger>
                    <AccordionContent className="text-lg font-semibold">{item.content}</AccordionContent>
                </AccordionItem>
            ))}

        </Accordion>
    )
}