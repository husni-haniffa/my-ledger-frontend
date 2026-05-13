"use client"

import { ReportRange } from "@/api/summary"
import { useGetSummary } from "@/hooks/summary"
import { useState } from "react"
import SummarySkeleton from "./skeleton/SummarySkeleton"
import FinancialSummary from "./FinancialSummary"
import InventoryInsights from "./InventoryInsights"
import SalesAnalytics from "./SalesAnalytics"
import { Button } from "@/components/ui/button"
const ranges: { label: string; value: ReportRange }[] = [
    { label: "Today", value: "today" },
    { label: "7 Days", value: "7d" },
    { label: "30 Days", value: "30d" },
    { label: "Year", value: "year" },
]


const Report = () => {
    const [range, setRange] = useState<ReportRange>("today")
    const { data, isLoading, isError } = useGetSummary(range)
    if(isLoading) {
        return (
            <SummarySkeleton/>
        )
    }
    if(isError) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center gap-3">
                <h1 className="text-lg font-semibold">
                    Something went wrong
                </h1>

                <p className="text-sm text-slate-500">
                    Please try again.
                </p>
            </div>
        )
    }
    if (!data?.data) return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-3">
            <h1 className="text-lg font-semibold">
                Something went wrong
            </h1>

            <p className="text-sm text-slate-500">
                Please try again.
            </p>
        </div>
    ) 

  return (

      <div className="space-y-6">

          <div className="flex flex-wrap gap-2">
              {ranges.map((item) => (
                  <Button
                      key={item.value}
                      size="sm"
                      variant={range === item.value ? "default" : "outline"}
                      onClick={() => setRange(item.value)}
                      className={range === item.value ? "bg-emerald-600 hover:bg-emerald-700" : ""}
                  >
                      {item.label}
                  </Button>
              ))}
          </div>

          <FinancialSummary summary={data?.data?.summary} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <InventoryInsights inventory={data?.data?.inventory} />

              <SalesAnalytics
                  products={data?.data?.products}
                  sales={data?.data?.sales}
              />
          </div>
      </div>
  )
}

export default Report