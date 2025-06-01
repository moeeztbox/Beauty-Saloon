function ChooseUs() {
  return (
    <section className="bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto space-y-10">
        <h2 className="text-5xl great-vibes text-[#D4AF37] text-center mb-8">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              title: "✨ Personalized Experience",
              desc: "Every client is unique, and so is every service we provide. We listen, understand, and deliver your dream look.",
            },
            {
              title: "🎯 Professional Experts",
              desc: "Our artists are continuously trained on the latest trends, techniques, and technologies in beauty.",
            },
            {
              title: "🏆 Premium Products",
              desc: "We use top-tier, cruelty-free, and eco-friendly products to ensure the highest quality results for your hair and skin.",
            },
            {
              title: "💖 Warm, Luxurious Atmosphere",
              desc: "Relax, unwind, and allow us to pamper you in a setting designed for ultimate comfort.",
            },
            {
              title: "🚀 Cutting-edge Techniques",
              desc: "We pride ourselves on bringing the newest, most effective beauty innovations to our clients first.",
            },
            {
              title: "🌟 100% Satisfaction Guaranteed",
              desc: "Your happiness is our priority. We go the extra mile to ensure every client leaves smiling and confident.",
            },
          ].map((item, index) => (
            <div key={index} className="space-y-5">
              <h4 className="text-2xl font-light text-black">{item.title}</h4>
              <p className="text-gray-600 italic text-lg font-light leading-relaxed tracking-wide">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;
