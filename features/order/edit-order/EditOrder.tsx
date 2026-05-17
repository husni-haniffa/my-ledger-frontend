"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { useGetOrderById } from "@/hooks/order"
import { useOrderStore } from "@/store/order"

import EditOrderForm from "./EditOrderForm"

interface EditOrderProps {
    id: string
}

const steps = [
    {
        id: 1,
        title: "Products",
        description: "Update ordered items",
    },
    {
        id: 2,
        title: "Details",
        description: "Update customer and payment info",
    },
    {
        id: 3,
        title: "Review",
        description: "Check changes before saving",
    },
]

const EditOrder = ({ id }: EditOrderProps) => {
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

    if (isLoading) {
        return (
            <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
                <p className="text-lg font-bold text-slate-950">Loading order...</p>
                <p className="mt-2 text-base font-medium text-slate-500">
                    Getting the order details ready.
                </p>
            </div>
        )
    }

    if (isError || !data?.data) {
        return (
            <div className="rounded-3xl border border-red-100 bg-white p-8 text-center shadow-sm">
                <p className="text-lg font-bold text-red-600">
                    Couldn&apos;t load this order.
                </p>
                <p className="mt-2 text-base font-medium text-slate-500">
                    Please go back and try again.
                </p>
            </div>
        )
    }

    const order = data.data

    if (order.status !== "pending") {
        return (
            <section className="space-y-6">
                <div className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
                    <p className="text-sm font-bold uppercase tracking-wider text-amber-600">
                        Order locked
                    </p>

                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                        This order can&apos;t be edited anymore.
                    </h1>

                    <p className="mt-2 max-w-2xl text-base font-medium leading-7 text-slate-600">
                        Only pending orders can be edited. This order is currently{" "}
                        <span className="font-bold capitalize text-slate-950">
                            {order.status}
                        </span>
                        .
                    </p>

                    <Link
                        href="/user/orders"
                        className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-slate-950 px-6 text-base font-bold text-white transition-all hover:bg-slate-800"
                    >
                        Back to orders
                    </Link>
                </div>
            </section>
        )
    }

    return (
        <section className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-wider text-emerald-600">
                    Edit order
                </p>

                <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                    Update this pending order.
                </h1>

                <p className="mt-2 max-w-2xl text-base font-medium leading-7 text-slate-600">
                    Adjust products, customer details, payment info, or delivery fees
                    before this order moves forward.
                </p>
            </div>

            <div className="grid gap-3 md:grid-cols-3">
                {steps.map((step) => {
                    const isActive = currentStep === step.id
                    const isCompleted = currentStep > step.id

                    return (
                        <div
                            key={step.id}
                            className={cn(
                                "rounded-3xl border bg-white p-5 shadow-sm transition-all",
                                isActive && "border-emerald-200 bg-emerald-50",
                                isCompleted && "border-emerald-100 bg-white"
                            )}
                        >
                            <div
                                className={cn(
                                    "flex size-10 items-center justify-center rounded-2xl text-base font-bold",
                                    currentStep >= step.id
                                        ? "bg-emerald-600 text-white"
                                        : "bg-slate-100 text-slate-500"
                                )}
                            >
                                {step.id}
                            </div>

                            <h3 className="mt-4 text-lg font-bold tracking-tight text-slate-950">
                                {step.title}
                            </h3>

                            <p className="mt-1 text-sm font-medium leading-6 text-slate-500">
                                {step.description}
                            </p>
                        </div>
                    )
                })}
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <EditOrderForm id={id} />
            </div>
        </section>
    )
}

export default EditOrder