import { router } from "@inertiajs/react";
import { useState } from "react";

function Register() {
    const [user, setUser] = useState({
        firstname: '',
        lastname:'',
        email: '',
        password:'',
    })

    const clickHandler = (e) => {
        // setIsClicked((prev) => ({...prev, [e.target.id] : !prev.e.target.id}))
        e.target.querySelector('input')?.focus()
    }
    
    const changeHandler = (e) => {
        setUser((prevState) => ({...prevState, name: `${user.firstname} ${user.lastname}`,[e.target.name] : e.target.value}))
    }
    function handleSubmit(e) {
        e.preventDefault()
        router.post('/user', user)
    }
    return ( 
        <>
            <div className="container mx-auto px-14 my-14 py-20 flex flex-col items-center gap-8" >
                <div className="title-form text-4xl text-center">Create Account</div>
                <form action="" method="post" className="w-4/6 md:w-3/4 xl:w-2/6" onSubmit={handleSubmit}>
                    <div className={`relative border border-black py-4 my-3 px-3`} id="fname" >
                        <p className={`input-lable absolute duration-200 select-none  -translate-y-1/2 font-light top-2 text-xs`}>First name</p>
                        <input type="text" name="firstname" placeholder="firstname" className="focus:outline-none" onChange={changeHandler} />
                    </div>
                    <div className={`relative border border-black my-5 py-4 px-3`} id="lname" >
                        <p className={`input-lable absolute duration-200 select-none  -translate-y-1/2 font-light top-2 text-xs`}>Last name</p>
                        <input type="text" name="lastname" placeholder="lastname" className="focus:outline-none" onChange={changeHandler} />
                    </div>
                    <div className={`relative border border-black my-5 py-4 px-3`} id="fname">
                        <p className={`input-lable absolute duration-200 select-none  -translate-y-1/2 font-light top-2 text-xs`}>Email</p>
                        <input type="email" name="email" placeholder="email" className="focus:outline-none" onChange={changeHandler} />
                    </div>
                    <div className={`relative border border-black my-5 py-4 px-3`} id="fname">
                        <p className={`input-lable absolute duration-200 select-none  -translate-y-1/2 font-light top-2 text-xs`}>Password</p>
                        <input type="password" name="password" placeholder="password" className="focus:outline-none" onChange={changeHandler} />
                    </div>
                    <input type="hidden" name="name" value={`${user.firstname} ${user.lastname}`} onChange={changeHandler} />
                    <div className="submit w-1/3 mx-auto ">
                        <button className="bg-black text-white mt-5 py-3 px-1 mx-auto w-full">Create</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Register;