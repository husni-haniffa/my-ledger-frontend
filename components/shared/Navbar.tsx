"use client"
import { Show, SignOutButton } from "@clerk/nextjs"
import Link from "next/link"
import { Button } from "../ui/button"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
]

const Navbar = ({isAdmin}:{isAdmin: boolean}) => {

  const [isOpen, setIsOpen] = useState(false)

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: "smooth", block: "start" })
  }
  
  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
      ? " bg-white/90 shadow-sm backdrop-blur-xl"
      : "bg-white/60 backdrop-blur-md"
      }`}
    >
      <div className="container flex items-center justify-between py-4">

        <div>
          <Link href={'/'} className="text-xl xl:text-2xl font-bold text-emerald-700">
            MyLedger
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((nav) => (
            <Link 
                key={nav.href} href={nav.href}                 
                onClick={() => handleNavClick(nav.href)}>
              {nav.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Show when={'signed-in'}>
            {isAdmin && (
              <Button asChild className="bg-red-500">
                <Link href={'/admin'}>
                  Admin
                </Link>
              </Button>
            )}
            <Button asChild className="bg-emerald-700">
              <Link href={'/auth'}>
                Dashboard
              </Link>
            </Button>
            <Button asChild className="bg-emerald-950">
              <SignOutButton />
            </Button>
          </Show>
          <Show when={'signed-out'}>
            <Button asChild variant={'secondary'}>
              <Link href={'/sign-in'}>
                Sign In
              </Link>
            </Button>
            <Button asChild className="bg-emerald-700">
              <Link href={'/sign-up'}>
                Sign Up
              </Link>
            </Button>
          </Show>
        </div>

        <div className="lg:hidden">
          <Button
            size={'icon'}
            variant={'secondary'}
            onClick={() => setIsOpen((prev) => !prev)}
          > 

            {isOpen ? <X/> : <Menu/>}
          </Button>
        </div>

      </div>

      {isOpen && (
        <div className="lg:hidden container flex flex-col gap-3 pt-3 pb-3 bg-white shadow-md border-t border-emerald-100">

          <div className="flex flex-col gap-3">
            {navLinks.map((nav) => (
              <Link key={nav.href} href={nav.href}
                onClick={() => handleNavClick(nav.href)}>
                {nav.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <Show when={'signed-in'}>
              {isAdmin && (
                <Button asChild className="bg-red-500">
                  <Link href={'/admin'} onClick={() => setIsOpen(false)}>
                    Admin
                  </Link>
                </Button>
              )}
              <Button asChild className="bg-emerald-700">
                <Link href={'/auth'} onClick={() => setIsOpen(false)}>
                  Dashboard
                </Link>
              </Button>
              <Button asChild className="bg-emerald-950">
                <SignOutButton />
              </Button>
            </Show>
            <Show when={'signed-out'}>
              <Button asChild variant={'secondary'}>
                <Link href={'/sign-in'}>
                  Sign In
                </Link>
              </Button>
              <Button asChild className="bg-emerald-700">
                <Link href={'/sign-up'}>
                  Sign Up
                </Link>
              </Button>
            </Show>
          </div>

        </div>
      )}

    </nav>
  )
}

export default Navbar