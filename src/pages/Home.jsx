import React from 'react';
import NavBar from './Header/NavBar';
import Banner from './Header/Banner';
import Chefs from '../components/Chefs';

const Home = () => {
    return (
        <main>
            <NavBar />
            <Banner />
            <Chefs />
        </main>
    );
};

export default Home;