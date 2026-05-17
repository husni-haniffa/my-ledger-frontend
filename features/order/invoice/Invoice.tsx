"use client"

import { useRef } from "react"
import { useReactToPrint } from "react-to-print"
import { Download, Printer } from "lucide-react"

import { useGetOrderInvoice } from "@/hooks/order"

const formatCurrency = (value: number | string) => {
    return `Rs. ${Number(value || 0).toLocaleString()}`
}

const Invoice = ({ id }: { id: string }) => {
    const invoiceRef = useRef<HTMLDivElement>(null)
    const { data, isLoading, isError } = useGetOrderInvoice(id)

    const order = data?.data.order
    const store = data?.data.store

    const handlePrint = useReactToPrint({
        contentRef: invoiceRef,
        documentTitle: order?.order_number || "invoice",
    })

    if (isLoading) {
        return (
            <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
                <p className="text-lg font-bold text-slate-950">Loading invoice...</p>
                <p className="mt-2 text-base font-medium text-slate-500">
                    Preparing the invoice preview.
                </p>
            </div>
        )
    }

    if (isError || !order || !store) {
        return (
            <div className="rounded-3xl border border-red-100 bg-white p-8 text-center shadow-sm">
                <p className="text-lg font-bold text-red-600">
                    Couldn&apos;t load invoice.
                </p>
                <p className="mt-2 text-base font-medium text-slate-500">
                    Please go back and try again.
                </p>
            </div>
        )
    }

    return (
        <section className="space-y-6">
            <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-emerald-600">
                        Invoice
                    </p>

                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                        Invoice for {order.order_number}
                    </h1>

                    <p className="mt-2 max-w-2xl text-base font-medium leading-7 text-slate-600">
                        Review the invoice before downloading or printing it for your
                        customer.
                    </p>
                </div>

                <button
                    onClick={handlePrint}
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 text-base font-bold tracking-tight text-white transition-all hover:bg-emerald-700"
                >
                    <Download className="size-5" />
                    Download PDF
                </button>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-slate-100 p-4 shadow-sm sm:p-6">
                <div
                    ref={invoiceRef}
                    className="mx-auto min-w-190 max-w-4xl bg-white p-8 text-slate-900 sm:p-10"
                >
                    <div className="flex items-start justify-between gap-8 border-b border-slate-200 pb-8">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                                {store.name}
                            </h2>

                            <div className="mt-3 space-y-1 text-sm font-medium leading-6 text-slate-600">
                                <p>{store.address}</p>
                                <p>{store.phone_number}</p>
                                <p>{store.email}</p>
                            </div>
                        </div>

                        <div className="text-right">
                            <p className="text-sm font-bold uppercase tracking-wider text-emerald-600">
                                Invoice
                            </p>

                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                                {order.order_number}
                            </h1>

                            <p className="mt-2 text-sm font-medium text-slate-500">
                                {new Date(order.created_at).toLocaleDateString()}
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 grid gap-6 border-b border-slate-200 pb-8 sm:grid-cols-2">
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                                Bill to
                            </h3>

                            <div className="mt-3 space-y-1 text-sm font-medium leading-6 text-slate-700">
                                <p className="text-base font-bold text-slate-950">
                                    {order.customer_name || "Guest customer"}
                                </p>
                                <p>{order.customer_phone || "-"}</p>
                                <p>{order.customer_address || "-"}</p>
                            </div>
                        </div>

                        <div className="sm:text-right">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                                Payment
                            </h3>

                            <div className="mt-3 space-y-1 text-sm font-medium leading-6 text-slate-700">
                                <p className="capitalize">
                                    Status:{" "}
                                    <span className="font-bold text-slate-950">
                                        {order.payment_status}
                                    </span>
                                </p>
                                <p className="capitalize">
                                    Method:{" "}
                                    <span className="font-bold text-slate-950">
                                        {order.payment_method}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <table className="mt-8 w-full border-collapse text-sm">
                        <thead>
                            <tr className="border-b border-slate-200 bg-slate-50">
                                <th className="px-3 py-4 text-left font-bold uppercase tracking-wide text-slate-500">
                                    Item
                                </th>
                                <th className="px-3 py-4 text-center font-bold uppercase tracking-wide text-slate-500">
                                    Qty
                                </th>
                                <th className="px-3 py-4 text-right font-bold uppercase tracking-wide text-slate-500">
                                    Price
                                </th>
                                <th className="px-3 py-4 text-right font-bold uppercase tracking-wide text-slate-500">
                                    Total
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {order.order_items.map((item) => (
                                <tr key={item.id} className="border-b border-slate-100">
                                    <td className="px-3 py-4 font-semibold text-slate-950">
                                        {item.product_name}
                                    </td>

                                    <td className="px-3 py-4 text-center font-medium text-slate-700">
                                        {item.quantity}
                                    </td>

                                    <td className="px-3 py-4 text-right font-medium text-slate-700">
                                        {formatCurrency(item.unit_price)}
                                    </td>

                                    <td className="px-3 py-4 text-right font-bold text-slate-950">
                                        {formatCurrency(item.total_price)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="ml-auto mt-8 max-w-sm rounded-2xl bg-slate-50 p-5">
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between gap-4">
                                <span className="font-semibold text-slate-600">Subtotal</span>
                                <span className="font-bold text-slate-950">
                                    {formatCurrency(order.subtotal)}
                                </span>
                            </div>

                            <div className="flex justify-between gap-4">
                                <span className="font-semibold text-slate-600">Discount</span>
                                <span className="font-bold text-red-600">
                                    - {formatCurrency(order.discount_amount)}
                                </span>
                            </div>

                            <div className="flex justify-between gap-4">
                                <span className="font-semibold text-slate-600">
                                    Delivery fee
                                </span>
                                <span className="font-bold text-slate-950">
                                    {formatCurrency(order.delivery_fee)}
                                </span>
                            </div>

                            <div className="border-t border-slate-200 pt-4">
                                <div className="flex justify-between gap-4">
                                    <span className="text-lg font-bold text-slate-950">
                                        Total
                                    </span>
                                    <span className="text-2xl font-bold text-emerald-700">
                                        {formatCurrency(order.total_amount)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 border-t border-slate-200 pt-5 text-center">
                        <p className="text-sm font-semibold text-slate-600">
                            Thank you for your order.
                        </p>

                        <p className="mt-1 text-xs font-medium text-slate-400">
                            Generated with MyLedger
                        </p>
                    </div>
                </div>
            </div>

            <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-5 shadow-sm">
                <div className="flex items-start gap-3">
                    <Printer className="mt-1 size-5 shrink-0 text-emerald-600" />

                    <div>
                        <h2 className="text-lg font-bold tracking-tight text-slate-950">
                            Optimized for professional PDF downloads
                        </h2>

                        <p className="mt-1 text-base font-medium leading-7 text-slate-700">
                            On smaller devices, the invoice preview may scroll horizontally
                            to preserve the original invoice structure. Downloading or
                            printing the invoice will always generate a clean, properly
                            formatted layout for sharing with customers.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Invoice