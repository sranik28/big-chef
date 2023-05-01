import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Header/NavBar';

const Login = () => {
    return (
        <main>
            <NavBar />
            <div className='max-w-[1240px] mx-auto mt-20 '>
                <h1 className='text-center text-5xl font-bold'>Please <span className='text-yellow-600'>Login</span></h1>
                <div className=' text-center py-5 bg-slate-200 rounded md:w-[500px]  mx-auto my-5'>
                    <div>
                        <input className='w-[80%] py-2 my-5 rounded' type="email" name="email" placeholder='      enter your email' /><br />
                        <input className='w-[80%] py-2 rounded ' type="password" name='password' placeholder='    enter your password' /><br />
                        <p className='text-yellow-700 underline mt-5'><Link>Forget Password</Link></p>
                        <button className='w-[80%] bg-yellow-600 mx-auto rounded py-2 my-5'>Login</button>

                        <p className='my-5'> Create a new account?<Link to="/register" className='text-yellow-700'> Register</Link></p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Login;