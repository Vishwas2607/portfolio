import type { Variants } from "framer-motion";

export const fadeUpVariant: Variants = {
    hidden: {opacity: 0, y:60},
    visible: {
        opacity:1,
        y:0,
        transition: {duration: 0.4, ease: "easeOut"}
    }
};

export const container: Variants = {
    hidden: {},
    visible: {
        transition:{
            delayChildren:0.2,
            staggerChildren:0.4
        }
    }
};

export const item:Variants = {
    hidden: {opacity:0, y:20},
    visible: {opacity:1, y:0, transition:{duration:0.6}}
};