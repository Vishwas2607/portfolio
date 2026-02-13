import { createContext, useState,useContext } from "react";
import type { AccordionContextType, AccordionProviderType, ItemType } from "../types/accordionTypes";

const AccordionContext = createContext<AccordionContextType | null>(null);

export function AccordionProvider({allowMultiple,children}: AccordionProviderType) {
    const [items,setActiveItem] = useState<Record<string,boolean>>({});

    const setItem = ({itemId,isOpen}: ItemType) => {
    if (!allowMultiple) {
        const newEntries = Object.entries(items).map(([key])=> [key,false]);
        const updatedItems = Object.fromEntries(newEntries) as Record<string,boolean>;
        setActiveItem({...updatedItems,[itemId]:isOpen})
    } else {
        setActiveItem(prev => ({...prev, [itemId]:isOpen}))
    };
    };

    return (
        <AccordionContext.Provider value={{items,setItem}}>
            {children}
        </AccordionContext.Provider>
    )
};

export function useAccordion() {
    const context = useContext(AccordionContext);
    if (!context) throw new Error("useAccordion must be used inside <AccordionProvider>");
    return context;
}