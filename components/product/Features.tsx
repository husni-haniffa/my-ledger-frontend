import {
    ClipboardList,
    Wallet,
    Boxes,
    ChartNoAxesCombined,
    ReceiptText,
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
]

const Features = () => {
  return (
    <section className="bg-slate-50 py-20" id="features">
        <div className="container">

              <div className="flex flex-col gap-3 justify-center items-center text-center">
                  <span className="uppercase font-semibold text-emerald-700">Features</span>
                  <h1 className="text-2xl lg:text-4xl font-bold">
                      Stop working manually.{" "}
                      <span className="text-emerald-500">Start running smarter.</span>
                  </h1>
                  <p>
                    From day one, we hand-hold your business into the digital world —
                    making digitalization your biggest competitive advantage, not your
                    biggest challenge.
                  </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                {features.map((feature) => (
                    <div key={feature.title} className="flex flex-col gap-3 bg-white rounded-2xl shadow-sm p-6">
                        <div className="flex items-center gap-2">
                            <feature.icon className="bg-emerald-50 text-emerald-500 rounded-md"/>
                            <h1 className="text-xl font-bold">{feature.title}</h1>  
                        </div>
                        <p>{feature.description}</p>
                    </div>
                ))}
              </div>


        </div>
    </section>
  )
}

export default Features