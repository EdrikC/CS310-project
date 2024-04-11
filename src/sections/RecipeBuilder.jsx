const RecipeBuilder = () => {
    return (
        <section
            id="home"
            className="w-full flex flex-row justify-center min-h-screen max-container bg-black text-white">
            <div className="relative w-2/5 flex flex-col justify-start items-start max-xl:padding-x pt-28 border-r-4 border-white mr-80">
                <h1 className="font-palanquin text-4xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
                    <span className="xl:whitespace-nowrap relative z-10">Filters</span>
                </h1>
            </div>
            <div className="relative w-3/5 flex flex-col justify-start items-start xl:min-h-screen bg-black text-white pt-28">
                <h1 className="font-palanquin text-4xl max-sm:text-[72px] max-sm:leading-[82px] font-bold pl-96">Recipes</h1>
            </div>
        </section>
    );
}

export default RecipeBuilder;
