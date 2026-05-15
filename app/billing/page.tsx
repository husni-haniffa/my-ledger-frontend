import { Button } from '@/components/ui/button'
import BillingButton from '@/features/billing/BillingButton'
import CurrentPlan from '@/features/billing/CurrentPlan'
import Link from 'next/link'

const BillingPage = () => {
    return (
        <section className='flex flex-col gap-9 container min-h-screen justify-center'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='text-2xl font-bold'>Billing</h1>
                    <p>Manage your subscription and payment details.</p>
                </div>
            </div>
            <div>
                <CurrentPlan/>
            </div>
            <BillingButton/>
        </section>

    )
}

export default BillingPage