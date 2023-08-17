import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../pages/Header/NavBar';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Root = () => {
    useEffect(() => {
        Aos.init(
            {
                easing: 'ease-out-quad',
                duration:400,
            }
        )
    }, [])
    return (
        <div>
            <NavBar />
            <div className=' md:min-h-[calc(100vh-100px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;