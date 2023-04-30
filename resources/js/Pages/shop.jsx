import { Head, Link, router } from '@inertiajs/react'
import { useState } from 'react'
import Header from '../components/Header'

export default function Shop({products}) {
    const [product, setProduct] = useState(products)

    return(
        <>
            <Head title='Shop' />
            <Header />
            <div class="container mx-auto px-4 my-14 md:mb-44">
        <p class="title text-4xl my-5 font-black">Products</p>
        <form action="/shop" name="filter">
            <div class="flex justify-start gap-4 items-center mt-5 mb-10">
                
                <details class="relative" data-filter="type">
                    <summary class="list-none cursor-pointer text-lg">
                        <div class="flex items-center gap-2">
                            <span class="uppercase">PRODUCT TYPE</span>
                            <i class="las la-angle-down "></i>
                        </div>
                    </summary>
                    <div class="flex flex-col justify-start absolute left-0 z-50 bg-slate-100 p-2 w-56">
                        <div><input type="checkbox" class="w-[10%] mr-1" value="burger" name="burger" id="burgerCheck"/><label htmlFor="burgerCheck" >Burgers</label></div>
                        <div><input type="checkbox" class="w-[10%] mr-1" value="pizza" name="pizza" id="pizzaCheck"/><label htmlFor="pizzaCheck" >Pizzas</label></div>
                        <div><input type="checkbox" class="w-[10%] mr-1" value="cold-drink" name="cold-drink" id="coldDrinkCheck" /><label htmlFor="coldDrinkCheck">Cold Drinks</label></div>
                        <div><input type="checkbox" class="w-[10%] mr-1" value="hot-drink" name="hot-drink" id="hotDrinkCheck" /><label htmlFor="hotDrinkCheck">Hot Drinks</label></div>
                    </div>
                </details>
                <details class="relative" data-filter="Price">
                    <summary class="list-none cursor-pointer text-lg">
                        <div class="flex items-center gap-2">
                            <span class="uppercase">Price</span>
                            <i class="las la-angle-down"></i>
                        </div>
                    </summary>
                    <div class="absolute z-50 bg-white p-2 w-56">
                        <input type="range" min="0" max={maxPrice} value="0" class="w-full" name="priceProduct" /><br />
                        <span id="min"></span>
                        <span id="demo"></span>
                        <span id="max"></span>
                    </div>
                </details>
                <button class="px-8 py-2 w-fit  rounded-lg duration-200 hover:text-white bg-yellow-400 text-xl">Filter</button>
            </div>
        </form>
        <div class="loading w-full flex justify-center items-center">
            <div class="lds-dual-ring"></div>
        </div>
        <div class="shop-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-8">
            
            {product?.map((product) => (
                <div class="box rounded-lg border overflow-hidden p-3">
                <div class="backward-color w-full relative mx-auto overflow-hidden group"><img src={`/${product.urlPhoto }`} class="duration-150 mx-auto rounded-lg object-cover w-10/12 h-64" alt=""/></div>
                <p class="fond-bold text-xl mt-5">{product.name}</p>
                <p class="my-2 text-slate-400 h-9 overflow-hidden" title="{{$product->description}}">{product.description}</p>
                <div class="flex justify-between items-center text-yellow-400 text-3xl font-bold p-2 pt-5"><span class="pricePopular">{product.price } DH</span><i class="las la-shopping-basket bg-yellow-400 text-2xl mr-2 mb-2 p-1 rounded-lg duration-200 cursor-pointer text-black hover:text-white place-self-end"></i></div>
            </div>
            ))}
        </div>
        
        <div class="pages flex justify-center items-center gap-2 p-2 my-14">
            
                    <a href={"/shop?page="} class=" border-b border-black text-xl duration-150 hover:text-yellow-600">{i}</a>
              
        </div>
        <div id="test"></div>
        </div>
        </>
    )
}