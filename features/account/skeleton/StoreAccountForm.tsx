import { Skeleton } from "@/components/ui/skeleton"

export function StoreAccountFormSkeleton() {
    return (
        <div className="bg-white p-4 rounded-2xl">
            {/* Title */}
            <Skeleton className="h-4 w-24 mb-6" />

            <div className="space-y-4">
                {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="space-y-2">
                        <Skeleton className="h-3 w-32" />
                        <Skeleton className="h-9 w-full" />
                    </div>
                ))}
            </div>

            {/* Buttons */}
            <div className="mt-6 flex gap-2">
                <Skeleton className="h-9 w-20" />
                <Skeleton className="h-9 w-20" />
            </div>
        </div>
    )
}