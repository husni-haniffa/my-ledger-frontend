const sections = [
    {
        title: "Built for Modern Sellers",
        content: [
            "MyLedger was created to simplify the way small businesses manage their daily operations.",
            "Many existing POS and business management systems are expensive, complicated, and often require hardware, setup costs, or technical knowledge that small sellers simply do not need.",
            "We saw online sellers, home businesses, freelancers, and small shop owners struggling to manage everything manually through spreadsheets, notebooks, social media chats, or disconnected tools.",
            "MyLedger was built to change that.",
        ],
    },
    {
        title: "Why MyLedger Exists",
        content: [
            "Small business owners were constantly trying to manage orders, track inventory, monitor expenses, create invoices, and understand their business performance clearly.",
            "Most tools felt too complicated, too expensive, or built for much larger companies.",
            "MyLedger focuses on giving sellers a simpler and more practical way to run their business without overwhelming them.",
        ],
    },
    {
        title: "Designed for Small Businesses & Social Sellers",
        list: [
            "Social media sellers",
            "Facebook and Instagram businesses",
            "Resellers",
            "Freelancers",
            "Home-based businesses",
            "Small shop owners",
            "Growing founders managing daily operations",
        ],
        footer:
            "Instead of enterprise-level complexity, MyLedger focuses on clarity, simplicity, and modern workflows that help business owners stay organized and make better decisions.",
    },
    {
        title: "Simple First. Scalable for the Future.",
        content: [
            "Today, MyLedger helps sellers manage inventory, track orders, record expenses, generate invoices, monitor profits, and understand business performance from one dashboard.",
        ],
        future: [
            "Smarter automation",
            "More advanced analytics",
            "Improved reporting",
            "Additional business tools",
            "Future mobile app experience for subscribers",
        ],
    },
]

const AboutPage = () => {
    return (
        <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.05),transparent_28%)]" />

            <div className="container relative">
                {/* Hero */}
                <div className="mx-auto max-w-4xl text-center">
                    <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold tracking-tight text-emerald-700">
                        About MyLedger
                    </span>

                    <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                        Business management built for{" "}
                        <span className="text-emerald-600">modern sellers.</span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-3xl text-base font-medium leading-8 text-slate-600 sm:text-lg">
                        MyLedger helps small businesses and online sellers manage inventory,
                        orders, expenses, invoices, and business performance from one
                        simple dashboard.
                    </p>
                </div>

                {/* Story Sections */}
                <div className="mx-auto mt-16 flex max-w-5xl flex-col gap-8">
                    {sections.map((section) => (
                        <div
                            key={section.title}
                            className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
                        >
                            <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                                {section.title}
                            </h2>

                            {/* Paragraphs */}
                            {section.content && (
                                <div className="mt-5 space-y-5">
                                    {section.content.map((paragraph) => (
                                        <p
                                            key={paragraph}
                                            className="text-base font-medium leading-8 text-slate-600"
                                        >
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            )}

                            {/* Audience List */}
                            {section.list && (
                                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                    {section.list.map((item) => (
                                        <div
                                            key={item}
                                            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-base font-semibold text-slate-700"
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Footer Text */}
                            {section.footer && (
                                <p className="mt-6 text-base font-medium leading-8 text-slate-600">
                                    {section.footer}
                                </p>
                            )}

                            {/* Future Vision */}
                            {section.future && (
                                <div className="mt-8">
                                    <h3 className="text-lg font-bold tracking-tight text-slate-950">
                                        What&apos;s coming next
                                    </h3>

                                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                                        {section.future.map((item) => (
                                            <div
                                                key={item}
                                                className="rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-4 text-base font-semibold text-emerald-700"
                                            >
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Sri Lanka Section */}
                <div className="mx-auto mt-8 max-w-5xl rounded-[2rem] bg-[#071713] p-8 text-white shadow-2xl shadow-emerald-950/10 sm:p-10">
                    <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-bold tracking-tight text-emerald-300">
                        Built in Sri Lanka
                    </span>

                    <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                        Proudly built for modern entrepreneurs.
                    </h2>

                    <div className="mt-6 space-y-5">
                        <p className="text-base font-medium leading-8 text-slate-300">
                            MyLedger is proudly being built in Sri Lanka with a focus on
                            supporting modern entrepreneurs and independent sellers building
                            businesses online and offline.
                        </p>

                        <p className="text-base font-medium leading-8 text-slate-300">
                            We believe business software should not feel complicated,
                            expensive, or inaccessible.
                        </p>

                        <p className="text-base font-medium leading-8 text-slate-300">
                            It should help people focus on growing their business — not
                            struggling to manage it.
                        </p>
                    </div>
                </div>

                {/* Mission */}
                <div className="mx-auto mt-8 max-w-5xl rounded-[2rem] border border-emerald-100 bg-emerald-50 p-8 text-center sm:p-10">
                    <span className="text-sm font-bold uppercase tracking-wide text-emerald-700">
                        Our Mission
                    </span>

                    <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
                        To make business management simpler, clearer, and more accessible
                        for modern small businesses and online sellers.
                    </h2>
                </div>
            </div>
        </section>
    )
}

export default AboutPage