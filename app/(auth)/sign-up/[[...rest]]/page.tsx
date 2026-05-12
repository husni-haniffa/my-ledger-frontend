import { SignUp } from '@clerk/nextjs'

const SignUpPage = () => {
    return (
        <div className='flex flex-1 justify-center items-center min-h-screen'>
            <SignUp forceRedirectUrl={'/auth'} signInUrl='/sign-in' />
        </div>
    )
}

export default SignUpPage