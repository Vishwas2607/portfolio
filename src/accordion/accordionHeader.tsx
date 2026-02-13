import type { AccordionHeaderType } from "../types/accordionTypes";
import { useAccordion } from "./accordionContext";
import { useItemId } from "./accordionItemIdContext";
import clsx from "clsx";
import { motion } from "framer-motion";
import { item } from "../utils/constants";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";


export default function AccordionHeader({title,miniInfo,techStack,liveDemo,github}: AccordionHeaderType) {
    
    const {items,setItem} = useAccordion();
    const id = useItemId();
    const isOpen = items[id] || false;

    const handleOpen = () => {
        setItem({itemId:id, isOpen:!isOpen})
    };

    const handleKey = (e:React.KeyboardEvent) => {
        if(e.key == "Tab") return;
        e.preventDefault();

        switch (e.key) {
            case "Enter":
                setItem({itemId: id,isOpen:!isOpen})
                break
            case " ":
                setItem({itemId: id,isOpen:!isOpen})
                break;
        };
    };

    const cls = clsx(
        "card relative z-20",
        {
         "accordion-active":isOpen,
         "accordion-hidden": !isOpen
        }
    )

    const chevronCls = clsx(
        " absolute top-2 right-5 text-2xl transition-all duration-300 ease-in-out cursor-pointer",
        {
            "text-zinc-200 hover:text-zinc-400" : !isOpen,
            "text-indigo-500 hover:text-indigo-400": isOpen
        }
    )
    return (
        <motion.div variants={item} className={cls} tabIndex={0} onKeyDown={(e)=> handleKey(e)}>
            <button onClick={handleOpen} className={chevronCls}
                aria-expanded={isOpen ? "true" : "false"}
                aria-controls={`accordion-item-${id}`}
                aria-label="toggle-accordion"
                >
                    {isOpen ? <FaChevronCircleUp/> : <FaChevronCircleDown/>}
            </button>
            <h3 className='primary-text'>{title}</h3>
            <p className='body-text secondary-text'>{miniInfo}</p>
            <p className='primary-text body-text'>{techStack}</p>
            <div className='flex gap-6'>
                <a href={liveDemo} target="_blank" rel="noopener noreferrer"  className='primary-btn'>Live Demo</a>
                <a href={github} target="_blank" rel="noopener noreferrer"  className='secondary-btn'>Github</a>
            </div>
        </motion.div>
    )

}