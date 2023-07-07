import React from 'react';
import Banner from './Header/Banner';
import Chefs from '../components/Chefs';
import FoodCategory from '../components/FoodCategory';
import TrustedCard from '../components/TrustedCard';
import Subscribe from '../components/Subscribe';

const Home = () => {
    return (
        <main>
            <Banner />
            <FoodCategory />
            <Chefs />
            <Subscribe />
            <TrustedCard />
        </main>
    );
};

export default Home;