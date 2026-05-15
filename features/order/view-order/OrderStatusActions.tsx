"use client"

import Link from "next/link"
import { Download, Pencil, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
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

    return (
        <div
            className={
                align === "desktop"
                    ? "flex justify-end gap-2"
                    : "flex flex-wrap gap-2"
            }
        >
            <Button asChild size="sm" variant="outline">
                <Link href={`/user/orders/${order.id}/invoice`}>
                    <Download className="mr-2 size-4" />
                    Invoice
                </Link>
            </Button>

            {isPending && (
                <>
                    <Button asChild size="sm" variant="outline">
                        <Link href={`/user/orders/${order.id}/edit`}>
                            <Pencil className="mr-2 size-4" />
                            Edit
                        </Link>
                    </Button>

                    <Button
                        size="sm"
                        variant="outline"
                        disabled={updateStatus.isPending}
                        onClick={() => handleStatusUpdate("processing")}
                    >
                        Start Processing
                    </Button>

                    <Button
                        size="sm"
                        variant="destructive"
                        disabled={deleteOrder.isPending}
                        onClick={handleDelete}
                    >
                        <Trash className="mr-2 size-4" />
                        Delete
                    </Button>
                </>
            )}

            {order.status === "processing" && (
                <>
                    <Button
                        size="sm"
                        variant="outline"
                        disabled={updateStatus.isPending}
                        onClick={() => handleStatusUpdate("delivered")}
                    >
                        Mark Delivered
                    </Button>

                    <Button
                        size="sm"
                        variant="destructive"
                        disabled={updateStatus.isPending}
                        onClick={() => handleStatusUpdate("cancelled")}
                    >
                        Cancel
                    </Button>
                </>
            )}

            {order.status === "delivered" && (
                <Button
                    size="sm"
                    variant="outline"
                    disabled={updateStatus.isPending}
                    onClick={() => handleStatusUpdate("returned")}
                >
                    Mark Returned
                </Button>
            )}
        </div>
    )
}

export default OrderStatusActions