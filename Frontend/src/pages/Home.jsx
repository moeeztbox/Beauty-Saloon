import Counter from "../components/home/Counter";
import GalleryPic from "../components/home/GalleryPic";
import OurServices from "../components/home/OurServices";
import Slider from "../components/home/Slider";
import Subscribe from "../components/home/Subscribe";

function Home() {
  return (
    <div>
      <Slider />

      <GalleryPic />

      <Counter />

      <OurServices />

      <Subscribe />
    </div>
  );
}

export default Home;
