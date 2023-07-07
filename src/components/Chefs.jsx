import React, { useState } from 'react';
import { useApiData } from '../context/ApiDataProvider';
import ChefCard from './ChefCard';

const Chefs = () => {

    const { chefs } = useApiData();

    const [cardCount, setCardCount] = useState(4)
    const [seeMore, setSeeMore] = useState(true);

    const slider = chefs.slice(0, cardCount);


    const handelSeeMoreBtn = () => {
        setCardCount(chefs.length);
        setSeeMore(false)
    }

    return (
        <div className='container'>
            <h1 className='text-4xl font-bold text-center'>Our <span className='text-yellow-500'>Chefs</span></h1>
            <p className='mt-2 text-center text-gray-600'>The main chefs in our restaurant and supervisors of the chefs' crew</p>
            <div className='container grid gap-6 md:grid-cols-2'>
                {
                    slider.map(chef => <ChefCard key={chef._id} chef={chef} />)
                }
            </div>
            <button onClick={handelSeeMoreBtn} className={`bg-yellow-600 py-2 px-5 block mx-auto  rounded-md hover:hover:bg-amber-500 text-white font-semibold ${seeMore ? "" : "hidden"}`}>See More</button>
        </div>
    );
};

export default Chefs;