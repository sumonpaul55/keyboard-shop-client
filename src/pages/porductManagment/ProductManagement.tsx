import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';


const ProductManagement: React.FC = () => {
    const [sideBarOpen, setSidebarOpen] = useState(false)
    return (
        <>
            <div className={`sm:flex bg-slate-300 w-full top-0 left-0`}>
                <button className='absolute bg-white z-50 md:hidden mt-6 px-2' onClick={() => setSidebarOpen(!sideBarOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                    </svg>
                </button>
                <div className={`min-h-screen flex duration-200 w-[300px] flex-col sm:gap-4 absolute md:static bg-slate-600 text-white pt-20 p-2 ${sideBarOpen ? "-left-[300px] " : "z-40"}`}>
                    <Link onClick={() => setSidebarOpen(!sideBarOpen)} className='sm:text-lg font-medium bg-slate-500 bg-opacity-50 sm:p-2 rounded' to="/product-manage/products">All Product</Link>
                    <Link onClick={() => setSidebarOpen(!sideBarOpen)} className='sm:text-lg font-medium bg-slate-500 bg-opacity-50 p-2 rounded' to="/product-manage/add-product">Add Product</Link>
                </div>
                <div className='flex-1 sm:p-3 md:p-5 overflow-y-auto'>
                    <Outlet></Outlet>
                </div>
            </div>
        </>

    )
}

export default ProductManagement;