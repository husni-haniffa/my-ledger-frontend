"use client"

import { EditInventoryForm } from "@/features/inventory/edit-indentory/EditInventoryForm"
import { useParams } from "next/navigation"

const EditInventoryPage = () => {
  const params = useParams<{ id: string }>()
  const id = params.id

  return (
    <section className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-wider text-emerald-600">
          Edit product
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
          Update inventory details.
        </h1>

        <p className="mt-2 max-w-2xl text-base font-medium leading-7 text-slate-600">
          Keep your product name, category, pricing, and stock details accurate.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <EditInventoryForm id={id} />
      </div>
    </section>
  )
}

export default EditInventoryPage