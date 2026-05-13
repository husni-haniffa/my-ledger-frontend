import { apiRequest } from "@/lib/api.request"
import { SummaryResponse } from "@/types/summary"

export type ReportRange = "today" | "7d" | "30d" | "year"

export function getSummary(
    range: ReportRange,
    token: string
) {
    return apiRequest<SummaryResponse>(
        `/user/summary?range=${range}`,
        token
    )
}