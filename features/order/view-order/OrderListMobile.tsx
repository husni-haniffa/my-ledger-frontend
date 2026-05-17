"use client"

import { Order } from "@/types/order"
import OrderStatusActions from "./OrderStatusActions"
import OrderPaymentActions from "./OrderPaymentAction"

interface OrdersMobileCardsProps {
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

const OrdersMobileCards = ({ orders }: OrdersMobileCardsProps) => {
    return (
        <div className="grid gap-3 p-4 md:hidden">
            {orders.map((order) => (
                <div
                    key={order.id}
                    className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                    <div className="flex items-start justify-between gap-3">
                        <div>
                            <h2 className="text-lg font-bold tracking-tight text-slate-950">
                                {order.order_number}
                            </h2>

                            <p className="mt-1 text-sm font-semibold text-slate-500">
                                {order.customer_name || "Guest customer"}
                            </p>

                            {order.customer_phone && (
                                <p className="mt-1 text-sm font-medium text-slate-500">
                                    {order.customer_phone}
                                </p>
                            )}
                        </div>

                        <span
                            className={`rounded-full px-3 py-1 text-sm font-bold capitalize ${statusStyles[order.status] ?? "bg-slate-100 text-slate-700"
                                }`}
                        >
                            {formatText(order.status)}
                        </span>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3">
                        <div className="rounded-2xl bg-slate-50 p-3">
                            <p className="text-sm font-semibold text-slate-500">Total</p>

                            <p className="mt-1 text-lg font-bold text-slate-950">
                                Rs. {Number(order.total_amount).toLocaleString()}
                            </p>
                        </div>

                        <div className="rounded-2xl bg-slate-50 p-3">
                            <p className="text-sm font-semibold text-slate-500">Payment</p>

                            <span
                                className={`mt-2 inline-flex rounded-full px-3 py-1 text-sm font-bold capitalize ${paymentStyles[order.payment_status] ??
                                    "bg-slate-100 text-slate-700"
                                    }`}
                            >
                                {formatText(order.payment_status)}
                            </span>
                        </div>
                    </div>

                    <div className="mt-4 rounded-2xl bg-slate-50 p-3">
                        <p className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-500">
                            Order workflow
                        </p>

                        <OrderStatusActions order={order} align="mobile" />
                    </div>

                    <div className="mt-3 rounded-2xl bg-slate-50 p-3">
                        <p className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-500">
                            Payment
                        </p>

                        <OrderPaymentActions order={order} align="mobile" />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default OrdersMobileCards