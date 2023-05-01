import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.jpg'
import { FiMenu } from 'react-icons/fi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

const NavBar = () => {

    const [toggle, setToggle] = useState(false)

    return (
        <nav className='flex justify-between mt-2 items-center'>
            <div className='flex gap-2 items-center'>
                <img className='w-12' src={logo} alt="" />
                <h1 className='text-2xl font-bold'>Big <span className='text-yellow-600'>chef</span></h1>
            </div>

            <span className='md:hidden'>
                {
                    toggle ? <MdOutlineRestaurantMenu onClick={() => setToggle(!toggle)} /> : <FiMenu onClick={() => setToggle(!toggle)} />
                }
            </span>

            <div className='flex justify-between '>
                <ul className={`transition-all items-center duration-300 flex gap-6 bg-black p-3 opacity-75 md:bg-transparent md:flex-row flex-col absolute md:static w-full top-[8.3%] text-white md:text-black  ${toggle ? "left-0" : "-left-full"}`}>
                    <li className='flex gap-6'>
                        <NavLink to="/" className={({ isActive }) =>
                            isActive ? "active" : ""}>Home</NavLink>
                        <NavLink to="/blog" className={({ isActive }) =>
                            isActive ? "active" : ""}>Blog</NavLink>
                    </li>
                    <li>
                        <Link className='bg-yellow-600 px-5 py-2 rounded' to='/'>Login</Link>
                    </li>
                </ul>
            </div>


        </nav>
    );
};

export default NavBar;