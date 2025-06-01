import { ChevronRight, ChevronLeft } from "lucide-react";

function Payment({ formData, handleChange, handleNext, handleBack }) {
  return (
    <div>
      <h2 className="text-3xl text-center great-vibes text-[#D4AF37] my-2">
        Payment
      </h2>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-light mb-1 text-gray-200">
            Cardholder Name
          </label>
          <input
            type="text"
            name="cardName"
            value={formData.cardName}
            onChange={handleChange}
            placeholder="e.g., Zara Khan"
            className="w-full p-3 border border-[#D4AF37] text-gray-200/70 font-light bg-transparent outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-light mb-1 text-gray-200">
            Card Number
          </label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="1234 5678 9012 3456"
            className="w-full p-3 border border-[#D4AF37] text-gray-200/70 font-light bg-transparent outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-light mb-1 text-gray-200">
            Expiry Date
          </label>
          <input
            type="text"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            placeholder="MM/YY"
            className="w-full p-3 border border-[#D4AF37] text-gray-200/70 font-light bg-transparent outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-light mb-1 text-gray-200">
            CVV
          </label>
          <input
            type="password"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            placeholder="123"
            className="w-full p-3 border border-[#D4AF37] text-gray-200/70 font-light bg-transparent outline-none"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-light mb-1 text-gray-200">
          Billing Address
        </label>
        <input
          type="text"
          name="billingAddress"
          value={formData.billingAddress}
          onChange={handleChange}
          placeholder="Street, City, Country"
          className="w-full p-3 border border-[#D4AF37] text-gray-200/70 font-light bg-transparent outline-none"
        />
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

export default Payment;
