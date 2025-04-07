import React from "react";
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
  return (
    <div className="flex flex-col md:flex-row justify-around py-10 px-5 md:px-20 bg-gray-900 text-white">
      {/* Quick Links */}
      <div className="mb-10 md:mb-0 w-full md:w-auto">
        <h2 className="text-pink-400 text-xl font-bold border-b-pink-400 border-b-2 w-fit pb-1 mb-4">
          Quick Links
        </h2>

        <ul>
          <li className="mb-2">
            <a href="#" className="hover:text-pink-400">
              Men Deals
            </a>
          </li>

          <li className="mb-2">
            <a href="#" className="hover:text-pink-400">
              Services for Men
            </a>
          </li>

          <li className="mb-2">
            <a href="about" className="hover:text-pink-400">
              About
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:text-pink-400">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>

      {/* Contact */}
      <div className="mb-10 md:mb-0 w-full md:w-auto">
        <h2 className="text-pink-400 text-xl font-bold mb-4 border-b-pink-400 border-b-2 w-fit pb-1 ">
          Contact
        </h2>

        <ul>
          <li className="mb-2 flex items-center">
            <a
              href="https://www.google.com/maps"
              className="flex items-center hover:text-pink-400"
            >
              <FaBuilding className="mr-2 text-pink-400" />
              Defence J Block , Lahore
            </a>
          </li>
          <li className="mb-2 flex items-center">
            <a
              href="https://www.google.com/maps"
              className="flex items-center hover:text-pink-400"
            >
              <FaBuilding className="mr-2 text-pink-400" />
              Defence Y Block , Lahore
            </a>
          </li>
          <li className="mb-2 flex items-center">
            <a
              href="https://www.google.com/maps"
              className="flex items-center hover:text-pink-400"
            >
              <FaBuilding className="mr-2 text-pink-400" />
              Johar Town PIA Road, Lahore
            </a>
          </li>
          <li className="mb-2 flex items-center">
            <a
              href="https://www.google.com/maps"
              className="flex items-center hover:text-pink-400"
            >
              <FaBuilding className="mr-2 text-pink-400" />
              28 – B, Block, C/II MM Alam Rd, Gulberg III, Lahore
            </a>
          </li>
          <li className="mt-4 flex items-center">
            <a
              href="tel:+923450084262"
              className="flex items-center hover:text-pink-400"
            >
              <FaPhoneAlt className="mr-2 text-pink-400" />
              Phone: 03450084262
            </a>
          </li>
        </ul>
      </div>

      {/* Follow Us */}
      <div className="w-full md:w-auto">
        <h2 className="text-pink-400 text-xl font-bold mb-4 border-b-pink-400 border-b-2 w-fit pb-1">
          Follow Us
        </h2>

        <ul>
          <li className="mb-2 flex items-center">
            <a
              href="https://www.facebook.com"
              className="flex items-center hover:text-pink-400"
            >
              <FaFacebook className="mr-2 text-pink-400" />
              Facebook
            </a>
          </li>
          <li className="mb-2 flex items-center">
            <a
              href="https://www.twitter.com"
              className="flex items-center hover:text-pink-400"
            >
              <FaTwitter className="mr-2 text-pink-400" />
              Twitter
            </a>
          </li>
          <li className="mb-2 flex items-center">
            <a
              href="https://www.instagram.com"
              className="flex items-center hover:text-pink-400"
            >
              <FaInstagram className="mr-2 text-pink-400" />
              Instagram
            </a>
          </li>
          <li className="mb-2 flex items-center">
            <a
              href="https://www.youtube.com"
              className="flex items-center hover:text-pink-400"
            >
              <FaYoutube className="mr-2 text-pink-400" />
              YouTube
            </a>
          </li>
          <li className="mb-2 flex items-center">
            <a
              href="https://www.tiktok.com"
              className="flex items-center hover:text-pink-400"
            >
              <FaTiktok className="mr-2 text-pink-400" />
              Tiktok
            </a>
          </li>
        </ul>
      </div>

      {/* Business Hour */}
      <div className="text-white w-full md:w-auto">
        <h2 className="text-pink-400 text-xl font-bold mb-4 pb-1 border-b-2 border-b-pink-400 w-fit">
          Business Hour
        </h2>

        <div className="flex items-center mb-4 border-b-gray-500 border-b-2 pb-1 w-fit">
          <span className="text-lg mr-1.5">Start Time:</span>
          <span className="text-lg">11:30am</span>
        </div>

        <div className="flex items-center mb-4 border-b-gray-500 border-b-2 pb-1 w-fit">
          <span className="text-lg mr-1.5">End Time:</span>
          <span className="text-lg">12:30pm</span>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
