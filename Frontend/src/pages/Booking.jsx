import React, { useState } from "react";
import { ChevronRight, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Booking() {
  const steps = [
    "Service Selection",
    "Appointment Booking",
    "Payment",
    "Feedback",
  ];

  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    serviceName: "",
    price: "",
    duration: "",
    customerName: "",
    selectedService: "",
    stylist: "",
    date: "",
    time: "",
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    billingAddress: "",
    rating: 0,
    feedback: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRating = (value) => {
    setFormData({ ...formData, rating: value });
  };

  const handleNext = () => {
    if (step === 0) {
      const { serviceName, price, duration } = formData;
      if (!serviceName || !price || !duration) {
        alert("Please fill all fields in Service Selection");
        return;
      }
    }

    if (step === 1) {
      const { customerName, selectedService, stylist, date, time } = formData;
      if (!customerName || !selectedService || !stylist || !date || !time) {
        alert("Please fill all fields in Appointment Booking");
        return;
      }
    }

    if (step === 2) {
      const { cardName, cardNumber, expiryDate, cvv, billingAddress } =
        formData;
      if (!cardName || !cardNumber || !expiryDate || !cvv || !billingAddress) {
        alert("Please fill all fields in Payment");
        return;
      }
    }

    setStep((prev) => prev + 1);
  };

  const handleSubmit = () => {
    console.log("Submitted Feedback:", {
      rating: formData.rating,
      feedback: formData.feedback,
    });

    alert("Thank you for your feedback! 💖");
    navigate("/");
  };

  return (
    <div className="w-full h-full">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://ngents.com.pk/wp-content/uploads/2018/12/website-final.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60" />

      {/* Form Content */}
      <div className="relative z-20 max-w-3xl mx-auto   px-6 py-10 border border-amber-200/50 text-white ">
        {/* Progress Bar */}
        <div className="flex justify-between items-center">
          {steps.map((label, index) => (
            <div key={index} className="flex-1">
              <div
                className={`h-2 rounded-full ${
                  index <= step ? "bg-[#D4AF37]" : "bg-gray-600"
                } transition-all duration-500`}
              ></div>
            </div>
          ))}
        </div>

        {/* Step 1: Service Selection */}
        {step === 0 && (
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

            <div className="flex justify-center">
              <button
                onClick={handleNext}
                className="flex items-center gap-2 border border-[#D4AF37] text-gray-200/80 font-light hover:bg-[#D4AF37] hover:text-black px-6 py-2 transition duration-300"
              >
                Next <ChevronRight />
              </button>
            </div>
          </div>
        )}
        {/* Step 2: Appointment Booking */}
        {step === 1 && (
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

            <div className="flex justify-center mt-6">
              <button
                onClick={handleNext}
                className="flex items-center gap-2 border border-[#D4AF37] text-gray-200/80 font-light hover:bg-[#D4AF37] hover:text-black px-6 py-2 transition duration-300"
              >
                Next <ChevronRight />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Payment */}
        {step === 2 && (
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

            <div className="flex justify-center mt-6">
              <button
                onClick={handleNext}
                className="flex items-center gap-2 border border-[#D4AF37] text-gray-200/80 font-light hover:bg-[#D4AF37] hover:text-black px-6 py-2 transition duration-300"
              >
                Next <ChevronRight />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Feedback */}
        {step === 3 && (
          <div>
            <h2 className="text-2xl text-center great-vibes text-[#D4AF37] my-3">
              Feedback & Ratings
            </h2>

            <div className="mb-4">
              <label className="block text-sm font-light mb-1 text-gray-200">
                Rate Your Experience
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={28}
                    className={`cursor-pointer ${
                      star <= formData.rating
                        ? "fill-[#D4AF37] text-[#D4AF37]"
                        : "text-gray-500"
                    }`}
                    onClick={() => handleRating(star)}
                  />
                ))}
              </div>
            </div>

            <div className="mb-6 mt-4">
              <label className="block text-sm font-light mb-1 text-gray-200">
                Feedback (Optional)
              </label>
              <textarea
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                placeholder="Share your thoughts..."
                className="w-full p-3 border border-[#D4AF37] text-gray-200/70 italic placeholder:italic font-light bg-transparent outline-none"
                rows={4}
              ></textarea>
            </div>

            {/* Center the Submit button */}
            <div className="flex justify-center mt-6">
              <button
                onClick={handleSubmit}
                className="flex items-center gap-2 px-6 py-2 border border-[#D4AF37] text-gray-200/80 font-light hover:bg-[#D4AF37] hover:text-black transition duration-300"
              >
                Submit Feedback
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Booking;
