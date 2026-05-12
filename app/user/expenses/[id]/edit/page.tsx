"use client"
import { EditExpenseForm } from '@/features/expense/edit-expense/EditExpenseForm'
import { useParams } from 'next/navigation'


const EditExpensePage = () => {
    const params = useParams<{id: string}>()
        const id = params.id
  return (
    <div>
        <EditExpenseForm id={id}/>
    </div>
  )
}


export default EditExpensePage