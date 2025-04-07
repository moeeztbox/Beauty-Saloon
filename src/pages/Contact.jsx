import React from "react";
import { MapPin, Phone } from "lucide-react";

function Contact() {
  const branches = [
    {
      name: "DD Branch",
      address: "187 CCA, Phase-IV, DHA, Lahore",
      phone: ["+92 42 35744001", "35744002", "35744003"],
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13613.238185165703!2d74.3524495!3d31.4826359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190562b6eab91f%3A0x9647c2b2038f2a61!2sDHA%20Phase%204%2C%20Lahore!5e0!3m2!1sen!2s!4v1712484840000!5m2!1sen!2s",
    },
    {
      name: "Faisal Town Branch",
      address: "915 B Maulana Shaukat Ali Road, Faisal Town, Lahore",
      phone: ["+92 42 35170201", "35170202"],
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13611.77589917933!2d74.2988502!3d31.5091203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901654711ac2f%3A0xd5a339084a78aee9!2sFaisal%20Town%2C%20Lahore!5e0!3m2!1sen!2s!4v1712484980000!5m2!1sen!2s",
    },
  ];
  return (
    <div className="bg-black/20 p-6 md:p-12 ">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {branches.map((branch, idx) => (
          <div key={idx} className="shadow-lg rounded-2xl p-6 border">
            <h3 className="text-xl font-semibold mb-4">{branch.name}</h3>
            <div className="flex items-start gap-3 mb-2">
              <MapPin className="text-red-500 mt-1" />
              <p>{branch.address}</p>
            </div>
            <div className="flex items-start gap-3 mb-4">
              <Phone className="text-green-600 mt-1" />
              <div>
                {branch.phone.map((num, i) => (
                  <p key={i}>{num}</p>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border">
              <iframe
                src={branch.mapEmbedUrl}
                width="100%"
                height="250"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
