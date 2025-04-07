import { Link } from "react-router-dom";

function About() {
  return (
    <div className="relative bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://www.aminaz.com/img/bg/title-bg.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center p-8">
            <h1 className="text-5xl md:text-7xl font-bold text-pink-400">
              About Us
            </h1>
            <p className="mt-4 text-xl max-w-3xl text-gray-300">
              Where beauty is reimagined every day. Welcome to your
              transformation hub.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="max-w-6xl mx-auto p-8 space-y-6">
        <h2 className="text-4xl font-bold text-pink-400 mb-4">Our Story</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Born out of a passion for redefining beauty, our salon opened its
          doors with a simple dream — to create a sanctuary where everyone could
          feel their most authentic, confident self. Over the years, our journey
          has been woven with creativity, innovation, and personal connections
          with our clients. Every haircut, color, and facial carries the
          signature of our dedication to excellence.
          <br />
          <br />
          We are more than just a beauty destination — we are a movement of
          empowerment, celebrating individuality and self-expression through the
          magic of transformation. Our team of artists and specialists thrive on
          bringing your vision to life, making sure every visit is a memorable
          one.
        </p>
      </section>

      {/* Mission and Vision */}
      <section className="bg-gray-900 p-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="border-r border-pink-400 pr-8">
            <h3 className="text-3xl font-semibold text-pink-400 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our mission is simple yet profound — to elevate beauty through
              expert craftsmanship, exceptional service, and a genuine love for
              what we do. We strive to foster confidence and positivity in every
              client by offering personalized care that highlights their best
              features.
              <br />
              <br />
              Every style, every touch, and every interaction is built on trust,
              artistry, and heart.
            </p>
          </div>

          {/* Vision */}
          <div className="pl-8">
            <h3 className="text-3xl font-semibold text-pink-400 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              We envision a world where beauty services are not just treatments
              but experiences of self-love and discovery. Our salon is committed
              to setting new standards in quality, creativity, and
              sustainability.
              <br />
              <br />
              We dream of expanding our reach to touch lives, create smiles, and
              build a community where beauty is for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="max-w-6xl mx-auto p-8">
        <h2 className="text-4xl font-bold text-pink-400 mb-6 text-center">
          Meet Our Experts
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-4">
            <div className="w-32 h-32 mx-auto rounded-full bg-pink-400"></div>
            <h4 className="text-2xl font-semibold">Sophia</h4>
            <p className="text-gray-400">Hair Specialist</p>
          </div>
          <div className="space-y-4">
            <div className="w-32 h-32 mx-auto rounded-full bg-pink-400"></div>
            <h4 className="text-2xl font-semibold">Liam</h4>
            <p className="text-gray-400">Skin Care Expert</p>
          </div>
          <div className="space-y-4">
            <div className="w-32 h-32 mx-auto rounded-full bg-pink-400"></div>
            <h4 className="text-2xl font-semibold">Emma</h4>
            <p className="text-gray-400">Makeup Artist</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-900 p-8">
        <div className="max-w-6xl mx-auto space-y-10">
          <h2 className="text-4xl font-bold text-pink-400 text-center mb-8">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-5">
              <h4 className="text-2xl font-semibold text-white">
                ✨ Personalized Experience
              </h4>
              <p className="text-gray-400 text-lg leading-relaxed">
                Every client is unique, and so is every service we provide. We
                listen, understand, and deliver your dream look.
              </p>
            </div>
            <div className="space-y-5">
              <h4 className="text-2xl font-semibold text-white">
                🎯 Professional Experts
              </h4>
              <p className="text-gray-400 text-lg leading-relaxed">
                Our artists are continuously trained on the latest trends,
                techniques, and technologies in beauty.
              </p>
            </div>
            <div className="space-y-5">
              <h4 className="text-2xl font-semibold text-white">
                🏆 Premium Products
              </h4>
              <p className="text-gray-400 text-lg leading-relaxed">
                We use top-tier, cruelty-free, and eco-friendly products to
                ensure the highest quality results for your hair and skin.
              </p>
            </div>
            <div className="space-y-5">
              <h4 className="text-2xl font-semibold text-white">
                💖 Warm, Luxurious Atmosphere
              </h4>
              <p className="text-gray-400 text-lg leading-relaxed">
                Our salon feels like a second home. Relax, unwind, and allow us
                to pamper you in a setting designed for ultimate comfort.
              </p>
            </div>
            <div className="space-y-5">
              <h4 className="text-2xl font-semibold text-white">
                🚀 Cutting-edge Techniques
              </h4>
              <p className="text-gray-400 text-lg leading-relaxed">
                We pride ourselves on bringing the newest, most effective beauty
                innovations to our clients first.
              </p>
            </div>
            <div className="space-y-5">
              <h4 className="text-2xl font-semibold text-white">
                🌟 100% Satisfaction Guaranteed
              </h4>
              <p className="text-gray-400 text-lg leading-relaxed">
                Your happiness is our priority. We go the extra mile to ensure
                every client leaves smiling and confident.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-6xl mx-auto p-8 text-center">
        <h2 className="text-4xl font-bold text-pink-400 mb-4">
          Ready for a Transformation?
        </h2>
        <p className="text-gray-300 text-lg mb-6">
          Book your appointment today and let us create a look that’s uniquely
          you!
        </p>
        <Link
          to="/booking"
          className="inline-block bg-pink-400 hover:bg-pink-500 text-white font-semibold py-3 px-8 rounded-lg transition text-lg"
        >
          Book Now
        </Link>
      </section>
    </div>
  );
}

export default About;
