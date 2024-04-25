import {
  Hero,
  CustomerReviews,
  Footer,
  PopularProducts,
  RecipeBuilder,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality} from './sections';
  import Nav from './components/Nav';
  import { useEffect, useState } from 'react';
  import { Fade } from 'react-awesome-reveal';

const App = () => {
  // Pulls all the keys and values from the /test endpoint for use in iteration.
  // const [Test, setTest] = useState([]);
  // useEffect(() => {
  //   fetch('/test')
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data); // log the data
  //       setTest(Object.keys(data).map(key => data[key]));
  //     });
  // }, []);
  
  return (
  <main className="relative bg-black text-white">
    <Nav />
    <section className="xl: padding-l wide:padding-r padding-b">
      <Hero />
      {/* Iterates for (# of keys) and pulls each of their values from the /test endpoint.
      {Test.map((value, index) => (
        <p key={index}>The value pulled from the Flask API is: {value}</p>
      ))} */}
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <Fade direction="left" duration={2500}>
      <RecipeBuilder />
      </Fade>
    </section>
    <section className="padding">
      <Fade direction='left' duration={2000}>
      <SuperQuality />
      </Fade>
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
  )
}

export default App;