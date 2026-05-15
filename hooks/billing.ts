import { createPayment, getCurrentPlan } from "@/api/billing"
import { CreatePaymentPayload } from "@/types/billing"
import { useAuth } from "@clerk/nextjs"
import { useMutation, useQuery } from "@tanstack/react-query"
import { toast } from "sonner"

export function useGetCurrentPlan() {
    const { getToken } = useAuth()

    return useQuery({
        queryKey: ["current-plan"],

        queryFn: async () => {
            const token = await getToken()

            if (!token) {
                throw new Error("Unauthorized")
            }

            return getCurrentPlan(token)
        },
    })
}

// When a user subscribes run the query key again 

export function useCreatePayment() {
    const { getToken } = useAuth()

    return useMutation({
        mutationFn: async (payload: CreatePaymentPayload) => {
            const token = await getToken()

            if (!token) {
                throw new Error("Unauthorized")
            }

            return createPayment(payload, token)
        },

        onError: (error) => {
            toast.error(error.message)
        },
    })
}