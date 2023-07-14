import { Inertia } from '@inertiajs/inertia'
import { Head, router } from '@inertiajs/react'
import React from 'react'

function VerifyEmail({email}) {
    const handleClick = () => {
        router.post(route('verification.send'))
    }
  return (
    <>
        <Head title='Verify Email' />
        <div className='verify-email min-h-screen flex justify-center items-center'>
            <div className="content shadow-md rounded-md bg-slate-50 text-center mx-2 px-5 md:px-10 py-7 lg:px-24 lg:py-14">
                <img src="/images/Email.png" alt="" className='w-20 md:w-24 lg:w-32 mx-auto' />
                <h1 className='text-lg md:text-xl lg:text-2xl font-bold my-2'>Verify your email address </h1>
                <p className='my-3 text-sm md:text-base lg:text-lg'>You have to verify your <span className='text-yellow-500 font-bold'>{email}</span> email to continue your actions</p>
                <button onClick={handleClick} className='bg-green-500 text-white md:px-5 lg:px-10 py-5 uppercase my-2'>Click to verify</button>
            </div>
        </div>
    </>
  )
}

export default VerifyEmail