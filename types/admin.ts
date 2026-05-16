export interface AdminDashboardResponse {
    data: {
        overview: {
            totalUsers: number
            totalStores: number

            trialingUsers: number
            activePaidUsers: number
            expiredUsers: number
            cancelledUsers: number

            totalRevenue: number
            monthlyRevenue: number

            pendingPayments: number
            failedPayments: number
        }

        recent: {
            signups: RecentSignup[]
            payments: RecentPayment[]
        }
    }
}

export interface RecentSignup {
    id: number
    email: string
    status: string
    created_at: string

    stores: {
        id: number
        name: string
        status: string
    }[]
}

export interface RecentPayment {
    id: number

    order_reference: string
    gateway_reference: string | null

    amount: number
    currency: string
    status: string

    paid_at: string | null
    created_at: string

    stores: {
        id: number
        name: string
    }[]
}

export interface AdminUser {
    store_id: number
    store_name: string
    store_email: string | null
    store_phone_number: string | null
    store_address: string | null
    store_status: string
    currency: string
    timezone: string
    created_at: string

    user: {
        id: number
        email: string
        status: string
        created_at: string
    } | null

    subscription: {
        id: number
        status: string
        trial_start: string | null
        trial_end: string | null
        current_period_start: string
        current_period_end: string
        cancelled_at: string | null
        plans: {
            id: number
            name: string
            slug: string
            price: number
            currency: string
            billing_period: string
        } | null
    } | null

    latest_payment: {
        id: number
        amount: number
        currency: string
        status: string
        paid_at: string | null
        created_at: string
    } | null
}

export interface AdminUsersResponse {
    data: AdminUser[]
}

export interface AdminPayment {
    id: number
    order_reference: string
    gateway_reference: string | null
    amount: number
    currency: string
    status: string
    paid_at: string | null
    created_at: string
    raw_response: unknown

    stores: {
        id: number
        name: string
        email: string | null
    } | null

    users: {
        id: number
        email: string
        status: string
    } | null

    plans: {
        id: number
        name: string
        slug: string
        price: number
        currency: string
        billing_period: string
    } | null
}

export interface AdminPaymentsResponse {
    data: AdminPayment[]
}

export interface AdminAnalyticsResponse {
    data: {
        mrr: number
        conversionRate: number
        churnRate: number

        subscriptions: {
            active: number
            trialing: number
            expired: number
            cancelled: number
        }

        signupsByMonth: {
            month: string
            count: number
        }[]

        revenueByMonth: {
            month: string
            revenue: number
        }[]

        paymentsByStatus: {
            paid: number
            pending: number
            failed: number
            refunded: number
            cancelled: number
        }
    }
}