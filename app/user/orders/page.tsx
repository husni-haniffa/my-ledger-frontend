import OrderList from "@/features/order/view-order/OrderList"
import Link from "next/link"
import { Plus } from "lucide-react"

const OrderPage = () => {
    return (
        <section className="space-y-6">
            <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-emerald-600">
                        Orders
                    </p>

                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                        Manage every customer order clearly.
                    </h1>

                    <p className="mt-2 max-w-2xl text-base font-medium leading-7 text-slate-600">
                        Track order progress, payment status, invoices, and customer details
                        without losing control of your workflow.
                    </p>
                </div>

                <Link
                    href="/user/orders/add-order"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 text-base font-bold tracking-tight text-white transition-all duration-200 hover:bg-emerald-700"
                >
                    <Plus className="size-5" />
                    Add order
                </Link>
            </div>

            <OrderList />
        </section>
    )
}

export default OrderPage