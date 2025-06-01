import { useState } from "react";
import Complain from "../components/contact/Complain";
import AnyQuery from "../components/contact/AnyQuery";
import Map from "../components/contact/Map";

function Contact() {
  const [activeTab, setActiveTab] = useState("complain");

  return (
    <>
      <Map />
      <div className="flex flex-col items-center justify-center py-10 bg-gray-100 border-t border-t-[#D4AF37]">
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveTab("complain")}
            className={`px-6 py-3 border ${
              activeTab === "complain"
                ? "bg-[#D4AF37] text-black border-[#D4AF37]"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-200"
            } transition duration-300 font-light`}
          >
            Submit Complaint
          </button>

          <button
            onClick={() => setActiveTab("query")}
            className={`px-6 py-3 border ${
              activeTab === "query"
                ? "bg-[#D4AF37] text-black border-[#D4AF37]"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-200"
            } transition duration-300 font-light`}
          >
            Send Query
          </button>
        </div>

        <div className="w-full">
          {activeTab === "complain" && <Complain />}
          {activeTab === "query" && <AnyQuery />}
        </div>
      </div>
    </>
  );
}

export default Contact;
