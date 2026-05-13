import { z } from "zod"

export const orderItemFormSchema = z.object({
    inventory_id: z.number().int().positive(),
    quantity: z.number().int().positive(),
})

export const customerDetailsSchema = z
    .object({
        customer_name: z.string().max(120).or(z.literal("")),
        customer_phone: z.string().max(20).or(z.literal("")),
        customer_address: z.string().max(500).or(z.literal("")),

        payment_status: z.enum(["pending", "paid", "refunded"]),

        payment_method: z.enum([
            "cash",
            "bank_transfer",
            "card",
            "cod",
            "koko",
            "other",
        ]),

        source: z.enum([
            "instagram",
            "facebook",
            "whatsapp",
            "tiktok",
            "website",
            "manual",
            "other",
        ]),

        discount_type: z.enum(["none", "fixed", "percentage"]),

        discount_value: z.string().min(1, "Discount is required"),

        delivery_fee: z.string().min(1, "Delivery fee is required"),

        notes: z.string().max(500).or(z.literal("")),
    })
    .refine((data) => Number(data.discount_value) >= 0, {
        message: "Discount cannot be negative",
        path: ["discount_value"],
    })
    .refine((data) => Number(data.delivery_fee) >= 0, {
        message: "Delivery fee cannot be negative",
        path: ["delivery_fee"],
    })
    .refine(
        (data) =>
            data.discount_type !== "percentage" ||
            Number(data.discount_value) <= 100,
        {
            message: "Percentage discount cannot be more than 100%",
            path: ["discount_value"],
        }
    )
    .refine(
        (data) =>
            data.discount_type !== "none" || Number(data.discount_value) === 0,
        {
            message: "Discount must be 0 when discount type is none",
            path: ["discount_value"],
        }
    )

export const createOrderFormSchema = customerDetailsSchema.extend({
    items: z.array(orderItemFormSchema).min(1, "At least one product is required"),
})

export const updateOrderFormSchema = createOrderFormSchema

export const updateOrderStatusFormSchema = z.object({
    status: z.enum(["processing", "delivered", "cancelled", "returned"]),
})

export type CustomerDetailsFormValues = z.infer<typeof customerDetailsSchema>
export type CreateOrderFormValues = z.infer<typeof createOrderFormSchema>
export type UpdateOrderFormValues = z.infer<typeof updateOrderFormSchema>
export type UpdateOrderStatusFormValues = z.infer<
    typeof updateOrderStatusFormSchema
>