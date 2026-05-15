"use client"

import Link from "next/link"
import { Order } from "@/types/order"
import OrderStatusActions from "./OrderStatusActions"
import OrderPaymentActions from "./OrderPaymentAction"


interface OrdersTableProps {
    orders: Order[]
}

const OrdersTable = ({ orders }: OrdersTableProps) => {
    return (
        <div className="hidden overflow-hidden rounded-2xl border bg-white md:block">
            <table className="w-full">
                <thead className="border-b bg-slate-50">
                    <tr>
                        <th className="p-4 text-left text-sm font-medium text-slate-500">
                            Order
                        </th>
                        <th className="p-4 text-left text-sm font-medium text-slate-500">
                            Customer
                        </th>
                        <th className="p-4 text-left text-sm font-medium text-slate-500">
                            Total
                        </th>
                        <th className="p-4 text-left text-sm font-medium text-slate-500">
                            Status
                        </th>
                        <th className="p-4 text-left text-sm font-medium text-slate-500">
                            Payment
                        </th>
                        <th className="p-4 text-right text-sm font-medium text-slate-500">
                            Actions
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id} className="border-b last:border-b-0">
                            <td className="p-4">
                                <h1
                                    className="font-semibold text-slate-900"
                                >
                                    {order.order_number}
                                </h1>
                            </td>

                            <td className="p-4 text-slate-700">
                                {order.customer_name || "Guest"}
                            </td>

                            <td className="p-4 text-slate-700">
                                Rs. {Number(order.total_amount).toLocaleString()}
                            </td>

                            <td className="p-4">
                                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                                    {order.status}
                                </span>
                            </td>

                            <td className="p-4">
                                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                                    {order.payment_status}
                                </span>
                            </td>

                            <td className="p-4">
                                <OrderStatusActions order={order} align="desktop" />
                            </td>
                            <td className="p-4">
                                <OrderPaymentActions order={order} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default OrdersTable