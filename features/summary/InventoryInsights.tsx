import { Inventory } from "@/types/summary"


interface InventoryInsightsProps {
    inventory: Inventory
}

export default function InventoryInsights({
    inventory,
}: InventoryInsightsProps) {
    return (
        <div className="rounded-xl border p-4 space-y-4">
            <h2 className="text-lg font-semibold">
                Inventory Insights
            </h2>

            {inventory.lowStockItems.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                    No low stock items found.
                </p>
            ) : (
                <div className="space-y-3">
                    {inventory.lowStockItems.map((item) => (
                        <div
                            key={item.id}
                            className="rounded-lg border p-4 flex items-center justify-between"
                        >
                            <div>
                                <p className="font-medium">
                                    {item.name}
                                </p>

                                <p className="text-sm text-muted-foreground">
                                    Threshold: {item.low_stock_threshold}
                                </p>
                            </div>

                            <div className="text-right">
                                <p className="text-sm text-muted-foreground">
                                    Current Stock
                                </p>

                                <p className="text-lg font-bold">
                                    {item.stock}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}