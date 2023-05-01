import React from 'react';
import banner from '../../assets/banner.jpg';
const Banner = () => {
    return (
        <main className='w-full h-[89vh] relative overflow-x-hidden' >
            <div className='before:contents-[""] relative before:bg-[#000000bb] before:absolute w-full h-[89vh] before:top-0 before:left-0 before:right-0 before:bottom-0 '>
                <img className='w-full h-full object-cover ' src={banner} alt="" />
            </div>
            <div className='absolute max-w-[1240px] w-full mx-auto md:top-60 md:left-40  top-40 left-8'>
                <h1 className='text-6xl font-bold text-yellow-600 leading-tight'><span className='text-white'>it's not just  food,</span> <br />it's an  experience</h1>
            </div>
        </main>
    );
};

export default Banner;