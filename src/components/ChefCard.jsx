import React from 'react';
import { Link } from 'react-router-dom';
import { BiLike } from 'react-icons/bi';

const ChefCard = ({ chef }) => {
    const { name, experience, number_of_recipes, likes, image } = chef
    console.log()
    return (
        <main className="max-w-[800px] mx-auto mt-20 grid md:grid-cols-2 mb-10 border rounded border-orange-300 p-6">
            <div>
                <img className=" rounded-md" src={image} alt="Shoes" />
            </div>
            <div className=''>
                <h1 className="text-4xl font-bold py-5">{name}</h1>
                <p className="text-2xl my-2">The Best Number Of Recipes : {number_of_recipes}</p>
                <p className="text-2xl my-2"> Experience : {experience}</p>
                <p className="text-2xl flex items-center gap-2 my-2"><span className='text-yellow-600'><BiLike /></span> {likes}</p>
                <Link to="/view-details"><button className="bg-yellow-600 w-full py-2 mt-10 rounded-md text-lg font-semibold text-white">View Details</button></Link>
            </div>
        </main>
    );
};

export default ChefCard;