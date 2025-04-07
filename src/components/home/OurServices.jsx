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
    <div className="w-full py-10 px-5">
      <h1 className="text-center text-5xl font-bold text-black mb-12">
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
              <div className="absolute inset-0 bg-black opacity-70 group-hover:opacity-0 transition-opacity duration-500"></div>

              {/* Text Overlay */}
              <h2 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                {service.name}
              </h2>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurServices;
