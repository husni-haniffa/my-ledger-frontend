"use client"

import { Show, SignOutButton } from "@clerk/nextjs"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
]

const Navbar = ({ isAdmin }: { isAdmin: boolean }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState("")

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setActiveLink(href)
    setIsOpen(false)

    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const handleLogoClick = () => {
    setActiveLink("")
    setIsOpen(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <nav
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${scrolled
          ? "border-emerald-900/30 bg-[#071713]/95 shadow-lg shadow-black/10 backdrop-blur-xl"
          : "border-transparent bg-[#071713]/90 backdrop-blur-xl"
        }`}
    >
      <div className="container relative flex h-16 items-center justify-between lg:h-20">
        <Link
          href="/"
          onClick={handleLogoClick}
          className="text-[24px] font-bold tracking-tight text-white sm:text-[28px]"
        >
          My<span className="text-emerald-300">Ledger</span>
        </Link>

        <div className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
          <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.06] p-1 shadow-inner shadow-white/5 backdrop-blur-xl">
            {navLinks.map((nav) => {
              const isActive = activeLink === nav.href

              return (
                <Link
                  key={nav.href}
                  href={nav.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(nav.href)
                  }}
                  className={`rounded-full px-5 py-2.5 text-[16px] font-semibold tracking-tight transition-all duration-200 ${isActive
                      ? "bg-emerald-300 text-emerald-950 shadow-sm shadow-emerald-300/20"
                      : "text-slate-200 hover:bg-white/10 hover:text-white"
                    }`}
                >
                  {nav.label}
                </Link>
              )
            })}
          </div>
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Show when="signed-in">
            {isAdmin && (
              <Link
                href="/admin"
                className="inline-flex h-11 items-center justify-center rounded-full border border-amber-300/30 bg-amber-300/10 px-5 text-[16px] font-semibold tracking-tight text-amber-200 transition-all duration-200 hover:bg-amber-300/20 hover:text-amber-100"
              >
                Admin
              </Link>
            )}

            <Link
              href="/auth"
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] px-5 text-[16px] font-semibold tracking-tight text-slate-100 transition-all duration-200 hover:bg-white/12 hover:text-white"
            >
              Dashboard
            </Link>

            <SignOutButton>
              <button className="inline-flex h-11 items-center justify-center rounded-full bg-white px-5 text-[16px] font-bold tracking-tight text-slate-950 transition-all duration-200 hover:bg-emerald-100 hover:text-slate-950">
                Sign out
              </button>
            </SignOutButton>
          </Show>

          <Show when="signed-out">
            <Link
              href="/sign-in"
              className="inline-flex h-11 items-center justify-center rounded-full px-5 text-[16px] font-semibold tracking-tight text-slate-200 transition-all duration-200 hover:bg-white/10 hover:text-white"
            >
              Sign In
            </Link>

            <Link
              href="/sign-up"
              className="inline-flex h-11 items-center justify-center rounded-full bg-emerald-300 px-6 text-[17px] font-bold tracking-tight text-emerald-950 shadow-md shadow-emerald-950/20 transition-all duration-200 hover:bg-emerald-200 hover:text-emerald-950"
            >
              Start free
            </Link>
          </Show>
        </div>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-slate-100 transition-all duration-200 hover:bg-white/12 hover:text-white lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#071713]/98 shadow-2xl backdrop-blur-xl lg:hidden">
          <div className="container space-y-5 py-5">
            <div className="grid gap-1">
              {navLinks.map((nav) => {
                const isActive = activeLink === nav.href

                return (
                  <Link
                    key={nav.href}
                    href={nav.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(nav.href)
                    }}
                    className={`rounded-xl px-4 py-3 text-[17px] font-semibold tracking-tight transition-all duration-200 ${isActive
                        ? "bg-emerald-300 text-emerald-950"
                        : "text-slate-200 hover:bg-white/10 hover:text-white"
                      }`}
                  >
                    {nav.label}
                  </Link>
                )
              })}
            </div>

            <div className="grid gap-3 border-t border-white/10 pt-5">
              <Show when="signed-in">
                {isAdmin && (
                  <Link
                    href="/admin"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex h-11 items-center justify-center rounded-xl border border-amber-300/30 bg-amber-300/10 text-[17px] font-semibold tracking-tight text-amber-200 transition-all duration-200 hover:bg-amber-300/20"
                  >
                    Admin
                  </Link>
                )}

                <Link
                  href="/auth"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex h-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-[17px] font-semibold tracking-tight text-slate-100 transition-all duration-200 hover:bg-white/12"
                >
                  Dashboard
                </Link>

                <SignOutButton>
                  <button className="inline-flex h-11 items-center justify-center rounded-xl bg-white text-[17px] font-bold tracking-tight text-slate-950 transition-all duration-200 hover:bg-emerald-100">
                    Sign out
                  </button>
                </SignOutButton>
              </Show>

              <Show when="signed-out">
                <Link
                  href="/sign-in"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex h-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-[17px] font-semibold tracking-tight text-slate-100 transition-all duration-200 hover:bg-white/12"
                >
                  Sign In
                </Link>

                <Link
                  href="/sign-up"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex h-11 items-center justify-center rounded-xl bg-emerald-300 text-[17px] font-bold tracking-tight text-emerald-950 transition-all duration-200 hover:bg-emerald-200"
                >
                  Start free
                </Link>
              </Show>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar