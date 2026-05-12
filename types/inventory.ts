export interface InventoryItem {
    id: number
    store_id: number
    name: string
    sku: string | null
    category: string | null
    cost_price: number
    selling_price: number
    stock: number
    low_stock_threshold: number
    is_active: boolean
    created_at: string
    updated_at: string
    deleted_at: string | null
}

export interface CreateInventoryPayload {
    name: string
    sku: string
    category: string
    cost_price: string
    selling_price: string
    stock: string
    low_stock_threshold: string
}

export type UpdateInventoryPayload = Partial<CreateInventoryPayload>

export interface InventoryResponse {
    message?: string
    data: InventoryItem
}

export interface InventoryListResponse {
    data: InventoryItem[]
}