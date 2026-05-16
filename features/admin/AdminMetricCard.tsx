interface AdminMetricCardProps {
    title: string
    value: string | number
    description?: string
}

const AdminMetricCard = ({
    title,
    value,
    description,
}: AdminMetricCardProps) => {
    return (
        <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">{title}</p>

            <p className="mt-3 text-2xl font-bold text-slate-900">{value}</p>

            {description && (
                <p className="mt-2 text-sm text-slate-500">{description}</p>
            )}
        </div>
    )
}

export default AdminMetricCard