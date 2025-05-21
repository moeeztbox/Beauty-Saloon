import React from "react";
import { Star, ChevronLeft } from "lucide-react";

function Feedback({
  formData,
  handleChange,
  handleRating,
  handleSubmit,
  handleBack,
}) {
  return (
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
      <div className="flex justify-between mt-6">
        <button
          onClick={handleBack}
          className="flex items-center gap-1 border border-[#D4AF37] text-gray-200/80 font-light hover:bg-[#D4AF37] hover:text-black px-4 py-2 transition duration-300"
        >
          <ChevronLeft /> Back
        </button>
        <button
          onClick={handleSubmit}
          className="flex items-center gap-2 px-6 py-2 border border-[#D4AF37] text-gray-200/80 font-light hover:bg-[#D4AF37] hover:text-black transition duration-300"
        >
          Submit Feedback
        </button>
      </div>
    </div>
  );
}

export default Feedback;
