import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import ServiceSelection from "../components/booking/ServiceSelection";
import Appointment from "../components/booking/Appointment";
import Payment from "../components/booking/Payment";
import Feedback from "../components/booking/Feedback";

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

  const handleBack = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
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
    <div className="w-full h-full relative">
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
      <div className="absolute inset-0 bg-black opacity-60 z-10" />

      {/* Form Content */}
      <div className="relative z-20 max-w-3xl mx-auto px-6 py-10 border border-amber-200/50 text-white">
        {/* Progress Bar */}
        <div className="flex justify-between items-center mb-8">
          {steps.map((label, index) => (
            <div key={index} className="flex-1 px-1">
              <div
                className={`h-2 rounded-full ${
                  index <= step ? "bg-[#D4AF37]" : "bg-gray-600"
                } transition-all duration-500`}
              />
            </div>
          ))}
        </div>

        {/* Step Rendering */}
        {step === 0 && (
          <ServiceSelection
            formData={formData}
            handleChange={handleChange}
            handleNext={handleNext}
          />
        )}

        {step === 1 && (
          <Appointment
            formData={formData}
            handleChange={handleChange}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        )}

        {step === 2 && (
          <Payment
            formData={formData}
            handleChange={handleChange}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        )}

        {step === 3 && (
          <Feedback
            formData={formData}
            handleChange={handleChange}
            handleRating={handleRating}
            handleSubmit={handleSubmit}
            handleBack={handleBack}
          />
        )}
      </div>
    </div>
  );
}

export default Booking;
