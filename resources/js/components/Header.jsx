import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faFacebookF} from '@fortawesome/free-regular-svg-icons';
import { Link, usePage } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import CartList from "./cartList";

function Header({user, clicked}) {

    /* Page information */
    const {url, component} = usePage()

    /* Clicked States */
    const [mobileMenuClicked, setMenuClicked] = useState(false)
    const [userClicked, setUserClicked] = useState(false)
    const [cartClicked, setCartClicked] = useState(false)

    /* Quantity State */
    const [quantity, setQuantity] = useState(1)

    /* Products State */
    const [products, setProducts] = useState(null)


    const increment = () => {
        setQuantity((prev) => prev + 1)
    }
    const decrement = () => {
        setQuantity((prev) => {
            if (prev <= 1) return 1
            return prev - 1
        })
    }
    function getCartItems() {
        axios.get(route('cartItems')).then((res) => setProducts(res.data[0]))
    }
    const userRef = useRef()
    const cartRef = useRef()
    const menuMobileRef = useRef()
    useEffect(() => {
        const mobileMenu = (e) => {
            
        }
        document.addEventListener('mousedown', (e) => {
            if (!(menuMobileRef?.current?.contains(e.target))) {
                setMenuClicked(false)
                // console.log(categoryRef?.current?.contains(e.target));
            }
            if (!(userRef?.current?.contains(e.target))) {
                setUserClicked(false)
                // console.log(categoryRef?.current?.contains(e.target));
            }
            if (!(cartRef?.current?.contains(e.target))) {
                setCartClicked(false)
                // console.log(categoryRef?.current?.contains(e.target));
            }
            
        })
        return;
    }, [menuMobileRef, userRef, cartRef])
    return ( 
        <>
            
        <header className="bg-slate-900 w-full md:p-3">
            <div className="container mx-auto px-16">
                <div className="header hidden md:flex justify-between items-center">
                    <div className="leftSide text-xs flex items-center text-white uppercase
                     gap-3.5">
                        <div className="phone flex flex-row items-center gap-2">
                            <i className="las la-mobile text-xl"></i>
                            <p className=""><a href="tel: +212 5 48 75 63 32" className="">+212 5 48 75 63 32</a></p>
                        </div>
                        <div className="address flex flex-row items-center gap-2">
                            <i className="las la-map-marker text-xl"></i>
                            <p className=""> Marrakesh Muhammed VI street N 1440 </p>
                        </div>
                        </div>
                        <div className="rightSide text-white text-xl">
                            <a href="https://www.facebook.com"><i className="lab la-facebook "></i></a>
                            <a href="https://www.instagram.com"><i className="lab la-instagram mx-2 hover:text-yellow-300"></i></a>
                            <a href="https://www.twitter.com"><i className="lab la-twitter mx-2 hover:text-yellow-300"></i></a>
                            <a href="https://www.youtube.com"><i className="lab la-youtube mx-2 hover:text-yellow-300"></i></a>
        
                        </div>
                </div>
            </div>
        </header>
        <nav className="z-50 sticky top-0 bg-white shadow-sm">
            <div className="container mx-auto">
                <div className="nav py-5 flex justify-evenly items-center">
                    <div className="MobileMenuIcon inline-block lg:hidden" onClick={() => setMenuClicked(true)}>
                        <i className="las la-bars text-4xl cursor-pointer"></i>
                    </div>
                    {/* <Link href="/"><img src={require('/images/BurgerKech_Logo.png')} className="logo w-36 2xl:w-44" alt="" /></Link> */}
                    <Link href="/"><img src="/images/BurgerKech_Logo.svg" className="logo w-14 2xl:w-16" alt="" /></Link>
                    
                    <div className="menu hidden lg:inline-block">
                        <ul className="flex items-center gap-5 font-bold text-xl">
                            
                            <li><Link href={route('home')} className={`${component === 'Home' ? 'active' : ''} hover:text-orange-300`}>Home</Link></li>
                            <li><Link href="menu" className={` hover:text-orange-300`}>Menu</Link></li>
                            <li><Link href="about" className={` hover:text-orange-300`}>About</Link></li>
                            <li><Link href={route('shop')} className={`${component === 'shop' || url.startsWith('/product') ? 'active' : ''} hover:text-orange-300`}>Shop</Link></li>
                            <li><Link href="blog" className={` hover:text-orange-300`}>Blog</Link></li>
                            <li><Link href="contact" className={` hover:text-orange-300`}>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="order-phone hidden xl:flex flex-row items-center">
                        <i className="las la-paper-plane text-green-500 text-4xl"></i>
                        <div className="order-number">
                            <p className="text-slate-400 text-md">Call and Order in</p>
                            <Link href="tel: +212 5 48 75 63 32" className="text-orange-500 text-xl">+212 5 48 75 63 32</Link>
                        </div>
                    </div>
        
                    <div className="other text-2xl flex items-center gap-2">
                        
                        <span className="user relative cursor-pointer group" id="user" ref={userRef} onClick={() => setUserClicked((prev) => !prev)}>
                            <i className="las la-user border  border-slate-400 rounded-full p-2 hover:bg-yellow-300  hover:border-yellow-300"></i>
                            <div className={`userprofile ${userClicked? 'block' : 'hidden'} w-32 bg-white group-hover:block py-3 pl-4 pr-4 absolute top-full right-0 border shadow-sm`}>
                                <ul>
                                    
                                    {user ? 
                                        user?.issuperuser ? <p className="text-sm text-stone-600"><Link href={route('dashboard')}>Dashboard</Link></p> : <p className="text-sm text-stone-600"><Link href="/profile">{user.name}</Link></p> 

                                    : <>
                                        <li><Link href={route('login')} className="text-sm text-stone-600">Sign in</Link></li>
                                        <li><Link href={route('register')} className="text-sm text-stone-600">Register</Link></li>
                                    </>
                                    }
                                    
                                    <li><Link href="/wishlist" className="text-sm text-stone-600">Wishlist(<span className="wishlist-number">0</span>)</Link></li>
                                    <li><Link href="/compare" className="text-sm text-stone-600">Compare(<span className="compare-number">0</span>)</Link></li>
                                    <li><Link href="/cart" className="text-sm text-stone-600">Checkout</Link></li>
                                    {user && <Link href={route('logout')} id="logout-form" method="POST" className="d-none text-sm text-stone-600 duration-100 hover:text-red-700 border-0 bg-transparent" as="button">
                                        Logout
                                    </Link>}
                                    
                                </ul>
                            </div>
                        </span>
                        
                        {user?.issuperuser ? null : <CartList click={clicked}  /> }
                        {user?.issuperuser ? <Link href={route('dashboard')} className="hidden md:block px-4 py-2  rounded-lg duration-200 text-white bg-sky-400 text-lg">Dashboard</Link> :<Link href="/products/" className="hidden md:block px-4 py-2  rounded-lg duration-200 hover:text-white bg-yellow-300 text-xl">order now</Link>}
                    </div>
                </div>
            </div>
            <div ref={menuMobileRef} className={`menuMobile flex flex-col w-1/2 bg-white font-extralight text-md h-screen absolute ${mobileMenuClicked ? "left-0" :"-left-1/2"} duration-300 top-0 z-50 px-4 py-9`}>
            {/* {{-- <div className="menuMobile flex-col hidden w-1/2 bg-white font-extralight text-md h-screen absolute left-0 top-0 z-50 px-4 py-9"> --}} */}
                <div className="closeIcon w-fit place-self-end bg-stone-100 p-1" onClick={() => setMenuClicked(false)}><i className="las la-times cursor-pointer h-fit duration-300 hover:rotate-180 text-2xl hover:text-red-500"></i></div>
                <ul className="flex flex-col items-start gap-5 font-bold text-base mt-2">
                    {user?.issuperuser? <li className="px-2 duration-150 hover:pl-5"><Link href={route('dashboard')} className="hover:text-yellow-300">Dashboard</Link></li>: null}
                    <li className="px-2 duration-150 hover:pl-5"><Link href={route('home')} className="hover:text-yellow-300">Home</Link></li>
                    <li className="px-2 duration-150 hover:pl-5"><Link href="menu" className="hover:text-yellow-300">Menu</Link></li>
                    <li className="px-2 duration-150 hover:pl-5"><Link href="about" className="hover:text-yellow-300">About</Link></li>
                    <li className="px-2 duration-150 hover:pl-5"><Link href={route('shop')} className="hover:text-yellow-300">Shop</Link></li>
                    <li className="px-2 duration-150 hover:pl-5"><Link href="blog" className="hover:text-yellow-300">Blog</Link></li>
                    <li className="px-2 duration-150 hover:pl-5"><Link href="contact" className="hover:text-yellow-300">Contact</Link></li>
                </ul>
            </div>
            {/* </div> */}
        </nav>

        </>
     );
}

export default Header;