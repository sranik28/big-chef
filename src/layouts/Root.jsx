import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Root = () => {
    return (
        <div>
            <div className='max-w-[1240px] mx-auto px-4 md:min-h-[calc(100vh-100px)]'>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;