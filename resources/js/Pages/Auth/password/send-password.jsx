import { Inertia } from '@inertiajs/inertia'
import { Head, useForm, usePage } from '@inertiajs/react'
import React, { useState } from 'react'

function SendPassword({status}) {
    const {data, setData, post, errors} = useForm({
        email: ''
    })

    const {props} = usePage()

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('password.email'))
    } 


  return (
    <>
    <Head title='Reset Password' />
        <div className='reset-password min-h-screen flex justify-center items-center'>
            <div className="content shadow-md rounded-md  bg-slate-50 mx-2 px-5 md:px-10 py-7 lg:px-24 lg:py-14">
                <h1 className='text-lg md:text-xl lg:text-2xl text-center font-bold my-2'>Reset your password </h1>
                {errors?.email  && <div className="error bg-red-200 px-2 py-5 rounded-lg w-11/12 mx-auto md:w-10/12 my-3">
                    <p className="my-2 text-red-600">* {errors?.email}</p>
                    </div>}
                {props?.flash?.status  && <div className="success bg-green-400 text-center px-2 py-5 rounded-lg w-11/12 mx-auto md:w-10/12 my-3">
                    <p className="my-2 text-white">{props?.flash?.status}</p>
                    </div>}

                <form action="" onSubmit={handleSubmit}>
                <label htmlFor="email" className='w-full'>Email:</label>
                <input type="email" id='email' name='email' className='border border-black w-full' onChange={(e) => setData('email',e.target.value)} />
                <button type='submit' className='bg-yellow-400 text-white text-sm md:px-5 lg:px-16 py-5 uppercase my-3 mx-auto w-full '>Reset Password</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default SendPassword