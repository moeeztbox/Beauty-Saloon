import React from "react";

function Banner() {
  return (
    <div className=" h-[500px] ">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://www.aminaz.com/img/bg/title-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70 " />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white great-vibes">
            About Us
          </h1>
          <p className="text-white italic font-light opacity-70 mt-4 text-xl max-w-3xl tracking-wide">
            Where beauty is reimagined every day. Welcome to your transformation
            hub.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
