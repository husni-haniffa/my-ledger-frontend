"use client"

import EditOrder from "@/features/order/edit-order/EditOrder"
import { useParams } from "next/navigation"

const EditOrderPage = () => {
    const params = useParams<{id: string}>()
            const id = params.id
  return (
    <div>
        <EditOrder id={id}/>
    </div>
  )
}

export default EditOrderPage