import React from 'react';
import FoodCategory1 from '../assets/foodCategory-1.jpg';
import FoodCategory2 from '../assets/foodCategory-2.jpg';
import FoodCategory3 from '../assets/foodCategory-3.jpg';
import FoodCategory4 from '../assets/foodCategory-4.jpg';
import FoodCategory5 from '../assets/foodCategory-5.jpg';
import FoodCategory6 from '../assets/foodCategory-6.jpg';


const FoodCategory = () => {
    return (
        <main className='container '>
            <h1 className='mt-16 text-4xl font-bold text-center '>Our Delicious <span className='text-yellow-500'>Food</span></h1>
            <p className='mt-2 text-center text-gray-600'>All of our products are made from scratch using family recipes with only the highest quality ingredients.<br /> We bake and sell fresh daily to ensure only the best products are sold to our customers.</p>
            <div className='grid gap-8 p-6 my-10 rounded md:grid-cols-3 '>
                <div data-aos="fade-right" data-aos-duration="2000" className='block rounded-md p-6 mx-auto duration-300 transform border shadow-md hover:shadow-[#ead5cb] hover:scale-105'>
                    <img className='rounded w-72 h-72' src={FoodCategory1} alt="" srcset="" />
                    <h1 className='p-2 text-xl text-center'>coconut milk</h1>
                    <p className="text-center ">Price:<span className='font-bold'>$15</span> </p>
                </div>
                <div  data-aos="flip-right" data-aos-duration="2000" className='block rounded-md p-6 mx-auto duration-300 transform border shadow-md hover:shadow-[#ead5cb] hover:scale-105 '>
                    <img className='rounded w-72 h-72' src={FoodCategory2} alt="" srcset="" />
                    <h1 className='p-2 text-xl text-center'>Jerk chicken with rice & peas</h1>
                    <p className="text-center ">price:<span className='font-bold'>$10</span> </p>
                </div>
                <div data-aos="fade-left" data-aos-duration="2000" className='block rounded-md p-6 mx-auto duration-300 transform border shadow-md hover:shadow-[#ead5cb] hover:scale-105 '>
                    <img className='rounded w-72 h-72' src={FoodCategory3} alt=""  />
                    <h1 className='p-2 text-xl text-center'>glass noodles</h1>
                    <p className="text-center ">Price:<span className='font-bold'>$20</span> </p>
                </div>
                <div data-aos="fade-right" data-aos-duration="2000" className='block rounded-md p-6 mx-auto duration-300 transform border shadow-md hover:shadow-[#ead5cb] hover:scale-105'>
                    <img className='w-72 h-72' src={FoodCategory4} alt=""  />
                    <h1 className='p-2 text-xl text-center'>Tom Yum Goong</h1>
                    <p className="text-center ">Price:<span className='font-bold'>$21</span> </p>
                </div>
                <div  data-aos="flip-right" data-aos-duration="2000" className='block rounded-md p-6 mx-auto duration-300 transform border shadow-md hover:shadow-[#ead5cb] hover:scale-105 '>
                    <img className='rounded w-72 h-72' src={FoodCategory5} alt=""  />
                    <h1 className='p-2 text-xl text-center'>mini wrap</h1>
                    <p className="text-center">Price:<span className='font-bold'>$10</span> </p>
                </div>
                <div data-aos="fade-left" data-aos-duration="2000" className='block rounded-md p-6 mx-auto duration-300 transform border shadow-md hover:shadow-[#ead5cb] hover:scale-105'>
                    <img className='rounded w-72 h-72' src={FoodCategory6} alt=""  />
                    <h1 className='p-2 text-xl text-center'>traditional Thai fish recipe</h1>
                    <p className="text-center ">Price:<span className='font-bold'>$22</span> </p>
                </div>
            </div>
        </main>
    );
};

export default FoodCategory;