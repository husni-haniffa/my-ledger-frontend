"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import { useGetOrderById } from "@/hooks/order"
import { useOrderStore } from "@/store/order"
import EditOrderForm from "./EditOrderForm"


interface EditOrderPageProps {
    id: string
}

const steps = [
    { id: 1, title: "Products", description: "Edit products" },
    { id: 2, title: "Details", description: "Edit order details" },
    { id: 3, title: "Review", description: "Save changes" },
]

const EditOrder = ({ id }: EditOrderPageProps) => {
    const { data, isLoading, isError } = useGetOrderById(id)

    const currentStep = useOrderStore((state) => state.currentStep)
    const loadOrderForEdit = useOrderStore((state) => state.loadOrderForEdit)
    const resetOrder = useOrderStore((state) => state.resetOrder)

    const loadedRef = useRef(false)

    useEffect(() => {
        if (!data?.data || loadedRef.current) return

        const order = data.data

        loadOrderForEdit({
            customer_name: order.customer_name || "",
            customer_phone: order.customer_phone || "",
            customer_address: order.customer_address || "",
            payment_status: order.payment_status,
            payment_method: order.payment_method,
            source: order.source,
            discount_type: order.discount_type,
            discount_value: String(order.discount_value ?? "0"),
            delivery_fee: String(order.delivery_fee ?? "0"),
            notes: order.notes || "",
            items: order.order_items.map((item) => ({
                inventory_id: Number(item.inventory_id),
                quantity: item.quantity,
            })),
        })

        loadedRef.current = true
    }, [data, loadOrderForEdit])

    useEffect(() => {
        return () => {
            resetOrder()
        }
    }, [resetOrder])

    if (isLoading) return <p>Loading order...</p>
    if (isError || !data?.data) return <p>Failed to load order</p>

    const order = data.data

    if (order.status !== "pending") {
        return (
            <div className="rounded-2xl border bg-white p-6">
                <h1 className="text-xl font-bold text-slate-900">
                    Order cannot be edited
                </h1>

                <p className="mt-2 text-sm text-slate-500">
                    Only pending orders can be edited. This order is currently{" "}
                    <span className="font-medium">{order.status}</span>.
                </p>

                <Button asChild className="mt-5">
                    <Link href="/user/orders">Back to Orders</Link>
                </Button>
            </div>
        )
    }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-slate-900">
                    Edit Order {order.order_number}
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                    Update products, customer details, payment, and discounts.
                </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
                {steps.map((step) => (
                    <div
                        key={step.id}
                        className={cn(
                            "rounded-2xl border bg-white p-4",
                            currentStep >= step.id
                                ? "border-emerald-200 bg-emerald-50"
                                : "border-slate-200"
                        )}
                    >
                        <div
                            className={cn(
                                "flex size-8 items-center justify-center rounded-full text-sm font-semibold",
                                currentStep >= step.id
                                    ? "bg-emerald-600 text-white"
                                    : "bg-slate-100 text-slate-500"
                            )}
                        >
                            {step.id}
                        </div>

                        <h3 className="mt-3 font-semibold text-slate-900">
                            {step.title}
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>

            <EditOrderForm id={id} />
        </div>
    )
}

export default EditOrder