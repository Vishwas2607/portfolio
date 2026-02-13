import { FaDatabase,FaTools, FaCode, FaServer } from 'react-icons/fa';
import { motion } from "framer-motion"
import { item } from "../utils/constants"
import FramerWrapper from "./FramerWrapper"

export default function Skills() {
    return(
      <FramerWrapper id="skills">
            <motion.div variants={item}>
              <motion.h2 variants={item} className="headings">Skills & Technologies</motion.h2>
              <motion.div variants={item} className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10'>

                <motion.div variants={item} className="primary-text card">
                  <motion.h3 variants={item} className='text-lg mb-2 flex gap-2 items-center'><FaCode/> Frontend </motion.h3>
                  <motion.ul variants={item} className='list'>
                    <motion.li variants={item}>React, TypeScript, JavaScript (ES6+)</motion.li>
                    <motion.li variants={item}>Tailwind CSS, shadcn/ui</motion.li>
                    <motion.li variants={item}>Context API, React Query, Fetch</motion.li>
                    <motion.li variants={item}>Framer Motion, Swiper</motion.li>
                    <motion.li variants={item}>React Hook Form, Zod</motion.li>
                    <motion.li variants={item}>Semantic HTML5, Modern CSS3 (FlexBox/Grid) A11y</motion.li>
                  </motion.ul>
                </motion.div>

                <motion.div variants={item} className="primary-text card">
                  <motion.h3 variants={item} className='text-lg mb-2 flex gap-2 items-center'><FaServer/> Backend</motion.h3>
                  <motion.ul variants={item} className='list'>
                    <motion.li variants={item}>Node.js, Express.js</motion.li>
                    <motion.li variants={item}>JWT, HTTP-only Cookies, Refresh Tokens</motion.li>
                    <motion.li variants={item}>Role-Based Access Control (RBAC)</motion.li>
                    <motion.li variants={item}>Zod Validation & Security Middleware</motion.li>
                    <motion.li variants={item}>Rate Limiting & Error Handling</motion.li>
                  </motion.ul>
                </motion.div>
                <motion.div variants={item} className="primary-text card">
                  <motion.h3 variants={item} className='text-lg mb-2 flex gap-2 items-center'><FaDatabase/> Database</motion.h3>
                  <motion.ul variants={item} className='list'>
                    <motion.li variants={item}>MongoDB, Mongoose</motion.li>
                    <motion.li variants={item}>Aggregation Pipelines & Indexing</motion.li>
                    <motion.li variants={item}>Database Transactions</motion.li>
                    <motion.li variants={item}>Data Modeling & Schema Design</motion.li>
                  </motion.ul>
                </motion.div>
                <motion.div variants={item} className="primary-text card">
                  <motion.h3 variants={item} className='text-lg mb-2 flex gap-2 items-center'><FaTools/> Dev & Tooling</motion.h3>
                  <motion.ul variants={item} className='list'>
                    <motion.li variants={item}>Git & Github</motion.li>
                    <motion.li variants={item}>REST API Design & Postman</motion.li>
                    <motion.li variants={item}>Docker (Containerization)</motion.li>
                    <motion.li variants={item}>Vercel, Render, Chrome DevTools</motion.li>
                  </motion.ul>
                </motion.div>
              </motion.div>
            </motion.div>
      </FramerWrapper> 
    )
}