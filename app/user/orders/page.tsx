import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const OrderPage = () => {
    return (
        <section className='flex flex-col gap-9'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='text-2xl font-bold'>Orders</h1>
                    <p>View and manage your customer orders.</p>
                </div>
                <div>
                    <Button asChild className='bg-blue-700 hover:bg-blue-800!'>
                        <Link href={'/add-order'}>
                            Add Order
                        </Link>
                    </Button>
                </div>
            </div>
        </section>

    )
}

export default OrderPage