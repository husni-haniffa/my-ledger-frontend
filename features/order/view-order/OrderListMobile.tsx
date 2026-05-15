"use client"
import { Order } from "@/types/order"
import OrderStatusActions from "./OrderStatusActions"
import OrderPaymentActions from "./OrderPaymentAction"


interface OrdersMobileCardsProps {
    orders: Order[]
}

const OrdersMobileCards = ({ orders }: OrdersMobileCardsProps) => {
    return (
        <div className="space-y-4 md:hidden">
            {orders.map((order) => (
                <div key={order.id} className="rounded-2xl border bg-white p-4">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h1
                                className="font-semibold text-slate-900"
                            >
                                {order.order_number}
                            </h1>

                            <p className="mt-1 text-sm text-slate-500">
                                {order.customer_name || "Guest"}
                            </p>
                        </div>

                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                            {order.status}
                        </span>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                        <div>
                            <p className="text-slate-500">Total</p>
                            <p className="font-medium text-slate-900">
                                Rs. {Number(order.total_amount).toLocaleString()}
                            </p>
                        </div>

                        <div>
                            <p className="text-slate-500">Payment</p>
                            <p className="font-medium text-slate-900">
                                {order.payment_status}
                            </p>
                        </div>
                    </div>

                    <div className="mt-4">
                        <OrderStatusActions order={order} align="mobile" />
                    </div>
                    <div className="mt-4">
                        <OrderPaymentActions order={order} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default OrdersMobileCards