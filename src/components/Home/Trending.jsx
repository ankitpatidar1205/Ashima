import React, { useRef, useState } from "react";
import { LuClock12 } from "react-icons/lu";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import trending1 from "../../assets/trending1.png";
import trending2 from "../../assets/trending2.png";
import trending3 from "../../assets/trending3.png";
import { Link } from "react-router-dom";

const courses = [
  {
    img: trending1,
    title: "AI AND ML",
    mentor: "Kapil Sharma",
    rating: 4.8,
    mode: "LIVE", // 👈 added
  },
  {
    img: trending2,
    title: "DATA SCIENCE & ENGINEERING",
    mentor: "Kapil Sharma",
    rating: 4.8,
    mode: "HYBRID",
  },
  {
    img: trending3,
    title: "AI AND ML",
    mentor: "Kapil Sharma",
    rating: 4.8,
    mode: "VIDEO",
  },
  {
    img: trending3,
    title: "AI AND ML",
    mentor: "Kapil Sharma",
    rating: 4.8,
    mode: "HYBRID",
  },
  {
    img: trending3,
    title: "AI AND ML",
    mentor: "Kapil Sharma",
    rating: 4.8,
    mode: "LIVE",
  },
];

const trendingCourses = [
  "AI & ML",
  "DEVOPS",
  "NO CODE",
  "Cybersecurity & Testing",
  "DATA SCIENCE AND ENGINERRING",
  "DESIGN AND DEVLOPMENT",
  "Founder Connect",
  "Gaming & Network",
  "Product",
  "bussiness and leadership",
  "Marketing & Sales",
];

const TrendingWithCards = () => {
  const sliderRef = useRef(null);
  const [selectedCourse, setSelectedCourse] = useState("");

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -400,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 400,
        behavior: "smooth",
      });
    }
  };

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div className="py-8 bg-[#f4F3F3] relative ">
      {/* Title */}
      <h2 className="text-[55px] sm:text-5xl md:text-5xl mb-6 sm:mb-8 text-center leading-snug sm:leading-[60px] tracking-[0.5%] font-[400] text-[#000000] font-impact">
        TRENDING <span className="text-[#047670]">COURSES</span>
      </h2>

      {/* Course Categories */}
      <div className="flex flex-col gap-3 mt-5 ">
        {[0, 5, 9].map((startIndex, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-wrap justify-center gap-4 sm:gap-4 "
          >
            {trendingCourses
              .slice(startIndex, startIndex + [5, 4, 2][rowIndex])
              .map((label) => {
                const isSelected = selectedCourse === label;
                return (
                  <button
                    key={label}
                    onClick={() => handleCourseClick(label)}
                    className={`px-2 py-2 rounded-full text-[16px] font-Roboto Condensed fw-bold uppercase border-1 transition-all
                ${
                  isSelected
                    ? "bg-[#047670] text-[#fff] border-[#002726]"
                    : "bg-[#f4F3F3] text-gray-800 border-[#000000] hover:bg-[#fffaf1] hover:text-[#000000]"
                }`}
                  >
                    {label}
                  </button>
                );
              })}
          </div>
        ))}
      </div>

      {/* Scrollable Courses Section */}

      <div className="sm:px-8 lg:px-8 px-8 py-8 bg-[#f4F3F3] relative font-Roboto Condensed uppercase">
        <div className="relative mt-10 max-w-[1440px] mx-auto">
          <div ref={sliderRef} className="flex gap-4 overflow-x-auto pb-2">
            {courses.map((course, index) => (
              <div
                key={index}
                className="min-w-[400px] rounded-xl border border-[#000000] overflow-hidden shadow-lg hover:shadow-2xl transition-all bg-[#f4F3F3]"
              >
                <div className="relative h-[450px] sm:h-[500px] overflow-hidden bg-[#000000]">
                  <img
                    src={course.img}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />

                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/50 to-black/20 backdrop-blur-sm px-4 pb-4 pt-4 text-white tracking-wide min-h-[220px] flex flex-col justify-end">
                    <h3 className="text-[25px] mb-1">{course.title}</h3>
                    <p className="text-[18px] mb-1">{course.mentor}</p>

                    <div className="flex flex-wrap justify-between items-center text-[14px] mt-1 gap-y-2">
                      <div className="flex items-center gap-1">
                        <span className="text-white text-[14px]">
                          RATING {course.rating}
                        </span>
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={
                              i < Math.floor(course.rating)
                                ? "text-[#FBBC09]"
                                : "text-[#ffffff]"
                            }
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      {/* ✅ Single dynamic button based on mode */}

                      <div>
                        <Link
                          to={`/${course.mode.toLowerCase()}`} // 👈 Dynamic route like /live, /hybrid, /video
                          className={`px-4 py-1 font-bold text-white text-xs rounded-full transition-all duration-300 shadow-md hover:scale-105 ${
                            course.mode === "LIVE"
                              ? "bg-[#09D0C6]"
                              : course.mode === "HYBRID"
                              ? "bg-[#000000]"
                              : "bg-[#FF757A]"
                          }`}
                        >
                          {course.mode}
                        </Link>
                      </div>
                    </div>

                    <button
                      style={{ borderColor: "2px solid black" }}
                      className="mt-3 w-36 px-8 py-2 font-bold bg-[#ffffff] text-[#000000] rounded-3xl hover:bg-gray-200 transition text-sm text-nowrap"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}

      <div className="flex items-center justify-between w-full max-w-[1440px] mx-auto mt-2 px-8">
        <div>
          <button
            onClick={scrollLeft}
            className="bg-[#00E0C6] text-[#000000] p-2 rounded-full hover:bg-[#00c5b0] transition"
          >
            <FaArrowLeft className="h-3 w-3" />
          </button>
        </div>

        <div>
          <button
            onClick={scrollRight}
            className="bg-[#00E0C6] text-[#000000] p-2 rounded-full hover:bg-[#00c5b0] transition"
          >
            <FaArrowRight className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingWithCards;
