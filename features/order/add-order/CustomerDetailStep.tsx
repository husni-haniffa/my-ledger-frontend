"use client"

import { useForm } from "@tanstack/react-form"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useStore } from "@tanstack/react-form"


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
    
    const setCustomerDetails = useOrderStore(
        (state) => state.setCustomerDetails
    )

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

    
    const discountType = useStore(form.store, (state) => state.values.discount_type)
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
                <h2 className="text-lg font-semibold text-slate-900">
                    Customer & Payment Details
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    Add customer information, payment details, discounts, and notes.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <form.Field
                    name="customer_name"
                    children={(field) => (
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">
                                Customer Name
                            </label>

                            <Input
                                placeholder="Customer name"
                                value={field.state.value}
                                onChange={(e) => field.handleChange(e.target.value)}
                            />
                        </div>
                    )}
                />

                <form.Field
                    name="customer_phone"
                    children={(field) => (
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">
                                Customer Phone
                            </label>

                            <Input
                                placeholder="Customer phone"
                                value={field.state.value}
                                onChange={(e) => field.handleChange(e.target.value)}
                            />
                        </div>
                    )}
                />
            </div>

            <form.Field
                name="customer_address"
                children={(field) => (
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">
                            Customer Address
                        </label>

                        <Textarea
                            placeholder="Customer address"
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                        />
                    </div>
                )}
            />

            <div className="grid gap-4 md:grid-cols-3">
                <form.Field
                    name="source"
                    children={(field) => (
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">
                                Order Source
                            </label>

                            <Select
                                value={field.state.value}
                                onValueChange={(value) =>
                                    field.handleChange(value as typeof field.state.value)
                                }
                            >
                                <SelectTrigger>
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
                            <label className="text-sm font-medium text-slate-700">
                                Payment Status
                            </label>

                            <Select
                                value={field.state.value}
                                onValueChange={(value) =>
                                    field.handleChange(value as typeof field.state.value)
                                }
                            >
                                <SelectTrigger>
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
                            <label className="text-sm font-medium text-slate-700">
                                Payment Method
                            </label>

                            <Select
                                value={field.state.value}
                                onValueChange={(value) =>
                                    field.handleChange(value as typeof field.state.value)
                                }
                            >
                                <SelectTrigger>
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

            <div className="grid gap-4 md:grid-cols-3">
                <form.Field
                    name="discount_type"
                    children={(field) => (
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">
                                Discount Type
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
                                <SelectTrigger>
                                    <SelectValue placeholder="Select discount type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="none">No Discount</SelectItem>
                                    <SelectItem value="fixed">Fixed Amount</SelectItem>
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
                                <label className="text-sm font-medium text-slate-700">
                                    Discount Value
                                </label>
                                <Input
                                    type="number"
                                    min="0"
                                    placeholder="0"
                                    value={field.state.value}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                />
                            </div>
                        )}
                    />
                )}

                <form.Field
                    name="delivery_fee"
                    children={(field) => (
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">
                                Delivery Fee
                            </label>
                            <Input
                                type="number"
                                min="0"
                                placeholder="0"
                                value={field.state.value}
                                onChange={(e) => field.handleChange(e.target.value)}
                            />
                        </div>
                    )}
                />
            </div>

            <form.Field
                name="notes"
                children={(field) => (
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">
                            Notes
                        </label>

                        <Textarea
                            placeholder="Optional notes"
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                        />
                    </div>
                )}
            />

            <div className="flex items-center justify-between">
                <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(1)}
                >
                    Back
                </Button>

                <Button type="submit">Continue</Button>
            </div>
        </form>
    )
}

export default CustomerDetailsStep