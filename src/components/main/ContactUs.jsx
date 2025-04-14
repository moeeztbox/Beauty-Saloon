import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaBuilding,
} from "react-icons/fa";

function ContactUs() {
  const quickLinks = [
    { name: "Men Deals", path: "#" },
    { name: "Services for Men", path: "#" },
    { name: "About", path: "/about" },
    { name: "Privacy Policy", path: "#" },
    { name: "FAQs", path: "#" },
  ];
  const ContactInfo = [
    {
      type: "address",
      value: "Defence J Block , Lahore",
      link: "https://www.google.com/maps",
      icon: <FaBuilding className="mr-2 text-white" />,
    },
    {
      type: "address",
      value: "Defence Y Block , Lahore",
      link: "https://www.google.com/maps",
      icon: <FaBuilding className="mr-2 text-white" />,
    },
    {
      type: "address",
      value: "Johar Town PIA Road, Lahore",
      link: "https://www.google.com/maps",
      icon: <FaBuilding className="mr-2 text-white" />,
    },
    {
      type: "address",
      value: "28 – B, Block, C/II MM Alam Rd, Gulberg III, Lahore",
      link: "https://www.google.com/maps",
      icon: <FaBuilding className="mr-2 text-white" />,
    },
    {
      type: "phone",
      value: "03450084262",
      link: "tel:+923450084262",
      icon: <FaPhoneAlt className="mr-2 text-white" />,
    },
  ];

  const FollowUsLinks = [
    {
      href: "https://www.facebook.com",
      icon: FaFacebook,
      label: "Facebook",
    },
    {
      href: "https://www.twitter.com",
      icon: FaTwitter,
      label: "Twitter",
    },
    {
      href: "https://www.instagram.com",
      icon: FaInstagram,
      label: "Instagram",
    },
    {
      href: "https://www.youtube.com",
      icon: FaYoutube,
      label: "YouTube",
    },
    {
      href: "https://www.tiktok.com",
      icon: FaTiktok,
      label: "Tiktok",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-around py-10 px-5 md:px-20 bg-black/90 text-white ">
      {/* Quick Links */}
      <div className="mb-6 lg:mb-0 w-full lg:w-auto">
        <h2 className="text-white  text-2xl great-vibes border-b-2 border-white w-fit pb-1 mb-4">
          Quick Links
        </h2>
        <div className="flex flex-col gap-3">
          {quickLinks.map(({ name, path }) => (
            <Link key={path} to={path} className="hover:text-[#D4AF37]">
              {name}
            </Link>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="mb-6 lg:mb-0">
        <h2 className="text-white text-2xl great-vibes border-b-2 border-white w-fit pb-1 mb-4">
          Contact
        </h2>

        <div className="flex flex-col gap-3">
          {ContactInfo.map(({ link, type, icon, value }, idx) => (
            <div key={idx} className="flex items-center">
              <Link
                to={link}
                target={type === "phone" ? undefined : "_blank"}
                rel={type === "phone" ? undefined : "noopener noreferrer"}
                className="flex items-center hover:text-[#D4AF37]"
              >
                {icon}
                {value}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Follow Us */}
      <div className="mb-6 lg:mb-0">
        <h2 className="text-white text-2xl great-vibes border-b-2 border-white w-fit pb-1 mb-4">
          Follow Us
        </h2>

        <div className="flex flex-col gap-3">
          {FollowUsLinks.map(({ href, icon: Icon, label }, idx) => (
            <div key={idx} className="flex items-center">
              <Link
                to={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-[#D4AF37]"
              >
                <Icon className="mr-2 text-white" />
                {label}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Business Hour */}
      <div>
        <h2 className="text-white text-2xl great-vibes border-b-2 border-white w-fit pb-1 mb-4">
          Business Hour
        </h2>
        <div className="flex items-center mb-4 border-b-2 border-white pb-1 w-fit">
          <span className="mr-1.5">Start Time:</span>
          <span>11:30am</span>
        </div>
        <div className="flex items-center mb-4 border-b-2 border-white pb-1 w-fit">
          <span className="mr-1.5">End Time:</span>
          <span>12:30pm</span>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
