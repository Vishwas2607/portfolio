import { Info, LayoutGrid, Zap, Send } from "lucide-react"

export default function Sidebar({active}: {active: string|undefined}) {

    return(
            <nav className="sidebar">
                <ul className='flex gap-6 flex-col py-6 w-full'>
                <li><a href="#projects" className={`${active === "projects" ? "sidebar-active-link" : "sidebar-link"}`}>{<LayoutGrid size={24}/>} Projects</a></li>
                <li><a href="#skills" className={`${active === "skills" ? "sidebar-active-link w-full" : "sidebar-link" }`}>{<Zap/>} Skills</a></li>
                <li><a href="#about" className={`${active === "about" ? "sidebar-active-link" : "sidebar-link" }`}>{<Info/>} About</a></li>
                <li><a href="#contact" className={`${active === "contact" ? "sidebar-active-link" : "sidebar-link" }`}>{<Send/>} Contact</a></li>
                </ul>
            </nav>

    )
}