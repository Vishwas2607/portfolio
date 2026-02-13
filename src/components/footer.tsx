import { DotIcon } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const buildDate = new Date().toLocaleDateString('en-Us', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    })
    return (
        <div className="flex flex-wrap body-text primary-text justify-center items-center gap-4 py-2">
            <span>© {currentYear} Built by Vishwas Kumar </span> | <span className="inline-flex justify-center items-center mr-3">{<DotIcon color="green" size={24}/>} Open to work </span> | <span> Last Updated: {buildDate}</span>
        </div>
    )
}