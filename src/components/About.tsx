import { motion } from "framer-motion"
import { item } from "../utils/constants"
import FramerWrapper from "./FramerWrapper"

export default function About() {

    return(
      <FramerWrapper id="about">
          <motion.h2 variants={item} className="headings">About Me</motion.h2>
            <motion.div variants={item} className="body-text primary-text flex flex-col gap-5">
              <motion.p variants={item}>I’m a MERN stack developer focused on building production-ready applications rather than demo projects.</motion.p>
              <motion.p variants={item}>I enjoy solving real-world problems like authentication state management, role-based access control, and performance optimization.</motion.p>
              <motion.p variants={item}>My recent projects follow layered backend architecture and emphasize security, maintainability, and long-term scalability.</motion.p>
            </motion.div>
      </FramerWrapper>
    )
}