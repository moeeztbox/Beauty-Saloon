import Navbar from "../components/Navbar";
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
      {/* Subscribe  */}
      <Subscribe />
    </div>
  );
}

export default Home;
