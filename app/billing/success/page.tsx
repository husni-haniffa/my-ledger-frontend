import Link from "next/link"

import { Button } from "@/components/ui/button"

const BillingSuccessPage = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4">
            <h1 className="text-2xl font-bold text-emerald-700">
                Payment Successful
            </h1>

            <p className="text-slate-500">
                Your subscription has been activated.
            </p>

            <Button asChild>
                <Link href="/user">
                    Go to Dashboard
                </Link>
            </Button>
        </div>
    )
}

export default BillingSuccessPage