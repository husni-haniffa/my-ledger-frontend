"use client"

import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"

import SelectProductsStep from "../add-order/SelectProductsStep"

import { useGetInventoryList } from "@/hooks/inventory"
import { useUpdateOrder } from "@/hooks/order"
import { useOrderStore } from "@/store/order"
import CustomerDetailsStep from "../add-order/CustomerDetailStep"

interface EditOrderFormProps {
    id: string
}

const formatCurrency = (value: number) => {
    return `Rs. ${value.toLocaleString()}`
}

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

    return (
        <div className="rounded-2xl border bg-white p-4 shadow-sm sm:p-6">
            {store.currentStep === 1 && <SelectProductsStep />}

            {store.currentStep === 2 && <CustomerDetailsStep />}

            {store.currentStep === 3 && (
                <div className="space-y-6">
                    <div>
                        <h2 className="text-lg font-semibold text-slate-900">
                            Review Changes
                        </h2>
                        <p className="mt-1 text-sm text-slate-500">
                            Review the updated order before saving.
                        </p>
                    </div>

                    <div className="rounded-2xl border">
                        <div className="border-b p-4">
                            <h3 className="font-semibold text-slate-900">Products</h3>
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
                                                {formatCurrency(Number(product.selling_price))}
                                            </p>
                                        </div>

                                        <p className="font-semibold text-slate-900">
                                            {formatCurrency(
                                                Number(product.selling_price) * item.quantity
                                            )}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="rounded-2xl border bg-slate-50 p-4">
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>{formatCurrency(subtotal)}</span>
                            </div>

                            <div className="flex justify-between">
                                <span>Discount</span>
                                <span>- {formatCurrency(discountAmount)}</span>
                            </div>

                            <div className="flex justify-between">
                                <span>Delivery Fee</span>
                                <span>{formatCurrency(deliveryFee)}</span>
                            </div>

                            <div className="flex justify-between border-t pt-3 text-base font-semibold">
                                <span>Total</span>
                                <span>{formatCurrency(total)}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => store.setStep(2)}
                        >
                            Back
                        </Button>

                        <Button
                            disabled={updateOrder.isPending}
                            onClick={handleUpdateOrder}
                        >
                            {updateOrder.isPending ? "Saving..." : "Save Changes"}
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default EditOrderForm