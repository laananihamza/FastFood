import { Head, useForm, usePage } from "@inertiajs/react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useState } from "react";

function AddProduct({user, category, product}) {
    const {data, setData , errors, post, put} = useForm({
        name: product?.name? product?.name : '',
        size: product?.size? product?.size : 'S',
        urlPhoto: product?.urlPhoto? product?.urlPhoto : '',
        stock: product?.stock? product?.stock : 0,
        price: product?.price? product?.price : 0,
        ingredients: product?.ingredients? product?.ingredients : '',
        description: product?.description? product?.description : '',
        category_code: product?.category_code? product?.category_code : 1
    })
    const [sizes, setSizes] = useState('S')
    const [sizeClicked, setSizeClicked] = useState({
        s: product?.size === 'S' ? true: false,
        m: product?.size === 'M' ? true: false,
        l: product?.size === 'L' ? true: false,
    })
    const changeSize = (e) => {
        setSizeClicked((prev) => ({...!prev, [e.target.name] : true}))
        setData('size' ,(e.target.name).toUpperCase())
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (product?.id !== undefined) {
            put(route('products.update', {'product':product?.id}));
        }else {
            post(route('products.store'))
        }
    }
    console.log(Object.keys(errors));
    return ( 
        <>
        <Head title="Add Product" />
            <Header user={user} />
                <div className="container mx-auto md:px-10 min-h-[50vh] mt-14 mb-44">
                
                    <form action="" onSubmit={submitHandler}>
                        <p className="text-3xl font-bold text-center">{product?.id ? 'Update a Product' :'Add New Product'}</p>
                        {Object.keys(errors).length > 0 && <div className="error bg-red-200 px-2 py-5 rounded-lg w-11/12 mx-auto md:w-7/12">
                    {Object.keys(errors).map((error, i) => (
                        i < Object.keys(errors).length && <p key={i} className="my-2 text-red-600" > * {errors[error]}</p>
                    ))}
                    </div>}
                        <div className="form-content flex flex-col-reverse md:flex-row gap-10 justify-between items-center md:items-start mt-14">
                            <div className="information-content grid grid-cols-2 gap-x-3 w-8/12">
                                <div className="name">
                                    <p className={`input-lable duration-200 select-none -translate-x-0 my-2 font-light text-lg`}>Product Name</p>

                                    <div className={`relative border ${errors.name ? "border-red-500" : 'border-black'} mb-5 py-4 px-3`} id="name">
                                        <input type="text" name="name" placeholder="Product Name" defaultValue={product?.name} className="focus:outline-none w-full" onChange={(e) => setData(e.target.name, e.target.value)} />
                                    </div>
                                </div>
                                <div className="category">
                                    <p className={`input-lable duration-200 select-none -translate-x-0 my-2 font-light text-lg`}>Category</p>
                                    <select name="category_code" id="" defaultValue={product?.category_code || 1} className={`border ${errors.category_code ? "border-red-500" : 'border-black'} py-4 w-full px-3`} onChange={(e) => setData(e.target.name, parseInt(e.target.value))}>
                                        {category?.length > 0 && category?.map((c, i) => (
                                        <option value={c.id} key={i}>{c.category_name}</option>
                                        ))}
                                    </select>
                                    </div>
                                    <div className="price">
                                        <p className={`input-lable duration-200 select-none -translate-x-0 my-2 font-light text-lg`}>Price</p>
                                        <div className={`relative border ${errors.price ? "border-red-500" : 'border-black'} mb-5 py-4 px-3`} id="price">
                                            <input type="number" name="price" defaultValue={product?.price} min={0} max={1000} placeholder="Price" className="focus:outline-none w-full" onChange={(e) => setData(e.target.name, parseInt(e.target.value))} />
                                        </div>
                                    </div>
                                    <div className="stock">
                                        <p className={`input-lable duration-200 select-none -translate-x-0 my-2 font-light text-lg`}>Stock</p>
                                        <div className={`relative border ${errors.stock ? "border-red-500" : 'border-black'} mb-5 py-4 px-3`} id="stock">
                                            <input type="number" name="stock" defaultValue={product?.stock} min={0} max={1000} placeholder="Stock" className="focus:outline-none w-full" onChange={(e) => setData(e.target.name, parseInt(e.target.value))} />
                                        </div>
                                    </div>
                                    <div className="sizes col-span-2 ">
                                    <p className={`input-lable duration-200 select-none -translate-x-0 my-2 font-light text-lg`}>Choose the Size :</p>
                                        <div className={`sizes  gap-3 mt-4 flex justify-center`}>
                                            <button type="button" name="s" className={`border-[3px] ${sizeClicked.s === true ?'border-yellow-400' : 'border-gray-500'} p-2 w-2/12`} onClick={changeSize}>S</button>
                                            <button type="button" name="m" className={`border-[3px] ${sizeClicked.m === true ?'border-yellow-400' : 'border-gray-500'} p-2 w-2/12`} onClick={changeSize}>M</button>
                                            <button type="button" name="l" className={`border-[3px] ${sizeClicked.l === true ?'border-yellow-400' : 'border-gray-500'} p-2 w-2/12`} onClick={changeSize}>L</button>
                                        </div>
                                    </div>
                                    <div className="ingredients col-span-2 ">
                                    <p className={`input-lable duration-200 select-none -translate-x-0 my-2 font-light text-lg`}>Ingredients :</p>
                                        <textarea name="ingredients" defaultValue={product?.ingredients} id="" cols="30" rows="10" maxLength={255} className={`border-2 ${errors.ingredients ? "border-red-500" : 'border-black'} w-full px-3 py-2`} placeholder="Ingredients" onChange={(e) => setData(e.target.name, e.target.value)}></textarea>
                                    </div>
                                    <div className="description col-span-2 ">
                                    <p className={`input-lable duration-200 select-none -translate-x-0 my-2 font-light text-lg`}>Description :</p>
                                        <textarea name="description" defaultValue={product?.description} id="" cols="30" rows="10" maxLength={999}  className={`border-2 ${errors.description ? "border-red-500" : 'border-black'} w-full px-3 py-2`} placeholder="Description" onChange={(e) => setData(e.target.name, e.target.value)}></textarea>
                                    </div>
                            </div>
                            
                            <div className="product-img w-full md:w-4/12">
                                <div className="img-border border mx-auto border-black h-72 w-72">
                                    <input type="file" name="urlPhoto" id="img" className="hidden" accept="image/*" onChange={(e) => setData(e.target.name, `images/${e.target.files[0]?.name}` || data?.urlPhoto)} />

                                    {data?.urlPhoto.length !== 0 || product?.urlPhoto ? <label htmlFor="img" className="h-full w-full cursor-pointer "><img src={`/${product?.urlPhoto || data.urlPhoto }`} alt="" className="w-full h-full object-cover" /></label> : <label htmlFor="img" className="h-full w-full cursor-pointer flex justify-center items-center">Click To Upload Photo</label>}
                                </div>
                            </div>
                        </div>
                        <div className="submit w-fit mx-auto ">
                            {product?.id ? <button className="w-fit mx-auto mt-10 border-[3px] border-black py-3 px-14 text-xl duration-150 bg-sky-500 hover:bg-sky-600 text-white">Save Changes</button> : <button className="w-fit mx-auto mt-10 border-[3px] border-black py-3 px-14 text-xl bg-black text-white">Add Product</button>}
                        </div>
                    </form>
                </div>
            <Footer />
            
        </>
     );
}

export default AddProduct;