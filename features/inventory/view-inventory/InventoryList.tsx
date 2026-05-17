"use client"

import React, { useMemo, useState } from "react"
import Link from "next/link"
import { PackageSearch, Pencil, Search, Trash2 } from "lucide-react"

import { useDeleteInventory, useGetInventoryList } from "@/hooks/inventory"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const InventoryList = () => {
  const [search, setSearch] = useState("")

  const { data, isLoading, isError } = useGetInventoryList()
  const deleteMutation = useDeleteInventory()

  const inventory = data?.data ?? []

  const filteredInventory = useMemo(() => {
    const query = search.trim().toLowerCase()

    if (!query) return inventory

    return inventory.filter((item) => {
      return (
        item.name.toLowerCase().includes(query) ||
        item.category?.toLowerCase().includes(query)
      )
    })
  }, [inventory, search])

  if (isLoading) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <p className="text-lg font-bold text-slate-950">Loading inventory...</p>
        <p className="mt-2 text-base font-medium text-slate-500">
          Getting your products ready.
        </p>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="rounded-3xl border border-red-100 bg-white p-8 text-center shadow-sm">
        <p className="text-lg font-bold text-red-600">
          Couldn&apos;t load inventory.
        </p>
        <p className="mt-2 text-base font-medium text-slate-500">
          Please refresh and try again.
        </p>
      </div>
    )
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col gap-4 border-b border-slate-100 p-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-950">
            Product list
          </h2>
          <p className="mt-1 text-base font-medium text-slate-600">
            Search by product name or category.
          </p>
        </div>

        <div className="relative w-full lg:max-w-sm">
          <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search inventory..."
            className="h-12 w-full rounded-full border border-slate-200 bg-slate-50 pl-11 pr-4 text-base font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-emerald-300 focus:bg-white focus:ring-4 focus:ring-emerald-50"
          />
        </div>
      </div>

      {filteredInventory.length === 0 ? (
        <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
          <div className="flex size-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            <PackageSearch className="size-8" />
          </div>

          <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-950">
            No products found.
          </h3>

          <p className="mt-2 max-w-md text-base font-medium leading-7 text-slate-600">
            Try searching with another product name or category.
          </p>
        </div>
      ) : (
        <>
          <div className="hidden overflow-hidden md:block">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-50 hover:bg-slate-50">
                  <TableHead className="text-sm font-bold uppercase tracking-wide text-slate-500">
                    Product
                  </TableHead>
                  <TableHead className="text-sm font-bold uppercase tracking-wide text-slate-500">
                    Category
                  </TableHead>
                  <TableHead className="text-sm font-bold uppercase tracking-wide text-slate-500">
                    Stock
                  </TableHead>
                  <TableHead className="text-sm font-bold uppercase tracking-wide text-slate-500">
                    Cost Price
                  </TableHead>
                  <TableHead className="text-sm font-bold uppercase tracking-wide text-slate-500">
                    Selling Price
                  </TableHead>
                  <TableHead className="text-right text-sm font-bold uppercase tracking-wide text-slate-500">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {filteredInventory.map((item) => (
                  <TableRow key={item.id} className="hover:bg-slate-50/80">
                    <TableCell>
                      <div className="font-bold text-slate-950">
                        {item.name}
                      </div>
                    </TableCell>

                    <TableCell>
                      <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600">
                        {item.category}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-sm font-bold ${item.stock <= item.low_stock_threshold
                            ? "bg-amber-50 text-amber-700"
                            : "bg-emerald-50 text-emerald-700"
                          }`}
                      >
                        {item.stock} left
                      </span>
                    </TableCell>

                    <TableCell className="font-semibold text-slate-700">
                      Rs. {item.cost_price}
                    </TableCell>

                    <TableCell className="font-bold text-emerald-600">
                      Rs. {item.selling_price}
                    </TableCell>

                    <TableCell>
                      <div className="flex justify-end gap-2">
                        <Link
                          href={`/user/inventory/${item.id}/edit`}
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
            {filteredInventory.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-bold tracking-tight text-slate-950">
                      {item.name}
                    </h2>

                    <span className="mt-2 inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl bg-slate-50 p-3">
                    <p className="text-sm font-semibold text-slate-500">
                      Cost Price
                    </p>

                    <p className="mt-1 text-lg font-bold text-slate-900">
                      Rs. {item.cost_price}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-emerald-50 p-3">
                    <p className="text-sm font-semibold text-emerald-700">
                      Selling Price
                    </p>

                    <p className="mt-1 text-lg font-bold text-emerald-700">
                      Rs. {item.selling_price}
                    </p>
                  </div>
                  <div
                    className={`rounded-2xl p-3 ${item.stock <= item.low_stock_threshold
                        ? "bg-amber-50"
                        : "bg-emerald-50"
                      }`}
                  >
                    <p
                      className={`text-sm font-semibold ${item.stock <= item.low_stock_threshold
                          ? "text-amber-700"
                          : "text-emerald-700"
                        }`}
                    >
                      Stock
                    </p>

                    <p
                      className={`mt-1 text-lg font-bold ${item.stock <= item.low_stock_threshold
                          ? "text-amber-700"
                          : "text-emerald-700"
                        }`}
                    >
                      {item.stock} left
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  <Link
                    href={`/user/inventory/${item.id}/edit`}
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

export default InventoryList