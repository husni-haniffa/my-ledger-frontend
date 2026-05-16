import { Check } from "lucide-react"
import Link from "next/link"

const benefits = [
  "Order management",
  "Expense tracking",
  "Inventory control",
  "Business insights",
  "Smart invoicing",
  "Payment tracking",
]

const Pricing = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.06),transparent_28%)]" />

      <div className="container relative" id="pricing">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-4 text-center">
          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-[15px] font-bold uppercase tracking-tight text-emerald-700">
            Pricing
          </span>

          <h1 className="text-[36px] font-bold leading-tight tracking-tight text-slate-950 sm:text-[48px] lg:text-[56px]">
            Built for Bootstrappers.{" "}
            <span className="text-emerald-600">Start free</span> Scale smart.
          </h1>

          <p className="max-w-2xl text-[18px] font-medium leading-8 tracking-tight text-slate-600 sm:text-[20px]">
            Full access. 30 days free. No strings attached - upgrade only when
            you&apos;re ready to level up
          </p>
        </div>

        <div className="relative mx-auto mt-12 max-w-md">
          <div className="absolute -inset-4 rounded-[2rem] bg-emerald-200/50 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-emerald-200 bg-white p-7 shadow-2xl shadow-emerald-100/80 sm:p-8">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-emerald-100 blur-3xl" />

            <div className="relative">
              <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1.5 text-[14px] font-bold tracking-tight text-emerald-700">
                30-day free trial
              </span>

              <div className="mt-5">
                <h2 className="text-[42px] font-bold tracking-tight text-slate-950">
                  Free
                  <span className="ml-2 text-[18px] font-semibold text-slate-500">
                    / 30 days
                  </span>
                </h2>

                <p className="mt-2 text-[17px] font-medium text-slate-600">
                  Then continue for
                </p>

                <h3 className="mt-1 text-[34px] font-bold tracking-tight text-slate-950">
                  LKR 990
                  <span className="ml-2 text-[17px] font-semibold text-slate-500">
                    / month
                  </span>
                </h3>
              </div>

              <div className="my-7 h-px bg-slate-200" />

              <div className="grid gap-3">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                      <Check className="size-4" />
                    </span>

                    <span className="text-[17px] font-semibold tracking-tight text-slate-700">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/sign-up"
                className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-full bg-emerald-600 px-6 text-[18px] font-bold tracking-tight text-white transition-all duration-200 hover:bg-emerald-700"
              >
                Start free
              </Link>

              <p className="mt-4 text-center text-[15px] font-semibold tracking-tight text-slate-500">
                No credit card needed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing