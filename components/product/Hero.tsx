import Link from "next/link"
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  BarChart3,
  WalletCards,
} from "lucide-react"

const Hero = () => {
  const snapshot = [
    ["Revenue", "LKR 128,500", "Completed sales"],
    ["Gross Profit", "LKR 56,400", "Before expenses"],
    ["Net Profit", "LKR 42,800", "After expenses"],
    ["Outstanding", "LKR 18,200", "Waiting to collect"],
  ]

  const lowStock = [
    ["T-shirt", "3 left"],
    ["Gift Box", "2 left"],
    ["Skin Care", "1 left"],
  ]

  const salesSources = [
    ["Instagram", "LKR 72,000", "w-[80%]"],
    ["WhatsApp", "LKR 48,000", "w-[55%]"],
    ["Facebook", "LKR 35,000", "w-[40%]"],
  ]

  return (
    <section className="relative overflow-hidden bg-[#071713] py-20 text-white lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(110,231,183,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.1),transparent_30%)]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-white to-transparent" />

      <div className="container relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.95fr]">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-emerald-300/20 bg-white/6 px-4 py-2 text-sm font-semibold tracking-tight text-emerald-300 backdrop-blur-xl">
              Built for Startups. Built to scale.
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              One dashboard.{" "}
              <span className="text-emerald-300">Full Control.</span> Zero
              guesswork.
            </h1>

            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 tracking-tight text-slate-300 sm:text-xl">
              Your all-in-one digital business ledger - track expenses, manage
              orders, monitor inventory and analyze performance. All in one
              place, all in real time.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-3">
              <Link
                href="/sign-up"
                className="inline-flex h-12 items-center justify-center rounded-full bg-emerald-300 px-7 text-lg font-bold tracking-tight text-emerald-950 transition-all duration-200 hover:bg-emerald-200"
              >
                Start free
                <ArrowRight className="ml-2 size-5" />
              </Link>

              <Link
                href="/#features"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/6 px-7 text-lg font-semibold tracking-tight text-white transition-all duration-200 hover:bg-white/12"
              >
                Explore features
              </Link>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-4 text-sm font-semibold tracking-tight text-slate-300">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-300" />
                No card needed
              </span>

              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-300" />
                Setup under 2 minutes
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-emerald-300/10 blur-3xl" />

            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.07] p-4 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-white/10 bg-white p-4 text-slate-950">
                <div className="flex flex-col gap-3 border-b border-slate-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-emerald-600">
                      Dashboard
                    </p>
                    <h2 className="text-2xl font-bold tracking-tight">
                      Your business snapshot
                    </h2>
                  </div>

                  <div className="flex gap-2">
                    {["Today", "7d", "30d", "Year"].map((item) => (
                      <span
                        key={item}
                        className={`rounded-full px-3 py-1.5 text-sm font-bold ${item === "Today"
                            ? "bg-emerald-600 text-white"
                            : "bg-slate-100 text-slate-600"
                          }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {snapshot.map(([label, value, helper]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
                        {label}
                      </p>
                      <p className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                        {value}
                      </p>
                      <p className="mt-1 text-sm font-medium text-slate-500">
                        {helper}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-3 grid gap-3 lg:grid-cols-2">
                  <div className="rounded-2xl border border-amber-100 bg-amber-50 p-4">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="size-5 text-amber-700" />
                      <p className="font-bold text-slate-950">Low stock</p>
                    </div>

                    <div className="mt-3 grid gap-2">
                      {lowStock.map(([item, count]) => (
                        <div
                          key={item}
                          className="flex items-center justify-between rounded-xl bg-white px-3 py-2"
                        >
                          <span className="text-sm font-bold text-slate-950">
                            {item}
                          </span>
                          <span className="text-sm font-bold text-amber-700">
                            {count}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex items-center gap-2">
                      <WalletCards className="size-5 text-slate-700" />
                      <p className="font-bold text-slate-950">
                        Business health
                      </p>
                    </div>

                    <div className="mt-3 space-y-2 text-sm font-semibold text-slate-600">
                      <p>Break-even: LKR 76,000</p>
                      <p>Margin of safety: LKR 52,500</p>
                      <p>Expenses are tracked separately</p>
                    </div>
                  </div>
                </div>

                <div className="mt-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="size-5 text-emerald-600" />
                    <p className="font-bold text-slate-950">Sales by source</p>
                  </div>

                  <div className="mt-4 grid gap-3">
                    {salesSources.map(([source, revenue, width]) => (
                      <div key={source}>
                        <div className="mb-1 flex items-center justify-between">
                          <span className="text-sm font-bold text-slate-950">
                            {source}
                          </span>
                          <span className="text-sm font-bold text-slate-600">
                            {revenue}
                          </span>
                        </div>

                        <div className="h-2 rounded-full bg-white">
                          <div
                            className={`h-2 rounded-full bg-emerald-500 ${width}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero