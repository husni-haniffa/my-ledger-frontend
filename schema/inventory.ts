import { z } from "zod"

export const inventoryFormSchema = z
    .object({
        name: z
            .string()
            .min(2, "Product name is required")
            .max(120, "Product name is too long"),

        sku: z.string().max(80, "SKU is too long").or(z.literal("")),

        category: z.string().max(100, "Category is too long").or(z.literal("")),

        cost_price: z
            .string()
            .min(1, "Cost price is required")
            .refine((value) => Number(value) >= 0, {
                message: "Cost price cannot be negative",
            }),

        selling_price: z
            .string()
            .min(1, "Selling price is required")
            .refine((value) => Number(value) >= 0, {
                message: "Selling price cannot be negative",
            }),

        stock: z
            .string()
            .min(1, "Stock is required")
            .refine((value) => Number.isInteger(Number(value)), {
                message: "Stock must be a whole number",
            })
            .refine((value) => Number(value) >= 0, {
                message: "Stock cannot be negative",
            }),

        low_stock_threshold: z
            .string()
            .min(1, "Low stock threshold is required")
            .refine((value) => Number.isInteger(Number(value)), {
                message: "Low stock threshold must be a whole number",
            })
            .refine((value) => Number(value) >= 0, {
                message: "Low stock threshold cannot be negative",
            }),
    })
    .refine(
        (data) => Number(data.selling_price) >= Number(data.cost_price),
        {
            message: "Selling price should not be less than cost price",
            path: ["selling_price"],
        }
    )

export const updateInventoryFormSchema = inventoryFormSchema

export type InventoryFormValues = z.infer<typeof inventoryFormSchema>
export type UpdateInventoryFormValues = z.infer<
    typeof updateInventoryFormSchema
>