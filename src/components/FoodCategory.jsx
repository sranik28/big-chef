import React from 'react';
import FoodCategory1 from '../assets/foodCategory1.jpg';
import FoodCategory2 from '../assets/foodCategory2.png';
import FoodCategory3 from '../assets/foodCategory3.jpg';
import FoodCategory4 from '../assets/foodCategory4.jpg';
import FoodCategory5 from '../assets/foodCategory5.jpg';
import FoodCategory6 from '../assets/foodCategory6.png';


const FoodCategory = () => {
    return (
        <main className='container '>
            <h1 className=' text-center text-4xl font-bold mt-16 '>Our Delicious Food</h1>
            <p className='text-gray-600 text-center mt-2'>All of our products are made from scratch using family recipes with only the highest quality ingredients.<br /> We bake and sell fresh daily to ensure only the best products are sold to our customers.</p>
            <div className='grid md:grid-cols-3 gap-8 my-10 p-6 rounded '>
                <div className='border p-6 block mx-auto shadow-md'>
                    <img className='w-72 h-72 rounded' src={FoodCategory1} alt="" srcset="" />
                    <h1 className='p-2 text-xl text-center'>Bitterballen (Dutch meatballs)</h1>
                    <p className="text-center ">Price:<span className='font-bold'>$15</span> </p>
                </div>
                <div  className='border p-6 block mx-auto shadow-md '>
                    <img className='w-72 h-72 rounded' src={FoodCategory2} alt="" srcset="" />
                    <h1 className='p-2 text-xl text-center'>French fry</h1>
                    <p className="text-center ">price:<span className='font-bold'>$5</span> </p>
                </div>
                <div  className='border p-6 block mx-auto shadow-md '>
                    <img className='w-72 h-72 rounded' src={FoodCategory3} alt="" srcset="" />
                    <h1 className='p-2 text-xl text-center'>Lamb Tagine</h1>
                    <p className="text-center ">Price:<span className='font-bold'>$20</span> </p>
                </div>
                <div className='border p-6 block mx-auto '>
                    <img className='w-72 h-72' src={FoodCategory4} alt="" srcset="" />
                    <h1 className='p-2 text-xl text-center'>Beef burger</h1>
                    <p className="text-center ">Price:<span className='font-bold'>$21</span> </p>
                </div>
                <div className='border p-6 block mx-auto shadow-md '>
                    <img className='w-72 h-72 rounded' src={FoodCategory5} alt="" srcset="" />
                    <h1 className='p-2 text-xl text-center'>Baingan Bharta</h1>
                    <p className="text-center">Price:<span className='font-bold'>$10</span> </p>
                </div>
                <div  className='border p-6 block mx-auto shadow-md '>
                    <img className='w-72 h-72 rounded' src={FoodCategory6} alt="" srcset="" />
                    <h1 className='p-2 text-xl text-center'>Pizza</h1>
                    <p className="text-center ">Price:<span className='font-bold'>$22</span> </p>
                </div>
            </div>
        </main>
    );
};

export default FoodCategory;