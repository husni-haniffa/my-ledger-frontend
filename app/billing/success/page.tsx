import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

const BillingSuccessPage = () => {
    return (
        <section className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
            <div className="w-full max-w-xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-200/70">
                <div className="relative overflow-hidden bg-[#071713] px-6 py-10 text-center text-white">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(110,231,183,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.10),transparent_30%)]" />

                    <div className="relative flex flex-col items-center">
                        <div className="flex size-20 items-center justify-center rounded-full bg-emerald-300 text-emerald-950">
                            <CheckCircle2 className="size-10" />
                        </div>

                        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300">
                            Payment successful
                        </p>

                        <h1 className="mt-2 text-4xl font-bold tracking-tight">
                            Your workspace is ready.
                        </h1>

                        <p className="mt-4 max-w-md text-lg font-medium leading-8 text-slate-300">
                            Your subscription has been activated successfully. You now have
                            full access to your MyLedger workspace.
                        </p>
                    </div>
                </div>

                <div className="p-6">
                    <Link
                        href="/user"
                        className="inline-flex h-12 w-full items-center justify-center rounded-full bg-slate-950 text-base font-bold tracking-tight text-white transition-all duration-200 hover:bg-slate-800"
                    >
                        Go to dashboard
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default BillingSuccessPage