const SkeletonBox = ({ className = "" }: { className?: string }) => {
    return <div className={`animate-pulse rounded-3xl bg-slate-200 ${className}`} />
}

const ReportSkeleton = () => {
    return (
        <section className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <SkeletonBox className="h-4 w-24" />
                <SkeletonBox className="mt-4 h-8 w-72" />
                <SkeletonBox className="mt-3 h-4 w-full max-w-xl" />
                <div className="mt-6 flex flex-wrap gap-2">
                    <SkeletonBox className="h-10 w-20 rounded-full" />
                    <SkeletonBox className="h-10 w-20 rounded-full" />
                    <SkeletonBox className="h-10 w-20 rounded-full" />
                    <SkeletonBox className="h-10 w-20 rounded-full" />
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {Array.from({ length: 4 }).map((_, index) => (
                    <SkeletonBox key={index} className="h-40" />
                ))}
            </div>

            <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
                <SkeletonBox className="h-96" />
                <SkeletonBox className="h-96" />
            </div>

            <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
                <SkeletonBox className="h-96" />
                <SkeletonBox className="h-96" />
            </div>
        </section>
    )
}

export default ReportSkeleton