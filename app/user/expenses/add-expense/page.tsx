import { CreateExpenseForm } from "@/features/expense/add-expense/AddExpenseForm"

const AddExpensePage = () => {
  return (
    <section className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-wider text-emerald-600">
          New expense
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
          Add a business expense.
        </h1>

        <p className="mt-2 max-w-2xl text-base font-medium leading-7 text-slate-600">
          Record your spending clearly so MyLedger can keep your reports and
          profit calculations accurate.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <CreateExpenseForm />
      </div>
    </section>
  )
}

export default AddExpensePage