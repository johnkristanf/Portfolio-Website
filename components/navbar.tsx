import { Dispatch, SetStateAction } from "react"

export default function Navbar({
    setIsNavigating,
}: {
    setIsNavigating: Dispatch<SetStateAction<boolean>>
}) {
    // Handle manual navigation clicks
    const handleNavClick = (e: any, href: string) => {
        e.preventDefault()
        setIsNavigating(true)

        // Then scroll to the section
        setTimeout(() => {
            const sectionId = href === '/' ? 'home' : href.slice(1)
            const section = document.getElementById(sectionId)
            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                })
            }
            setTimeout(() => setIsNavigating(false), 1000)
        }, 100)
    }

    return (
        <nav className="fixed top-0 w-full z-50 glass-effect">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="text-2xl font-bold gradient-text">
                        &lt;John Kristan.Dev/&gt;
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <a
                            href="/"
                            onClick={(e) => handleNavClick(e, '/')}
                            className={`hover:text-violet-400 transition-colors duration-300 `}
                        >
                            Home
                        </a>
                        <a
                            href="/about"
                            onClick={(e) => handleNavClick(e, '/about')}
                            className={`hover:text-violet-400 transition-colors duration-300 $`}
                        >
                            About
                        </a>
                        <a
                            href="/skills"
                            onClick={(e) => handleNavClick(e, '/skills')}
                            className={`hover:text-violet-400 transition-colors duration-300 `}
                        >
                            Skills
                        </a>
                        <a
                            href="/projects"
                            onClick={(e) => handleNavClick(e, '/projects')}
                            className={`hover:text-violet-400 transition-colors duration-300 `}
                        >
                            Projects
                        </a>
                        <a
                            href="/contact"
                            onClick={(e) => handleNavClick(e, '/contact')}
                            className={`hover:text-violet-400 transition-colors duration-300 `}
                        >
                            Contact
                        </a>
                    </div>
                    <button className="md:hidden text-violet-400">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}
