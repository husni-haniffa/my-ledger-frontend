// src/types/expense.ts

export type ExpenseType = "fixed" | "variable" | "one_time"

export interface ExpenseItem {
    id: number
    store_id: number
    name: string
    category: string | null
    expense_type: ExpenseType
    amount: number
    expense_date: string
    notes: string | null
    created_at: string
    updated_at: string
    deleted_at: string | null
}

export interface CreateExpensePayload {
    name: string
    category: string
    expense_type: ExpenseType
    amount: string
    expense_date: string
    notes: string
}

export type UpdateExpensePayload = Partial<CreateExpensePayload>

export interface ExpenseResponse {
    message?: string
    data: ExpenseItem
}

export interface ExpenseListResponse {
    data: ExpenseItem[]
}