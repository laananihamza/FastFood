<header class="bg-slate-900 w-full md:p-3">
    <div class="container mx-auto px-9">
        <div class="header hidden md:flex justify-between items-center">
            <div class="leftSide text-xs flex items-center text-white uppercase
             gap-3.5">
                <div class="phone flex flex-row items-center gap-2">
                    <i class="las la-mobile text-xl"></i>
                    <p class=""><a href="tel: +212 5 48 75 63 32" class="">+212 5 48 75 63 32</a></p>
                </div>
                <div class="address flex flex-row items-center gap-2">
                    <i class="las la-map-marker text-xl"></i>
                    <p class=""> Casablanca Ain Shoq N 15</p>
                </div>
                </div>
                <div class="rightSide text-white text-xl">
                    <a href="https://www.facebook.com"><i class="lab la-facebook mx-2 hover:text-yellow-400"></i></a>
                    <a href="https://www.instagram.com"><i class="lab la-instagram mx-2 hover:text-yellow-400"></i></a>
                    <a href="https://www.twitter.com"><i class="lab la-twitter mx-2 hover:text-yellow-400"></i></a>
                    <a href="https://www.youtube.com"><i class="lab la-youtube mx-2 hover:text-yellow-400"></i></a>

                </div>
        </div>
    </div>
