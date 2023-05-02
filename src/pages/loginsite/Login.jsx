import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import NavBar from '../Header/NavBar';
import { useDataGlobally } from '../../context/Context';
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";


const Login = () => {

    const { signIn, signInGoogle, signInGitHub } = useDataGlobally();
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)
    const from = location.state?.from?.pathname || "/"

    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, {replace:true})
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })

    }



    return (
        <main>
            <NavBar />
            <div className='max-w-[1240px] mx-auto  '>
                <h1 className='text-center text-5xl font-bold'>Please <span className='text-yellow-600'>Login</span></h1>
                <div className=' text-center py-5 bg-slate-200 rounded md:w-[500px]  mx-auto my-5'>
                    <form onSubmit={handleLogin}>
                        <input className='w-[80%] py-2 my-5 rounded' type="email" name="email" placeholder='      enter your email' required />
                        <input className='w-[80%] py-2 rounded ' type="password" name='password' placeholder='    enter your password' required /><br />

                        <p className='text-yellow-700 underline mt-5'><Link>Forget Password</Link></p>
                        <button className='w-[80%] bg-yellow-600 mx-auto rounded py-2 my-5 text-white font-semibold'>Login</button>

                        <p className='text-red-600 text-lg'>{error}</p>

                        <p className='my-5'> Create a new account?<Link to="/register" className='text-yellow-700 underline'> Registration</Link></p>
                    </form>
                </div>
                <button onClick={signInGoogle} className='p-[10px] border rounded w-full flex justify-center items-center gap-[6px] '><FcGoogle className='text-[32px]' /><span>Continue with Google</span></button>
                <button onClick={signInGitHub} className='p-[10px] border rounded w-full flex justify-center items-center gap-[6px] '><BsGithub className='text-[32px]' /><span>Continue with GitHub</span></button>
            </div>
        </main>
    );
};

export default Login;