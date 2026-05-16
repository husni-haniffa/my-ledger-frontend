// features/admin/payments/AdminPaymentsPage.tsx

"use client"

import { useGetAdminPayments } from "@/hooks/admin"

const AdminPaymentsPage = () => {
    const { data, isLoading, isError } = useGetAdminPayments()

    if (isLoading) return <p>Loading payments...</p>
    if (isError || !data) return <p>Failed to load payments</p>

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-slate-900">Payments</h1>
                <p className="mt-1 text-sm text-slate-500">
                    Track WebXPay SaaS payment attempts and successful payments.
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
                                    Order Ref
                                </th>
                                <th className="p-4 text-left text-sm font-medium text-slate-500">
                                    Gateway Ref
                                </th>
                                <th className="p-4 text-left text-sm font-medium text-slate-500">
                                    Amount
                                </th>
                                <th className="p-4 text-left text-sm font-medium text-slate-500">
                                    Status
                                </th>
                                <th className="p-4 text-left text-sm font-medium text-slate-500">
                                    Created
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.data.map((payment) => (
                                <tr key={payment.id} className="border-b last:border-b-0">
                                    <td className="p-4 text-sm text-slate-700">
                                        {payment.stores?.name || "-"}
                                    </td>

                                    <td className="p-4 text-sm text-slate-700">
                                        {payment.users?.email || "-"}
                                    </td>

                                    <td className="p-4 text-sm text-slate-700">
                                        {payment.order_reference}
                                    </td>

                                    <td className="p-4 text-sm text-slate-700">
                                        {payment.gateway_reference || "-"}
                                    </td>

                                    <td className="p-4 text-sm text-slate-700">
                                        {payment.currency} {Number(payment.amount).toLocaleString()}
                                    </td>

                                    <td className="p-4">
                                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                                            {payment.status}
                                        </span>
                                    </td>

                                    <td className="p-4 text-sm text-slate-700">
                                        {new Date(payment.created_at).toLocaleDateString()}
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

export default AdminPaymentsPage