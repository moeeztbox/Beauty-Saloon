import React from "react";

const services = [
  {
    name: "Haircut",
    description: "A stylish haircut to suit your personality.",
    price: "1500 PKR",
    duration: "45 minutes",
  },
  {
    name: "Massage",
    description: "A good massage to relax your body.",
    price: "1000 PKR",
    duration: "40 minutes",
  },
  {
    name: "Hair Coloring",
    description:
      "Add a splash of color to your hair with professional coloring.",
    price: "2000 PKR",
    duration: "60 minutes",
  },
  {
    name: "Facial",
    description: "Relax and rejuvenate your skin with a luxurious facial.",
    price: "1800 PKR",
    duration: "50 minutes",
  },
  {
    name: "Manicure",
    description: "Pamper your hands and nails with a professional manicure.",
    price: "1000 PKR",
    duration: "40 minutes",
  },
  {
    name: "Pedicure",
    description: "Relax and refresh your feet with a soothing pedicure.",
    price: "1200 PKR",
    duration: "50 minutes",
  },
];

function Services() {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-12">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-[#D4AF37] great-vibes mb-6">
          Our Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 border border-amber-200/30 "
            >
              <h2 className="text-2xl font-semibold text-[#D4AF37] great-vibes mb-4">
                {service.name}
              </h2>
              <p className="text-gray-300 italic mb-4">{service.description}</p>
              <p className="text-gray-200 italic font-light">
                <strong>Price:</strong> {service.price}
              </p>
              <p className="text-gray-200 italic font-light">
                <strong>Duration:</strong> {service.duration}
              </p>

              <a href="/booking">
                <button className="block w-1/2 mx-auto border border-[#D4AF37] text-white font-light py-3 hover:bg-[#D4AF37] hover:text-black transition duration-300">
                  Book Now
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
