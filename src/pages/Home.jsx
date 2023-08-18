import React from 'react';
import Banner from './Header/Banner';
import Chefs from '../components/Chefs';
import FoodCategory from '../components/FoodCategory';
import TrustedCard from '../components/TrustedCard';
import Subscribe from '../components/Subscribe';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <main className='overflow-hidden'>
            <Banner />
            <FoodCategory />
            <Chefs />
            <Subscribe />
            <Contact />
            <TrustedCard />
        </main>
    );
};

export default Home;