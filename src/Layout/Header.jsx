import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);

  const trendingCourses = [
    "AI & ML",
    "DEVOPS",
    "NO CODE",
    "CYBERSECURITY & TESTING",
    "DATA SCIENCE AND ENGINEERING",
    "DESIGN AND DEVELOPMENT",
    "FOUNDER CONNECT",
    "GAMING & NETWORK",
    "PRODUCT",
    "BUSINESS AND LEADERSHIP",
    "MARKETING & SALES",
  ];

  return (
    <header className="fixed z-50 w-full bg-white shadow-md px-4 md:px-6 lg:px-8">
      <div className="max-w-[1410px] mx-auto h-[80px] flex items-center justify-between">
        <Link to="/">
          <div className="text-[40px] md:text-[50px] text-[#000] font-impact">
            AI SKILLS
          </div>
        </Link>

        <div className="hidden lg:flex items-center space-x-6">
          <div className="flex items-center border border-gray-300 rounded-full px-4 w-[250px] md:w-[300px] h-[45px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2a7.5 7.5 0 010 14.5z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search for anything"
              className="w-full outline-none text-[16px]"
            />
          </div>

          <nav className="flex space-x-6 text-[16px]">
            <div className="relative">
              <button
                onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
                className="flex items-center text-[18px] text-[#000000]"
              >
                Courses <RiArrowDropDownLine className="w-6 h-6" />
              </button>
              {coursesDropdownOpen && (
                <div className="absolute left-0 w-[260px] bg-white shadow-md rounded-md mt-2 z-50 max-h-[300px] overflow-y-auto">
                  {trendingCourses.map((course, idx) => (
                    <Link
                      key={idx}
                      to="/courses"
                      className="block px-4 py-2 text-[16px] text-[#000000] hover:bg-gray-100"
                      onClick={() => setCoursesDropdownOpen(false)}
                    >
                      {course}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/digital" className="text-[18px] text-[#000000]">
              Digital Products
            </Link>
            <Link to="/business" className="text-[18px] text-[#000000]">
              Business
            </Link>
            <Link to="/blog" className="text-[18px] text-[#000000]">
              Newsletter
            </Link>
          </nav>

          <AiOutlineShoppingCart className="h-7 w-7 text-[#047670]" />
        </div>

        <div className="hidden md:flex space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 border-1 rounded-lg text-[#047670] border-[#047670] hover:bg-[#047670] hover:text-white"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-[#047670] text-white rounded-lg"
          >
            Sign Up
          </Link>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
              className="font-roboto text-[18px] text-[#000000] flex items-center"
            >
              Courses
              <RiArrowDropDownLine className="w-[28px] h-[28px]" />
            </button>
            {coursesDropdownOpen && (
              <div className="absolute -left-24 top-11 w-[260px] bg-[#ffffff] shadow-md rounded-md mt-2 z-50 max-h-[300px] overflow-y-auto">
                {trendingCourses.map((course, idx) => (
                  <Link
                    key={idx}
                    to="/courses"
                    className="block px-4 py-2 font-roboto font-medium text-[16px] text-[#000000] hover:bg-[#f0f0f0]"
                  >
                    {course}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#000000]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="md:hidden">
        {isMobileMenuOpen && (
          <motion.div
            className="bg-white rounded-b-md shadow-md max-w-[1364px] mx-auto p-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/digital"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2 text-[18px] text-[#000000]"
            >
              Digital Products
            </Link>
            <Link to="/business" className="block px-4 py-2 text-[18px] text-[#000000]">
              Business
            </Link>
            <Link
              to="/blog"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2 text-[18px] text-[#000000]"
            >
              Newsletter
            </Link>

            {/* ✅ Mobile Login & Launch Now */}
            <div className="mt-2 space-y-2">
              <Link
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full block text-center px-4 py-2 text-white bg-[#047670] rounded-lg"
              >
                Login
              </Link>
              <Link
                to="/signup"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full block text-center px-4 py-2 text-white bg-[#047670] rounded-lg"
              >
                Sign Up
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
