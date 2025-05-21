import React from "react";
import { ChevronRight } from "lucide-react";

function ServiceSelection({ formData, handleChange, handleNext }) {
  return (
    <div>
      <h2 className="text-3xl text-center great-vibes font-bold text-[#D4AF37] my-6">
        Service Selection
      </h2>

      <div className="mb-4">
        <label className="block text-sm font-light mb-1 text-gray-200">
          Service Name
        </label>
        <select
          name="serviceName"
          value={formData.serviceName}
          onChange={handleChange}
          className="w-full p-3 border border-[#D4AF37] text-gray-200/70 font-light outline-none "
        >
          <option value="">Select a service</option>
          <option value="Haircut">Haircut</option>
          <option value="Hair Coloring">Hair Coloring</option>
          <option value="Facial">Facial</option>
          <option value="Manicure">Manicure</option>
          <option value="Pedicure">Pedicure</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block text-sm font-light mb-1 text-gray-200">
            Price (PKR)
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="e.g., 1500"
            className="w-full p-3 border border-[#D4AF37] text-gray-200/70 font-light outline-none"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-light mb-1 text-gray-200 ">
            Duration (Minutes)
          </label>
          <input
            type="number"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            placeholder="e.g., 45"
            className="w-full p-3 border border-[#D4AF37] text-gray-200/70 font-light outline-none"
          />
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button
          onClick={handleNext}
          className="flex items-center gap-2 border border-[#D4AF37] text-gray-200/80 font-light hover:bg-[#D4AF37] hover:text-black px-6 py-2 transition duration-300"
        >
          Next <ChevronRight />
        </button>
      </div>
    </div>
  );
}

export default ServiceSelection;
