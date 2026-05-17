"use client"

import { useCreatePayment } from "@/hooks/billing"

const BillingButton = () => {
    const createPayment = useCreatePayment()

    const handlePayment = async () => {
        const response = await createPayment.mutateAsync({
            plan_slug: "pro",
        })

        const { checkout_url, form } = response.data

        const paymentForm = document.createElement("form")

        paymentForm.method = "POST"
        paymentForm.action = checkout_url

        Object.entries(form).forEach(([key, value]) => {
            const input = document.createElement("input")

            input.type = "hidden"
            input.name = key
            input.value = value

            paymentForm.appendChild(input)
        })

        document.body.appendChild(paymentForm)

        paymentForm.submit()
    }

    return (
        <button
            onClick={handlePayment}
            disabled={createPayment.isPending}
            className="inline-flex h-12 items-center justify-center rounded-full bg-emerald-600 px-6 text-base font-bold tracking-tight text-white transition-all duration-200 hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
            {createPayment.isPending
                ? "Redirecting to secure checkout..."
                : "Continue to payment"}
        </button>
    )
}

export default BillingButton