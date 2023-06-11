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

function UserManagment({users, user, searchParam}) {
    const page = usePage()
    const {post, delete: destroy} = useForm()
    const [deletePopUp, setDeletePopUp] = useState(false)
    const [deleteId, setDeleteId] = useState(null)
    const deleteClicked = (id) => {
        setDeletePopUp(true)
        setDeleteId(id)
        // if (confirm('are you sure? ')) {
            //     destroy(route('products.destroy', {'product' : id}))
            // }
        } 
        const deleteHandle = () => {
            setDeletePopUp(false)
            destroy(route('users.destroy', {'user' : deleteId}))
        }
    const UnblockUser = (userID) => {
        // post()
        // Inertia.post(route('blockUser'),{ userID: userID })
        router.post(route('unblockUser'),{userID: userID, search: searchParam })
        // router.visit(route('blockUser'),{only:['users'], preserveState: true, replace: true, data: {userID: userID} })
    }
    const blockUser = (userID) => {
        // post()
        // Inertia.post(route('blockUser'),{ userID: userID })
        router.post(route('blockUser'),{userID: userID, search: searchParam })
        // router.visit(route('blockUser'),{only:['users'], preserveState: true, replace: true, data: {userID: userID} })
    }
    const makeAdmin = (userID) => {
        // router.visit(route('makeUserAdmin'),{data: {userID: userID, search: searchParam}, method:'post',only: ['users'], preserveState: true, replace: true, })
        router.post(route('makeUserAdmin'),{userID: userID, search: searchParam })
    }
    const removeAdmin = (userID) => {
            router.post(route('DismissUserFromAdmin'),{userID: userID, search: searchParam })
    }

    const searching = (value) => {
        router.visit(route('users.index'),{ only: ['users', 'searchParam'], preserveState: true, replace: true, data: {search: value} })
        
    }
    
    
    return ( 
        <>
            <Head title="FastFood | Dashboard" />
                <HeaderDashboard user={user} namePage='Users Management' />
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
                {/* This color : bg-sky-500 for sky blue */}
                <div className="flex items-center"> 
                    <NavBar user={user} />
                    <div className="px-10 py-3 content ml-auto w-10/12 md:w-8/12 lg:w-9/12 xl:w-[80%]">
                        <div className="search w-full md:1/2 lg:w-1/3 mt-2 mb-5 ml-auto flex justify-end items-center gap-3">
                        <Link href={route('users.create')} className='bg-green-500 text-white py-3 px-2 w-7/12 lg:w-7/12 xl:w-1/3  text-center'><FontAwesomeIcon icon={faPlus} className='' /> <span className="hidden md:inline">Add</span></Link>
                        <input type="text" name="search_name" placeholder="Search By Name" className="w-full" defaultValue={searchParam} onChange={(e) => searching(e.target.value)} />
                        </div>
                        <div className="product-table overflow-x-auto">
                            <table className="border border-collapse mx-auto ">
                                <thead>
                                    <tr className="">
                                        <td className="p-2 min-w-[100px] text-center">Action</td>
                                        <td className="p-2 min-w-[100px] text-center">#</td>
                                        <td className="p-2 min-w-[150px] text-center">Name</td>
                                        <td className="p-2 min-w-[150px] text-center">Email</td>
                                        <td className="p-2 min-w-[150px] text-center">First Name</td>
                                        <td className="p-2 min-w-[150px] text-center">Last Name</td>
                                        <td className="p-2 min-w-[150px] text-center">Role</td>
                                        <td className="p-2 min-w-[150px] text-center">Status</td>
                                        <td className="p-2 min-w-[150px] text-center">Super User</td>
                                        <td className="p-2 min-w-[150px] text-center">Admin Action</td>
                                        <td className="p-2 min-w-[150px] text-center">Block Action</td>
                                    </tr>
                                </thead>
                                <tbody>
                                {users?.data?.length !== 0 ? users?.data?.map((user, i) => (
                                    <tr key={i} className={`${i % 2 === 0 ? 'bg-yellow-50' : "bg-white"} h-[100px]`}>
                                        <td className="p-2 min-w-[100px] text-center"><Link href={route('users.edit', {'user' : user.id})}><FontAwesomeIcon icon={faPen} className='text-white bg-sky-500 p-2 rounded-md'  /></Link>  <FontAwesomeIcon icon={faTrash} onClick={() => deleteClicked(user?.id)} className='text-white cursor-pointer bg-red-500 p-2 rounded-md' /></td>
                                        <td className="p-2 min-w-[100px] text-center">{user?.id}</td>
                                        <td className="p-2 min-w-[150px] text-center">{user?.name}</td>
                                        <td className="p-2 min-w-[150px] text-center">{user?.email}</td>
                                        <td className="p-2 min-w-[150px] text-center">{user?.firstname}</td>
                                        <td className="p-2 min-w-[150px] text-center">{user?.lastname}</td>
                                        <td className={`p-2 min-w-[150px] text-center`}>{user?.issuperuser ? 'Admin' : 'User'}</td>
                                        <td className={`p-2 min-w-[150px] text-center font-bold ${user?.blocked ? 'text-red-500' : 'text-green-500'}`}>{user?.blocked ? 'Blocked' : 'Allowed'}</td>
                                        <td className={`p-2 min-w-[150px] text-center font-bold`}>{user?.issuperuser? <span className="block mx-auto w-5 h-5 rounded-full bg-green-500"></span> : <span className="block mx-auto w-5 h-5 rounded-full bg-red-500"></span>}</td>
                                        <td className={`p-2 min-w-[150px] text-center font-bold`}>{!user?.issuperuser ? <button className="bg-green-500 text-white py-2 px-7 rounded-sm w-fit" onClick={() => makeAdmin(user?.id)}>Make</button> : <button className="bg-red-500 text-white py-2 px-5 rounded-sm w-fit" onClick={() => removeAdmin(user?.id)}>Dismiss</button>}</td>
                                        <td className={`p-2 min-w-[150px] text-center font-bold`}>{user?.blocked ? <button className="bg-green-500 text-white py-2 px-3 rounded-sm w-fit" onClick={() => UnblockUser(user?.id)}>Unblock</button> : <button className="bg-red-500 text-white py-2 px-5 rounded-sm w-fit" onClick={() => blockUser(user?.id)}>Block</button>}</td>
                                    </tr>
                                )) : null}
                                </tbody>
                            </table>
                        </div>
                        <div className="pages flex justify-between items-center gap-2 p-2 my-14">
                        <p className='text-gray-500 text-lg'>Show {users?.to} of {users?.total}</p>
                        <div>
                            {users?.data?.length !== 0 && users?.links?.map((user, i) => (
                                <React.Fragment key={i}>
                                    {user.label === '&laquo; Previous' ? <Link href={user.url} className='font-light'><FontAwesomeIcon icon={faAngleLeft} className={`duration-200 ${users.current_page === 1 ? 'hidden' : 'inline'} px-1`} /></Link> : user.label === 'Next &raquo;'?  <Link href={user.url}><FontAwesomeIcon icon={faAngleRight}  className={`duration-200 ${users.current_page === users.last_page ? 'hidden' : 'inline'}`} /></Link> : <Link href={user.url} className={`${user.active && 'border-b border-b-black'} p-2 font-b`} key={i}>{user.label}</Link>}
                                    </React.Fragment>
                                    ))}
                                </div>
                        </div>
                    </div>
                </div>
        </>
    );
}


export default UserManagment;