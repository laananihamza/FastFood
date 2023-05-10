import { Head, Link, useRemember } from "@inertiajs/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxArchive, faBoxes, faBoxesPacking, faCartPlus, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Product({products, size, category}) {
    const [quantity, setQuantity] = useState(1)
    const [des, setDes] = useState(true)
    const [sizes, setSizes] = useState('S')
    const [sizeClicked, setSizeClicked] = useState({
        s: true,
        m: false,
        l: false,
    })
    const increment = () => {
        setQuantity((prev) => prev + 1)
    }
    const decrement = () => {
        setQuantity((prev) => {
            if (prev <= 1) return 1
            return prev - 1
        })
    }
    const changeSize = (e) => {
        setSizeClicked((prev) => ({...!prev, [e.target.name] : true}))
        setSizes((e.target.name).toUpperCase())
        console.log(sizeClicked);
    }
    console.log(products);
    console.log(size);

    return ( 
        <>
        <Head title="FastFood | Product" />
        <Header />
        <section className="container mx-auto p-14 min-h-[90vh]">
            <div className="product-info flex justify-center items-center gap-x-10">
                <div className="product-img w-5/12">
                    <img src={`/${size[0]?.urlPhoto}`} alt="" className="max-w-full w-7/12 mx-auto" />
                </div>
                <div className="info w-4/12">
                    <div className="base-info border-b p-2 my-2">
                        <p className="text-xs my-1">BurderKech</p>
                        <p className="product-name font-black text-4xl mb-5">{size[0]?.name}</p>
                        {size?.map((product, i) => (
                            product.size === sizes && <p className="product-name font-black text-3xl text-yellow-400" key={i}>{product?.price} MAD</p> 
                        ))}
                    </div>
                    <div className="quantity w-full pt-2 pb-4 border-b">
                        <p className="my-2 text-sm">Quantity</p>
                        <div className="quantity flex gap-x-3">
                            <div className="counts flex">
                                <button className="dec py-2 border text-sm px-5 cursor-pointer" onClick={decrement}><FontAwesomeIcon icon={faMinus} /></button>
                                <p className="dec py-2 border-y text-base px-5"><span className="countMany">{quantity}</span></p>
                                <button className="dec py-2 border text-sm px-5 cursor-pointer" onClick={increment}><FontAwesomeIcon icon={faPlus} /></button>
                            </div>
                            <Link href="/shop/burger" className="block px-10 py-2 rounded-lg duration-200 font-bold text-white bg-yellow-400 text-lg"><FontAwesomeIcon icon={faCartPlus} className="mr-3"/>Add to cart</Link>
                        </div>
                        <div className={`sizes  gap-3 mt-4 ${size[0]?.category_name === "Burger" || "Pasta" ? 'hidden' : 'flex'}`}>
                            <button name="s" className={`border-[3px] ${sizeClicked.s === true ?'border-yellow-400' : 'border-gray-500'} p-2 w-2/12`} onClick={changeSize}>S</button>
                            <button name="m" className={`border-[3px] ${sizeClicked.m === true ?'border-yellow-400' : 'border-gray-500'} p-2 w-2/12`} onClick={changeSize}>M</button>
                            <button name="l" className={`border-[3px] ${sizeClicked.l === true ?'border-yellow-400' : 'border-gray-500'} p-2 w-2/12`} onClick={changeSize}>L</button>
                        </div>
                    <p className="bg-gray-400 rounded-md p-2 mt-5 text-center text-white text-xs"><FontAwesomeIcon icon={faBoxes} className="mr-2" /> Spend 500 MAD for FREE SHIPPING</p>
                    </div>
                    <p className="my-4"><span className="font-bold" >Tag:</span> {size[0]?.category_name}</p>
                </div>
            </div>
            <div className="relative pb-16 border-b">
                <button className={`${des ? 'border-2 border-b-0 border-t-4' : ''} border-gray-400 border-t-yellow-500 w-fit px-3 py-[13px] absolute bg-white -top-[45px]`} onClick={() => setDes(true)}>Description</button>
                <button className={`${!des ? 'border-2 border-b-0 border-t-4' : ''} border-gray-400 border-t-yellow-500 w-fit px-3 py-[13px] absolute bg-white -top-[45px] left-[107px]`} onClick={() => setDes(false)}>Ingredients</button>
                <div className="description border-t-2 border-gray-400 p-3 mt-14">{des ? size[0]?.description : size[0]?.ingredients}</div>
            </div>
            <div className="another-products py-14">
                <p className="title text-center text-3xl font-bold mb-5">You May Also Like</p>
                <div className={`boxes px-5 grid ${category.length > 0 && 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'} my-14 py-5`}>

                {category?.map((product, i) => (
                    i <= 3 ? <div key={i} className="box rounded-2xl border overflow-hidden p-3">
                    <Link href={`/products/${product.id}`}>
                        <div className="backward-color w-full relative"><img src={`/${product.urlPhoto}`} className=" mx-auto rounded-lg duration-200" alt="" /></div>
                        <p className="fond-bold text-xl mt-5">{product.name }</p>
                        <div className="flex justify-between items-center text-yellow-400 text-xl font-bold py-2 "><span className="pricePopular">{product.price } DH</span><i className="las la-shopping-basket bg-yellow-400 text-2xl mr-2 mb-2 p-1 rounded-lg duration-200 cursor-pointer text-black hover:text-white place-self-end"></i></div>
                    </Link>
                </div>
                : null
                ))}
            </div>
            </div>
        </section>
        <Footer />
        </>
     );
}

export default Product