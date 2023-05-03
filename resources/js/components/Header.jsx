import { Link } from "@inertiajs/react";
import axios from "axios";

function Header({user}) {
    function logOut(e) {
        e.preventDefault()
        axios.post(route('logout'))
    }
    return ( 
        <>
            
        <header className="bg-slate-900 w-full md:p-3">
            <div className="container mx-auto px-9">
                <div className="header hidden md:flex justify-between items-center">
                    <div className="leftSide text-xs flex items-center text-white uppercase
                     gap-3.5">
                        <div className="phone flex flex-row items-center gap-2">
                            <i className="las la-mobile text-xl"></i>
                            <p className=""><a href="tel: +212 5 48 75 63 32" className="">+212 5 48 75 63 32</a></p>
                        </div>
                        <div className="address flex flex-row items-center gap-2">
                            <i className="las la-map-marker text-xl"></i>
                            <p className=""> Casablanca Ain Shoq N 15</p>
                        </div>
                        </div>
                        <div className="rightSide text-white text-xl">
                            <a href="https://www.facebook.com"><i className="lab la-facebook mx-2 hover:text-yellow-400"></i></a>
                            <a href="https://www.instagram.com"><i className="lab la-instagram mx-2 hover:text-yellow-400"></i></a>
                            <a href="https://www.twitter.com"><i className="lab la-twitter mx-2 hover:text-yellow-400"></i></a>
                            <a href="https://www.youtube.com"><i className="lab la-youtube mx-2 hover:text-yellow-400"></i></a>
        
                        </div>
                </div>
            </div>
        </header>
        <nav className="z-50 sticky top-0 bg-white shadow-sm">
            <div className="container mx-auto">
                <div className="nav py-5 flex justify-evenly items-center">
                    <div className="MobileMenuIcon inline-block lg:hidden">
                        <i className="las la-bars text-4xl cursor-pointer"></i>
                    </div>
                    <Link href="/"><img src="images/BurgerKech_Logo.png" className="logo w-36 2xl:w-44" alt="" /></Link>
                    
                    <div className="menu hidden lg:inline-block">
                        <ul className="flex items-center gap-5 font-bold text-xl">
                            
                            <li><Link href="/" className="active hover:text-orange-300">Home</Link></li>
                            <li><Link href="menu" className="hover:text-orange-300">Menu</Link></li>
                            <li><Link href="about" className="hover:text-orange-300">About</Link></li>
                            <li><Link href="shop" className="hover:text-orange-300">Shop</Link></li>
                            <li><Link href="blog" className="hover:text-orange-300">Blog</Link></li>
                            <li><Link href="contact" className="hover:text-orange-300">Contact</Link></li>
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
                        
                        <span className="user relative cursor-pointer group" id="user">
                            <i className="las la-user border  border-slate-400 rounded-full p-2 hover:bg-yellow-400  hover:border-yellow-400"></i>
                            <div className="userprofile hidden w-32 bg-white group-hover:block py-3 pl-4 pr-4 absolute top-full right-0 border shadow-sm">
                                <ul>
                                    {/* (Route::has('login')) */}
                                    {user ? 
                                    <p className="text-sm text-stone-600"><Link href="/profile">{user.name}</Link></p> 
                                    : <>
                                        <li><Link href="/login" className="text-sm text-stone-600">Sign in</Link></li>
                                        <li><Link href="/register" className="text-sm text-stone-600">Register</Link></li>
                                    </>
                                    }
                                    {/* @if (Auth::user()) */}
                                        {/* <p className="text-sm text-stone-600"><Link href="/profile">{{Auth::user()->name}}</Link></p> */}
                                    {/* @else */}
                                        {/* <li><Link href="/login" className="text-sm text-stone-600">Sign in</Link></li>
                                        <li><Link href="/register" className="text-sm text-stone-600">Register</Link></li> */}
                                    {/* @endif */}
                                    <li><Link href="/wishlist" className="text-sm text-stone-600">Wishlist(<span className="wishlist-number">0</span>)</Link></li>
                                    <li><Link href="/compare" className="text-sm text-stone-600">Compare(<span className="compare-number">0</span>)</Link></li>
                                    <li><Link href="/cart" className="text-sm text-stone-600">Checkout</Link></li>
                                    {user && <Link href={route('logout')} id="logout-form" method="POST" className="d-none text-sm text-stone-600 duration-100 hover:text-red-700 border-0 bg-transparent" as="button">
                                        Logout
                                    </Link>}
                                    {/* {user && <form id="logout-form" action='' onSubmit={logOut} method="POST" className="d-none">
                                        <button className="text-sm text-stone-600 duration-100 hover:text-red-700 border-0 bg-transparent">Logout</button>
                                    </form>} */}
                                    {/* @if (Auth::user())
                                    {{-- @if (Route::has('login')) --}}
                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" className="d-none">
                                        @csrf
                                        <button className="text-sm text-stone-600 duration-100 hover:text-red-700 border-0 bg-transparent">Logout</button>
                                    </form> */}
                                        {/* {{-- <Link href="" className="text-sm text-stone-600 duration-100 hover:text-red-700">Logout</Link> --}} */}
                                    {/* @endif */}
                                </ul>
                            </div>
                        </span>
                        {/* {{-- <span className="relative cursor-pointer">
                            <i className="las la-heart border border-slate-400 rounded-full p-2 hover:bg-orange-400 hover:text-white hover:border-orange-400"></i>
                            <span className="bg-slate-900 text-white absolute top-0 right-0 rounded-full text-sm h-4 w-4 text-center" name="fav">0</span>
                        </span> --}} */}
                        <span className="relative group" id="cart">
                            <i className="las la-shopping-cart cursor-pointer border border-slate-400 rounded-full p-2 hover:bg-yellow-400  hover:border-yellow-400"></i>
                            <span className="bg-yellow-400 text-black absolute top-0 right-0 rounded-full font-bold text-xs h-4 w-4 text-center" name="cart">0</span>
                            <div className="producstOnCart hidden group-hover:block bg-white absolute top-12 -right-20 border-t-[2.5px] border-black py-4 px-3 w-[350px]">
                                <div className="products">
                                    <ul>
                                        <li className="flex justify-between items-center">
                                            <img src="./images/meatPizza.jpg" className="w-20 rounded-full" alt="" />
                                            <div className="proInfo">
                                                <p className="mb-1 text-base">Meat Pizza</p>
                                                <p className="text-lg mb-3 text-green-500">MAD <span className="priceCart"> 8.00</span></p>
                                                <div className="counts flex">
                                                    <button className="dec py-1 border text-sm px-5 cursor-pointer">-</button>
                                                    <p className="dec py-1 border-y text-sm px-5"><span className="countMany">1</span></p>
                                                    <button className="dec py-1 border text-sm px-5 cursor-pointer">+</button>
                                                </div>
                                            </div>
                                            <i className="las la-trash duration-150 hover:text-red-500 cursor-pointer"></i>
                                        </li>
                                    </ul>
                                </div>
        
                                <div className="checkout border-t border-slate-400 text-center p-2 mt-3">
                                    <p className="total-price text-slate-500 text-base mb-2">Total: <span id="Tprice">43 MAD</span></p>
                                    <button className="bg-slate-900 w-full py-3 text-white text-base mb-2"><Link href="/checkout">Checkout</Link></button>
                                    <button className="bg-white  border-2 hover:border-[3px] hover:py-[11px] border-slate-900 w-full py-3 text-slate-900 text-base">Checkout</button>
                                </div>
                            </div>
                        </span>
                        <Link href="/shop/burger" className="hidden md:block px-4 py-2  rounded-lg duration-200 hover:text-white bg-yellow-400 text-xl">order now</Link>
                    </div>
                </div>
            </div>
            <div className="menuMobile flex flex-col w-1/2 bg-white font-extralight text-md h-screen absolute -left-1/2 duration-300 top-0 z-50 px-4 py-9">
            {/* {{-- <div className="menuMobile flex-col hidden w-1/2 bg-white font-extralight text-md h-screen absolute left-0 top-0 z-50 px-4 py-9"> --}} */}
                <div className="closeIcon w-fit place-self-end bg-stone-100 p-1"><i className="las la-times cursor-pointer h-fit duration-300 hover:rotate-180 text-2xl hover:text-red-500"></i></div>
                <ul className="flex flex-col items-start gap-5 font-bold text-base">
                    {/* {{-- <li className="border-b w-full py-2 pl-3"><Link href="{{ route("home") }}" className="hover:text-yellow-400">Home</Link></li>
                    <li className="border-b w-full py-2 pl-3"><Link href="{{ route("menu") }}" className="hover:text-yellow-400">Menu</Link></li>
                    <li className="border-b w-full py-2 pl-3"><Link href="{{ route("about") }}" className="hover:text-yellow-400">About</Link></li>
                    <li className="border-b w-full py-2 pl-3"><Link href="{{ route("shop") }}" className="hover:text-yellow-400">Shop</Link></li>
                    <li className="border-b w-full py-2 pl-3"><Link href="{{ route("blog") }}" className="hover:text-yellow-400">Blog</Link></li>
                    <li className="border-b w-full py-2 pl-3"><Link href="{{ route("contact") }}" className="hover:text-yellow-400">Contact</Link></li> --}} */}
                    <li><Link href={route('home')} className="hover:text-orange-300">Home</Link></li>
                    <li><Link href="menu" className="hover:text-orange-300">Menu</Link></li>
                    <li><Link href="about" className="hover:text-orange-300">About</Link></li>
                    <li><Link href="shop" className="hover:text-orange-300">Shop</Link></li>
                    <li><Link href="blog" className="hover:text-orange-300">Blog</Link></li>
                    <li><Link href="contact" className="hover:text-orange-300">Contact</Link></li>
                </ul>
            </div>
            {/* </div> */}
        </nav>

        </>
     );
}

export default Header;