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

const App = () => (
  <main className="relative bg-black text-white">
    <Nav />
    <section className="xl: padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <RecipeBuilder />
    </section>
    <section className="padding">
      <SuperQuality />
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

export default App;