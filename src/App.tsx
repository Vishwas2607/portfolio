import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/footer';
import { Squash as Hamburger } from 'hamburger-react';  
import { AnimatePresence, motion } from 'framer-motion';
import Sidebar from './components/Sidebar';
import { useEffect,useState } from "react"

function App() {

  const [isOpen, setOpen] = useState(false);
  const [active,setActive] = useState<string>();

  useEffect (()=> {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry)=> {
                    if(entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.6,
            }
        );
        sections.forEach((section=> observer.observe(section)));
        return () => observer.disconnect();
    },[]);


  return (
    <>
    <div className='flex flex-col bg-zinc-950 '>
      <header className='header h-12'>
          <div className="flex justify-between items-center px-2 py-0.5"> 
            <div className='flex md:hidden'>
                <Hamburger toggled={isOpen} toggle={()=>setOpen(!isOpen)} color='white' size={24}/>
            </div>
            <a href="#hero" className={`text-2xl md:text-3xl font-bold ${active === "hero" ? "text-indigo-500" : "text-zinc-50 hover:text-zinc-200"}`}>Vishwas.</a>

            <div className='hidden md:flex justify-between items-center'>
                <Navbar active={active}/>
            </div>
          </div>
        <AnimatePresence>
            {isOpen && <motion.div
            initial={{x: "-100%"}}
            animate={{x:0}}
            exit={{x:"-100%"}}
            transition={{duration:0.4, ease:"easeInOut"}}
            aria-hidden={!isOpen}
            className='h-[calc(100vh-50px)] bg-zinc-900 md:hidden top-12 fixed left-0 sidebar flex flex-col'
            >
                <Sidebar active={active}/>
              </motion.div>}
        </AnimatePresence>
      </header>
      <main className='flex-1 bg-zinc-950 py-15 flex flex-col gap-15 animate-fadeUp'>
          <Home/>
      </main>
      <footer className='footer'>
          <Footer/>
      </footer>
    </div>
    </>
  )
}

export default App
