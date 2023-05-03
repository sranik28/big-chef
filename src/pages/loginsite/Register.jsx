import React, { useState } from 'react';
import { useDataGlobally } from '../../context/Context';
import { Link } from 'react-router-dom';

const Register = () => {

    const { createUser } = useDataGlobally();

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();

        setSuccess("");
        setError("");

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;
        console.log(name, email, password, photo);
        // -------------
        if (!/(?=.*?[A-Z])/.test(password)) {
            setError("At last one uppercase ")
        }
        else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
            setError("At last one Character ")
        }
        else if (password.length < 6) {
            setError("please add at least 6 number");
            return
        }


        createUser(email, password)
            .then(result => {
                const currentUser = result.user;
                console.log(currentUser)
                e.target.reset();
                setSuccess("User has created successfully");
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })

    }

    return (
        <main>
            <div className='max-w-[1240px] mx-auto mt-20 bg-slate-200'>
                <h1 className='text-center text-5xl font-bold'>Please <span className='text-yellow-600'>Registration</span></h1>
                <form onSubmit={handleRegister} className='text-center py-5 bg-slate-200 rounded md:w-[500px]  mx-auto my-5'>
                    <input className='w-[80%] py-2 my-3 rounded' type="text" name='name' placeholder='Enter user  name' required /> <br />
                    <input className='w-[80%] py-2 my-3 rounded' type="email" name='email' placeholder='Enter your email' required /> <br />
                    <input className='w-[80%] py-2 my-3 rounded' type="password" name='password' placeholder='Enter your password' required /> <br />
                    <input className='w-[80%] py-2 my-3 rounded' type="text" name='photo' placeholder='Enter user photoURL' required /> <br />

                    <p className='text-red-600 text-lg'>{error}</p>
                    <p className='text-green-600 text-lg'>{success}</p>
                
                    <button className='w-[80%] bg-yellow-600 mx-auto rounded py-2 my-3 text-white font-semibold' >Register</button>
                    <div>
                        Already have a account?
                        <Link to="/login" className="px-2 py-1 ml-2 text-yellow-600 underline rounded">Login</Link>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default Register;