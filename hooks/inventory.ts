"use client"

import { useAuth } from "@clerk/nextjs"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"


import {
    CreateInventoryPayload,
    UpdateInventoryPayload,
} from "@/types/inventory"
import { getInventoryList, getInventoryById, createInventory, updateInventory, deleteInventory } from "@/api/inventory"
import { toast } from "sonner"

export function useGetInventoryList() {
    const { getToken } = useAuth()

    return useQuery({
        queryKey: ["inventory"],

        queryFn: async () => {
            const token = await getToken()
            if (!token) throw new Error("Unauthorized")

            return getInventoryList(token)
        },
    })
}

export function useGetInventoryById(id: string) {
    const { getToken } = useAuth()

    return useQuery({
        queryKey: ["inventory", id],
        enabled: Boolean(id),

        queryFn: async () => {
            const token = await getToken()
            if (!token) throw new Error("Unauthorized")

            return getInventoryById(id, token)
        },
    })
}

export function useCreateInventory() {
    const { getToken } = useAuth()
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (payload: CreateInventoryPayload) => {
            const token = await getToken()
            if (!token) throw new Error("Unauthorized")

            return createInventory(payload, token)
        },

        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ["inventory"],
            })
            toast.success(data.message)
        },

        onError: (data) => {
            toast.error(data.message)
        }
    })
}

export function useUpdateInventory(id: string) {
    const { getToken } = useAuth()
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (payload: UpdateInventoryPayload) => {
            const token = await getToken()
            if (!token) throw new Error("Unauthorized")

            return updateInventory(id, payload, token)
        },

        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ["inventory"],
            })

            queryClient.invalidateQueries({
                queryKey: ["inventory", id],
            })
            toast.success(data.message)
        },

        onError: (data) => {
            toast.error(data.message)
        }
    })
}

export function useDeleteInventory() {
    const { getToken } = useAuth()
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (id: string) => {
            const token = await getToken()
            if (!token) throw new Error("Unauthorized")

            return deleteInventory(id, token)
        },

        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ["inventory"],
            })
            toast.success(data.message)
        },

        onError: (data) => {
            toast.error(data.message)
        }
    })
}