"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { SignOutButton } from "@clerk/nextjs"

import UserSidebar from "@/components/shared/UserSidebar"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"

import { useGetAccountStatus } from "@/hooks/account"

export default function UserLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const router = useRouter()
    const { data, isLoading, isError } = useGetAccountStatus()

    useEffect(() => {
        if (!data) return

        if (data.nextAction === "create_account") {
            router.replace("/onboard")
            return
        }

        if (data.nextAction === "billing") {
            router.replace("/billing")
            return
        }

        if (data.nextAction !== "dashboard") {
            router.replace("/sign-in")
        }
    }, [data, router])

    if (isLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-slate-50 text-[18px] font-semibold text-slate-600">
                Loading...
            </div>
        )
    }

    if (isError) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-slate-50 text-[18px] font-semibold text-red-600">
                Something went wrong
            </div>
        )
    }

    if (!data?.hasAccess) {
        return null
    }

    return (
        <SidebarProvider>
            <UserSidebar />

            <SidebarInset className="min-h-screen bg-slate-50">
                <nav className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
                    <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center gap-3">
                            <SidebarTrigger className="rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50" />

                            <div>
                                <p className="text-[18px] font-bold tracking-tight text-slate-950">
                                    Dashboard
                                </p>
                                <p className="hidden text-[14px] font-semibold text-slate-500 sm:block">
                                    Manage your business from one place
                                </p>
                            </div>
                        </div>

                        <SignOutButton>
                            <button className="hidden h-10 items-center justify-center rounded-full bg-slate-950 px-5 text-[16px] font-bold tracking-tight text-white transition-all duration-200 hover:bg-slate-800 md:inline-flex">
                                Sign out
                            </button>
                        </SignOutButton>
                    </div>
                </nav>

                <main className="px-4 py-6 sm:px-6 lg:px-8">{children}</main>
            </SidebarInset>
        </SidebarProvider>
    )
}