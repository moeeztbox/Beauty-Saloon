import Navbar from "../components/Navbar";
import Counter from "../components/home/Counter";
import FAQ from "../components/home/Faq";
import OurServices from "../components/home/OurServices";
import Slider from "../components/home/Slider";
import Subscribe from "../components/home/Subscribe";

function Home() {
  return (
    <div>
      <Navbar />
      {/* Spacer for Fixed Navbar */}
      <div className="h-16"></div>

      {/* Slider */}
      <Slider />

      {/* Our Services */}

      <OurServices />

      {/* Subscribe  */}
      <Subscribe />

      {/* Counter  */}
      <Counter />

      {/* FAQs */}
      <FAQ />
    </div>
  );
}

export default Home;
