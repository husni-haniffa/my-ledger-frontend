import { apiRequest } from "@/lib/api.request"

import {
    CreateOrderPayload,
    OrderListResponse,
    OrderResponse,
    UpdateOrderPayload,
    UpdateOrderPaymentStatusPayload,
    UpdateOrderStatusPayload,
} from "@/types/order"

export function getOrderList(token: string) {
    return apiRequest<OrderListResponse>("/user/order/list", token)
}

export function getOrderById(id: string, token: string) {
    return apiRequest<OrderResponse>(`/user/order/get/${id}`, token)
}

export function createOrder(payload: CreateOrderPayload, token: string) {
    return apiRequest<OrderResponse>("/user/order/create", token, {
        method: "POST",
        body: JSON.stringify(payload),
    })
}

export function updateOrder(
    id: string,
    payload: UpdateOrderPayload,
    token: string
) {
    return apiRequest<OrderResponse>(`/user/order/update/${id}`, token, {
        method: "PATCH",
        body: JSON.stringify(payload),
    })
}

export function updateOrderStatus(
    id: string,
    payload: UpdateOrderStatusPayload,
    token: string
) {
    return apiRequest<OrderResponse>(`/user/order/status/${id}`, token, {
        method: "PATCH",
        body: JSON.stringify(payload),
    })
}

export function deleteOrder(id: string, token: string) {
    return apiRequest<OrderResponse>(`/user/order/delete/${id}`, token, {
        method: "DELETE",
    })
}

export function updateOrderPaymentStatus(
    id: string,
    payload: UpdateOrderPaymentStatusPayload,
    token: string
) {
    return apiRequest<OrderResponse>(`/user/order/payment-status/${id}`, token, {
        method: "PATCH",
        body: JSON.stringify(payload),
    })
}