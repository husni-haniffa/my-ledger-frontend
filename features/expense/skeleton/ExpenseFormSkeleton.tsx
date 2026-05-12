import { Skeleton } from "@/components/ui/skeleton"

export function ExpenseFormSkeleton() {
    return (
        <div className="space-y-4">
            {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="space-y-2">
                    <Skeleton className="h-3 w-36" />
                    <Skeleton className="h-10 w-full" />
                </div>
            ))}

            <div className="mt-6 flex gap-2">
                <Skeleton className="h-10 w-20" />
                <Skeleton className="h-10 w-20" />
            </div>
        </div>
    )
}