import { Inertia } from '@inertiajs/inertia'
import { Head, useForm } from '@inertiajs/react'
import React, { useState } from 'react'

function ResetPassword({token}) {
    const {data, setData, post, errors} = useForm({
        email: '',
        password: '',
        password_confirmation: '',
        token: token
    })
    const changeHandler = (e) => {
        setData(e.target.name, e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('password.update'))
    } 
    console.log(errors);

  return (
    <>
    <Head title='Reset Password' />
        <div className='reset-password min-h-screen flex justify-center items-center'>
            <div className="content shadow-md rounded-md w-11/12 md:w-8/12 lg:w-6/12  bg-slate-50 mx-2 px-5 md:px-10 py-7 lg:px-24 lg:py-14">
                <h1 className='text-lg md:text-xl lg:text-2xl text-center font-bold my-2'>Reset your password </h1>
                {(errors.email || errors.password)  && <div className="error bg-red-200 px-2 py-5 rounded-lg w-11/12 mx-auto md:w-5/12">
                    {errors.email  && <p className="my-2 text-red-600">* {errors.email}</p>}
                    {errors.password  && <p className="my-2 text-red-600">* {errors.password}</p>}
                    </div>}
                <form action="" onSubmit={handleSubmit} className='px-14 w-full'>
                <p className={`input-lable duration-200 select-none -translate-x-0 my-2 font-light text-lg`}>Email</p>
                    <div className={`relative border ${errors.email ? "border-red-500" : 'border-black'} mb-5 p-0 w-full`} id="fname">
                        {/* <p className={`input-lable absolute duration-200 select-none  -translate-y-1/2 font-light top-2 text-xs`}>Email</p> */}
                        <input type="email" name="email" className="focus:outline-0 w-full border-0 py-4" onChange={changeHandler} />
                    </div>
                    <p className={`input-lable duration-200 select-none -translate-x-0 my-2 font-light text-lg`}>Password</p>
                    <div className={`relative border ${errors.password ? "border-red-500" : 'border-black'} mb-5 p-0`} id="fname">
                        {/* <p className={`input-lable absolute duration-200 select-none  -translate-y-1/2 font-light top-2 text-xs`}>Password</p> */}
                        <input type="password" name="password" className="focus:outline-0 w-full border-0 py-4" onChange={changeHandler} />
                    </div>
                    <p className={`input-lable duration-200 select-none -translate-x-0 my-2 font-light text-lg`}>Confirm Password</p>
                    <div className={`relative border ${errors.password_confirmation ? "border-red-500" : 'border-black'} mb-5 p-0`} id="fname">
                        {/* <p className={`input-lable absolute duration-200 select-none  -translate-y-1/2 font-light top-2 text-xs`}>Password</p> */}
                        <input type="password" name="password_confirmation" className="focus:outline-0 w-full border-0 py-4" onChange={changeHandler} />
                    </div>
                    <button type='submit' className='bg-green-500 text-white text-sm md:px-5 lg:px-16 py-5 uppercase my-3 mx-auto w-full '>Reset Password</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default ResetPassword