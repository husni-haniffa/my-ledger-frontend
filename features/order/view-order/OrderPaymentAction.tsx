"use client"

import { Order, PaymentStatus } from "@/types/order"
import { useUpdateOrderPaymentStatus } from "@/hooks/order"

interface OrderPaymentActionsProps {
    order: Order
    align?: "desktop" | "mobile"
}

const OrderPaymentActions = ({
    order,
    align = "desktop",
}: OrderPaymentActionsProps) => {
    const updatePayment = useUpdateOrderPaymentStatus()

    const handleUpdate = (payment_status: PaymentStatus) => {
        updatePayment.mutate({
            id: String(order.id),
            payload: { payment_status },
        })
    }

    const buttonBase =
        align === "mobile"
            ? "inline-flex h-10 flex-1 items-center justify-center rounded-xl px-3 text-sm font-bold transition-all"
            : "inline-flex h-9 items-center justify-center rounded-full px-4 text-sm font-bold transition-all"

    const neutralButton = `${buttonBase} border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-950`
    const greenButton = `${buttonBase} bg-emerald-50 text-emerald-700 hover:bg-emerald-100`
    const amberButton = `${buttonBase} bg-amber-50 text-amber-700 hover:bg-amber-100`

    const wrapper =
        align === "mobile" ? "grid grid-cols-1 gap-2 sm:grid-cols-2" : "flex justify-end gap-2"

    if (order.payment_status === "refunded") {
        return (
            <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-slate-600">
                Refunded
            </span>
        )
    }

    if (order.status === "cancelled" || order.status === "returned") {
        if (order.payment_status === "paid") {
            return (
                <div className={wrapper}>
                    <button
                        className={amberButton}
                        disabled={updatePayment.isPending}
                        onClick={() => handleUpdate("refunded")}
                    >
                        Mark refunded
                    </button>
                </div>
            )
        }

        return (
            <span className="text-sm font-semibold text-slate-500">
                No payment action
            </span>
        )
    }

    if (order.payment_status === "pending") {
        return (
            <div className={wrapper}>
                <button
                    className={greenButton}
                    disabled={updatePayment.isPending}
                    onClick={() => handleUpdate("paid")}
                >
                    Mark paid
                </button>
            </div>
        )
    }

    if (order.payment_status === "paid") {
        return (
            <div className={wrapper}>
                <button
                    className={neutralButton}
                    disabled={updatePayment.isPending}
                    onClick={() => handleUpdate("pending")}
                >
                    Mark pending
                </button>

                <button
                    className={amberButton}
                    disabled={updatePayment.isPending}
                    onClick={() => handleUpdate("refunded")}
                >
                    Refund
                </button>
            </div>
        )
    }

    return null
}

export default OrderPaymentActions