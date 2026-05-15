"use client"

import { useUser } from "@clerk/nextjs"
import Link from "next/link"



const ViewAccount = () => {
    const { user, isLoaded } = useUser()
    if(!isLoaded) return
  return (
    <div className="flex items-center gap-9 bg-white p-4 rounded-2xl">
          <div className="bg-emerald-50 rounded-full size-16 text-2xl font-bold text-emerald-700 flex items-center justify-center">
              {user?.firstName?.charAt(0)}
          </div>
        <div className="flex flex-col">
            <h1 className="font-semibold">{user?.firstName} {user?.lastName}</h1>
            <h1>{user?.primaryEmailAddress?.emailAddress}</h1>
        </div>
        <Link href={'/billing'}>
          Upgrade to pro
        </Link>
    </div>
    
  )
}

export default ViewAccount