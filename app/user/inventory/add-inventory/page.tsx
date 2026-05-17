import { AddInventoryForm } from "@/features/inventory/add-inventory/AddInventoryForm"

const AddInventoryPage = () => {
  return (
    <section className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-wider text-emerald-600">
          New product
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
          Add a product to your inventory.
        </h1>

        <p className="mt-2 max-w-2xl text-base font-medium leading-7 text-slate-600">
          Add the product details, pricing, and stock information so MyLedger can
          help you track it properly.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <AddInventoryForm />
      </div>
    </section>
  )
}

export default AddInventoryPage