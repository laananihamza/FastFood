<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="/images/BK.png" type="image/x-icon">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title inertia>{{ config('app.name', 'Laravel') }}</title>
        <link href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" />
        <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
        {{-- @routes --}}
        @viteReactRefresh
        @vite(['resources/css/app.css' ,'resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
        @routes
        <script src="./js/index.js" defer></script>
        <link rel="stylesheet" href="css/all.min.css">
        <link rel="stylesheet" href="css/normlize.css">
        <link rel="stylesheet" href="css/line-awesome.css">
        <link rel="stylesheet" href="css/line-awesome.min.css">
        <link rel="stylesheet" href="css/style.css">
        <style>
          html {
              font-family: 'Nunito', sans-serif !important;
          }
          
      </style>
    </head>
    <body class="overflow-x-hidden">
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
                            {{-- <li class="menu"><a href="{{ route("menu") }}" class="hover:text-yellow-400">Menu</a></li>
                            <li class="about"><a href="{{ route("about") }}" class="hover:text-yellow-400">About</a></li>
                            <li class="shop"><a href="{{ route("shop") }}" class="hover:text-yellow-400">Shop</a></li>
                            <li class="blog"><a href="{{ route("blog") }}" class="hover:text-yellow-400">Blog</a></li>
                            <li class="contact"><a href="{{ route("contact") }}" class="hover:text-yellow-400">Contact</a></li> --}}
                            {{-- <li><a href="/" class="active hover:text-orange-300">Home</a></li> --}}
                            <li><a href="menu" class="hover:text-orange-300">Menu</a></li>
                            <li><a href="about" class="hover:text-orange-300">About</a></li>
                            <li><a href="shop" class="hover:text-orange-300">Shop</a></li>
                            <li><a href="blog" class="hover:text-orange-300">Blog</a></li>
                            <li><a href="contact" class="hover:text-orange-300">Contact</a></li>
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
                                        <li><a href={{route('login')}} class="text-sm text-stone-600">Sign in</a></li>
                                        <li><a href={{route('register')}} class="text-sm text-stone-600">Register</a></li>
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
                    {{-- <li class="border-b w-full py-2 pl-3"><a href="{{ route("home") }}" class="hover:text-yellow-400">Home</a></li>
                    <li class="border-b w-full py-2 pl-3"><a href="{{ route("menu") }}" class="hover:text-yellow-400">Menu</a></li>
                    <li class="border-b w-full py-2 pl-3"><a href="{{ route("about") }}" class="hover:text-yellow-400">About</a></li>
                    <li class="border-b w-full py-2 pl-3"><a href="{{ route("shop") }}" class="hover:text-yellow-400">Shop</a></li>
                    <li class="border-b w-full py-2 pl-3"><a href="{{ route("blog") }}" class="hover:text-yellow-400">Blog</a></li>
                    <li class="border-b w-full py-2 pl-3"><a href="{{ route("contact") }}" class="hover:text-yellow-400">Contact</a></li> --}}
                    <li><a href="/home" class="hover:text-orange-300">Home</a></li>
                    <li><a href="menu" class="hover:text-orange-300">Menu</a></li>
                    <li><a href="about" class="hover:text-orange-300">About</a></li>
                    <li><a href="shop" class="hover:text-orange-300">Shop</a></li>
                    <li><a href="blog" class="hover:text-orange-300">Blog</a></li>
                    <li><a href="contact" class="hover:text-orange-300">Contact</a></li>
                </ul>
            </div>
            </div>
        </nav>

        
        @inertia


        <footer class="  relative">
            <div class="part-1-footer py-24 bg-[#181818] relative">
                    <div class="container mx-auto px-4">
                        <img src="./images/delivery.png" class="delivery absolute -top-28 md:-top-40 lg:-top-32 right-32 w-5/12 md:w-fit " />
                    </div>
                <div class="logo-footer mx-auto flex justify-center items-center relative">
                    <a href="/" class="w-fit flex justify-center items-center">
                        <img src="/images/BK.png" class="logo-image w-1/3 md:w-1/4 lg:w-1/3" />
                    </a>
                </div>
                <div class="container mx-auto px-4">
                        <div class="summary-info mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
                            <div class="box text-center ">
                                <p class="text-white font-black mb-3 text-xl uppercase">address</p>
                                <p class="text-stone-400 text-md">570 Giliz,
                                    Marrakesh, 40000<br>
                                    Morocco</p>
                            </div>
                            <div class="box text-center">
                                <p class="text-white font-black mb-3 text-xl uppercase">Book a Table</p>
                                <p class="text-stone-400 text-sm leading-relaxed">Dogfood och Sliders foodtruck.
                                    Under<br> Om oss kan ni läsa</p>
                                <div class="phone-number text-yellow-400 font-bold text-lg my-3"> (+212) 5 12 48 97 26</div>
                            </div>
                            <div class="box text-center">
                                <p class="text-white font-black mb-4 text-xl uppercase">opening hours</p>
                                <ul>
                                    <li class="text-stone-400 text-sm">Monday - Friday : <span class="text-white font-bold">9:00 - 22:00 </span></li>
                                    <li class="text-stone-400 text-sm mt-2"> Saturday - Sunday : <span class="text-white font-bold">9:00 - 00:00 </span></li>
                                </ul>
                            </div>
                            <div class="box text-center">
                                <p class="text-white font-black mb-3 text-xl uppercase">newsLatest</p>
                                <p class="text-stone-400 text-sm leading-relaxed mb-2">Subscribe to the weekly newsletter for all the latest updates</p>
                                <form action="/" method="post">
                                    @csrf
                                    <div class="email-input w-full p-2 rounded-md border border-stone-500 flex items-center">
                                        <input type="email" class="p-2 w-full bg-[#181818] text-slate-50 border-none placeholder:bg-[#181818] placeholder:text-slate-300 focus:outline-none" name="email" id="email" placeholder="Your email..">
                                        <input type="submit" class="bg-yellow-500 w-fit py-3 px-4 rounded-md cursor-pointer" value="Subscribe">
                                    </div>
                                </form>
                                
                            </div>
                        </div>
                        <div class="social-media flex justify-center items-center gap-5 absolute -bottom-5 w-full left-0">
                            <a href="https://facebook.com/burgerkech"><i class="lab la-facebook-f p-2 text-xl rounded-full bg-white duration-200 hover:bg-blue-600 hover:text-white"></i></a>
                            <a href="https://twitter.com/burgerkech"><i class="lab la-twitter p-2 text-xl rounded-full bg-white duration-200 hover:bg-sky-500 hover:text-white"></i></a>
                            <a href="https://instagram.com/burgerkech"><i class="lab la-instagram p-2 text-2xl rounded-full bg-white duration-200 hover:bg-gradient-to-br from-violet-400 to-pink-400 hover:bg-l hover:text-white"></i></a>
                            <a href="https://youtube.com/c/burgerkech"><i class="lab la-youtube p-2 text-2xl rounded-full bg-white duration-200 hover:bg-red-600 hover:text-white"></i></a>
                        </div>
                    
                </div>
            </div>
            <div class="part-2 bg-green-600 py-5 ">
                <div class="container mx-auto px-5 flex flex-col gap-5 py-14 md:flex-row md:gap-1 md:py-0  justify-between items-center">
                    <p class="copyright text-md text-white">
                        Copyright &copy; {{ date('Y') }}, Made By <span class="text-yellow-400">LAANANI</span> <i class="las la-heart text-red-600"></i>
                    </p>
                    <img src="./images/payments.png" alt="">
                </div>
            </div>
            </footer>
    </body>
</html>
