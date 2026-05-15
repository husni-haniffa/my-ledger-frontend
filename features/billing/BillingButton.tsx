"use client"

import { Button } from "@/components/ui/button"
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
        <Button
            onClick={handlePayment}
            disabled={createPayment.isPending}
        >
            {createPayment.isPending
                ? "Redirecting..."
                : "Pay Now"}
        </Button>
    )
}

export default BillingButton