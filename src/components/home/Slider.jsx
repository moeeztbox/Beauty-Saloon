import React from "react";
import { useState, useEffect } from "react";

function Slider() {
  const [activeSlide, setActiveSlide] = useState(0);

  const images = [
    "https://cosmosalon.pk/wp-content/uploads/2023/05/Salon-Enviroment-q.jpg",
    "https://ngents.com.pk/wp-content/uploads/2022/11/bcc.jpg",
    "https://www.aminaz.com/img/banner/1.jpg",
  ];

  // Auto-Slide Functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div className="relative w-full h-[400px] md:h-[450px] lg:h-[550px] overflow-hidden">
      {/* Slides */}
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
      <div className="absolute inset-0 bg-black opacity-70 group-hover:opacity-0 transition-opacity duration-500"></div>
      <div className="absolute inset-0 flex flex-col items-start justify-center text-left px-6 md:px-32">
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
          Welcome
        </h2>
        <p className="text-white text-base sm:text-lg mb-6 md:mb-10">
          At [Your Salon Name], we believe that beauty is more than just a
          look—it’s a feeling. From the moment you walk through our doors,
          you’ll be welcomed into a space designed for relaxation, self-care,
          and confidence. Our expert stylists and beauty professionals are here
          to bring out your best, using the finest techniques and products to
          create a look that’s uniquely you. Sit back, unwind, and let us pamper
          you—because you deserve it!
        </p>
        <a
          href="/booking"
          className="border-2 border-pink-400 text-pink-400 px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-pink-600 transition duration-300"
        >
          Book Your Appointment
        </a>
      </div>

      {/* Previous Button */}
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

      {/* Next Button */}
      <button
        aria-label="Next Slide"
        onClick={() => setActiveSlide((activeSlide + 1) % images.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
      >
        &#10095;
      </button>

      {/* Indicators */}
    </div>
  );
}

export default Slider;
