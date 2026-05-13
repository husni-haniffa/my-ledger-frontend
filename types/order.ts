export type OrderStatus =
    | "pending"
    | "processing"
    | "delivered"
    | "cancelled"
    | "returned"

export type PaymentStatus = "pending" | "paid" | "refunded"

export type PaymentMethod =
    | "cash"
    | "bank_transfer"
    | "card"
    | "cod"
    | "koko"
    | "other"

export type OrderSource =
    | "instagram"
    | "facebook"
    | "whatsapp"
    | "tiktok"
    | "website"
    | "manual"
    | "other"

export type DiscountType = "none" | "fixed" | "percentage"

export interface OrderItemPayload {
    inventory_id: number
    quantity: number
}

export interface CreateOrderPayload {
    customer_name: string
    customer_phone: string
    customer_address: string
    payment_status: PaymentStatus
    payment_method: PaymentMethod
    source: OrderSource
    discount_type: DiscountType
    discount_value: string
    delivery_fee: string
    notes: string
    items: OrderItemPayload[]
}

export type UpdateOrderPayload = Partial<CreateOrderPayload>

export interface UpdateOrderStatusPayload {
    status: Exclude<OrderStatus, "pending">
}

export interface OrderItem {
    id: number
    order_id: number
    inventory_id: number | null
    product_name: string
    sku: string | null
    quantity: number
    unit_cost: number
    unit_price: number
    total_cost: number
    total_price: number
    created_at: string
}

export interface Order {
    id: number
    store_id: number
    order_number: string

    customer_name: string | null
    customer_phone: string | null
    customer_address: string | null

    status: OrderStatus
    payment_status: PaymentStatus
    payment_method: PaymentMethod
    source: OrderSource

    subtotal: number
    discount_type: DiscountType
    discount_value: number
    discount_amount: number
    delivery_fee: number
    total_amount: number

    notes: string | null

    ordered_at: string
    created_at: string
    updated_at: string
    deleted_at: string | null

    order_items: OrderItem[]
}

export interface OrderResponse {
    message: string
    data: Order
}

export interface OrderListResponse {
    data: Order[]
}

export interface UpdateOrderPaymentStatusPayload {
    payment_status: PaymentStatus
}