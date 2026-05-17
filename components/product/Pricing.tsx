import { Check } from "lucide-react"
import Link from "next/link"

const benefits = [
  "30 days full access free",
  "Pay once and get one month access",
  "No long-term contract",
  "Order, expense, and inventory tracking",
  "Invoices, reports, and payment tracking",
  "Cancel anytime by not renewing",
]

const Pricing = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28 scroll-mt-24 lg:scroll-mt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.06),transparent_28%)]" />

      <div className="container relative" id="pricing">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold uppercase tracking-tight text-emerald-700">
            Pricing
          </span>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Built for Bootstrappers.{" "}
            <span className="text-emerald-600">Start free.</span> Continue when
            ready.
          </h1>

          <p className="max-w-2xl text-lg font-medium leading-8 tracking-tight text-slate-600 sm:text-xl">
            Start free for 30 days. After that, pay LKR 990 only when you want
            to continue. One payment gives you one month of access.
          </p>
        </div>

        <div className="relative mx-auto mt-12 max-w-md">
          <div className="absolute -inset-4 rounded-[2rem] bg-emerald-200/50 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-emerald-200 bg-white p-7 shadow-2xl shadow-emerald-100/80 sm:p-8">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-emerald-100 blur-3xl" />

            <div className="relative">
              <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-bold tracking-tight text-emerald-700">
                Simple monthly access
              </span>

              <div className="mt-5">
                <h2 className="text-4xl font-bold tracking-tight text-slate-950">
                  Free
                  <span className="ml-2 text-lg font-semibold text-slate-500">
                    / 30 days
                  </span>
                </h2>

                <p className="mt-2 text-base font-medium text-slate-600">
                  Then continue with
                </p>

                <h3 className="mt-1 text-3xl font-bold tracking-tight text-slate-950">
                  LKR 990
                  <span className="ml-2 text-base font-semibold text-slate-500">
                    / month
                  </span>
                </h3>

                <p className="mt-3 rounded-2xl bg-slate-50 p-3 text-sm font-semibold leading-6 text-slate-600">
                  Pay once, use MyLedger for one month. No yearly lock-in. No
                  complicated plans.
                </p>
              </div>

              <div className="my-7 h-px bg-slate-200" />

              <div className="grid gap-3">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                      <Check className="size-4" />
                    </span>

                    <span className="text-base font-semibold tracking-tight text-slate-700">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/sign-up"
                className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-full bg-emerald-600 px-6 text-lg font-bold tracking-tight text-white transition-all duration-200 hover:bg-emerald-700"
              >
                Start free
              </Link>

              <p className="mt-4 text-center text-sm font-semibold tracking-tight text-slate-500">
                No credit card needed for the free trial
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing