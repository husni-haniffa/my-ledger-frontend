export type AccountNextAction =
    | "create_account"
    | "dashboard"
    | "billing"

export interface AccountPlan {
    id: number
    name: string
    slug: string
    price: number
    currency: string
    billing_period: "monthly" | "yearly"
}

export interface AccountSubscription {
    id: number
    status: "trialing" | "active" | "expired" | "cancelled"
    current_period_end: string
    trial_end: string | null
    plans: AccountPlan | null
}

export interface AccountStore {
    id: number
    name: string
    email: string
    phone_number: string
    address: string
    status: "active" | "inactive" | "deleted"
    currency: string
    timezone: string
}

export interface AccountUser {
    id: number
    email: string
    status: "active" | "inactive" | "suspended" | "deleted"
}

export interface AccountStatusData {
    user: AccountUser
    store: AccountStore | null
    subscription: AccountSubscription | null
}

export interface GetAccountStatusResponse {
    hasAccount: boolean
    hasAccess: boolean
    nextAction: AccountNextAction
    data: AccountStatusData | null
}

export interface CreateAccountPayload {
    store_name: string
    store_email: string
    store_phone_number: string
    store_address: string
}

export interface CreateAccountResponse {
    message: string
    data: {
        user: {
            id: number
            email: string
            status: string
        }

        store: {
            id: number
            name: string
            status: string
        }

        subscription: {
            id: number
            status: string
            current_period_end: string
        }
    }
}

export interface UpdateAccountPayload {
    store_name?: string
    store_email?: string
    store_phone_number?: string
    store_address?: string
}

export interface UpdateAccountResponse {
    message: string
    data: {
        store: {
            id: number
            name: string
            email: string | null
            phone_number: string | null
            address: string | null
            currency: string
            timezone: string
            status: "active" | "inactive" | "deleted"
            updated_at: string
        }
    }
}