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
import { useGetAccountStatus, useUpdateAccount } from "@/hooks/account"
import { StoreAccountFormSkeleton } from "../skeleton/StoreAccountForm"
import { updateAccountSchema } from "@/schema/account"

export function EditAccountForm() {

  const { data, isLoading, isError } = useGetAccountStatus()
  const updateMutation = useUpdateAccount()
 
  const form = useForm({
    defaultValues: {
      store_name: data?.data?.store?.name,
      store_email: data?.data?.store?.email,
      store_phone_number: data?.data?.store?.phone_number,
      store_address: data?.data?.store?.address
    },
    validators: {
      onSubmit: updateAccountSchema,
    },
    onSubmit: async ({ value }) => {
      await updateMutation.mutateAsync(value)
    },
  })
  if (isLoading) {
    return (<StoreAccountFormSkeleton />)
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
      <h1 className="mb-3 font-bold uppercase text-emerald-700">Your Store</h1>
      <form
        id="edit-account-form"
        onSubmit={(e) => {
          e.preventDefault()
          form.handleSubmit()
        }}
      >
         <FieldGroup>
                  <form.Field
                    name="store_name"
                    children={(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid
                      return (
                        <Field data-invalid={isInvalid}>
                          <FieldLabel htmlFor={field.name}>Enter your store name</FieldLabel>
                          <Input
                            id={field.name}
                            name={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                            aria-invalid={isInvalid}
                            placeholder="Sensara perfumes"
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
                    name="store_email"
                    children={(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid
                      return (
                        <Field data-invalid={isInvalid}>
                          <FieldLabel htmlFor={field.name}>Enter your email</FieldLabel>
                          <Input
                            id={field.name}
                            name={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                            aria-invalid={isInvalid}
                            placeholder="hello@sensara.com"
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
                    name="store_phone_number"
                    children={(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid
                      return (
                        <Field data-invalid={isInvalid}>
                          <FieldLabel htmlFor={field.name}>Enter your phone number</FieldLabel>
                          <Input
                            id={field.name}
                            name={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                            aria-invalid={isInvalid}
                            placeholder="0775854071"
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
                    name="store_address"
                    children={(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid
                      return (
                        <Field data-invalid={isInvalid}>
                          <FieldLabel htmlFor={field.name}>Enter your address</FieldLabel>
                          <Input
                            id={field.name}
                            name={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                            aria-invalid={isInvalid}
                            placeholder="Dehiwala, Colombo"
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
