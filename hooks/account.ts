"use client"

import { useAuth } from "@clerk/nextjs"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"



import { CreateAccountPayload, UpdateAccountPayload } from "@/types/account"
import { getAccountStatus, createAccount, updateAccount } from "@/api/account"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export function useGetAccountStatus() {
    const { getToken } = useAuth()

    return useQuery({
        queryKey: ["account-status"],

        queryFn: async () => {
            const token = await getToken()

            if (!token) {
                throw new Error("Unauthorized")
            }

            return getAccountStatus(token)
        },
    })
}

export function useCreateAccount() {
    const { getToken } = useAuth()
    const router = useRouter()

    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (payload: CreateAccountPayload) => {
            const token = await getToken()

            if (!token) {
                throw new Error("Unauthorized")
            }

            return createAccount(payload, token)
        },

        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ["account-status"],
            })
            toast.success(data.message)
            router.replace('/user')
        },

        onError: (data) => {
            queryClient.invalidateQueries({
                queryKey: ["account-status"],
            })
            toast.error(data.message)
        },
    })
}

export function useUpdateAccount() {
    const { getToken } = useAuth()
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (payload: UpdateAccountPayload) => {
            const token = await getToken()

            if (!token) {
                throw new Error("Unauthorized")
            }

            return updateAccount(payload, token)
        },

        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ["account-status"],
            })
            toast.success(data.message)
        },

        onError: (data) => {
            queryClient.invalidateQueries({
                queryKey: ["account-status"],
            })
            toast.error(data.message)
        },
    })
}