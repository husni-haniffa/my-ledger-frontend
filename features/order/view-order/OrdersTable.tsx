"use client"

import { Order } from "@/types/order"
import OrderStatusActions from "./OrderStatusActions"
import OrderPaymentActions from "./OrderPaymentAction"

interface OrdersTableProps {
    orders: Order[]
}

const statusStyles: Record<string, string> = {
    pending: "bg-slate-100 text-slate-700",
    processing: "bg-blue-50 text-blue-700",
    delivered: "bg-emerald-50 text-emerald-700",
    cancelled: "bg-red-50 text-red-700",
    returned: "bg-amber-50 text-amber-700",
}

const paymentStyles: Record<string, string> = {
    pending: "bg-amber-50 text-amber-700",
    paid: "bg-emerald-50 text-emerald-700",
    refunded: "bg-slate-100 text-slate-700",
}

const formatText = (value: string) => value.replace("_", " ")

const OrdersTable = ({ orders }: OrdersTableProps) => {
    return (
        <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-245">
                <thead className="border-b border-slate-100 bg-slate-50">
                    <tr>
                        <th className="p-4 text-left text-sm font-bold uppercase tracking-wide text-slate-500">
                            Order
                        </th>
                        <th className="p-4 text-left text-sm font-bold uppercase tracking-wide text-slate-500">
                            Customer
                        </th>
                        <th className="p-4 text-left text-sm font-bold uppercase tracking-wide text-slate-500">
                            Total
                        </th>
                        <th className="p-4 text-left text-sm font-bold uppercase tracking-wide text-slate-500">
                            Status
                        </th>
                        <th className="p-4 text-left text-sm font-bold uppercase tracking-wide text-slate-500">
                            Payment
                        </th>
                        <th className="p-4 text-right text-sm font-bold uppercase tracking-wide text-slate-500">
                            Workflow
                        </th>
                        <th className="p-4 text-right text-sm font-bold uppercase tracking-wide text-slate-500">
                            Payment action
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {orders.map((order) => (
                        <tr
                            key={order.id}
                            className="border-b border-slate-100 transition-colors last:border-b-0 hover:bg-slate-50/80"
                        >
                            <td className="p-4">
                                <p className="font-bold text-slate-950">
                                    {order.order_number}
                                </p>

                                <p className="mt-1 text-sm font-semibold text-slate-500">
                                    {order.source || "Manual"}
                                </p>
                            </td>

                            <td className="p-4">
                                <p className="font-semibold text-slate-800">
                                    {order.customer_name || "Guest customer"}
                                </p>

                                {order.customer_phone && (
                                    <p className="mt-1 text-sm font-medium text-slate-500">
                                        {order.customer_phone}
                                    </p>
                                )}
                            </td>

                            <td className="p-4 font-bold text-slate-950">
                                Rs. {Number(order.total_amount).toLocaleString()}
                            </td>

                            <td className="p-4">
                                <span
                                    className={`inline-flex rounded-full px-3 py-1 text-sm font-bold capitalize ${statusStyles[order.status] ?? "bg-slate-100 text-slate-700"
                                        }`}
                                >
                                    {formatText(order.status)}
                                </span>
                            </td>

                            <td className="p-4">
                                <span
                                    className={`inline-flex rounded-full px-3 py-1 text-sm font-bold capitalize ${paymentStyles[order.payment_status] ??
                                        "bg-slate-100 text-slate-700"
                                        }`}
                                >
                                    {formatText(order.payment_status)}
                                </span>
                            </td>

                            <td className="p-4">
                                <OrderStatusActions order={order} align="desktop" />
                            </td>

                            <td className="p-4">
                                <OrderPaymentActions order={order} align="desktop" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default OrdersTable