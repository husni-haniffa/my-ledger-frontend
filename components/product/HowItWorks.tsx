const steps = [
    {
        step: "01",
        title: "Sign Up in Seconds",
        description:
            "Create your free account and you're in — no complicated forms, no hassle.",
    },
    {
        step: "02",
        title: "Set Up Your Business",
        description:
            "Add your store details, products, inventory, and pricing — get everything ready in one place.",
    },
    {
        step: "03",
        title: "Run & Grow Daily",
        description:
            "Create orders, share invoices, record expenses, and track your profit, revenue, and performance — all from your dashboard.",
    },
]

const HowItWorks = () => {
    return (
        <section
            className="relative overflow-hidden bg-[#071713] py-20 text-white lg:py-28"
            id="how-it-works"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(110,231,183,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.10),transparent_28%)]" />

            <div className="container relative">
                <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-4 text-center">
                    <span className="rounded-full border border-emerald-300/20 bg-white/[0.06] px-4 py-2 text-[15px] font-bold uppercase tracking-tight text-emerald-300 backdrop-blur-xl">
                        How it works
                    </span>

                    <h1 className="text-[36px] font-bold leading-tight tracking-tight text-white sm:text-[48px] lg:text-[56px]">
                        Set up in minutes.{" "}
                        <span className="text-emerald-300">
                            Built for busy Founders.
                        </span>
                    </h1>

                    <p className="max-w-2xl text-[18px] font-medium leading-8 tracking-tight text-slate-300 sm:text-[20px]">
                        You didn&apos;t start a business to waste time on complicated tools.
                        Get set up in minutes and hit the ground running from day one.
                    </p>
                </div>

                <div className="relative mt-16">
                    <div className="absolute left-0 top-10 hidden h-px w-full bg-gradient-to-r from-transparent via-emerald-300/20 to-transparent lg:block" />

                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        {steps.map((step) => (
                            <div
                                key={step.step}
                                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 shadow-2xl shadow-black/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300/20 hover:bg-white/[0.08]"
                            >
                                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-emerald-300/5 blur-3xl transition-all duration-300 group-hover:bg-emerald-300/10" />

                                <div className="relative">
                                    <div className="flex items-center justify-between">
                                        <span className="inline-flex size-14 items-center justify-center rounded-2xl border border-emerald-300/20 bg-emerald-300/10 text-[22px] font-bold tracking-tight text-emerald-300">
                                            {step.step}
                                        </span>

                                        <div className="h-px w-16 bg-gradient-to-r from-emerald-300/40 to-transparent" />
                                    </div>

                                    <h2 className="mt-6 text-[28px] font-bold leading-tight tracking-tight text-white">
                                        {step.title}
                                    </h2>

                                    <p className="mt-4 text-[17px] font-medium leading-8 tracking-tight text-slate-300">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks