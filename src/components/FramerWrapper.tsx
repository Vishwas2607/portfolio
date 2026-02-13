import { motion } from "framer-motion"
import { container, fadeUpVariant } from "../utils/constants"
import type { FramerWrapperType } from "../types/FramerWrapperTypes"

export default function FramerWrapper({id,children}: FramerWrapperType) {
    return (
        <motion.section 
        id={id} 
        className='section'
        variants={fadeUpVariant}
        initial="hidden"
        whileInView={"visible"}
        viewport={{once:true, amount:0.2}}
        >
          <motion.div
          variants={container}
          initial= "hidden"
          whileInView={"visible"}
          viewport={{once:true}}
           className="container">

                {children}

          </motion.div>
        </motion.section>
    )
}