import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Inertia } from "@inertiajs/inertia";
import { Link, router, usePage } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import { parsePath } from "react-router-dom";

function CartList({click, show}) {
    const [cartClicked, setCartClicked] = useState(false)

    
    /* Products State */
    const [products, setProducts] = useState([])
    /* Quantity State */
    const [quantity, setQuantity] = useState(0)

    /* Total Price */ 
    const [Totalprice, setTotalPrice] = useState(0)

    let total = 0
    let quantityTotal = 0
    const {url} = usePage()
    const parsedUrl = parsePath(route('goToCart') ).pathname.slice(parsePath(route('goToCart') ).pathname.lastIndexOf('/'))
    function getCartItems() {
        axios.get(route('cartItems')).then((res) => setProducts(res.data))
    }
    const increment = (id, product_id) => {
        let pr = products?.find((pr) => pr.id === id)
        router.put(route(`updateCart`), {quantity: ++pr.quantity, product_id: product_id})
        setTimeout(getCartItems, 200)
    }
    const decrement = (id, product_id) => {
        let pr = products?.find((pr) => pr.id === id)
        router.put(route(`updateCart`), {quantity: --pr.quantity, product_id: product_id})
        setTimeout(getCartItems, 200)
    }
    const deleteProduct = (product_id) => {
        router.delete(route(`deleteItem`, {id : product_id}))
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
    }, [cartRef, click])
    useEffect(() => {
        
        for (let i = 0; i < products?.length; i++) {
            total += +products[i]?.price * +products[i]?.quantity;
            quantityTotal += +products[i]?.quantity;
        }
        setTotalPrice(total)
        setQuantity(quantityTotal)

    }, [products])
    return ( 
        <>
            <span className="relative group" id="cart" ref={cartRef} onClick={() => setCartClicked((prev) => !prev)}>
                            <i className="las la-shopping-cart cursor-pointer border border-slate-400 rounded-full p-2 hover:bg-yellow-400  hover:border-yellow-400"></i>
                            <span className="bg-yellow-500  absolute py-0.5 top-0 right-0 rounded-full font-bold text-xs h-5 w-5 text-center text-white" name="cart">{quantity}</span>
                            {parsedUrl !== url && <div className={`producstOnCart ${cartClicked ? 'block' : 'hidden'} shadow-md  group-hover:block bg-white absolute top-12 -right-20 border-t-[2.5px] border-black py-4 px-3 w-[400px]`}>
                                <div className="products h-[300px] overflow-y-auto ">
                                    
                                        {products?.length !== 0 ?<ul> {products?.map((product, i) => (
                                            <li className="flex justify-between items-center first:border-t-0 border-t py-2 px-5 border-slate-200" key={i}>
                                            <img src={`/${product?.urlPhoto}`} className="w-20 rounded-full" alt="" />
                                            <div className="proInfo">
                                                <p className="mb-1 text-base">{product?.name} {product?.size && `( ${product?.size} )`}</p>
                                                <p className="text-lg mb-3 text-green-500">MAD <span className="priceCart"> {product?.price ? product?.price  : 0}</span></p>
                                                <div className="counts flex">
                                                    <button className="dec py-1 border text-sm px-5 cursor-pointer" onClick={() => decrement(product.id,product?.product_id)}>-</button>
                                                    <p className="dec py-1 border-y text-sm px-5"><span className="countMany">{product?.quantity}</span></p>
                                                    <button className="dec py-1 border text-sm px-5 cursor-pointer" onClick={() => increment(product.id,product?.product_id)}>+</button>
                                                </div>
                                            </div>
                                            <FontAwesomeIcon size="xs" icon={faTrash} onClick={() => deleteProduct(product?.product_id)} className="duration-150 hover:text-red-500 cursor-pointer" />
                                        </li>
                                        ))}</ul> : <div className="h-full flex justify-center items-center"><p className="text-base">No Products in cart shop</p></div>}
                                    
                                </div>
        
                                <div className="checkout border-t border-slate-400 text-center p-2 mt-3">
                                    <p className="total-price text-slate-500 text-base mb-2">Total: <span id="Tprice">{Totalprice} MAD</span></p>
                                    <button className="bg-slate-900 w-full py-3 text-white text-base mb-2"><Link href={route('goToCart')}>Go To Cart</Link></button>
                                    <button className="bg-white  border-2 hover:border-[3px] hover:py-[11px] border-slate-900 w-full py-3 text-slate-900 text-base" onClick={() => clearCart(products[0]?.cart_id)}>Clear All</button>
                                </div>
                            </div> }
                        </span>
                        
        </>
     );
}

export default CartList;