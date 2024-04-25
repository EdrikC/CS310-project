import './RecipeBuilder.css';
import { useEffect, useState } from 'react';
import { shoe5 } from '../assets/images';
import { shoe6 } from '../assets/images';

const RecipeBuilder = () => {
    const times = 303; // Number of recipes
    const testArray = Array(times).fill(null);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    
    const [Test, setTest] = useState([]);
    useEffect(() => {
        fetch('/test')
        .then(response => response.json())
        .then(data => {
            console.log(data); // log the data
            setTest(Object.keys(data).map(key => data[key]));
        });
        }, []);
 
    const handleRecipeClick = (index) => {
        if (selectedRecipe === index) {
            setSelectedRecipe(null); // Deselect if the same recipe is clicked again
        } else {
            setSelectedRecipe(index); // Select the new recipe
        }
    };

    const handleOverlayClick = () => {
        setSelectedRecipe(null); // Reset when clicking outside any recipe box
    };

    // State for filters buttons
    const [highlightedFilters, setHighlightedFilters] = useState(Array(5).fill(false));
    const filterButtonNames = ['Beef', 'Chicken', 'Goat', 'Lamb', 'Pork'];

    // State for cuisines buttons
    const [highlightedCuisines, setHighlightedCuisines] = useState(Array(9).fill(false));
    const cuisineButtonNames = ['Pasta', 'Seafood', 'Breakfast', 'Starter', 'Dessert', 'Side', 'Vegetarian', 'Vegan','Miscellaneous'];

    const titles = Test
    const descriptions = ["This would be the description. Ex. Doesn't this pasta look yummy. You can make it TODAY. If not, leave the website.", "This would be the description test 2. Ex. Doesn't this pasta look yummy. You can make it TODAY. If not, leave the website."];
    const cookTimes = ["Cook Time: 10 mins", "Cook Time: 40 mins", "Cook Time: 50 mins", "Cook Time: 20 mins", "Cook Time: 30 mins"];
    const images = [<img src="https://www.themealdb.com/images/media/meals/cuio7s1555492979.jpg" alt="food" />]; //Image Array

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
                isHighlighted ? 'bg-blue-500' : 'bg-gray-300 hover:bg-gray-400 text-black'
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
                isHighlighted ? 'bg-blue-500' : 'bg-gray-300 hover:bg-gray-400 text-black'
            }`}
        >
            {cuisineButtonNames[index]}
        </button>
    ));

    return (
        <section id="recipes" className="w-full flex flex-col md:flex-row justify-center min-h-screen bg-black text-white">
            {selectedRecipe !== null && <div className="overlay" onClick={handleOverlayClick}></div>}
            <div className="relative w-full md:w-2/5 flex flex-col justify-start items-center pt-4 md:pt-28 border-b-4 md:border-b-0 md:border-r-4 border-white pr-5">
                <h1 className="text-2xl md:text-4xl font-bold">
                    <span className="whitespace-nowrap relative z-10 text-indigo-600">Protein</span>
                </h1>
                <div className="flex flex-wrap justify-center items-center pt-2 md:pt-10">
                    {filterButtons}
                </div>
                <h2 className="text-2xl md:text-4xl font-bold mt-8 md:mt-32">
                    <span className="whitespace-nowrap relative z-10 text-indigo-600">Cuisines</span>
                </h2>
                <div className="flex flex-wrap justify-center items-center pt-2 md:pt-10">
                    {cuisineButtons}
                </div>
            </div>
            <div className="relative w-full md:w-3/5 flex flex-col justify-start items-center pt-4 md:pt-28">
                <h1 className="text-2xl md:text-4xl font-bold text-indigo-600">Recipes</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 md:p-10 justify-center">
                    {testArray.map((item, index) => (
                        <div
                        key={index}
                        onClick={() => handleRecipeClick(index)}
                        className={`border-2 border-white text-white rounded-lg shadow-md p-2 md:p-4 transition-transform duration-300 ${selectedRecipe === index ? 'centerBox scale-110 md:scale-150' : ''}`}
                        style={{ cursor: 'pointer' }}
                        >
                            <h1 className="font-bold">{titles[index % titles.length]}</h1>
                            <p>{descriptions[index % descriptions.length]}</p>
                            <br />
                            <p>{cookTimes[index % cookTimes.length]}</p>
                            <img src={images[index % images.length].props.src} alt={`Image for box ${index + 1}`}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default RecipeBuilder;
