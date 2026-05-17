import { Summary } from "@/types/summary"
import { Activity, ShieldCheck, TrendingDown } from "lucide-react"

interface BusinessHealthProps {
    summary: Summary
}

const formatCurrency = (value: number) => {
    return `LKR ${Number(value || 0).toLocaleString()}`
}

const BusinessHealth = ({ summary }: BusinessHealthProps) => {
    const healthCards = [
        {
            label: "Break-even Sales",
            value: formatCurrency(summary.breakEvenSales),
            description: "Sales needed to cover your fixed costs.",
            icon: Activity,
            className: "bg-slate-50 border-slate-200",
            iconClassName: "bg-slate-100 text-slate-700",
        },
        {
            label: "Margin of Safety",
            value: formatCurrency(summary.marginOfSafety),
            description: "How far your sales are above break-even.",
            icon: ShieldCheck,
            className: "bg-emerald-50 border-emerald-100",
            iconClassName: "bg-emerald-100 text-emerald-700",
        },
        {
            label: "Net Loss",
            value: formatCurrency(summary.netLoss),
            description: "Shows when expenses are higher than profit.",
            icon: TrendingDown,
            className:
                summary.netLoss > 0
                    ? "bg-red-50 border-red-100"
                    : "bg-slate-50 border-slate-200",
            iconClassName:
                summary.netLoss > 0
                    ? "bg-red-100 text-red-700"
                    : "bg-slate-100 text-slate-700",
        },
    ]

    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div>
                <p className="text-sm font-bold uppercase tracking-wider text-emerald-600">
                    Business health
                </p>

                <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                    Understand what the numbers mean.
                </h2>

                <p className="mt-2 text-base font-medium leading-7 text-slate-600">
                    These numbers help you see whether your business is safely covering
                    costs or needs attention.
                </p>
            </div>

            <div className="mt-6 grid gap-4">
                {healthCards.map((card) => {
                    const Icon = card.icon

                    return (
                        <div
                            key={card.label}
                            className={`rounded-2xl border p-4 ${card.className}`}
                        >
                            <div className="flex items-start gap-4">
                                <div
                                    className={`flex size-10 shrink-0 items-center justify-center rounded-2xl ${card.iconClassName}`}
                                >
                                    <Icon className="size-5" />
                                </div>

                                <div>
                                    <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
                                        {card.label}
                                    </p>

                                    <p className="mt-1 text-2xl font-bold tracking-tight text-slate-950">
                                        {card.value}
                                    </p>

                                    <p className="mt-1 text-sm font-medium leading-6 text-slate-600">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default BusinessHealth