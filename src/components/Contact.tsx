import { SiGmail,SiLinkedin,SiGithub } from "react-icons/si"
import { motion } from "framer-motion"
import { item } from "../utils/constants"
import FramerWrapper from "./FramerWrapper"

export default function Contact() {
    return(
      <FramerWrapper id="contact">

            <motion.h2 variants={item} className="headings">Get In Touch</motion.h2>
            <motion.p variants={item} className="primary-text body-text">I’m open to frontend, backend, and full-stack opportunities at startup environments.</motion.p>
            <motion.div variants={item} className='flex gap-6 items-center mt-2 justify-center'>
              <motion.a variants={item} href="mailto:vishwashverma1234@gmail.com" aria-label="Send Email" target='_blank' className="secondary-btn"><SiGmail size={16}/> Email Me</motion.a>
              <motion.a variants={item}  href="https://github.com/Vishwas2607" aria-label="View Github" target='_blank' rel="noopener noreferrer" className="secondary-btn"><SiGithub size={16}/> Github </motion.a>
              <motion.a variants={item}  href="https://www.linkedin.com/in/vishwas-kumar-894776350" aria-label="View LinkedIn" target='_blank' rel="noopener noreferrer" className="secondary-btn"><SiLinkedin size={16}/> LinkedIn</motion.a>
            </motion.div>

      </FramerWrapper>
    )
}