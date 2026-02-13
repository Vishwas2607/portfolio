import { SiReact,SiNodedotjs,SiMongodb,SiExpress,SiTypescript,SiTailwindcss, SiHtml5, SiCss3,SiJavascript } from 'react-icons/si';
import { motion } from "framer-motion"
import { container, item } from "../utils/constants"
import FramerWrapper from "./FramerWrapper"

export default function Hero(){
    return(
        <FramerWrapper id="hero">
            <div className='grid grid-cols-1 md:grid-cols-[60%_40%] lg:grid-cols-[70%_30%] gap-5 place-content-center place-items-center md:order-first'>
                <motion.div variants={container} className='flex flex-col gap-5'>
                    <motion.h1 variants={item} className='text-4xl md:text-5xl font-semibold text-zinc-100 tracking-tight'>
                    Hii, I'm Vishwas Kumar.
                    </motion.h1>

                    <motion.h2 variants={item} className='text-2xl md:text-3xl text-zinc-300 mt-2 tracking-tight'>
                        MERN Stack Developer building secure, scalable full-stack applications
                    </motion.h2>
                    <motion.p variants={item} className='body-text secondary-text'>
                        Focused on clean architecture, authentication systems, and performance-oriented frontend–backend integration.
                    </motion.p>
                    <motion.div variants={item} className='flex gap-6'>
                    <a href='/resume.pdf' download={"/resume.pdf"} className='primary-btn'>Download Resume</a>
                    <a href='#projects' className='secondary-btn'>View Projects</a>
                    </motion.div>
                </motion.div>

                <motion.div variants={item} className='w-50 md:w-70 lg: aspect-square border-4 border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 ease-in-out rounded-full overflow-hidden order-first md:order-last'>
                    <img src="/my-photo.jpg" alt="Viswas's Photo" className='max-w-full h-auto object-cover'/>
                </motion.div>
            </div>

                <motion.div variants={item} className='flex flex-wrap gap-6 justify-center items-center tracking-tight mt-5'>
                    <motion.div variants={item}className="tech-card"><SiHtml5 size={24}/> HTML 5</motion.div>

                    <motion.div variants={item}className="tech-card"><SiCss3 size={24}/> CSS 3</motion.div>

                    <motion.div variants={item}className="tech-card"><SiJavascript size={24}/> JavaScript</motion.div>

                    <motion.div variants={item}className="tech-card"><SiReact size={24}/> React</motion.div>
            
                    <motion.div variants={item}className="tech-card"><SiTypescript size={24}/> TypeScript</motion.div>

                    <motion.div variants={item}className="tech-card"><SiTailwindcss size={24}/> TailwindCSS</motion.div>

                    <motion.div variants={item}className="tech-card"><SiNodedotjs size={24}/> Node.js</motion.div>

                    <motion.div variants={item}className="tech-card"><SiExpress size={24}/> Express</motion.div>

                    <motion.div variants={item}className="tech-card"><SiMongodb size={24}/> MongoDB</motion.div>
                </motion.div>
            
        </FramerWrapper>
    )
}