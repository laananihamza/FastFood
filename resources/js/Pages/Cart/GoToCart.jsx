import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link, router, usePage, useRemember } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { parsePath } from "react-router-dom";

function GoToCart({user}) {
    const [cartClicked, setCartClicked] = useState(false)

    
    /* Products State */
    const [products, setProducts] = useState([])
    /* Quantity State */
    const [quantity, setQuantity] = useState(0)

    /* Total Price */ 
    const [Totalprice, setTotalPrice] = useState(0)

    const [clicked, setclicked] = useRemember(false)

    let total = 0
    let quantityTotal = 0
    function getCartItems() {
        axios.get(route('cartItems')).then((res) => setProducts(res.data))
    }
    const increment = (id, product_id) => {
        let pr = products?.find((pr) => pr.id === id)
        setclicked(true)
        router.put(route(`updateCart`), {quantity: ++pr.quantity, product_id: product_id})
        setTimeout(getCartItems, 200)
    }
    const decrement = (id, product_id) => {
        let pr = products?.find((pr) => pr.id === id)
        setclicked(true)
        router.put(route(`updateCart`), {quantity: --pr.quantity, product_id: product_id})
        setTimeout(getCartItems, 200)
    }
    const deleteProduct = (product_id) => {
        router.delete(route(`deleteItem`, {id : product_id}))
        setclicked(true)
        setTimeout(getCartItems, 200)
    }
    const clearCart = (cart_id) => {
        router.delete(route(`clearCart`, {id : cart_id}))
        setTimeout(getCartItems, 200)
    }
    
    const cartRef = useRef()
    useEffect(() => {
        document.addEventListener('mousedown', (e) => {
            if (!(cartRef?.current?.contains(e.target))) {
                setCartClicked(false)
                // console.log(categoryRef?.current?.contains(e.target));
            }
            
        })
        getCartItems()
        
        return;
    }, [cartRef])

    useEffect(() => {
        
        for (let i = 0; i < products?.length; i++) {
            total += +products[i]?.price * +products[i]?.quantity;
            quantityTotal += +products[i]?.quantity;
        }
        setTotalPrice(total)
        setQuantity(quantityTotal)

    }, [products])
    useEffect(() => {
        setclicked(false)
        return;
    }, [clicked])

    return ( 
        <>
            <Head title="Cart" />
            <Header user={user} clicked={clicked} show={false} />
                            <div className={`producstOnCart pt-20 mb-40 px-10 w-full min-h-[300px]`}>
                                
                                <div className="products ">
                                    
                                        {products?.length !== 0 ?
                                        <>
                                        <div className="title flex justify-between items-center">
                                            <p className="text-4xl font-extrabold">Your Cart </p>
                                            <Link href={route('shop')} className="px-6 py-3 text-sm md:text-base duration-150 hover:text-yellow-400">shop {'>'}</Link>
                                        </div>
                                        <table className="w-full my-5"> 
                                            <thead>
                                                <tr className="border-b">
                                                    <td className="uppercase w-6/12 p-2">product</td>
                                                    <td className="uppercase w-1/12 p-2 md:text-center hidden md:table-cell">price</td>
                                                    <td className="uppercase w-4/12 p-2 md:text-center hidden md:table-cell">quantity</td>
                                                    <td className="uppercase w-1/12 p-2 text-center">total</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {products?.map((product, i) => (
                                            <tr className=" border-b py-2 px-5 border-slate-200" key={i}>
                                                <td className="flex items-center gap-14  py-5">
                                                <img src={`/${product?.urlPhoto}`} className="w-20 rounded-full" alt="" />
                                                    <div className="w-full">
                                                        <p className="mb-3 w-full md:text-base lg:text-lg font-bold">{product?.name}</p>
                                                        <p className="mb-1 w-full md:text-sm lg:text-base"><span className="font-bold">Size: </span> {product?.size}</p>
                                                        <p className="mb-1 w-full md:text-sm lg:text-base">{product?.price} MAD</p>
                                                    <div className="quantity md:hidden w-1/2 mt-5 flex items-center gap-5">
                                                    <div className="counts flex">
                                                        <button className="dec py-1 border text-sm px-5 cursor-pointer" onClick={() => decrement(product.id,product?.product_id)}>-</button>
                                                        <p className="dec py-1 border-y text-sm px-5"><span className="countMany">{product?.quantity}</span></p>
                                                        <button className="dec py-1 border text-sm px-5 cursor-pointer" onClick={() => increment(product.id,product?.product_id)}>+</button>
                                                    </div>
                                                    <FontAwesomeIcon size="lg" icon={faTrash} onClick={() => deleteProduct(product?.product_id)} className="duration-150 hover:text-red-500 cursor-pointer" />
                                                    </div>
                                                    </div>
                                                    </td>
                                                    <td className="mb-1 text-base w-1/12 py-5 text-center hidden md:table-cell">{product?.price} DH</td>
                                                    <td className="w-full px-3 gap-3 py-5 justify-center items-center hidden md:flex" style={{contentVisibility: 'auto'}}>
                                                    <div className="counts flex">
                                                        <button className="dec py-1 border text-sm px-5 lg:px-8 cursor-pointer" onClick={() => decrement(product.id,product?.product_id)}>-</button>
                                                        <p className="dec py-1 border-y text-sm px-5 lg:px-8"><span className="countMany">{product?.quantity}</span></p>
                                                        <button className="dec py-1 border text-sm px-5 lg:px-8 cursor-pointer" onClick={() => increment(product.id,product?.product_id)}>+</button>
                                                    </div>
                                                    <FontAwesomeIcon icon={faTrash} onClick={() => deleteProduct(product?.product_id)} className="duration-150 hover:text-red-500 cursor-pointer text-base lg:text-lg" />
                                                    </td>
                                                    <td className="w-1/12 py-5 text-center">{parseFloat(product?.price) * parseFloat(product?.quantity)} DH</td>
                                                
                                        </tr>
                                        ))}
                                            </tbody>
                                        </table>
                                        <div className="checkout flex flex-col items-center md:items-end gap-5 text-center">
                                            <div className="total">
                                                <p className="text-2xl">Subtotal : <span className="ml-3">{Totalprice} DH</span></p>
                                            </div>
                                            <div className="checkout-button">
                                                <p className="text-sm mb-5">Taxes and shipping calculated at checkout</p>
                                                <Link className="border border-black px-16 md:px-32 py-3 text-lg" href={route('checkout')}>Check Out</Link>
                                            </div>
                                        </div>
                                        </> : 
                                        <div className="no-product h-full flex justify-center items-center flex-col gap-5 text-center">
                                            <div className="title mb-5">
                                                <p className="text-4xl font-extrabold mb-8">Your Cart Is Empty </p>
                                                <Link href={route('shop')} className="px-6 py-3 bg-black text-white">Continue shopping</Link>
                                            </div>
                                            <div className="acc">
                                                <p className="text-4xl font-extrabold my-3">Have An Account? </p>
                                                <p><Link href={route('login')} className="underline"> Log in </Link> to check out faster</p>
                                            </div>
                                        </div>
                                        }
                                    
                                </div>
        
                                {/* <div className="checkout border-t border-slate-400 text-center p-2 mt-3">
                                    <p className="total-price text-slate-500 text-base mb-2">Total: <span id="Tprice">{Totalprice} MAD</span></p>
                                    <button className="bg-slate-900 w-full py-3 text-white text-base mb-2"><Link href="/checkout">Checkout</Link></button>
                                    <button className="bg-white  border-2 hover:border-[3px] hover:py-[11px] border-slate-900 w-full py-3 text-slate-900 text-base" onClick={() => clearCart(products[0]?.cart_id)}>Clear All</button>
                                </div> */}
                            </div>
                        <Footer />
        </>
     );
}

export default GoToCart;
