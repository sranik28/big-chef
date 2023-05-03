import React from 'react';
import Banner from './Header/Banner';
import Chefs from '../components/Chefs';
import FoodCategory from '../components/FoodCategory';
import TrustedCard from '../components/TrustedCard';

const Home = () => {
    return (
        <main>
            <Banner />
            <FoodCategory />
            <Chefs />
            <TrustedCard />
        </main>
    );
};

export default Home;