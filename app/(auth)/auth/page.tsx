"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

import { useGetAccountStatus } from "@/hooks/account"

const AuthPage = () => {
    const router = useRouter()
    const { data, isLoading, isError } = useGetAccountStatus()

    useEffect(() => {
        if (!data) return

        if (data.nextAction === "create_account") {
            router.replace("/onboard")
            return
        }

        if (data.nextAction === "dashboard") {
            router.replace("/user")
            return
        }

        if (data.nextAction === "billing") {
            router.replace("/billing")
            return
        }

        router.replace("/sign-in")
    }, [data, router])

    if (isLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                Loading...
            </div>
        )
    }

    if (isError) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center gap-3">
                <h1 className="text-lg font-semibold">Something went wrong</h1>
                <p className="text-sm text-slate-500">Please try again.</p>
            </div>
        )
    }

    return null
}

export default AuthPage