"use client"

import { useEffect } from "react"

import { cn } from "@/lib/utils"
import ReviewOrderStep from "@/features/order/add-order/ReviewOrderStep"
import SelectProductsStep from "@/features/order/add-order/SelectProductsStep"
import CustomerDetailsStep from "@/features/order/add-order/CustomerDetailStep"
import { useOrderStore } from "@/store/order"

const steps = [
    {
        id: 1,
        title: "Products",
        description: "Choose what the customer ordered",
    },
    {
        id: 2,
        title: "Details",
        description: "Add customer and payment info",
    },
    {
        id: 3,
        title: "Review",
        description: "Check everything before creating",
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
        <section className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-wider text-emerald-600">
                    New order
                </p>

                <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                    Create a customer order.
                </h1>

                <p className="mt-2 max-w-2xl text-base font-medium leading-7 text-slate-600">
                    Select products, add customer details, then review the order before it
                    enters your workflow.
                </p>
            </div>

            <div className="grid gap-3 md:grid-cols-3">
                {steps.map((step) => {
                    const isActive = currentStep === step.id
                    const isCompleted = currentStep > step.id

                    return (
                        <div
                            key={step.id}
                            className={cn(
                                "rounded-3xl border bg-white p-5 shadow-sm transition-all",
                                isActive && "border-emerald-200 bg-emerald-50",
                                isCompleted && "border-emerald-100 bg-white"
                            )}
                        >
                            <div
                                className={cn(
                                    "flex size-10 items-center justify-center rounded-2xl text-base font-bold",
                                    currentStep >= step.id
                                        ? "bg-emerald-600 text-white"
                                        : "bg-slate-100 text-slate-500"
                                )}
                            >
                                {step.id}
                            </div>

                            <h3 className="mt-4 text-lg font-bold tracking-tight text-slate-950">
                                {step.title}
                            </h3>

                            <p className="mt-1 text-sm font-medium leading-6 text-slate-500">
                                {step.description}
                            </p>
                        </div>
                    )
                })}
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                {currentStep === 1 && <SelectProductsStep />}
                {currentStep === 2 && <CustomerDetailsStep />}
                {currentStep === 3 && <ReviewOrderStep />}
            </div>
        </section>
    )
}

export default AddOrderPage