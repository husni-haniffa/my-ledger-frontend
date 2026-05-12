import { SignIn } from '@clerk/nextjs'

const SignInPage = () => {
    return (
        <div className='flex flex-1 justify-center items-center min-h-screen'>
            <SignIn forceRedirectUrl={'/auth'} signUpUrl='/sign-up' />
        </div>
    )
}

export default SignInPage