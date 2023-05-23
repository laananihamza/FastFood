import { Head, useForm, usePage } from "@inertiajs/react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useState } from "react";

function AddProduct({user, category}) {
    const {data, setData , errors, post} = useForm({
        name: '',
        size: 'S',
        urlPhoto: '',
        stock: 0,
        price: 0,
        ingredients: '',
        description: '',
        category_code: 1
    })
    const [sizes, setSizes] = useState('S')
    const [sizeClicked, setSizeClicked] = useState({
        s: true,
        m: false,
        l: false,
    })
    const changeSize = (e) => {
        setSizeClicked((prev) => ({...!prev, [e.target.name] : true}))
        setData('size' ,(e.target.name).toUpperCase())
        console.log(data);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        post(route('products.store'))
    }
    return ( 
        <>
        <Head title="Add Product" />
            <Header user={user} />
                <div className="container mx-auto md:px-10 min-h-[50vh] mt-14 mb-44">
                    <form action="" onSubmit={submitHandler}>
                        <p className="text-3xl font-bold text-center">Add New Product</p>
                        <div className="form-content flex gap-10 justify-between items-start mt-14">
                            <div className="information-content grid grid-cols-2 gap-x-3 w-8/12">
                                <div className="name">
                                    <p className={`input-lable duration-200 select-none -translate-x-0 my-2 font-light text-lg`}>Product Name</p>
                                    <div className={`relative border border-black mb-5 py-4 px-3`} id="name">
                                        <input type="text" name="name" placeholder="Product Name" className="focus:outline-none w-full" onChange={(e) => setData(e.target.name, e.target.value)} />
                                    </div>
                                </div>
                                <div className="category">
                                    <p className={`input-lable duration-200 select-none -translate-x-0 my-2 font-light text-lg`}>Category</p>
                                    <select name="category_code" id="" defaultValue={1} className="border border-black py-4 w-full px-3" onChange={(e) => setData(e.target.name, parseInt(e.target.value))}>
                                        {category?.length > 0 && category?.map((c, i) => (
                                        <option value={c.id} key={i}>{c.category_name}</option>
                                        ))}
                                    </select>
                                    </div>
                                    <div className="price">
                                        <p className={`input-lable duration-200 select-none -translate-x-0 my-2 font-light text-lg`}>Price</p>
                                        <div className={`relative border border-black mb-5 py-4 px-3`} id="price">
                                            <input type="number" name="price" min={0} max={1000} placeholder="Price" className="focus:outline-none w-full" onChange={(e) => setData(e.target.name, parseInt(e.target.value))} />
                                        </div>
                                    </div>
                                    <div className="stock">
                                        <p className={`input-lable duration-200 select-none -translate-x-0 my-2 font-light text-lg`}>Stock</p>
                                        <div className={`relative border border-black mb-5 py-4 px-3`} id="stock">
                                            <input type="number" name="stock" min={0} max={1000} placeholder="Stock" className="focus:outline-none w-full" onChange={(e) => setData(e.target.name, parseInt(e.target.value))} />
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
                                        <textarea name="ingredients" id="" cols="30" rows="10" maxLength={255} className="border-2 border-black w-full px-3 py-2" placeholder="Ingredients" onChange={(e) => setData(e.target.name, e.target.value)}></textarea>
                                    </div>
                                    <div className="description col-span-2 ">
                                    <p className={`input-lable duration-200 select-none -translate-x-0 my-2 font-light text-lg`}>Description :</p>
                                        <textarea name="description" id="" cols="30" rows="10" maxLength={999}  className="border-2 border-black w-full px-3 py-2" placeholder="Description" onChange={(e) => setData(e.target.name, e.target.value)}></textarea>
                                    </div>
                            </div>
                            
                            <div className="product-img w-4/12">
                                <div className="img-border border mx-auto border-black h-72 w-72">
                                    <input type="file" name="urlPhoto" id="img" className="hidden" accept="image/*" onChange={(e) => setData(e.target.name, `images/${e.target.files[0]?.name}` || data?.urlPhoto)} />

                                    {data?.urlPhoto.length !== 0 ? <label htmlFor="img" className="h-full w-full cursor-pointer "><img src={`/${data.urlPhoto}`} alt="" className="w-full h-full object-cover" /></label> : <label htmlFor="img" className="h-full w-full cursor-pointer flex justify-center items-center">Click To Upload Photo</label>}
                                </div>
                            </div>
                        </div>
                        <div className="submit w-fit mx-auto ">
                            <button className="w-fit mx-auto mt-10 border-[3px] border-black py-3 px-14 text-xl bg-black text-white">Add Product</button>
                        </div>
                    </form>
                </div>
            <Footer />
            
        </>
     );
}

export default AddProduct;