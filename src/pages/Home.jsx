import React from 'react';
import Banner from './Header/Banner';
import Chefs from '../components/Chefs';
import FoodCategory from '../components/FoodCategory';

const Home = () => {
    return (
        <main>
            <Banner />
            <FoodCategory />
            <Chefs />
        </main>
    );
};

export default Home;