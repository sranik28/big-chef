import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.jpg'

const NavBar = () => {
    return (
        <nav className='flex justify-between mt-2 items-center'>
            <div className='flex gap-2 items-center'>
                <img className='w-12' src={logo} alt="" />
                <h1 className='text-2xl font-bold'>Big <span className='text-yellow-600'>chef</span></h1>
            </div>
            <div className='flex gap-5 items-center'>
                <ul className='flex gap-5'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                </ul>
                <button className='bg-yellow-600 px-5 py-2 rounded'><Link to='/'>Login</Link></button>
            </div>
        </nav>
    );
};

export default NavBar;