</header>
<nav class="z-50 sticky top-0 bg-white shadow-sm">
    <div class="container mx-auto">
        <div class="nav py-5 flex justify-evenly items-center">
            <div class="MobileMenuIcon inline-block lg:hidden">
                <i class="las la-bars text-4xl cursor-pointer"></i>
            </div>
            <a href="/"><img src="images/BurgerKech_Logo.png" class="logo w-36 2xl:w-44" alt=""></a>
            
            <div class="menu hidden lg:inline-block">
                <ul class="flex items-center gap-5 font-bold text-xl">
                    <li class="home"><a href="{{ route("home") }}" class="hover:text-yellow-400">Home</a></li>
                    <li class="menu"><a href="{{ route("menu") }}" class="hover:text-yellow-400">Menu</a></li>
                    <li class="about"><a href="{{ route("about") }}" class="hover:text-yellow-400">About</a></li>
                    <li class="shop"><a href="{{ route("shop") }}" class="hover:text-yellow-400">Shop</a></li>
                    <li class="blog"><a href="{{ route("blog") }}" class="hover:text-yellow-400">Blog</a></li>
                    <li class="contact"><a href="{{ route("contact") }}" class="hover:text-yellow-400">Contact</a></li>
                    {{-- <li><a href="/" class="active hover:text-orange-300">Home</a></li>
                    <li><a href="menu" class="hover:text-orange-300">Menu</a></li>
                    <li><a href="about" class="hover:text-orange-300">About</a></li>
                    <li><a href="shop" class="hover:text-orange-300">Shop</a></li>
                    <li><a href="blog" class="hover:text-orange-300">Blog</a></li>
                    <li><a href="contact" class="hover:text-orange-300">Contact</a></li> --}}
                </ul>
            </div>
            <div class="order-phone hidden xl:flex flex-row items-center">
                <i class="las la-paper-plane text-green-500 text-4xl"></i>
                <div class="order-number">
                    <p class="text-slate-400 text-md">Call and Order in</p>
                    <a href="tel: +212 5 48 75 63 32" class="text-orange-500 text-xl">+212 5 48 75 63 32</a>
                </div>
            </div>

            <div class="other text-2xl flex items-center gap-2">
                {{-- <span class="relative cursor-pointer">
                    <i class="las la-search border border-slate-400 rounded-full p-2 hover:bg-orange-400 hover:text-white hover:border-orange-400" name="search"></i>
                    
                </span> --}}
                <span class="user relative cursor-pointer group" id="user">
                    <i class="las la-user border  border-slate-400 rounded-full p-2 hover:bg-yellow-400  hover:border-yellow-400"></i>
                    <div class="userprofile hidden w-32 bg-white group-hover:block py-3 pl-4 pr-4 absolute top-full right-0 border shadow-sm">
                        <ul>
                            {{-- @if (Route::has('login')) --}}
                            @if (Auth::user())
                                <p class="text-sm text-stone-600"><a href="/profile">{{Auth::user()->name}}</a></p>
                            @else
                                <li><a href="/login" class="text-sm text-stone-600">Sign in</a></li>
                                <li><a href="/register" class="text-sm text-stone-600">Register</a></li>
                            @endif
                            <li><a href="/wishlist" class="text-sm text-stone-600">Wishlist(<span class="wishlist-number">0</span>)</a></li>
                            <li><a href="/compare" class="text-sm text-stone-600">Compare(<span class="compare-number">0</span>)</a></li>
                            <li><a href="/cart" class="text-sm text-stone-600">Checkout</a></li>
                            @if (Auth::user())
                            {{-- @if (Route::has('login')) --}}
                            <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                @csrf
                                <button class="text-sm text-stone-600 duration-100 hover:text-red-700 border-0 bg-transparent">Logout</button>
                            </form>
                                {{-- <a href="" class="text-sm text-stone-600 duration-100 hover:text-red-700">Logout</a> --}}
                            @endif
                        </ul>
                    </div>
                </span>
                {{-- <span class="relative cursor-pointer">
                    <i class="las la-heart border border-slate-400 rounded-full p-2 hover:bg-orange-400 hover:text-white hover:border-orange-400"></i>
                    <span class="bg-slate-900 text-white absolute top-0 right-0 rounded-full text-sm h-4 w-4 text-center" name="fav">0</span>
                </span> --}}
                <span class="relative group" id="cart">
                    <i class="las la-shopping-cart cursor-pointer border border-slate-400 rounded-full p-2 hover:bg-yellow-400  hover:border-yellow-400"></i>
                    <span class="bg-yellow-400 text-black absolute top-0 right-0 rounded-full font-bold text-xs h-4 w-4 text-center" name="cart">0</span>
                    <div class="producstOnCart hidden group-hover:block bg-white absolute top-12 -right-20 border-t-[2.5px] border-black py-4 px-3 w-[350px]">
                        <div class="products">
                            <ul>
                                <li class="flex justify-between items-center">
                                    <img src="./images/meatPizza.jpg" class="w-20 rounded-full" alt="">
                                    <div class="proInfo">
                                        <p class="mb-1 text-base">Meat Pizza</p>
                                        <p class="text-lg mb-3 text-green-500">MAD <span class="priceCart"> 8.00</span></p>
                                        <div class="counts flex">
                                            <button class="dec py-1 border text-sm px-5 cursor-pointer">-</button>
                                            <p class="dec py-1 border-y text-sm px-5"><span class="countMany">1</span></p>
                                            <button class="dec py-1 border text-sm px-5 cursor-pointer">+</button>
                                        </div>
                                    </div>
                                    <i class="las la-trash duration-150 hover:text-red-500 cursor-pointer"></i>
                                </li>
                            </ul>
                        </div>

                        <div class="checkout border-t border-slate-400 text-center p-2 mt-3">
                            <p class="total-price text-slate-500 text-base mb-2">Total: <span id="Tprice">43 MAD</span></p>
                            <button class="bg-slate-900 w-full py-3 text-white text-base mb-2"><a href="/checkout">Checkout</a></button>
                            <button class="bg-white  border-2 hover:border-[3px] hover:py-[11px] border-slate-900 w-full py-3 text-slate-900 text-base">Checkout</button>
                        </div>
                    </div>
                </span>
                <a href="/shop/burger" class="hidden md:block px-4 py-2  rounded-lg duration-200 hover:text-white bg-yellow-400 text-xl">order now</a>
            </div>
        </div>
    </div>
    <div class="menuMobile flex flex-col w-1/2 bg-white font-extralight text-md h-screen absolute -left-1/2 duration-300 top-0 z-50 px-4 py-9">
    {{-- <div class="menuMobile flex-col hidden w-1/2 bg-white font-extralight text-md h-screen absolute left-0 top-0 z-50 px-4 py-9"> --}}
        <div class="closeIcon w-fit place-self-end bg-stone-100 p-1"><i class="las la-times cursor-pointer h-fit duration-300 hover:rotate-180 text-2xl hover:text-red-500"></i></div>
        <ul class="flex flex-col items-start gap-5 font-bold text-base">
            <li class="border-b w-full py-2 pl-3"><a href="{{ route("home") }}" class="hover:text-yellow-400">Home</a></li>
            <li class="border-b w-full py-2 pl-3"><a href="{{ route("menu") }}" class="hover:text-yellow-400">Menu</a></li>
            <li class="border-b w-full py-2 pl-3"><a href="{{ route("about") }}" class="hover:text-yellow-400">About</a></li>
            <li class="border-b w-full py-2 pl-3"><a href="{{ route("shop") }}" class="hover:text-yellow-400">Shop</a></li>
            <li class="border-b w-full py-2 pl-3"><a href="{{ route("blog") }}" class="hover:text-yellow-400">Blog</a></li>
            <li class="border-b w-full py-2 pl-3"><a href="{{ route("contact") }}" class="hover:text-yellow-400">Contact</a></li>
            {{-- <li><a href="/home" class="hover:text-orange-300">Home</a></li>
            <li><a href="menu" class="hover:text-orange-300">Menu</a></li>
            <li><a href="about" class="hover:text-orange-300">About</a></li>
            <li><a href="shop" class="hover:text-orange-300">Shop</a></li>
            <li><a href="blog" class="hover:text-orange-300">Blog</a></li>
            <li><a href="contact" class="hover:text-orange-300">Contact</a></li> --}}
        </ul>
    </div>
    {{-- <div class="searchNav hidden w-full bg-white h-screen absolute top-0 left-0 md:flex justify-center items-center">
        <i class="las la-times-circle absolute top-1/4 right-14 md:right-52 text-2xl cursor-pointer" id="closeSearchBar"></i>
        <form action="/" method="get" class="">
            @csrf
            <div class="w-fit relative border-b">
                <div class="input-fill">
                    <input type="text" class="bg-transparent w-96 rounded focus:placeholder:text-white focus:bg-orange-300 focus:outline-0 px-5 py-3" name="searchBar" id="search" placeholder="Search products...">
                <label for="submit" class="absolute right-6 top-2">
                    <i class="las la-search text-2xl" name="searchButton"></i>
                    <input type="submit" value="" class="hidden" id="submit">
                </label>
                </div>
            </div>
        </form>
    </div> --}}
    {{-- <div class="lg:hidden otherMobile grid grid-cols-5 fixed bottom-0 w-full text-3xl text-center">
        <a href="/" class="relative bg-white border-t border-r border-slate-400 p-3 hover:bg-orange-400 hover:text-white hover:border-orange-400">
            <span>
                <i class="las la-store-alt "></i>
                <p class="text-sm">Store</p>
            </span>
        </a>
            <span class="relative bg-white cursor-pointer border-t border-r border-slate-400 p-3 hover:bg-orange-400 hover:text-white hover:border-orange-400">
                <i class="las la-search " name="search"></i>
                <p class="text-sm">Search</p>
            </span>
            <a href="user" class="relative bg-white border-t border-r border-slate-400 p-3 hover:bg-orange-400 hover:text-white hover:border-orange-400">
                <span>
                    <i class="las la-user "></i>
                <p class="text-sm">Account</p>
                </span>
            </a>
        <a href="favourite" class="relative bg-white border-t border-r border-slate-400 p-3 hover:bg-orange-400 hover:text-white hover:border-orange-400">
            <span>
                <i class="las la-heart "></i>
                <p class="text-sm">Wishlist</p>
                <span class="bg-slate-900 text-white rounded-full absolute top-0 right-0 text-sm h-4 w-4 text-center" name="fav">0</span>
            </span>
        </a>
        <a href="cart" class="relative bg-white border-t border-r border-slate-400 p-3 hover:bg-orange-400 hover:text-white hover:border-orange-400">
            <span>
                <i class="las la-shopping-cart "></i>
                <p class="text-sm">My Cart</p>
                <span class="bg-slate-900 text-white absolute top-0 right-0 rounded-full text-sm h-4 w-4 text-center" name="cart">0</span>
            </span>
        </a>
    </div> --}}
</nav>
