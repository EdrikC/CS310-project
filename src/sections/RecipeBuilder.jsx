import React, { useState } from 'react';

const RecipeBuilder = () => {
    // State for filters buttons
    const [highlightedFilters, setHighlightedFilters] = useState(Array(18).fill(false));
    const filterButtonNames = ['Potato', 'Carrot', 'Tomato', 'Bell Pepper', 'Lettuce', 'Rice', 'Onion', 'Garlic', 'Cucumber', 'Mushroom', 'Broccoli', 'Chicken', 'Corn', 'Fish', 'Pasta', 'Ground Beef', 'Pork', 'Tofu'];

    // State for cuisines buttons
    const [highlightedCuisines, setHighlightedCuisines] = useState(Array(8).fill(false));
    const cuisineButtonNames = ['Italian', 'Mexican', 'Chinese', 'Japanese', 'French', 'Indian', 'Thai', 'American'];

    // Function to toggle the highlighted state of a specific button for filters
    const toggleHighlightFilters = (index) => {
        setHighlightedFilters(highlightedFilters.map((item, idx) => idx === index ? !item : item));
    };

    // Function to toggle the highlighted state of a specific button for cuisines
    const toggleHighlightCuisines = (index) => {
        setHighlightedCuisines(highlightedCuisines.map((item, idx) => idx === index ? !item : item));
    };

    // Generate filters buttons dynamically
    const filterButtons = highlightedFilters.map((isHighlighted, index) => (
        <button
            key={index}
            onClick={() => toggleHighlightFilters(index)}
            style={{ flex: '1 0 12.5%', margin: '5px' }} // Each button takes up 1/8th of the line
            className={`px-4 py-2 font-semibold text-white rounded-lg transition-colors ${
                isHighlighted ? 'bg-blue-500' : 'bg-gray-300 hover:bg-gray-400 text-slate-700'
            }`}
        >
            {filterButtonNames[index]}
        </button>
    ));

    // Generate cuisines buttons dynamically
    const cuisineButtons = highlightedCuisines.map((isHighlighted, index) => (
        <button
            key={index}
            onClick={() => toggleHighlightCuisines(index)}
            style={{ flex: '1 0 12.5%', margin: '5px' }} // Each button takes up 1/8th of the line
            className={`px-4 py-2 font-semibold text-white rounded-lg transition-colors ${
                isHighlighted ? 'bg-blue-500' : 'bg-gray-300 hover:bg-gray-400 text-slate-700'
            }`}
        >
            {cuisineButtonNames[index]}
        </button>
    ));

    return (
        <section
            id="home"
            className="w-full flex flex-row justify-center min-h-screen bg-black text-white">
            <div className="relative w-2/5 flex flex-col justify-start items-center pt-28 border-r-4 border-white pr-5">
                <h1 className="text-4xl font-bold">
                    <span className="whitespace-nowrap relative z-10 text-indigo-600">Ingredients</span>
                </h1>
                <div className="flex flex-wrap justify-center items-center pt-10">
                    {filterButtons}
                </div>
                <h2 className="text-4xl font-bold mt-32">
                    <span className="whitespace-nowrap relative z-10 text-indigo-600">Cuisines</span>
                </h2>
                <div className="flex flex-wrap justify-center items-center pt-10">
                    {cuisineButtons}
                </div>
            </div>
            <div className="relative w-3/5 flex flex-col justify-start items-start pt-28">
                <h1 className="text-4xl font-bold pl-96 text-indigo-600">Recipes</h1>
            </div>
        </section>
    );
}

export default RecipeBuilder;
