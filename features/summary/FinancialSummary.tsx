import { Summary } from "@/types/summary"


interface FinancialSummaryProps {
    summary: Summary
}

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-LK', {
        style: 'currency',
        currency: 'LKR',
        maximumFractionDigits: 0,
    }).format(value)
}

export default function FinancialSummary({
    summary,
}: FinancialSummaryProps) {
    const items = [
        {
            label: 'Revenue',
            value: formatCurrency(summary.revenue),
        },
        {
            label: 'Gross Profit',
            value: formatCurrency(summary.grossProfit),
        },
        {
            label: 'Net Profit',
            value: formatCurrency(summary.netProfit),
        },
        {
            label: 'Net Loss',
            value: formatCurrency(summary.netLoss),
        },
        {
            label: 'Outstanding Payments',
            value: formatCurrency(summary.outstandingPayments),
        },
        {
            label: 'Break-even Sales',
            value: formatCurrency(summary.breakEvenSales),
        },
        {
            label: 'Margin of Safety',
            value: formatCurrency(summary.marginOfSafety),
        },
    ]

    return (
        <div className="rounded-xl border p-4 space-y-4">
            <h2 className="text-lg font-semibold">
                Financial Summary
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((item) => (
                    <div
                        key={item.label}
                        className="rounded-lg border p-4"
                    >
                        <p className="text-sm text-muted-foreground">
                            {item.label}
                        </p>

                        <p className="text-xl font-bold mt-2">
                            {item.value}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}