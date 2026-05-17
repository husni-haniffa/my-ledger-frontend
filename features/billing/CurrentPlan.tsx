"use client"

import { useGetCurrentPlan } from "@/hooks/billing"
import { CalendarDays, CreditCard, RefreshCcw } from "lucide-react"

const CurrentPlan = () => {
    const { data, isLoading, isError } = useGetCurrentPlan()

    if (isLoading) {
        return (
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-base font-semibold text-slate-500">Loading plan...</p>
            </div>
        )
    }

    if (isError) {
        return (
            <div className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm">
                <p className="text-base font-semibold text-red-600">
                    Failed to load current plan.
                </p>
            </div>
        )
    }

    const plan = data?.data?.plans
    const sub = data?.data

    if (!sub || !plan) {
        return (
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-base font-semibold text-slate-500">
                    No active plan found.
                </p>
            </div>
        )
    }

    const formatDate = (date: string) =>
        new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        })

    const statusColor: Record<string, string> = {
        active: "bg-emerald-50 text-emerald-700 border-emerald-100",
        trialing: "bg-blue-50 text-blue-700 border-blue-100",
        cancelled: "bg-red-50 text-red-700 border-red-100",
        past_due: "bg-amber-50 text-amber-700 border-amber-100",
    }

    const isTrialing = sub.status === "trialing"

    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 border-b border-slate-100 pb-6 sm:flex-row sm:items-start sm:justify-between">
                <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-emerald-600">
                        Current plan
                    </p>

                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 capitalize">
                        {plan.name}
                    </h2>

                    <p className="mt-2 text-base font-medium text-slate-600 capitalize">
                        {plan.billing_period} billing
                    </p>
                </div>

                <span
                    className={`w-fit rounded-full border px-3 py-1 text-sm font-bold capitalize ${statusColor[sub.status] ?? "border-slate-100 bg-slate-100 text-slate-600"
                        }`}
                >
                    {sub.status}
                </span>
            </div>

            <div className="py-6">
                <p className="text-sm font-semibold text-slate-500">Plan price</p>

                <p className="mt-1 text-3xl font-bold tracking-tight text-slate-950">
                    {plan.currency.toUpperCase()} {plan.price}
                    <span className="ml-2 text-base font-semibold text-slate-500">
                        / {plan.billing_period}
                    </span>
                </p>
            </div>

            {isTrialing && sub.trial_end && (
                <div className="mb-6 rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3">
                    <p className="text-base font-semibold leading-7 text-blue-700">
                        You&apos;re on a free trial. It ends on{" "}
                        <span className="font-bold">{formatDate(sub.trial_end)}</span>.
                    </p>
                </div>
            )}

            <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <CalendarDays className="size-5 text-emerald-600" />
                    <p className="mt-3 text-sm font-semibold text-slate-500">
                        Current period
                    </p>
                    <p className="mt-1 text-base font-bold text-slate-900">
                        {formatDate(sub.current_period_start)} —{" "}
                        {formatDate(sub.current_period_end)}
                    </p>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <RefreshCcw className="size-5 text-emerald-600" />
                    <p className="mt-3 text-sm font-semibold text-slate-500">
                        Next renewal
                    </p>
                    <p className="mt-1 text-base font-bold text-slate-900">
                        {sub.cancelled_at
                            ? "Cancelled — won't renew"
                            : formatDate(sub.current_period_end)}
                    </p>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 sm:col-span-2">
                    <CreditCard className="size-5 text-emerald-600" />
                    <p className="mt-3 text-sm font-semibold text-slate-500">
                        Plan reference
                    </p>
                    <p className="mt-1 text-base font-bold uppercase text-slate-900">
                        {plan.slug}
                    </p>
                </div>

                {sub.cancelled_at && (
                    <div className="rounded-2xl border border-red-100 bg-red-50 p-4 sm:col-span-2">
                        <CalendarDays className="size-5 text-red-600" />
                        <p className="mt-3 text-sm font-semibold text-red-500">
                            Cancelled on
                        </p>
                        <p className="mt-1 text-base font-bold text-red-700">
                            {formatDate(sub.cancelled_at)}
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CurrentPlan