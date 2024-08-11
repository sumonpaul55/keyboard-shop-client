import { useState, useRef, useEffect } from 'react';
import { FaCartPlus } from 'react-icons/fa6';
import { Link, NavLink } from 'react-router-dom';
import { useAppSelector } from '../redux/hook';
import logo from '../../src/assets/kyehublogo.png'
export const NavBar = () => {
    const state = useAppSelector((state) => state.cart.cart);


    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef<HTMLDivElement | undefined | any>();
    const navBarItems = [
        <li className="" key="1">
            <NavLink to="/" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }>
                Home<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
        </li>,
        <li className="" key="2">
            <NavLink to="/products" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }>
                Products<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
        </li>,
        <li className="" key="3" >
            <NavLink to="/about-us" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }>
                About Us<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
        </li>,
        <li className="" key="4">
            <NavLink to="/contact-us" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }>
                Contact Us<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
        </li>,
        <li className="relative w-fit" key={5}>
            <NavLink to="/cart" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }>
                <FaCartPlus size={25} color='' /><span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
            {
                <span className='absolute -top-2 text-sm bg-red-500 size-5 text-center rounded-full -right-4 text-white flex items-center justify-center'>{state?.length ? state.length : 0}</span>
            }
        </li>,
        <li className="" key="6">
            <NavLink to="/product-manage" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }>
                Product Manage<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
        </li>,

    ]
    useEffect(() => {
        const closeDropDown = (e: MouseEvent) => {
            if (dropDownMenuRef.current && !dropDownMenuRef.current.contains(e.target as Node)) {
                setDropDownState(false);
            }
        };
        document.addEventListener('mousedown', closeDropDown);
        return () => {
            document.removeEventListener('mousedown', closeDropDown);
        };
    }, []);
    return (
        <section className='px-2 pt-2 pb-1 sticky top-0 z-[9999] bg-white shadow-lg'>
            <div className="container mx-auto">
                <nav className="flex w-full items-center justify-between">
                    <div className="cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold transition-all duration-200 hover:scale-110">
                        <Link to={"/"}>
                            <img src={logo} alt="keyhub" className='w-32' />
                        </Link>
                    </div>
                    <ul className="hidden items-center justify-between gap-10 md:flex">
                        {navBarItems}
                    </ul>
                    <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer">
                            <line x1="4" x2="20" y1="12" y2="12" />
                            <line x1="4" x2="20" y1="6" y2="6" />
                            <line x1="4" x2="20" y1="18" y2="18" />
                        </svg>
                        {dropDownState && (
                            <ul className="z-10 text-white gap-2 p-5 md:p-0 space-y-3 md:space-y-0 bg-[#393E46] absolute right-0 top-11 flex w-[200px] flex-col rounded-lg text-base">
                                {navBarItems}
                            </ul>
                        )}
                    </div>
                </nav>
            </div>
        </section>
    );
};
