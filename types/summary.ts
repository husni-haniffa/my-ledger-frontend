export interface SummaryResponse {
    data: {
        summary: Summary
        inventory: Inventory
        products: Products
        sales: Sales
    }
}

export interface Summary {
    revenue: number
    grossProfit: number
    netProfit: number
    netLoss: number
    outstandingPayments: number
    breakEvenSales: number
    marginOfSafety: number
}

export interface Inventory {
    lowStockItems: LowStockItem[]
}

export interface LowStockItem {
    id: number
    name: string
    stock: number
    low_stock_threshold: number
}

export interface Products {
    topSellingProducts: TopSellingProduct[]
}

export interface TopSellingProduct {
    product_name: string
    total_sold: number
}

export interface Sales {
    salesBySource: SalesBySource[]
}

export interface SalesBySource {
    source: string
    revenue: number
}