import { star } from "../assets/icons"
import { star2 } from "../assets/icons"
import { Fade } from "react-awesome-reveal"

const PopularProductCard = ({imgURL, name, price, rating}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <Fade cascade damping={0.1}>
        <img
        src={imgURL}
        alt={name}
        //This is a specific px number so it's put in square brackets.
        className="w-[280px] h-[280px]"/>
        <div className="mt-8 flex justify-start gap-2.5" >
            <img
            src={star2}
            alt="rating"
            width={24}
            height={24} />
            <p className="font-monserrat text-xl leading-normal text-slate-grey">({rating})</p>
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
        <a href="#recipebuilder" className="mt-2 font-semibold font-montserrat text-pink-700 text-2xl leading-normal">
          {price}
        </a>
        </Fade>
    </div>
  )
}

export default PopularProductCard