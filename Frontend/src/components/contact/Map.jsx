import { MapPin } from "lucide-react";

export default function Branches() {
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
    {
      name: "Gulberg Branch",
      address: "20-K, Gulberg 2, Lahore",
      phone: ["+92 42 35776665", "35776666"],
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13613.84021902891!2d74.3438399!3d31.4701645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904ecc832f0ef%3A0xc2c898e2a68d1920!2sGulberg%20II%2C%20Lahore!5e0!3m2!1sen!2s!4v1712990000000!5m2!1sen!2s",
    },
    {
      name: "Johar Town Branch",
      address: "Block G, Johar Town, Lahore",
      phone: ["+92 42 35222445", "35222446"],
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13610.395726639954!2d74.2702675!3d31.5387432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391902b30258e89f%3A0x2a65afc00c3cc8aa!2sJohar%20Town%2C%20Lahore!5e0!3m2!1sen!2s!4v1712990001000!5m2!1sen!2s",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-6 p-6">
      {branches.map((branch, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          } bg-white shadow-md overflow-hidden`}
        >
          <div className="flex justify-center items-center w-full md:w-1/2 bg-gray-100 p-6">
            <iframe
              src={branch.mapEmbedUrl}
              className="w-full h-64 md:h-80 rounded-lg"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="flex flex-col justify-center p-6 space-y-4 w-full md:w-1/2">
            <h3 className="text-5xl great-vibes text-[#D4AF37]">
              {branch.name}
            </h3>
            <div className="flex items-start gap-3">
              <MapPin className="text-red-500 mt-1" />
              <p>{branch.address}</p>
            </div>
            <div>
              {branch.phone.map((number, idx) => (
                <p key={idx}>Phone: {number}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
