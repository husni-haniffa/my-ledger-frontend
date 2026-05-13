"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { useGetInventoryList } from "@/hooks/inventory"
import { useOrderStore } from "@/store/order"


const SelectProductsStep = () => {
    const { data, isLoading, isError } = useGetInventoryList()

    const items = useOrderStore((state) => state.items)
    const addItem = useOrderStore((state) => state.addItem)
    const removeItem = useOrderStore((state) => state.removeItem)
    const increaseQuantity = useOrderStore((state) => state.increaseQuantity)
    const decreaseQuantity = useOrderStore((state) => state.decreaseQuantity)
    const setQuantity = useOrderStore((state) => state.setQuantity)
    const setStep = useOrderStore((state) => state.setStep)

    if (isLoading) return <p>Loading products...</p>
    if (isError) return <p>Failed to load products</p>

    const products = data?.data ?? []

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-lg font-semibold text-slate-900">
                    Select Products
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                    Choose products and quantities for this order.
                </p>
            </div>

            {products.length === 0 ? (
                <div className="rounded-2xl border bg-slate-50 p-6 text-center">
                    <h3 className="font-semibold text-slate-900">No products found</h3>
                    <p className="mt-1 text-sm text-slate-500">
                        Add inventory products before creating an order.
                    </p>
                </div>
            ) : (
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {products.map((product) => {
                        const selectedItem = items.find(
                            (item) => item.inventory_id === product.id
                        )

                        const isSelected = Boolean(selectedItem)

                        return (
                            <div
                                key={product.id}
                                className="rounded-2xl border bg-white p-4"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="font-semibold text-slate-900">
                                            {product.name}
                                        </h3>

                                        <p className="mt-1 text-sm text-slate-500">
                                            {product.category || "No category"}
                                        </p>
                                    </div>

                                    {product.stock <= product.low_stock_threshold && (
                                        <span className="rounded-full bg-orange-50 px-2.5 py-1 text-xs font-medium text-orange-700">
                                            Low stock
                                        </span>
                                    )}
                                </div>

                                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                                    <div>
                                        <p className="text-slate-500">Price</p>
                                        <p className="font-semibold text-slate-900">
                                            Rs. {Number(product.selling_price).toLocaleString()}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-slate-500">Stock</p>
                                        <p className="font-semibold text-slate-900">
                                            {product.stock}
                                        </p>
                                    </div>
                                </div>

                                {!isSelected ? (
                                    <Button
                                        className="mt-4 w-full"
                                        disabled={product.stock <= 0}
                                        onClick={() => addItem(product.id)}
                                    >
                                        {product.stock <= 0 ? "Out of Stock" : "Add Product"}
                                    </Button>
                                ) : (
                                    <div className="mt-4 space-y-3">
                                        <div className="flex items-center gap-2">
                                            <Button
                                                type="button"
                                                variant="outline"
                                                size="icon"
                                                onClick={() => decreaseQuantity(product.id)}
                                            >
                                                -
                                            </Button>

                                            <Input
                                                type="number"
                                                min={1}
                                                max={product.stock}
                                                value={selectedItem?.quantity ?? 1}
                                                onChange={(e) => {
                                                    const quantity = Number(e.target.value)
                                                    setQuantity(product.id, quantity)
                                                }}
                                                className="text-center"
                                            />

                                            <Button
                                                type="button"
                                                variant="outline"
                                                size="icon"
                                                disabled={
                                                    selectedItem
                                                        ? selectedItem.quantity >= product.stock
                                                        : false
                                                }
                                                onClick={() => increaseQuantity(product.id)}
                                            >
                                                +
                                            </Button>
                                        </div>

                                        <Button
                                            type="button"
                                            variant="outline"
                                            className="w-full"
                                            onClick={() => removeItem(product.id)}
                                        >
                                            Remove
                                        </Button>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            )}

            <div className="flex justify-end">
                <Button disabled={items.length === 0} onClick={() => setStep(2)}>
                    Continue
                </Button>
            </div>
        </div>
    )
}

export default SelectProductsStep