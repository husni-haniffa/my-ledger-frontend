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