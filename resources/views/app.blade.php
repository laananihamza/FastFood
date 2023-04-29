<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="/images/BK.png" type="image/x-icon">
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
    {{-- <li class="home"><a href="{{ route("home") }}" class="hover:text-yellow-400">Home</a></li>
                            <li class="menu"><a href="{{ route("menu") }}" class="hover:text-yellow-400">Menu</a></li>
                            <li class="about"><a href="{{ route("about") }}" class="hover:text-yellow-400">About</a></li>
                            <li class="shop"><a href="{{ route("shop") }}" class="hover:text-yellow-400">Shop</a></li>
                            <li class="blog"><a href="{{ route("blog") }}" class="hover:text-yellow-400">Blog</a></li>
                            <li class="contact"><a href="{{ route("contact") }}" class="hover:text-yellow-400">Contact</a></li> --}}
        {{-- <span class="relative cursor-pointer">
                            <i class="las la-search border border-slate-400 rounded-full p-2 hover:bg-orange-400 hover:text-white hover:border-orange-400" name="search"></i>
                            
                        </span> --}}
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
