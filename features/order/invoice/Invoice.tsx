"use client"

import { useRef } from "react"
import { useReactToPrint } from "react-to-print"

import { Button } from "@/components/ui/button"
import { useGetOrderInvoice } from "@/hooks/order"

const Invoice = ({ id }: { id: string }) => {
    const invoiceRef = useRef<HTMLDivElement>(null)
    const { data, isLoading, isError } = useGetOrderInvoice(id)

    const order = data?.data.order
    const store = data?.data.store

    const handlePrint = useReactToPrint({
        contentRef: invoiceRef,
        documentTitle: order?.order_number || "invoice",
    })

    if (isLoading) return <p>Loading invoice...</p>
    if (isError || !order || !store) return <p>Failed to load invoice</p>

    return (
        <div className="space-y-6">
            <Button onClick={handlePrint}>
                Download PDF
            </Button>

            <div
                ref={invoiceRef}
                className="mx-auto max-w-3xl bg-white p-8 text-slate-900"
            >
                <div className="flex justify-between border-b pb-6">
                    <div>
                        <h1 className="text-2xl font-bold">{store.name}</h1>
                        <p className="text-sm">{store.address}</p>
                        <p className="text-sm">{store.phone_number}</p>
                        <p className="text-sm">{store.email}</p>
                    </div>

                    <div className="text-right">
                        <h2 className="text-xl font-bold">INVOICE</h2>
                        <p className="text-sm">{order.order_number}</p>
                        <p className="text-sm">
                            {new Date(order.created_at).toLocaleDateString()}
                        </p>
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="font-semibold">Bill To</h3>
                    <p className="text-sm">{order.customer_name || "Guest"}</p>
                    <p className="text-sm">{order.customer_phone || "-"}</p>
                    <p className="text-sm">{order.customer_address || "-"}</p>
                </div>

                <table className="mt-8 w-full border-collapse text-sm">
                    <thead>
                        <tr className="border-b">
                            <th className="py-3 text-left">Item</th>
                            <th className="py-3 text-center">Qty</th>
                            <th className="py-3 text-right">Price</th>
                            <th className="py-3 text-right">Total</th>
                        </tr>
                    </thead>

                    <tbody>
                        {order.order_items.map((item) => (
                            <tr key={item.id} className="border-b">
                                <td className="py-3">{item.product_name}</td>
                                <td className="py-3 text-center">{item.quantity}</td>
                                <td className="py-3 text-right">
                                    Rs. {Number(item.unit_price).toLocaleString()}
                                </td>
                                <td className="py-3 text-right">
                                    Rs. {Number(item.total_price).toLocaleString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="ml-auto mt-6 max-w-xs space-y-2 text-sm">
                    <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>Rs. {Number(order.subtotal).toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between">
                        <span>Discount</span>
                        <span>- Rs. {Number(order.discount_amount).toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between">
                        <span>Delivery Fee</span>
                        <span>Rs. {Number(order.delivery_fee).toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between border-t pt-3 text-base font-bold">
                        <span>Total</span>
                        <span>Rs. {Number(order.total_amount).toLocaleString()}</span>
                    </div>
                </div>

                <div className="mt-10 border-t pt-4 text-center text-xs text-slate-500">
                    Thank you for your order.
                </div>
            </div>
        </div>
    )
}

export default Invoice