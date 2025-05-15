import { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../Redux/slices/categorySlice/categorySlice";
import { fetchCourses } from "../../Redux/slices/CourseSlice/CourseSlice";
import { useNavigate } from "react-router-dom";

const TrendingWithCards = () => {
  const sliderRef = useRef(null);
  const [activeTab, setActiveTab] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categories } = useSelector((state) => state.categories);
  const { courses } = useSelector((state) => state.courses);
  console.log(courses);
  useEffect(() => {
    dispatch(fetchCourses());
    dispatch(fetchCategories());
  }, [dispatch]);
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

  return (
    <div className="py-8 bg-[#f4F3F3] relative ">
      {/* Title */}
      <h2 className="text-[55px] sm:text-5xl md:text-5xl mb-6 sm:mb-8 text-center leading-snug sm:leading-[60px] tracking-[0.5%] font-[400] text-[#000000] font-impact">
        TRENDING <span className="text-[#047670]">COURSES</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-4">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-2 py-2 rounded-full text-[16px] font-Roboto Condensed fw-bold uppercase border-1 transition-all 
        ${
          activeTab === index
            ? "bg-[#047670] text-[#fff] border-[#002726]"
            : "bg-[#f4F3F3] text-gray-800 border-[#000000] hover:bg-[#fffaf1] hover:text-[#000000]"
        } transition duration-200 ease-in-out`}
          >
            {category.category_name}
          </button>
        ))}

        {/* All Button */}
        <button
          onClick={() => setActiveTab(null)}
          className={`px-2 py-2 rounded-full text-[16px] font-Roboto Condensed fw-bold uppercase border-1 transition-all 
      ${
        activeTab === null
          ? "bg-[#047670] text-[#fff] border-[#002726]"
          : "bg-[#f4F3F3] text-gray-800 border-[#000000] hover:bg-[#fffaf1] hover:text-[#000000]"
      } transition duration-200 ease-in-out`}
        >
          All Courses
        </button>
      </div>

      {/* Scrollable Courses Section */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative mt-10 max-w-[1440px] mx-auto">
          <div ref={sliderRef} className="flex gap-4 overflow-x-auto pb-2">
            {[...courses]
              .reverse()
              .filter((course) =>
                activeTab === null
                  ? true
                  : course.category_id.toString() ===
                    categories[activeTab]?.id?.toString()
              )

              .map((course, index) => (
                <div
                  key={index}
                  className="min-w-[400px] rounded-xl border border-[#000000] overflow-hidden shadow-lg hover:shadow-2xl transition-all bg-[#f4F3F3]"
                >
                  <div className="relative h-[450px] sm:h-[500px] overflow-hidden bg-[#000000]">
                    <img
                      src={course.course_image}
                      alt={course.course_title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />

                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/50 to-black/20 backdrop-blur-sm px-4 pb-4 pt-4 text-white tracking-wide min-h-[220px] flex flex-col justify-end">
                      <h3 className="text-[25px] mb-1">
                        {course.course_title}
                      </h3>

                      <p className="text-[16px] leading-snug">
                        {course.course_description.length > 100
                          ? course.course_description.slice(0, 50) + "..."
                          : course.course_description}
                      </p>

                      <div className="flex items-center justify-between text- gap-2 mt-3">
                        {/* Learn More Button */}
                        <button
                          onClick={() =>
                            navigate(`/Cource-Detail/${course.id}`)
                          }
                          className="px-6 py-2 font-bold bg-[#ffffff] text-[#000000] rounded-3xl hover:bg-gray-200 transition text-sm"
                        >
                          Learn More
                        </button>
                        {/* Course Type Badge */}
                        <span
                          className={`px-3 py-1 font-bold text-white text-xs  rounded-full transition-all duration-300 shadow-md ${
                            course.course_type.toLowerCase() === "live"
                              ? "bg-[#09D0C6]"
                              : course.course_type.toLowerCase() === "hybrid"
                              ? "bg-[#000000]"
                              : "bg-[#FF757A]"
                          }`}
                        >
                          {course.course_type}
                        </span>
                      </div>
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
