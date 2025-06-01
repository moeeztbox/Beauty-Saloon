import { ChevronRight, ChevronLeft } from "lucide-react";
function Appointment({ formData, handleChange, handleNext, handleBack }) {
  return (
    <div>
      <h2 className="text-3xl text-center great-vibes text-[#D4AF37]">
        Appointment Booking
      </h2>

      <div className="mb-4">
        <label className="block text-sm font-light mb-1 text-gray-200">
          Customer Name
        </label>
        <input
          type="text"
          name="customerName"
          value={formData.customerName}
          onChange={handleChange}
          placeholder="e.g., Zara Khan"
          className="w-full p-3 border border-[#D4AF37] text-gray-200/70 font-light outline-none"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block text-sm font-light mb-1 text-gray-200">
            Selected Service
          </label>
          <select
            name="selectedService"
            value={formData.selectedService}
            onChange={handleChange}
            className="w-full p-3 border border-[#D4AF37] text-black font-light outline-none bg-transparent appearance-none"
          >
            <option value="">Select a service</option>
            <option value="Haircut">Haircut</option>
            <option value="Hair Coloring">Hair Coloring</option>
            <option value="Facial">Facial</option>
            <option value="Manicure">Manicure</option>
            <option value="Pedicure">Pedicure</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-light mb-1 text-gray-200">
            Stylist
          </label>
          <select
            name="stylist"
            value={formData.stylist}
            onChange={handleChange}
            className="w-full p-3 border border-[#D4AF37] text-black font-light outline-none bg-transparent appearance-none"
          >
            <option value="">Select a stylist</option>
            <option value="Ayesha">Anwar</option>
            <option value="Sarah">Obaid</option>
            <option value="Maya">Haris</option>
            <option value="Tariq">Tariq</option>
            <option value="Ali">Ali</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="mb-4">
          <label className="block text-sm font-light mb-1 text-gray-200">
            Date
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-3 border border-[#D4AF37] text-gray-200/70 font-light outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-light mb-1 text-gray-200">
            Time
          </label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full p-3 border border-[#D4AF37] text-gray-200/70 font-light outline-none"
          />
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={handleBack}
          className="flex items-center gap-1 border border-[#D4AF37] text-gray-200/80 font-light hover:bg-[#D4AF37] hover:text-black px-4 py-2 transition duration-300"
        >
          <ChevronLeft /> Back
        </button>

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

export default Appointment;
