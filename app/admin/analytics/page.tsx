// features/admin/analytics/AdminAnalyticsPage.tsx

"use client"

import AdminMetricCard from "@/features/admin/AdminMetricCard"
import { useGetAdminAnalytics } from "@/hooks/admin"


const formatCurrency = (value: number) => {
    return `Rs. ${Number(value || 0).toLocaleString()}`
}

const formatPercent = (value: number) => {
    return `${Number(value || 0).toFixed(1)}%`
}

const AdminAnalyticsPage = () => {
    const { data, isLoading, isError } = useGetAdminAnalytics()

    if (isLoading) return <p>Loading analytics...</p>
    if (isError || !data) return <p>Failed to load analytics</p>

    const analytics = data.data
    const revenueByMonth = analytics.revenueByMonth ?? []
    const signupsByMonth = analytics.signupsByMonth ?? []
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-slate-900">Analytics</h1>
                <p className="mt-1 text-sm text-slate-500">
                    Track SaaS revenue, subscriptions, conversion, and churn.
                </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                <AdminMetricCard
                    title="MRR"
                    value={formatCurrency(analytics.mrr)}
                    description="Estimated monthly recurring revenue"
                />

                <AdminMetricCard
                    title="Conversion Rate"
                    value={formatPercent(analytics.conversionRate)}
                    description="Active paid users from total subscriptions"
                />

                <AdminMetricCard
                    title="Churn Rate"
                    value={formatPercent(analytics.churnRate)}
                    description="Expired/cancelled users from paid lifecycle"
                />
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-2xl border bg-white p-5 shadow-sm">
                    <h2 className="font-semibold text-slate-900">Revenue by Month</h2>

                    <div className="mt-4 space-y-3">
                        {revenueByMonth.length === 0 ? (
                            <p className="text-sm text-slate-500">No revenue data yet</p>
                        ) : (
                            revenueByMonth.map((item) => (
                                <div key={item.month} className="flex justify-between text-sm">
                                    <span className="text-slate-500">{item.month}</span>
                                    <span className="font-medium text-slate-900">
                                        {formatCurrency(item.revenue)}
                                    </span>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                <div className="rounded-2xl border bg-white p-5 shadow-sm">
                    <h2 className="font-semibold text-slate-900">Signups by Month</h2>

                    <div className="mt-4 space-y-3">
                        {signupsByMonth.length === 0 ? (
                            <p className="text-sm text-slate-500">No signup data yet</p>
                        ) : (
                            signupsByMonth.map((item) => (
                                <div key={item.month} className="flex justify-between text-sm">
                                    <span className="text-slate-500">{item.month}</span>
                                    <span className="font-medium text-slate-900">{item.count}</span>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminAnalyticsPage