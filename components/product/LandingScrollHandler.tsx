"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"

const LandingScrollHandler = () => {
    const searchParams = useSearchParams()
    const section = searchParams.get("section")

    useEffect(() => {
        if (!section) return

        const el = document.getElementById(section)

        if (!el) return

        setTimeout(() => {
            el.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
        }, 100)
    }, [section])

    return null
}

export default LandingScrollHandler