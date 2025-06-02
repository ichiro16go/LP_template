import React from "react";
import { Accordion,AccordionItem,AccordionTrigger,AccordionContent } from "./ui/accordion";

interface AccordionProps {
    accordionItems: Array<{
        title: string; 
        content: string;
    }>;
}


export default function AccordionComponent(accordionProps: AccordionProps) {
    const { accordionItems } = accordionProps;
    return(
        <Accordion type="single" collapsible>
            {accordionItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{item.title}</AccordionTrigger>
                    <AccordionContent>{item.content}</AccordionContent>
                </AccordionItem>
            ))}

        </Accordion>
    )
}