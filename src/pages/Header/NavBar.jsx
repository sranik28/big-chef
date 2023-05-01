import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import { FiMenu } from 'react-icons/fi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

const NavBar = () => {

    const [toggle, setToggle] = useState(false)
    return (
        <nav className="bg-white">
            <div className="container flex justify-between items-center py-3">
                <div className='flex gap-2 items-center'>
                    <img className='w-12' src={logo} alt="" />
                    <Link to="/"><h2 className="text-2xl font-bold">big<span className="text-yellow-500">Chef</span></h2></Link>
                </div>
                <span className="md:hidden">
                    {
                        toggle ? <MdOutlineRestaurantMenu onClick={() => setToggle(!toggle)} /> : <FiMenu onClick={() => setToggle(!toggle)} />
                    }
                </span>
                <ul className={`flex items-center duration-300 flex-col py-5 md:p-0 text-white bg-opacity-90 md:text-black top-16 bg-black md:bg-transparent w-full md:w-auto md:flex-row gap-6 absolute md:static z-50 ${toggle ? "left-0" : "-left-full"}`}>
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" className={({ isActive }) => isActive ? "active" : ""}>Blog</NavLink>
                    </li>
                    <li><button className="bg-yellow-500 px-4 py-2 rounded text-white"><Link>Login</Link></button></li>
                </ul>
            </div>

        </nav>
    );
};

export default NavBar;