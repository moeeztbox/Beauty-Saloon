import React from "react";

function AnyQuery() {
  return (
    <div className="flex items-center justify-center bg-gray-100 border-y-1 border-[#D4AF37]">
      <div className="z-10 w-full max-w-6xl p-6">
        <h2 className="text-5xl great-vibes text-center mb-4 text-[#D4AF37]">
          Send Us a Query
        </h2>

        <div className="grid md:grid-cols-2 gap-12 p-8">
          {/* Left Description */}
          <div className="flex flex-col">
            <h3 className="text-3xl font-bold italic mb-4 text-[#D4AF37]">
              Query{" "}
              <span className="italic font-light text-gray-400">Form</span>
            </h3>
            <p className="text-gray-400 italic leading-relaxed font-light">
              Have a question or need more information? Feel free to reach out —
              we're happy to assist you with anything you need.
            </p>
          </div>

          {/* Right Form */}
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="mb-2 text-gray-700 font-light text-sm">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full border border-[#D4AF37] text-gray-700 px-4 py-2 font-light outline-none"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2 text-gray-700 font-light text-sm">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="w-full border border-[#D4AF37] text-gray-700 px-4 py-2 font-light outline-none"
                  placeholder="123-456-7890"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="mb-2 text-gray-700 font-light text-sm">
                Email Address
              </label>
              <input
                type="email"
                className="w-full border border-[#D4AF37] text-gray-700 px-4 py-2 font-light outline-none"
                placeholder="you@example.com"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 text-gray-700 font-light text-sm">
                Your Question
              </label>
              <textarea
                rows="5"
                className="w-full border border-[#D4AF37] text-gray-700 px-4 py-2 outline-none font-light"
                placeholder="Type your query here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="block w-1/2 mx-auto border border-[#D4AF37] text-gray-700 font-light py-3 hover:bg-[#D4AF37] hover:text-black transition duration-300"
            >
              Send Query
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AnyQuery;
