import { apiRequest } from "@/lib/api.request"

import {
    CreateOrderPayload,
    OrderListResponse,
    OrderResponse,
    UpdateOrderPayload,
    UpdateOrderStatusPayload,
} from "@/types/order"

export function getOrderList(token: string) {
    return apiRequest<OrderListResponse>("/order/list", token)
}

export function getOrderById(id: string, token: string) {
    return apiRequest<OrderResponse>(`/order/get/${id}`, token)
}

export function createOrder(payload: CreateOrderPayload, token: string) {
    return apiRequest<OrderResponse>("/order/create", token, {
        method: "POST",
        body: JSON.stringify(payload),
    })
}

export function updateOrder(
    id: string,
    payload: UpdateOrderPayload,
    token: string
) {
    return apiRequest<OrderResponse>(`/order/update/${id}`, token, {
        method: "PATCH",
        body: JSON.stringify(payload),
    })
}

export function updateOrderStatus(
    id: string,
    payload: UpdateOrderStatusPayload,
    token: string
) {
    return apiRequest<OrderResponse>(`/order/status/${id}`, token, {
        method: "PATCH",
        body: JSON.stringify(payload),
    })
}

export function deleteOrder(id: string, token: string) {
    return apiRequest<OrderResponse>(`/order/delete/${id}`, token, {
        method: "DELETE",
    })
}