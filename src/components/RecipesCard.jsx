import React from 'react';

const RecipesCard = () => {

    const { recipe_name, cooking_method, food_image, ratings, ingredient } = singleCard;

    return (
        <div>
            <main className="mt-16">
                <div className="border w-[400px] h-[730px] rounded-md  p-4 shadow-lg">
                    <img className="w-full h-72 block mx-auto rounded-md" src={food_image} alt="" />
                    <p className="font-semibold my-3 text-3xl"> {recipe_name}</p>
                    <p className="font-semibold">Food rating: <span className="font-semibold">{ratings}</span></p>
                    <div>
                        <ul >
                            <li className="flex gap-3">
                                {ingredient}
                            </li>
                        </ul>
                    </div>
                    <p className="font-semibold">Cooking Method: <span className="text-justify text-zinc-500">{cooking_method}</span></p>
                </div>
            </main>
        </div>
    );
};

export default RecipesCard;