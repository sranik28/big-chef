import React from 'react';
import errorImg from '../assets/error.png'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex justify-center items-center flex-col h-screen'>
            <img className='' src={errorImg} alt="" />
            <h1 className='font-bold text-center text-5xl my-10'>404</h1>
            <p className='text-center text-3xl font-bold mt-10'><span className='text-yellow-500'>Oppss </span>server is not found</p>
            <Link to="/"><button className=' underline text-yellow-500 text-center block mx-auto my-20 text-2xl'>Back to home</button></Link>
        </div>
    );
};

export default Error;