import { Check } from "lucide-react"
import { Button } from "../ui/button"
import Link from "next/link"

const benifits = [
  "Order management",
  "Expense tracking",
  "Inventory control",
  "Business insights",
  "Smart invoicing",
]

const Pricing = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container" id="pricing">
        
        <div className="flex flex-col gap-3 justify-center items-center text-center">
          <span className="uppercase font-semibold text-emerald-700">Pricing</span>
          <h1 className="text-2xl lg:text-4xl font-bold">
            Built for Bootstrappers.{" "}
            <span className="text-emerald-500">Start free </span>
            Scale smart.
          </h1>
          <p>Full access. 30 days free. No strings attached - upgrade only when you&apos;re ready to level up</p>
        </div>


        <div className="mt-9 bg-white p-12 w-90 rounded-2xl shadow-md flex flex-col gap-6 justify-center mx-auto">

          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold text-emerald-500">
              Free{" "} 
              <span className="text-muted-foreground font-normal text-sm">
                / 30 days
              </span>
            </h1>
            <h2 className="text-sm text-muted-foreground">
              Then continue for
            </h2>
            <h3 className="text-xl font-semibold">LKR 990 
              <span className="text-muted-foreground font-normal text-sm">
                {" "}/ per month
              </span>
              </h3>
          </div>

          <div className="flex flex-col gap-3">
            {benifits.map((benifit, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check className="text-emerald-500 bg-emerald-50 rounded-full w-5 h-5 shrink-0" />
                <span className="text-sm">{benifit}</span>
              </div>
            ))}
          </div>

          <Button asChild>
            <Link href={'/sign-up'}>
              Start free
            </Link>
          </Button>

          <span className="text-xs text-muted-foreground text-center">No credit card needed</span>

        </div>

      </div>
    </section>
  )
}

export default Pricing