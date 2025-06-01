import { useState } from "react";
import axios from "axios";

function AnyQuery() {
  const [queryData, setQueryData] = useState({
    name: "",
    number: "",
    email: "",
    query: "",
  });

  const handleChange = (e) => {
    setQueryData({ ...queryData, [e.target.name]: e.target.value });
  };

  const handleQuery = async (e) => {
    e.preventDefault();

    const { name, number, email, query } = queryData;

    if (!name || name.length < 3) {
      alert("Name must be at least 3 characters long.");
      return;
    }

    if (!/^\d{11}$/.test(number)) {
      alert("Phone number must be exactly 11 digits.");
      return;
    }

    if (!email || email.length < 11) {
      alert("Email must be at least 11 characters long.");
      return;
    }

    if (query.length < 10 || query.length > 500) {
      alert("Query must be between 10 and 500 characters.");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/query",
        queryData
      );
      alert(res.data.message);
      setQueryData({ name: "", number: "", email: "", query: "" });
    } catch (error) {
      console.error("Query submission error:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        alert(error.response.data.message);
      } else {
        alert("Failed to submit query. Please try again later.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 border-y-1 border-[#D4AF37]">
      <div className="z-10 w-full max-w-6xl p-6">
        <h2 className="text-5xl great-vibes text-center mb-4 text-[#D4AF37]">
          Send Us a Query
        </h2>

        <div className="grid md:grid-cols-2 gap-12 p-8">
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

          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="mb-2 text-gray-700 font-light text-sm">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={queryData.name}
                  onChange={handleChange}
                  className="w-full border border-[#D4AF37] text-gray-700 px-4 py-2 font-light outline-none"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2 text-gray-700 font-light text-sm">
                  Phone Number
                </label>
                <input
                  type="number"
                  name="number"
                  value={queryData.number}
                  onChange={handleChange}
                  className="w-full border border-[#D4AF37] text-gray-700 px-4 py-2 font-light outline-none"
                  placeholder="123-456-7890"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="mb-2 text-gray-700 font-light text-sm">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={queryData.email}
                onChange={handleChange}
                className="w-full border border-[#D4AF37] text-gray-700 px-4 py-2 font-light outline-none"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 text-gray-700 font-light text-sm">
                Your Question
              </label>
              <textarea
                name="query"
                value={queryData.query}
                onChange={handleChange}
                rows="5"
                className="w-full border border-[#D4AF37] text-gray-700 px-4 py-2 outline-none font-light"
                placeholder="Type your query here..."
                required
              ></textarea>
            </div>

            <button
              onClick={handleQuery}
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
