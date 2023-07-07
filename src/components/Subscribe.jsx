import React from 'react';

const Subscribe = () => {
    return (
        <section className="container px-3 my-24">
            <h1 className='text-4xl font-bold text-center'>Subscribe <span className='text-yellow-500'>To newsletter</span></h1>
            <p className="text-base text-center mb-14 ">Sign up for newsletter</p>
            <form className="h-[50px] max-w-[500px] mx-auto grid grid-cols-10 mt-10 border-[#242424] border">
                <input className="w-full h-full col-span-7 px-5 shadow-inner outline-none" type="email" placeholder="Your Email Address" />
                <button className="h-full bg-[#242424] text-white p-2 col-span-3 w-full">Submit</button>
            </form>
        </section>
    );
};

export default Subscribe;