"use client"

import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"

import { useCreateOrder } from "@/hooks/order"
import { useGetInventoryList } from "@/hooks/inventory"

import { useOrderStore } from "@/store/order"

const formatCurrency = (value: number) => {
    return `Rs. ${value.toLocaleString()}`
}

const ReviewOrderStep = () => {
    const router = useRouter()

    const createOrder = useCreateOrder()

    const inventory = useGetInventoryList()

    const store = useOrderStore()

    const selectedProducts =
        inventory.data?.data?.filter((product) =>
            store.items.some(
                (item) => item.inventory_id === product.id
            )
        ) ?? []

    const subtotal = selectedProducts.reduce((acc, product) => {
        const item = store.items.find(
            (i) => i.inventory_id === product.id
        )

        if (!item) return acc

        return (
            acc +
            Number(product.selling_price) * item.quantity
        )
    }, 0)

    const discountValue = Number(store.discount_value || 0)

    const deliveryFee = Number(store.delivery_fee || 0)

    const discountAmount =
        store.discount_type === "percentage"
            ? subtotal * (discountValue / 100)
            : store.discount_type === "fixed"
                ? discountValue
                : 0

    const total = Math.max(
        subtotal - discountAmount + deliveryFee,
        0
    )

    const handleCreateOrder = async () => {
        await createOrder.mutateAsync({
            customer_name: store.customer_name,
            customer_phone: store.customer_phone,
            customer_address: store.customer_address,

            payment_status: store.payment_status,
            payment_method: store.payment_method,
            source: store.source,

            discount_type: store.discount_type,
            discount_value: store.discount_value,

            delivery_fee: store.delivery_fee,

            notes: store.notes,

            items: store.items,
        })

        store.resetOrder()

        router.push("/user/orders")
    }

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-lg font-semibold text-slate-900">
                    Review Order
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    Review products, customer details, and totals before
                    creating the order.
                </p>
            </div>

            <div className="rounded-2xl border">
                <div className="border-b p-4">
                    <h3 className="font-semibold text-slate-900">
                        Products
                    </h3>
                </div>

                <div className="divide-y">
                    {selectedProducts.map((product) => {
                        const item = store.items.find(
                            (i) => i.inventory_id === product.id
                        )

                        if (!item) return null

                        return (
                            <div
                                key={product.id}
                                className="flex items-center justify-between gap-4 p-4"
                            >
                                <div>
                                    <h4 className="font-medium text-slate-900">
                                        {product.name}
                                    </h4>

                                    <p className="text-sm text-slate-500">
                                        {item.quantity} ×{" "}
                                        {formatCurrency(
                                            Number(product.selling_price)
                                        )}
                                    </p>
                                </div>

                                <p className="font-semibold text-slate-900">
                                    {formatCurrency(
                                        Number(product.selling_price) *
                                        item.quantity
                                    )}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
                <div className="rounded-2xl border p-4">
                    <h3 className="font-semibold text-slate-900">
                        Customer Details
                    </h3>

                    <div className="mt-4 space-y-2 text-sm">
                        <div className="flex justify-between gap-4">
                            <span className="text-slate-500">Customer</span>

                            <span className="font-medium text-slate-900">
                                {store.customer_name || "Guest"}
                            </span>
                        </div>

                        <div className="flex justify-between gap-4">
                            <span className="text-slate-500">Phone</span>

                            <span className="font-medium text-slate-900">
                                {store.customer_phone || "-"}
                            </span>
                        </div>

                        <div className="flex justify-between gap-4">
                            <span className="text-slate-500">Source</span>

                            <span className="font-medium text-slate-900">
                                {store.source}
                            </span>
                        </div>

                        <div className="flex justify-between gap-4">
                            <span className="text-slate-500">
                                Payment Status
                            </span>

                            <span className="font-medium text-slate-900">
                                {store.payment_status}
                            </span>
                        </div>

                        <div className="flex justify-between gap-4">
                            <span className="text-slate-500">
                                Payment Method
                            </span>

                            <span className="font-medium text-slate-900">
                                {store.payment_method}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="rounded-2xl border bg-slate-50 p-4">
                    <h3 className="font-semibold text-slate-900">
                        Order Summary
                    </h3>

                    <div className="mt-4 space-y-3 text-sm">
                        <div className="flex items-center justify-between">
                            <span>Subtotal</span>

                            <span>{formatCurrency(subtotal)}</span>
                        </div>

                        <div className="flex items-center justify-between">
                            <span>Discount</span>

                            <span>
                                - {formatCurrency(discountAmount)}
                            </span>
                        </div>

                        <div className="flex items-center justify-between">
                            <span>Delivery Fee</span>

                            <span>
                                {formatCurrency(deliveryFee)}
                            </span>
                        </div>

                        <div className="flex items-center justify-between border-t pt-3 text-base font-semibold">
                            <span>Total</span>

                            <span>{formatCurrency(total)}</span>
                        </div>
                    </div>
                </div>
            </div>

            {store.notes && (
                <div className="rounded-2xl border p-4">
                    <h3 className="font-semibold text-slate-900">
                        Notes
                    </h3>

                    <p className="mt-2 text-sm text-slate-600">
                        {store.notes}
                    </p>
                </div>
            )}

            <div className="flex items-center justify-between">
                <Button
                    type="button"
                    variant="outline"
                    onClick={() => store.setStep(2)}
                >
                    Back
                </Button>

                <Button
                    disabled={createOrder.isPending}
                    onClick={handleCreateOrder}
                >
                    {createOrder.isPending
                        ? "Creating..."
                        : "Create Order"}
                </Button>
            </div>
        </div>
    )
}

export default ReviewOrderStep