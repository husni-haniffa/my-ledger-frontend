// src/services/expense.ts

import { apiRequest } from "@/lib/api.request"

import {
    CreateExpensePayload,
    ExpenseListResponse,
    ExpenseResponse,
    UpdateExpensePayload,
} from "@/types/expense"

export function getExpenseList(token: string) {
    return apiRequest<ExpenseListResponse>("/user/expense/list", token)
}

export function getExpenseById(id: string, token: string) {
    return apiRequest<ExpenseResponse>(`/user/expense/get/${id}`, token)
}

export function createExpense(payload: CreateExpensePayload, token: string) {
    return apiRequest<ExpenseResponse>("/user/expense/create", token, {
        method: "POST",
        body: JSON.stringify(payload),
    })
}

export function updateExpense(
    id: string,
    payload: UpdateExpensePayload,
    token: string
) {
    return apiRequest<ExpenseResponse>(`/user/expense/update/${id}`, token, {
        method: "PATCH",
        body: JSON.stringify(payload),
    })
}

export function deleteExpense(id: string, token: string) {
    return apiRequest<ExpenseResponse>(`/user/expense/delete/${id}`, token, {
        method: "DELETE",
    })
}