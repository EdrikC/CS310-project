import Button from "../components/Button";
import { useState } from 'react';
import ShoeCard from "../components/ShoeCard";
import { arrowRight } from '../assets/icons';
import { statistics, shoes } from '../constants';
import { bigShoe1 } from "../assets/images";
import { JackInTheBox, Slide, Zoom, Fade, AttentionSeeker} from "react-awesome-reveal";

/* Pro tip: When designing website, stick to around 3 colors and fonts to use to be consistent. */
const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
  return (
    <section
    id="home"
    /*w-full makes it take the full width of the screen smae with min-h-screen*/
    className="w-full flex xl:flex-row flex-col justify-center min-h-screen max-container bg-black text-white">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start max-xl:padding-x pt-28">
        <JackInTheBox>
          <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
            <span className=" xl:whitespace-nowrap relative z-10 pr-10">Eat from</span>
            <br />
            <span className="text-indigo-600 inline-block mt-3">Whatever</span> Is In Your Fridge
          </h1>
          <p className="font-monserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">QuickEatz is a place where you can find your next meal, based on whatever is left in your fridge. Use our variety of filters to find your next meal option.</p>
        </JackInTheBox>
        <Slide>
          <Button
            label="Explore Options"
            iconURL={arrowRight}
            href="#recipes"  // Add this line to pass the href prop
          />
        </Slide>

        <div className="flex justify-starts items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            
            <AttentionSeeker effect="tada">
            <div key={stat.label}>
            <Fade direction="left" cascade damping={0.2}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
              </Fade>
            </div>
            </AttentionSeeker>
            
          )) }
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-black text-white pr-12">
          <img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10" />

          <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
            {shoes.map((shoe, index) => (
              <div key={shoe}>
                <ShoeCard
                imgURL={shoe}
                changeBigShoeImage=
                {(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}/>
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}

export default Hero