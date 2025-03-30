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
