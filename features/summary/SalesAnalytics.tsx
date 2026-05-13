import { Products, Sales } from "@/types/summary"


interface SalesAnalyticsProps {
    products: Products
    sales: Sales
}

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-LK', {
        style: 'currency',
        currency: 'LKR',
        maximumFractionDigits: 0,
    }).format(value)
}

export default function SalesAnalytics({
    products,
    sales,
}: SalesAnalyticsProps) {
    return (
        <div className="rounded-xl border p-4 space-y-6">
            <h2 className="text-lg font-semibold">
                Sales Analytics
            </h2>

            <div className="space-y-3">
                <h3 className="text-sm font-medium text-muted-foreground">
                    Top Selling Products
                </h3>

                {products.topSellingProducts.length === 0 ? (
                    <p className="text-sm text-muted-foreground">
                        No top selling products found.
                    </p>
                ) : (
                    products.topSellingProducts.map((product) => (
                        <div
                            key={product.product_name}
                            className="rounded-lg border p-4 flex items-center justify-between"
                        >
                            <p className="font-medium">
                                {product.product_name}
                            </p>

                            <p className="font-bold">
                                {product.total_sold} sold
                            </p>
                        </div>
                    ))
                )}
            </div>

            <div className="space-y-3">
                <h3 className="text-sm font-medium text-muted-foreground">
                    Sales By Source
                </h3>

                {sales.salesBySource.length === 0 ? (
                    <p className="text-sm text-muted-foreground">
                        No sales source data found.
                    </p>
                ) : (
                    sales.salesBySource.map((source) => (
                        <div
                            key={source.source}
                            className="rounded-lg border p-4 flex items-center justify-between"
                        >
                            <p className="capitalize font-medium">
                                {source.source}
                            </p>

                            <p className="font-bold">
                                {formatCurrency(source.revenue)}
                            </p>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}