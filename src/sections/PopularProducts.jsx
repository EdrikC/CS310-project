import { products } from "../constants"
import PopularProductCard from "../components/PopularProductCard"
import { Fade, AttentionSeeker} from "react-awesome-reveal"
import { arrowDown } from "../assets/icons"

const PopularProducts = () => {
  return (
    <section id="recipes" className="max-container max-sm:mt-12 pt-32">
      <div className="flex flex-col justify-start gap-5">
        <Fade direction="down">
          <h2 className="text-4xl font-palanquin font-bold">Our
          <span className="text-indigo-600"> Popular </span>Recipes</h2>
        </Fade>
        <Fade direction="up">
          <p className="lg:max-w-lg mt-2 font-montserrat text-slate-grey">
            Experience top-notch recipes and eat with the comfort of ingredients that you have
          </p>
        </Fade>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((product, index) => (
          <Fade key={product.name} direction="left" delay={index * 100} duration={2500}>
            <PopularProductCard {...product} />
          </Fade>
        ))}
      </div>

      <div className="mt-52 flex flex-col items-center justify-center">
        <Fade direction="down">
        <h1 className="text-4xl font-bold text-indigo-600">View Our Recipe Builder</h1>
        </Fade>
        <Fade direction="up">
        <AttentionSeeker effect="tada">
        <img src={arrowDown} alt="downwards arrow" className="w-40 h-40 mt-14 -mb-24"/>
        </AttentionSeeker>
        </Fade>
      </div>


    </section>
  )
}

export default PopularProducts
