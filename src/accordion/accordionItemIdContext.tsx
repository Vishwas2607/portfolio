import { createContext,useContext } from "react";
import type { AccordionItemIdProviderType } from "../types/accordionTypes";

const ItemContext = createContext<string|null>(null);

export default function AccordionItemIdProvider({id,children}:AccordionItemIdProviderType) {
    return (
        <ItemContext.Provider value={id}>
            <div>
                {children}
            </div>
        </ItemContext.Provider>
    )
}

export function useItemId(){
    const ctx = useContext(ItemContext);
    if(!ctx) throw new Error ("useItemId must be used inside ItemContext.Provider")
    return ctx;
}