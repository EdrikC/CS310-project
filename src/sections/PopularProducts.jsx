import { products } from "../constants"
import PopularProductCard from "../components/PopularProductCard"

const PopularProducts = () => {
  return (
    <section id="recipes"
    className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">Our 
        <span className="text-indigo-600"> Popular </span> 
        Recipes</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-grey">Experience top-notch recipes and eat with the comfort of ingredients that you have
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((product) => (
          <PopularProductCard
          key={product.name}
          {...product} />
        ))}
      </div>
    </section>
  )
}

export default PopularProducts