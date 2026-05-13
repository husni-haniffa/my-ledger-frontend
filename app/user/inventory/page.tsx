import { Button } from '@/components/ui/button'
import InventoryList from '@/features/inventory/view-inventory/InventoryList'
import Link from 'next/link'
import React from 'react'

const InventoryPage = () => {
  return (
    <section className='flex flex-col gap-9'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-2xl font-bold'>Inventory</h1>
          <p>Manage and track your store&apos;s stock levels.</p>
        </div>
        <div>
          <Button asChild className='bg-blue-700 hover:bg-blue-800!'>
            <Link href={'/user/inventory/add-inventory'}>
              Add Inventory
            </Link>
          </Button>
        </div>
      </div>
      <div>
        <InventoryList/>
      </div>
    </section>
    
  )
}

export default InventoryPage