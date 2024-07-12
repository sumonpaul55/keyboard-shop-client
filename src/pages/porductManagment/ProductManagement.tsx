import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';




const ProductManagement: React.FC = () => {
    const [sideBarOpen, setSidebarOpen] = useState(false)
    return (
        <div className={`sm:flex gap-4 md:gap-16 bg-slate-300 h-[100%] absolute w-full top-0 left-0 width-[100%] pt-10 sm:pt-16`}>
            <button className='absolute bg-white z-50 sm:hidden mt-6 px-2' onClick={() => setSidebarOpen(!sideBarOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                </svg>
            </button>

            <div className={`h-full absolute sm:static width-[250px] border-r bg-slate-900 duration-200 text-white pt-20 p-2 md:p-14 ${sideBarOpen ? "-left-[250px] " : "z-40"}`}>
                <Link className='sm:text-lg font-semibold bg-slate-700 p-2 rounded' to="/product-manage/add-product">Add Product</Link>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default ProductManagement;