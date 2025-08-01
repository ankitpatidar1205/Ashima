import { FaYoutube } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import ReviewCrad from "../Home/ReviewCards";
import FAQSection from "../Home/FAQSection";
import axiosInstance from "../../utils/axiosInstance";
import useCurrency from "../../utils/useCurrency";
import { addItemToCart, fetchCartItemById } from "../../Redux/slices/cartSlice/cartSlice";
import { useDispatch } from "react-redux";
import ReviewSection from "./ReviewSection";

const CourceDetail = () => {
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [showLesson, setShowLesson] = useState(false);
  const currency = useCurrency();
  const user_id = localStorage.getItem("is_id");
  const role = localStorage.getItem("role");
  const navigate = useNavigate();
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

  const handleCart = async () => {
    if (role === "student") {
      await dispatch(addItemToCart({ user_id, course_id: id }));
      toast.success("🎉 Course added to cart successfully!", { position: "top-center" });
      await dispatch(fetchCartItemById(user_id));
    } else {
      toast.error("⚠️ Please login with your student account to add this course.", {
        position: "top-center",
      });
      setTimeout(() => navigate("/login"), 2000);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Header />
      <div className="bg-[#ffffff] py-4">
        <div className="lg:h-[500px] bg-[#047670] sm:px-10 md:px-20 py-9 sm:py-16 pt-28 lg:pt-28">
          <div className="flex flex-col lg:flex-row gap-6 h-full">
            <div className="w-full sm:w-11/12 lg:w-2/3 bg-[#047670] sm:px-6 md:px-12 py-4 mx-auto">
              <button
                onClick={() => window.history.back()}
                className="absolute top-28 left-4 text-white text-2xl bg-[#047670] rounded-full p-2"
                style={{ fontSize: "2.5rem", fontWeight: "bold" }}
              >
                ←
              </button>

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
              </div>
            </div>

            <div className="w-full lg:w-1/3 flex flex-col items-start">
              <div className="w-full bg-[#ffffff] rounded shadow text-[#000000] relative">
                <div className="relative">
                  <iframe  src={courseData?.test_video}  title="Course Video"  className="w-full h-[300px] rounded-t"
                    allowFullScreen ></iframe>
                </div>

                <div className="p-4">
                  <h3 className="font-normal text-[24px] sm:text-[28px] font-impact">
                    {courseData?.course_title}
                  </h3>
                  <div className="mt-2">
                    <p className="text-[28px] text-[#000000] font-roboto font-bold">
                      For {currency.symbol}
                      {(parseFloat(courseData?.course_price) * currency.rate).toFixed(2)}
                    </p>
                  </div>

                 <div className="flex flex-col mt-4 gap-3">
  {/* Add to Cart Button */}
  <button  onClick={handleCart}
    className="w-full bg-white text-[#047670] text-[22px] font-roboto rounded-[12px] h-[41px] border-[1px] border-[#047670] font-bold" >
    Add To Cart
  </button>

  {/* Listen & Test Buttons Side by Side */}
<div className="flex justify-center gap-3 mt-4">
  <button
    onClick={() => {
      if (role === "student") {
        setShowLesson(true);
      } else {
        toast.error("⚠️ Please login with your student account to access lessons.", {
          position: "top-center",
        });
        setTimeout(() => navigate("/login"), 2000);
      }
    }}
    className="px-6 py-2 text-white bg-[#047670] rounded-lg font-bold">
    Flipbook 
  </button>

  {courseData?.tests?.length > 0 && (
    <button
      onClick={() => {
        if (role === "student") {
          navigate(`/StudentTest/${id}`);
        } else {
          toast.error("⚠️ Please login with your student account to take the test.", {
            position: "top-center",
          });
          setTimeout(() => navigate("/login"), 2000);
        }
      }} className="px-6 py-2 text-white bg-[#047670] rounded-lg font-bold" > Test</button>)}
      {courseData?.tests?.length > 0 && (
    <button
      onClick={() => {
        if (role === "student") {
          navigate(`/StudentTest/${id}`);
        } else {
          toast.error("⚠️ Please login with your student account to take the test.", {
            position: "top-center",
          });
          setTimeout(() => navigate("/login"), 2000);
        }
      }} className="px-6 py-2 text-white bg-[#047670] rounded-lg font-bold" >Read</button>)}
</div>
</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lesson Modal */}
       {showLesson && (
  <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
    <div className="bg-black w-full h-full relative">
      <button    onClick={() => setShowLesson(false)}    className="absolute top-4 right-4 text-white text-2xl font-bold z-50" >   ✖ </button>
      <iframe  src={courseData?.course_content_video_link}  title="Lesson Video"  className="w-full h-full"    allowFullScreen ></iframe>
    </div>
  </div>
)}


        {/* Instructor */}
     <div className="w-full sm:w-[900px] ml-4 sm:ml-20 mt-16">
  <h3 className="text-[30px] sm:text-[38px] font-jost text-[#1e1e1e] mb-6 font-semibold">
    Know Your Instructor
  </h3>
  {courseData?.instructor_details && (
    <div className="shadow-xl border border-black rounded-[6px] p-6 flex flex-col items-center gap-6 sm:w-[450px]">
      <img  
        src={courseData.instructor_details.avatar}
        className="w-[220px] h-[220px] rounded-full object-cover" 
        alt={courseData.instructor_details.full_name} 
      />
      <div className="text-center">
        <h6 className="text-[#1e1e1e] text-[18px] font-semibold mb-2">
          Name: {courseData.instructor_details.full_name}
        </h6>
        <p className="text-[15px] font-roboto font-bold mb-1">
          Expertise: {courseData.instructor_details.expertise}
        </p>
        <p className="text-[15px] font-roboto">
          Email: {courseData.instructor_details.email}
        </p>
      </div>
    </div>
  )}
  </div>

        {/* FAQ */}
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
                      <p className="font-roboto text-[20px] font-bold">{faq.question}</p>
                      <p className="text-[16px] font-robotp text-[#1E1E1ECC]">{faq.answer}</p>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <ReviewSection id={id} />
        <FAQSection />
        <ReviewCrad />
      </div>
      <Footer />
    </>
  );
};

export default CourceDetail;
