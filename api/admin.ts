import { apiRequest } from "@/lib/api.request"

import { AdminAnalyticsResponse, AdminDashboardResponse, AdminPaymentsResponse, AdminUsersResponse } from "@/types/admin"

export function getAdminDashboard(token: string) {
    return apiRequest<AdminDashboardResponse>(
        "/admin/summary",
        token
    )
}

export function getAdminUsers(token: string) {
    return apiRequest<AdminUsersResponse>("/admin/users", token)
}

export function getAdminPayments(token: string) {
    return apiRequest<AdminPaymentsResponse>("/admin/payments", token)
}

export function getAdminAnalytics(token: string) {
    return apiRequest<AdminAnalyticsResponse>("/admin/analytics", token)
}