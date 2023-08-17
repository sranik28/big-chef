import React from 'react';
import { Link } from 'react-router-dom';
import { BiLike } from 'react-icons/bi';
import LazyLoad from 'react-lazy-load';

const ChefCard = ({ chef }) => {
    const { name, experience, number_of_recipes, likes, image, _id } = chef;



    return (
        <main data-aos="zoom-in" data-aos-duration="2000" className="grid w-full p-6 mx-auto mt-20 mb-10 border border-orange-300 rounded md:grid-cols-2">
            <div>
                <LazyLoad threshold={0.95} onContentVisible={() => {console.log('loaded!')}}>
                    <img className="duration-500 transform rounded-md w-80 h-80 hover:scale-110" src={image} alt="Shoes" />
                </LazyLoad>
            </div>
            <div className='p-5'>
                <h1 className="py-5 text-4xl font-bold">{name}</h1>
                <p className="my-2 text-2xl text-gray-500">The Best Recipes : {number_of_recipes}</p>
                <p className="my-2 text-2xl text-gray-500"> Experience : {experience}</p>
                <p className="flex items-center gap-2 my-2 text-2xl text-gray-500"><span className='text-yellow-600 '><BiLike /></span> {likes}</p>
                <Link to={`/view-details/${_id}`}><button className="w-full py-2 mt-10 text-lg font-semibold text-white bg-yellow-600 rounded-md hover:bg-amber-500">View Details</button></Link>
            </div>

        </main>
    );
};

export default ChefCard;