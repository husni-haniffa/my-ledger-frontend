import { Products, Sales } from "@/types/summary"
import { BarChart3, Trophy } from "lucide-react"

interface SalesPerformanceProps {
    products: Products
    sales: Sales
}

const formatCurrency = (value: number) => {
    return `LKR ${Number(value || 0).toLocaleString()}`
}

const formatSource = (source: string) => {
    return source.replace("_", " ")
}

const SalesPerformance = ({ products, sales }: SalesPerformanceProps) => {
    const topProducts = products.topSellingProducts ?? []
    const salesBySource = sales.salesBySource ?? []

    const maxRevenue = Math.max(...salesBySource.map((item) => item.revenue), 0)

    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-wider text-emerald-600">
                Sales performance
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                What is selling, and where.
            </h2>

            <p className="mt-2 text-base font-medium leading-7 text-slate-600">
                See your strongest products and which sales channels bring in revenue.
            </p>

            <div className="mt-6 grid gap-5 lg:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex items-center gap-2">
                        <Trophy className="size-5 text-emerald-600" />
                        <h3 className="text-lg font-bold text-slate-950">
                            Most sold products
                        </h3>
                    </div>

                    <div className="mt-4 grid gap-2">
                        {topProducts.length === 0 ? (
                            <p className="text-sm font-medium leading-6 text-slate-600">
                                No product sales yet for this period.
                            </p>
                        ) : (
                            topProducts.map((product) => (
                                <div
                                    key={product.product_name}
                                    className="flex items-center justify-between rounded-xl bg-white px-3 py-2"
                                >
                                    <span className="text-sm font-bold text-slate-950">
                                        {product.product_name}
                                    </span>

                                    <span className="text-sm font-bold text-emerald-700">
                                        {product.total_sold} sold
                                    </span>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex items-center gap-2">
                        <BarChart3 className="size-5 text-emerald-600" />
                        <h3 className="text-lg font-bold text-slate-950">
                            Sales by source
                        </h3>
                    </div>

                    <div className="mt-4 grid gap-4">
                        {salesBySource.length === 0 ? (
                            <p className="text-sm font-medium leading-6 text-slate-600">
                                No sales source data yet for this period.
                            </p>
                        ) : (
                            salesBySource.map((item) => {
                                const width =
                                    maxRevenue > 0 ? `${(item.revenue / maxRevenue) * 100}%` : "0%"

                                return (
                                    <div key={item.source}>
                                        <div className="mb-2 flex items-center justify-between gap-4">
                                            <span className="text-sm font-bold capitalize text-slate-950">
                                                {formatSource(item.source)}
                                            </span>

                                            <span className="text-sm font-bold text-slate-600">
                                                {formatCurrency(item.revenue)}
                                            </span>
                                        </div>

                                        <div className="h-2 rounded-full bg-white">
                                            <div
                                                className="h-2 rounded-full bg-emerald-500"
                                                style={{ width }}
                                            />
                                        </div>
                                    </div>
                                )
                            })
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SalesPerformance