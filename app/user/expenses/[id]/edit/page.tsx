"use client"

import { EditExpenseForm } from "@/features/expense/edit-expense/EditExpenseForm"
import { useParams } from "next/navigation"

const EditExpensePage = () => {
  const params = useParams<{ id: string }>()
  const id = params.id

  return (
    <section className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-wider text-emerald-600">
          Edit expense
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
          Update expense details.
        </h1>

        <p className="mt-2 max-w-2xl text-base font-medium leading-7 text-slate-600">
          Keep your amount, category, type, and date accurate for better
          business reports.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <EditExpenseForm id={id} />
      </div>
    </section>
  )
}

export default EditExpensePage