import { useState } from "react";
import axios from "axios";

function Complain() {
  const [complainData, setComplainData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    number: "",
    complain: "",
  });

  const handleChange = (e) => {
    setComplainData({ ...complainData, [e.target.name]: e.target.value });
  };

  const handleComplain = async (e) => {
    e.preventDefault();

    const { firstname, lastname, number, email, complain } = complainData;

    if (firstname.length < 3) {
      return alert("First name must be at least 3 characters long.");
    }

    if (lastname.length < 3) {
      return alert("Last name must be at least 3 characters long.");
    }

    if (email.length < 11) {
      return alert("Email must be at least 11 characters.");
    }

    if (!/^\d{11}$/.test(number)) {
      return alert("Phone number must be exactly 11 digits.");
    }

    if (complain.length < 10) {
      return alert("Complaint must contain atleast 10 characters.");
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/complain",
        complainData
      );
      alert(res.data.message);
      setComplainData({
        firstname: "",
        lastname: "",
        email: "",
        number: "",
        complain: "",
      });
    } catch (error) {
      console.error("Complain submission error:", error);
      if (error.response?.data?.message) {
        alert(error.response.data.message);
      } else {
        alert("Failed to submit complaint. Please try again later.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 border-y-1 border-[#D4AF37]">
      <div className="z-10 w-full max-w-6xl p-6">
        <h2 className="text-5xl great-vibes text-center mb-4 text-[#D4AF37]">
          Submit a Complaint
        </h2>

        <div className="grid md:grid-cols-2 gap-12 p-8">
          <div className="flex flex-col">
            <h3 className="text-3xl font-bold italic mb-4 text-[#D4AF37]">
              Complaint{" "}
              <span className="italic font-light text-gray-400">Form</span>
            </h3>
            <p className="text-gray-400 italic leading-relaxed font-light">
              We're here to help. Please share any issues or concerns you
              experienced so we can work to make it right.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleComplain}>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="mb-2 text-gray-700 font-light text-sm">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  value={complainData.firstname}
                  onChange={handleChange}
                  placeholder="John"
                  className="w-full border border-[#D4AF37] text-gray-700 px-4 py-2 font-light outline-none"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2 text-gray-700 font-light text-sm">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  value={complainData.lastname}
                  onChange={handleChange}
                  placeholder="Doe"
                  className="w-full border border-[#D4AF37] text-gray-700 px-4 py-2 outline-none font-light"
                  required
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
                  name="email"
                  value={complainData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full border border-[#D4AF37] text-gray-700 px-4 py-2 outline-none font-light"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2 text-gray-700 font-light text-sm">
                  Phone No
                </label>
                <input
                  type="number"
                  name="number"
                  value={complainData.number}
                  onChange={handleChange}
                  placeholder="123-456-7890"
                  className="w-full border border-[#D4AF37] text-gray-700 px-4 py-2 outline-none font-light"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-gray-700 font-light text-sm">
                Describe your issue
              </label>
              <textarea
                name="complain"
                value={complainData.complain}
                onChange={handleChange}
                rows="4"
                placeholder="Type your issue here..."
                className="w-full border border-[#D4AF37] text-gray-700 px-4 py-2 outline-none font-light"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="block w-1/2 mx-auto border border-[#D4AF37] text-gray-700 font-light py-3 hover:bg-[#D4AF37] hover:text-black transition duration-300"
            >
              Submit Complaint
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Complain;
