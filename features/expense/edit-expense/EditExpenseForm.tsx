"use client"

import * as React from "react"
import { useForm } from "@tanstack/react-form"

import { Button } from "@/components/ui/button"

import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"

import { Input } from "@/components/ui/input"
import { useGetExpenseById, useUpdateExpense } from "@/hooks/expense"
import { updateExpenseFormSchema } from "@/schema/expense"
import { ExpenseType } from "@/types/expense"
import { ExpenseFormSkeleton } from "../skeleton/ExpenseFormSkeleton"


export function EditExpenseForm({id} : {id: string}) {
    const { data, isLoading, isError } =
        useGetExpenseById(id)

    const updateMutation = useUpdateExpense(id)

    const form = useForm({
        defaultValues: {
            name: data?.data?.name || "",
            category: data?.data?.category || "",
            expense_type:
                data?.data?.expense_type || "one_time",
            amount: String(data?.data?.amount ?? ""),
            expense_date:
                data?.data?.expense_date || "",
            notes: data?.data?.notes || "",
        },

        validators: {
            onSubmit: updateExpenseFormSchema,
        },

        onSubmit: async ({ value }) => {
            await updateMutation.mutateAsync(value)
        },
    })

    if (isLoading) {
        return (
            <ExpenseFormSkeleton/>
        )
    }

    if (isError) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center gap-3">
                <h1 className="text-lg font-semibold">
                    Something went wrong
                </h1>

                <p className="text-sm text-slate-500">
                    Please try again.
                </p>
            </div>
        )
    }

    return (
        <div>
            <form
                id="edit-expense-form"
                onSubmit={(e) => {
                    e.preventDefault()
                    form.handleSubmit()
                }}
            >
                <FieldGroup>

                    {/* Name */}
                    <form.Field
                        name="name"
                        children={(field) => {
                            const isInvalid =
                                field.state.meta.isTouched &&
                                !field.state.meta.isValid

                            return (
                                <Field data-invalid={isInvalid}>
                                    <FieldLabel htmlFor={field.name}>
                                        Expense name
                                    </FieldLabel>

                                    <Input
                                        id={field.name}
                                        name={field.name}
                                        value={field.state.value}
                                        onBlur={field.handleBlur}
                                        onChange={(e) =>
                                            field.handleChange(e.target.value)
                                        }
                                        placeholder="Electricity bill"
                                        autoComplete="off"
                                        aria-invalid={isInvalid}
                                    />

                                    {isInvalid && (
                                        <FieldError
                                            errors={field.state.meta.errors}
                                        />
                                    )}
                                </Field>
                            )
                        }}
                    />

                    {/* Category */}
                    <form.Field
                        name="category"
                        children={(field) => {
                            const isInvalid =
                                field.state.meta.isTouched &&
                                !field.state.meta.isValid

                            return (
                                <Field data-invalid={isInvalid}>
                                    <FieldLabel htmlFor={field.name}>
                                        Category
                                    </FieldLabel>

                                    <Input
                                        id={field.name}
                                        name={field.name}
                                        value={field.state.value}
                                        onBlur={field.handleBlur}
                                        onChange={(e) =>
                                            field.handleChange(e.target.value)
                                        }
                                        placeholder="Utilities"
                                        autoComplete="off"
                                        aria-invalid={isInvalid}
                                    />

                                    {isInvalid && (
                                        <FieldError
                                            errors={field.state.meta.errors}
                                        />
                                    )}
                                </Field>
                            )
                        }}
                    />

                    {/* Expense Type */}
                    <form.Field
                        name="expense_type"
                        children={(field) => {
                            const isInvalid =
                                field.state.meta.isTouched &&
                                !field.state.meta.isValid

                            return (
                                <Field data-invalid={isInvalid}>
                                    <FieldLabel htmlFor={field.name}>
                                        Expense type
                                    </FieldLabel>

                                    <select
                                        id={field.name}
                                        name={field.name}
                                        value={field.state.value}
                                        onBlur={field.handleBlur}
                                        onChange={(e) => field.handleChange(e.target.value as ExpenseType)}
                                        className="
                      flex
                      h-10
                      w-full
                      rounded-md
                      border
                      border-input
                      bg-background
                      px-3
                      py-2
                      text-sm
                    "
                                    >
                                        <option value="one_time">
                                            One Time
                                        </option>

                                        <option value="variable">
                                            Recurring
                                        </option>
                                        <option value="fixed">
                                            Fixed
                                        </option>
                                    </select>

                                    {isInvalid && (
                                        <FieldError
                                            errors={field.state.meta.errors}
                                        />
                                    )}
                                </Field>
                            )
                        }}
                    />

                    {/* Amount */}
                    <form.Field
                        name="amount"
                        children={(field) => {
                            const isInvalid =
                                field.state.meta.isTouched &&
                                !field.state.meta.isValid

                            return (
                                <Field data-invalid={isInvalid}>
                                    <FieldLabel htmlFor={field.name}>
                                        Amount
                                    </FieldLabel>

                                    <Input
                                        type="number"
                                        id={field.name}
                                        name={field.name}
                                        value={field.state.value}
                                        onBlur={field.handleBlur}
                                        onChange={(e) =>
                                            field.handleChange(e.target.value)
                                        }
                                        placeholder="5000"
                                        autoComplete="off"
                                        aria-invalid={isInvalid}
                                    />

                                    {isInvalid && (
                                        <FieldError
                                            errors={field.state.meta.errors}
                                        />
                                    )}
                                </Field>
                            )
                        }}
                    />

                    {/* Expense Date */}
                    <form.Field
                        name="expense_date"
                        children={(field) => {
                            const isInvalid =
                                field.state.meta.isTouched &&
                                !field.state.meta.isValid

                            return (
                                <Field data-invalid={isInvalid}>
                                    <FieldLabel htmlFor={field.name}>
                                        Expense date
                                    </FieldLabel>

                                    <Input
                                        type="date"
                                        id={field.name}
                                        name={field.name}
                                        value={field.state.value}
                                        onBlur={field.handleBlur}
                                        onChange={(e) =>
                                            field.handleChange(e.target.value)
                                        }
                                        aria-invalid={isInvalid}
                                    />

                                    {isInvalid && (
                                        <FieldError
                                            errors={field.state.meta.errors}
                                        />
                                    )}
                                </Field>
                            )
                        }}
                    />

                    {/* Notes */}
                    <form.Field
                        name="notes"
                        children={(field) => {
                            const isInvalid =
                                field.state.meta.isTouched &&
                                !field.state.meta.isValid

                            return (
                                <Field data-invalid={isInvalid}>
                                    <FieldLabel htmlFor={field.name}>
                                        Notes
                                    </FieldLabel>

                                    <Input
                                        id={field.name}
                                        name={field.name}
                                        value={field.state.value}
                                        onBlur={field.handleBlur}
                                        onChange={(e) =>
                                            field.handleChange(e.target.value)
                                        }
                                        placeholder="Additional expense details..."
                                        aria-invalid={isInvalid}
                                    />

                                    {isInvalid && (
                                        <FieldError
                                            errors={field.state.meta.errors}
                                        />
                                    )}
                                </Field>
                            )
                        }}
                    />

                </FieldGroup>
            </form>

            <Field
                orientation="responsive"
                className="mt-6 space-y-1"
            >
                <Button
                    type="button"
                    variant="outline"
                    onClick={() => form.reset()}
                    disabled={updateMutation.isPending}
                >
                    Cancel
                </Button>

                <Button
                    type="submit"
                    form="edit-expense-form"
                    disabled={updateMutation.isPending}
                >
                    {updateMutation.isPending
                        ? "Updating"
                        : "Update"}
                </Button>
            </Field>
        </div>
    )
}