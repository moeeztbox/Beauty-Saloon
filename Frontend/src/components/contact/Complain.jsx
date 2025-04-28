import React from "react";

function Complain() {
  return (
    <div className="flex items-center justify-center bg-gray-100 border-y-1 border-[#D4AF37]">
      {/* Form Content */}
      <div className=" z-10 w-full max-w-6xl p-6">
        <h2 className="text-5xl great-vibes text-center mb-4 text-[#D4AF37]">
          Submit a Complaint
        </h2>

        <div className="grid md:grid-cols-2 gap-12 p-8 ">
          {/* Right Side Form */}
          <div className="flex flex-col ">
            <h3 className="text-3xl font-bold italic mb-4 text-[#D4AF37]">
              Complaint{" "}
              <span className="italic font-light text-gray-400">Form</span>
            </h3>
            <p className="text-gray-400 italic leading-relaxed font-light">
              We're here to help. Please share any issues or concerns you
              experienced so we can work to make it right.
            </p>
          </div>
          {/* Left side - Form */}
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="mb-2 text-gray-700 font-light text-sm">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full border border-[#D4AF37] text-gray-700 px-4 py-2 font-light outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2 text-gray-700 font-light text-sm">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full border border-[#D4AF37] text-gray-700 px-4 py-2 outline-none font-light"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="mb-2 text-gray-700 font-light text-sm">
                  E-mail Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-[#D4AF37] text-gray-700 px-4 py-2 outline-none font-light"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2 text-gray-700 font-light text-sm">
                  Phone No
                </label>
                <input
                  type="number"
                  placeholder="123-456-7890"
                  className="w-full border border-[#D4AF37] text-gray-700 px-4 py-2 outline-none font-light"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-gray-700 font-light text-sm">
                Describe your issue
              </label>
              <textarea
                rows="4"
                placeholder="Type Your Issue Here"
                className="w-full border border-[#D4AF37] text-gray-700 px-4 py-2 outline-none font-light"
              ></textarea>
            </div>

            <button
              type="submit"
              className="block w-1/2 mx-auto border border-[#D4AF37] text-gray-700 font-light py-3 hover:bg-[#D4AF37] hover:text-black transition duration-300"
            >
              Submit Complaint
            </button>
          </form>

          {/* Right side - Description */}
        </div>
      </div>
    </div>
  );
}

export default Complain;
