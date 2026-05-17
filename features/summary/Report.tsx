"use client"

import { useState } from "react"

import { ReportRange } from "@/api/summary"
import { useGetSummary } from "@/hooks/summary"
import AttentionPanel from "./AttentionPanel"
import BusinessHealth from "./BusinessHealth"
import BusinessSnapshot from "./BusinessSnapshot"
import ExpenseBreakdown from "./ExpenseBreakdown"
import ReportHeader from "./ReportHeader"
import SalesPerformance from "./SalesPerformance"
import ReportSkeleton from "./skeleton/ReportSkeleton"

const Report = () => {
    const [range, setRange] = useState<ReportRange>("today")
    const { data, isLoading, isError } = useGetSummary(range)

    if (isLoading) return <ReportSkeleton />

    if (isError || !data?.data) {
        return (
            <div className="rounded-3xl border border-red-100 bg-white p-8 text-center shadow-sm">
                <p className="text-lg font-bold text-red-600">
                    Couldn&apos;t load your dashboard.
                </p>
                <p className="mt-2 text-base font-medium text-slate-500">
                    Please refresh and try again.
                </p>
            </div>
        )
    }

    const report = data.data

    return (
        <section className="space-y-6">
            <ReportHeader range={range} setRange={setRange} />

            <BusinessSnapshot summary={report.summary} />

            <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
                <BusinessHealth summary={report.summary} />
                <ExpenseBreakdown expenses={report.expenses} />
            </div>

            <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
                <AttentionPanel
                    inventory={report.inventory}
                    outstandingPayments={report.summary.outstandingPayments}
                />

                <SalesPerformance
                    products={report.products}
                    sales={report.sales}
                />
            </div>
        </section>
    )
}

export default Report