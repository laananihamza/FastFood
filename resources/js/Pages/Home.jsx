import { Head, Link, router } from '@inertiajs/react'
import { Inertia } from '@inertiajs/inertia'
import { useState, useEffect } from 'react'
import SwiperSlide from '../components/swiperSlide'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

export default function Home(props) {
    const [dishesClick, setDishesClick] = useState('pizza')
    // console.log(document.querySelector('meta[name=csrf-token]').getAttribute('content'));
    // useEffect(() => {
    //     router.visit('/test', {
    //         method: 'post',
    //         data: {
    //             name
    //         },
            
    //     })

        

    // }, [name])
    function getJson(name) {
        router.visit(route('home'), {
            method: 'POST',
            data: {
                name
            },
            preserveScroll: true,
            
        })
        // fetch('/test', {
        //     method: 'POST',
        //     data: {
        //         name,
        //         _token: '<?php echo csrf_token() ?>',
        //     }
        // }).then((res) => res.json())
        // .then((data) => console.log(data))
    }
    return (
    <>
        <Head title="Home" />
        <Header user={props.user} />
        <section className="landing py-6 relative overflow-hidden">
      
            <div className="yellow-circle  right-0  absolute top-0"></div>
                <div className="yellow-circle w-4/6 h-96  top-24 -right-0 lg:w-4/6 md:h-full absolute md:-right-40 lg:-top-14 -z-50"></div> 
                <img src="/images/ellipse.png" className="hidden md:inline h-10/12 w-4/6 top-24 -right-14 lg:h-10/12 lg:w-4/6 absolute lg:-right-40 lg:-top-14 -z-50" alt="" /> 
        <div className="container mx-auto px-5 flex flex-col lg:flex-row justify-between items-center py-9 md:py-20">
      
            <div className="text-burger">
                <p className="uppercase text-5xl md:text-6xl lg:text-7xl font-bold font-sans">american</p>
                <p className="uppercase text-7xl text-yellow-500 md:text-8xl lg:text-9xl font-bold font-sans lg:text-yellow-300">burger</p>
                <p className="text-green-500 font-bold text-4xl my-4">Medium 2-topping* pizza</p>
                <p className="text-slate-400 text-lg mt-4 mb-8">*Additional charge for premium toppings. Minimum of 2 required.</p>
                <Link href="/shop/burger" className=" px-4 py-3 mr-3 md:py-4 md:px-9 mx-auto lg:mx-0 rounded-lg duration-300 hover:bg-yellow-500 hover:text-white bg-yellow-300 text-sm sm:text-base md:text-2xl">order now</Link>
                {/* <button className=' bg-yellow-500 text-white' onClick={(e) => getJson(e.target.textContent)}>Pizza</button>
                <button className=' bg-yellow-500 text-white' onClick={(e) => getJson(e.target.textContent)}>burger</button>
                <button className=' bg-yellow-500 text-white' onClick={(e) => getJson(e.target.textContent)}>tacos</button> */}
                
                <span className="md:ml-5 mt-9 text-green-500 font-bold text-3xl md:text-5xl ">69.99DH</span>
                <span className="text-slate-400 text-base md:text-lg line-through">99.99DH</span>
            </div>
            <div className="images">
                
                <img src="/images/burgers.png" className="burgerImag" alt="" />
            </div>
        </div>
    </section>
    
    <section className="menuProducts relative">
        <div className="linkMenu relative -top-4 mx-auto w-fit ">
            <Link href="/menu" className="px-6 py-3 md:py-4 md:px-9 rounded-lg duration-300 hover:bg-yellow-500 hover:text-white bg-yellow-300 text-base">Menus</Link>
        </div>
        <div className="container mx-auto ">
            <div className="category py-9 grid items-end grid-cols-2 lg:grid-cols-8 md:grid-cols-4  ">
                <Link href="/shop/cold-drink">
                    <div className="combo flex flex-col justify-center items-center duration-300 hover:text-yellow-300">
                        <img src="/images/category-combo.png" alt="" />
                        <p className="uppercase font-bold">Combo</p>
                    </div>
                </Link>
                <Link href="/shop/pasta">
                    <div className="kids flex flex-col justify-center items-center duration-300 hover:text-yellow-300">
                        <img src="/images/category-kids.png" alt="" />
                        <p className="uppercase font-bold">Kids Menu</p>
                    </div>
                </Link>
                <Link href="/shop/pizaa">
                    <div className="pizza flex flex-col justify-center items-center duration-300 hover:text-yellow-300">
                        <img src="/images/category-pizza.png" alt="" />
                        <p className="uppercase font-bold">Pizza</p>
                    </div>
                </Link>
                <Link href="/shop/meals">
                    <div className="meal flex flex-col justify-center items-center duration-300 hover:text-yellow-300">
                        <img src="/images/category-meal.png" alt="" />
                        <p className="uppercase font-bold">Box Meals</p>
                    </div>
                </Link>
                <Link href="/shop/burger">
                    <div className="burger flex flex-col justify-center items-center duration-300 hover:text-yellow-300">
                        <img src="/images/category-burger.png" alt="" />
                        <p className="uppercase font-bold">Burger</p>
                    </div>
                </Link>
                <Link href="/shop/pasta">
                    <div className="chicken flex flex-col justify-center items-center duration-300 hover:text-yellow-300">
                        <img src="/images/category-chicken.png" alt="" />
                        <p className="uppercase font-bold">Chicken</p>
                    </div>
                </Link>
                <Link href="/shop/cold-drink">
                    <div className="sauce flex flex-col justify-center items-center duration-300 hover:text-yellow-300">
                        <img src="/images/category-sauce.png" alt="" />
                        <p className="uppercase font-bold">Sauces</p>
                    </div>

                </Link>
                <Link href="/shop/hot-drink">
                    <div className="drink flex flex-col justify-center items-center duration-300 hover:text-yellow-300">
                        <img src="/images/category-drink.png" alt="" />
                        <p className="uppercase font-bold">Drinks</p>
                    </div>
                </Link>
            </div>
        </div>
        <div className="slides bg-yellow-50 py-14 -z-50">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                <div className="box rounded-md p-5 mx-2.5 shadow-sm flex flex-row md:flex-col-reverse lg:flex-col-reverse xl:flex-row bg-white items-center justify-center z-0">
                    <div className="text">
                        <p className="text-3xl font-bold">Any day offers</p>
                        <p className="text-sm my-3 uppercase w-2/3">
                            new phenomenon burger taste
                        </p>
                        <p className="text-2xl font-bold text-green-500">
                            39.99DH
                        </p>
                    </div>
                    <div className="image relative">
                        <img src="/images/ellipse.png" className="point absolute duration-300 -top-6 left-5 -z-10" alt="" />
                        <img src="/images/category-burger.png" className="z-10 w-64" alt="" />
                    </div>
                </div>
                <div className="box rounded-md p-5 mx-2.5 flex flex-row md:flex-col-reverse lg:flex-col-reverse xl:flex-row bg-green-500 items-center justify-center z-0">
                    <div className="text text-white">
                        <p className="text-3xl font-bold">Other flavors</p>
                        <p className="text-sm my-3 uppercase w-2/3">
                            save rooms. <br />
                            we made salats
                        </p>
                        <p className="text-2xl font-bold text-yellow-300">
                            39.99DH
                        </p>
                    </div>
                    <div className="image relative">
                        <img src="/images/landingimg.jpg" className="point absolute rounded-full w-48 h-48  duration-300 -top-6 left-5 -z-10" alt="" />
                        <img src="/images/category-sauce.png" className="z-10 w-64" alt="" />
                    </div>
                </div>
                <div className="box rounded-md p-5 mx-2.5 text-left md:text-center lg:text-left col-span-1 md:col-span-2 lg:col-span-1 shadow-sm flex flex-row md:flex-col-reverse lg:flex-col-reverse xl:flex-row bg-white items-center justify-center z-0">
                    <div className="text  w-2/3">
                        <p className="text-3xl font-bold">Find BurgerKech near you</p>
                        <p className="text-xl mt-5 font-bold text-yellow-500">
                            <Link href="/contact">Contact us</Link>
                        </p>
                    </div>
                    <div className="image relative">
                        <img src="/images/ellipse.png" className="point map absolute w-44 h-32 duration-300 top-5 left-2 -z-10" alt="" />
                        <img src="/images/mapmarker.png" className="z-10 w-32" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="popular py-24">
        <div className="container mx-auto">
            <div className="title text-5xl font-bold w-fit mx-auto">
                <p>Popular Dishes</p>
            </div>
            <div className="filtermenu flex flex-wrap  justify-center items-center gap-2 md:gap-5 mt-9">
                <div className="pizza " id="pizza">
                    <p onClick={(e) => getJson(e.target.textContent)} className={` uppercase w-fit rounded-full py-4 px-12 cursor-pointer border-[3px] duration-150 text-sm font-bold hover:border-yellow-300 ${props?.products[0]?.category_name === 'Pizza' && 'border-yellow-300'} bg-white`}>pizza</p>
                </div>
                <div className="pasta" id="pasta">
                    <p onClick={(e) => getJson(e.target.textContent)} className={`uppercase rounded-full py-4 px-12 cursor-pointer border-[3px] duration-150 text-sm font-bold hover:border-yellow-300 w-fit ${props?.products[0]?.category_name === 'Pasta' && 'border-yellow-300'} bg-white`}>pasta</p>
                </div>
                <div className="burger" id="burger">
                    <p onClick={(e) => getJson(e.target.textContent)} className={`uppercase rounded-full py-4 px-12 cursor-pointer border-[3px] duration-150 text-sm font-bold hover:border-yellow-300 w-fit ${props?.products[0]?.category_name === 'Burger' && 'border-yellow-300'} bg-white`}>burger</p>
                </div>
                <div className="drink" id="drink">
                    <p onClick={(e) => getJson(e.target.textContent)} className={`uppercase rounded-full py-4 px-12 cursor-pointer border-[3px] duration-150 text-sm font-bold hover:border-yellow-300 w-fit ${props?.products[0]?.category_name === 'Cold Drink' || props?.products[0]?.category_name === 'Hot Drink' && 'border-yellow-300'} bg-white`}>Drink</p>
                </div>
            </div>
            <div className="loading w-full flex justify-center items-center">
                <div className="lds-dual-ring"></div>
            </div>
            <div className={`boxes px-5 grid ${props.products.length > 0 && 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'} mt-14 py-5`}>
            {/* <div className="boxes px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14 py-5"> */}
            {/* @if (count($pizzas) > 0)
                @foreach ($pizzas as $pizza)
                    <div className="box rounded-lg border overflow-hidden p-3">
                        <div className="backward-color w-full relative"><img src="/{{ $pizza->urlPhoto }}" className="mx-auto rounded-lg" alt=""></div>
                        <p className="fond-bold text-xl mt-5">{{ $pizza->name }}</p>
                        <p className="my-2 text-slate-400 h-9 overflow-hidden" title="{{$pizza->description}}">{{$pizza->description}}</p>
                        <div className="flex justify-between items-center text-yellow-300 text-3xl font-bold p-2 pt-5"><span className="pricePopular">{{ $pizza->price }} DH</span><i className="las la-shopping-basket bg-yellow-300 text-2xl mr-2 mb-2 p-1 rounded-lg duration-200 cursor-pointer text-black hover:text-white place-self-end"></i></div>
                    </div>
                @endforeach
            @endif */}
            {props.products.length > 0 ? props.products?.map((product, i) => (
                <div key={i} className="box rounded-lg border overflow-hidden p-3">
                    <Link href={`/products/${product.id}`}>
                        <div className="backward-color w-full relative"><img src={`/${product.urlPhoto}`} className="mx-auto rounded-lg duration-200" alt="" /></div>
                        <p className="fond-bold text-xl mt-5">{product.name }</p>
                        <p className="my-2 text-slate-400 h-9 overflow-hidden">{product.description}</p>
                            </Link>
                        <div className="flex justify-between items-center  p-2 pt-5">
                            <span className="pricePopular text-yellow-300 text-3xl font-bold">{product.price } DH</span>
                                {props.user?.issuperuser ? <span className="actions"><FontAwesomeIcon icon={faPen} className='text-white bg-sky-500 p-2 rounded-md'  /> <FontAwesomeIcon icon={faTrash} className='text-white bg-red-500 p-2 rounded-md' /></span>
                                : <i className="las la-shopping-basket bg-yellow-300 text-2xl mr-2 mb-2 p-1 rounded-lg duration-200 cursor-pointer text-black hover:text-white place-self-end"></i>}</div>
            </div>
            )) : <p className='grid text-center text-2xl col-start-1 col-end-5'>No dishes Here</p>}
            </div>
            <div className="all-products w-fit mx-auto mt-14">
                <Link href={route('shop')} className="uppercase rounded-md py-4 px-12 cursor-pointer duration-300 text-sm font-bold hover:border-yellow-300 w-fit bg-yellow-300 hover:bg-yellow-500 hover:text-white">All products</Link>
                {/* <Link href={route('shopjs')} className="uppercase rounded-md py-4 px-12 cursor-pointer duration-300 text-sm font-bold hover:border-yellow-300 w-fit bg-yellow-300 hover:bg-yellow-500 hover:text-white">All products</Link> */}
            </div>
        </div>
    </section>
    <section className="ads-pizza overflow-y-hidden w-full bg-cover bg-no-repeat py-24 relative">
        <div className="img-pizza absolute bottom-0  w-full md:h-5/6 lg:h-full"></div>
            <div className="container absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 flex flex-col md:flex-row mx-auto justify-around items-center px-9">
                <div className="think-off relative">
                    <img src="/images/think.png" className="w-48" alt="" />
                    <div className="text-off absolute -translate-x-1/2 -translate-y-1/2 top-20 left-20">
                        <p className="getOff text-xl font-bold text-center">get Up to</p>
                        <p className="text-yellow-400 text-4xl font-bold">-50%</p>
                        <p className="font-bold text-center text-4xl">OFF</p>
                    </div>
                </div>
                <div className="order font-bold">
                    <p className="getOff text-white text-5xl shadow-sm">Hot Fresh</p>
                    <div className="main-text uppercase text-yellow-300 text-7xl md:text-8xl lg:text-10xl">
                        hotd<span className="relative">o<span className="images absolute top-0 left-1/4 w-full flex h-1/2"><img src="/images/thunder-1.png" alt="" /><img src="/images/thunder-2.png" alt="" /></span></span>g
                    </div>
                    <div className="link-order mt-9">
                        <Link href="/menu" className="uppercase bg-white text-black py-4 px-8 duration-300 rounded-md shadow-sm hover:bg-yellow-500 hover:text-white">order now</Link>
                    </div>
                </div>
            </div>
        
        
    </section>
    <section className="recipes py-24">
        <div className="container mx-auto px-4 flex w-full gap-x-5">
            <article className="dishes w-full">
                <div className="title-recipes flex justify-between items-center ">
                    <p className="text-2xl md:text-3xl lg:text-4xl  font-bold uppercase">
                        Top recipes
                    </p>
                    <Link href={route('shop')} className="text-md font-bold hover:text-yellow-500">See all <i className="las la-angle-right bg-green-500 hover:bg-white p-1"></i></Link>
                </div>
                <div className="products-left my-5 gap-5 grid grid-cols-1 md:grid-cols-2">
                    <div className="box-dish border-2 rounded-3xl">
                        <div className="flex gap-2 items-center border-[10px] rounded-3xl border-white bg-amber-100 duration-200 hover:bg-amber-300 text-red-500">
                            <img src="/images/breast4.png" className="w-[8em]" alt="" />
                            <div className="description w-full">
                                <p className="font-bold text-lg">BBQ chicken breast</p>
                                <p className="text-md mt-2 text-slate-500">Pasta</p>
                                <p className="text-green-500 font-bold mt-2 text-xl">25DH</p>
                            </div>
                            <i className="las la-shopping-basket bg-yellow-300 text-3xl mr-2 mb-2 p-1 rounded-lg duration-200 cursor-pointer hover:text-white place-self-end"></i>
                        </div>
                    </div>
                    <div className="box-dish border-2 rounded-3xl">
                        <div className="flex gap-2 items-center border-[10px] rounded-3xl border-white bg-amber-100 duration-200 hover:bg-amber-300 text-red-500">
                            <img src="/images/butter6.png" className="w-[8em]" alt="" />
                            <div className="description w-full">
                                <p className="font-bold text-lg">Chesse Butter</p>
                                <p className="text-md mt-2 text-slate-500">burger</p>
                                <p className="text-green-500 font-bold mt-2 text-xl">35DH</p>
                            </div>
                            <i className="las la-shopping-basket bg-yellow-300 text-3xl mr-2 mb-2 p-1 rounded-lg duration-200 cursor-pointer hover:text-white place-self-end"></i>

                        </div>
                    </div>
                    <div className="box-dish border-2 rounded-3xl">
                        <div className="flex gap-2 items-center border-[10px] rounded-3xl border-white bg-amber-100 duration-200 hover:bg-amber-300 text-red-500">
                            <img src="/images/choco7.png" className="w-[8em]" alt="" />
                            <div className="description w-full">
                                <p className="font-bold text-lg">Chocolate Muffln</p>
                                <p className="text-md mt-2 text-slate-500">Cold Drinks</p>
                                <p className="text-green-500 font-bold mt-2 text-xl">28dh</p>
                            </div>
                            <i className="las la-shopping-basket bg-yellow-300 text-3xl mr-2 mb-2 p-1 rounded-lg duration-200 cursor-pointer hover:text-white place-self-end"></i>

                        </div>
                    </div>
                    <div className="box-dish border-2 rounded-3xl">
                        <div className="flex gap-2 items-center border-[10px] rounded-3xl border-white bg-amber-100 duration-200 hover:bg-amber-300 text-red-500">
                            <img src="/images/shake5.png" className="w-[8em]" alt="" />
                            <div className="description w-full">
                                <p className="font-bold text-lg">Blueberry Shake</p>
                                <p className="text-md mt-2 text-slate-500">Cold Drinks</p>
                                <p className="text-green-500 font-bold mt-2 text-xl">25dh</p>
                            </div>
                            <i className="las la-shopping-basket bg-yellow-300 text-3xl mr-2 mb-2 p-1 rounded-lg duration-200 cursor-pointer hover:text-white place-self-end"></i>

                        </div>
                    </div>
                    <div className="box-dish border-2 rounded-3xl">
                        <div className="flex gap-2 items-center border-[10px] rounded-3xl border-white bg-amber-100 duration-200 hover:bg-amber-300 text-red-500">
                            <img src="/images/apr2.png" className="w-[8em]" alt="" />
                            <div className="description w-full">
                                <p className="font-bold text-lg">Aprlcot Chicken</p>
                                <p className="text-md mt-2 text-slate-500">pizza</p>
                                <p className="text-green-500 font-bold mt-2 text-xl">26dh</p>
                            </div>
                            <i className="las la-shopping-basket bg-yellow-300 text-3xl mr-2 mb-2 p-1 rounded-lg duration-200 cursor-pointer hover:text-white place-self-end"></i>

                        </div>
                    </div>
                    <div className="box-dish border-2 rounded-3xl">
                        <div className="flex gap-2 items-center border-[10px] rounded-3xl border-white bg-amber-100 duration-200 hover:bg-amber-300 text-red-500">
                            <img src="/images/salade9.png" className="w-[8em]" alt="" />
                            <div className="description w-full">
                                <p className="font-bold text-lg">Country Salade</p>
                                <p className="text-md mt-2 text-slate-500">salades</p>
                                <p className="text-green-500 font-bold mt-2 text-xl">23dh</p>
                            </div>
                            <i className="las la-shopping-basket bg-yellow-300 text-3xl mr-2 mb-2 p-1 rounded-lg duration-200 cursor-pointer hover:text-white place-self-end "></i>
                        </div>
                    </div>
                </div>
            </article>
            <div className="box-ads-burger  relative hidden pt-5 lg:block w-4/12 bg-yellow-300 rounded-md">
                <p className="title-ads text-5xl font-bold text-center text-white">Super Delicious</p>
                <p className="title-ads-burger text-6xl mt-5 font-bold text-center uppercase text-[#f00000]">Chicken</p>
                <p className="title-ads-burger text-2xl mt-7 font-bold text-center uppercase text-white">Call us now:</p>
                <p className="title-ads-burger text-4xl mt-2 font-bold text-center uppercase text-[#f00000]">05-25-48-39-14</p>
                <img src="/images/butter6.png" className="w-80 absolute bottom-0 translate-x-[-50%] left-1/2" alt="" />
            </div>
        </div>
    </section>
    <section className="client py-24 bg-amber-100 duration-200 hover:bg-amber-200">
        <div className="container mx-auto px-4">
            <div className="main-text">
                <p className="main-title text-3xl my-5 font-bold uppercase">
                    what your client says
                </p>
            </div>
            {/* <div className="slides-content relative mt-6 w-full h-44">
                <div className="slider-container user-select-none w-11/12 mx-auto swiper">
                    <div className="slides user-select-none swiper-wrapper">
                        <div className="slide swiper-slide rounded-md bg-white px-6 py-7">
                            <div className="info flex justify-between items-center overflow-hidden">
                                <div className="profile flex gap-3 items-center">
                                    <img src="/images/user.png" className="rounded-full w-16" alt="" />
                                    <div className="names">
                                        <p className="text-sm md:text-md font-bold uppercase">User1 Unknown</p>
                                        <p className="text-sm text-slate-500">Ordred Pizza</p>
                                    </div>
                                </div>
                                <div className="starts flex gap-1">
                                    <i className="fas fa-star text-sm md:text-md text-yellow-300"></i>
                                    <i className="fas fa-star text-sm md:text-md text-yellow-300"></i>
                                    <i className="fas fa-star text-sm md:text-md text-yellow-300"></i>
                                    <i className="fas fa-star text-sm md:text-md text-yellow-300"></i>
                                    <i className="far fa-star text-sm md:text-md text-yellow-300"></i>
                                </div>
                            </div>
                            <div className="description mt-6 text-md md:text-lg text-slate-800">
                                <q>I ordred a medium cheese pizza, It's amazing</q>
                            </div>
                        </div>
                        <div className="slide swiper-slide rounded-md bg-white px-6 py-7">
                            <div className="info flex justify-between items-center overflow-hidden">
                                <div className="profile flex gap-3 items-center">
                                    <img src="/images/user-2.png" className="rounded-full w-16" alt="" />
                                    <div className="names">
                                        <p className="text-sm md:text-md font-bold uppercase">User2 Unknown</p>
                                        <p className="text-sm text-slate-500">Ordred Burger</p>
                                    </div>
                                </div>
                                <div className="starts flex gap-1">
                                    <i className="fas fa-star text-sm md:text-md text-yellow-300"></i>
                                    <i className="fas fa-star text-sm md:text-md text-yellow-300"></i>
                                    <i className="fas fa-star text-sm md:text-md text-yellow-300"></i>
                                    <i className="fas fa-star text-sm md:text-md text-yellow-300"></i>
                                    <i className="fas fa-star text-sm md:text-md text-yellow-300"></i>
                                </div>
                            </div>
                            <div className="description mt-6 text-md md:text-lg text-slate-800">
                                <q>Best burger I ate in Marrakesh, Deserves it</q>
                            </div>
                        </div>
                        <div className="slide swiper-slide rounded-md bg-white px-6 py-7">
                            <div className="info flex justify-between items-center overflow-hidden">
                                <div className="profile flex gap-3 items-center">
                                    <img src="/images/avatar-04.png" className="rounded-full w-16" alt="" />
                                    <div className="names">
                                        <p className="text-sm md:text-md font-bold uppercase">Amid Folan</p>
                                        <p className="text-sm text-slate-500">Ordred Burger</p>
                                    </div>
                                </div>
                                <div className="starts flex gap-1">
                                    <i className="fas fa-star text-sm md:text-md text-yellow-300"></i>
                                    <i className="fas fa-star text-sm md:text-md text-yellow-300"></i>
                                    <i className="fas fa-star text-sm md:text-md text-yellow-300"></i>
                                    <i className="fas fa-star text-sm md:text-md text-yellow-300"></i>
                                    <i className="far fa-star text-sm md:text-md text-yellow-300"></i>
                                </div>
                            </div>
                            <div className="description mt-6 text-md md:text-lg text-slate-800">
                                <q>That was perfect Burger, Thank you..</q>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div className="container hidden md:inline-block slider-controls select-none">
                    <i className="las la-chevron-circle-left prev absolute -left-5 lg:left-0 top-1/2 -translate-y-1/2 text-4xl cursor-pointer duration-200 text-slate-500 hover:text-slate-800" id="prev"></i>
                    <i className="las la-chevron-circle-right next absolute -right-5 lg:right-0 top-1/2 -translate-y-1/2  text-4xl cursor-pointer duration-200 text-slate-500 hover:text-slate-800" id="next"></i>
                </div>
            </div> */}
            <SwiperSlide />
        </div>
    </section>
    <section className="banner lg:h-[500px]">
        {/* <div className="content h-full grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> */}
         <div className="content lg:h-[500px] xl:h-[450px] grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> 
            <div className="banner-post chicken-banner relative">
                <img src="./images/shape-banner.png" className="shape-banner h-full absolute right-0 top-0 object-cover"  alt="" />
                <img src="./images/banner-chicken.png" className="w-full h-full object-cover"  alt="" />
                <div className="information flex flex-col justify-evenly absolute top-0 left-0 w-full h-full pl-14 py-9">
                    <p className="banner-main-des text-5xl text-white">Fash Food</p>
                    <p className="banner-titles font-black text-yellow-300 text-3xl md:text-5xl lg:text-7xl uppercase">Meals</p>
                    <p className="desc-banner text-xl text-white uppercase">new phenomenon<br /> chicken taste</p>
                    <p className="text-yellow-300 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">24.99DH</p>
                    <p className="mt-2 md:mt-0"><Link href="/shop" className="px-6 py-1 sm:mt-5 md:py-2 lg:px-8 lg:py-4 rounded-md bg-white text-black duration-200 hover:text-yellow-300 uppercase">order now</Link></p>
                </div>
            </div>
            <div className="banner-post burger-banner relative col-span-1 md:col-span-2 lg:col-span-1">
                <img src="./images/shape-banner.png" className="shape-banner h-full absolute right-0 top-0 object-cover"  alt="" />
                <img src="./images/banner-burger.png" className="w-full h-full md:h-[400px] lg:h-full object-cover" alt="" />
                <div className="information flex flex-col justify-evenly absolute top-0 left-0 w-full h-full pl-14 py-9">
                    <p className="banner-main-des text-5xl text-white">House</p>
                    <p className="banner-titles font-black text-yellow-300 text-3xl md:text-5xl lg:text-7xl uppercase">burger</p>
                    <p className="desc-banner text-xl text-white uppercase">new phenomenon<br /> burger taste</p>
                    <p className="text-yellow-300 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">23.99DH</p>
                    <p className="mt-2 md:mt-0"><Link href="/shop" className="px-6 py-1 sm:mt-5 md:py-2 lg:px-8 lg:py-4 rounded-md bg-white text-black duration-200 hover:text-yellow-300 uppercase">order now</Link></p>
                </div>
            </div>
            <div className="banner-post salad-banner relative">
                <img src="./images/shape-banner.png" className="shape-banner h-full absolute right-0 top-0 object-cover"  alt="" />
                <img src="./images/banner-salad.png" className="w-full h-full object-cover"  alt="" />
                <div className="information flex flex-col justify-evenly absolute top-0 left-0 w-full h-full pl-14 py-9">
                    <p className="banner-main-des text-5xl text-white">Hot Fash</p>
                    <p className="banner-titles font-black text-yellow-800 text-3xl md:text-5xl lg:text-7xl uppercase">Salats</p>
                    <p className="desc-banner text-xl text-white uppercase">new phenomenon<br /> salat taste</p>
                    <p className="text-yellow-800 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">12.99DH</p>
                    <p className="mt-2 md:mt-0"><Link href="/shop" className="px-6 py-1 sm:mt-5 md:py-2 lg:px-8 lg:py-4 rounded-md bg-white text-black duration-200 hover:text-yellow-300 uppercase">order now</Link></p>
                </div>
            </div>
        </div>
        {/* </div> */}
    </section>
    <section className="news pt-24 pb-32">
        <div className="container mx-auto px-4 xl:px-24">
            <div className="main-head-news h-max flex justify-between items-center">
                <p className="main-title-news text-3xl font-extrabold uppercase">Latest news</p>
                <Link href="/blog" className="text-md font-bold hover:text-yellow-500">See all <i className="las la-angle-right bg-green-500 hover:bg-white p-1 rounded-full"></i></Link>
            </div>
            <div className="postes-blog grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-9">
                <div className="post post-first h-full md:pb-10 lg:pb-14 xl:pb-10 2xl:pb-5 rounded-md bg-white overflow-hidden border-2">
                    <div className="image h-3/6  rounded-t-md overflow-hidden">
                        <img src="./images/posts-blog-1.jpg" className="h-full w-full object-cover" alt="" />
                    </div>
                    <div className="texts py-7 px-5">
                        <p className="text-md text-gray-500"><Link href="/blog" className="hover:text-yellow-300">blog</Link> / 15 Sep / posted by <span className="text-black">Ahmad Jone</span></p>
                        <p className="mt-3 text-xl font-bold">Easy Way To Prepare Burger</p>
                        <p className="short-descr mt-3 text-md text-stone-500 leading-relaxed">The Ultimate Hangover Burger: Egg in a Hole Burger Grilled Cheese Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed ...</p>
                    </div>
                    <div className="link-read-more px-5">
                        <Link href="/blog/post/1504" className="uppercase text-[12px] rounded-md bg-yellow-300 px-8 py-4 duration-200 hover:text-white">read more</Link>
                    </div>
                </div>
                <div className="post post-second h-full md:pb-10 lg:pb-14 xl:pb-10 2xl:pb-5 rounded-md bg-white overflow-hidden border-2">
                    <div className="image h-3/6  rounded-t-md overflow-hidden">
                        <img src="./images/posts-blog-2.png" className="h-full w-full object-cover" alt="" />
                    </div>
                    <div className="texts py-7 px-5">
                        <p className="text-md text-gray-500"><Link href="/blog" className="hover:text-yellow-300">blog</Link> / 08 Oct / posted by <span className="text-black">Khalid Abouai</span></p>
                        <p className="mt-3 text-xl font-bold">Top 5 Burger's Ingredients</p>
                        <p className="short-descr mt-3 text-md text-stone-500 leading-relaxed">The Ultimate Hangover Burger: Egg in a Hole Burger Grilled Cheese Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed ...</p>
                    </div>
                    <div className="link-read-more px-5">
                        <Link href="/blog/post/1196" className="uppercase text-[12px] rounded-md bg-yellow-300 px-8 py-4 duration-200 hover:text-white">read more</Link>
                    </div>
                </div>
                <div className="post post-third h-full md:pb-10 lg:pb-14 xl:pb-10 2xl:pb-5 rounded-md bg-white overflow-hidden border-2">
                    <div className="image h-3/6  rounded-t-md overflow-hidden">
                        <img src="./images/posts-blog-3.jpg" className="h-full w-full object-cover" alt="" />
                    </div>
                    <div className="texts py-7 px-5">
                        <p className="text-md text-gray-500"><Link href="/blog" className="hover:text-yellow-300">blog</Link> / 26 Oct / posted by <span className="text-black">Vladimir Yoshi</span></p>
                        <p className="mt-3 text-xl font-bold">5 Burgers You Have To Try it</p>
                        <p className="short-descr mt-3 text-md text-stone-500 leading-relaxed">The Ultimate Hangover Burger: Egg in a Hole Burger Grilled Cheese Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed ...</p>
                    </div>
                    <div className="link-read-more px-5">
                        <Link href="/blog/post/1873" className="uppercase text-[12px] rounded-md bg-yellow-300 px-8 py-4 duration-200 hover:text-white">read more</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer />
    </>
  )
}