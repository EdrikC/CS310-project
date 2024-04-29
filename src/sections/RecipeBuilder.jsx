import { useEffect, useState } from 'react';
import './RecipeBuilder.css';

const RecipeBuilder = () => {
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [recipes, setRecipes] = useState([]);
    const [displayRecipes, setDisplayRecipes] = useState([]);
    const [imgs, setImgs] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');
    const [filteredImgs, setFilteredImgs] = useState([]);

    useEffect(() => {
        fetch('/recipes')
        .then(response => response.json())
        .then(data => {
            const dataWithIds = data.map((item, i) => {
                return { id: i + 1, name: item };
            });
            setRecipes(dataWithIds);
            setDisplayRecipes(dataWithIds); // Initially display all recipes
        })
        .catch(error => console.error('Failed to fetch recipes:', error));
    }, []);

    useEffect(() => {
        fetch('/imgs')
        .then(response => response.json())
        .then(data => {
            setImgs(data.map((item, i) => ({ id: i + 1, name: item })));
            setFilteredImgs(data);
        })
        .catch(error => console.error('Failed to fetch images:', error));
    }, []);

    const handleRecipeClick = (event, recipeId) => {
        event.stopPropagation();
        setSelectedRecipe(selectedRecipe === recipeId ? null : recipeId);
    };

    const handleOverlayClick = () => {
        setSelectedRecipe(null);
    };

    const handleFilterClick = filterType => {
        setActiveFilter(filterType);
        let filteredRecipes;
        let filteredImages;
    
        // Assuming your recipes and images are initially sorted in the same order
        // and can be filtered based on these hardcoded ranges:
        const filterRanges = {
            'See All Recipes': [0, recipes.length],
            'Beef': [0, 47],
            'Chicken': [47, 82],
            'Lamb': [147, 162],
            'Pork': [184, 201],
            'Goat': [302, 303],
            'Pasta': [175, 183],
            'Seafood': [202, 231],
            'Side': [232, 257],
            'Starter': [258, 284],
            'Vegan': [285, 291],
            'Vegetarian': [285, 294],
            'Breakfast': [295, 302],
            'Lunch': [0, 257],
            'Dinner': [258, 285],
            'Dessert': [82, 146],
            'Miscellaneous': [163, 174]
        };
    
        if (filterRanges[filterType]) {
            const [start, end] = filterRanges[filterType];
            filteredRecipes = recipes.slice(start, end);
            filteredImages = imgs.slice(start, end);
        } else {
            // If filterType does not match, default to showing all
            filteredRecipes = recipes;
            filteredImages = imgs;
        }
    
        setDisplayRecipes(filteredRecipes);
        setFilteredImgs(filteredImages);
    };
    
    const allFilter = ['See All Recipes'];
    const proteinFilters = ['Beef', 'Chicken', 'Lamb', 'Pork', 'Goat'];
    const cuisineFilters = ['Pasta', 'Seafood', 'Side', 'Starter'];
    const mealTimesFilters= ['Breakfast', 'Lunch', 'Dinner', 'Dessert',];
    const otherFilters = ['Vegan', 'Vegetarian',  'Miscellaneous'];

    const renderFilterButtons = (filterList) => (
        filterList.map((type, index) => (
            <button key={index} onClick={() => handleFilterClick(type)} className={`px-4 py-2 font-semibold rounded-lg transition-colors ${activeFilter === type ? 'bg-blue-500 text-white' : 'bg-gray-300 hover:bg-gray-400 text-black'}`}
            style={{ flex: '1 0 auto', margin: '5px' }}>
                {type}
            </button>
        ))
    );

    return (
        <section id="recipebuilder" className="w-full flex flex-col md:flex-row justify-center min-h-screen bg-black text-white pt-40">
            {selectedRecipe !== null && <div className="overlay" onClick={handleOverlayClick}></div>}
            <div className="relative w-full md:w-2/5 flex flex-col justify-start items-center pt-4 md:pt-28 border-b-4 md:border-b-0 md:border-r-4 border-white pr-5">
                <div className="flex flex-wrap justify-center items-center pt-2 md:pt-10">
                    {renderFilterButtons(allFilter)}
                </div>
                <h1 className="text-xl md:text-4xl font-bold text-indigo-600 -mb-10">Protein</h1>
                <div className="flex flex-wrap justify-center items-center pt-2 md:pt-10">
                    {renderFilterButtons(proteinFilters)}
                </div>
                <h1 className="text-2xl md:text-4xl font-bold text-indigo-600 pt-5 -mb-10">Meal Types</h1>
                <div className="flex flex-wrap justify-center items-center pt-2 md:pt-10">
                    {renderFilterButtons(cuisineFilters)}
                </div>
                <h1 className="text-2xl md:text-4xl font-bold text-indigo-600 pt-5 -mb-10">Meal Times</h1>
                <div className="flex flex-wrap justify-center items-center pt-2 md:pt-10">
                    {renderFilterButtons(mealTimesFilters)}
                </div>
                <h1 className="text-2xl md:text-4xl font-bold text-indigo-600 pt-5 -mb-10">Other</h1>
                <div className="flex flex-wrap justify-center items-center pt-2 md:pt-10">
                    {renderFilterButtons(otherFilters)}
                </div>
            </div>
            <div className="relative w-full md:w-3/5 flex flex-col justify-start items-center pt-4 md:pt-28">
                <h1 className="text-2xl md:text-4xl font-bold text-indigo-600">Recipes</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 md:p-10 justify-center">
                    {displayRecipes.map((item, index) => (
                        <div key={index}
                            className={`border-2 border-white text-white rounded-lg shadow-md p-2 md:p-4 transition-transform duration-300
                            ${selectedRecipe === item.id ? 'centerBox scale-110 md:scale-150' : ''}`}
                            onClick={(e) => handleRecipeClick(e, item.id)}>
                            <h1 className="font-bold">{item.name}</h1>
                            <p>{'This is a placeholder description for the recipe.'}</p>
                            <img src={imgs[index].name} alt="food" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default RecipeBuilder;
