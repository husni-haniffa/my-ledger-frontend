"use client"
import Invoice from "@/features/order/invoice/Invoice"
import { useParams } from "next/navigation"


const Page = () => {
     const params = useParams<{id: string}>()
                const id = params.id
    return <Invoice id={params.id} />
}

export default Page