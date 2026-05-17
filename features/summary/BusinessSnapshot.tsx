import { Summary } from "@/types/summary"
import { Banknote, CircleDollarSign, TrendingUp, WalletCards } from "lucide-react"

interface BusinessSnapshotProps {
    summary: Summary
}

const formatCurrency = (value: number) => {
    return `LKR ${Number(value || 0).toLocaleString()}`
}

const cards = [
    {
        key: "revenue",
        label: "Revenue",
        description: "Completed sales in this period.",
        icon: CircleDollarSign,
        className: "border-blue-100 bg-blue-50",
        iconClassName: "bg-blue-100 text-blue-700",
        valueClassName: "text-blue-900",
    },
    {
        key: "grossProfit",
        label: "Gross Profit",
        description: "Profit before business expenses.",
        icon: TrendingUp,
        className: "border-emerald-100 bg-emerald-50",
        iconClassName: "bg-emerald-100 text-emerald-700",
        valueClassName: "text-emerald-900",
    },
    {
        key: "netProfit",
        label: "Net Profit",
        description: "What remains after expenses.",
        icon: Banknote,
        className: "border-slate-200 bg-white",
        iconClassName: "bg-slate-100 text-slate-700",
        valueClassName: "text-slate-950",
    },
    {
        key: "outstandingPayments",
        label: "Outstanding Payments",
        description: "Money still waiting to be collected.",
        icon: WalletCards,
        className: "border-amber-100 bg-amber-50",
        iconClassName: "bg-amber-100 text-amber-700",
        valueClassName: "text-amber-900",
    },
] as const

const BusinessSnapshot = ({ summary }: BusinessSnapshotProps) => {
    return (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {cards.map((card) => {
                const Icon = card.icon
                const value = summary[card.key]

                return (
                    <div
                        key={card.key}
                        className={`rounded-3xl border p-5 shadow-sm ${card.className}`}
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
                                    {card.label}
                                </p>

                                <p
                                    className={`mt-3 text-3xl font-bold tracking-tight ${card.valueClassName}`}
                                >
                                    {formatCurrency(value)}
                                </p>
                            </div>

                            <div
                                className={`flex size-11 items-center justify-center rounded-2xl ${card.iconClassName}`}
                            >
                                <Icon className="size-5" />
                            </div>
                        </div>

                        <p className="mt-4 text-sm font-medium leading-6 text-slate-600">
                            {card.description}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export default BusinessSnapshot