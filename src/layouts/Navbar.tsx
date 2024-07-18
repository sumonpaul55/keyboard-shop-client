import { useState, useRef, useEffect } from 'react';
import { FaCartPlus } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef<HTMLDivElement | undefined | any>();
    const navBarItems = [
        <li className="">
            <Link to="/" className='group flex cursor-pointer flex-col'>
                Home<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
        </li>,
        <li className="">
            <Link to="/products" className='group flex cursor-pointer flex-col'>
                Products<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
        </li>,
        <li className="">
            <Link to="/about-us" className='group flex cursor-pointer flex-col'>
                About Us<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
        </li>,
        <li className="">
            <Link to="/contact-us" className='group flex cursor-pointer flex-col'>
                Home<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
        </li>,
        <li className="relative">
            <Link to="/" className='group flex cursor-pointer flex-col'>
                <FaCartPlus size={25} color='' /><span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <span className='absolute -top-3 text-sm bg-red-500 size-5 text-center rounded-full -right-4'>2</span>
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
        <section className='bg-primary px-4 py-2 sticky top-0 z-[5000]'>
            <div className="container mx-auto">
                <nav className="flex w-full items-center justify-between text-white">
                    <div className="cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
                        <h2>Logo</h2>
                    </div>
                    <ul className="hidden items-center justify-between gap-10 md:flex">

                        {navBarItems}
                    </ul>
                    <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer">
                            <line x1="4" x2="20" y1="12" y2="12" />
                            <line x1="4" x2="20" y1="6" y2="6" />
                            <line x1="4" x2="20" y1="18" y2="18" />
                        </svg>
                        {dropDownState && (
                            <ul className="z-10 gap-2 bg-[#393E46] absolute right-0 top-11 flex w-[200px] flex-col rounded-lg text-base">
                                {navBarItems}
                            </ul>
                        )}
                    </div>
                </nav>
            </div>
        </section>
    );
};
