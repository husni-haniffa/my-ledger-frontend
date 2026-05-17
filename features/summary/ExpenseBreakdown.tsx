import { Expenses } from "@/types/summary"
import { Building2, Package, ReceiptText } from "lucide-react"

interface ExpenseBreakdownProps {
    expenses: Expenses
}

const formatCurrency = (value: number) => {
    return `LKR ${Number(value || 0).toLocaleString()}`
}

const ExpenseBreakdown = ({ expenses }: ExpenseBreakdownProps) => {
    const totalExpenses =
        expenses.fixedExpenses + expenses.variableExpenses + expenses.otherExpenses

    const items = [
        {
            label: "Fixed Expenses",
            value: expenses.fixedExpenses,
            description: "Recurring costs like rent or salaries.",
            icon: Building2,
            className: "bg-blue-50 border-blue-100 text-blue-700",
        },
        {
            label: "Variable Expenses",
            value: expenses.variableExpenses,
            description: "Costs that change with orders or sales.",
            icon: Package,
            className: "bg-emerald-50 border-emerald-100 text-emerald-700",
        },
        {
            label: "Other Expenses",
            value: expenses.otherExpenses,
            description: "One-time or uncategorized spending.",
            icon: ReceiptText,
            className: "bg-amber-50 border-amber-100 text-amber-700",
        },
    ]

    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-wider text-emerald-600">
                Expenses
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                Where your money is going.
            </h2>

            <p className="mt-2 text-base font-medium leading-7 text-slate-600">
                Separate your costs so profit reports stay easier to understand.
            </p>

            <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-500">Total expenses</p>
                <p className="mt-1 text-3xl font-bold tracking-tight text-slate-950">
                    {formatCurrency(totalExpenses)}
                </p>
            </div>

            <div className="mt-4 grid gap-3">
                {items.map((item) => {
                    const Icon = item.icon

                    return (
                        <div
                            key={item.label}
                            className={`rounded-2xl border p-4 ${item.className}`}
                        >
                            <div className="flex items-start gap-3">
                                <Icon className="mt-1 size-5 shrink-0" />

                                <div>
                                    <p className="text-base font-bold">{item.label}</p>
                                    <p className="mt-1 text-2xl font-bold text-slate-950">
                                        {formatCurrency(item.value)}
                                    </p>
                                    <p className="mt-1 text-sm font-medium leading-6 text-slate-600">
                                        {item.description}
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

export default ExpenseBreakdown