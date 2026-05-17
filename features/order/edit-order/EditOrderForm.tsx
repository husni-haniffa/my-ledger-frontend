"use client"

import { useRouter } from "next/navigation"

import SelectProductsStep from "../add-order/SelectProductsStep"
import CustomerDetailsStep from "../add-order/CustomerDetailStep"

import { useGetInventoryList } from "@/hooks/inventory"
import { useUpdateOrder } from "@/hooks/order"
import { useOrderStore } from "@/store/order"

interface EditOrderFormProps {
    id: string
}

const formatCurrency = (value: number) => {
    return `Rs. ${value.toLocaleString()}`
}

const formatText = (value: string) => value.replace("_", " ")

const EditOrderForm = ({ id }: EditOrderFormProps) => {
    const router = useRouter()

    const store = useOrderStore()
    const inventory = useGetInventoryList()
    const updateOrder = useUpdateOrder(id)

    const selectedProducts =
        inventory.data?.data?.filter((product) =>
            store.items.some((item) => item.inventory_id === product.id)
        ) ?? []

    const subtotal = selectedProducts.reduce((acc, product) => {
        const item = store.items.find((i) => i.inventory_id === product.id)
        if (!item) return acc

        return acc + Number(product.selling_price) * item.quantity
    }, 0)

    const discountValue = Number(store.discount_value || 0)
    const deliveryFee = Number(store.delivery_fee || 0)

    const discountAmount =
        store.discount_type === "percentage"
            ? subtotal * (discountValue / 100)
            : store.discount_type === "fixed"
                ? discountValue
                : 0

    const total = Math.max(subtotal - discountAmount + deliveryFee, 0)

    const handleUpdateOrder = async () => {
        await updateOrder.mutateAsync({
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

    if (store.currentStep === 1) return <SelectProductsStep />

    if (store.currentStep === 2) return <CustomerDetailsStep />

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                    Review your changes
                </h2>

                <p className="mt-2 max-w-2xl text-base font-medium leading-7 text-slate-600">
                    Check the updated products, customer details, and total before saving
                    this order.
                </p>
            </div>

            <div className="grid gap-6 xl:grid-cols-[1fr_380px]">
                <div className="space-y-4">
                    <div className="rounded-3xl border border-slate-200 bg-white">
                        <div className="border-b border-slate-100 p-5">
                            <h3 className="text-lg font-bold tracking-tight text-slate-950">
                                Products
                            </h3>
                        </div>

                        <div className="divide-y divide-slate-100">
                            {selectedProducts.map((product) => {
                                const item = store.items.find(
                                    (i) => i.inventory_id === product.id
                                )

                                if (!item) return null

                                return (
                                    <div
                                        key={product.id}
                                        className="flex items-center justify-between gap-4 p-5"
                                    >
                                        <div>
                                            <h4 className="font-bold text-slate-950">
                                                {product.name}
                                            </h4>

                                            <p className="mt-1 text-sm font-medium text-slate-500">
                                                {item.quantity} ×{" "}
                                                {formatCurrency(Number(product.selling_price))}
                                            </p>
                                        </div>

                                        <p className="font-bold text-slate-950">
                                            {formatCurrency(
                                                Number(product.selling_price) * item.quantity
                                            )}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-white p-5">
                        <h3 className="text-lg font-bold tracking-tight text-slate-950">
                            Customer details
                        </h3>

                        <div className="mt-4 grid gap-3 text-base">
                            {[
                                ["Customer", store.customer_name || "Guest customer"],
                                ["Phone", store.customer_phone || "-"],
                                ["Source", formatText(store.source)],
                                ["Payment status", formatText(store.payment_status)],
                                ["Payment method", formatText(store.payment_method)],
                            ].map(([label, value]) => (
                                <div
                                    key={label}
                                    className="flex justify-between gap-4 rounded-2xl bg-slate-50 px-4 py-3"
                                >
                                    <span className="font-semibold text-slate-500">{label}</span>
                                    <span className="text-right font-bold capitalize text-slate-950">
                                        {value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {store.notes && (
                        <div className="rounded-3xl border border-slate-200 bg-white p-5">
                            <h3 className="text-lg font-bold tracking-tight text-slate-950">
                                Notes
                            </h3>

                            <p className="mt-2 text-base font-medium leading-7 text-slate-600">
                                {store.notes}
                            </p>
                        </div>
                    )}
                </div>

                <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-5 xl:sticky xl:top-24 xl:self-start">
                    <h3 className="text-xl font-bold tracking-tight text-slate-950">
                        Updated summary
                    </h3>

                    <div className="mt-5 space-y-3 text-base">
                        <div className="flex items-center justify-between">
                            <span className="font-semibold text-slate-600">Subtotal</span>
                            <span className="font-bold text-slate-950">
                                {formatCurrency(subtotal)}
                            </span>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="font-semibold text-slate-600">Discount</span>
                            <span className="font-bold text-red-600">
                                - {formatCurrency(discountAmount)}
                            </span>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="font-semibold text-slate-600">Delivery fee</span>
                            <span className="font-bold text-slate-950">
                                {formatCurrency(deliveryFee)}
                            </span>
                        </div>

                        <div className="border-t border-emerald-200 pt-4">
                            <div className="flex items-center justify-between">
                                <span className="text-lg font-bold text-slate-950">Total</span>
                                <span className="text-2xl font-bold text-emerald-700">
                                    {formatCurrency(total)}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 grid gap-3">
                        <button
                            disabled={updateOrder.isPending}
                            onClick={handleUpdateOrder}
                            className="inline-flex h-12 items-center justify-center rounded-full bg-emerald-600 text-base font-bold text-white hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {updateOrder.isPending ? "Saving changes..." : "Save changes"}
                        </button>

                        <button
                            type="button"
                            onClick={() => store.setStep(2)}
                            className="inline-flex h-11 items-center justify-center rounded-full border border-slate-200 bg-white text-base font-bold text-slate-700 hover:bg-slate-50"
                        >
                            Back to details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditOrderForm