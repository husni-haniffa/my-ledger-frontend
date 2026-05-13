import { Skeleton } from '@/components/ui/skeleton'

/* =========================
   FINANCIAL SUMMARY SKELETON
========================= */

export function FinancialSummarySkeleton() {
    return (
        <div className="rounded-xl border p-4 space-y-4">
            <Skeleton className="h-6 w-48" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div
                        key={index}
                        className="rounded-lg border p-4 space-y-3"
                    >
                        <Skeleton className="h-4 w-28" />

                        <Skeleton className="h-8 w-32" />
                    </div>
                ))}
            </div>
        </div>
    )
}

/* =========================
   INVENTORY INSIGHTS SKELETON
========================= */

export function InventoryInsightsSkeleton() {
    return (
        <div className="rounded-xl border p-4 space-y-4">
            <Skeleton className="h-6 w-40" />

            <div className="space-y-3">
                {Array.from({ length: 3 }).map((_, index) => (
                    <div
                        key={index}
                        className="rounded-lg border p-4 flex items-center justify-between"
                    >
                        <div className="space-y-2">
                            <Skeleton className="h-5 w-40" />

                            <Skeleton className="h-4 w-24" />
                        </div>

                        <div className="space-y-2 flex flex-col items-end">
                            <Skeleton className="h-4 w-20" />

                            <Skeleton className="h-6 w-10" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

/* =========================
   SALES ANALYTICS SKELETON
========================= */

export function SalesAnalyticsSkeleton() {
    return (
        <div className="rounded-xl border p-4 space-y-6">
            <Skeleton className="h-6 w-36" />

            {/* Top Selling Products */}
            <div className="space-y-3">
                <Skeleton className="h-4 w-40" />

                {Array.from({ length: 2 }).map((_, index) => (
                    <div
                        key={index}
                        className="rounded-lg border p-4 flex items-center justify-between"
                    >
                        <Skeleton className="h-5 w-40" />

                        <Skeleton className="h-5 w-16" />
                    </div>
                ))}
            </div>

            {/* Sales By Source */}
            <div className="space-y-3">
                <Skeleton className="h-4 w-32" />

                {Array.from({ length: 2 }).map((_, index) => (
                    <div
                        key={index}
                        className="rounded-lg border p-4 flex items-center justify-between"
                    >
                        <Skeleton className="h-5 w-28" />

                        <Skeleton className="h-5 w-24" />
                    </div>
                ))}
            </div>
        </div>
    )
}

/* =========================
   DASHBOARD PAGE SKELETON
========================= */

export default function SummarySkeleton() {
    return (
        <div className="space-y-6">
            <FinancialSummarySkeleton />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <InventoryInsightsSkeleton />

                <SalesAnalyticsSkeleton />
            </div>
        </div>
    )
}