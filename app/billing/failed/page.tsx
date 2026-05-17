import Link from "next/link"
import { AlertCircle } from "lucide-react"

const BillingFailedPage = () => {
    return (
        <section className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
            <div className="w-full max-w-xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-200/70">
                <div className="px-6 py-10 text-center">
                    <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-red-50 text-red-600">
                        <AlertCircle className="size-10" />
                    </div>

                    <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-red-500">
                        Payment incomplete
                    </p>

                    <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-950">
                        We couldn&apos;t complete your payment.
                    </h1>

                    <p className="mt-4 text-lg font-medium leading-8 text-slate-600">
                        Your subscription has not been activated yet. You can safely try
                        again using the button below.
                    </p>

                    <Link
                        href="/billing"
                        className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-full border border-slate-200 bg-white text-base font-bold tracking-tight text-slate-950 transition-all duration-200 hover:bg-slate-50"
                    >
                        Return to billing
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default BillingFailedPage