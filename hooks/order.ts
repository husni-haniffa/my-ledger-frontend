"use client"

import { useAuth } from "@clerk/nextjs"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

import {
    createOrder,
    deleteOrder,
    getOrderById,
    getOrderList,
    updateOrder,
    updateOrderStatus,
} from "@/api/order"

import {
    CreateOrderPayload,
    UpdateOrderPayload,
    UpdateOrderStatusPayload,
} from "@/types/order"

type ApiError = {
    message: string
}

function getErrorMessage(error: unknown) {
    return error && typeof error === "object" && "message" in error
        ? String((error as ApiError).message)
        : "Something went wrong"
}

export function useGetOrderList() {
    const { getToken } = useAuth()

    return useQuery({
        queryKey: ["orders"],
        queryFn: async () => {
            const token = await getToken()
            if (!token) throw new Error("Unauthorized")

            return getOrderList(token)
        },
    })
}

export function useGetOrderById(id: string) {
    const { getToken } = useAuth()

    return useQuery({
        queryKey: ["orders", id],
        enabled: Boolean(id),
        queryFn: async () => {
            const token = await getToken()
            if (!token) throw new Error("Unauthorized")

            return getOrderById(id, token)
        },
    })
}

export function useCreateOrder() {
    const { getToken } = useAuth()
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (payload: CreateOrderPayload) => {
            const token = await getToken()
            if (!token) throw new Error("Unauthorized")

            return createOrder(payload, token)
        },

        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ["orders"],
            })

            queryClient.invalidateQueries({
                queryKey: ["inventory"],
            })

            toast.success(data.message)
        },

        onError: (error) => {
            toast.error(getErrorMessage(error))
        },
    })
}

export function useUpdateOrder(id: string) {
    const { getToken } = useAuth()
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (payload: UpdateOrderPayload) => {
            const token = await getToken()
            if (!token) throw new Error("Unauthorized")

            return updateOrder(id, payload, token)
        },

        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ["orders"],
            })

            queryClient.invalidateQueries({
                queryKey: ["orders", id],
            })

            toast.success(data.message)
        },

        onError: (error) => {
            toast.error(getErrorMessage(error))
        },
    })
}

export function useUpdateOrderStatus() {
    const { getToken } = useAuth()
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async ({
            id,
            payload,
        }: {
            id: string
            payload: UpdateOrderStatusPayload
        }) => {
            const token = await getToken()
            if (!token) throw new Error("Unauthorized")

            return updateOrderStatus(id, payload, token)
        },

        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ["orders"],
            })

            queryClient.invalidateQueries({
                queryKey: ["orders", String(data.data.id)],
            })

            queryClient.invalidateQueries({
                queryKey: ["inventory"],
            })

            toast.success(data.message)
        },

        onError: (error) => {
            toast.error(getErrorMessage(error))
        },
    })
}

export function useDeleteOrder() {
    const { getToken } = useAuth()
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (id: string) => {
            const token = await getToken()
            if (!token) throw new Error("Unauthorized")

            return deleteOrder(id, token)
        },

        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ["orders"],
            })

            toast.success(data.message)
        },

        onError: (error) => {
            toast.error(getErrorMessage(error))
        },
    })
}