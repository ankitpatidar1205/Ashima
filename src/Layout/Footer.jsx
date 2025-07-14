
import React from "react";
import { FaInstagram, FaYoutube, FaLinkedin, FaFigma } from "react-icons/fa";
import { PiX } from "react-icons/pi"; // For X (Twitter)
import { Link } from "react-router-dom";

const Footer = () => {



  return (
    <footer className="bg-[#000000] text-[#ffffff] py-12 sm:py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row justify-between items-start gap-8 sm:gap-16">
        {/* Mobile Layout */}
        <div className="lg:hidden w-full flex flex-col">
          {/* First Row - Logo & Social Icons */}
          <div className="flex flex-col items-start space-y-6 w-full mb-8">
            <FaFigma className="text-[#ff7070] text-4xl sm:text-5xl" />
            <div className="flex space-x-6">
              <PiX className="text-[#ffffff] text-xl sm:text-2xl" />
              <FaInstagram className="text-[#ffffff] text-xl sm:text-2xl" />
              <FaYoutube className="text-[#DBDAD8]text-xl sm:text-2xl" />
              <FaLinkedin className="text-[#ffffff] text-xl sm:text-2xl" />
            </div>
          </div>

          {/* Second Row - Products & Business */}
          <div className=" grid grid-cols-2 gap-8 mb-8">
            {/* Products Section */}
            <div>
              <h3 className="font-Roboto Condensed text-[#ffffff] mb-4">
                Products
              </h3>

              <ul className="space-y-2  text-[#DBDAD8] text-sm leading-relaxed">
                <li onClick={() => coursesRef.current?.scrollIntoView({ behavior: 'smooth' })}>
                  <h3 className="text-[#DBDAD8] cursor-pointer hover:text-white transition">Courses</h3>
                </li>

                <li>
                  <Link to="/digital" className="text-[#DBDAD8]">Digital Products</Link>
                </li>
                <li>
                  <Link to="/blog" className="text-[#DBDAD8]">Newsletter</Link>
                </li>
                <li>Help</li>
              </ul>
            </div>

            {/* Business Section */}
            <div>
              <h3 className="font-Roboto Condensed text-[#ffffff] mb-4 ">
                Business
              </h3>
              <ul className="space-y-2 text-[#DBDAD8] text-sm leading-relaxed">
                <li>About Us</li>
                <li>Career</li>
                <li>Instructors</li>
              </ul>
            </div>
          </div>

          {/* Third Row - Legal */}
          <div className="w-full">
            <h3 className="font-Roboto Condensed text-[#ffffff] mb-4">Legal</h3>
            <ul className="space-y-2 text-[#DBDAD8] text-sm leading-relaxed">
              <li>Cookies Policy</li>
              <li>Privacy And Terms</li>
            </ul>
          </div>
        </div>

        {/* Desktop Layout (hidden on mobile) */}
        <div className="hidden lg:flex w-full flex-col lg:flex-row justify-between gap-12 lg:gap-16">
          {/* Left Section - Logo & Social Icons */}
          <div className="flex flex-col items-start space-y-6 w-full lg:w-1/4">
            <FaFigma className="text-[#ff7070] text-4xl sm:text-5xl" />
            <div className="flex space-x-6">
              <PiX className="text-[#ffffff] text-xl sm:text-2xl" />
              <FaInstagram className="text-[#ffffff] text-xl sm:text-2xl" />
              <FaYoutube className="text-[#ffffff] text-xl sm:text-2xl" />
              <FaLinkedin className="text-[#ffffff] text-xl sm:text-2xl" />
            </div>
          </div>

          {/* Center Section - Products */}
          <div className="w-full sm:w-1/4 text-left ">
            <h3 className="font-Roboto Condensed text-[#ffffff] mb-4">
              Products
            </h3>
            <ul className="space-y-2  text-sm leading-relaxed">
              <li onClick={() => coursesRef.current?.scrollIntoView({ behavior: 'smooth' })}>
                <a className="text-[#DBDAD8]" href="#courses-section" >Courses</a>
              </li>
              <li>
                <Link to="/digital" className="text-[#DBDAD8]">Digital Products</Link>
              </li>
              <li>
                <Link to="/blog" className="text-[#DBDAD8]">Newsletter</Link>
              </li>
              <li className="text-[#DBDAD8]">Help</li>
            </ul>
          </div>

          {/* Business & Legal - Two-Column Layout */}
          <div className="w-full sm:w-1/2 grid grid-cols-2 gap-12 text-left">
            {/* Business Section */}
            <div>
              <h3 className="font-Roboto Condensed text-[#ffffff] mb-4">
                Business
              </h3>
              <ul className="space-y-2 text-[#DBDAD8] text-sm leading-relaxed">
                <li>About Us</li>
                <li>Career</li>
                <li>
                  <Link
                    to="/instructor"
                    className="hover:text-[#ffffff] transition text-[#DBDAD8]"
                  >
                    Instructors
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Section */}
            <div>
              <h3 className="font-Roboto Condensed text-[#ffffff] mb-4">
                Legal
              </h3>
              <ul className="space-y-2 text-[#DBDAD8] text-sm leading-relaxed">
                <li>Cookies Policy</li>
                <li>
                  <Link to="/privancyandterms" className="text-decoration-none text-[#DBDAD8]">
                  Privacy And Terms
                  </Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;