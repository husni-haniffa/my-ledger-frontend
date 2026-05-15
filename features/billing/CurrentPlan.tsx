"use client"
import { useGetCurrentPlan } from "@/hooks/billing"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, CreditCard, RefreshCcw } from "lucide-react"

const CurrentPlan = () => {
    const { data, isLoading, isError } = useGetCurrentPlan()

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Failed to load plan.</div>

    const plan = data?.data?.plans
    const sub = data?.data

    if (!sub || !plan) return <div>No active plan found.</div>

    const formatDate = (date: string) =>
        new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        })

    const statusColor: Record<string, string> = {
        active: "bg-green-100 text-green-700",
        trialing: "bg-blue-100 text-blue-700",
        cancelled: "bg-red-100 text-red-700",
        past_due: "bg-yellow-100 text-yellow-700",
    }

    const isTrialing = sub.status === "trialing"

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg font-semibold">Current Plan</CardTitle>
                <span
                    className={`rounded-full px-3 py-1 text-xs font-medium capitalize ${statusColor[sub.status] ?? "bg-gray-100 text-gray-600"
                        }`}
                >
                    {sub.status}
                </span>
            </CardHeader>

            <CardContent className="space-y-6">
                {/* Plan name & price */}
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-2xl font-bold capitalize">{plan.name}</p>
                        <p className="text-sm text-slate-500 capitalize">
                            {plan.billing_period} billing
                        </p>
                    </div>
                    <div className="text-right">
                        <p className="text-2xl font-bold">
                            {plan.currency.toUpperCase()} {plan.price}
                        </p>
                        <p className="text-sm text-slate-500">per {plan.billing_period}</p>
                    </div>
                </div>

                <hr />

                {/* Trial info */}
                {isTrialing && sub.trial_end && (
                    <div className="rounded-lg bg-blue-50 px-4 py-3 text-sm text-blue-700">
                        🎉 You&apos;re on a free trial — ends on{" "}
                        <span className="font-medium">{formatDate(sub.trial_end)}</span>
                    </div>
                )}

                {/* Billing dates */}
                <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex items-start gap-3">
                        <CalendarDays className="mt-0.5 h-4 w-4 text-slate-400" />
                        <div>
                            <p className="text-xs text-slate-500">Current Period</p>
                            <p className="text-sm font-medium">
                                {formatDate(sub.current_period_start)} —{" "}
                                {formatDate(sub.current_period_end)}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <RefreshCcw className="mt-0.5 h-4 w-4 text-slate-400" />
                        <div>
                            <p className="text-xs text-slate-500">Next Renewal</p>
                            <p className="text-sm font-medium">
                                {sub.cancelled_at
                                    ? "Cancelled — won't renew"
                                    : formatDate(sub.current_period_end)}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <CreditCard className="mt-0.5 h-4 w-4 text-slate-400" />
                        <div>
                            <p className="text-xs text-slate-500">Plan Slug</p>
                            <p className="text-sm font-medium uppercase">{plan.slug}</p>
                        </div>
                    </div>

                    {sub.cancelled_at && (
                        <div className="flex items-start gap-3">
                            <CalendarDays className="mt-0.5 h-4 w-4 text-red-400" />
                            <div>
                                <p className="text-xs text-slate-500">Cancelled On</p>
                                <p className="text-sm font-medium text-red-600">
                                    {formatDate(sub.cancelled_at)}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}

export default CurrentPlan