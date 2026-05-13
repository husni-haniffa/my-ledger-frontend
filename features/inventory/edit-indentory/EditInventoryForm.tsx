"use client"
import { useForm } from "@tanstack/react-form"

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useGetInventoryById, useUpdateInventory } from "@/hooks/inventory"
import { updateInventoryFormSchema } from "@/schema/inventory"
import { InventoryFormSkeleton } from "../skeleton/InventryForm"




export function EditInventoryForm({id} : {id: string}) {

  const { data, isLoading, isError } = useGetInventoryById(id)
  const updateMutation = useUpdateInventory(id)
 
  const form = useForm({
      defaultValues: {
          name: data?.data.name ?? "",
          sku: data?.data.sku ?? "",
          category: data?.data.category ?? "",
          cost_price: String(data?.data.cost_price ?? ""),
          selling_price: String(data?.data.selling_price ?? ""),
          stock: String(data?.data.stock ?? ""),
          low_stock_threshold: String(data?.data.low_stock_threshold ?? ""),
      },
    validators: {
      onSubmit: updateInventoryFormSchema,
    },
    onSubmit: async ({ value }) => {
      await updateMutation.mutateAsync(value)
    },
  })
  if (isLoading) {
    return (
        <InventoryFormSkeleton/>
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
    <div className="bg-white p-4 rounded-2xl">
      <h1 className="mb-3 font-bold uppercase text-emerald-700">Edit your item</h1>
      <form
        id="edit-account-form"
        onSubmit={(e) => {
          e.preventDefault()
          form.handleSubmit()
        }}
      >
        <FieldGroup>
                  <form.Field
                    name="name"
                    children={(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid
                      return (
                        <Field data-invalid={isInvalid}>
                          <FieldLabel htmlFor={field.name}>Enter item name</FieldLabel>
                          <Input
                            id={field.name}
                            name={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                            aria-invalid={isInvalid}
                            placeholder="Creed Aventus 50ml"
                            autoComplete="off"
                          />
                          {isInvalid && (
                            <FieldError errors={field.state.meta.errors} />
                          )}
                        </Field>
                      )
                    }}
                  />
                  <form.Field
                    name="category"
                    children={(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid
                      return (
                        <Field data-invalid={isInvalid}>
                          <FieldLabel htmlFor={field.name}>Enter your category</FieldLabel>
                          <Input
                            id={field.name}
                            name={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                            aria-invalid={isInvalid}
                            placeholder="Premium"
                            autoComplete="off"
                          />
                          {isInvalid && (
                            <FieldError errors={field.state.meta.errors} />
                          )}
                        </Field>
                      )
                    }}
                  />
                  <form.Field
                    name="cost_price"
                    children={(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid
                      return (
                        <Field data-invalid={isInvalid}>
                          <FieldLabel htmlFor={field.name}>Enter item cost</FieldLabel>
                          <Input
                            id={field.name}
                            name={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                            aria-invalid={isInvalid}
                            placeholder="5000"
                            autoComplete="off"
                          />
                          {isInvalid && (
                            <FieldError errors={field.state.meta.errors} />
                          )}
                        </Field>
                      )
                    }}
                  />
                  <form.Field
                    name="selling_price"
                    children={(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid
                      return (
                        <Field data-invalid={isInvalid}>
                          <FieldLabel htmlFor={field.name}>Enter selling price</FieldLabel>
                          <Input
                            id={field.name}
                            name={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                            aria-invalid={isInvalid}
                            placeholder="7500"
                            autoComplete="off"
                          />
                          {isInvalid && (
                            <FieldError errors={field.state.meta.errors} />
                          )}
                        </Field>
                      )
                    }}
                  />
                  <form.Field
                    name="stock"
                    children={(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid
                      return (
                        <Field data-invalid={isInvalid}>
                          <FieldLabel htmlFor={field.name}>Enter selling price</FieldLabel>
                          <Input
                            id={field.name}
                            name={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                            aria-invalid={isInvalid}
                            placeholder="15"
                            autoComplete="off"
                          />
                          {isInvalid && (
                            <FieldError errors={field.state.meta.errors} />
                          )}
                        </Field>
                      )
                    }}
                  />
                </FieldGroup>
      </form>
      <Field orientation="responsive" className="mt-6 space-y-1">
        <Button type="button" variant="outline" onClick={() => form.reset()} disabled={updateMutation.isPending}>
          Cancel
        </Button>
        <Button type="submit" form="edit-account-form" disabled={updateMutation.isPending}>
          {updateMutation.isPending ? "Updating" : "Update"}
        </Button>
      </Field>
    </div>
  
        
    
       
    
  )
}
