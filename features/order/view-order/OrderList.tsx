"use client"

import { useMemo, useState } from "react"
import { PackageSearch, Search } from "lucide-react"

import { useGetOrderList } from "@/hooks/order"
import OrdersMobileCards from "./OrderListMobile"
import OrdersTable from "./OrdersTable"

const orderStatuses = [
    { label: "All statuses", value: "all" },
    { label: "Pending", value: "pending" },
    { label: "Processing", value: "processing" },
    { label: "Delivered", value: "delivered" },
    { label: "Cancelled", value: "cancelled" },
    { label: "Returned", value: "returned" },
]

const paymentStatuses = [
    { label: "All payments", value: "all" },
    { label: "Pending", value: "pending" },
    { label: "Paid", value: "paid" },
    { label: "Refunded", value: "refunded" },
]

const OrderList = () => {
    const [search, setSearch] = useState("")
    const [orderStatus, setOrderStatus] = useState("all")
    const [paymentStatus, setPaymentStatus] = useState("all")

    const { data, isLoading, isError } = useGetOrderList()

    const orders = data?.data ?? []

    const filteredOrders = useMemo(() => {
        const query = search.trim().toLowerCase()

        return orders.filter((order) => {
            const matchesSearch =
                !query ||
                order.order_number.toLowerCase().includes(query) ||
                (order.customer_name ?? "").toLowerCase().includes(query) ||
                (order.customer_phone ?? "").toLowerCase().includes(query) ||
                (order.source ?? "").toLowerCase().includes(query)

            const matchesOrderStatus =
                orderStatus === "all" || order.status === orderStatus

            const matchesPaymentStatus =
                paymentStatus === "all" || order.payment_status === paymentStatus

            return matchesSearch && matchesOrderStatus && matchesPaymentStatus
        })
    }, [orders, search, orderStatus, paymentStatus])

    if (isLoading) {
        return (
            <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
                <p className="text-lg font-bold text-slate-950">Loading orders...</p>
                <p className="mt-2 text-base font-medium text-slate-500">
                    Getting your customer orders ready.
                </p>
            </div>
        )
    }

    if (isError) {
        return (
            <div className="rounded-3xl border border-red-100 bg-white p-8 text-center shadow-sm">
                <p className="text-lg font-bold text-red-600">
                    Couldn&apos;t load orders.
                </p>
                <p className="mt-2 text-base font-medium text-slate-500">
                    Please refresh and try again.
                </p>
            </div>
        )
    }

    return (
        <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="flex flex-col gap-4 border-b border-slate-100 p-5 xl:flex-row xl:items-center xl:justify-between">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                        Order records
                    </h2>

                    <p className="mt-1 text-base font-medium text-slate-600">
                        Search by order number, customer, phone, or sales source.
                    </p>
                </div>

                <div className="grid gap-3 lg:grid-cols-[1fr_auto_auto] xl:min-w-180">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />

                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search orders..."
                            className="h-12 w-full rounded-full border border-slate-200 bg-slate-50 pl-11 pr-4 text-base font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-emerald-300 focus:bg-white focus:ring-4 focus:ring-emerald-50"
                        />
                    </div>

                    <select
                        value={orderStatus}
                        onChange={(e) => setOrderStatus(e.target.value)}
                        className="h-12 rounded-full border border-slate-200 bg-slate-50 px-4 text-base font-semibold text-slate-700 outline-none transition-all focus:border-emerald-300 focus:bg-white focus:ring-4 focus:ring-emerald-50"
                    >
                        {orderStatuses.map((status) => (
                            <option key={status.value} value={status.value}>
                                {status.label}
                            </option>
                        ))}
                    </select>

                    <select
                        value={paymentStatus}
                        onChange={(e) => setPaymentStatus(e.target.value)}
                        className="h-12 rounded-full border border-slate-200 bg-slate-50 px-4 text-base font-semibold text-slate-700 outline-none transition-all focus:border-emerald-300 focus:bg-white focus:ring-4 focus:ring-emerald-50"
                    >
                        {paymentStatuses.map((status) => (
                            <option key={status.value} value={status.value}>
                                {status.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {filteredOrders.length === 0 ? (
                <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
                    <div className="flex size-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                        <PackageSearch className="size-8" />
                    </div>

                    <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-950">
                        No orders found.
                    </h3>

                    <p className="mt-2 max-w-md text-base font-medium leading-7 text-slate-600">
                        Try changing your search, order status, or payment filter.
                    </p>
                </div>
            ) : (
                <>
                    <OrdersTable orders={filteredOrders} />
                    <OrdersMobileCards orders={filteredOrders} />
                </>
            )}
        </div>
    )
}

export default OrderList