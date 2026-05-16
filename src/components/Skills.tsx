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
                    <motion.li variants={item}>React.js, TypeScript, JavaScript (ES6+)</motion.li>
                    <motion.li variants={item}>React Query, Tailwind CSS, shadcn/ui</motion.li>
                    <motion.li variants={item}>React Hook Form, Zod, Axios</motion.li>
                    <motion.li variants={item}>Framer Motion, Swiper</motion.li>
                    <motion.li variants={item}>HTML5, CSS3</motion.li>
                  </motion.ul>
                </motion.div>

                <motion.div variants={item} className="primary-text card">
                  <motion.h3 variants={item} className='text-lg mb-2 flex gap-2 items-center'><FaServer/> Backend</motion.h3>
                  <motion.ul variants={item} className='list'>
                    <motion.li variants={item}>Node.js, Express.js, REST APIs</motion.li>
                    <motion.li variants={item}>Scalable Backend Architecture, Concurrency Handling</motion.li>
                    <motion.li variants={item}>Queue-Based Systems (BullMQ, Redis)</motion.li>
                    <motion.li variants={item}>JWT Authentication, HTTP-only Cookies, Refresh Tokens, Idempotency, RBAC</motion.li>
                    <motion.li variants={item}>Rate Limiting, Helmet, Security Middleware</motion.li>
                  </motion.ul>
                </motion.div>
                <motion.div variants={item} className="primary-text card">
                  <motion.h3 variants={item} className='text-lg mb-2 flex gap-2 items-center'><FaDatabase/> Database</motion.h3>
                  <motion.ul variants={item} className='list'>
                    <motion.li variants={item}>MongoDB, Mongoose</motion.li>
                    <motion.li variants={item}>Aggregation Pipelines, Indexing Strategies</motion.li>
                    <motion.li variants={item}>Database Transactions, Data Modeling</motion.li>
                  </motion.ul>
                </motion.div>
                <motion.div variants={item} className="primary-text card">
                  <motion.h3 variants={item} className='text-lg mb-2 flex gap-2 items-center'><FaTools/> Dev & Tooling</motion.h3>
                  <motion.ul variants={item} className='list'>
                    <motion.li variants={item}>Vitest, Supertest, MongoMemoryServer</motion.li>
                    <motion.li variants={item}>Docker (Containerization), GitHub Actions (CI/CD)</motion.li>
                    <motion.li variants={item}>Git, GitHub, Postman, Chrome DevTools, Vercel, Render</motion.li>
                  </motion.ul>
                </motion.div>
              </motion.div>
            </motion.div>
      </FramerWrapper> 
    )
}