"use client"

import Link from "next/link"
import { Download, Pencil, Trash } from "lucide-react"

import { Order, OrderStatus } from "@/types/order"
import { useDeleteOrder, useUpdateOrderStatus } from "@/hooks/order"

interface OrderStatusActionsProps {
    order: Order
    align?: "desktop" | "mobile"
}

const OrderStatusActions = ({
    order,
    align = "desktop",
}: OrderStatusActionsProps) => {
    const updateStatus = useUpdateOrderStatus()
    const deleteOrder = useDeleteOrder()

    const isPending = order.status === "pending"

    const handleStatusUpdate = (status: Exclude<OrderStatus, "pending">) => {
        updateStatus.mutate({
            id: String(order.id),
            payload: { status },
        })
    }

    const handleDelete = () => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this pending order?"
        )

        if (!confirmed) return

        deleteOrder.mutate(String(order.id))
    }

    const buttonBase =
        align === "mobile"
            ? "inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-xl px-3 text-sm font-bold transition-all"
            : "inline-flex h-9 items-center justify-center gap-2 rounded-full px-4 text-sm font-bold transition-all"

    const wrapper =
        align === "mobile"
            ? "grid grid-cols-2 gap-2"
            : "flex flex-wrap justify-end gap-2"

    const outlineButton = `${buttonBase} border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-950`
    const greenButton = `${buttonBase} bg-emerald-50 text-emerald-700 hover:bg-emerald-100`
    const blueButton = `${buttonBase} bg-blue-50 text-blue-700 hover:bg-blue-100`
    const redButton = `${buttonBase} bg-red-50 text-red-600 hover:bg-red-100`
    const amberButton = `${buttonBase} bg-amber-50 text-amber-700 hover:bg-amber-100`

    return (
        <div className={wrapper}>
            <Link href={`/user/orders/${order.id}/invoice`} className={outlineButton}>
                <Download className="size-4" />
                Invoice
            </Link>

            {isPending && (
                <>
                    <Link href={`/user/orders/${order.id}/edit`} className={outlineButton}>
                        <Pencil className="size-4" />
                        Edit
                    </Link>

                    <button
                        className={blueButton}
                        disabled={updateStatus.isPending}
                        onClick={() => handleStatusUpdate("processing")}
                    >
                        Process
                    </button>

                    <button
                        className={redButton}
                        disabled={deleteOrder.isPending}
                        onClick={handleDelete}
                    >
                        <Trash className="size-4" />
                        Delete
                    </button>
                </>
            )}

            {order.status === "processing" && (
                <>
                    <button
                        className={greenButton}
                        disabled={updateStatus.isPending}
                        onClick={() => handleStatusUpdate("delivered")}
                    >
                        Delivered
                    </button>

                    <button
                        className={redButton}
                        disabled={updateStatus.isPending}
                        onClick={() => handleStatusUpdate("cancelled")}
                    >
                        Cancel
                    </button>
                </>
            )}

            {order.status === "delivered" && (
                <button
                    className={amberButton}
                    disabled={updateStatus.isPending}
                    onClick={() => handleStatusUpdate("returned")}
                >
                    Return
                </button>
            )}
        </div>
    )
}

export default OrderStatusActions