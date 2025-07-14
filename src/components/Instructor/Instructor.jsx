import React from "react";
import { Link } from "react-router-dom";
import blogdetail1 from "../../assets/blogdetail1.png";
import blogdetail2 from "../../assets/blogdetail2.png";
import blogdetail3 from "../../assets/blogdetail3.png";
import blogdetail4 from "../../assets/blogdetail4.png";
import blogdetail5 from "../../assets/blogdetail5.png";
import blogdetail6 from "../../assets/blogdetail6.png";
import blogdetail7 from "../../assets/blogdetail7.png";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const AITeacherLanding = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "WHAT TYPES OF COURSES CAN I CREATE ON THE PLATFORM?",
      answer:
        "You can create live, video, hybrid, and cohort-based courses in any subject of your expertise.",
    },
    {
      question: "HOW MUCH COMMISSION DOES THE PLATFORM TAKE?",
      answer:
        "We charge only a 10% platform fee, allowing instructors to keep 90% of their course revenue.",
    },
    {
      question: "WHEN WILL I RECEIVE MY EARNINGS?",
      answer:
        "Earnings are processed monthly and typically reach you within 5–7 business days.",
    },
    {
      question: "HOW DO I RECEIVE MY PAYMENTS?",
      answer:
        "Payments are sent via secure channels such as bank transfer or PayPal.",
    },
    {
      question: "CAN I SET MY OWN COURSE PRICES?",
      answer:
        "Yes, instructors have full control over setting the price of their courses.",
    },
    {
      question: "DO I OWN THE CONTENT I UPLOAD?",
      answer:
        "Absolutely. You retain full ownership of your course content at all times.",
    },
    {
      question: "CAN I EDIT MY COURSE AFTER PUBLISHING?",
      answer:
        "Yes, you can update your content and resources anytime after publishing.",
    },
  ];

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="bg-[#047670] text-[#ffffff] py-12 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mt-28">
          {/* Left Text Content */}
          <div className="w-full md:w-1/2 text-start md:text-left ml-10 ">
            <h1 className="text-[36px] sm:text-[42px] md:text-[50px] font-impact font-normal ">
              Teach Your Way Transform Life
            </h1>
            <p className="text-[18px] sm:text-[20px] md:text-[22px] font-jost font-semibold ">
              Join AI SKILLS And Reach A Global Guideline
            </p>
            <Link to="/instructorSignup">
              <button className="bg-[#ffffff] text-[#047670] font-bold font-roboto py-2 px-6 rounded-[4px] mt-2">
                Sign Up
              </button>
            </Link>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 text-center">
            <img
              src={blogdetail1}
              alt="Instructor"
              className="rounded w-full max-w-[620px] max-h-[348px] object-cover mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Why Teach Section */}

      <section className="bg-[#ffffff] py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-center text-[#047670] font-impact font-normal text-[50px] mb-10">
            Why Teach With AISkills ?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
            {/* Card 1 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="border-[1px] shadow-sm rounded-lg p-6 text-center hover:shadow-md transition h-[290px] w-full max-w-[420px]"
            >
              <div className="mb-4 flex justify-center">
                <img src={blogdetail2} />
              </div>
              <h3 className="font-impact font-normal text-[#1E1E1E1] text-[26px] mb-2">
                Why Teach With AISkills ?
              </h3>
              <p className="text-[22px] font-jost font-semibold text-[#1E1E1E1]">
                Only A 10% Platform Fee, Much Lower Than Competitors.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="border-[1px] shadow-sm rounded-lg p-6 text-center hover:shadow-md transition h-[290px] w-full max-w-[420px]"
            >
              <div className="mb-4 flex justify-center">
                <img src={blogdetail3} className="h-[80px] w-[80px]" />
              </div>
              <h3 className="font-impact font-normal text-[#1E1E1E1] text-[26px] mb-2">
                Flexible Teaching
              </h3>
              <p className="text-[22px] font-jost font-semibold text-[#1E1E1E1]">
                Choose Online, Hybrid, Video, Or Cohort-Based Teaching.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="border-[1px] shadow-sm rounded-lg p-6 text-center hover:shadow-md transition h-[290px] w-full max-w-[420px]"
            >
              <div className="mb-4 flex justify-center">
                <img src={blogdetail4} className="h-[80px] w-[80px]" />
              </div>
              <h3 className="font-impact font-normal text-[#1E1E1E1] text-[26px] mb-2">
                Expand Your Network
              </h3>
              <p className="text-[22px] font-jost font-semibold text-[#1E1E1E1]">
                Connect With Learners And Fellow Professionals Worldwide.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="border-[1px] shadow-sm rounded-lg p-6 text-center hover:shadow-md transition h-[290px] w-full max-w-[420px]"
            >
              <div className="mb-4 flex justify-center">
                <img src={blogdetail5} className="h-[80px] w-[80px]" />
              </div>
              <h3 className="font-impact font-normal text-[#1E1E1E1] text-[26px] mb-2">
                Simple & Powerful
              </h3>
              <p className="text-[22px] font-jost font-semibold text-[#1E1E1E1]">
                User-Friendly Platform With Dedicated Support.
              </p>
            </motion.div>

            {/* Card 5 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="border-[1px] shadow-sm rounded-lg p-6 text-center hover:shadow-md transition h-[290px] w-full max-w-[420px]"
            >
              <div className="mb-4 flex justify-center">
                <img src={blogdetail6} className="h-[80px] w-[80px]" />
              </div>
              <h3 className="font-impact font-normal text-[#1E1E1E1] text-[26px] mb-2">
                Make A Real Impact
              </h3>
              <p className="text-[22px] font-jost font-semibold text-[#1E1E1E1]">
                Empower Students To Achieve Their Goals And Grow.
              </p>
            </motion.div>

            {/* Card 6 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="border-[1px] shadow-sm rounded-lg p-6 text-center hover:shadow-md transition h-[290px] w-full max-w-[420px]"
            >
              <div className="mb-4 flex justify-center">
                <img src={blogdetail7} className="h-[80px] w-[80px]" />
              </div>
              <h3 className="font-impact font-normal text-[#1E1E1E1] text-[26px] mb-2">
                Your Expertise, Your Schedule
              </h3>
              <p className="text-[22px] font-jost font-semibold text-[#1E1E1E1]">
                Teach Live, Create Self-Paced Courses, Or Mix Both.
              </p>
            </motion.div>
          </div>

          <div className="text-center mt-10">
            <Link to="/instructorSignup">
              <button className="p-[10px] w-[90px] h-[50px] text-center text-[#ffffff] text-[18px] bg-[#047670] rounded-[12px] font-medium font-roboto">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Teach on AI Skills Section */}

      <section className="bg-[#047670] text-[#ffffff] py-0">
        <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
          {/* Left Content (Text) */}
          <div className="w-full md:w-1/2 flex flex-col justify-center px-5">
            <h2 className="text-[50px] font-normal  text-[#ffffff] font-impact mb-4">
              Teach on AI Skills Plan, Publish, and Promote an Engaging Class
            </h2>
            <p className="mb-6 overflow-auto font-roboto text-[20px] font-semibold text-[#ffffff]">
              At AI Skills, we make it easy for you to plan, publish, and
              promote engaging courses that truly connect with learners. Our
              platform empowers you to design classes in formats that suit your
              style—whether that’s live sessions, hybrid cohorts, or self-paced
              video courses. With intuitive tools and a user-friendly interface,
              you can focus on creating impactful content while we handle the
              technical details. Promote your courses eortlessly through our
              built-in marketing features and reach a global audience eager to
              learn from your expertise. Connect with a vibrant community of
              fellow instructors and professionals, expanding your network and
              influence. Teach on your own schedule, whether you want to lead
              live classes or build evergreen content, and enjoy dedicated
              support every step of the way. Join AI Skills and make a real
              dierence by helping students achieve their goals and grow their
              careers.=
            </p>
            <Link to="/instructorSignup">
              <button className="bg-[#ffffff] text-[#047670] font-bold font-roboto py-2 px-6 rounded-[4px] mt-2">
                Sign Up
              </button>
            </Link>
          </div>

          {/* Right Content (Image) */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://i.ibb.co/Z1JPmPxs/Rectangle-74.png"
              alt="Teach"
              className="w-full max-w-[753px] h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* FAQ and Footer */}

      <div className="bg-[#000000] py-20 px-6 md:px-12 mt-10">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2  items-center">
          <div className="text-[#ffffff] flex flex-col gap-4 text-start  pr-20 sm:pr-20 lg:pr-40">
            <h2 className="font-impact text-[55px] md:text-5xl uppercase">
              Frequently Asked <br /> Questions
            </h2>
            <p className="text-[16px] text-[#ffffff] font-roboto leading-snug">
              ENHANCE YOUR LEARNING WITH INSTANT DIGITAL PRODUCTS FROM INSTANT
              REAL-WORLD PROJECTS TO PROMPTS.
            </p>
          </div>

          {/* Right Section - FAQ List */}
          <div className="w-full">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-[#ffffff] py-4 hover:cursor-pointer font-roboto transition-all duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center text-[#ffffff] font-roboto text-[24px]">
                  <span>{faq.question}</span>
                  {openIndex === index ? (
                    <FaMinus className="text-[#00E0C6]" />
                  ) : (
                    <FaPlus className="text-gray-400" />
                  )}
                </div>
                {openIndex === index && (
                  <p className="text-gray-400 text-md mt-3 transition-opacity duration-300">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="mt-10">
        <Footer />
      </section>
    </div>
  );
};

export default AITeacherLanding;
