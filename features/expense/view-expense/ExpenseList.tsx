"use client"

import React, { useMemo, useState } from "react"
import Link from "next/link"
import { Pencil, ReceiptText, Search, Trash2 } from "lucide-react"

import { useDeleteExpense, useGetExpenseList } from "@/hooks/expense"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const expenseTypes = [
    { label: "All types", value: "all" },
    { label: "Fixed", value: "fixed" },
    { label: "Variable", value: "variable" },
    { label: "One time", value: "one_time" },
]

const ExpenseList = () => {
    const [search, setSearch] = useState("")
    const [expenseType, setExpenseType] = useState("all")

    const { data, isLoading, isError } = useGetExpenseList()
    const deleteMutation = useDeleteExpense()

    const expenses = data?.data ?? []

    const filteredExpenses = useMemo(() => {
        const query = search.trim().toLowerCase()

        return expenses.filter((item) => {
            const matchesSearch =
                !query ||
                item.name.toLowerCase().includes(query) ||
                (item.category ?? "").toLowerCase().includes(query)

            const matchesType =
                expenseType === "all" || item.expense_type === expenseType

            return matchesSearch && matchesType
        })
    }, [expenses, search, expenseType])

    const formatExpenseType = (type: string) => {
        return type.replace("_", " ")
    }

    if (isLoading) {
        return (
            <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
                <p className="text-lg font-bold text-slate-950">Loading expenses...</p>
                <p className="mt-2 text-base font-medium text-slate-500">
                    Getting your spending records ready.
                </p>
            </div>
        )
    }

    if (isError) {
        return (
            <div className="rounded-3xl border border-red-100 bg-white p-8 text-center shadow-sm">
                <p className="text-lg font-bold text-red-600">
                    Couldn&apos;t load expenses.
                </p>
                <p className="mt-2 text-base font-medium text-slate-500">
                    Please refresh and try again.
                </p>
            </div>
        )
    }

    return (
        <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="flex flex-col gap-4 border-b border-slate-100 p-5 xl:flex-row xl:items-center xl:justify-between">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                        Expense records
                    </h2>
                    <p className="mt-1 text-base font-medium text-slate-600">
                        Search by name or category, then narrow it down by expense type.
                    </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-[1fr_auto] xl:min-w-130">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search expenses..."
                            className="h-12 w-full rounded-full border border-slate-200 bg-slate-50 pl-11 pr-4 text-base font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-emerald-300 focus:bg-white focus:ring-4 focus:ring-emerald-50"
                        />
                    </div>

                    <select
                        value={expenseType}
                        onChange={(e) => setExpenseType(e.target.value)}
                        className="h-12 rounded-full border border-slate-200 bg-slate-50 px-4 text-base font-semibold text-slate-700 outline-none transition-all focus:border-emerald-300 focus:bg-white focus:ring-4 focus:ring-emerald-50"
                    >
                        {expenseTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                                {type.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {filteredExpenses.length === 0 ? (
                <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
                    <div className="flex size-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                        <ReceiptText className="size-8" />
                    </div>

                    <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-950">
                        No expenses found.
                    </h3>

                    <p className="mt-2 max-w-md text-base font-medium leading-7 text-slate-600">
                        Try changing your search or expense type filter.
                    </p>
                </div>
            ) : (
                <>
                    <div className="hidden overflow-hidden md:block">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-slate-50 hover:bg-slate-50">
                                    <TableHead className="text-sm font-bold uppercase tracking-wide text-slate-500">
                                        Name
                                    </TableHead>
                                    <TableHead className="text-sm font-bold uppercase tracking-wide text-slate-500">
                                        Category
                                    </TableHead>
                                    <TableHead className="text-sm font-bold uppercase tracking-wide text-slate-500">
                                        Type
                                    </TableHead>
                                    <TableHead className="text-sm font-bold uppercase tracking-wide text-slate-500">
                                        Amount
                                    </TableHead>
                                    <TableHead className="text-sm font-bold uppercase tracking-wide text-slate-500">
                                        Date
                                    </TableHead>
                                    <TableHead className="text-right text-sm font-bold uppercase tracking-wide text-slate-500">
                                        Actions
                                    </TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {filteredExpenses.map((item) => (
                                    <TableRow key={item.id} className="hover:bg-slate-50/80">
                                        <TableCell>
                                            <div className="font-bold text-slate-950">
                                                {item.name}
                                            </div>
                                        </TableCell>

                                        <TableCell>
                                            <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600">
                                                {item.category || "No category"}
                                            </span>
                                        </TableCell>

                                        <TableCell>
                                            <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold capitalize text-emerald-700">
                                                {formatExpenseType(item.expense_type)}
                                            </span>
                                        </TableCell>

                                        <TableCell className="font-bold text-red-600">
                                            Rs. {item.amount}
                                        </TableCell>

                                        <TableCell className="font-semibold text-slate-700">
                                            {item.expense_date}
                                        </TableCell>

                                        <TableCell>
                                            <div className="flex justify-end gap-2">
                                                <Link
                                                    href={`/user/expenses/${item.id}/edit`}
                                                    className="inline-flex h-9 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 text-sm font-bold text-slate-700 transition-all hover:bg-slate-50 hover:text-slate-950"
                                                >
                                                    <Pencil className="size-4" />
                                                    Edit
                                                </Link>

                                                <button
                                                    onClick={() =>
                                                        deleteMutation.mutate(item.id.toString())
                                                    }
                                                    disabled={deleteMutation.isPending}
                                                    className="inline-flex h-9 items-center justify-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 text-sm font-bold text-red-600 transition-all hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-60"
                                                >
                                                    <Trash2 className="size-4" />
                                                    Delete
                                                </button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>

                    <div className="grid gap-3 p-4 md:hidden">
                        {filteredExpenses.map((item) => (
                            <div
                                key={item.id}
                                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <h2 className="text-lg font-bold tracking-tight text-slate-950">
                                            {item.name}
                                        </h2>

                                        <p className="mt-1 text-sm font-semibold text-slate-500">
                                            {item.category || "No category"}
                                        </p>
                                    </div>

                                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold capitalize text-emerald-700">
                                        {formatExpenseType(item.expense_type)}
                                    </span>
                                </div>

                                <div className="mt-4 grid grid-cols-2 gap-3">
                                    <div className="rounded-2xl bg-red-50 p-3">
                                        <p className="text-sm font-semibold text-red-500">
                                            Amount
                                        </p>

                                        <p className="mt-1 text-lg font-bold text-red-600">
                                            Rs. {item.amount}
                                        </p>
                                    </div>

                                    <div className="rounded-2xl bg-slate-50 p-3">
                                        <p className="text-sm font-semibold text-slate-500">Date</p>

                                        <p className="mt-1 text-lg font-bold text-slate-900">
                                            {item.expense_date}
                                        </p>
                                    </div>
                                </div>

                                {item.notes && (
                                    <div className="mt-4 rounded-2xl bg-slate-50 p-3">
                                        <p className="text-sm font-semibold text-slate-500">
                                            Notes
                                        </p>

                                        <p className="mt-1 text-base font-medium leading-7 text-slate-700">
                                            {item.notes}
                                        </p>
                                    </div>
                                )}

                                <div className="mt-4 grid grid-cols-2 gap-2">
                                    <Link
                                        href={`/user/expenses/${item.id}/edit`}
                                        className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white text-base font-bold text-slate-700 transition-all hover:bg-slate-50"
                                    >
                                        <Pencil className="size-4" />
                                        Edit
                                    </Link>

                                    <button
                                        onClick={() => deleteMutation.mutate(item.id.toString())}
                                        disabled={deleteMutation.isPending}
                                        className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-red-50 text-base font-bold text-red-600 transition-all hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-60"
                                    >
                                        <Trash2 className="size-4" />
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default ExpenseList