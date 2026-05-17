import {
    ClipboardList,
    Wallet,
    Boxes,
    ChartNoAxesCombined,
    ReceiptText,
    CreditCard,
} from "lucide-react"

const features = [
    {
        icon: ClipboardList,
        title: "Order Management",
        description:
            "Track and manage every order in real time — never miss a sale or lose track of a customer request again.",
    },
    {
        icon: Wallet,
        title: "Expense Tracking",
        description:
            "Record every cost and expense instantly — stay on top of your spending and keep your finances clean.",
    },
    {
        icon: Boxes,
        title: "Inventory Control",
        description:
            "Monitor your stock levels in real time — get alerted before you run low and never oversell again.",
    },
    {
        icon: ChartNoAxesCombined,
        title: "Business Insights",
        description:
            "From profit & loss to revenue, break-even, and sales by source — know exactly how your business is performing at a glance.",
    },
    {
        icon: ReceiptText,
        title: "Smart Invoicing",
        description:
            "Create and share professional digital invoices in seconds — no paperwork, no delays, just seamless billing.",
    },
    {
        icon: CreditCard,
        title: "Payment Tracking",
        description:
            "See which orders are paid, pending, or refunded — and keep outstanding payments visible before they affect your cash flow.",
    },
]

const Features = () => {
    return (
        <section
            className="relative overflow-hidden bg-slate-50 py-20 lg:py-28 scroll-mt-24 lg:scroll-mt-32"
            id="features"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.06),transparent_28%)]" />

            <div className="container relative">
                <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-4 text-center">
                    <span className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-[15px] font-bold uppercase tracking-tight text-emerald-700">
                        Features
                    </span>

                    <h1 className="text-[36px] font-bold leading-tight tracking-tight text-slate-950 sm:text-[48px] lg:text-[56px]">
                        Stop working manually.{" "}
                        <span className="text-emerald-600">Start running smarter.</span>
                    </h1>

                    <p className="max-w-2xl text-[18px] font-medium leading-8 tracking-tight text-slate-600 sm:text-[20px]">
                        From day one, we hand-hold your business into the digital world —
                        making digitalization your biggest competitive advantage, not your
                        biggest challenge.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="group rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm shadow-slate-200/70 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-100/70"
                        >
                            <div className="flex size-12 items-center justify-center rounded-2xl border border-emerald-100 bg-emerald-50 text-emerald-600 transition-colors duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                                <feature.icon className="size-6" />
                            </div>

                            <h2 className="mt-5 text-[24px] font-bold tracking-tight text-slate-950">
                                {feature.title}
                            </h2>

                            <p className="mt-3 text-[17px] font-medium leading-7 tracking-tight text-slate-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features