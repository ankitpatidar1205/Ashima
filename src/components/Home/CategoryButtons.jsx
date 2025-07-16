// import { useRef } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import Ride1 from "../../assets/RidePage1.png";
// import Ride2 from "../../assets/RidePage2.png";
// import Ride3 from "../../assets/RidePage3.png";
// import Ride4 from "../../assets/RidePage4.png";

// const courses = [
//   {
//     title: "MARKETING & SALES",
//     image: Ride1,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
//   },
//   {
//     title: "AI & MI",
//     image: Ride2,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
//   },
//   {
//     title: "PRODUCTS",
//     image: Ride3,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
//   },
//   {
//     title: "BUSINESS DEVELOPMENT",
//     image: Ride4,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
//   },
//   {
//     title: "BUSINESS DEVELOPMENT",
//     image: Ride4,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
//   },
//   {
//     title: "BUSINESS DEVELOPMENT",
//     image: Ride4,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
//   },
//   {
//     title: "BUSINESS DEVELOPMENT",
//     image: Ride4,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
//   },
//   {
//     title: "BUSINESS DEVELOPMENT",
//     image: Ride4,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
//   },
// ];

// const RideTheAIWave = () => {
//   const scrollRef = useRef(null);

//   const scrollLeft = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({
//         left: -300,
//         behavior: "smooth",
//       });
//     }
//   };

//   const scrollRight = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({
//         left: 300,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div className="bg-[#000000] text-[#ffffff] py-10">
//       {/* Heading */}
//       <h2 className="text-center text-[45px] sm:text-5xl font-impact uppercase mb-10">
//         RIDE THE AI WAVE WITH US
//       </h2>

//       {/* Cards + Arrows wrapper */}

//       <div className="relativemt-20">
//         <div className="w-full px-10">
//           <div
//             ref={scrollRef}
//             className="flex justify-center gap-2 "
//           >
//             {courses.map((course, index) => (
//               <div
//                 key={index}
//                 className="bg-[#ffffff] text-[#000000] w-[320px] h-[455px] rounded-[4px] shadow-lg p-6 flex-shrink-0"
//               >
//                 <h3 className="font-impact text-[24px] uppercase">
//                   {course.title}
//                 </h3>
//                 <img
//                   src={course.image}
//                   alt={course.title}
//                   className="w-full h-[208px] object-cover rounded-[4px] mb-4"
//                 />
//                 <p className="text-[16px] font-Roboto Condensed text-[#1E1E1E] uppercase mb-4 line-clamp-3">
//                   {course.description}
//                 </p>
//                 <button className=" w-[175px] h-[44px]  bg-[#000000] text-white font-roboto rounded-xl hover:bg-gray-900 transition text-[16px]">
//                   EXPLORE COURSES
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Navigation Dots & Arrows */}
//       <div className="flex items-center justify-between w-full max-w-[1380px] mx-auto mt-10">
//         <div className="">
//           <button
//             onClick={scrollLeft}
//             className="bg-[#00E0C6] text-[#000000] p-2 rounded-full hover:bg-[#00c5b0] transition"
//           >
//             <FaArrowLeft className="h-3 w-3" />
//           </button>
//         </div>

//         <div className="flex justify-center space-x-2">
//           {[...Array(4)].map((_, i) => (
//             <div
//               key={i}
//               className={`w-3 h-3 rounded-full ${
//                 i === 0 ? "bg-white" : "bg-gray-500"
//               }`}
//             ></div>
//           ))}
//         </div>

//         <div className="">
//           <button
//             onClick={scrollRight}
//             className="bg-[#00E0C6] text-[#000000] p-2 rounded-full hover:bg-[#00c5b0] transition"
//           >
//             <FaArrowRight className="h-3 w-3" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RideTheAIWave;

import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Ride1 from "../../assets/RidePage1.png";
import Ride2 from "../../assets/RidePage2.png";
import Ride3 from "../../assets/RidePage3.png";
import Ride4 from "../../assets/RidePage4.png";
import { Link } from "react-router-dom";
const courses = [
  {
    title: "Digital Marketing",
    image: Ride1,
    description: " Transform your marketing with AI-powered strategies that deliver smarter campaigns and real results. Learn to harness AI tools to create, optimize, and scale like a pro.",
  },
  {
    title: "Artificial Intelligence",
    image: Ride2,
    description: "AI agents are reshaping every industry — don’t just use it, learn to lead with it. This course gives you hands-on skills to build, understand, and apply AI across realworld business and product scenarios.",
  },
  {
    title: "PRODUCTS",
    image: Ride3,
    description: "The future of product management isn’t just about building features — it’s about building smart, data-driven experiences. Learn how to combine strategy, user empathy, and AI to launch products that lead the market.",
  },
  {
    title: "Machine Learning",
    image: Ride4,
    description: "Machines don’t just follow — they learn. Whether you design products, crunch numbers, or drive strategy — Machine Learning is your superpower.",
  },
  {
    title: "Data Science",
    image: Ride1,
    description: "In the AI era, every decision is a data decision. Whether you build, lead, or support — Data Science is your survival skill.",
  },
  {
    title: "STARTUP CASE STUDIES",
    image: Ride2,
    description: "Dive deep into the success secrets of the world’s top AI startups. Unlock their strategies, challenges, and breakthroughs — decoded for your next big idea.",
  },
  {
    title: "No Code",
    image: Ride4,
    description: "Build powerful AI agents without writing a single line of code. Learn how to automate, innovate, and scale using the latest no-code AI tools — fast and easy",
  },
];

const RideTheAIWave = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -340,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 340,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-[#000000] text-[#ffffff] py-10">
      {/* Heading */}
      <h2 className="text-center text-[45px] sm:text-5xl font-impact uppercase mb-10">
        RIDE THE AI WAVE WITH US
      </h2>

      {/* Cards + Arrows wrapper */}
      <div className="relative mt-20">
        <div className="w-full px-10 overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto scroll-smooth scrollbar-hide"
          >
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-[#ffffff] text-[#000000] w-[320px] h-[455px] rounded-[4px] shadow-lg p-6 flex-shrink-0 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
              >
                <h3 className="font-impact text-[24px] uppercase">
                  {course.title}
                </h3>
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-[208px] object-cover rounded-[4px] mb-4"
                />
                <p className="text-[16px] font-Roboto Condensed text-[#1E1E1E] uppercase mb-4 line-clamp-3">
                  {course.description}
                </p>

                <Link to="/explorecourses" className="text-decoration-none">
                  <button className="w-[175px] h-[44px] bg-[#000000] text-white font-roboto rounded-xl hover:bg-gray-900 transition text-[16px]">
                    EXPLORE COURSES
                  </button>
                </Link>

              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Dots & Arrows */}
      <div className="flex items-center justify-between w-full max-w-[1380px] mx-auto mt-10">
        {/* Left Arrow */}
        <div>
          <button
            onClick={scrollLeft}
            className="bg-[#00E0C6] text-[#000000] p-2 rounded-full hover:bg-[#00c5b0] transition"
          >
            <FaArrowLeft className="h-3 w-3" />
          </button>
        </div>

        {/* Static Dots */}
        <div className="flex justify-center space-x-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${i === 0 ? "bg-[#ffffff]" : "bg-gray-500"
                }`}
            ></div>
          ))}
        </div>

        {/* Right Arrow */}
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

export default RideTheAIWave;
