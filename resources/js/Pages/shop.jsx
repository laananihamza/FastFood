import { Head, Link, router } from '@inertiajs/react'
import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { faAngleLeft, faAngleRight, faChevronLeft, faChevronRight, faTh, faThLarge } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Shop({products, maxPrice, user}) {
    const [product, setProduct] = useState(products)
    const [grid, setGrid] = useState('grid-cols-3')
    console.log(product);

    return(
        <>
            <Head title='Shop' />
            <Header user={user} />
            <div className="container mx-auto px-16 my-14 md:mb-44">
        <p className="title text-4xl my-5 font-black">Products</p>
        <form action="/shop" name="filter">
            <div className="flex justify-start gap-4 items-center my-5">
                
                <details className="relative" data-filter="type">
                    <summary className="list-none cursor-pointer text-lg">
                        <div className="flex items-center gap-2">
                            <span className="uppercase">PRODUCT TYPE</span>
                            <i className="las la-angle-down "></i>
                        </div>
                    </summary>
                    <div className="flex flex-col justify-start absolute left-0 z-50 bg-slate-100 p-2 w-56">
                        <div><input type="checkbox" className="w-[10%] mr-1" value="burger" name="burger" id="burgerCheck"/><label htmlFor="burgerCheck" >Burgers</label></div>
                        <div><input type="checkbox" className="w-[10%] mr-1" value="pizza" name="pizza" id="pizzaCheck"/><label htmlFor="pizzaCheck" >Pizzas</label></div>
                        <div><input type="checkbox" className="w-[10%] mr-1" value="cold-drink" name="cold-drink" id="coldDrinkCheck" /><label htmlFor="coldDrinkCheck">Cold Drinks</label></div>
                        <div><input type="checkbox" className="w-[10%] mr-1" value="hot-drink" name="hot-drink" id="hotDrinkCheck" /><label htmlFor="hotDrinkCheck">Hot Drinks</label></div>
                    </div>
                </details>
                <details className="relative" data-filter="Price">
                    <summary className="list-none cursor-pointer text-lg">
                        <div className="flex items-center gap-2">
                            <span className="uppercase">Price</span>
                            <i className="las la-angle-down"></i>
                        </div>
                    </summary>
                    <div className="absolute z-50 bg-white p-2 w-56">
                        <input type="range" min="0" max={maxPrice} defaultValue="0" className="w-full" name="priceProduct" /><br />
                        <span id="min"></span>
                        <span id="demo"></span>
                        <span id="max"></span>
                    </div>
                </details>
                <button className="px-8 py-2 w-fit  rounded-lg duration-200 hover:text-white bg-yellow-400 text-xl">Filter</button>
            </div>
        </form>
        <div className="loading w-full flex justify-center items-center">
            <div className="lds-dual-ring"></div>
        </div>
        <div className="many-on-line mb-5">
            {/* <span className='border border-black relative w-14 px-1 h-6 inline-block before:bg-slate-400 before:w-1/4 before:left-2 before:h-full before:absolute after:bg-slate-400 after:w-1/4 after:h-full after:absolute after:right-2'></span>
            <span className='border border-black relative w-14 px-1 h-6 inline-block before:bg-slate-400 before:w-1/4 before:left-2 before:h-full before:absolute before:shadow-2xl after:bg-slate-400 after:w-1/4 after:h-full after:absolute after:right-2'></span> */}
            <span className={` cursor-pointer border ${grid === 'grid-cols-1' ? 'border-black' : 'border-slate-300'} relative w-5 py-1 h-6 text-center inline-block mx-1 md:hidden`} onClick={() => setGrid('grid-cols-1')}>
                <span className={` ${grid === 'grid-cols-1' ? 'bg-black' : 'bg-slate-300'} w-2/4 h-4/6 inline-block absolute left-1/2 -translate-x-1/2`}></span>
            </span>
            <span className={` cursor-pointer border ${grid === 'grid-cols-2' ? 'border-black' : 'border-slate-300'} relative w-10 py-1 h-6 hidden mx-1 md:inline-block`} onClick={() => setGrid('grid-cols-2')}>
                <span className={`${grid === 'grid-cols-2' ? 'bg-black' : 'bg-slate-300'} w-1/4 h-4/6 inline-block absolute left-2`}></span>
                <span className={`${grid === 'grid-cols-2' ? 'bg-black' : 'bg-slate-300'} w-1/4 h-4/6 inline-block absolute right-2`}></span>
            </span>
            <span className={` cursor-pointer border ${grid === 'grid-cols-3' ? 'border-black' : 'border-slate-300'} relative w-14 py-1 h-6  mx-1 hidden md:inline-block`} onClick={() => setGrid('grid-cols-3')}>
                <span className={`${grid === 'grid-cols-3' ? 'bg-black' : 'bg-slate-300'} w-2/12 h-4/6 inline-block absolute left-2`}></span>
                <span className={`${grid === 'grid-cols-3' ? 'bg-black' : 'bg-slate-300'} w-2/12 h-4/6 inline-block absolute left-1/2 -translate-x-1/2`}></span>
                <span className={`${grid === 'grid-cols-3' ? 'bg-black' : 'bg-slate-300'} w-2/12 h-4/6 inline-block absolute right-2`}></span>
            </span>
            <span className={` cursor-pointer border ${grid === 'grid-cols-4' ? 'border-black' : 'border-slate-300'} relative w-16 py-1 h-6 mx-1 hidden xl:inline-block`} onClick={() => setGrid('grid-cols-4')}>
                <span className={`${grid === 'grid-cols-4' ? 'bg-black' : 'bg-slate-300'} w-[13%] h-4/6 inline-block absolute left-2`}></span>
                <span className={`${grid === 'grid-cols-4' ? 'bg-black' : 'bg-slate-300'} w-[13%] h-4/6 inline-block absolute left-1/3 `}></span>
                <span className={`${grid === 'grid-cols-4' ? 'bg-black' : 'bg-slate-300'} w-[13%] h-4/6 inline-block absolute right-1/3`}></span>
                <span className={`${grid === 'grid-cols-4' ? 'bg-black' : 'bg-slate-300'} w-[13%] h-4/6 inline-block absolute right-2`}></span>
            </span>
        </div>
        {/* <div className={`shop-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-8`}> */}
        <div className={`shop-content grid grid-cols-1 md:${grid}  gap-8`}>
            
            {product.data?.map((product, i) => (
                <div className="box rounded-2xl  border overflow-hidden p-3" key={i}>
                <Link href={`products/${product.id}`}>
                <div className="backward-color w-full relative mx-auto overflow-hidden group"><img src={`/${product.urlPhoto }`} className="duration-200 mx-auto rounded-lg object-cover w-10/12 h-64" alt=""/></div>
                <p className="fond-bold text-xl mt-5">{product.name}</p>
                <p className="my-2 text-slate-400 h-9 overflow-hidden">{product.description}</p>
                <div className="flex justify-between items-center text-yellow-400 text-3xl font-bold p-2 pt-5"><span className="pricePopular">{product.price } DH</span><i className="las la-shopping-basket bg-yellow-400 text-2xl mr-2 mb-2 p-1 rounded-lg duration-200 cursor-pointer text-black hover:text-white place-self-end"></i></div>
            
                </Link>
                </div>
            ))}
        </div>
        
        <div className="pages flex justify-center items-center gap-2 p-2 my-14">
        {product?.links?.map((p, i) => (
                <React.Fragment key={i}>
                    {p.label === '&laquo; Previous' ? <Link href={p.url} className='font-light'><FontAwesomeIcon icon={faAngleLeft} className={`duration-200 ${product.current_page === 1 ? 'hidden' : 'inline'} px-1`} /></Link> : p.label === 'Next &raquo;'?  <Link href={p.url}><FontAwesomeIcon icon={faAngleRight}  className={`duration-200 ${product.current_page === product.last_page ? 'hidden' : 'inline'}`} /></Link> : <Link href={p.url} className={`${p.active && 'border-b border-b-black'} p-2 font-b`} key={i}>{p.label}</Link>}
                </React.Fragment>
            ))}
        </div>
        <div id="test">
        
        </div>
        </div>
        <Footer />
        </>
    )
}