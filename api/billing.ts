import { apiRequest } from "@/lib/api.request";
import { CreatePaymentPayload, CreatePaymentResponse, CurrentPlanReponse } from "@/types/billing";

export function getCurrentPlan(token: string) {
    return apiRequest<CurrentPlanReponse>(
        "/user/billing/current-plan",
        token
    )
}

export function createPayment(
    payload: CreatePaymentPayload,
    token: string
) {
    return apiRequest<CreatePaymentResponse>(
        "/user/billing/create-payment",
        token,
        {
            method: "POST",
            body: JSON.stringify(payload),
        }
    )
}