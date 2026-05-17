import BillingButton from "@/features/billing/BillingButton"
import CurrentPlan from "@/features/billing/CurrentPlan"

const BillingPage = () => {
    return (
        <section className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl space-y-6">
                <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                    <div className="relative overflow-hidden bg-[#071713] px-6 py-8 text-white">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(110,231,183,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.10),transparent_30%)]" />

                        <div className="relative">
                            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300">
                                Billing
                            </p>

                            <h1 className="mt-2 text-4xl font-bold tracking-tight text-white">
                                Keep your business running smoothly.
                            </h1>

                            <p className="mt-4 max-w-2xl text-lg font-medium leading-8 text-slate-300">
                                MyLedger helps you manage orders, expenses, inventory, invoices,
                                and business performance from one dashboard. Continue your plan
                                to keep everything in sync.
                            </p>
                        </div>
                    </div>
                </div>

                <CurrentPlan />

                <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                                Continue your subscription
                            </h2>

                            <p className="mt-2 text-base font-medium leading-7 text-slate-600">
                                Secure payment powered by our payment gateway. Your subscription
                                will activate immediately after successful payment.
                            </p>
                        </div>

                        <BillingButton />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BillingPage