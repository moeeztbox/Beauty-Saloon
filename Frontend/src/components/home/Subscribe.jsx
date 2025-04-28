import React from "react";

function Subscribe() {
  return (
    <>
      <div className=" bg-white border-y-1 mb-2 border-[#D4AF37] w-auto p-10">
        <div className="flex flex-col items-center justify-center">
          <div className="pb-6">
            <h1 className="text-[#D4AF37] great-vibes text-5xl font-bold tracking-wider">
              Beauty Updates
            </h1>
          </div>
          <div className="w-full max-w-2xl flex flex-col justify-center items-center pb-6">
            <input
              type="email"
              placeholder="info@aminaz.com"
              className="outline-none bg-gray-100 great-vibes tracking-widest placeholder:text-black placeholder:opacity-30 w-full py-3 px-6 border-1 border-[#D4AF37]"
            />
            <button className="bg-gray-100 text-md font-thin py-3 mt-5 px-8 border-1 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white duration-300 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subscribe;
