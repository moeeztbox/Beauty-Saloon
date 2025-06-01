import { useState, useEffect } from "react";

function Slider() {
  const [activeSlide, setActiveSlide] = useState(0);

  const images = [
    "https://cosmosalon.pk/wp-content/uploads/2023/05/Salon-Enviroment-q.jpg",
    "https://ngents.com.pk/wp-content/uploads/2022/11/bcc.jpg",
    "https://www.aminaz.com/img/banner/1.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div className="w-full min-h-screen">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === activeSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/50  group-hover:opacity-0 transition-opacity duration-500" />
      <div className="absolute inset-0 flex flex-col items-start justify-center text-left px-6  md:px-32 pt-32">
        <h2 className="text-white text-3xl sm:text-4xl md:text-6xl font-thin great-vibes tracking-widest mb-4 md:mb-6">
          Welcome
        </h2>
        <p className="text-white italic font-light opacity-70 text-base sm:text-lg mb-6 md:mb-10">
          Relax, recharge, and reveal your best self with our expert touch,
          experience tailored treatments,
          <br /> luxurious care, and the artistry that brings out your true
          beauty.
        </p>
        <a
          href="/booking"
          className="border-2 border-white text-white px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-sm font-semibold hover:border-[#D4AF37] hover:text-[#D4AF37] hover:scale-105 transition duration-200"
        >
          Book Your Appointment
        </a>
      </div>

      <button
        aria-label="Previous Slide"
        onClick={() =>
          setActiveSlide(
            activeSlide === 0 ? images.length - 1 : activeSlide - 1
          )
        }
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
      >
        &#10094;
      </button>

      <button
        aria-label="Next Slide"
        onClick={() => setActiveSlide((activeSlide + 1) % images.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
      >
        &#10095;
      </button>
    </div>
  );
}

export default Slider;
