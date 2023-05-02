import React from 'react';
import { useApiData } from '../context/ApiDataProvider';
import ChefCard from './ChefCard';

const Chefs = () => {

    const { chefs } = useApiData()
    return (
        <div>
            {
                chefs.map(chef => <ChefCard key={chef._id} chef={chef} />)
            }
        </div>
    );
};

export default Chefs;