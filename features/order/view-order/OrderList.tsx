"use client"
import { useGetOrderList } from "@/hooks/order"
import OrdersMobileCards from "./OrderListMobile"
import OrdersTable from "./OrdersTable"

const OrderList = () => {
    const { data, isLoading, isError } = useGetOrderList()

    if (isLoading) return <p>Loading orders...</p>
    if (isError) return <p>Failed to load orders</p>

    const orders = data?.data ?? []

    return (
        <div className="space-y-6">
            {orders.length === 0 ? (
                <div className="rounded-2xl border bg-white p-8 text-center">
                    <h2 className="font-semibold text-slate-900">No orders yet</h2>
                    <p className="mt-1 text-sm text-slate-500">
                        Create your first order to start tracking sales.
                    </p>
                </div>
            ) : (
                <>
                    <OrdersTable orders={orders} />
                    <OrdersMobileCards orders={orders} />
                </>
            )}
        </div>
    )
}

export default OrderList