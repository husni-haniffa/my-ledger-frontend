// features/orders/view-orders/OrderPaymentActions.tsx

"use client"

import { Button } from "@/components/ui/button"
import { Order, PaymentStatus } from "@/types/order"
import { useUpdateOrderPaymentStatus } from "@/hooks/order"

interface OrderPaymentActionsProps {
    order: Order
}

const OrderPaymentActions = ({ order }: OrderPaymentActionsProps) => {
    const updatePayment = useUpdateOrderPaymentStatus()

    const handleUpdate = (payment_status: PaymentStatus) => {
        updatePayment.mutate({
            id: String(order.id),
            payload: { payment_status },
        })
    }

    if (order.payment_status === "refunded") {
        return <span className="text-sm text-slate-500">Refunded</span>
    }

    if (order.status === "cancelled" || order.status === "returned") {
        if (order.payment_status === "paid") {
            return (
                <Button
                    size="sm"
                    variant="outline"
                    disabled={updatePayment.isPending}
                    onClick={() => handleUpdate("refunded")}
                >
                    Mark Refunded
                </Button>
            )
        }

        return <span className="text-sm text-slate-500">No payment action</span>
    }

    if (order.status === "delivered") {
        if (order.payment_status === "pending") {
            return (
                <Button
                    size="sm"
                    variant="outline"
                    disabled={updatePayment.isPending}
                    onClick={() => handleUpdate("paid")}
                >
                    Mark Paid
                </Button>
            )
        }

        if (order.payment_status === "paid") {
            return (
                <Button
                    size="sm"
                    variant="outline"
                    disabled={updatePayment.isPending}
                    onClick={() => handleUpdate("refunded")}
                >
                    Mark Refunded
                </Button>
            )
        }
    }

    if (order.status === "pending" || order.status === "processing") {
        if (order.payment_status === "pending") {
            return (
                <Button
                    size="sm"
                    variant="outline"
                    disabled={updatePayment.isPending}
                    onClick={() => handleUpdate("paid")}
                >
                    Mark Paid
                </Button>
            )
        }

        if (order.payment_status === "paid") {
            return (
                <Button
                    size="sm"
                    variant="outline"
                    disabled={updatePayment.isPending}
                    onClick={() => handleUpdate("pending")}
                >
                    Mark Pending
                </Button>
            )
        }
    }

    return null
}

export default OrderPaymentActions