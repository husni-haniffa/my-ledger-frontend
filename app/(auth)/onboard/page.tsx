import { CreateAccountForm } from "@/features/account/create-account/CreateAccountForm"
import { Check } from "lucide-react"

const benefits = [
    "Add your store details once",
    "Manage orders, inventory, and expenses",
    "Create invoices customers can trust",
    "Track revenue, profit, and performance",
    "See low stock and pending payments clearly",
]

const OnboardingPage = () => {
    return (
        <section className="min-h-screen bg-slate-50 px-4 py-6 lg:flex lg:items-center lg:py-8">
            <div className="container">
                <div className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-200/70 lg:min-h-170 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="relative overflow-hidden bg-[#071713] p-7 text-white sm:p-9 lg:p-10">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(110,231,183,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.12),transparent_30%)]" />

                        <div className="relative flex h-full flex-col justify-between gap-8">
                            <div>
                                <h1 className="text-[30px] font-bold tracking-tight text-white sm:text-[34px]">
                                    My<span className="text-emerald-300">Ledger</span>
                                </h1>

                                <div className="mt-10">
                                    <span className="rounded-full border border-emerald-300/20 bg-white/6 px-4 py-2 text-[15px] font-bold tracking-tight text-emerald-300">
                                        Store setup
                                    </span>

                                    <h2 className="mt-6 max-w-md text-[34px] font-bold leading-tight tracking-tight sm:text-[42px]">
                                        Let’s set up your business properly.
                                    </h2>

                                    <p className="mt-5 max-w-md text-[18px] font-medium leading-8 tracking-tight text-slate-300">
                                        Add your store details once. After that, MyLedger helps you
                                        manage orders, stock, expenses, invoices, and performance
                                        from one clean dashboard.
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-3xl border border-white/10 bg-white/6 p-5 backdrop-blur-xl">
                                <p className="text-[18px] font-bold tracking-tight text-white">
                                    You can update these details later.
                                </p>

                                <div className="mt-5 grid gap-3">
                                    {benefits.map((benefit) => (
                                        <div key={benefit} className="flex items-center gap-3">
                                            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-300 text-emerald-950">
                                                <Check className="size-4" />
                                            </span>

                                            <span className="text-[16px] font-semibold tracking-tight text-slate-200">
                                                {benefit}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center bg-white p-6 sm:p-8 lg:p-10">
                        <div className="w-full max-w-xl">
                            <div className="mb-7">
                                <h2 className="text-[32px] font-bold tracking-tight text-slate-950 sm:text-[40px]">
                                    Create your store
                                </h2>

                                <p className="mt-3 text-[18px] font-medium leading-7 text-slate-600">
                                    This information will appear on your invoices and business
                                    profile.
                                </p>
                            </div>

                            <CreateAccountForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OnboardingPage