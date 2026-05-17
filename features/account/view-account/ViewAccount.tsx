"use client"

import { useUser } from "@clerk/nextjs"

const ViewAccount = () => {
  const { user, isLoaded } = useUser()

  if (!isLoaded) return null

  const initials = `${user?.firstName?.charAt(0) ?? ""}${user?.lastName?.charAt(0) ?? ""
    }`

  return (
    <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
      <div className="relative overflow-hidden bg-[#071713] px-6 py-8 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(110,231,183,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.10),transparent_30%)]" />

        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">
          <div className="flex size-20 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/8 text-3xl font-bold text-emerald-300 backdrop-blur-xl">
            {initials || user?.primaryEmailAddress?.emailAddress?.charAt(0)}
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300">
              Account
            </p>

            <h1 className="mt-1 text-3xl font-bold tracking-tight text-white">
              {user?.firstName} {user?.lastName}
            </h1>

            <p className="mt-2 text-base font-medium text-slate-300">
              {user?.primaryEmailAddress?.emailAddress}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewAccount