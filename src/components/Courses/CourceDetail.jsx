
import liveimg4 from "../../assets/liveimg4.png";
import liveimg5 from "../../assets/liveimg5.png";
import { FaYoutube } from "react-icons/fa";
import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import ReviewCrad from "../Home/ReviewCards";
import FAQSection from "../Home/FAQSection";
import { FaStar, FaVideo, FaFileAlt, FaDownload, FaTv, FaUser, } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import useCurrency from "../../utils/useCurrency";
import { addItemToCart } from "../../Redux/slices/cartSlice/cartSlice";
import { useDispatch } from "react-redux";
import { ToastContainer } from 'react-toastify';


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CourceDetail = () => {
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [moduleContents, setModuleContents] = useState({});

  const currency = useCurrency();
  const [data, setData] = useState([])
  const user_id = localStorage.getItem("is_id")
  const role = localStorage.getItem("role")
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axiosInstance.get(`/course/?id=${id}`);
        setCourseData(res.data.data);
      } catch (error) {
        console.error("Error fetching course:", error);
      }
    };

    if (id) {
      fetchCourse();
    }
  }, [id]);

  const recommendedCourses = [
    {
      id: 1,
      title: "Java Masterclass 2025 : 130+ Hours Of Expert Lessons",
      rating: 4.8,
      students: "95000",
      price: "$79.44",
      image: "https://via.placeholder.com/100",
      hours: "135.5 TOTAL HOURS",
      updated: "UPDATED 2024",
    },
    {
      id: 2,
      title: "Java Masterclass 2025 : 130+ Hours Of Expert Lessons",
      rating: 4.8,
      students: "95000",
      price: "$79.44",
      image: "https://via.placeholder.com/100",
      hours: "135.5 TOTAL HOURS",
      updated: "UPDATED 2024",
    },
    {
      id: 3,
      title: "Java Masterclass 2025 : 130+ Hours Of Expert Lessons",
      rating: 4.8,
      students: "95000",
      price: "$79.44",
      image: "https://via.placeholder.com/100",
      hours: "135.5 TOTAL HOURS",
      updated: "UPDATED 2024",
    },
    {
      id: 4,
      title: "Java Masterclass 2025 : 130+ Hours Of Expert Lessons",
      rating: 4.8,
      students: "95000",
      price: "$79.44",
      image: "https://via.placeholder.com/100",
      hours: "135.5 TOTAL HOURS",
      updated: "UPDATED 2024",
    },
    {
      id: 5,
      title: "Java Masterclass 2025 : 130+ Hours Of Expert Lessons",
      rating: 4.8,
      students: "95000",
      price: "$79.44",
      image: "https://via.placeholder.com/100",
      hours: "135.5 TOTAL HOURS",
      updated: "UPDATED 2024",
    },
  ];
  const sections = ["INTRODUCTION", "TOPIC 2", "TOPIC 3", "TOPIC 4"];
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };
  const [startDate, setStartDate] = useState(new Date());
  const handleCart = () => {
    if (role === "student") {
      dispatch(addItemToCart({ user_id, course_id: id }));
      toast.success("🎉 Course added to cart successfully!");
    } else {
      toast.error("⚠️ Please login with your student account to add this course.");
    }
  };



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/courseSyllabus/${id}`);
        setData(response.data.data);
      } catch (err) {
        setError(err.message || "Failed to load syllabus");
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);


  const fetchModuleContent = async (syllabus_id) => {
    try {
      const response = await axiosInstance.get(`/courseSyllabusCont/title/${syllabus_id}`);
      return response.data.data;
    } catch (err) {
      console.error(`Error fetching module ${syllabus_id}`, err);
      return [];
    }
  };
  useEffect(() => {
    const loadModuleContents = async () => {
      if (!courseData?.course_syllabus) return;

      const contentMap = {};
      await Promise.all(
        courseData.course_syllabus.map(async (module) => {
          const content = await fetchModuleContent(module.id);
          contentMap[module.id] = content;
        })
      );

      setModuleContents(contentMap);
    };

    loadModuleContents();
  }, [courseData]);

  useEffect(() => {
    const fetchModuleContent = async (syllabus_id) => {
      try {
        const res = await axiosInstance.get(`/courseSyllabusCont/title/${syllabus_id}`);
        return res.data.data;
      } catch (err) {
        console.error("Failed to load content:", err);
        return [];
      }
    };

    const loadModuleContents = async () => {
      if (!courseData?.course_syllabus) return;

      const contentMap = {};
      await Promise.all(
        courseData.course_syllabus.map(async (module) => {
          const content = await fetchModuleContent(module.id);
          contentMap[module.id] = content;
        })
      );

      setModuleContents(contentMap);
    };

    loadModuleContents();
  }, [courseData]);


  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Header />
      <div className="bg-[#ffffff] py-4">
        {/* Breadcrumb Navigation */}

        {/* Hero + Course Intro Section */}
        <div className="lg:h-[500px] bg-[#047670] sm:px-10 md:px-20 py-9 sm:py-16 pt-28 lg:pt-28">
          <div className="flex flex-col lg:flex-row gap-6 h-full">
            <div className="w-full sm:w-11/12 lg:w-2/3 bg-[#047670] sm:px-6 md:px-12 py-4 mx-auto">
              <div className="w-full flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-normal font-impact mb-2 mt-4 text-[#ffffff] uppercase">
                    {courseData?.course_title}
                  </h2>

                  <p className="text-[12px] sm:text-[14px] md:text-[16px] font-normal font-roboto text-[#ffffff] mb-4">
                    {courseData?.course_description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 font-roboto font-bold mb-2">
                    <span className="text-[#fBBC09] text-[20px]">HOSTED BY</span>
                    <div className="flex items-center gap-2">
                      <img
                        src={courseData?.instructor_details?.avatar}
                        className="w-[70px] h-[70px] rounded-full"
                        alt={courseData?.instructor_details?.full_name}
                      />
                      <span className="text-[20px] text-[#ffffff]">
                        {courseData?.instructor_details?.full_name}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <button className="bg-red-400 w-[90px] h-[30px] text-[#000000] text-[16px] px-3 py-1 rounded-[12px] font-roboto font-semibold">
                    {courseData?.course_type}
                  </button>
                </div>
              </div>
            </div>


            <div className="w-full lg:w-1/3 flex flex-col items-start">
              <div className="w-full bg-[#ffffff] rounded shadow text-[#000000] relative">
                <div className="relative">
                  <iframe
                    src={courseData?.test_video}
                    title="Course Video"
                    className="w-full h-[200px] rounded-t"
                    allowFullScreen
                  ></iframe>

                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex flex-col items-center z-10">
                    <div className="-mt-4">
                      <FaYoutube className="text-[#ffffff] bg-[#CD201F] w-[60px] h-[27px] rounded" />
                    </div>
                    <span className="text-[#ffffff] font-semibold text-[22px] font-jost mt-2">
                      Preview this course
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-normal text-[24px] sm:text-[28px] font-impact">
                    {courseData?.course_title}
                  </h3>
                  <p className="text-[16px] font-roboto font-normal text-black/50 mt-2">
                    {courseData?.course_description}
                  </p>

                  <hr className="w-[230px] border-[1px] border-[#000000]" />

                  <div className="mt-4">
                    <button className="w-full h-[41px] bg-[#047670] text-[#ffffff] font-roboto py-3 rounded-[12px] font-bold text-[18px] flex items-center justify-center">
                      Try Personal Plan For Free
                    </button>

                    <p className="text-[14px] text-[#000000] font-roboto font-medium mt-2 text-center">  Starting At $11.00 Per Month After Trial.   <br />
                      Cancel Anytime.  </p>
                  </div>

                  <div className="flex items-center">
                    <hr className="flex-grow border-t border-[#000000]" />
                    <span className="mx-2 text-[#000000] font-medium">Or</span>
                    <hr className="flex-grow border-t border-[#000000]" />
                  </div>

                  <div className="mt-2">
                    <p className="text-[28px] text-[#000000] font-roboto font-bold">
                      {currency.symbol}
                      {(parseFloat(courseData?.course_price) * currency.rate).toFixed(2)}
                    </p>
                  </div>

                  <div className="flex flex-col mt-4">
                    <button onClick={() => { handleCart() }} className="w-full bg-[#ffffff] text-[#047670] text-[22px] font-roboto rounded-[12px] h-[41px] border-[1px] border-[#047670] font-bold mb-4">
                      Add To Cart
                    </button>
                    <button className="w-full bg-[#ffffff] text-[#047670] text-[22px] font-roboto h-[41px] rounded-[12px] border-[1px] border-[#047670] font-bold mb-4">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* main */}
        <div className="w-full sm:w-[1000px] h-auto sm:mt-5 px-4 sm:px-40 grid gap-4">
          {/* Module Syllabus Block */}
          <div className="w-full sm:w-[900px] ml-1 sm:ml-20 h-auto sm:mt-16 px-4 sm:px-12 grid gap-4">
            <div className="md:col-span-3 bg-[#ffffff] py-6 px-4 sm:px-6 rounded shadow border">
              <h2 className="text-[24px] sm:text-[36px] font-jost font-semibold text-[#1e1e1e]">
                Course Modules
              </h2>

              <ul className="mt-6 space-y-4">
                {courseData?.course_syllabus && (
                  <ul className="mt-6 space-y-4">
                    {courseData.course_syllabus?.map((module, index) => (
                      <li key={index} className="flex flex-col items-start">
                        <h3 className="font-roboto text-[20px] font-medium text-[#047670] mb-2">
                          📖 {module?.module_title}
                        </h3>
                        <p className="font-roboto text-[16px] text-[#1E1E1E]">
                          {module?.module_syllabus}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}

              </ul>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-[850px] ml-4 sm:ml-20 mt-16">
          <h3 className="text-[28px] sm:text-[36px] font-jost text-[#1e1e1e] mb-6 w-full sm:w-[362px] h-auto font-semibold text-center sm:text-left whitespace-nowrap">
            Know Your Instructor
          </h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-8 sm:gap-10">
            {courseData?.instructor_details && (
              <div className="shadow-2xl border-black rounded-[4px] p-4 flex flex-col items-start gap-6 sm:w-[400px] w-full h-auto uppercase">
                <img
                  src={courseData?.instructor_details?.avatar}
                  className="w-[200px] h-[200px] rounded-full bg-[#ff757A] text-[#ffffff] text-sm font-bold mt-1"
                  alt={courseData.instructor_details.full_name}
                />

                <div className="w-full">
                  <h6 className="text-[#1e1e1e] font-semibold">
                    Name : {courseData.instructor_details.full_name}
                  </h6>
                  <p className="text-[14px] font-roboto text-[#1e1e1e] font-bold">
                    Expertise :{courseData.instructor_details.expertise}
                  </p>
                  <p className="text-[14px] font-roboto text-[#1e1e1e]">
                    Email:    {courseData.instructor_details.email}
                  </p>
                </div>
              </div>
            )}

          </div>

        </div>

        <div className="w-full sm:w-[850px] ml-4 sm:ml-20 mt-16">
          <div className="bg-[#ffffff] border rounded shadow p-4">
            <h2 className="text-[36px] font-semibold font-jost text-[#1e1e1e] mb-6">
              FAQ's
            </h2>

            <ul className="space-y-6">
              {courseData?.faqs &&
                JSON.parse(courseData.faqs).map((faq, index) => (
                  <li key={index} className="flex items-start">
                    <input
                      type="checkbox"
                      className="mt-1 mr-3 w-[20px] h-[20px] accent-[#047670]"
                      defaultChecked={index === 0}
                    />
                    <div>
                      <p className="font-roboto text-[20px] font-bold text-[#1e1e1e]">
                        {faq.question}
                      </p>
                      <p className="text-[16px] font-robotp font-normal text-[#1E1E1ECC]">
                        {faq.answer}
                      </p>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className=" bg-[#ffffff] mt-6 p-6 rounded  shadow-lg">
          <div className="w-full sm:w-[850px] ml-2 sm:ml-10">
            <div className="bg-[#ffffff] text-[#1e1e1e] p-4 sm:p-10 flex justify-start">

              <div className="w-full">
                <h2 className="text-[28px] sm:text-[36px] font-roboto font-bold mb-2">
                  COURSE CONTENT
                </h2>

                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <p className="text-[16px] text-[#1e1e1e] mb-2 sm:mb-6">
                    {courseData?.course_syllabus?.length} sections
                  </p>
                  {/* <p className="text-[18px] text-[#047670] font-roboto cursor-pointer mb-2 sm:mb-6">
                    EXPAND ALL SECTIONS
                  </p> */}
                </div>

                {/* Intro + Topics List with inner borders */}
                <div className="border-t border-double border-[#047670]/40 mt-1">
                  {courseData?.course_syllabus && (
                    <div>
                      {courseData.course_syllabus.map((module, i) => (
                        <div key={i}>
                          <div
                            style={{ backgroundColor: "#04767066" }}
                            onClick={() => toggleSection(i)}
                            className="flex flex-col sm:flex-row border-[3px] border-double border-[#047670]/40 items-start sm:items-center justify-between px-4 py-4 bg-[#047670]/40 transition-all cursor-pointer"
                          >
                            <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                              {openSection === i ? (
                                <ChevronUp className="w-4 h-4" />
                              ) : (
                                <ChevronDown className="w-4 h-4 text-[#047670]" />
                              )}
                              <span className="font-roboto text-lg">{module?.module_title}</span>
                            </div>
                            <span className="text-[12px] text-[#1e1e1e] font-roboto">
                              {/* LIVE ON 1:25 PM */}
                            </span>
                          </div>

                          {openSection === i && (
                            <div className="bg-[#ffffff] px-4 py-3 text-sm text-gray-700 border-b border-gray-300">
                              {moduleContents[module.id] ? (
                                moduleContents[module.id].length > 0 ? (
                                  <ul className="space-y-1">
                                    {moduleContents[module?.id]?.map((item) => (
                                      <li key={item?.id} className="flex items-center gap-2 text-[#1e1e1e]">
                                        <span>* {item?.title}</span>
                                      </li>
                                    ))}
                                  </ul>
                                ) : (
                                  <p>No topics found for this module.</p>
                                )
                              ) : (
                                <p>No topics found for this module.</p>
                              )}
                            </div>
                          )}

 
                          {i === 0 && (
                            <div className="border-double border-[#047670]"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* LIVE Section */}
                  {/* <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 py-4 bg-teal-700 text-white">
                    <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                      <ChevronDown className="w-4 h-4 text-[#ffffff]" />
                      <span className="font-bold text-lg">LIVE</span>
                    </div>
                    <span className="text-xs font-semibold">NEXT COHORT</span>
                  </div> */}
                </div>

              </div>
            </div>
          </div>

          <div className="ml-4 sm:ml-20">
            {/* Course Includes */}
            <h4 className="font-roboto text-[36px] font-bold ml-0">
              THIS COURSE{" "}
              <span className="text-[#047670] text-[36px] font-roboto font-bold">
                INCLUDES:
              </span>
            </h4>

            <div className="grid gap-3 mt-3 text-[#1e1e1e] font-roboto font-normal ml-0 text-[16px]">
              <div className="flex flex-col sm:flex-row sm:items-center font-normal ">
                <div className="flex items-center">
                  <FaVideo className="mr-2" /> 16 hours on-demand video
                </div>
                <div className="flex items-center mt-2 sm:mt-0 sm:ml-5">
                  <FaTv className="mr-2" /> Access on mobile and TV
                </div>
              </div>

              <div className="flex items-center">
                <FaFileAlt className="mr-2" /> 3 articles
              </div>
              <div className="flex items-center">
                <FaDownload className="mr-2" /> 4 downloadable resources
              </div>
            </div>
          </div>

          <div className="ml-4 sm:ml-20">
            {/* Requirements */}
            <h4 className="font-bold mt-10 text-[36px] text-start sm:text-left">
              REQUIREMENTS
            </h4>
            <p className="text-[#1e1e1e] font-normal font-roboto text-[16px] text-start sm:text-left">
              While we provide low-code options, this course assumes you have
              some coding experience. It's not
              <br className="hidden sm:block" />
              suitable for those who have never written or worked with even
              basic code.
            </p>
          </div>

          {/* Students Also Bought */}

          <div className=" mt-16 sm:ml-20">
            <hr className="" />
            <h3 className="font-bold font-roboto uppercase text-[36px] text-[#047670] text-start">
              STUDENTS ALSO BOUGHT
            </h3>

            <div className="space-y-4 mt-4 gap-3 ml-0 sm:ml-30">
              {recommendedCourses.map((course, index) => (
                <div key={course.id}>
                  <div className="flex flex-col sm:flex-row bg-[#ffffff]  items-start">
                    <img
                      src={liveimg4}
                      alt={course.title}
                      className="w-[61px] h-[81px] object-cover rounded mb-4 sm:mb-0 sm:mr-4"
                    />

                    <div className="">
                      {/* Title + Ratings + Heart in one row */}
                      <div className="flex flex-col sm:flex-row sm:items-center">
                        <h6 className="font-bold text-[22px] font-roboto text-[#000000]">
                          {course.title}
                        </h6>

                        {/* Rating, Students, Price */}
                        <div className="flex flex-wrap items-center text-gray-600 text-[14px] mt-2 sm:mt-0 sm:ml-5">
                          <FaStar className="text-[#FBBC09] mr-1" />
                          {course.rating}
                          <FaUser className="ml-4 mr-1 font-roboto font-medium text-[14px] uppercase" />
                          {course.students}
                          <span className="text-[#000000] ml-4 font-roboto font-bold text-[20px]">
                            {course.price}
                          </span>

                          <button className="rounded-full flex items-center justify-center ml-4 mt-2 sm:mt-0">
                            <img
                              src={liveimg5}
                              alt="Heart"
                              className="w-[40px] h-[40px]"
                            />
                          </button>
                        </div>
                      </div>

                      {/* Bottom: HIGH RATED, Hours, Updated */}
                      <div className="mt-2">
                        <span className="bg-[#FF757A] text-[#1e1e1e] font-semibold font-roboto uppercase px-2 py-0.5 rounded-[4px] mr-2 text-[10px]">
                          HIGH RATED
                        </span>
                        <span className="text-[#047670] font-semibold uppercase font-roboto text-[16px] mr-3">
                          {course.hours}
                        </span>
                        <span className="text-[#1e1e1e] font-semibold uppercase font-roboto text-[14px]">
                          {course.updated}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 👇 Horizontal line after each course */}
                  <hr className="w-full sm:w-[850px] border-[#000000]" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <FAQSection />
        <ReviewCrad />
      </div>
      <Footer></Footer>
    </>
  );
};

export default CourceDetail;