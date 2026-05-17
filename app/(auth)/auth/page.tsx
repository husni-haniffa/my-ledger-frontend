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
            <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-4">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.06),transparent_28%)]" />

                <div className="relative w-full max-w-md rounded-[2rem] border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-200/70">
                    <div className="flex flex-col items-center text-center">
                        <div className="flex size-16 items-center justify-center rounded-full bg-emerald-50">
                            <div className="size-7 animate-spin rounded-full border-[3px] border-emerald-200 border-t-emerald-600" />
                        </div>

                        <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-950">
                            Preparing your workspace
                        </h1>

                        <p className="mt-3 text-base font-medium leading-7 text-slate-600">
                            We&apos;re securely checking your account and setting everything
                            up for you.
                        </p>

                        <div className="mt-6 flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-500">
                            Redirecting to your dashboard...
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    if (isError) {
        return (
            <section className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
                <div className="w-full max-w-md rounded-[2rem] border border-red-100 bg-white p-8 text-center shadow-xl">
                    <div className="flex size-16 items-center justify-center rounded-full bg-red-50 mx-auto">
                        <span className="text-2xl">!</span>
                    </div>

                    <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-950">
                        Something went wrong
                    </h1>

                    <p className="mt-3 text-base font-medium leading-7 text-slate-600">
                        We couldn&apos;t verify your account right now. Please try again in
                        a moment.
                    </p>
                </div>
            </section>
        )
    }

    return null
}

export default AuthPage