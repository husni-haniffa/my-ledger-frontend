"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export function useActiveSection(sectionIds: string[]) {
    const pathname = usePathname()
    const [activeSection, setActiveSection] = useState("")

    useEffect(() => {
        if (pathname !== "/") {
            setActiveSection("")
            return
        }

        const updateActiveSection = () => {
            if (window.scrollY < 120) {
                setActiveSection("")
                return
            }

            const bottomReached =
                window.innerHeight + window.scrollY >= document.body.offsetHeight - 80

            if (bottomReached && sectionIds.includes("contact")) {
                setActiveSection("contact")
                return
            }

            let currentSection = ""

            for (const id of sectionIds) {
                const section = document.getElementById(id)
                if (!section) continue

                const rect = section.getBoundingClientRect()

                if (rect.top <= 160 && rect.bottom >= 160) {
                    currentSection = id
                }
            }

            setActiveSection(currentSection)
        }

        updateActiveSection()

        window.addEventListener("scroll", updateActiveSection, { passive: true })
        window.addEventListener("resize", updateActiveSection)

        return () => {
            window.removeEventListener("scroll", updateActiveSection)
            window.removeEventListener("resize", updateActiveSection)
        }
    }, [pathname, sectionIds])

    return activeSection
}