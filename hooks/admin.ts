"use client"

import { getAdminAnalytics, getAdminDashboard, getAdminPayments, getAdminUsers } from "@/api/admin"
import { useAuth } from "@clerk/nextjs"
import { useQuery } from "@tanstack/react-query"

export function useGetAdminDashboard() {
    const { getToken } = useAuth()

    return useQuery({
        queryKey: ["admin-dashboard"],

        queryFn: async () => {
            const token = await getToken()

            if (!token) {
                throw new Error("Unauthorized")
            }

            return getAdminDashboard(token)
        },
    })
}

export function useGetAdminUsers() {
    const { getToken } = useAuth()

    return useQuery({
        queryKey: ["admin-users"],
        queryFn: async () => {
            const token = await getToken()
            if (!token) throw new Error("Unauthorized")

            return getAdminUsers(token)
        },
    })
}

export function useGetAdminPayments() {
    const { getToken } = useAuth()

    return useQuery({
        queryKey: ["admin-payments"],
        queryFn: async () => {
            const token = await getToken()
            if (!token) throw new Error("Unauthorized")

            return getAdminPayments(token)
        },
    })
}

export function useGetAdminAnalytics() {
    const { getToken } = useAuth()

    return useQuery({
        queryKey: ["admin-analytics"],
        queryFn: async () => {
            const token = await getToken()
            if (!token) throw new Error("Unauthorized")

            return getAdminAnalytics(token)
        },
    })
}