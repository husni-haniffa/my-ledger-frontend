import { Button } from '@/components/ui/button'
import ExpenseList from '@/features/expense/view-expense/ExpenseList'
import Link from 'next/link'
import React from 'react'

const ExpensePage = () => {
    return (
        <section className='flex flex-col gap-9'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='text-2xl font-bold'>Expenses</h1>
                    <p>Monitor and record your business spending.</p>
                </div>
                <div>
                    <Button asChild className='bg-blue-700 hover:bg-blue-800!'>
                        <Link href={'/user/expenses/add-expense'}>
                            Add Expense
                        </Link>
                    </Button>
                </div>
            </div>
            <div>
                <ExpenseList/>
            </div>
        </section>

    )
}

export default ExpensePage