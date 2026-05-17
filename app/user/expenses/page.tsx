import ExpenseList from "@/features/expense/view-expense/ExpenseList"
import Link from "next/link"
import { Plus } from "lucide-react"

const ExpensePage = () => {
    return (
        <section className="space-y-6">
            <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-emerald-600">
                        Expenses
                    </p>

                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                        Know where your money goes.
                    </h1>

                    <p className="mt-2 max-w-2xl text-base font-medium leading-7 text-slate-600">
                        Record business costs, separate fixed and variable expenses, and
                        keep your profit calculations cleaner.
                    </p>
                </div>

                <Link
                    href="/user/expenses/add-expense"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 text-base font-bold tracking-tight text-white transition-all duration-200 hover:bg-emerald-700"
                >
                    <Plus className="size-5" />
                    Add expense
                </Link>
            </div>

            <ExpenseList />
        </section>
    )
}

export default ExpensePage