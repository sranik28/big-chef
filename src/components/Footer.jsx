import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <main className='bg-slate-900 mt-5'>
            <div className='grid md:grid-cols-3 gap-5 max-w-[1240px] mx-auto py-5 px-6 text-white'>
                <div className=' text-center'>
                    <h2 className='text-xl my-8'>Contact Us</h2>
                    <p className='mb-2'>Location : Mohakhali,Dhaka-1215</p>
                    <p className='mb-2'>Call : 017-4182-0638</p>
                    <p>Email : bigchef@gmail.com</p>
                </div>
                <div className='text-center'>
                    <h2 className='text-xl my-8'>Big Chef</h2>
                    <p>Necessary, making this the first true generator on <br /> the Internet. It uses a dictionary of over 200</p>
                    <div className=' flex gap-2 justify-center mt-3'>
                        <FaFacebookF />
                        <FaInstagram />
                        <FaTwitter />
                        <FaLinkedinIn />
                    </div>

                </div>
                <div className='text-center'>
                    <h1 className='text-xl my-8'>Opening Hours</h1>
                    <p className='mb-2'>Everyday</p>
                    <p>10.00 Am -10.00 Pm</p>
                </div>
            </div>
        </main>
    );
};

export default Footer;