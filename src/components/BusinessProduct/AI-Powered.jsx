import React from "react";
import business1 from "../../assets/business1.png";
import Header from "../../Layout/Header";
import Aipowered1 from "../../assets/Aipowered1.png";
import Aipowered2 from "../../assets/Aipowered2.png";
import Aipowered3 from "../../assets/Aipowered3.png";
import FAQSection from "../Home/FAQSection";
import Footer from "../../Layout/Footer";
import ReviewCard from "../Home/ReviewCards";
import Startlearning from "../Home/StartLearning";
import { Link } from "react-router-dom";

const AIPowered = () => {
  const features = [
    {
      img: Aipowered1,
      title: "Upload Your Material",
      desc: "Upload any document, textbook, or notes and let our AI analyze the content.",
    },
    {
      img: Aipowered2,
      title: "AI Creates Your Deck",
      desc: "Our AI generates flashcards and quizzes based on the key concepts in your document.",
    },
    {
      img: Aipowered3,
      title: "Review & Master",
      desc: "Study the flashcards, take quizzes, and track your progress as you master the material.",
    },
  ];
  return (
    <>
      <Header />
      <div className="bg-[#047670] py-10 px-4 md:px-16 pt-32">
        <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text Section */}
          <div className="text-[#ffffff] md:w-1/2">
            <h2 className="text-[50px] md:text-5xl font-normal mb-4 font-impact">
              AI-Powered Learning
            </h2>
            <p className="text-[22px] md:text-lg font-medium font-jost w-full md:w-[653px]">
              Create, Learn, Master with AI SKILLS Flashcards Upload any
              document and instantly generate AI-powered flashcards and quizzes
              to accelerate your learning.
            </p>

            <button className="mt-6 text-[22px] bg-[#ffffff] text-[#047670] font-bold px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition w-[325px] h-[57px] duration-300 font-roboto">
              upload your document
            </button>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src={business1}
              alt="AI Skills"
              className="rounded-md w-full object-cover shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#FAFAF9] py-12 px-4 md:px-16">
        <h2 className="text-[#047670] text-center text-[50px] md:text-[36px] font-normal mb-10 font-impact">
          Why Partner With Us?
        </h2>
        <p className="text-[20px] text-center font-normal font-roboto text-[#1E1E1E] mb-10">
          Transform any document into a powerful learning tool in just a few
          minutes
        </p>

        {/* Wrapper to center and limit max-width */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-[#ffffff] border-[1px] border-[#000000]/10 shadow-sm rounded-[3px] p-6 text-center transition duration-300 hover:shadow-md h-[260px]"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={item.img}
                    alt={`icon-${index}`}
                    className="h-[60px] w-[60px] object-contain"
                  />
                </div>
                <h5>{item.title}</h5>
                <p className="text-[20px] text-[#1E1E1E] font-normal font-jost">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#047670] text-[#ffffff] text-center py-16 px-4">
        {/* Heading */}
        <h2 className="text-[36px] sm:text-[36px] font-normal font-impact mb-2">
          Ready To Accelerate Your Learning?
        </h2>

        {/* Subheading */}
        <p className="text-[18px] font-jost font-normal text-[#ffffff] max-w-xl mx-auto mt-4">
          Our AI generates flashcards and quizzes based on the key concepts in
          your document.
        </p>
      </div>
      <div className="mt-16">
        <FAQSection />
      </div>
      <ReviewCard />
      <Startlearning />
      <Footer />
    </>
  );
};

export default AIPowered;
