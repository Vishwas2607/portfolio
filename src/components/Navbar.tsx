import { useEffect,useState } from "react"


export default function Navbar() {
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

    return(
        <div className="flex justify-between items-center px-2 py-0.5"> 
            <a href="#hero" className={`text-2xl md:text-3xl font-bold ${active === "hero" ? "text-indigo-500" : "text-zinc-50 hover:text-zinc-200"}`}>Vishwas.</a>
            <nav >
                <ul className='flex gap-6'>
                <li><a href="#projects" className={`links ${active === "projects" ? "text-indigo-500 font-semibold underline underline-offset-4" : ""}`}>Projects</a></li>
                <li><a href="#skills" className={`links ${active === "skills" ? "text-indigo-500 font-semibold underline underline-offset-4" : ""}`}>Skills</a></li>
                <li><a href="#about" className={`links ${active === "about" ? "text-indigo-500 font-semibold underline underline-offset-4" : ""}`}>About</a></li>
                <li><a href="#contact" className={`links ${active === "contact" ? "text-indigo-500 font-semibold underline-offset-4 underline" : ""}`}>Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}