// src/schema/expense.ts

import { z } from "zod"

export const expenseFormSchema = z.object({
    name: z
        .string()
        .min(2, "Expense name is required")
        .max(120, "Expense name is too long"),

    category: z.string().max(100, "Category is too long"),

    expense_type: z.enum(["fixed", "variable", "one_time"], {
        message: "Expense type is required",
    }),

    amount: z
        .string()
        .min(1, "Amount is required")
        .refine((value) => Number(value) >= 0, {
            message: "Amount cannot be negative",
        }),

    expense_date: z
        .string()
        .min(1, "Expense date is required")
        .refine((value) => {
            const selectedDate = new Date(value)
            const today = new Date()

            selectedDate.setHours(0, 0, 0, 0)
            today.setHours(0, 0, 0, 0)

            return selectedDate <= today
        }, {
            message: "Expense date cannot be in the future",
        }),

    notes: z.string().max(500, "Notes are too long"),
})

export const updateExpenseFormSchema = expenseFormSchema

export type ExpenseFormValues = z.infer<typeof expenseFormSchema>
export type UpdateExpenseFormValues = z.infer<typeof updateExpenseFormSchema>