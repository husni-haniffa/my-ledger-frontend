"use client"

import { EditInventoryForm } from "@/features/inventory/edit-indentory/EditInventoryForm"
import { useParams } from "next/navigation"

const EditInventoryPage = () => {
    const params = useParams<{id: string}>()
    const id = params.id
  return (
    <div>
        <EditInventoryForm id={id}/>
    </div>
  )
}

export default EditInventoryPage