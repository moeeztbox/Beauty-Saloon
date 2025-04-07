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
    <div className="max-w-3xl mx-auto mb-10 mt-28 px-6 py-10 rounded-xl bg-gray-900 text-white shadow-2xl">
      {/* Progress Bar */}
      <div className="flex justify-between items-center mb-10">
        {steps.map((label, index) => (
          <div key={index} className="flex-1">
            <div
              className={`h-2 rounded-full ${
                index <= step ? "bg-pink-400" : "bg-gray-600"
              } transition-all duration-500`}
            ></div>
          </div>
        ))}
      </div>

      {/* Step 1: Service Selection */}
      {step === 0 && (
        <div>
          <h2 className="text-2xl font-bold text-pink-400 mb-6">
            Service Selection
          </h2>

          {/* inputs... */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              Service Name
            </label>
            <input
              type="text"
              name="serviceName"
              value={formData.serviceName}
              onChange={handleChange}
              placeholder="e.g., Haircut"
              className="w-full p-3 rounded-lg bg-gray-800 border border-pink-400 text-white"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              Price (PKR)
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="e.g., 1500"
              className="w-full p-3 rounded-lg bg-gray-800 border border-pink-400 text-white"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-1">
              Duration (Minutes)
            </label>
            <input
              type="number"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="e.g., 45"
              className="w-full p-3 rounded-lg bg-gray-800 border border-pink-400 text-white"
            />
          </div>

          <button
            onClick={handleNext}
            className="flex items-center gap-2 bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-lg transition"
          >
            Next <ChevronRight />
          </button>
        </div>
      )}

      {/* Step 2: Appointment Booking */}
      {step === 1 && (
        <div>
          <h2 className="text-2xl font-bold text-pink-400 mb-6">
            Appointment Booking
          </h2>

          {/* inputs... */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              Customer Name
            </label>
            <input
              type="text"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              placeholder="e.g., Zara Khan"
              className="w-full p-3 rounded-lg bg-gray-800 border border-pink-400 text-white"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              Selected Service
            </label>
            <input
              type="text"
              name="selectedService"
              value={formData.selectedService}
              onChange={handleChange}
              placeholder="e.g., Facial"
              className="w-full p-3 rounded-lg bg-gray-800 border border-pink-400 text-white"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Stylist</label>
            <input
              type="text"
              name="stylist"
              value={formData.stylist}
              onChange={handleChange}
              placeholder="e.g., Ayesha"
              className="w-full p-3 rounded-lg bg-gray-800 border border-pink-400 text-white"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-800 border border-pink-400 text-white"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-1">Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-800 border border-pink-400 text-white"
            />
          </div>

          <button
            onClick={handleNext}
            className="flex items-center gap-2 bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-lg transition"
          >
            Next <ChevronRight />
          </button>
        </div>
      )}

      {/* Step 3: Payment */}
      {step === 2 && (
        <div>
          <h2 className="text-2xl font-bold text-pink-400 mb-6">Payment</h2>

          {/* payment inputs... */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              Cardholder Name
            </label>
            <input
              type="text"
              name="cardName"
              value={formData.cardName}
              onChange={handleChange}
              placeholder="e.g., Zara Khan"
              className="w-full p-3 rounded-lg bg-gray-800 border border-pink-400 text-white"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              Card Number
            </label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="1234 5678 9012 3456"
              className="w-full p-3 rounded-lg bg-gray-800 border border-pink-400 text-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-semibold mb-1">
                Expiry Date
              </label>
              <input
                type="text"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                placeholder="MM/YY"
                className="w-full p-3 rounded-lg bg-gray-800 border border-pink-400 text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">CVV</label>
              <input
                type="password"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                placeholder="123"
                className="w-full p-3 rounded-lg bg-gray-800 border border-pink-400 text-white"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-1">
              Billing Address
            </label>
            <input
              type="text"
              name="billingAddress"
              value={formData.billingAddress}
              onChange={handleChange}
              placeholder="Street, City, Country"
              className="w-full p-3 rounded-lg bg-gray-800 border border-pink-400 text-white"
            />
          </div>

          <button
            onClick={handleNext}
            className="flex items-center gap-2 bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-lg transition"
          >
            Next <ChevronRight />
          </button>
        </div>
      )}

      {/* Step 4: Feedback */}
      {step === 3 && (
        <div>
          <h2 className="text-2xl font-bold text-pink-400 mb-6">
            Feedback & Ratings
          </h2>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Rate Your Experience
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={28}
                  className={`cursor-pointer ${
                    star <= formData.rating
                      ? "fill-pink-400 text-pink-400"
                      : "text-gray-500"
                  }`}
                  onClick={() => handleRating(star)}
                />
              ))}
            </div>
          </div>

          <div className="mb-6 mt-4">
            <label className="block text-sm font-semibold mb-1">
              Feedback (Optional)
            </label>
            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              placeholder="Share your thoughts..."
              className="w-full p-3 rounded-lg bg-gray-800 border border-pink-400 text-white"
              rows={4}
            ></textarea>
          </div>

          <button
            onClick={handleSubmit}
            className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-lg transition"
          >
            Submit Feedback
          </button>
        </div>
      )}
    </div>
  );
}

export default Booking;
