import React from 'react';
import NavBar from '../Header/NavBar';

const Register = () => {
    return (
        <main>
            <NavBar />
            <div className='max-w-[1240px] mx-auto mt-20 bg-slate-200'>
                <h1 className='text-center text-5xl font-bold'>Please <span className='text-yellow-600'>Registration</span></h1>
                <form className='text-center py-5 bg-slate-200 rounded md:w-[500px]  mx-auto my-5'>
                    <input className='w-[80%] py-2 my-3 rounded' type="text" name='name' placeholder='Enter user  name' /> <br />
                    <input className='w-[80%] py-2 my-3 rounded' type="email" name='email' placeholder='Enter your email' /> <br />
                    <input className='w-[80%] py-2 my-3 rounded' type="password" name='password' placeholder='Enter your password' /> <br />
                    <input className='w-[80%] py-2 my-3 rounded' type="text" name='photo' placeholder='Enter user photoURL' /> <br />
                    <button className='w-[80%] bg-yellow-600 mx-auto rounded py-2 my-3 text-white font-semibold' >Register</button>
                </form>
            </div>
        </main>
    );
};

export default Register;