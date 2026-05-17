import { Inventory } from "@/types/summary"
import { AlertTriangle, WalletCards } from "lucide-react"

interface AttentionPanelProps {
    inventory: Inventory
    outstandingPayments: number
}

const formatCurrency = (value: number) => {
    return `LKR ${Number(value || 0).toLocaleString()}`
}

const AttentionPanel = ({
    inventory,
    outstandingPayments,
}: AttentionPanelProps) => {
    const lowStockItems = inventory.lowStockItems ?? []

    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-wider text-amber-600">
                Attention needed
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                Things to check today.
            </h2>

            <p className="mt-2 text-base font-medium leading-7 text-slate-600">
                These are the areas that may need quick action from you.
            </p>

            <div className="mt-6 grid gap-4">
                <div className="rounded-2xl border border-amber-100 bg-amber-50 p-4">
                    <div className="flex items-start gap-3">
                        <AlertTriangle className="mt-1 size-5 shrink-0 text-amber-700" />

                        <div className="w-full">
                            <p className="text-lg font-bold text-slate-950">
                                Low stock products
                            </p>

                            {lowStockItems.length === 0 ? (
                                <p className="mt-1 text-sm font-medium leading-6 text-slate-600">
                                    Stock looks healthy. No products are below their low-stock
                                    level.
                                </p>
                            ) : (
                                <div className="mt-3 grid gap-2">
                                    {lowStockItems.map((item) => (
                                        <div
                                            key={item.id}
                                            className="flex items-center justify-between rounded-xl bg-white px-3 py-2"
                                        >
                                            <span className="text-sm font-bold text-slate-950">
                                                {item.name}
                                            </span>

                                            <span className="text-sm font-bold text-amber-700">
                                                {item.stock} left
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex items-start gap-3">
                        <WalletCards className="mt-1 size-5 shrink-0 text-slate-700" />

                        <div>
                            <p className="text-lg font-bold text-slate-950">
                                Outstanding payments
                            </p>

                            <p className="mt-1 text-2xl font-bold text-slate-950">
                                {formatCurrency(outstandingPayments)}
                            </p>

                            <p className="mt-1 text-sm font-medium leading-6 text-slate-600">
                                Orders marked unpaid and still waiting to be collected.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AttentionPanel