"use client"

import Link from "next/link"
import { SignOutButton } from "@clerk/nextjs"
import { usePathname } from "next/navigation"

import {
    BarChart3,
    CreditCard,
    LayoutDashboard,
    LogOut,
    Users,
} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "../ui/sidebar"

const categories = [
    {
        label: "Overview",
        links: [
            {
                label: "Dashboard",
                href: "/admin",
                icon: LayoutDashboard,
            },
            {
                label: "Users",
                href: "/admin/users",
                icon: Users,
            },
            {
                label: "Payments",
                href: "/admin/payments",
                icon: CreditCard,
            },
            {
                label: "Analytics",
                href: "/admin/analytics",
                icon: BarChart3,
            },
        ],
    },
]

const AdminSidebar = () => {
    const pathname = usePathname()
    const { setOpenMobile } = useSidebar()

    const isActiveLink = (href: string) => {
        if (href === "/admin") return pathname === "/admin"
        return pathname.startsWith(href)
    }

    return (
        <Sidebar className="border-r border-slate-200 bg-white">
            <SidebarHeader className="border-b border-slate-200 px-5 py-5">
                <Link
                    href="/"
                    onClick={() => setOpenMobile(false)}
                    className="text-[28px] font-bold tracking-tight text-slate-950"
                >
                    My<span className="text-emerald-600">Ledger</span>
                </Link>

                <p className="mt-1 text-[14px] font-semibold tracking-tight text-slate-500">
                    Platform administration
                </p>
            </SidebarHeader>

            <SidebarContent className="bg-white px-3 py-4">
                {categories.map((category) => (
                    <SidebarGroup key={category.label} className="px-0">
                        <SidebarGroupLabel className="mb-2 px-3 text-[13px] font-bold uppercase tracking-[0.14em] text-slate-400">
                            {category.label}
                        </SidebarGroupLabel>

                        <SidebarMenu className="space-y-1">
                            {category.links.map((link) => {
                                const Icon = link.icon
                                const isActive = isActiveLink(link.href)

                                return (
                                    <SidebarMenuItem key={link.label}>
                                        <SidebarMenuButton
                                            asChild
                                            isActive={isActive}
                                            className={`h-11 rounded-2xl px-3 text-[17px] font-semibold tracking-tight transition-all duration-200 ${isActive
                                                    ? "!bg-emerald-50 !text-emerald-700 shadow-sm"
                                                    : "!text-slate-600 hover:!bg-slate-50 hover:!text-slate-950"
                                                }`}
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={() => setOpenMobile(false)}
                                                className="flex items-center gap-3"
                                            >
                                                <Icon
                                                    className={`size-5 ${isActive ? "text-emerald-600" : "text-slate-400"
                                                        }`}
                                                />

                                                <span>{link.label}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                )
                            })}
                        </SidebarMenu>
                    </SidebarGroup>
                ))}
            </SidebarContent>

            <SidebarFooter className="border-t border-slate-200 bg-white p-4 md:hidden">
                <SignOutButton>
                    <button className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 text-[17px] font-bold tracking-tight text-white transition-all duration-200 hover:bg-slate-800">
                        <LogOut className="size-5" />
                        Sign out
                    </button>
                </SignOutButton>
            </SidebarFooter>
        </Sidebar>
    )
}

export default AdminSidebar