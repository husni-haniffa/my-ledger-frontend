import { CreateAccountForm } from '@/features/account/create-account/CreateAccountForm'
import { Check } from 'lucide-react'
import React from 'react'
const benifits = [
    "Order management",
    "Expense tracking",
    "Inventory control",
    "Business insights",
    "Smart invoicing",
]

const OnboardingPage = () => {
  return (
      <section className='flex min-h-screen items-center justify-center py-12'>
        <div className='container grid grid-cols-1 lg:grid-cols-2'>

            <div className='bg-slate-950 flex flex-col gap-6 p-12 rounded-2xl'>
                <h1 className='text-xl lg:text-2xl font-bold text-emerald-500'>MyLedger</h1>
                <p className='text-white italic font-semibold'>Setup your store under 2 minutes.</p>
                <p className='text-white'>Add your business details once and let MyLedger handle the rest - from tracking
                    business performace to generating digital invoices your customers will trust
                </p>
                <div className="flex flex-col gap-3">
                    {benifits.map((benifit, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <Check className="text-emerald-500 bg-emerald-50 rounded-full w-5 h-5 shrink-0" />
                            <span className="text-sm text-white">{benifit}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className='bg-white flex flex-col gap-6 p-12 rounded-2xl'>
                <CreateAccountForm/>
            </div>

        </div>
    </section>
  )
}

export default OnboardingPage