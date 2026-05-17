"use client"

import { useForm, useStore } from "@tanstack/react-form"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { customerDetailsSchema } from "@/schema/order"
import { useOrderStore } from "@/store/order"

const CustomerDetailsStep = () => {
    const setStep = useOrderStore((state) => state.setStep)
    const setCustomerDetails = useOrderStore((state) => state.setCustomerDetails)

    const store = useOrderStore()

    const form = useForm({
        defaultValues: {
            customer_name: store.customer_name,
            customer_phone: store.customer_phone,
            customer_address: store.customer_address,
            payment_status: store.payment_status,
            payment_method: store.payment_method,
            source: store.source,
            discount_type: store.discount_type,
            discount_value: store.discount_value,
            delivery_fee: store.delivery_fee,
            notes: store.notes,
        },

        validators: {
            onSubmit: customerDetailsSchema,
        },

        onSubmit: async ({ value }) => {
            setCustomerDetails(value)
            setStep(3)
        },
    })

    const discountType = useStore(
        form.store,
        (state) => state.values.discount_type
    )

    return (
        <form
            className="space-y-6"
            onSubmit={(e) => {
                e.preventDefault()
                e.stopPropagation()
                form.handleSubmit()
            }}
        >
            <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                    Add customer and payment details
                </h2>

                <p className="mt-2 max-w-2xl text-base font-medium leading-7 text-slate-600">
                    Add the details you need for delivery, payment tracking, and sales
                    reports.
                </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-bold tracking-tight text-slate-950">
                    Customer information
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <form.Field
                        name="customer_name"
                        children={(field) => (
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">
                                    Customer name
                                </label>

                                <Input
                                    placeholder="Example: Fathima"
                                    value={field.state.value}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                    className="h-11 text-base font-medium"
                                />
                            </div>
                        )}
                    />

                    <form.Field
                        name="customer_phone"
                        children={(field) => (
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">
                                    Customer phone
                                </label>

                                <Input
                                    placeholder="Example: 0771234567"
                                    value={field.state.value}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                    className="h-11 text-base font-medium"
                                />
                            </div>
                        )}
                    />
                </div>

                <form.Field
                    name="customer_address"
                    children={(field) => (
                        <div className="mt-4 space-y-2">
                            <label className="text-sm font-bold text-slate-700">
                                Customer address
                            </label>

                            <Textarea
                                placeholder="Delivery address"
                                value={field.state.value}
                                onChange={(e) => field.handleChange(e.target.value)}
                                className="min-h-24 text-base font-medium"
                            />
                        </div>
                    )}
                />
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-bold tracking-tight text-slate-950">
                    Sales and payment
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                    <form.Field
                        name="source"
                        children={(field) => (
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">
                                    Sales source
                                </label>

                                <Select
                                    value={field.state.value}
                                    onValueChange={(value) =>
                                        field.handleChange(value as typeof field.state.value)
                                    }
                                >
                                    <SelectTrigger className="h-11 text-base font-medium">
                                        <SelectValue placeholder="Select source" />
                                    </SelectTrigger>

                                    <SelectContent>
                                        <SelectItem value="manual">Manual</SelectItem>
                                        <SelectItem value="instagram">Instagram</SelectItem>
                                        <SelectItem value="facebook">Facebook</SelectItem>
                                        <SelectItem value="whatsapp">WhatsApp</SelectItem>
                                        <SelectItem value="tiktok">TikTok</SelectItem>
                                        <SelectItem value="website">Website</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        )}
                    />

                    <form.Field
                        name="payment_status"
                        children={(field) => (
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">
                                    Payment status
                                </label>

                                <Select
                                    value={field.state.value}
                                    onValueChange={(value) =>
                                        field.handleChange(value as typeof field.state.value)
                                    }
                                >
                                    <SelectTrigger className="h-11 text-base font-medium">
                                        <SelectValue placeholder="Select payment status" />
                                    </SelectTrigger>

                                    <SelectContent>
                                        <SelectItem value="pending">Pending</SelectItem>
                                        <SelectItem value="paid">Paid</SelectItem>
                                        <SelectItem value="refunded">Refunded</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        )}
                    />

                    <form.Field
                        name="payment_method"
                        children={(field) => (
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">
                                    Payment method
                                </label>

                                <Select
                                    value={field.state.value}
                                    onValueChange={(value) =>
                                        field.handleChange(value as typeof field.state.value)
                                    }
                                >
                                    <SelectTrigger className="h-11 text-base font-medium">
                                        <SelectValue placeholder="Select payment method" />
                                    </SelectTrigger>

                                    <SelectContent>
                                        <SelectItem value="cash">Cash</SelectItem>
                                        <SelectItem value="bank_transfer">
                                            Bank Transfer
                                        </SelectItem>
                                        <SelectItem value="card">Card</SelectItem>
                                        <SelectItem value="cod">COD</SelectItem>
                                        <SelectItem value="koko">Koko</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        )}
                    />
                </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-bold tracking-tight text-slate-950">
                    Discounts and delivery
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                    <form.Field
                        name="discount_type"
                        children={(field) => (
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">
                                    Discount type
                                </label>

                                <Select
                                    value={field.state.value}
                                    onValueChange={(value) => {
                                        field.handleChange(value as typeof field.state.value)

                                        if (value === "none") {
                                            form.setFieldValue("discount_value", "")
                                        }
                                    }}
                                >
                                    <SelectTrigger className="h-11 text-base font-medium">
                                        <SelectValue placeholder="Select discount type" />
                                    </SelectTrigger>

                                    <SelectContent>
                                        <SelectItem value="none">No discount</SelectItem>
                                        <SelectItem value="fixed">Fixed amount</SelectItem>
                                        <SelectItem value="percentage">Percentage</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        )}
                    />

                    {discountType !== "none" && (
                        <form.Field
                            name="discount_value"
                            children={(field) => (
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">
                                        Discount value
                                    </label>

                                    <Input
                                        type="number"
                                        min="0"
                                        placeholder="0"
                                        value={field.state.value}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                        className="h-11 text-base font-medium"
                                    />
                                </div>
                            )}
                        />
                    )}

                    <form.Field
                        name="delivery_fee"
                        children={(field) => (
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">
                                    Delivery fee
                                </label>

                                <Input
                                    type="number"
                                    min="0"
                                    placeholder="0"
                                    value={field.state.value}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                    className="h-11 text-base font-medium"
                                />
                            </div>
                        )}
                    />
                </div>

                <form.Field
                    name="notes"
                    children={(field) => (
                        <div className="mt-4 space-y-2">
                            <label className="text-sm font-bold text-slate-700">Notes</label>

                            <Textarea
                                placeholder="Optional notes for this order"
                                value={field.state.value}
                                onChange={(e) => field.handleChange(e.target.value)}
                                className="min-h-24 text-base font-medium"
                            />
                        </div>
                    )}
                />
            </div>

            <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="inline-flex h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-base font-bold text-slate-700 hover:bg-slate-50"
                >
                    Back to products
                </button>

                <button
                    type="submit"
                    className="inline-flex h-11 items-center justify-center rounded-full bg-emerald-600 px-6 text-base font-bold text-white hover:bg-emerald-700"
                >
                    Continue to review
                </button>
            </div>
        </form>
    )
}

export default CustomerDetailsStep