import { Head, Link, router, useForm, usePage, useRemember } from '@inertiajs/react'
import React, { useEffect, useRef, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { faAngleDown, faAngleLeft, faAngleRight, faChevronLeft, faChevronRight, faPen, faPlus, faTh, faThLarge, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Inertia } from '@inertiajs/inertia'

export default function Shop({products, maxPrice, user, minPrice, category}) {
    const [product, setProduct] = useState(products)
    const [grid, setGrid] = useState('grid-cols-3')
    const [isOpen, setIsOpen] = useState({
        category: false,
        price: false
    })
    const [price, setPrice] = useState({
        min: 0,
        max :parseInt(maxPrice),
    })

    const [cartProducts, setCartProducts] = useState([])

    const PriceChange = (e) => {
        setPrice((prev) => ({...prev, [e.target.name] : parseInt(e.target.value)}))
        console.log(products);
    }
    const submitHandle = (e) => {
        e.preventDefault()
        router.visit(`/products/${''}/${price.min}/${price.max}`, {method: 'post', data: price})
    }
    const [clicked, setclicked] = useRemember(false)
    const addToCart = (id) => {
        Inertia.post(`/add-to-cart`, {'product_id': id, 'quantity' : 1})
        setclicked(true)
        
    }
    const categoryRef = useRef()
    const priceRef = useRef() 
    useEffect(() => {
        const CategoryDropDown = (e) => {
            if (!(categoryRef?.current?.contains(e.target))) {
                setIsOpen((prev) => ({...prev, category: false}))
                // console.log(categoryRef?.current?.contains(e.target));
            }
        }
        document.addEventListener('mousedown', (e) => {
            if (!(categoryRef?.current?.contains(e.target))) {
                setIsOpen((prev) => ({...prev, category: false}))
                // console.log(categoryRef?.current?.contains(e.target));
            }
            if (!(priceRef?.current?.contains(e.target))) {
                setIsOpen((prev) => ({...prev, price: false}))

            }
        })
        return;
    }, [categoryRef, priceRef])
    return(
        <>
            <Head title='Shop' />
            <Header user={user} clicked={clicked}  />
            <div className="container mx-auto px-5 xl:px-16 md:mt-14 mb-44">
            <p className="title text-4xl my-5 font-black text-center md:text-left">Products</p>
            <div className="flex items-center flex-col md:flex-row justify-between">
            <div className=''>

        <div className="flex flex-col md:flex-row justify-start gap-4 items-center my-5">
        <p>Filter :</p>
        <div className="relative" ref={categoryRef} data-filter="category" id='category' >
        <div className="list-none cursor-pointer text-lg" onClick={(e) => setIsOpen((prev) => ({...!prev, category: !prev.category}))}>
            <div className="flex items-center gap-2">
                <span className="uppercase text-sm">PRODUCT TYPE</span>
                <FontAwesomeIcon size='sm' icon={faAngleDown} />
            </div>
        </div>
        <div className={` ${isOpen?.category ? 'block' : 'hidden'} absolute -left-1/2 md:left-0 z-50 bg-white py-5 px-3 w-72 top-[30px] border border-black`}>
        <p className='mb-3'>Select The Category</p>
        <div className="flex flex-col justify-start ">
            <Link href={`/products/0/${price.max}`} className='pl-0.5 duration-200 hover:pl-3 my-1'>
                <FontAwesomeIcon icon={faAngleRight} /> All Products
            </Link>
            <Link href={`/products/0/${price.max}/burger`} className='pl-0.5 duration-200 hover:pl-3 my-1'>
                <FontAwesomeIcon icon={faAngleRight} /> Burgers
            </Link>
            <Link href={`/products/0/${price.max}/pizza`} className='pl-0.5 duration-200 hover:pl-3 my-1'>
                <FontAwesomeIcon icon={faAngleRight} /> Pizzas
            </Link>
            <Link href={`/products/0/${price.max}/cold-drinks`} className='pl-0.5 duration-200 hover:pl-3 my-1'>
                <FontAwesomeIcon icon={faAngleRight} /> Cold Drinks
            </Link>
            <Link href={`/products/0/${price.max}/hot-drinks`} className='pl-0.5 duration-200 hover:pl-3 my-1'>
                <FontAwesomeIcon icon={faAngleRight} /> Hot Drinks
            </Link>
        </div>
        </div>
    </div>
    <div className="relative" ref={priceRef} data-filter="Price" id='price' >
        <div className="list-none cursor-pointer text-lg" onClick={(e) => setIsOpen((prev) => ({...!prev, price: !prev.price}))}>
            <div className="flex items-center gap-2">
                <span className="uppercase text-sm">Price</span>
                <FontAwesomeIcon size='sm' icon={faAngleDown} />
            </div>
        </div>
        <div className={` ${isOpen?.price ? 'block' : 'hidden' } absolute left-1/2 -translate-x-1/2 md:left-0 z-50 bg-white py-5 px-3 w-72 top-[30px] border border-black`}>
            <p className='mb-3'>Select The price</p>
            {/* <input type="range" min="0" max={maxPrice} defaultValue="0" className="w-full" name="priceProduct" /><br />
            <span id="min"></span>
            <span id="demo"></span>
            <span id="max"></span> */}
            <div className='flex justify-between items-center'>
            <div className='w-1/2'><p className='w-fit mb-1'>MIN :</p><input type="number" name='min' onChange={PriceChange} min={0} max={maxPrice} className='border-2 border-black py-2 px-1 mx-1 w-10/12' placeholder='Min' defaultValue={''} /></div>
            <div className='w-1/2'><p className='w-fit mb-1'>MAX :</p><input type="number" name='max' onChange={PriceChange} min={0} max={maxPrice} className='border-2 border-black py-2 px-1 mx-1 w-10/12' placeholder='Max' defaultValue={maxPrice} /></div>
            </div>
            <div className='text-right'><button className="px-8 py-2 w-fit mt-3 rounded-lg duration-200 hover:text-white bg-yellow-400"><Link href={`/products/${price.min}/${price.max}/${category}`}>Filter</Link></button></div>
        </div>
    </div>
    
        </div>
        <div className="filter-content my-5 flex flex-col md:flex-row items-center gap-5">
        {minPrice != 0 && <p>Price :  <button className='rounded-full px-8 py-0.5 border-2 border-gray-500 w-fit text-sm'>{minPrice} - {maxPrice}</button></p>}
        {category !== '' && <p>Category : <button className='rounded-full px-8 py-0.5 border-2 border-gray-500 w-fit text-sm'>{category}</button></p>}
        </div>
        </div>
        <div className="show-product-total ordered">

            <p className='text-gray-500 text-lg'>Show {product?.to} of {product?.total}</p>
        </div>
            </div>
        <div className="loading w-full flex justify-center items-center">
            <div className="lds-dual-ring"></div>
        </div>
        <div className="flex justify-between items-center">
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
        {user?.issuperuser ? <Link href={route('products.create')} className='bg-green-500 text-white p-2'><FontAwesomeIcon icon={faPlus} className='' /> Add Product</Link> : null}
        </div>
        
        {/* <div className={`shop-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-8`}> */}
        <div className={`shop-content grid grid-cols-1 md:${product.data.length !== 0 && grid}  gap-8`}>
            
            {product.data.length !== 0 ? product.data?.map((product, i) => (
                <div className="box rounded-2xl  border overflow-hidden p-3" key={i}>
                <Link href={`/product/${product.category_name}/${product.id}`}>
                <div className="backward-color w-full relative mx-auto overflow-hidden group"><img src={`/${product.urlPhoto }`} className="duration-200 mx-auto rounded-lg object-cover w-10/12 h-64" alt=""/></div>
                <p className="fond-bold text-xl mt-5">{product.name}</p>
                <p className="my-2 text-slate-400 h-9 overflow-hidden">{product.description}</p>
                </Link>
                <div className="flex justify-between items-center  font-bold p-2 pt-5" onClick={() => addToCart(product.id)}>
                    <span className="pricePopular text-yellow-400 text-3xl">{product.price } DH</span>
                    {user?.issuperuser ? <span className="actions"> <Link href={route('products.edit', {'product' : product.id})}><FontAwesomeIcon icon={faPen} className='text-white bg-sky-500 p-2 rounded-md'  /></Link> <FontAwesomeIcon icon={faTrash} className='text-white bg-red-500 p-2 rounded-md' /></span>
                                : <i className="las la-shopping-basket bg-yellow-400 text-2xl mr-2 mb-2 p-1 rounded-lg duration-200 cursor-pointer text-black hover:text-white place-self-end"></i>}
                </div>
            
                </div>
            ))
            : <p className='text-center text-3xl'>No Dishes Found</p>
        }
        </div>
        
        <div className="pages flex justify-center items-center gap-2 p-2 my-14">
        {product.data.length !== 0 && product?.links?.map((p, i) => (
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