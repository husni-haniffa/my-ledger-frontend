export interface CurrentPlanReponse {
    data: Subscription
}

interface Subscription {
    id: number
    status: string
    trial_start: string
    trial_end: string
    current_period_start: string
    current_period_end: string
    cancelled_at: string
    plans: Plan
}

interface Plan {
    name: string
    slug: string
    price: string
    currency: string
    billing_period: string
}

export interface CreatePaymentPayload {
    plan_slug: string
}

export interface CreatePaymentResponse {
    message: string
    data: {
        payment_id: number
        checkout_url: string

        form: {
            first_name: string
            last_name: string
            email: string
            contact_number: string
            address_line_one: string
            process_currency: string
            secret_key: string
            custom_fields: string
            payment: string
        }
    }
}