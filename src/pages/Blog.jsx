import React from 'react';
import NavBar from './Header/NavBar';

const Blog = () => {
    return (
        <main className='container'>
            <NavBar />
            <h1 className='text-3xl font-bold text-center my-5'>Question's <span className='text-yellow-500'>Answer....</span></h1>
            <div className='grid md:grid-cols-2 gap-4 mt-10 mb-20'>
                <div className='p-3 border-2 rounded w-full h-[100%]'>
                    <h1 className='text-3xl py-3'>Tell us the differences between uncontrolled and controlled components?</h1>
                    <p> <strong>Uncontrolled</strong> components are more loosely coupled and independent, while controlled components are more tightly coupled and managed as part of a larger system. The choice between using controlled or uncontrolled components depends on the specific requirements and goals of the system being developed.</p>
                </div>
                
            </div>
        </main>
    );
};

export default Blog;