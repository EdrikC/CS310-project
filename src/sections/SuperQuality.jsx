import Button from "../components/Button";
import { shoe8 } from "../assets/images";
import { Roll } from "react-awesome-reveal";

const SuperQuality = () => {
  return (
    <section
    id="about-us"
    className="flex justify-between item-center max-lg:flex-col gap-10 w-full max-container pt-32">
      <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin text-4xl capitalize font-bold">
            We Provide You
            <span className="text-indigo-600"> Super Quality </span>
             Recipes
          </h2>
          <p className="mt-4 lg:max-2-lg info-text">Welcome to QuickEatz, where cooking meets convenience! We understand the challenges of meal planning, especially when you're staring at a list of ingredients wondering what to make. That's where we come in.</p>
          <p className="mt-6 lg:max-w-lg info-text">At QuickEatz, we believe that cooking should be enjoyable, stress-free, and accessible to everyone, regardless of culinary expertise. Whether you're a seasoned chef looking for inspiration or a beginner in the kitchen, our platform is designed to make cooking easier and more enjoyable.</p>
          <p className="mt-6 lg:max-w-lg info-text">Our mission is simple: to help you create delicious meals using ingredients you already have on hand. No more last-minute trips to the grocery store or staring blankly into the fridge. With our innovative recipe generator, simply input your ingredients, and we'll do the rest. Our advanced algorithm will analyze your list and generate a variety of recipes tailored to your ingredients, dietary preferences, and cooking skills.</p>
          <p className="mt-6 lg:max-w-lg info-text">But we're more than just a recipe generator. We're a community of food lovers, passionate about sharing our love for cooking and empowering others to unleash their creativity in the kitchen. Whether you're looking for quick weeknight dinners, healthy lunch ideas, or indulgent desserts, you'll find inspiration and guidance here.</p>
          <p className="mt-6 lg:max-w-lg info-text">So why wait? Join the QuickEatz community today and discover the joy of cooking with ease. Whether you're cooking for one, feeding a family, or entertaining guests, let us help you turn your ingredients into memorable meals.</p>
          <p className="mt-6 lg:max-w-lg info-text">Happy cooking!</p>
          <p className="mt-6 lg:max-w-lg info-text">-The QuickEatz Team</p>
          <div className="mt-11">
          <Button 
            label="View Recipes" 
            href="#recipes"  // Makes the button act as a link
          />
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <Roll>
          <img
            src={shoe8}
            alt="shoe8"
            width={570}
            height={522}
            className="object-contain" />
          </Roll>
        </div>
    </section>
  )
}

export default SuperQuality