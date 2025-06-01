import { useState } from "react";
import axios from "axios";

function Subscribe() {
  const [email, setEmail] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email.");
      return;
    }

    if (email.length < 11) {
      alert("Email must be at least 11 characters long.");
      setEmail("");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/subscribe", {
        email,
      });

      alert("Subscribed successfully!");
      setEmail("");
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        alert(error.response.data.message);
      } else {
        alert("Failed to subscribe. Please try again later.");
      }
      setEmail("");
    }
  };
  return (
    <div className="bg-white border-y mb-2 border-[#D4AF37] w-auto p-10">
      <div className="flex flex-col items-center justify-center">
        <div className="pb-6">
          <h1 className="text-[#D4AF37] great-vibes text-5xl font-bold tracking-wider">
            Beauty Updates
          </h1>
        </div>

        <form
          onSubmit={handleSubscribe}
          className="w-full max-w-2xl flex flex-col justify-center items-center pb-6"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="info@aminaz.com"
            required
            className="outline-none bg-gray-100 great-vibes tracking-widest placeholder:text-black placeholder:opacity-30 w-full py-3 px-6 border-1 border-[#D4AF37]"
          />

          <button
            type="submit"
            className="bg-gray-100 text-md font-thin py-3 mt-5 px-8 border-1 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white duration-300 transition-all"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default Subscribe;
