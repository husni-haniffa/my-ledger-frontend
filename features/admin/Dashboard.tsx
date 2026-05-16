"use client"

import { useGetAdminDashboard } from "@/hooks/admin"
import AdminMetricCard from "./AdminMetricCard"

const formatCurrency = (value: number) => {
    return `Rs. ${Number(value || 0).toLocaleString()}`
}

const AdminDashboardPage = () => {
    const { data, isLoading, isError } = useGetAdminDashboard()

    if (isLoading) return <p>Loading dashboard...</p>
    if (isError || !data) return <p>Failed to load dashboard</p>

    const overview = data.data.overview
    const recent = data.data.recent

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-slate-900">
                    Admin Dashboard
                </h1>
                <p className="mt-1 text-sm text-slate-500">
                    Monitor users, subscriptions, and SaaS payments.
                </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <AdminMetricCard
                    title="Total Users"
                    value={overview.totalUsers}
                    description="Registered MyLedger users"
                />

                <AdminMetricCard
                    title="Total Stores"
                    value={overview.totalStores}
                    description="Created business stores"
                />

                <AdminMetricCard
                    title="Trialing Users"
                    value={overview.trialingUsers}
                    description="Currently on free trial"
                />

                <AdminMetricCard
                    title="Active Paid Users"
                    value={overview.activePaidUsers}
                    description="Users with active subscriptions"
                />

                <AdminMetricCard
                    title="Expired Users"
                    value={overview.expiredUsers}
                    description="Users who need to renew"
                />

                <AdminMetricCard
                    title="Cancelled Users"
                    value={overview.cancelledUsers}
                    description="Cancelled subscriptions"
                />

                <AdminMetricCard
                    title="Total Revenue"
                    value={formatCurrency(overview.totalRevenue)}
                    description="All successful SaaS payments"
                />

                <AdminMetricCard
                    title="This Month Revenue"
                    value={formatCurrency(overview.monthlyRevenue)}
                    description="Successful payments this month"
                />

                <AdminMetricCard
                    title="Pending Payments"
                    value={overview.pendingPayments}
                    description="Payments created but not completed"
                />

                <AdminMetricCard
                    title="Failed Payments"
                    value={overview.failedPayments}
                    description="Failed WebXPay attempts"
                />
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-2xl border bg-white p-5 shadow-sm">
                    <h2 className="font-semibold text-slate-900">Recent Signups</h2>

                    <div className="mt-4 space-y-4">
                        {recent.signups.length === 0 ? (
                            <p className="text-sm text-slate-500">No recent signups</p>
                        ) : (
                            recent.signups.map((signup) => {
                                const store = Array.isArray(signup.stores)
                                    ? signup.stores[0]
                                    : signup.stores

                                return (
                                    <div
                                        key={signup.id}
                                        className="flex items-center justify-between gap-4 border-b pb-3 last:border-b-0 last:pb-0"
                                    >
                                        <div>
                                            <p className="font-medium text-slate-900">
                                                {store?.name || "No store"}
                                            </p>
                                            <p className="text-sm text-slate-500">
                                                {signup.email}
                                            </p>
                                        </div>

                                        <p className="text-xs text-slate-500">
                                            {new Date(signup.created_at).toLocaleDateString()}
                                        </p>
                                    </div>
                                )
                            })
                        )}
                    </div>
                </div>

                <div className="rounded-2xl border bg-white p-5 shadow-sm">
                    <h2 className="font-semibold text-slate-900">Recent Payments</h2>

                    <div className="mt-4 space-y-4">
                        {recent.payments.length === 0 ? (
                            <p className="text-sm text-slate-500">No recent payments</p>
                        ) : (
                            recent.payments.map((payment) => {
                                const store = Array.isArray(payment.stores)
                                    ? payment.stores[0]
                                    : payment.stores

                                return (
                                    <div
                                        key={payment.id}
                                        className="flex items-center justify-between gap-4 border-b pb-3 last:border-b-0 last:pb-0"
                                    >
                                        <div>
                                            <p className="font-medium text-slate-900">
                                                {store?.name || "Unknown store"}
                                            </p>
                                            <p className="text-sm text-slate-500">
                                                {payment.order_reference}
                                            </p>
                                        </div>

                                        <div className="text-right">
                                            <p className="font-semibold text-slate-900">
                                                {formatCurrency(Number(payment.amount))}
                                            </p>
                                            <p className="text-xs text-slate-500">
                                                {payment.status}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboardPage