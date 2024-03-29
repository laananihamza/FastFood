import { Head, Link, router, useForm, usePage, useRemember } from "@inertiajs/react";
import NavBar from "../../../components/DashboardNav";
import HeaderDashboard from "../../../components/DashboardHeader";
import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faClose, faExclamation, faPen, faPlus, faSearch, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button, Modal } from "flowbite-react";
import { Inertia } from "@inertiajs/inertia";
import axios from "axios";
import { useParams } from "react-router-dom";

function Products({user, products, searchParam}) {
    const page = usePage()
    const [x, sx] = useRemember('', 'Admin/products/products-items')
    const {delete: destroy} = useForm()
    const [deletePopUp, setDeletePopUp] = useState(false)
    const [deleteId, setDeleteId] = useState(null)
    const [searchByName, setSearchByName] = useState('')
    let SearchInput = useRef(searchParam)
    const deleteClicked = (id) => {
        setDeletePopUp(true)
        setDeleteId(id)
        // if (confirm('are you sure? ')) {
            //     destroy(route('products.destroy', {'product' : id}))
            // }
        } 
        const deleteHandle = () => {
            setDeletePopUp(false)
            destroy(route('products.destroy', {'product' : deleteId}))
        }
    const searching = (value) => {
        router.visit('/me-admin/products',{ only: ['products', 'searchParam'], preserveState: true, replace: true, data: {search: value} })
        // Inertia.get('/me-admin/products/t', {search: value}, {
        //     replace: true,
        //     preserveState: true,
        //     preserveScroll: true,
        //     only: ['products']
        // })
        // axios.post(`${route('search')}?search=${value}`, {search: value}).then((data) => console.log(data.data))
        // router.remember(value, 'search')
        // sx(value)
        
    }
    
    
    return ( 
        <>
            <Head title="FastFood | Dashboard" />
                <HeaderDashboard user={user} namePage='Products Management' />
                <div className="delete-pop-up">
            <Modal
                show={deletePopUp}
                size="md"
                popup={true}
                onClose={() => console.log('close')}
            >
                <FontAwesomeIcon icon={faClose} onMouseDown={() => setDeletePopUp(false)} className='p-2 text-gray-500 text-lg hover:text-gray-600 cursor-pointer duration-100 w-fit absolute right-2 ' />
                <Modal.Body>
                <div className="text-center pt-10">
                    <FontAwesomeIcon icon={faExclamation} className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Are you sure you want to delete this product?
                    </h3>
                    <div className="flex justify-center gap-4">
                    <Button
                        color="failure"
                        onMouseDown={deleteHandle}
                    >
                        Yes, I'm sure
                    </Button>
                    <Button
                        color="gray"
                        onMouseDown={() => setDeletePopUp(false)}
                    >
                        No, cancel
                    </Button>
                    </div>
                </div>
                </Modal.Body>
            </Modal>
            </div>
                <div className="flex items-center"> {/* This color : bg-sky-500 for sky blue */}
                    <NavBar user={user} />
                    <div className="px-10 py-3 content ml-auto w-10/12 md:w-8/12 lg:w-9/12 xl:w-[80%]">
                        <div className="search w-full md:1/2 lg:w-1/3 mt-2 mb-5 ml-auto flex justify-end items-center gap-3">
                        <Link href={route('products.create')} className='bg-green-500 text-white py-3 px-2 w-7/12 lg:w-7/12 xl:w-1/3  text-center'><FontAwesomeIcon icon={faPlus} className='' /> <span className="hidden md:inline">Add</span></Link>
                            <input type="text" name="name" placeholder="Search By Name" className="w-full" defaultValue={searchParam} onChange={(e) => searching(e.target.value)} />
                            
                        </div>
                        <div className="product-table overflow-x-auto">
                            <table className="border border-collapse mx-auto ">
                                <thead>
                                    <tr className="">
                                        <td className="p-2 min-w-[100px] text-center">Action</td>
                                        <td className="p-2 min-w-[100px] text-center">#</td>
                                        <td className="p-2 min-w-[200px] text-center">Image</td>
                                        <td className="p-2 min-w-[150px] text-center">Name</td>
                                        <td className="p-2 min-w-[150px] text-center">Category Name</td>
                                        <td className="p-2 min-w-[150px] text-center">Size</td>
                                        <td className="p-2 min-w-[150px] text-center">Price</td>
                                        <td className="p-2 min-w-[150px] text-center">Stock</td>
                                        <td className="p-2 min-w-[200px] text-center">Ingredients</td>
                                        <td className="p-2 min-w-[200px] text-center">Description</td>
                                    </tr>
                                </thead>
                                <tbody>
                                {products?.data?.length !== 0 ? products?.data?.map((product, i) => (
                                    <tr key={i} className={`${i % 2 === 0 ? 'bg-yellow-100' : "bg-white"} h-[100px]`}>
                                        <td className="p-2 min-w-[100px] text-center"><Link href={route('products.edit', {'product' : product.id})}><FontAwesomeIcon icon={faPen} className='text-white bg-sky-500 p-2 rounded-md'  /></Link>  <FontAwesomeIcon icon={faTrash} onClick={() => deleteClicked(product?.id)} className='text-white cursor-pointer bg-red-500 p-2 rounded-md' /></td>
                                        <td className="p-2 min-w-[100px] text-center">{product?.id}</td>
                                        <td className="p-2 min-w-[200px] text-center"><img src={`/${product?.urlPhoto}`} className="h-32" alt="" /></td>
                                        <td className="p-2 min-w-[150px] text-center">{product?.name}</td>
                                        <td className="p-2 min-w-[150px] text-center">{product?.category_name}</td>
                                        <td className="p-2 min-w-[150px] text-center">{product?.size}</td>
                                        <td className="p-2 min-w-[150px] text-center">{product?.price}</td>
                                        <td className="p-2 min-w-[150px] text-center">{product?.stock}</td>
                                        <td className="p-2 min-w-[200px] text-center">{product?.ingredients}</td>
                                        <td className="p-2 min-w-[200px] text-center">{product?.description?.slice(0, 100)}...</td>
                                    </tr>
                                )) : null}
                                </tbody>
                            </table>
                        </div>
                        <div className="pages flex justify-between items-center gap-2 p-2 my-14">
                        <p className='text-gray-500 text-lg'>Show {products?.to} of {products?.total}</p>
                        <div>
                            {products?.data?.length !== 0 && products?.links?.map((p, i) => (
                                <React.Fragment key={i}>
                                    {p.label === '&laquo; Previous' ? <Link href={p.url} className='font-light'><FontAwesomeIcon icon={faAngleLeft} className={`duration-200 ${products.current_page === 1 ? 'hidden' : 'inline'} px-1`} /></Link> : p.label === 'Next &raquo;'?  <Link href={p.url}><FontAwesomeIcon icon={faAngleRight}  className={`duration-200 ${products.current_page === products.last_page ? 'hidden' : 'inline'}`} /></Link> : <Link href={p.url} className={`${p.active && 'border-b border-b-black'} p-2 font-b`} key={i}>{p.label}</Link>}
                                    </React.Fragment>
                                    ))}
                                </div>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default Products;