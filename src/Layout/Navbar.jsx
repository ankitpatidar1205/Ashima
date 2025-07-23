import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../Redux/slices/categorySlice/categorySlice";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);

  const trendingCourses = [
    "AI & ML",
    "DEVOPS",
    "NO CODE",
    "CYBERSECURITY & TESTING",
    "DATA SCIENCE AND ENGINERRING",
    "DESIGN AND DEVLOPMENT",
    "FOUNDER CONNECT ",
    "GAMING & NETWORK",
    "PRODUCT",
    "BUSSINESS AND LEADERSHIP",
    "MARKETING & SALES",
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories())
  }, [])


  const { categories } = useSelector((state) => state?.categories);
  // const
  // console.log("categories", categories);
  const profile = JSON.parse(localStorage.getItem("user"));

  return (
    <header className="fixed z-50 w-full bg-white shadow-md">
      <div className="max-w-[1410px] mx-auto h-[80px] flex items-center justify-between px-4 md:px-6 lg:px-8">
        {/* ✅ Logo */}
        <Link to="/">
          <div className="font-normal text-[32px] sm:text-[40px] lg:text-[50px] text-[#000000] tracking-[0.5%] leading-[55px] font-impact">
            AI SKILLS
          </div>
        </Link>

        {/* ✅ Desktop Navigation */}
        <nav className="hidden md:flex space-x-10 text-[16px] text-[#1e1e1e]">
          {/* ✅ Courses Dropdown */}
          <div className="relative">
            <button onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
              className="text-[18px] text-[#000000] flex items-center">
              Courses
              <RiArrowDropDownLine className="w-[28px] h-[28px]" />
            </button>

            {coursesDropdownOpen && (
              <div className="absolute left-0 top-11 w-[260px] bg-[#ffffff] shadow-lg rounded-md z-50 max-h-[300px] overflow-y-auto">
                {categories.map((course, idx) => (
                  <Link key={idx} to={`/courses/${course.category_name}`}
                    className="block px-4 py-2 text-[16px] text-[#000000] hover:bg-[#f0f0f0]"
                    onClick={() => setCoursesDropdownOpen(false)}>
                    {course?.category_name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {/* <Link to="/aboutus" className="text-[18px] text-[#000000]">
            AboutUs
          </Link> */}
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

        {/* ✅ Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <div>
            {profile ? (
              <Link
                to={
                  profile.role === "instructor"
                    ? "/instructor-dashboard"
                    : profile.role === "admin"
                      ? "/admin-dashboard"
                      : "/student-dashboard"
                }
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full block text-center px-4 py-2 text-white bg-[#047670] rounded-lg"
              >
                Go to Dashboard
              </Link>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full block text-center px-4 py-2 text-white bg-[#047670] rounded-lg "
              >
                Login
              </Link>
            )}
          </div>

          <div>
            <Link
              to={"/Launchpage"}
              className="px-5 py-2   text-white bg-teal-700 rounded-lg"
            >
              Launch Now
            </Link>
          </div>

        </div>

        {/* ✅ Mobile Menu Button */}

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

      {/* ✅ Mobile Menu */}
      <div className="md:hidden">
        {isMobileMenuOpen && (
          <motion.div
            className="bg-white rounded-b-md shadow-md max-w-[1364px] mx-auto p-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/aboutus" className="block px-4 py-2 text-[18px] text-[#000000]">
              AboutUs
            </Link>
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
              <div>
                {profile ? (
                  <Link
                    to={
                      profile.role === "instructor"
                        ? "/instructor-dashboard"
                        : profile.role === "admin"
                          ? "/admin-dashboard"
                          : "/student-dashboard"
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full block text-center px-4 py-2 text-white bg-[#047670] rounded-lg"
                  >
                    Go to Dashboard
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full block text-center px-4 py-2 text-white bg-[#047670] rounded-lg "
                  >
                    Login
                  </Link>
                )}
              </div>
              <Link
                to="/Launchpage"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full block text-center px-4 py-2 text-[#ffffff] bg-[#047670] rounded-lg"
              >
                Launch Now
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
