import React from "react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion"

const faqs = [
    {
        question: "Is it really free for 30 days?",
        answer:
            "Yes — full access, no credit card required. No surprises.",
    },
    {
        question: "Do I need any technical skills to get started?",
        answer:
            "Not at all. If you can use a smartphone, you can use our platform.",
    },
    {
        question: "Can I manage multiple products and categories?",
        answer:
            "Yes — add as many products, categories, and inventory items as you need.",
    },
    {
        question: "How does the sales by source tracking work?",
        answer:
            "Simply tag your orders by source — WhatsApp, Facebook, Instagram, or walk-in — and we track the rest.",
    },
    {
        question: "Is my business data safe and secure?",
        answer:
            "Absolutely. Your data is fully encrypted and backed up — only you have access.",
    },
    {
        question: "What happens after my 30-day free trial ends?",
        answer:
            "You simply move to our one monthly plan — no hidden fees, no complications.",
    },
    {
        question: "Can I access it from my phone?",
        answer:
            "Yes — fully accessible from any device, anywhere, anytime.",
    },
]

const FAQ = () => {
    return (
        <section
            className="relative overflow-hidden bg-white py-20 lg:py-28"
            id="faq"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.05),transparent_28%)]" />

            <div className="container relative">
                <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-4 text-center">
                    <span className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-[15px] font-bold uppercase tracking-tight text-emerald-700">
                        FAQ
                    </span>

                    <h1 className="text-[36px] font-bold leading-tight tracking-tight text-slate-950 sm:text-[48px] lg:text-[56px]">
                        Real Questions.{" "}
                        <span className="text-emerald-600">Straight Answers.</span>
                    </h1>

                    <p className="max-w-2xl text-[18px] font-medium leading-8 tracking-tight text-slate-600 sm:text-[20px]">
                        Everything you need to know before getting started.
                    </p>
                </div>

                <div className="relative mx-auto mt-14 max-w-4xl">
                    <div className="absolute -inset-4 rounded-[2rem] bg-emerald-100/60 blur-3xl" />

                    <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-200/60 sm:p-5">
                        <Accordion type="single" collapsible className="space-y-3">
                            {faqs.map((faq, index) => (
                                <AccordionItem
                                    key={faq.question}
                                    value={`item-${index}`}
                                    className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 px-5 transition-all duration-200 hover:border-emerald-200 hover:bg-white"
                                >
                                    <AccordionTrigger className="py-5 text-left text-[18px] font-bold tracking-tight text-slate-950 hover:no-underline">
                                        {faq.question}
                                    </AccordionTrigger>

                                    <AccordionContent className="pb-5 text-[17px] font-medium leading-8 tracking-tight text-slate-600">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