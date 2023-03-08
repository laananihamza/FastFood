{{-- Extend master layout --}} 
@extends('layouts.master')

{{-- Change Title --}} 
@section('title', 'BurgerKech')

{{-- Change Script --}} 
@section('script')
    <script src="./js/index.js" defer></script>
@endsection

@section('content')
    {{-- include navbar to home page --}}
    @include('layouts.navbar')
    {{-- main section --}}

    <section class="landing py-6 relative overflow-x-hidden">
        <div class="yellow-circle  right-0  absolute top-0"></div>
        {{-- <div class="yellow-circle w-4/6 h-96  top-24 -right-0 lg:w-4/6 md:h-full absolute md:-right-40 lg:-top-14 -z-50"></div> --}}
        {{-- <img src="/images/ellipse.png" class="hidden md:inline h-10/12 w-4/6 top-24 -right-14 lg:h-10/12 lg:w-4/6 absolute lg:-right-40 lg:-top-14 -z-50" alt=""> --}}
        <div class="container mx-auto px-5 flex flex-col lg:flex-row justify-between items-center py-9 md:py-20">
            <div class="text-burger">
                <p class="uppercase text-5xl md:text-6xl lg:text-7xl font-bold font-sans">american</p>
                <p class="uppercase text-7xl text-yellow-600 md:text-8xl lg:text-9xl font-bold font-sans lg:text-yellow-400">burger</p>
                <p class="text-green-600 font-bold text-4xl my-4">Medium 2-topping* pizza</p>
                <p class="text-slate-400 text-lg mt-4 mb-8">*Additional charge for premium toppings. Minimum of 2 required.</p>
                <a href="/shop/burger" class="px-6 py-3 md:py-4 md:px-9 mx-auto lg:mx-0 rounded-lg duration-300 hover:bg-yellow-600 hover:text-white bg-yellow-400 text-xl md:text-2xl">order now</a>

                <span class="md:ml-5 mt-9 text-green-600 font-bold text-3xl md:text-5xl ">69.99DH</span>
                <span class="text-slate-400 text-base md:text-lg line-through">99.99DH</span>
            </div>
            <div class="images">
                
                <img src="/images/burgers.png" class="burgerImag" alt="">
            </div>
        </div>
    </section>
    {{-- Products menu --}}
    
    <section class="menuProducts relative">
        <div class="linkMenu relative -top-4 mx-auto w-fit ">
            <a href="/menu" class="px-6 py-3 md:py-4 md:px-9 rounded-lg duration-300 hover:bg-yellow-600 hover:text-white bg-yellow-400 text-base">Menus</a>
        </div>
        <div class="container mx-auto ">
            <div class="category py-9 grid items-end grid-cols-2 lg:grid-cols-8 md:grid-cols-4  ">
                <a href="/shop/cold-drink">
                    <div class="combo flex flex-col justify-center items-center duration-300 hover:text-yellow-400">
                        <img src="/images/category-combo.png" alt="">
                        <p class="uppercase font-bold">Combo</p>
                    </div>
                </a>
                <a href="/shop/pasta">
                    <div class="kids flex flex-col justify-center items-center duration-300 hover:text-yellow-400">
                        <img src="/images/category-kids.png" alt="">
                        <p class="uppercase font-bold">Kids Menu</p>
                    </div>
                </a>
                <a href="/shop/pizaa">
                    <div class="pizza flex flex-col justify-center items-center duration-300 hover:text-yellow-400">
                        <img src="/images/category-pizza.png" alt="">
                        <p class="uppercase font-bold">Pizza</p>
                    </div>
                </a>
                <a href="/shop/meals">
                    <div class="meal flex flex-col justify-center items-center duration-300 hover:text-yellow-400">
                        <img src="/images/category-meal.png" alt="">
                        <p class="uppercase font-bold">Box Meals</p>
                    </div>
                </a>
                <a href="/shop/burger">
                    <div class="burger flex flex-col justify-center items-center duration-300 hover:text-yellow-400">
                        <img src="/images/category-burger.png" alt="">
                        <p class="uppercase font-bold">Burger</p>
                    </div>
                </a>
                <a href="/shop/pasta">
                    <div class="chicken flex flex-col justify-center items-center duration-300 hover:text-yellow-400">
                        <img src="/images/category-chicken.png" alt="">
                        <p class="uppercase font-bold">Chicken</p>
                    </div>
                </a>
                <a href="/shop/cold-drink">
                    <div class="sauce flex flex-col justify-center items-center duration-300 hover:text-yellow-400">
                        <img src="/images/category-sauce.png" alt="">
                        <p class="uppercase font-bold">Sauces</p>
                    </div>

                </a>
                <a href="/shop/hot-drink">
                    <div class="drink flex flex-col justify-center items-center duration-300 hover:text-yellow-400">
                        <img src="/images/category-drink.png" alt="">
                        <p class="uppercase font-bold">Drinks</p>
                    </div>
                </a>
            </div>
        </div>
        <div class="slides bg-yellow-50 py-14 -z-50">
            <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                <div class="box rounded-md p-5 mx-2.5 shadow-sm flex flex-row md:flex-col-reverse lg:flex-col-reverse xl:flex-row bg-white items-center justify-center z-0">
                    <div class="text">
                        <p class="text-3xl font-bold">Any day offers</p>
                        <p class="text-sm my-3 uppercase w-2/3">
                            new phenomenon burger taste
                        </p>
                        <p class="text-2xl font-bold text-green-600">
                            44.99DH
                        </p>
                    </div>
                    <div class="image relative">
                        <img src="/images/ellipse.png" class="point absolute duration-300 -top-6 left-5 -z-10" alt="">
                        <img src="/images/category-burger.png" class="z-10 w-64" alt="">
                    </div>
                </div>
                <div class="box rounded-md p-5 mx-2.5 flex flex-row md:flex-col-reverse lg:flex-col-reverse xl:flex-row bg-green-600 items-center justify-center z-0">
                    <div class="text text-white">
                        <p class="text-3xl font-bold">Other flavors</p>
                        <p class="text-sm my-3 uppercase w-2/3">
                            save rooms. <br />
                            we made salats
                        </p>
                        <p class="text-2xl font-bold text-yellow-400">
                            39.99DH
                        </p>
                    </div>
                    <div class="image relative">
                        <img src="/images/landingimg.jpg" class="point absolute rounded-full w-48 h-48  duration-300 -top-6 left-5 -z-10" alt="">
                        <img src="/images/category-sauce.png" class="z-10 w-64" alt="">
                    </div>
                </div>
                <div class="box rounded-md p-5 mx-2.5 text-left md:text-center lg:text-left col-span-1 md:col-span-2 lg:col-span-1 shadow-sm flex flex-row md:flex-col-reverse lg:flex-col-reverse xl:flex-row bg-white items-center justify-center z-0">
                    <div class="text  w-2/3">
                        <p class="text-3xl font-bold">Find BurgerKech near you</p>
                        <p class="text-xl mt-5 font-bold text-yellow-500">
                            <a href="/contact">Contact us</a>
                        </p>
                    </div>
                    <div class="image relative">
                        <img src="/images/ellipse.png" class="point map absolute w-44 h-32 duration-300 top-5 left-2 -z-10" alt="">
                        <img src="/images/mapmarker.png" class="z-10 w-32" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
    {{-- list of popular dishes --}}
    <section class="popular py-24">
        <div class="container mx-auto">
            <div class="title text-5xl font-bold w-fit mx-auto">
                <p>Popular Dishes</p>
            </div>
            <div class="filtermenu flex flex-wrap  justify-center items-center gap-2 md:gap-5 mt-9">
                <div class="pizza active" data-dishes="pizza">
                    <p class=" uppercase w-fit rounded-full py-4 px-12 cursor-pointer border-2 duration-150 text-sm font-bold hover:border-yellow-400 bg-yellow-400">pizza</p>
                </div>
                <div class="pasta" data-dishes="pasta">
                    <p class="uppercase rounded-full py-4 px-12 cursor-pointer border-2 duration-150 text-sm font-bold hover:border-yellow-400 w-fit bg-white">pasta</p>
                </div>
                <div class="burger" data-dishes="burger">
                    <p class="uppercase rounded-full py-4 px-12 cursor-pointer border-2 duration-150 text-sm font-bold hover:border-yellow-400 w-fit bg-white">burger</p>
                </div>
                <div class="drink" data-dishes="drink">
                    <p class="uppercase rounded-full py-4 px-12 cursor-pointer border-2 duration-150 text-sm font-bold hover:border-yellow-400 w-fit bg-white">Drink</p>
                </div>
            </div>
            <div class="loading w-full flex justify-center items-center">
                <div class="lds-dual-ring"></div>
            </div>
            <div class="boxes px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14 py-5">
            @if (count($pizzas) > 0)
                @foreach ($pizzas as $pizza)
                    <div class="box rounded-lg border overflow-hidden p-3">
                        <div class="backward-color w-full relative"><img src="/{{ $pizza->urlPhoto }}" class="mx-auto rounded-lg" alt=""></div>
                        <p class="fond-bold text-xl mt-5">{{ $pizza->name }}</p>
                        <p class="my-2 text-slate-400 h-9 overflow-hidden" title="{{$pizza->description}}">{{$pizza->description}}</p>
                        <div class="flex justify-between items-center text-yellow-400 text-3xl font-bold p-2 pt-5"><span class="pricePopular">{{ $pizza->price }} DH</span><i class="las la-shopping-basket bg-yellow-400 text-2xl mr-2 mb-2 p-1 rounded-lg duration-200 cursor-pointer text-black hover:text-white place-self-end"></i></div>
                    </div>
                @endforeach
            @endif
            </div>
            <div class="all-products w-fit mx-auto mt-14">
                <a href="{{route('shop')}}" class="uppercase rounded-md py-4 px-12 cursor-pointer duration-300 text-sm font-bold hover:border-yellow-400 w-fit bg-yellow-400 hover:bg-yellow-500 hover:text-white">All products</a>
            </div>
        </div>
    </section>
    {{-- some ads for hotdog pizza --}}
    <section class="ads-pizza overflow-y-hidden w-full bg-cover bg-no-repeat py-24 relative">
        <div class="img-pizza absolute bottom-0  w-full md:h-5/6 lg:h-full"></div>
            <div class="container absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 flex flex-col md:flex-row mx-auto justify-around items-center px-9">
                <div class="think-off relative">
                    <img src="/images/think.png" class="w-48" alt=""> <!-- class="w-80" -->
                    <div class="text-off absolute -translate-x-1/2 -translate-y-1/2 top-20 left-20">
                        <p class="getOff text-xl font-bold text-center">get Up to</p>
                        <p class="text-yellow-500 text-4xl font-bold">-50%</p>
                        <p class="font-bold text-center text-4xl">OFF</p>
                    </div>
                </div>
                <div class="order font-bold">
                    <p class="getOff text-white text-5xl shadow-sm">Hot Fresh</p>
                    <div class="main-text uppercase text-yellow-400 text-7xl md:text-8xl lg:text-10xl">
                        hotd<span class="relative">o<span class="images absolute top-0 left-1/4 w-full flex h-1/2"><img src="/images/thunder-1.png" alt=""><img src="/images/thunder-2.png" alt=""></span></span>g
                    </div>
                    <div class="link-order mt-9">
                        <a href="/menu" class="uppercase bg-white text-black py-4 px-8 duration-300 rounded-md shadow-sm hover:bg-yellow-500 hover:text-white">order now</a>
                    </div>
                </div>
            </div>
        
        
    </section>
    {{-- top recipes --}}
    <section class="recipes py-24">
        <div class="container mx-auto px-4 flex w-full gap-x-5">
            <article class="dishes w-full">
                <div class="title-recipes flex justify-between items-center ">
                    <p class="text-2xl md:text-3xl lg:text-4xl  font-bold uppercase">
                        Top recipes
                    </p>
                    <a href="/shop" class="text-md font-bold hover:text-yellow-500">See all <i class="las la-angle-right bg-green-500 hover:bg-white p-1"></i></a>
                </div>
                <div class="products-left my-5 gap-5 grid grid-cols-1 md:grid-cols-2">
                    <div class="box-dish border-2 rounded-3xl">
                        <div class="flex gap-2 items-center border-[10px] rounded-3xl border-white bg-orange-50 duration-200 hover:bg-[#ffede0]">
                            <img src="/images/breast4.png" class="w-[8em]" alt="">
                            <div class="description w-full">
                                <p class="font-bold text-lg">BBQ chicken breast</p>
                                <p class="text-md mt-2 text-slate-500">Pasta</p>
                                <p class="text-green-500 font-bold mt-2 text-xl">25DH</p>
                            </div>
                            <i class="las la-shopping-basket bg-yellow-400 text-3xl mr-2 mb-2 p-1 rounded-lg duration-200 cursor-pointer hover:text-white place-self-end"></i>
                        </div>
                    </div>
                    <div class="box-dish border-2 rounded-3xl">
                        <div class="flex gap-2 items-center border-[10px] rounded-3xl border-white bg-orange-50 duration-200 hover:bg-[#ffede0]">
                            <img src="/images/butter6.png" class="w-[8em]" alt="">
                            <div class="description w-full">
                                <p class="font-bold text-lg">Chesse Butter</p>
                                <p class="text-md mt-2 text-slate-500">burger</p>
                                <p class="text-green-500 font-bold mt-2 text-xl">35DH</p>
                            </div>
                            <i class="las la-shopping-basket bg-yellow-400 text-3xl mr-2 mb-2 p-1 rounded-lg duration-200 cursor-pointer hover:text-white place-self-end"></i>

                        </div>
                    </div>
                    <div class="box-dish border-2 rounded-3xl">
                        <div class="flex gap-2 items-center border-[10px] rounded-3xl border-white bg-orange-50 duration-200 hover:bg-[#ffede0]">
                            <img src="/images/choco7.png" class="w-[8em]" alt="">
                            <div class="description w-full">
                                <p class="font-bold text-lg">Chocolate Muffln</p>
                                <p class="text-md mt-2 text-slate-500">Cold Drinks</p>
                                <p class="text-green-500 font-bold mt-2 text-xl">28dh</p>
                            </div>
                            <i class="las la-shopping-basket bg-yellow-400 text-3xl mr-2 mb-2 p-1 rounded-lg duration-200 cursor-pointer hover:text-white place-self-end"></i>

                        </div>
                    </div>
                    <div class="box-dish border-2 rounded-3xl">
                        <div class="flex gap-2 items-center border-[10px] rounded-3xl border-white bg-orange-50 duration-200 hover:bg-[#ffede0]">
                            <img src="/images/shake5.png" class="w-[8em]" alt="">
                            <div class="description w-full">
                                <p class="font-bold text-lg">Blueberry Shake</p>
                                <p class="text-md mt-2 text-slate-500">Cold Drinks</p>
                                <p class="text-green-500 font-bold mt-2 text-xl">25dh</p>
                            </div>
                            <i class="las la-shopping-basket bg-yellow-400 text-3xl mr-2 mb-2 p-1 rounded-lg duration-200 cursor-pointer hover:text-white place-self-end"></i>

                        </div>
                    </div>
                    <div class="box-dish border-2 rounded-3xl">
                        <div class="flex gap-2 items-center border-[10px] rounded-3xl border-white bg-orange-50 duration-200 hover:bg-[#ffede0]">
                            <img src="/images/apr2.png" class="w-[8em]" alt="">
                            <div class="description w-full">
                                <p class="font-bold text-lg">Aprlcot Chicken</p>
                                <p class="text-md mt-2 text-slate-500">pizza</p>
                                <p class="text-green-500 font-bold mt-2 text-xl">26dh</p>
                            </div>
                            <i class="las la-shopping-basket bg-yellow-400 text-3xl mr-2 mb-2 p-1 rounded-lg duration-200 cursor-pointer hover:text-white place-self-end"></i>

                        </div>
                    </div>
                    <div class="box-dish border-2 rounded-3xl">
                        <div class="flex gap-2 items-center border-[10px] rounded-3xl border-white bg-orange-50 duration-200 hover:bg-[#ffede0]">
                            <img src="/images/salade9.png" class="w-[8em]" alt="">
                            <div class="description w-full">
                                <p class="font-bold text-lg">Country Salade</p>
                                <p class="text-md mt-2 text-slate-500">salades</p>
                                <p class="text-green-500 font-bold mt-2 text-xl">23dh</p>
                            </div>
                            <i class="las la-shopping-basket bg-yellow-400 text-3xl mr-2 mb-2 p-1 rounded-lg duration-200 cursor-pointer hover:text-white place-self-end "></i>
                        </div>
                    </div>
                </div>
            </article>
            <article class="box-ads-burger  relative hidden pt-5 lg:block w-4/12 bg-yellow-400 rounded-md">
                <p class="title-ads text-5xl font-bold text-center text-white">Super Delicious</p>
                <p class="title-ads-burger text-6xl mt-5 font-bold text-center uppercase text-[#f00000]">Chicken</p>
                <p class="title-ads-burger text-2xl mt-7 font-bold text-center uppercase text-white">Call us now:</p>
                <p class="title-ads-burger text-4xl mt-2 font-bold text-center uppercase text-[#f00000]">05-25-48-39-14</p>
                <img src="/images/butter6.png" class="w-80 absolute bottom-0 translate-x-[-50%] left-1/2" alt="">
            </div>
            </article>
        </div>
    </section>
    {{-- client says --}}
    <section class="client py-24 bg-orange-50 duration-200 hover:bg-[#ffede0]">
        <div class="container mx-auto px-4">
            <div class="main-text">
                <p class="main-title text-3xl font-bold uppercase">
                    what your client says
                </p>
            </div>
            <div class="slides-content relative mt-6 w-full h-44">
                <div class="slider-container user-select-none w-11/12 mx-auto swiper">
                    <div class="slides user-select-none swiper-wrapper">
                        <div class="slide swiper-slide rounded-md bg-white px-6 py-7">
                            <div class="info flex justify-between items-center overflow-hidden">
                                <div class="profile flex gap-3 items-center">
                                    <img src="/images/user.png" class="rounded-full w-16" alt="">
                                    <div class="names">
                                        <p class="text-sm md:text-md font-bold uppercase">User1 Unknown</p>
                                        <p class="text-sm text-slate-500">Ordred Pizza</p>
                                    </div>
                                </div>
                                <div class="starts flex gap-1">
                                    <i class="fas fa-star text-sm md:text-md text-yellow-400"></i>
                                    <i class="fas fa-star text-sm md:text-md text-yellow-400"></i>
                                    <i class="fas fa-star text-sm md:text-md text-yellow-400"></i>
                                    <i class="fas fa-star text-sm md:text-md text-yellow-400"></i>
                                    <i class="far fa-star text-sm md:text-md text-yellow-400"></i>
                                </div>
                            </div>
                            <div class="description mt-6 text-md md:text-lg text-slate-800">
                                <q>I ordred a medium cheese pizza, It's amazing</q>
                            </div>
                        </div>
                        <div class="slide swiper-slide rounded-md bg-white px-6 py-7">
                            <div class="info flex justify-between items-center overflow-hidden">
                                <div class="profile flex gap-3 items-center">
                                    <img src="/images/user-2.png" class="rounded-full w-16" alt="">
                                    <div class="names">
                                        <p class="text-sm md:text-md font-bold uppercase">User2 Unknown</p>
                                        <p class="text-sm text-slate-500">Ordred Burger</p>
                                    </div>
                                </div>
                                <div class="starts flex gap-1">
                                    <i class="fas fa-star text-sm md:text-md text-yellow-400"></i>
                                    <i class="fas fa-star text-sm md:text-md text-yellow-400"></i>
                                    <i class="fas fa-star text-sm md:text-md text-yellow-400"></i>
                                    <i class="fas fa-star text-sm md:text-md text-yellow-400"></i>
                                    <i class="fas fa-star text-sm md:text-md text-yellow-400"></i>
                                </div>
                            </div>
                            <div class="description mt-6 text-md md:text-lg text-slate-800">
                                <q>Best burger I ate in Marrakesh, Deserves it</q>
                            </div>
                        </div>
                        <div class="slide swiper-slide rounded-md bg-white px-6 py-7">
                            <div class="info flex justify-between items-center overflow-hidden">
                                <div class="profile flex gap-3 items-center">
                                    <img src="/images/avatar-04.png" class="rounded-full w-16" alt="">
                                    <div class="names">
                                        <p class="text-sm md:text-md font-bold uppercase">Amid Folan</p>
                                        <p class="text-sm text-slate-500">Ordred Burger</p>
                                    </div>
                                </div>
                                <div class="starts flex gap-1">
                                    <i class="fas fa-star text-sm md:text-md text-yellow-400"></i>
                                    <i class="fas fa-star text-sm md:text-md text-yellow-400"></i>
                                    <i class="fas fa-star text-sm md:text-md text-yellow-400"></i>
                                    <i class="fas fa-star text-sm md:text-md text-yellow-400"></i>
                                    <i class="far fa-star text-sm md:text-md text-yellow-400"></i>
                                </div>
                            </div>
                            <div class="description mt-6 text-md md:text-lg text-slate-800">
                                <q>That was perfect Burger, Thank you..</q>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div class="container hidden md:inline-block slider-controls select-none">
                    <i class="las la-chevron-circle-left prev absolute -left-5 lg:left-0 top-1/2 -translate-y-1/2 text-4xl cursor-pointer duration-200 text-slate-500 hover:text-slate-800" id="prev"></i>
                    <i class="las la-chevron-circle-right next absolute -right-5 lg:right-0 top-1/2 -translate-y-1/2  text-4xl cursor-pointer duration-200 text-slate-500 hover:text-slate-800" id="next"></i>
                </div>
            </div>
        </div>
    </section>
    {{-- Banner --}}
    <section class="banner lg:h-[500px]">
        <div class="content h-full grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {{-- <div class="content lg:h-[500px] xl:h-[450px] grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> --}}
            <div class="banner-post chicken-banner relative">
                <img src="./images/shape-banner.png" class="shape-banner h-full absolute right-0 top-0 object-cover"  alt="">
                <img src="./images/banner-chicken.png" class="w-full h-full object-cover"  alt="">
                <div class="information flex flex-col justify-evenly absolute top-0 left-0 w-full h-full pl-14 py-9">
                    <p class="banner-main-des text-5xl text-white">Fash Food</p>
                    <p class="banner-titles font-black text-yellow-400 text-3xl md:text-5xl lg:text-7xl uppercase">Meals</p>
                    <p class="desc-banner text-xl text-white uppercase">new phenomenon<br> chicken taste</p>
                    <p class="text-yellow-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">24.99DH</p>
                    <p class="mt-2 md:mt-0"><a href="/shop" class="px-6 py-1 sm:mt-5 md:py-2 lg:px-8 lg:py-4 rounded-md bg-white text-black duration-200 hover:text-yellow-400 uppercase">order now</a></p>
                </div>
            </div>
            <div class="banner-post burger-banner relative col-span-1 md:col-span-2 lg:col-span-1">
                <img src="./images/shape-banner.png" class="shape-banner h-full absolute right-0 top-0 object-cover"  alt="">
                <img src="./images/banner-burger.png" class="w-full h-full md:h-[400px] lg:h-full object-cover" alt="">
                <div class="information flex flex-col justify-evenly absolute top-0 left-0 w-full h-full pl-14 py-9">
                    <p class="banner-main-des text-5xl text-white">House</p>
                    <p class="banner-titles font-black text-yellow-400 text-3xl md:text-5xl lg:text-7xl uppercase">burger</p>
                    <p class="desc-banner text-xl text-white uppercase">new phenomenon<br> burger taste</p>
                    <p class="text-yellow-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">23.99DH</p>
                    <p class="mt-2 md:mt-0"><a href="/shop" class="px-6 py-1 sm:mt-5 md:py-2 lg:px-8 lg:py-4 rounded-md bg-white text-black duration-200 hover:text-yellow-400 uppercase">order now</a></p>
                </div>
            </div>
            <div class="banner-post salad-banner relative">
                <img src="./images/shape-banner.png" class="shape-banner h-full absolute right-0 top-0 object-cover"  alt="">
                <img src="./images/banner-salad.png" class="w-full h-full object-cover"  alt="">
                <div class="information flex flex-col justify-evenly absolute top-0 left-0 w-full h-full pl-14 py-9">
                    <p class="banner-main-des text-5xl text-white">Hot Fash</p>
                    <p class="banner-titles font-black text-yellow-800 text-3xl md:text-5xl lg:text-7xl uppercase">Salats</p>
                    <p class="desc-banner text-xl text-white uppercase">new phenomenon<br> salat taste</p>
                    <p class="text-yellow-800 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">12.99DH</p>
                    <p class="mt-2 md:mt-0"><a href="/shop" class="px-6 py-1 sm:mt-5 md:py-2 lg:px-8 lg:py-4 rounded-md bg-white text-black duration-200 hover:text-yellow-400 uppercase">order now</a></p>
                </div>
            </div>
        </div>
    </section>
    {{-- News --}}
    <section class="news pt-24 pb-32">
        <div class="container mx-auto px-4 xl:px-24">
            <div class="main-head-news h-max flex justify-between items-center">
                <p class="main-title-news text-3xl font-extrabold uppercase">Latest news</p>
                <a href="/blog" class="text-md font-bold hover:text-yellow-500">See all <i class="las la-angle-right bg-green-500 hover:bg-white p-1 rounded-full"></i></a>
            </div>
            <div class="postes-blog grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-9">
                <div class="post post-first h-full md:pb-10 lg:pb-14 xl:pb-10 2xl:pb-5 rounded-md bg-white overflow-hidden border-2">
                    <div class="image h-3/6  rounded-t-md overflow-hidden">
                        <img src="./images/posts-blog-1.jpg" class="h-full w-full object-cover" alt="">
                    </div>
                    <div class="texts py-7 px-5">
                        <p class="text-md text-gray-500"><a href="/blog" class="hover:text-yellow-400">blog</a> / 15 Sep / posted by <span class="text-black">Ahmad Jone</span></p>
                        <p class="mt-3 text-xl font-bold">Easy Way To Prepare Burger</p>
                        <p class="short-descr mt-3 text-md text-stone-500 leading-relaxed">The Ultimate Hangover Burger: Egg in a Hole Burger Grilled Cheese Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed ...</p>
                    </div>
                    <div class="link-read-more px-5">
                        <a href="/blog/post/1504" class="uppercase text-[12px] rounded-md bg-yellow-400 px-8 py-4 duration-200 hover:text-white">read more</a>
                    </div>
                </div>
                <div class="post post-second h-full md:pb-10 lg:pb-14 xl:pb-10 2xl:pb-5 rounded-md bg-white overflow-hidden border-2">
                    <div class="image h-3/6  rounded-t-md overflow-hidden">
                        <img src="./images/posts-blog-2.png" class="h-full w-full object-cover" alt="">
                    </div>
                    <div class="texts py-7 px-5">
                        <p class="text-md text-gray-500"><a href="/blog" class="hover:text-yellow-400">blog</a> / 08 Oct / posted by <span class="text-black">Khalid Abouai</span></p>
                        <p class="mt-3 text-xl font-bold">Top 5 Burger's Ingredients</p>
                        <p class="short-descr mt-3 text-md text-stone-500 leading-relaxed">The Ultimate Hangover Burger: Egg in a Hole Burger Grilled Cheese Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed ...</p>
                    </div>
                    <div class="link-read-more px-5">
                        <a href="/blog/post/1196" class="uppercase text-[12px] rounded-md bg-yellow-400 px-8 py-4 duration-200 hover:text-white">read more</a>
                    </div>
                </div>
                <div class="post post-third h-full md:pb-10 lg:pb-14 xl:pb-10 2xl:pb-5 rounded-md bg-white overflow-hidden border-2">
                    <div class="image h-3/6  rounded-t-md overflow-hidden">
                        <img src="./images/posts-blog-3.jpg" class="h-full w-full object-cover" alt="">
                    </div>
                    <div class="texts py-7 px-5">
                        <p class="text-md text-gray-500"><a href="/blog" class="hover:text-yellow-400">blog</a> / 26 Oct / posted by <span class="text-black">Vladimir Yoshi</span></p>
                        <p class="mt-3 text-xl font-bold">5 Burgers You Have To Try it</p>
                        <p class="short-descr mt-3 text-md text-stone-500 leading-relaxed">The Ultimate Hangover Burger: Egg in a Hole Burger Grilled Cheese Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed ...</p>
                    </div>
                    <div class="link-read-more px-5">
                        <a href="/blog/post/1873" class="uppercase text-[12px] rounded-md bg-yellow-400 px-8 py-4 duration-200 hover:text-white">read more</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
