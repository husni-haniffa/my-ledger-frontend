import { EditAccountForm } from "@/features/account/edit-account/EditAccountForm"
import ViewAccount from "@/features/account/view-account/ViewAccount"
import CurrentPlan from "@/features/billing/CurrentPlan"

const UserAccountPage = () => {
  return (
    <div className="space-y-6">
      <ViewAccount />

      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <CurrentPlan />

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="text-2xl font-bold tracking-tight text-slate-950">
              Store details
            </h2>

            <p className="mt-2 text-base font-medium leading-7 text-slate-600">
              Update your store information, contact details, and business
              settings.
            </p>
          </div>

          <EditAccountForm />
        </div>
      </div>
    </div>
  )
}

export default UserAccountPage