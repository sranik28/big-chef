import React from 'react';
import contact from '../assets/contact/contact.png'

const Contact = () => {
    return (
        <main className='container px-3'>
            <h1 className='my-10 text-4xl font-bold text-center'>Contact <span className='text-yellow-500'>Us</span></h1>
            <div className='grid gap-5 my-20 md:grid-cols-2'>
                <div>
                    <img className='rounded-md' src={contact} alt="" />
                </div>
                <div>
                    <form className='w-full '>
                        <input className='py-2 my-3 placeholder:px-3 w-full md:w-[80%] mx-auto outline-none' type="text" name="" id="" placeholder='Your name' /><br />
                        <input className='outline-none py-2 my-3 placeholder:px-3 w-full md:w-[80%] mx-auto' type="text" name="" id="" placeholder='Your name' /><br />
                        <textarea className='outline-none py-10 my-3 placeholder:px-3 w-full md:w-[80%] mx-auto' name="" id="" placeholder='Your message' ></textarea><br />
                        <input className='py-3 w-full md:w-[80%] bg-[#ca8a04] text-white hover:bg-amber-500 rounded-md hover:scale-105 transform duration-300 font-bold mx-auto' type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Contact;