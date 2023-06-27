import { Link, usePage } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";

function CartList({click}) {
    const [cartClicked, setCartClicked] = useState(false)

    /* Quantity State */
    const [quantity, setQuantity] = useState(1)

    /* Products State */
    const [products, setProducts] = useState([])

    
    const increment = () => {
        setQuantity((prev) => prev + 1)
    }
    const decrement = () => {
        setQuantity((prev) => {
            if (prev <= 1) return 1
            return prev - 1
        })
    }
    function getCartItems() {
        axios.get(route('cartItems')).then((res) => setProducts(res.data[0]))
    }
    
    const cartRef = useRef()
    useEffect(() => {
        const mobileMenu = (e) => {
            
        }
        document.addEventListener('mousedown', (e) => {
            if (!(cartRef?.current?.contains(e.target))) {
                setCartClicked(false)
                // console.log(categoryRef?.current?.contains(e.target));
            }
            
        })
        getCartItems()
        return;
    }, [cartRef, click])
    return ( 
        <>
            <span className="relative group" id="cart" ref={cartRef} onClick={() => setCartClicked((prev) => !prev)}>
                            <i className="las la-shopping-cart cursor-pointer border border-slate-400 rounded-full p-2 hover:bg-yellow-400  hover:border-yellow-400"></i>
                            <span className="bg-yellow-500  absolute py-0.5 top-0 right-0 rounded-full font-bold text-xs h-5 w-5 text-center text-white" name="cart">{products?.length}</span>
                            <div className={`producstOnCart ${cartClicked ? 'block' : 'hidden'}  group-hover:block bg-white absolute top-12 -right-20 border-t-[2.5px] border-black py-4 px-3 w-[350px]`}>
                                <div className="products h-[250px] overflow-y-auto">
                                    <ul>
                                        {products.length !== 0 ? products?.map((product, i) => (
                                            <li className="flex justify-between items-center border-t py-2 border-black" key={i}>
                                            <img src={`/${product?.urlPhoto}`} className="w-20 rounded-full" alt="" />
                                            <div className="proInfo">
                                                <p className="mb-1 text-base">{product?.name}</p>
                                                <p className="text-lg mb-3 text-green-500">MAD <span className="priceCart"> {product?.price ? product?.price  : 0}</span></p>
                                                <div className="counts flex">
                                                    <button className="dec py-1 border text-sm px-5 cursor-pointer" onClick={decrement}>-</button>
                                                    <p className="dec py-1 border-y text-sm px-5"><span className="countMany">{quantity}</span></p>
                                                    <button className="dec py-1 border text-sm px-5 cursor-pointer" onClick={increment}>+</button>
                                                </div>
                                            </div>
                                            <i className="las la-trash duration-150 hover:text-red-500 cursor-pointer"></i>
                                        </li>
                                        )) : 'No Products in cart shop'}
                                    </ul>
                                </div>
        
                                <div className="checkout border-t border-slate-400 text-center p-2 mt-3">
                                    <p className="total-price text-slate-500 text-base mb-2">Total: <span id="Tprice">43 MAD</span></p>
                                    <button className="bg-slate-900 w-full py-3 text-white text-base mb-2"><Link href="/checkout">Checkout</Link></button>
                                    <button className="bg-white  border-2 hover:border-[3px] hover:py-[11px] border-slate-900 w-full py-3 text-slate-900 text-base">Checkout</button>
                                </div>
                            </div>
                        </span>
                        
        </>
     );
}

export default CartList;