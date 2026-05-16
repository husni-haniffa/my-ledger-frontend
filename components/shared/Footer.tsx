import Link from "next/link"

const footers = [
    {
        id: 1,
        title: "Product",
        links: [
            { label: "Features", href: "#features" },
            { label: "How it works", href: "#how-it-works" },
            { label: "Pricing", href: "#pricing" },
            { label: "FAQ", href: "#faq" },
            { label: "Contact", href: "#contact" },
        ],
    },
    {
        id: 2,
        title: "Legal",
        links: [
            { label: "Privacy Policy", href: "#privacy" },
            { label: "Terms of Service", href: "#terms" },
            { label: "About", href: "#about" },
        ],
    },
    {
        id: 3,
        title: "Company",
        links: [
            { label: "hello@myledgerlk.com", href: "mailto:hello@myledgerlk.com" },
            { label: "+94 (76) 905-0210", href: "tel:+94769050210" },
            { label: "Dehiwala, Mount Lavinia", href: "#address" },
        ],
    },
]

const Footer = () => {
    return (
        <footer
            id="contact"
            className="relative overflow-hidden bg-[#071713] text-white"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(110,231,183,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.1),transparent_28%)]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent" />

            <div className="container relative grid gap-12 py-14 lg:grid-cols-[1.2fr_1fr] lg:py-20">
                <div className="max-w-2xl">
                    <Link
                        href="/"
                        className="text-[28px] font-bold tracking-tight text-white sm:text-[32px]"
                    >
                        My<span className="text-emerald-300">Ledger</span>
                    </Link>

                    <p className="mt-5 max-w-xl text-[17px] font-medium leading-8 tracking-tight text-slate-300 sm:text-[18px]">
                        A digital business ledger built for online entrepreneurs and
                        founders — to record expenses, manage orders, monitor inventory,
                        and analyze business performance, all in one place. Replace the
                        manual work, go fully digital, and get complete visibility over your
                        business — from day one.
                    </p>

                    <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/10 backdrop-blur-xl">
                        <p className="text-[18px] font-semibold tracking-tight text-white">
                            Built for small business owners who want control without
                            complexity.
                        </p>
                        <p className="mt-2 text-[16px] font-medium leading-7 text-slate-400">
                            Manage sales, stock, expenses, invoices, and business performance
                            from one calm dashboard.
                        </p>
                    </div>
                </div>

                <div className="grid gap-8 sm:grid-cols-3">
                    {footers.map((footer) => (
                        <div key={footer.id}>
                            <h2 className="text-[18px] font-bold tracking-tight text-emerald-300">
                                {footer.title}
                            </h2>

                            <div className="mt-4 grid gap-3">
                                {footer.links.map((link) => (
                                    <Link
                                        href={link.href}
                                        key={link.label}
                                        className="text-[16px] font-semibold tracking-tight text-slate-300 transition-colors duration-200 hover:text-white"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container relative border-t border-white/10 py-6">
                <div className="flex flex-col gap-3 text-[15px] font-medium tracking-tight text-slate-400 sm:flex-row sm:items-center sm:justify-between">
                    <p>&copy; {new Date().getFullYear()} MyLedger. All rights reserved.</p>
                    <p className="text-slate-500">Built by Husni Haniffa</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer