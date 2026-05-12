"use client"

import React from "react"
import Link from "next/link"
import {
    Pencil,
    Trash2,
} from "lucide-react"



import { Button } from "@/components/ui/button"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useDeleteExpense, useGetExpenseList } from "@/hooks/expense"

const ExpenseList = () => {
    const { data, isLoading, isError } =
        useGetExpenseList()
    const deleteMutation = useDeleteExpense()
    if (isLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                Loading...
            </div>
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
        <div className="space-y-3">

            {/* Desktop Table */}
            <div className="hidden overflow-hidden rounded-xl border bg-white md:block">

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead className="text-right">
                                Actions
                            </TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {data?.data?.map((item) => (
                            <TableRow key={item.id}>

                                {/* Name */}
                                <TableCell className="font-medium">
                                    {item.name}
                                </TableCell>

                                {/* Category */}
                                <TableCell className="text-slate-600">
                                    {item.category || "-"}
                                </TableCell>

                                {/* Type */}
                                <TableCell>
                                    <span
                                        className="
                      rounded-full
                      bg-slate-100
                      px-2.5
                      py-1
                      text-xs
                      font-medium
                      text-slate-700
                    "
                                    >
                                        {item.expense_type}
                                    </span>
                                </TableCell>

                                {/* Amount */}
                                <TableCell className="font-semibold text-red-600">
                                    Rs. {item.amount}
                                </TableCell>

                                {/* Date */}
                                <TableCell>
                                    {item.expense_date}
                                </TableCell>

                                {/* Actions */}
                                <TableCell>
                                    <div className="flex justify-end gap-2">

                                        <Button
                                            asChild
                                            variant="outline"
                                            size="sm"
                                            disabled={deleteMutation.isPending}
                                        >
                                            <Link
                                                href={`/user/expenses/${item.id}/edit`}
                                            >
                                                <Pencil className="mr-2 h-4 w-4" />
                                                Edit
                                            </Link>
                                        </Button>

                                        <Button
                                            variant="destructive"
                                            size="sm"
                                            onClick={() => deleteMutation.mutate(item.id.toString())}
                                            disabled={deleteMutation.isPending}
                                        >
                                            <Trash2 className="mr-2 h-4 w-4" />
                                            Delete
                                        </Button>

                                    </div>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </div>

            {/* Mobile Cards */}
            <div className="space-y-3 md:hidden">

                {data?.data?.map((item) => (
                    <div
                        key={item.id}
                        className="
              rounded-2xl
              border
              bg-white
              p-4
              shadow-sm
            "
                    >

                        {/* Top */}
                        <div className="flex items-start justify-between gap-3">

                            <div>
                                <h2 className="text-base font-semibold text-slate-900">
                                    {item.name}
                                </h2>

                                <p className="mt-1 text-sm text-slate-500">
                                    {item.category || "No category"}
                                </p>
                            </div>

                            <span
                                className="
                  rounded-full
                  bg-slate-100
                  px-2.5
                  py-1
                  text-xs
                  font-medium
                  text-slate-700
                "
                            >
                                {item.expense_type}
                            </span>

                        </div>

                        {/* Info */}
                        <div className="mt-4 grid grid-cols-2 gap-3">

                            <div className="rounded-xl bg-red-50 p-3">
                                <p className="text-xs text-slate-500">
                                    Amount
                                </p>

                                <p className="mt-1 font-semibold text-red-600">
                                    Rs. {item.amount}
                                </p>
                            </div>

                            <div className="rounded-xl bg-slate-50 p-3">
                                <p className="text-xs text-slate-500">
                                    Date
                                </p>

                                <p className="mt-1 font-medium">
                                    {item.expense_date}
                                </p>
                            </div>

                        </div>

                        {/* Notes */}
                        {item.notes && (
                            <div className="mt-4 rounded-xl bg-slate-50 p-3">
                                <p className="text-xs text-slate-500">
                                    Notes
                                </p>

                                <p className="mt-1 text-sm text-slate-700">
                                    {item.notes}
                                </p>
                            </div>
                        )}

                        {/* Actions */}
                        <div className="mt-4 flex gap-2">

                            <Button
                                asChild
                                variant="outline"
                                className="flex-1"
                                disabled={deleteMutation.isPending}
                            >
                                <Link
                                    href={`/user/expenses/${item.id}/edit`}
                                >
                                    <Pencil className="mr-2 h-4 w-4" />
                                    Edit
                                </Link>
                            </Button>

                            <Button
                                variant="destructive"
                                className="flex-1"
                                onClick={() => deleteMutation.mutate(item.id.toString())}
                                disabled={deleteMutation.isPending}
                            >
                                <Trash2 className="mr-2 h-4 w-4" />
                                Delete
                            </Button>

                        </div>

                    </div>
                ))}

            </div>
        </div>
    )
}

export default ExpenseList