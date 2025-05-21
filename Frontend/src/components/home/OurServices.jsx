import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const OurServices = () => {
  const services = [
    {
      name: "Hair",
      img: "https://cosmosalon.pk/wp-content/uploads/2023/05/HAIR-1920-x-1200-1.jpg",
      path: "/hair",
    },
    {
      name: "Beard",
      img: "https://www.aminaz.com/img/banner/1.jpg",
      path: "/beard",
    },
    {
      name: "Facial",
      img: "https://cosmosalon.pk/wp-content/uploads/2023/05/skin-1920-x-1200-min.jpg",
      path: "/facial",
    },
    {
      name: "Photography",
      img: "https://cosmosalon.pk/wp-content/uploads/2023/05/Photography-1920-x-1200-min.jpg",
      path: "/photography",
    },
    {
      name: "Makeup",
      img: "https://cosmosalon.pk/wp-content/uploads/2023/05/Photography-123-1920-x-1200-min.jpg",
      path: "/makeup",
    },
  ];
  return (
    <div className="w-full h-auto px-5">
      <h1 className="great-vibes sm:pl-32 text-center sm:text-left text-5xl sm:text-6xl font-bold text-[#D4AF37] my-12">
        Services
      </h1>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true} // Enables infinite looping
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-slide
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <a
              href={service.path}
              className="block group relative overflow-hidden rounded-xl"
            >
              {/* Service Image */}
              <img
                src={service.img}
                alt={service.name}
                className="w-full h-100 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gray Overlay - Applied to all images */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>

              {/* Text Overlay */}
              <div className="group">
                <h2 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold great-vibes group-hover:-translate-y-35 duration-300 transition-all">
                  {service.name}
                </h2>
                <p className="absolute -bottom-50 italic  text-white z-50 group-hover:block px-5 py-3 group-hover:-translate-y-50 duration-600 transition-all">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                  cupiditate. Impedit at, neque, nam officiis ea repudiandae eos
                  praesentium dolore laudantium fugiat provident ullam
                  accusantium sed aliquam odit, minus fuga! Lorem ipsum dolor
                  sit, amet consectetur adipisicing elit. Ipsa cumque dolorem
                  ipsum quisquam recusandae doloremque reiciendis deserunt unde
                  obcaecati voluptatem?
                </p>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurServices;
