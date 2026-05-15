"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { SignOutButton } from "@clerk/nextjs"

import UserSidebar from "@/components/shared/UserSidebar"
import { Button } from "@/components/ui/button"
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
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Something went wrong</div>
    }

    if (!data?.hasAccess) {
        return null
    }

    return (
        <SidebarProvider>
            <UserSidebar />

            <SidebarInset className="bg-slate-50">
                <nav className="border-b bg-white">
                    <div className="container flex items-center justify-between py-4">
                        <SidebarTrigger />

                        <SignOutButton>
                            <Button className="bg-emerald-950">
                                Sign out
                            </Button>
                        </SignOutButton>
                    </div>
                </nav>

                <main className="container py-6">{children}</main>
            </SidebarInset>
        </SidebarProvider>
    )
}