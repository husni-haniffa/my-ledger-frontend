// src/hooks/expense.ts

"use client"

import { useAuth } from "@clerk/nextjs"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"



import {
    CreateExpensePayload,
    UpdateExpensePayload,
} from "@/types/expense"
import { getExpenseList, getExpenseById, createExpense, updateExpense, deleteExpense } from "@/api/expense"
import { toast } from "sonner"

export function useGetExpenseList() {
    const { getToken } = useAuth()

    return useQuery({
        queryKey: ["expenses"],

        queryFn: async () => {
            const token = await getToken()
            if (!token) throw new Error("Unauthorized")

            return getExpenseList(token)
        },
    })
}

export function useGetExpenseById(id: string) {
    const { getToken } = useAuth()

    return useQuery({
        queryKey: ["expenses", id],
        enabled: Boolean(id),

        queryFn: async () => {
            const token = await getToken()
            if (!token) throw new Error("Unauthorized")

            return getExpenseById(id, token)
        },
    })
}

export function useCreateExpense() {
    const { getToken } = useAuth()
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (payload: CreateExpensePayload) => {
            const token = await getToken()
            if (!token) throw new Error("Unauthorized")

            return createExpense(payload, token)
        },

        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ["expenses"],
            })
            toast.success(data.message)
        },

        onError: (data) => {
            toast.error(data.message)
        }
    })
}

export function useUpdateExpense(id: string) {
    const { getToken } = useAuth()
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (payload: UpdateExpensePayload) => {
            const token = await getToken()
            if (!token) throw new Error("Unauthorized")

            return updateExpense(id, payload, token)
        },

        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ["expenses"],
            })

            queryClient.invalidateQueries({
                queryKey: ["expenses", id],
            })
            toast.success(data.message)
        },

        onError: (data) => {
            toast.error(data.message)
        }
    })
}

export function useDeleteExpense() {
    const { getToken } = useAuth()
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (id: string) => {
            const token = await getToken()
            if (!token) throw new Error("Unauthorized")

            return deleteExpense(id, token)
        },

        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ["expenses"],
            })
            toast.success(data.message)
        },

        onError: (data) => {
            toast.error(data.message)
        }

    })
}