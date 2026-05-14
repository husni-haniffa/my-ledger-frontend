import { apiRequest } from "@/lib/api.request";
import { CurrentPlanReponse } from "@/types/billing";

export function getCurrentPlan(token: string) {
    return apiRequest<CurrentPlanReponse>(
        "/user/billing/current-plan",
        token
    )
}