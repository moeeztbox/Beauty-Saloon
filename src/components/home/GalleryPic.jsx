import React from "react";

function GalleryPic() {
  const images = [
    "https://cosmosalon.pk/wp-content/uploads/2023/05/600x600-2-min.jpg",
    "https://cosmosalon.pk/wp-content/uploads/2023/05/600x600-7-min.jpg",
    "https://cosmosalon.pk/wp-content/uploads/2023/05/600x600-8-min.jpg",
    "https://img.freepik.com/free-photo/young-sensitive-man-thinking_23-2149459722.jpg",
    "https://img.freepik.com/premium-photo/trendy-young-man-posing-with-hand-hair_33839-3117.jpg",
    "https://img.freepik.com/premium-photo/handsome-you…isolated-white-background-studio_530697-88374.jpg",
    "https://img.freepik.com/free-photo/portrait-charis…black-sweater-creative-personality_613910-476.jpg",
    "https://img.freepik.com/free-photo/portrait-handsome-groom-his-beach-wedding_23-2149044005.jpg",
    "https://img.freepik.com/free-photo/side-view-young-man-holding-purple-flower_23-2149539646.jpg",
    "https://img.freepik.com/premium-photo/handsome-you…isolated-white-background-studio_530697-88373.jpg",
    "https://img.freepik.com/premium-photo/portrait-you…-posing-against-white-wall_259150-20844.jpg",
    "https://img.freepik.com/free-photo/handsome-man-thinking-with-concentration_23-2147805628.jpg",
  ];

  return (
    <div className="px-6 min-h-screen">
      {/* Title */}

      <h1 className="great-vibes sm:pl-32 text-center sm:text-left text-5xl sm:text-6xl font-bold text-[#D4AF37] my-12">
        Gallery
      </h1>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={src}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-60 object-fill hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryPic;
