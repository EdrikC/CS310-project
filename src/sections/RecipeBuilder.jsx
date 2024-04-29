import { useEffect, useState } from 'react';

const RecipeBuilder = () => {
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [recipes, setRecipes] = useState([]); // Array to hold all fetched recipes
    const [displayRecipes, setDisplayRecipes] = useState([]); // Array to hold recipes to be displayed
    const [imgs, setImgs] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All'); // State to track the active filter
    const [filteredImgs, setFilteredImgs] = useState([]); // Array to hold filtered images

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
            const dataWithimgs = data.map((item, i) => {
                return { id: i + 1, name: item };
            });
            setImgs(dataWithimgs);
        })
        .catch(error => console.error('Failed to fetch images:', error));
    }, []);

    const handleFilterClick = filterType => {
        setActiveFilter(filterType);
        let filteredRecipes;
        let filteredImages;
        switch(filterType) {
          case 'Beef':
            filteredRecipes = recipes.slice(0, 47);
            filteredImages = imgs.slice(0, 47);
            break;
          case 'Chicken':
            filteredRecipes = recipes.slice(47, 82);
            filteredImages = imgs.slice(47, 82);
            break;
            case 'Dessert':
            filtered = recipes.slice(82, 147);
            filteredImages = imgs.slice(82, 147);
            break;
            case 'Lamb':
            filtered = recipes.slice(147, 162);
            filteredImages = imgs.slice(147, 162);
            break;
          default:
            filteredRecipes = recipes;
            filteredImages = imgs;
        }
        setDisplayRecipes(filteredRecipes);
        setFilteredImgs(filteredImages); // Update the filtered images
    };
    

    const handleOverlayClick = () => setSelectedRecipe(null);
    const images = filteredImgs.map((img, index) => <img key={index} src={img.name} alt="food" />);
    const descriptions = ["This would be the description. Ex. Doesn't this pasta look yummy. You can make it TODAY. If not, leave the website.", "This would be the description test 2. Ex. Doesn't this pasta look yummy. You can make it TODAY. If not, leave the website."];


    const filterButtonNames = ['All', 'Beef', 'Chicken', 'Goat', 'Lamb', 'Pork'];
    const filterButtons = filterButtonNames.map((type, index) => (
        <button key={index} onClick={() => handleFilterClick(type)} className={`px-4 py-2 font-semibold text-white rounded-lg transition-colors ${activeFilter === type ? 'bg-blue-500' : 'bg-gray-300 hover:bg-gray-400'}`} style={{ flex: '1 0 auto', margin: '5px' }}>
            {type}
        </button>
    ));
    return (
        <section id="recipes" className="w-full flex flex-col md:flex-row justify-center min-h-screen bg-black text-white">
            {selectedRecipe !== null && <div className="overlay" onClick={handleOverlayClick}></div>}
            <div className="relative w-full md:w-2/5 flex flex-col justify-start items-center pt-4 md:pt-28 border-b-4 md:border-b-0 md:border-r-4 border-white pr-5">
                <h1 className="text-2xl md:text-4xl font-bold"><span className="whitespace-nowrap relative z-10 text-indigo-600">Protein</span></h1>
                <div className="flex flex-wrap justify-center items-center pt-2 md:pt-10">{filterButtons}</div>
            </div>
            <div className="relative w-full md:w-3/5 flex flex-col justify-start items-center pt-4 md:pt-28">
                <h1 className="text-2xl md:text-4xl font-bold text-indigo-600">Recipes</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 md:p-10 justify-center">
                    {displayRecipes.map((item, index) => (
                        <div key={index} className="border-2 border-white text-white rounded-lg shadow-md p-2 md:p-4 transition-transform duration-300">
                            <h1 className="font-bold">{item.name}</h1>
                            <p>{descriptions[index % descriptions.length]}</p>
                            <div>{images[index]}</div> {/* Render only the corresponding image */}
                            {/* More content here */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default RecipeBuilder;