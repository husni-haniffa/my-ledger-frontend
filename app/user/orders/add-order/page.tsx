"use client"

import { useEffect } from "react"

import { cn } from "@/lib/utils"
import ReviewOrderStep from "@/features/order/add-order/ReviewOrderStep"
import SelectProductsStep from "@/features/order/add-order/SelectProductsStep"
import { useOrderStore } from "@/store/order"
import CustomerDetailsStep from "@/features/order/add-order/CustomerDetailStep"




const steps = [
    {
        id: 1,
        title: "Products",
        description: "Select products",
    },
    {
        id: 2,
        title: "Details",
        description: "Customer & payment",
    },
    {
        id: 3,
        title: "Review",
        description: "Confirm order",
    },
]

const AddOrderPage = () => {
    const currentStep = useOrderStore((state) => state.currentStep)
    const resetOrder = useOrderStore((state) => state.resetOrder)

    useEffect(() => {
        return () => {
            resetOrder()
        }
    }, [resetOrder])

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-slate-900">Create Order</h1>
                <p className="mt-1 text-sm text-slate-500">
                    Select products, add customer details, and create a pending order.
                </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
                {steps.map((step) => (
                    <div
                        key={step.id}
                        className={cn(
                            "rounded-2xl border bg-white p-4",
                            currentStep >= step.id
                                ? "border-emerald-200 bg-emerald-50"
                                : "border-slate-200"
                        )}
                    >
                        <div
                            className={cn(
                                "flex size-8 items-center justify-center rounded-full text-sm font-semibold",
                                currentStep >= step.id
                                    ? "bg-emerald-600 text-white"
                                    : "bg-slate-100 text-slate-500"
                            )}
                        >
                            {step.id}
                        </div>

                        <h3 className="mt-3 font-semibold text-slate-900">
                            {step.title}
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>

            <div className="rounded-2xl border bg-white p-4 shadow-sm sm:p-6">
                {currentStep === 1 && <SelectProductsStep />}
                {currentStep === 2 && <CustomerDetailsStep />}
                {currentStep === 3 && <ReviewOrderStep />}
            </div>
        </div>
    )
}

export default AddOrderPage