import { EditAccountForm } from '@/features/account/edit-account/EditAccountForm'
import ViewAccount from '@/features/account/view-account/ViewAccount'
import CurrentPlan from '@/features/billing/CurrentPlan'
import React from 'react'

const UserAccountPage = () => {
  return (
    <div>
      <div className='flex flex-col gap-9'>
        <ViewAccount/>
        <CurrentPlan/>
        <EditAccountForm/>
      </div>
    </div>
  )
}

export default UserAccountPage