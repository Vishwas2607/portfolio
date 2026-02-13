import type { ReactNode } from "react";
import { useAccordion } from "./accordionContext";
import { useItemId } from "./accordionItemIdContext";
import {motion } from "framer-motion";
import { useEffect } from "react";
import clsx from "clsx";

export default function AccordionPanel({children}: {children: ReactNode}) {
    const {items} = useAccordion();
    const id = useItemId();
    const isOpen = !!items[id] 

    useEffect(() => {
        if (isOpen) {
            const el = document.getElementById(`accordion-item-${id}`);
            el?.scrollIntoView({
            behavior: "smooth",
            block: "start",
            });
        }
        }, [isOpen, id]);

        const cls = clsx(
            "bg-zinc-900/80 p-6 border border-zinc-800 rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-6",
            {"mt-5 mb-10" : isOpen}
        )

    return (
        <motion.div
            initial={false}
            animate={{
                height: isOpen ? "auto" : 0,
                opacity: isOpen ? 1 : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={cls}
            >
                {children}
        </motion.div>


    )
}