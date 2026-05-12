import { Button } from '@/components/ui/button'
import Link from 'next/link'

const BillingPage = () => {
    return (
        <section className='flex flex-col gap-9'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='text-2xl font-bold'>Billing</h1>
                    <p>Manage your subscription and payment details.</p>
                </div>
                <div>
                    <Button asChild className='bg-blue-700 hover:bg-blue-800!'>
                        <Link href={'/upgrade-billing'}>
                            Upgrade
                        </Link>
                    </Button>
                </div>
            </div>
        </section>

    )
}

export default BillingPage