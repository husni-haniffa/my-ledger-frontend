import { apiRequest } from "@/lib/api.request"

import {
    CreateInventoryPayload,
    InventoryListResponse,
    InventoryResponse,
    UpdateInventoryPayload,
} from "@/types/inventory"

export function getInventoryList(token: string) {
    return apiRequest<InventoryListResponse>("/user/inventory/list", token)
}

export function getInventoryById(id: string, token: string) {
    return apiRequest<InventoryResponse>(`/user/inventory/get/${id}`, token)
}

export function createInventory(
    payload: CreateInventoryPayload,
    token: string
) {
    return apiRequest<InventoryResponse>("/user/inventory/create", token, {
        method: "POST",
        body: JSON.stringify(payload),
    })
}

export function updateInventory(
    id: string,
    payload: UpdateInventoryPayload,
    token: string
) {
    return apiRequest<InventoryResponse>(`/user/inventory/update/${id}`, token, {
        method: "PATCH",
        body: JSON.stringify(payload),
    })
}

export function deleteInventory(id: string, token: string) {
    return apiRequest<InventoryResponse>(`/user/inventory/delete/${id}`, token, {
        method: "DELETE",
    })
}