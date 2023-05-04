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
                        <p><strong>PropTypes</strong> is a utility provided by React that allows you to define the expected types and shapes of props that a component should receive. By defining PropTypes for your component, you can catch errors and make your code more robust. To use PropTypes, you import it from the prop-types package, define the expected types and shapes of your props using propTypes, and specify any required props using isRequired.</p>
                    </div>
                    <div className='p-3 border-2 rounded'>
                        <h1 className='text-3xl py-3'>Tell us the difference between nodejs and express js?</h1>
                        <p><strong>Node.js and Express.js</strong> are two different technologies used in web development. Here's a brief overview of the differences between the two:Node.js: Node.js is a runtime environment for executing JavaScript code outside of a web browser. It is built on top of the V8 JavaScript engine and provides an event-driven, non-blocking I/O model that makes it ideal for building scalable, networked applications. Node.js is mainly used for building server-side applications such as APIs, web servers, and real-time applications.used for building server-side applications such as APIs, web servers, and real-time applications.used for building server-side applications such as APIs, web servers, and real-time applications.nd real-time applications.used for building server-side applications custom hook can be useful</p>
                    </div>
                    <div className='p-3 border-2 rounded'>
                        <h1 className='text-3xl py-3'>What is a custom hook, and why will you create a custom hook?</h1>
                        <p>A <strong>custom hook</strong> is a reusable function in React that uses one or more of the built-in hooks to provide custom functionality. You might create a custom hook to abstract away complex or repetitive logic, share stateful logic between components, or to make your code more modular and easier to maintain.</p>
                    </div>
                </div>
            </div>
            <button onClick={downloadPdf} className='bg-yellow-600 hover:bg-amber-500 w-[200px] mx-auto px-5 py-3 rounded flex gap-2 items-center mb-10 text-white font-semibold'> <span> <GoFilePdf /> </span> Download PDF <span> <ImFolderDownload /> </span> </button>
        </main >
    );
};

export default Blog;