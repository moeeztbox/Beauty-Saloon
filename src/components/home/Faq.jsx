import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
  {
    question: "Which products do you use?",
    answer:
      "There is a wide variety of products available, type of product or brand would get confirmed upon live skin consultation, or it would be respective to one’s skin type or condition.",
  },
  {
    question: "What is the effective time period of hair deal?",
    answer:
      "Extenso, rebonding, relaxing services are permanent straightening services. Permanent means it will bring change to the existing available hair shaft, the new grown hair shaft will remain wavy or curly as the individual’s inherited character, so the straightening effect depends on one’s hair growth rate. In general straightening effect remains from 6 months to a year.",
  },
  {
    question: "What are the side effects and damages of hair treatment?",
    answer:
      "By knowing the hair texture service procedure, many of doubts gets clear. Upon one’s visit for service, the first formality of hair consultation and hair test resolves the confusion of hair damage. If any hair damaging factor gets discover in hair test analysis, we don’t recommend or carry the further procedure.",
  },
  {
    question: "What are hair cutting charges for men?",
    answer:
      "Haircut charges for men start from Rs. 500 to Rs. 800 Prices are determined upon stylist’s education and experience level. Haircut from Mr. Aadi Rana, Creative Director, Cosmo Salon would be in Rs. 3000",
  },
  {
    question: "Is an appointment necessary?",
    answer:
      "You can come at any time but in order to avoid any inconvenience, please make your appointment before coming: You can book online appointments at Cosmosalon.pk/Appointments",
  },
  {
    question: "I am not from Lahore, I need a free consultation?",
    answer:
      "Every individual has his/her own individual biological influencing factors. For a successful consultation, a consultant needs to analyze all these considered factors, which is only possible during live consultation.",
  },
  {
    question: "What are your safety precautions against COVID-19?",
    answer:
      "We have taken concrete steps to ensure the continuity of our services. We are using hand and floor sanitizers, gloves and masks, and training our staff to ensure the protection of our clients as well as ourselves.For further details, please contact 03450084262",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="relative mt-2 mb-2 bg-gray-900 text-white py-16 px-6 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://cosmosalon.pk/wp-content/uploads/2023/05/photo-1496147539180-13929f8aa03a-1.jpeg')",
      }}
    >
      {/* Dark Overlay for Reduced Opacity Effect */}
      <div className="absolute inset-0 bg-black opacity-60 group-hover:opacity-0 transition-opacity duration-500"></div>

      {/* Content Section */}
      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-sm font-semibold text-gray-400 uppercase">
          Frequently Asked Questions
        </h2>
        <h1 className="text-3xl font-bold mt-2">Have a Question?</h1>
        <div className="w-16 h-1 bg-gray-500 mx-auto my-4"></div>
      </div>

      <div className="relative max-w-3xl mx-auto mt-8 space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-gray-700">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center py-4 text-left text-lg font-medium focus:outline-none"
            >
              {item.question}
              <FaChevronDown
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <p className="text-white pb-4">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
