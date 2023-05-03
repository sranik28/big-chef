import jsPDF from 'jspdf';
import React from 'react';
import { GoFilePdf } from 'react-icons/go';
import { ImFolderDownload } from 'react-icons/im';

const Blog = () => {

    const downloadPdf = () => {

        const doc = new jsPDF("landscape", "px", "a4", "false")
            doc.text("This blog page short summary", 20, 30)


            doc.text("In software development, there are two types of components: uncontrolled and controlled. \n Uncontrolled components rely on the browser or environment, while controlled components \n are managed by the application code.  React PropTypes is a way to \n validate props in components. \n Node.js is a runtime environment for executing JavaScript code outside of a web browser, primarily \n used for building server-side applications. \n Custom hooks are a useful tool in React for reusing logic across components.", 20, 50);
            
            doc.save("blog-information.pdf")
    }


    return (
        <main>
            <div className='container'>
                <h1 className='text-3xl font-bold text-center my-5'>Question's <span className='text-yellow-500'>Answer....</span></h1>
                <div className='grid md:grid-cols-2 gap-4 mt-10 mb-20'>
                    <div className='p-3 border-2 rounded w-full h-[100%]'>
                        <h1 className='text-3xl py-3'>Tell us the differences between uncontrolled and controlled components?</h1>
                        <p> <strong>Uncontrolled</strong> components are more loosely coupled and independent, while controlled components are more tightly coupled and managed as part of a larger system. The choice between using controlled or uncontrolled components depends on the specific requirements and goals of the system being developed.</p>
                    </div>
                    <div className='p-3 border-2 rounded'>
                        <h1 className='text-3xl py-3'>How to validate React props using PropTypes?</h1>
                        <p><strong>Custom hooks</strong> in React are a way to reuse stateful logic across
                            multiple components in your application. They allow you to extract
                            common logic into a reusable function, which can be used across
                            different components. Custom hooks are functions that start with the
                            prefix use. They can call other hooks, such as useState, useEffect,
                            useRef, etc., and can also have their own state and logic.</p>
                    </div>
                    <div className='p-3 border-2 rounded'>
                        <h1 className='text-3xl py-3'>Tell us the difference between nodejs and express js?</h1>
                        <p><strong>useRef</strong> is a React Hook.This is a React Hook that allows you to create a mutable variable that persists across re-renders of a component. It is commonly used to access the DOM elements or to store any mutable value that needs to be accessed between renders without triggering a re-render.</p>
                    </div>
                    <div className='p-3 border-2 rounded'>
                        <h1 className='text-3xl py-3'>What is a custom hook, and why will you create a custom hook?</h1>
                        <p><strong>useMemo</strong> is a React Hook.This is a React Hook that allows you to memoize the result of a function and only recompute it when the dependencies change. It is used to optimize performance by avoiding unnecessary re-computations of expensive operations. </p>
                    </div>
                </div>
            </div>
            <button onClick={downloadPdf} className='bg-yellow-600 hover:bg-amber-500 w-[200px] mx-auto px-5 py-3 rounded flex gap-2 items-center mb-10 text-white font-semibold'> <span> <GoFilePdf /> </span> Download PDF <span> <ImFolderDownload /> </span> </button>
        </main >
    );
};

export default Blog;