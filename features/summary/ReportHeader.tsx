import { ReportRange } from "@/api/summary"

const ranges: { label: string; value: ReportRange }[] = [
    { label: "Today", value: "today" },
    { label: "7 days", value: "7d" },
    { label: "30 days", value: "30d" },
    { label: "Year", value: "year" },
]

interface ReportHeaderProps {
    range: ReportRange
    setRange: (range: ReportRange) => void
}

const ReportHeader = ({ range, setRange }: ReportHeaderProps) => {
    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-emerald-600">
                        Dashboard
                    </p>

                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                        Your business snapshot.
                    </h1>

                    <p className="mt-2 max-w-2xl text-base font-medium leading-7 text-slate-600">
                        See sales, profit, expenses, stock, and payments in one clear place.
                    </p>
                </div>

                <div className="flex flex-wrap gap-2">
                    {ranges.map((item) => (
                        <button
                            key={item.value}
                            onClick={() => setRange(item.value)}
                            className={`h-10 rounded-full px-4 text-sm font-bold transition-all ${range === item.value
                                    ? "bg-emerald-600 text-white hover:bg-emerald-700"
                                    : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ReportHeader