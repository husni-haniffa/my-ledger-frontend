"use client"

import { useMemo, useState } from "react"
import { Minus, Plus, Search, ShoppingBasket, Trash2 } from "lucide-react"

import { Input } from "@/components/ui/input"
import { useGetInventoryList } from "@/hooks/inventory"
import { useOrderStore } from "@/store/order"

const SelectProductsStep = () => {
    const [search, setSearch] = useState("")

    const { data, isLoading, isError } = useGetInventoryList()

    const items = useOrderStore((state) => state.items)
    const addItem = useOrderStore((state) => state.addItem)
    const removeItem = useOrderStore((state) => state.removeItem)
    const increaseQuantity = useOrderStore((state) => state.increaseQuantity)
    const decreaseQuantity = useOrderStore((state) => state.decreaseQuantity)
    const setQuantity = useOrderStore((state) => state.setQuantity)
    const setStep = useOrderStore((state) => state.setStep)

    const products = data?.data ?? []

    const filteredProducts = useMemo(() => {
        const query = search.trim().toLowerCase()

        if (!query) return products

        return products.filter((product) => {
            return (
                product.name.toLowerCase().includes(query) ||
                (product.category ?? "").toLowerCase().includes(query)
            )
        })
    }, [products, search])

    const selectedProducts = products.filter((product) =>
        items.some((item) => item.inventory_id === product.id)
    )

    const selectedTotal = selectedProducts.reduce((acc, product) => {
        const item = items.find((i) => i.inventory_id === product.id)
        if (!item) return acc

        return acc + Number(product.selling_price) * item.quantity
    }, 0)

    if (isLoading) {
        return (
            <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center">
                <p className="text-lg font-bold text-slate-950">Loading products...</p>
                <p className="mt-2 text-base font-medium text-slate-500">
                    Getting your inventory ready.
                </p>
            </div>
        )
    }

    if (isError) {
        return (
            <div className="rounded-3xl border border-red-100 bg-white p-8 text-center">
                <p className="text-lg font-bold text-red-600">
                    Failed to load products.
                </p>
                <p className="mt-2 text-base font-medium text-slate-500">
                    Please refresh and try again.
                </p>
            </div>
        )
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                        Select products
                    </h2>

                    <p className="mt-2 max-w-2xl text-base font-medium leading-7 text-slate-600">
                        Search your inventory and add the products your customer ordered.
                    </p>
                </div>

                <div className="rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3">
                    <p className="text-sm font-semibold text-emerald-700">
                        Selected total
                    </p>
                    <p className="text-xl font-bold text-emerald-800">
                        Rs. {selectedTotal.toLocaleString()}
                    </p>
                </div>
            </div>

            <div className="relative">
                <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />

                <Input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by product name or category..."
                    className="h-12 rounded-full bg-slate-50 pl-11 text-base font-medium focus-visible:ring-emerald-100"
                />
            </div>

            {items.length > 0 && (
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                    <div className="mb-3 flex items-center justify-between">
                        <h3 className="text-lg font-bold tracking-tight text-slate-950">
                            Selected products
                        </h3>

                        <span className="rounded-full bg-white px-3 py-1 text-sm font-bold text-slate-600">
                            {items.length} selected
                        </span>
                    </div>

                    <div className="grid gap-3 md:grid-cols-2">
                        {selectedProducts.map((product) => {
                            const item = items.find((i) => i.inventory_id === product.id)
                            if (!item) return null

                            return (
                                <div
                                    key={product.id}
                                    className="flex items-center justify-between gap-3 rounded-2xl bg-white p-3"
                                >
                                    <div>
                                        <p className="font-bold text-slate-950">{product.name}</p>
                                        <p className="text-sm font-medium text-slate-500">
                                            {item.quantity} × Rs.{" "}
                                            {Number(product.selling_price).toLocaleString()}
                                        </p>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => removeItem(product.id)}
                                        className="flex size-9 items-center justify-center rounded-full bg-red-50 text-red-600 hover:bg-red-100"
                                    >
                                        <Trash2 className="size-4" />
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )}

            {products.length === 0 ? (
                <div className="flex flex-col items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 px-6 py-14 text-center">
                    <ShoppingBasket className="size-10 text-emerald-600" />
                    <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-950">
                        No products available.
                    </h3>
                    <p className="mt-2 max-w-md text-base font-medium leading-7 text-slate-600">
                        Add inventory products first, then come back to create an order.
                    </p>
                </div>
            ) : (
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {filteredProducts.map((product) => {
                        const selectedItem = items.find(
                            (item) => item.inventory_id === product.id
                        )

                        const isSelected = Boolean(selectedItem)
                        const isOutOfStock = product.stock <= 0
                        const isLowStock = product.stock <= product.low_stock_threshold

                        return (
                            <div
                                key={product.id}
                                className={`rounded-3xl border p-4 transition-all ${isSelected
                                        ? "border-emerald-200 bg-emerald-50"
                                        : "border-slate-200 bg-white hover:border-emerald-100 hover:shadow-sm"
                                    }`}
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <h3 className="text-lg font-bold tracking-tight text-slate-950">
                                            {product.name}
                                        </h3>

                                        <p className="mt-1 text-sm font-semibold text-slate-500">
                                            {product.category || "No category"}
                                        </p>
                                    </div>

                                    {isOutOfStock ? (
                                        <span className="rounded-full bg-red-50 px-3 py-1 text-sm font-bold text-red-600">
                                            Out
                                        </span>
                                    ) : isLowStock ? (
                                        <span className="rounded-full bg-amber-50 px-3 py-1 text-sm font-bold text-amber-700">
                                            Low
                                        </span>
                                    ) : null}
                                </div>

                                <div className="mt-4 grid grid-cols-2 gap-3">
                                    <div className="rounded-2xl bg-slate-50 p-3">
                                        <p className="text-sm font-semibold text-slate-500">
                                            Price
                                        </p>
                                        <p className="mt-1 text-lg font-bold text-slate-950">
                                            Rs. {Number(product.selling_price).toLocaleString()}
                                        </p>
                                    </div>

                                    <div className="rounded-2xl bg-slate-50 p-3">
                                        <p className="text-sm font-semibold text-slate-500">
                                            Stock
                                        </p>
                                        <p className="mt-1 text-lg font-bold text-slate-950">
                                            {product.stock}
                                        </p>
                                    </div>
                                </div>

                                {!isSelected ? (
                                    <button
                                        type="button"
                                        disabled={isOutOfStock}
                                        onClick={() => addItem(product.id)}
                                        className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-2xl bg-emerald-600 text-base font-bold text-white transition-all hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-500"
                                    >
                                        {isOutOfStock ? "Out of stock" : "Add product"}
                                    </button>
                                ) : (
                                    <div className="mt-4 space-y-3">
                                        <div className="flex items-center gap-2">
                                            <button
                                                type="button"
                                                onClick={() => decreaseQuantity(product.id)}
                                                className="flex size-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                                            >
                                                <Minus className="size-4" />
                                            </button>

                                            <Input
                                                type="number"
                                                min={1}
                                                max={product.stock}
                                                value={selectedItem?.quantity ?? 1}
                                                onChange={(e) => {
                                                    const quantity = Number(e.target.value)
                                                    setQuantity(product.id, quantity)
                                                }}
                                                className="h-11 text-center text-base font-bold"
                                            />

                                            <button
                                                type="button"
                                                disabled={
                                                    selectedItem
                                                        ? selectedItem.quantity >= product.stock
                                                        : false
                                                }
                                                onClick={() => increaseQuantity(product.id)}
                                                className="flex size-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                                            >
                                                <Plus className="size-4" />
                                            </button>
                                        </div>

                                        <button
                                            type="button"
                                            onClick={() => removeItem(product.id)}
                                            className="inline-flex h-11 w-full items-center justify-center rounded-2xl bg-white text-base font-bold text-red-600 hover:bg-red-50"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            )}

            <div className="flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm font-semibold text-slate-500">
                    Select at least one product to continue.
                </p>

                <button
                    disabled={items.length === 0}
                    onClick={() => setStep(2)}
                    className="inline-flex h-11 items-center justify-center rounded-full bg-emerald-600 px-6 text-base font-bold text-white transition-all hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-500"
                >
                    Continue to details
                </button>
            </div>
        </div>
    )
}

export default SelectProductsStep