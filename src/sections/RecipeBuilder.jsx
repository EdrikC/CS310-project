const RecipeBuilder = () => {
    return (
        <section
            id="home"
            className="w-full flex flex-row justify-center min-h-screen max-container bg-black text-white">
            <div className="relative w-2/5 flex flex-col justify-center items-start max-xl:padding-x pt-28">
                <h1 className="font-palanquin text-4xl max-sm:text-[72px] max-sm:leading-[82px] font-bold border-r-4 border-white">
                    <span className="xl:whitespace-nowrap relative z-10 pr-10">Filters</span>
                </h1>
            </div>
            <div className="relative w-3/5 flex justify-center items-center xl:min-h-screen bg-black text-white pt-28">
                <h1 className="font-palanquin text-4xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">Recipes</h1>
            </div>
        </section>
    );
}

export default RecipeBuilder;
