
import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'

const faqs = [
    {
        question: "Is it really free for 30 days?",
        answer: "Yes — full access, no credit card required. No surprises.",
    },
    {
        question: "Do I need any technical skills to get started?",
        answer: "Not at all. If you can use a smartphone, you can use our platform.",
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
        answer: "Yes — fully accessible from any device, anywhere, anytime.",
    },
]


const FAQ = () => {
  return (
   <section className='bg-white py-20' id='faq'>

    <div className='container'>

              <div className="flex flex-col gap-3 justify-center items-center text-center">
                  <span className="uppercase font-semibold text-emerald-700">faq</span>
                  <h1 className="text-2xl lg:text-4xl font-bold">
                      Real Questions.{" "}
                      <span className="text-emerald-500">Straight Answers.</span>
                  </h1>
                  <p>
                      Everything you need to know before getting started.
                  </p>
              </div>

              <div className='bg-slate-100 p-6 rounded-2xl mt-12 max-w-2xl flex justify-center items-center mx-auto'>
                <Accordion type='single' collapsible>
                      {faqs.map((faq, index) => (
                          <AccordionItem
                              key={faq.question}
                              value={`item-${index}`}
                              className=""
                          >
                              <AccordionTrigger className="hover:no-underline font-semibold text-base">
                                  {faq.question}
                              </AccordionTrigger>
                              <AccordionContent className="">
                                  {faq.answer}
                              </AccordionContent>
                          </AccordionItem>
                      ))}
                </Accordion>
              </div>
    </div>
          
   </section>
  )
}

export default FAQ