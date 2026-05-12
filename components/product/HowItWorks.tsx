
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
    <section className="bg-slate-950 py-20" id="how-it-works">
        <div className="container">
            
              <div className="flex flex-col gap-3 justify-center items-center text-center">
                  <span className="uppercase font-semibold text-emerald-500">How it works</span>
                  <h1 className="text-2xl lg:text-4xl font-bold text-white">
                      Set up in minutes.{" "}
                      <span className="text-emerald-500">Built for busy Founders.</span>
                  </h1>
                  <p className="text-white">
                      You didn't start a business to waste time on complicated tools.
                      Get set up in minutes and hit the ground running from day one.
                  </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
                    {steps.map((step) => (
                        <div key={step.step} className="flex flex-col gap-3 text-white border p-6 rounded-2xl bg-slate-50">
                            <span className="bg-emerald-50 w-fit text-emerald-500 px-3 py-2 rounded-2xl font-bold text-lg">{step.step}</span>
                            <h1 className="text-2xl font-bold text-emerald-500 mt-3">{step.title}</h1>
                            <p className="text-slate-950">{step.description}</p>
                        </div>
                    ))}
              </div>


        </div>
    </section>
  )
}

export default HowItWorks