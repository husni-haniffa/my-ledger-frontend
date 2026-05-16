// features/admin/users/AdminUsersPage.tsx

"use client"

import { useGetAdminUsers } from "@/hooks/admin"

const AdminUsersPage = () => {
    const { data, isLoading, isError } = useGetAdminUsers()

    if (isLoading) return <p>Loading users...</p>
    if (isError || !data) return <p>Failed to load users</p>

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-slate-900">Users & Stores</h1>
                <p className="mt-1 text-sm text-slate-500">
                    View MyLedger customers, stores, and subscription state.
                </p>
            </div>

            <div className="overflow-hidden rounded-2xl border bg-white">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[900px]">
                        <thead className="border-b bg-slate-50">
                            <tr>
                                <th className="p-4 text-left text-sm font-medium text-slate-500">
                                    Store
                                </th>
                                <th className="p-4 text-left text-sm font-medium text-slate-500">
                                    Owner
                                </th>
                                <th className="p-4 text-left text-sm font-medium text-slate-500">
                                    Store Status
                                </th>
                                <th className="p-4 text-left text-sm font-medium text-slate-500">
                                    Subscription
                                </th>
                                <th className="p-4 text-left text-sm font-medium text-slate-500">
                                    Plan
                                </th>
                                <th className="p-4 text-left text-sm font-medium text-slate-500">
                                    Period End
                                </th>
                                <th className="p-4 text-left text-sm font-medium text-slate-500">
                                    Latest Payment
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.data.map((item) => (
                                <tr key={item.store_id} className="border-b last:border-b-0">
                                    <td className="p-4">
                                        <p className="font-medium text-slate-900">
                                            {item.store_name}
                                        </p>
                                        <p className="text-sm text-slate-500">
                                            {item.store_email || "-"}
                                        </p>
                                    </td>

                                    <td className="p-4 text-sm text-slate-700">
                                        {item.user?.email || "-"}
                                    </td>

                                    <td className="p-4">
                                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                                            {item.store_status}
                                        </span>
                                    </td>

                                    <td className="p-4">
                                        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                                            {item.subscription?.status || "none"}
                                        </span>
                                    </td>

                                    <td className="p-4 text-sm text-slate-700">
                                        {item.subscription?.plans?.name || "-"}
                                    </td>

                                    <td className="p-4 text-sm text-slate-700">
                                        {item.subscription?.current_period_end
                                            ? new Date(
                                                item.subscription.current_period_end
                                            ).toLocaleDateString()
                                            : "-"}
                                    </td>

                                    <td className="p-4 text-sm text-slate-700">
                                        {item.latest_payment
                                            ? `${item.latest_payment.currency} ${Number(
                                                item.latest_payment.amount
                                            ).toLocaleString()} (${item.latest_payment.status})`
                                            : "-"}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AdminUsersPage