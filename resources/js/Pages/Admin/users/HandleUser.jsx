import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

function HandleUser({user, users}) {
    console.log(users);
    const {data, setData, post, errors, put} = useForm({
        firstname:  users?.firstname ? users?.firstname:'',
        lastname: users?.lastname ? users?.lastname:'',
        email:  users?.email ? users?.email:'',
        password: '',
        password_confirmation:'',
        role: users?.role ? users?.role:''
    })

    const clickHandler = (e) => {
        // setIsClicked((prev) => ({...prev, [e.target.id] : !prev.e.target.id}))
        e.target.querySelector('input')?.focus()
    }
    
    const changeHandler = (e) => {
        setData(e.target.name, e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault()
        if (users?.id !== undefined) {
            put(route('users.update', {'user':users?.id}));
        }else {
            post(route('users.store'))
        }
    }
    return ( 
        <>
        <Head title="FastFood | Sign up" />
        <Header user={user} />
            <div className="container mx-auto px-0 my-14 py-20 flex flex-col items-center gap-8" >
                <div className="title-form text-4xl text-center">Add User</div>
                {(errors.email || errors.firstname || errors.lastname|| errors.password)  && <div className="error bg-red-200 px-2 py-5 rounded-lg w-11/12 mx-auto md:w-5/12">
                    {errors.firstname  && <p className="my-2 text-red-600">* {errors.firstname}</p>}
                    {errors.lastname  && <p className="my-2 text-red-600">* {errors.lastname}</p>}
                    {errors.email  && <p className="my-2 text-red-600">* {errors.email}</p>}
                    {errors.password  && <p className="my-2 text-red-600">* {errors.password}</p>}
                    </div>}
                <form action="" method="post" className="w-4/6 md:w-3/4 lg:4/6 xl:w-3/6" onSubmit={handleSubmit}>
                <p className={`input-lable duration-200 select-none -translate-x-0 my-2 font-light text-lg`}>First Name</p>
                    <div className={`relative border ${errors.firstname ? "border-red-500" : 'border-black'} mb-5 p-0`} id="fname" >
                        {/* <p className={`input-lable absolute duration-200 select-none  -translate-y-1/2 font-light top-2 text-xs`}>First name</p> */}
                        <input type="text" defaultValue={data.firstname} name="firstname" className="focus:outline-0 w-full border-0 py-4" onChange={changeHandler} />
                    </div>
                <p className={`input-lable duration-200 select-none -translate-x-0 my-2 font-light text-lg`}>Last Name</p>
                    <div className={`relative border ${errors.lastname ? "border-red-500" : 'border-black'} mb-5 p-0`} id="lname" >
                        {/* <p className={`input-lable absolute duration-200 select-none  -translate-y-1/2 font-light top-2 text-xs`}>Last name</p> */}
                        <input type="text" defaultValue={data.lastname} name="lastname" className="focus:outline-0 w-full border-0 py-4" onChange={changeHandler} />
                    </div>
                <p className={`input-lable duration-200 select-none -translate-x-0 my-2 font-light text-lg`}>Email</p>
                    <div className={`relative border ${errors.email ? "border-red-500" : 'border-black'} mb-5 p-0`} id="fname">
                        {/* <p className={`input-lable absolute duration-200 select-none  -translate-y-1/2 font-light top-2 text-xs`}>Email</p> */}
                        <input type="email" defaultValue={data.email} name="email" className="focus:outline-0 w-full border-0 py-4" onChange={changeHandler} />
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
                        <p className={`input-lable duration-200 select-none -translate-x-0 my-2 font-light text-lg`}>Role</p>
                    <div className={`relative border ${errors.password_confirmation ? "border-red-500" : 'border-black'} mb-5 p-0`} id="fname">
                        {/* <p className={`input-lable absolute duration-200 select-none  -translate-y-1/2 font-light top-2 text-xs`}>Password</p> */}
                        <input type="text" defaultValue={data.role} name="role" className="focus:outline-0 w-full border-0 py-4" onChange={changeHandler} />
                    </div>
                    <input type="hidden" name="name" value={`${data.firstname} ${data.lastname}`} onChange={changeHandler} />
                    <div className="submit w-1/3 mx-auto ">
                        <button className="bg-black text-white mt-5 py-3 px-1 mx-auto w-full">Add</button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default HandleUser;
