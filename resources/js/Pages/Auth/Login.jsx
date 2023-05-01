import { Head, Link, router, useForm } from "@inertiajs/react";
import { useRef, useState } from "react";
import axios from 'axios'
import Header from "../../components/Header";
import { redirect } from "react-router-dom";
function Login({status}) {
    if (!status) {
        redirect('/')
    }
    const {data, setData, post, error} = useForm({
        email: '',
        password:'',
    })
    const [user, setUser] = useState({
        email: '',
        password:'',
    })
    const [isClicked, setIsClicked] = useState({
        email: false,
        password:false,
    })
    
    const fnameInput = useRef(null)
    const lnameInput = useRef(null)
    const emailInput = useRef(null)
    const passInput = useRef(null)

    const clickHandler = (e) => {
        // setIsClicked((prev) => ({...prev, [e.target.id] : !prev.e.target.id}))
        e.target.querySelector('input')?.focus()
        console.log(e.target.id);
    }
    
    const changeHandler = (e) => {
        // setUser((prevState) => ({...prevState, [e.target.name] : e.target.value}))
        setData(e.target.name, e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        // axios.post(route('login'), user)
        post(route('login'))
    }
    return ( 
        <>
        <Head title="FastFood | Login" />
        <Header />
            <div className="container mx-auto px-14 my-14 py-20 flex flex-col items-center gap-8" >
                <div className="title-form text-4xl text-center">Create Account</div>
                <form action={''} method="post" className="w-4/6 md:w-3/4 xl:w-2/6" onSubmit={handleSubmit}>
                    
                    <div className={`relative border border-black my-5 py-4 px-3`} id="fname" onClick={(e) => {
                        setIsClicked((prev) => ({...!prev, email : !prev.email}));
                        emailInput.current.focus()
                    }}>
                        <p className={`input-lable absolute duration-200 select-none  -translate-y-1/2 font-light ${isClicked.email === true ?  'top-2 text-xs' : user?.email !== ''  ? "top-2 text-xs" : 'text-lg top-1/2'}`}>Email</p>
                        <input type="email" name="email" ref={emailInput} className="focus:outline-none" onChange={changeHandler} focus={`${isClicked.lname}`} />
                    </div>
                    <div className={`relative border border-black my-5 py-4 px-3`} id="fname" onClick={(e) => {
                        setIsClicked((prev) => ({...!prev, password : !prev.password}));
                        passInput.current.focus()
                    }}>
                        <p className={`input-lable absolute duration-200 select-none  -translate-y-1/2 font-light ${isClicked.password === true ?  'top-2 text-xs' : user?.password !== ''  ? "top-2 text-xs" : 'text-lg top-1/2'}`}>Password</p>
                        <input type="password" name="password" ref={passInput} className="focus:outline-none" onChange={changeHandler} focus={`${isClicked.lname}`} />
                    </div>
                        <div className="w-fit mx-auto">
                        <Link href="forget-password" className="text-sm underline">Forget your password?</Link>
                        </div>
                    <div className="submit w-1/3 mx-auto ">
                        <button className="bg-black text-white mt-5 py-3 px-1 mx-auto w-full">Login</button>
                    </div>
                </form>
                        <div className="w-fit mx-auto">
                        <Link href={route('register')} className="text-sm underline">Create account</Link>
                        </div>
                
            </div>
        </>
    );
}

export default Login;