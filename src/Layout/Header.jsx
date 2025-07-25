import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../Redux/slices/categorySlice/categorySlice";
import { fetchCourses } from "../Redux/slices/CourseSlice/CourseSlice";
import { fetchCartItemById } from "../Redux/slices/cartSlice/cartSlice";
import logo from "../assets/logo.jfif"; // Adjust the path as necessary
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categories } = useSelector((state) => state?.categories);
  const { courses } = useSelector((state) => state.courses);
  // console.log(courses)
  const userId = localStorage.getItem("is_id");
  useEffect(() => {
    if (userId) {
      dispatch(fetchCartItemById(userId));
    }
  }, [dispatch, userId]);

  const cartItems = useSelector((state) => state.cart.selectedItem?.items || []);
  useEffect(() => {
    dispatch(fetchCategories())
    dispatch(fetchCourses());
  }, [])

  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      const filteredSuggestions = courses.filter((item) =>
        item.course_title.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (id) => {
    navigate(`/Cource-Detail/${id}`);
    setSearchTerm("");
    setSuggestions([]);
  };


  const profile = JSON.parse(localStorage.getItem("user"));
  return (
    <header className="fixed z-50 w-full bg-white shadow-md px-4 md:px-6 lg:px-8">
      <div className="max-w-[1410px] mx-auto h-[80px] flex items-center justify-between">
       <Link to="/">
    <div className="flex items-center">
        <img src={logo}  alt="Logo"   className="h-[45px] w-[180px] object-contain md:h-[55px] md:w-[200px]" />
    </div>
  </Link>

        <div className="hidden lg:flex items-center space-x-6">
          <div className="relative">
            {/* Search bar */}
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
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search for a course"
                className="w-full outline-none text-[16px]"
              />
            </div>

            {/* Suggestions dropdown */}
            {suggestions.length > 0 && (
              <div className="absolute bg-white border border-gray-300 rounded-lg mt-2 w-[250px] md:w-[300px] shadow-lg z-20 max-h-80 overflow-y-auto">
                {suggestions.map((item) => (
                  <div key={item.id} onClick={() => handleSuggestionClick(item.id)}
                    className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer transition duration-150 ease-in-out"
                  >
                    <img   src={item.course_image}   alt={item.course_title}
                      className="w-10 h-10 rounded-md object-cover border border-gray-200"  />
                    <span className="text-base text-gray-800">{item.course_title}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <nav className="flex space-x-6 text-[16px]">
            <div className="relative">
              <button onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
                className="flex items-center text-[18px] text-[#000000]" >
                Courses <RiArrowDropDownLine className="w-6 h-6" />
              </button>
              {coursesDropdownOpen && (
                <div className="absolute left-0 top-11 w-[260px] bg-[#ffffff] shadow-lg rounded-md z-50 max-h-[300px] overflow-y-auto">
                  {categories.map((course, idx) => (
                    <Link key={idx} to={`/courses/${course.category_name}`}
                      className="block px-4 py-2 text-[16px] text-[#000000] hover:bg-[#f0f0f0]"
                      onClick={() => setCoursesDropdownOpen(false)}> {course?.category_name}</Link>
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
     <button onClick={() => navigate("/cart")} className="relative">
  <AiOutlineShoppingCart className="h-7 w-7 text-[#047670]" />
  {cartItems.length > 0 && (
    <span className="absolute -top-1 -right-2 bg-green-600 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
      {cartItems.length}
    </span>
  )}
</button>
        </div>

        <div className="hidden md:flex space-x-4">
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
        </div>



        <div className="md:hidden flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
              className="font-roboto text-[18px] text-[#000000] flex items-center" >
              Courses
              <RiArrowDropDownLine className="w-[28px] h-[28px]" />
            </button>
            {coursesDropdownOpen && (
              <div className="absolute -left-24 top-11 w-[260px] bg-[#ffffff] shadow-md rounded-md mt-2 z-50 max-h-[300px] overflow-y-auto">
                {categories.map((course, idx) => (
                  <Link
                    key={idx}
                    to={`/courses/${course.category_name}`}
                    className="block px-4 py-2 text-[16px] text-[#000000] hover:bg-[#f0f0f0]"
                    onClick={() => setCoursesDropdownOpen(false)}
                  >
                    {course?.category_name}
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
            transition={{ duration: 0.3 }}>
            <Link
              to="/digital"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2 text-[18px] text-[#000000]">
              Digital Products
            </Link>
            <Link to="/business" className="block px-4 py-2 text-[18px] text-[#000000]">
              Business
            </Link>
            <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 text-[18px] text-[#000000]">
              Newsletter
            </Link>

            {/* ✅ Mobile Login & Launch Now */}
            <div className="mt-2 space-y-2">
              <Link to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full block text-center px-4 py-2 text-white bg-[#047670] rounded-lg">
                Login
              </Link>
              <Link to="/signup"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full block text-center px-4 py-2 text-white bg-[#047670] rounded-lg" >
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
