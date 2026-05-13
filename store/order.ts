// src/store/order.store.ts

import { create } from "zustand"

import {
    DiscountType,
    OrderItemPayload,
    OrderSource,
    PaymentMethod,
    PaymentStatus,
} from "@/types/order"

type CustomerDetailsPayload = {
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
}

interface OrderStore extends CustomerDetailsPayload {
    currentStep: number
    items: OrderItemPayload[]

    setStep: (step: number) => void

    addItem: (inventoryId: number) => void
    removeItem: (inventoryId: number) => void
    increaseQuantity: (inventoryId: number) => void
    decreaseQuantity: (inventoryId: number) => void
    setQuantity: (inventoryId: number, quantity: number) => void

    setCustomerDetails: (payload: CustomerDetailsPayload) => void

    resetOrder: () => void
    // add inside interface
    loadOrderForEdit: (payload: {
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
    }) => void
}

const initialState = {
    currentStep: 1,
    items: [],

    customer_name: "",
    customer_phone: "",
    customer_address: "",

    payment_status: "pending" as PaymentStatus,
    payment_method: "cash" as PaymentMethod,
    source: "manual" as OrderSource,

    discount_type: "none" as DiscountType,
    discount_value: "0",
    delivery_fee: "0",

    notes: "",
}

export const useOrderStore = create<OrderStore>((set) => ({
    ...initialState,

    setStep: (step) => set({ currentStep: step }),

    addItem: (inventoryId) =>
        set((state) => {
            const existing = state.items.find(
                (item) => item.inventory_id === inventoryId
            )

            if (existing) {
                return {
                    items: state.items.map((item) =>
                        item.inventory_id === inventoryId
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                }
            }

            return {
                items: [
                    ...state.items,
                    {
                        inventory_id: inventoryId,
                        quantity: 1,
                    },
                ],
            }
        }),

    removeItem: (inventoryId) =>
        set((state) => ({
            items: state.items.filter(
                (item) => item.inventory_id !== inventoryId
            ),
        })),

    increaseQuantity: (inventoryId) =>
        set((state) => ({
            items: state.items.map((item) =>
                item.inventory_id === inventoryId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ),
        })),

    decreaseQuantity: (inventoryId) =>
        set((state) => ({
            items: state.items
                .map((item) =>
                    item.inventory_id === inventoryId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0),
        })),

    setQuantity: (inventoryId, quantity) =>
        set((state) => ({
            items:
                quantity <= 0
                    ? state.items.filter((item) => item.inventory_id !== inventoryId)
                    : state.items.map((item) =>
                        item.inventory_id === inventoryId
                            ? { ...item, quantity }
                            : item
                    ),
        })),

    setCustomerDetails: (payload) =>
        set({
            ...payload,
            discount_value:
                payload.discount_type === "none" ? "0" : payload.discount_value,
        }),

    resetOrder: () => set(initialState),
    
    loadOrderForEdit: (payload) =>
        set({
            currentStep: 1,
            ...payload,
        }),
}))