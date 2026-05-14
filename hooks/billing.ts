import { getCurrentPlan } from "@/api/billing"
import { useAuth } from "@clerk/nextjs"
import { useQuery } from "@tanstack/react-query"

export function useGetCurrentPlan() {
    const { getToken } = useAuth()

    return useQuery({
        queryKey: ["current-plan"],

        queryFn: async () => {
            const token = await getToken()

            if (!token) {
                throw new Error("Unauthorized")
            }

            return getCurrentPlan(token)
        },
    })
}

// When a user subscribes run the query key again 