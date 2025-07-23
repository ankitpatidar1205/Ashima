import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef } from "react";
import letstart1 from "../../assets/letstart1.png";
import letstart2 from "../../assets/letstart2.png";
import letstart3 from "../../assets/letstart3.png";
import letstart4 from "../../assets/DIGITAL PRODUCTS.jpeg";
import { Link } from "react-router-dom";

const MakeLearningBetter = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 480;
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 480;
    }
  };

  const cards = [
    {
      image: letstart1,
      title: "INDUSTRY-RELEVANT SKILLS",
      description:
        "STAY AHEAD IN YOUR FIELD BY MASTERING HIGH-DEMAND SKILLS THROUGH OUR ONLINE SESSIONS",
    },
    {
      image: letstart2,
      title: "HYBRID LEARNING PLATFORM",
      description:
        "WORK EXPERIENCE CERTIFICATES FOR REAL PROJECTS AND COHORT LEARNING",
    },
    {
      image: letstart3,
      title: "CAREER NETWORKING",
      description:
        "STAY AHEAD IN YOUR FIELD BY MASTERING HIGH-DEMAND SKILLS THROUGH OUR ONLINE SESSIONS",
    },
    {
      image: letstart4,
      title: "DIGITAL PRODUCTS",
      description:
        "Instant access to ready-made AI tools, templates, and prompts to supercharge your learning.",
    },
  ];

  return (
    <div className="bg-[#FAFAF8] relative py-14">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-center ml-10 mb-12 lg:mt-8">
        {/* Left Heading */}
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <h2 className="text-[55px] text-[#000000] sm:text-[50px] lg:text-[55px] font-impact tracking-wide uppercase leading-[65px]">
            LETS MAKE <br /> LEARNING BETTER
          </h2>
        </div>

        {/* Right CTA */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-start lg:ml-20">
          <p className="text-[16px] sm:text-sm font-roboto text-[#000000] uppercase tracking-[0.2em] leading-[25px] mb-4">
            Become a Pro with us through industry-relevant <br /> skills
          </p>
          <Link to="/signup">
            <button className="px-[16px] w-[220px] h-[54px] py-[12px] bg-[#FF757A] text-black font-Roboto Condensed rounded-[16px] hover:bg-[#ff5c62] transition">
              Sign Up
            </button>
          </Link>
        </div>
      </div>

      {/* Cards Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-10 bg-[#f4f3f3]">
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg overflow-hidden min-w-[300px] sm:min-w-[380px] md:min-w-[420px] lg:min-w-[448px] h-[497px] flex-shrink-0 border border-gray-200 shadow-md"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />

              {/* Dark Overlay */}
              <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-black/80 via-black/50 to-transparent backdrop-blur-md"></div>

              {/* Text Content */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-[16px] font-bold font-Roboto Condensed uppercase mb-2">
                  {card.title}
                </h3>
                <p className="text-sm mb-3">{card.description}</p>
                {/* <button className="px-4 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition text-sm">
                  Learn More
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows & Dots */}
      <div className="flex items-center justify-between w-full max-w-[1380px] mx-auto mt-10">
        {/* Left Arrow */}
        <div>
          <button
            onClick={scrollLeft}
            className="bg-[#00E0C6] text-black p-2 rounded-full hover:bg-[#00c5b0] transition"
          >
            <FaArrowLeft className="h-3 w-3" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center space-x-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === 0 ? "bg-white" : "bg-gray-500"
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

export default MakeLearningBetter;
