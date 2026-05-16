import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const Hero = () => {
  const stats = [
    ["Revenue", "Rs. 128,500"],
    ["Gross Profit", "Rs. 56,400"],
    ["Net Profit", "Rs. 42,800"],
    ["Break-even Sales", "Rs. 76,000"],
    ["Margin of Safety", "Rs. 52,500"],
    ["Outstanding Payments", "Rs. 18,200"],
  ]

  const lowStock = [
    ["T-shirt", "3"],
    ["Gift Box", "2"],
    ["Skin Care", "1"],
  ]

  const salesSources = [
    ["Instagram", "Rs. 72,000"],
    ["WhatsApp", "Rs. 48,000"],
    ["Facebook", "Rs. 35,000"],
  ]

  const products = [
    ["Handmade Gift Box", "42 sold"],
    ["Printed T-shirt", "31 sold"],
    ["Skin Care Set", "24 sold"],
  ]

  return (
    <section className="relative overflow-hidden bg-[#071713] py-20 text-white lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(110,231,183,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.1),transparent_30%)]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />

      <div className="container relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.95fr]">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-emerald-300/20 bg-white/[0.06] px-4 py-2 text-[15px] font-semibold tracking-tight text-emerald-300 backdrop-blur-xl">
              Built for Startups. Built to scale.
            </span>

            <h1 className="mt-6 text-[42px] font-bold leading-[0.95] tracking-tight text-white sm:text-[58px] lg:text-[72px]">
              One dashboard.{" "}
              <span className="text-emerald-300">Full Control.</span> Zero
              guesswork.
            </h1>

            <p className="mt-6 max-w-2xl text-[18px] font-medium leading-8 tracking-tight text-slate-300 sm:text-[20px]">
              Your all-in-one digital business ledger - track expenses, manage
              orders, monitor inventory and analyze performance. All in one
              place, all in real time.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-3">
              <Link
                href="/sign-up"
                className="inline-flex h-12 items-center justify-center rounded-full bg-emerald-300 px-7 text-[18px] font-bold tracking-tight text-emerald-950 transition-all duration-200 hover:bg-emerald-200"
              >
                Start free
                <ArrowRight className="ml-2 size-5" />
              </Link>

              <Link
                href="/#features"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] px-7 text-[18px] font-semibold tracking-tight text-white transition-all duration-200 hover:bg-white/12"
              >
                Explore features
              </Link>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-4 text-[15px] font-semibold tracking-tight text-slate-300">
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
              <div className="rounded-[1.5rem] border border-white/10 bg-[#0b211b] p-5">
                <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-4">
                  {["Today", "7 days", "30 days", "Year"].map((item) => (
                    <span
                      key={item}
                      className={`rounded-full px-4 py-2 text-[14px] font-semibold tracking-tight ${item === "Today"
                          ? "bg-emerald-300 text-emerald-950"
                          : "bg-white/[0.06] text-slate-300"
                        }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {stats.map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/10 bg-white/[0.06] p-4"
                    >
                      <p className="text-[14px] font-semibold text-slate-400">
                        {label}
                      </p>
                      <p className="mt-1 text-[21px] font-bold tracking-tight text-white">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-3 grid gap-3 lg:grid-cols-2">
                  <div className="rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4">
                    <p className="text-[15px] font-semibold text-amber-200">
                      Low Stock Items
                    </p>

                    <div className="mt-3 grid gap-2">
                      {lowStock.map(([item, count]) => (
                        <div
                          key={item}
                          className="flex items-center justify-between rounded-xl bg-black/15 px-3 py-2"
                        >
                          <span className="text-[15px] font-semibold text-white">
                            {item}
                          </span>
                          <span className="text-[14px] font-bold text-amber-100">
                            {count} left
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                    <p className="text-[15px] font-semibold text-slate-300">
                      Sales by source
                    </p>

                    <div className="mt-3 grid gap-2">
                      {salesSources.map(([source, revenue]) => (
                        <div
                          key={source}
                          className="flex items-center justify-between rounded-xl bg-white/[0.05] px-3 py-2"
                        >
                          <span className="text-[15px] font-semibold text-white">
                            {source}
                          </span>
                          <span className="text-[14px] font-bold text-emerald-300">
                            {revenue}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                  <p className="text-[15px] font-semibold text-slate-300">
                    Most sold products
                  </p>

                  <div className="mt-3 grid gap-2 sm:grid-cols-3">
                    {products.map(([item, count]) => (
                      <div
                        key={item}
                        className="rounded-xl bg-white/[0.05] px-3 py-2"
                      >
                        <p className="text-[15px] font-semibold leading-5 text-white">
                          {item}
                        </p>
                        <p className="mt-1 text-[14px] font-semibold text-slate-400">
                          {count}
                        </p>
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