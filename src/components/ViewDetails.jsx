import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipesCard from './RecipesCard';
import SingleChef from './SingleCafe';

const ViewDetails = () => {

    const data = useLoaderData()
    console.log(data)

    return (
        <main>
            <SingleChef chef={data} />
            {
                data?.recipes && data.recipes.map((singleData, i) => <RecipesCard key={i} singleData={singleData} />)
            }
        </main>
    );
};

export default ViewDetails;