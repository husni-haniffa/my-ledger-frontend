import Link from "next/link"

import { Button } from "@/components/ui/button"

const BillingFailedPage = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4">
            <h1 className="text-2xl font-bold text-red-600">
                Payment Failed
            </h1>

            <p className="text-slate-500">
                Your payment could not be completed.
            </p>

            <Button asChild variant="outline">
                <Link href="/billing">
                    Try Again
                </Link>
            </Button>
        </div>
    )
}

export default BillingFailedPage