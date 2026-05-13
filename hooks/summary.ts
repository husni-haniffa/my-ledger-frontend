
import { getSummary, ReportRange } from "@/api/summary"
import { useAuth } from "@clerk/nextjs"
import { useQuery } from "@tanstack/react-query"

export function useGetSummary(range: ReportRange) {
    const { getToken } = useAuth()

    return useQuery({
        queryKey: ["summary", range],
        queryFn: async () => {
            const token = await getToken()
            if (!token) throw new Error("Unauthorized")

            return getSummary(range, token)
        },
    })
}