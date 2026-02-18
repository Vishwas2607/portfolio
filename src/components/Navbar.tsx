export default function Navbar({active}: {active: string|undefined}) {
    return(
            <nav >
                <ul className='flex gap-6'>
                <li><a href="#projects" className={`links ${active === "projects" ? "text-indigo-500 font-semibold underline underline-offset-4" : ""}`}> Projects</a></li>
                <li><a href="#skills" className={`links ${active === "skills" ? "text-indigo-500 font-semibold underline underline-offset-4" : ""}`}>Skills</a></li>
                <li><a href="#about" className={`links ${active === "about" ? "text-indigo-500 font-semibold underline underline-offset-4" : ""}`}>About</a></li>
                <li><a href="#contact" className={`links ${active === "contact" ? "text-indigo-500 font-semibold underline-offset-4 underline" : ""}`}>Contact</a></li>
                </ul>
            </nav>
    )
}