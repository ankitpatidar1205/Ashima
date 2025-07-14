import { useState } from 'react';
import Header from '../../Layout/Header';
import { motion } from "framer-motion";
import business2 from "../../assets/business2.png";
import business3 from "../../assets/business3.png";
import business4 from "../../assets/business4.png";
import business5 from "../../assets/business5.png";
import business6 from "../../assets/business6.png";
import business7 from "../../assets/business7.png";
import business8 from "../../assets/business8.png";
import business9 from "../../assets/business9.png";
import business10 from "../../assets/business10.png";
import business16 from "../../assets/business16.png";
import Launch1 from "../../assets/Launch1.png";
import Launch2 from "../../assets/Launch2.png";
import Launch3 from "../../assets/Launch3.png";
import Launch4 from "../../assets/Launch4.png";
import Launch5 from "../../assets/Launch5.png";
import Launch6 from "../../assets/Launch6.png";
import Launch7 from "../../assets/Launch7.png";
import Launch8 from "../../assets/Launch8.png";
import Launch9 from "../../assets/Launch9.png";
import Launch10 from "../../assets/Launch10.png";
import business15 from "../../assets/business15.png";
import { FaPlus, FaMinus } from "react-icons/fa";
import Footer from "../../Layout/Footer";



const LaunchPage = () => {
   const [checked, setChecked] = useState({
     foundational: true,
     coreSkills: true,
     advancedSkills: true,
     advancedTopics: true,
     capstone: true,
     foundations: true,
     stats: true,
     mvp: true,
     mlops: true,
     ml: true,
     nlp: true,
     deepLearning: true,
     rag: true,
     genAI: true,
     aiAgents: true,
   });

   const handleCheckbox = (key) => {
     setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
   };
   const renderItem = (key, title, description) => (
     <div className="space-y-2">
       <div className="flex items-start">
         <input
           type="checkbox"
           checked={checked[key]}
           onChange={() => handleCheckbox(key)}
           className="accent-[#047670] w-5 h-5 mt-[6px] mr-2"
         />
         <h4 className="text-[18px] font-semibold text-[#047670]">{title}</h4>
       </div>
       {checked[key] && (
         <ul className="pl-7 text-[16px] text-black list-disc">
           <li>{description}</li>
         </ul>
       )}
     </div>
   );
  const brandLogos = [
    { src: business2, alt: "Sun Life" },
    { src: business3, alt: "Amazon" },
    { src: business4, alt: "Springboard" },
    { src: business5, alt: "HP" },
    { src: business6, alt: "The North Face" },
    { src: business7, alt: "Visa" },
    { src: business8, alt: "Saatchi & Saatchi" },
    { src: business9, alt: "Walmart" },
    { src: business10, alt: "JP Morgan Chase" },
  ];
  
  const duplicatedLogos = [...brandLogos, ...brandLogos]; // for infinite scroll
  const options1 = [
    {
      title: "Personalized Training with Live Coaching ",
      desc: "Get access to live, instructor-led coaching tailored to your learning pace and needs. Our expert instructors will walk you through the most in-demand AI and data science skills, preparing you for real-world challenges.",
    },
    {
      title: "Tailored LinkedIn Profile and Resume Building ",
      desc: "A standout LinkedIn profile and resume are crucial for getting noticed by top companies. We’ll work with you to create a professional, impactful LinkedIn profile and a resume that highlights your skills, experience, and potential. Our goal is to ensure you attract recruiters and hiring managers.",
    },
    {
      title: "Job Application Assistance:",
      desc: "We Handle the Rest Once your profile is ready, we’ll handle the job search for you. Our team will apply to top AI/ML Product Manager and Data Science roles on your behalf. We take the burden off your shoulders so you can focus on preparing for interviews with confidence.",
    },
    
  ];
  

 const featuresLeft = [
   {
     icon: Launch3,
     title: "Personalized Coaching",
     desc: "Personalized coaching from AI/ML, Product Manager and Data Science experts.",
   },
   {
     icon: Launch4,
     title: "Tailored Profile",
     desc: "Tailored LinkedIn profile and resume creation to get you noticed.",
   },
   {
     icon: Launch5,
     title: "Job Application Support",
     desc: "We handle the job hunt for you.",
   },
   {
     icon: Launch6,
     title: "AI-powered",
     desc: "AI-powered interview prep and practice.",
   },
 ];

 const featuresRight = [
   {
     icon: Launch10,
     title: "Dedicated Study Buddy",
     desc: "Dedicated study buddy to keep you on track.",
   },
   {
     icon: Launch7,
     title: "Supportive AI Skills",
     desc: "Supportive AI skills community for guidance and collaboration.",
   },
   {
     icon: Launch8,
     title: "Get Hired",
     desc: "We’re with you until you get hired—never alone in your job search.",
   },
   {
     icon: Launch9,
     title: "No Upfront Fees",
     desc: "No upfront fees—pay the remaining balance only when you get the job.",
   },
 ];
     const options2 = [
       {
         title: "Interview Preparation with AI-Powered Tools.",
         desc: "We provide a tailored interview prep plan using AI-powered tools to simulate real interview scenarios. You’ll practice technical and behavioral interviews, receive instant feedback, and refine your answers with the help of expert coaches.",
       },
       {
         title:
           "Continuous Support: Study Buddy, AI Prep Help, and Community Access.",
         desc: "You won’t be alone during this journey. You’ll have a dedicated study buddy to help with motivation and learning. Plus, access to a supportive AI skills community where you can collaborate and get advice from others going through the same process.",
       },
       {
         title:
           "We Won't Leave You Alone: We're With You Until You Land the Job",
         desc: "Our unique program is designed to make sure you don’t just complete a course and leave—it’s about getting hired. We’ll be by your side every step of the way until you land your job. You can trust that we’ll never leave you hanging. Whether it's interview prep, job applications, or negotiating offers, we’ll support you until you are successfully employed.",
       },
       {
         title: "No Upfront Fees—Pay When You Land the Job!",
         desc: "We know how stressful it can be to invest in career development, so we’ve removed the financial burden. Pay only a small registration fee upfront, and once you land your job, you’ll pay the remaining balance. We’re here to support you until you get hired.",
       },
     ];
     const option3 = [
       {
         title: "Zeal for Hard Work:",
         desc: "The journey to securing a job in AI/ML Product Management or Data Science requires dedication and effort. We’ll guide you, but your commitment and passion for learning are essential to your success.",
       },
       {
         title: "Dedicated Time for Learning:",
         desc: "ou will need to dedicate time each week to learning, practicing assignments, and engaging with the course materials. This will help you build the skills needed to impress employers.",
       },
       {
         title: "Trust in Us:",
         desc: "We are committed to helping you succeed. Trust in our expertise, our process, and our team’s support to guide you through the program and the job search journey. Together, we will achieve your career goals.",
       },
     ];

     const [openIndex, setOpenIndex] = useState(null);

     const toggleFAQ = (index) => {
       setOpenIndex(openIndex === index ? null : index);
     };

     const faqs = [
       {
         question: "HOW LONG WILL IT TAKE TO LAND A JOB?",
         answer:
           "Most learners land a job within 3 to 6 months of completing the training, depending on their effort and background.",
       },
       {
         question: "HOW WILL YOU SUPPORT ME AFTER TRAINING?",
         answer:
           "We provide continuous support through mentorship, resume reviews, and interview preparation even after training.",
       },
       {
         question: "WHAT IF I DON'T GET A JOB?",
         answer:
           "We’re committed to your success and will continue to work with you until you land a job, with no extra cost.",
       },
       {
         question: "CAN I LEAVE THE PROGRAM IN BETWEEN DUE TO SOME EMERGENCY?",
         answer:
           "Yes, you can pause or leave the program anytime and resume later with our flexible learning options.",
       },
       {
         question: "DO I NEED ANY PRIOR EXPERIENCE?",
         answer:
           "No prior experience is required. Our programs are beginner-friendly and guided step-by-step.",
       },
       {
         question: "HOW IS THE PROGRAM DELIVERED?",
         answer:
           "The program is delivered fully online with live sessions, recorded videos, and hands-on real-world projects.",
       },
       {
         question: "HOW MUCH WILL YOU CHARGE AFTER GETTING A JOB?",
         answer:
           "We only charge a small placement fee once you get a job, ensuring our success is tied to yours.",
       },
     ];
  return (
    <>
      <Header />
      <div className="bg-[#047670] text-[#ffffff] py-20 px-4 md:px-10">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Left Section */}
          <div className="w-full md:w-1/2 text-start md:text-left">
            <h1 className="text-[50px] md:text-[44px] leading-[48px] font-normal font-[impact] mb-4">
              Launch Your Career With Confidence
            </h1>

            <p className="text-[22px] font-medium md:text-[20px] font-[jost] leading-[28px] mb-3">
              Become An AI/ML Product Manager Or Data Scientist In 4 Months
              <br />
              Are You Ready To Start Your Dream Career In The World Of AI/ML
              Product Management Or Data Science?
            </p>

            <h2 className="text-[22px] font-medium font-[jost] mb-4">
              At AI SKILLS
            </h2>

            <ul className="space-y-4">
              <li className="flex items-start text-[20px] font-[Roboto] leading-[26px]">
                <span className="text-[#ffffff] mr-2 mt-[6px]">✓</span>
                We Offer A Unique, Personalized Program Designed To Help You
                Land A Job In Just 4 Months
              </li>
              <li className="flex items-start text-[20px] font-[Roboto] leading-[26px]">
                <span className="text-[#ffffff] mr-2 mt-[6px]">✓</span>
                We Take Care Of Everything—From Training, Profile Enhancement,
                To Job Applications—So You Can Focus Solely On Mastering The
                Skills And Preparing For Interviews.
              </li>
            </ul>
          </div>

          {/* Right Section - Form */}

          <div className="bg-[#ffffff] w-full sm:w-[450px] h-auto p-6 rounded-lg shadow-md mt-16 lg:mt-20">
            <h3 className="text-[24px] sm:text-[30px] font-normal font-impact text-center text-[#000000]">
              Ready to launch your career?
            </h3>
            <div className="mt-4 space-y-4">
              <button className="flex items-center justify-center w-full h-[47px] mb-4 border-[1px] border-[#1E1E1E]/10 text-[16px] bg-[#ffffff] text-[#000000] rounded-[4px] gap-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                  alt="LinkedIn"
                  className="w-[24px] h-[24px] mr-2"
                />
                SIGN UP WITH LINKEDIN
              </button>

              <button className="flex items-center justify-center w-full h-[47px] mb-4 border-[1px] border-[#1E1E1E]/10 text-[16px] bg-[#ffffff] text-[#000000] rounded-[4px] gap-2">
                <img
                  src="https://developers.google.com/identity/images/g-logo.png"
                  alt="Google"
                  className="w-[24px] h-[24px]"
                />
                SIGNUP WITH GOOGLE
              </button>
            </div>

            <div className="flex items-center my-2">
              <hr className="flex-grow border-[#1E1E1E]/70" />
              <span className="mx-2 text-gray-500 text-sm">Or Use Email</span>
              <hr className="flex-grow border-[#1E1E1E]/70" />
            </div>

            <div className="space-y-2">
              <label className="text-[18px]  font-roboto font-normal text-[#1E1E1E]">
                EMAIL
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-[#1E1E1E]/70 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />

              <label className="text-[18px] uppercase  font-roboto font-normal text-[#1E1E1E]">
                enter your program
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-[#1E1E1E]/70 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your program"
              />
            </div>

            <button className="w-full h-[47px] bg-[#1E1E1E]/10 text-[#1E1E1E]/50 font-medium py-2 rounded-lg mt-4  uppercase cursor-not-allowed text-[16px] sm:text-[18px]">
              apply now
            </button>

            <p className="text-[12px] font-roboto font-normal text-center text-[#047670] mt-3">
              By continuing, you agree to AI Skills{" "}
              <a href="#" className="text-[#047670]">
                Terms
              </a>
              and
              <a href="#" className="text-[#047670]">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#000000] py-12 px-4 md:px-16 overflow-hidden">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[#ffffff] mt-3 text-[36px] md:text-[36px] uppercase font-impact tracking-wide">
            Chosen By Industry-Leading Brands:
          </h2>
        </div>

        {/* Logo Scroller */}
        <div className="w-full overflow-hidden relative mx-auto mt-5">
          <motion.div
            className="flex w-max gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="rounded-lg p-3 flex items-center justify-center w-[110px] h-[70px]"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.alt}
                  className="h-auto w-[90px] object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="bg-[#fffffff] py-16 px-4 md:px-16">
        {/* Heading */}
        <h2 className="text-[#047670] text-center text-[50px] font-normal font-impact ">
          What Makes Us Different?
        </h2>
        <p className="font-roboto font-normal text-[18px] text-center text-[#000000]">
          We understand the challenges of breaking into the tech industry, and
          we’re here to guide you every step of the way. Here’s how our program
          works:
        </p>

        {/* Grid layout */}

        <div className="flex flex-col lg:flex-row items-start justify-between gap-16 mt-20">
          {/* Left Features */}
          <div className="w-full lg:w-1/2">
            {options1.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <img
                  src={business16}
                  alt="check"
                  className="w-[24px] h-[24px] mt-1"
                />
                <div>
                  <h3 className="text-[20px] font-normal font-impact text-[#1E1E1E]">
                    {item.title}
                  </h3>
                  <p className="text-[20px] text-[#4B4B4B] font-normal font-roboto leading-relaxed">
                    {item.desc
                      ?.replace(/(.*)\s(\S+)$/, "$1\n$2")
                      .split("\n")
                      .map((line, i) => (
                        <span key={i}>{line}</span>
                      ))}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 h-full flex justify-center items-center">
            <img
              src={Launch1}
              alt="feature"
              className="w-full h-full max-h-[490px] object-cover shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-start justify-between gap-16 mt-20 px-10">
        {/* Left Features */}
        <div className="w-full lg:w-1/2 h-full flex justify-center items-center">
          <img
            src={Launch2}
            alt="feature"
            className="w-full h-full max-h-[690px] object-cover shadow-md"
          />
        </div>

        {/* Right Image */}

        <div className="w-full lg:w-1/2">
          {options2.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <img
                src={business16}
                alt="check"
                className="w-[24px] h-[24px] mt-1"
              />
              <div>
                <h3 className="text-[20px] font-normal font-impact text-[#1E1E1E]">
                  {item.title}
                </h3>
                <p className="text-[20px] text-[#4B4B4B] font-normal font-roboto leading-relaxed">
                  {item.desc
                    ?.replace(/(.*)\s(\S+)$/, "$1\n$2")
                    .split("\n")
                    .map((line, i) => (
                      <span key={i}>{line}</span>
                    ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      

      <div className="bg-white py-16 px-6 md:px-6">
        <div className="max-w-8xl mx-auto">
          {/* Heading */}
          <h2 className="text-[40px] md:text-[50px] font-[impact] text-center mb-14">
            Program Features at a Glance:
          </h2>

          {/* Two Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-6">
            {/* Left Column */}
            {featuresLeft.map((feature, index) => (
              <div key={index} className="flex gap-4 items-start">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-[50px] h-[50px] object-contain"
                />
                <div>
                  <h3 className="text-[#047670] text-[24px] md:text-[28px] font-[impact] mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-[#000000] text-[18px] md:text-[20px] font-[Roboto]">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Right Column */}
            {featuresRight.map((feature, index) => (
              <div key={index} className="flex gap-4 items-start">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-[50px] h-[50px] object-contain"
                />
                <div>
                  <h3 className="text-[#047670] text-[24px] md:text-[28px] font-[impact] mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-[#000000] text-[18px] md:text-[20px] font-[Roboto]">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#fffffff] py-16 px-4 md:px-16">
        {/* Heading */}
        <h2 className="text-[#1E1E1E] text-center text-[50px] font-normal font-impact">
          What We Need from You
        </h2>
        <p className="font-normal text-center font-jost text-[20px] text-[#000000]">
          To ensure your success in this program and help you land your dream
          job, here’s what we ask of you:
        </p>

        {/* Grid layout */}

        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mt-10">
          {/* Left Features */}
          <div className="lg:w-1/2">
            {option3.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <img
                  src={business16}
                  alt="check"
                  className="w-[24px] h-[24px] mt-1"
                />
                <div>
                  <h3 className="text-[20px] font-normal font-impact text-[#1E1E1E]">
                    {item.title}
                  </h3>
                  <p className="text-[20px] text-[#4B4B4B] font-normal font-jost leading-relaxed">
                    {item.desc
                      ?.replace(/(.*)\s(\S+)$/, "$1\n$2")
                      .split("\n")
                      .map((line, i) => (
                        <span key={i}>{line}</span>
                      ))}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 h-full flex justify-center items-center">
            <img
              src={business15}
              alt="feature"
              className="rounded-md w-full h-full max-h-[417px] object-cover shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-[#ffffff] py-16 px-4 text-center">
        {/* Choose Your Course Heading */}
        <h2 className="text-[50px] md:text-[50px]  text-[#000000] font-[impact] leading-[55px] font-normal mb-6">
          Choose Your Course.
        </h2>

        {/* Description */}
        <p className="max-w-[855px] mx-auto text-[20px] md:text-[20px] font-[jost] leading-[26px] text-[#1E1E1E] mb-6">
          Right now we are providing Launch Me only for AI/ML Product Managers
          and Data Science. However, we are planning to extend it to other
          domains also in future.
        </p>

        {/* Button */}
        <button className="mt-4 px-6  w-[189px] h-[47px] bg-[#047670] text-[#ffffff] font-[jost] text-[22px] font-semibold rounded-[4px] border border-[#1E1E1E]/80">
          Sign Up
        </button>

        {/* Job Guarantee Heading */}
        <h3 className="text-[50px] md:text-[50px] font-[impact] leading-[55px] font-normal mt-20 mb-10">
          AI/ML Product Manager Job Guarantee
        </h3>
      </div>

      <div className="max-w-[1400px] mx-auto p-6 shadow-sm">
        <h2 className="text-[36px] font-semibold text-[#047670] mb-4">
          Curriculum
        </h2>
        <p className="text-[18px] text-[#1E1E1E] font-roboto font-normal leading-relaxed mb-6">
          Our AI/ML Product Manager Program Is Designed To Equip You With The
          Skills Necessary To Manage And Oversee AI/ML Products Effectively.
          Whether You’re Looking To Transition Into A Product Management Role Or
          Further Enhance Your Existing Knowledge, This Course Covers Everything
          From Foundational Concepts To Advanced Strategies That Top AI/ML
          <br />
          Product Managers Use. <br />
          What We Will Cover:
        </p>
        <h3 className=" font-roboto text-[18px] font-bold text-[#000000] mb-8">
          What We Will Cover:
        </h3>

        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Left Column */}
          <div className="w-full md:w-[48%] space-y-10">
            {/* Foundational Topics */}
            <div className="space-y-4">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  checked={checked.foundational}
                  onChange={() => handleCheckbox("foundational")}
                  className="accent-[#047670] w-5 h-5 mt-[6px] mr-2"
                />
                <h4 className="text-[16px] text-roboto font-bold text-[#1E1E1E]">
                  Foundational Topics:
                </h4>
              </div>
              {checked.foundational && (
                <ul className="space-y-3">
                  <li className="flex items-start text-[16px] text-roboto font-normal text-[#1E1E1E]">
                    <span className="w-2 h-2 rounded-full bg-[#000000] mr-2 mt-[6px]"></span>
                    Introduction to AI/ML: Understanding the core concepts of AI
                    and Machine Learning, and how they apply to product
                    management.
                  </li>
                  <li className="flex items-start text-[16px] text-roboto font-normal text-[#1E1E1E]">
                    <span className="w-2 h-2 rounded-full bg-[#000000] mr-2 mt-[6px]"></span>
                    AI Product Lifecycle: How AI/ML products are developed, from
                    concept to launch.
                  </li>
                  <li className="flex items-start text-[16px] text-roboto font-normal text-[#1E1E1E]">
                    <span className="w-2 h-2 rounded-full bg-[#000000] mr-2 mt-[6px]"></span>
                    Product Development Methodologies: Agile, Scrum, and how
                    they apply to AI product management.
                  </li>
                </ul>
              )}
            </div>

            {/* Core Skills */}
            <div className="space-y-4">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  checked={checked.coreSkills}
                  onChange={() => handleCheckbox("coreSkills")}
                  className="accent-[#047670] w-5 h-5 mt-[6px] mr-2"
                />
                <h4 className="text-[16px] text-roboto font-bold text-[#1E1E1E]">
                  Core Skills for AI/ML Product Managers:
                </h4>
              </div>
              {checked.coreSkills && (
                <ul className="space-y-3">
                  <li className="flex items-start text-[16px] text-roboto font-normal text-[#1E1E1E]">
                    <span className="w-2 h-2 rounded-full bg-[#000000] mr-2 mt-[6px]"></span>
                    Building and Managing AI/ML Teams: Understanding the roles
                    needed for AI/ML product teams, from data scientists to
                    engineers.
                  </li>
                  <li className="flex items-start text-[16px] text-roboto font-normal text-[#1E1E1E]">
                    <span className="w-2 h-2 rounded-full bg-[#000000] mr-2 mt-[6px]"></span>
                    Managing Product Roadmaps: Creating effective roadmaps for
                    AI/ML products.
                  </li>
                  <li className="flex items-start text-[16px] text-roboto font-normal text-[#1E1E1E]">
                    <span className="w-2 h-2 rounded-full bg-[#000000] mr-2 mt-[6px]"></span>
                    User-Centric AI Design: Designing AI/ML products with the
                    end-user in mind and ensuring seamless user experiences.
                  </li>
                  <li className="flex items-start text-[16px] text-roboto font-normal text-[#1E1E1E]">
                    <span className="w-2 h-2 rounded-full bg-[#000000] mr-2 mt-[6px]"></span>
                    Data Collection and Management: Understanding the data
                    pipeline from collection to pre-processing for ML models.
                  </li>
                  <li className="flex items-start text-[16px] text-roboto font-normal text-[#1E1E1E]">
                    <span className="w-2 h-2 rounded-full bg-[#000000] mr-2 mt-[6px]"></span>
                    Metrics & KPIs for AI Products: Defining success for AI/ML
                    products with key performance indicators.
                  </li>
                </ul>
              )}
            </div>

            {/* Advanced Product Management Skills */}
            <div className="space-y-4">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  checked={checked.advancedSkills}
                  onChange={() => handleCheckbox("advancedSkills")}
                  className="accent-[#047670] w-5 h-5 mt-[6px] mr-2"
                />
                <h4 className="text-[16px] text-roboto font-bold text-[#1E1E1E]">
                  Advanced Product Management Skills:
                </h4>
              </div>
              {checked.advancedSkills && (
                <ul className="space-y-3">
                  <li className="flex items-start text-[16px] text-roboto font-normal text-[#1E1E1E]">
                    <span className="w-2 h-2 rounded-full bg-[#000000] mr-2 mt-[6px]"></span>
                    Managing the AI/ML Product Lifecycle: From ideation to
                    iteration, and continuous improvement of the product.
                  </li>
                  <li className="flex items-start text-[16px] text-roboto font-normal text-[#1E1E1E]">
                    <span className="w-2 h-2 rounded-full bg-[#000000] mr-2 mt-[6px]"></span>
                    Stakeholder Management for AI/ML Products: Effectively
                    communicating AI product goals and progress with
                    stakeholders and decision-makers.
                  </li>
                  <li className="flex items-start text-[16px] text-roboto font-normal text-[#1E1E1E]">
                    <span className="w-2 h-2 rounded-full bg-[#000000] mr-2 mt-[6px]"></span>
                    Building a Data-Driven Culture: Integrating data science and
                    analytics into the product development cycle for continuous
                    optimization.
                  </li>
                </ul>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-[48%] space-y-10">
            {/* Advanced Topics */}
            <div className="space-y-4">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  checked={checked.advancedTopics}
                  onChange={() => handleCheckbox("advancedTopics")}
                  className="accent-[#047670] w-5 h-5 mt-[6px] mr-2"
                />
                <h4 className="text-[16px] text-roboto font-normal text-[#1E1E1E]">
                  Advanced Topics:
                </h4>
              </div>
              {checked.advancedTopics && (
                <ul className="space-y-3">
                  {[
                    "AI/ML Algorithm Selection and Evaluation: Understanding and selecting the right algorithms and evaluating their performance.",
                    "Model Deployment and Scaling: Managing the deployment and scaling of machine learning models in real-world applications.",
                    "Ethics in AI Product Management: Addressing the ethical implications of AI products, ensuring fairness, transparency, and accountability.",
                    "AI Product Strategy: Understanding how to create a product strategy that aligns with business goals and technological capabilities.",
                    "Cross-functional Collaboration: Leading teams of engineers, data scientists, and designers to ensure seamless product execution.",
                    "AI in Industry: Exploring AI applications across various industries such as healthcare, finance, retail, etc.",
                    "Risk Management and AI Governance: Identifying potential risks associated with AI product development and implementing governance structures.",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start text-[16px] text-roboto font-normal text-[#1E1E1E]"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#000000] mr-2 mt-[6px]"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Capstone Project */}
            <div className="space-y-4">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  checked={checked.capstone}
                  onChange={() => handleCheckbox("capstone")}
                  className="accent-[#047670] w-5 h-5 mt-[6px] mr-2"
                />
                <h4 className="text-[16px] text-roboto font-bold text-[#1E1E1E]">
                  Capstone Project and Real-World Experience:
                </h4>
              </div>
              {checked.capstone && (
                <ul className="space-y-3">
                  <li className="flex items-start text-[16px] text-roboto font-normal text-[#1E1E1E]">
                    <span className="w-2 h-2 rounded-full bg-[#000000] mr-2 mt-[6px]"></span>
                    Partnered Startup Projects: Gain real-world experience with
                    live projects from partner startups, adding value to your
                    resume.
                  </li>
                  <li className="flex items-start text-[16px] text-roboto font-normal text-[#1E1E1E]">
                    <span className="w-2 h-2 rounded-full bg-[#000000] mr-2 mt-[6px]"></span>
                    Internal AI Projects: Apply what you’ve learned in internal
                    AI-driven projects that you can showcase to potential
                    employers.
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="font-impact font-normal mt-16 text-[50px] text-center text-[#047670]">
          Data Science job guarantee
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto p-6">
        <h2 className="text-[36px] font-semibold text-[#047670] mb-4">
          Curriculum
        </h2>
        <p className="text-[18px] text-[#1E1E1E] font-roboto font-normal leading-relaxed mb-6">
          Transform Your Career With Our End-To-End Data Science Program,
          Designed To Equip You With The Skills Needed To Excel In AI, Machine
          Learning, And Data Science Roles. Our Program Covers Everything From
          Statistics To MLOps, AI Agents, RAG, Deep Learning, And MVP
          Architecture.
        </p>
        <h3 className="font-roboto text-[18px] font-bold text-[#000000] mb-8">
          What We Will Cover:
        </h3>

        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Left Column */}
          <div className="md:w-[48%] space-y-6">
            {renderItem(
              "foundations",
              "Foundations of Data Science:",
              "Learn the lifecycle of data science, including data collection, cleaning, and analysis."
            )}
            {renderItem(
              "stats",
              "Statistics & Visualization:",
              "Master descriptive stats, hypothesis testing, and create impactful data visualizations using Matplotlib, Tableau, and more."
            )}
            {renderItem(
              "mvp",
              "MVP Architecture:",
              "Learn how to build Minimum Viable Products (MVP) in AI and ML to quickly prototype and deploy applications with real-world impact."
            )}
            {renderItem(
              "mlops",
              "MLOps",
              "Learn how to deploy, monitor, and maintain machine learning models in production environments using Docker, Flask, and Kubernetes."
            )}
            {renderItem(
              "ml",
              "Machine Learning:",
              "Understand supervised and unsupervised learning techniques, model evaluation, and feature engineering."
            )}
          </div>

          {/* Right Column */}
          <div className="w-full md:w-[48%] space-y-6">
            {renderItem(
              "nlp",
              "Natural Language Processing (NLP)",
              "Work with text data, text classification, sentiment analysis, and transformers like BERT and GPT."
            )}
            {renderItem(
              "capstone",
              "Capstone Projects",
              "Apply your skills to a real-world project, building a strong portfolio to showcase to employers."
            )}
            {renderItem(
              "deepLearning",
              "Deep Learning:",
              "Dive into Neural Networks, CNNs, RNNs, and generative models like GANs and Autoencoders."
            )}
            {renderItem(
              "rag",
              "RAG (Retrieval-Augmented Generation)",
              "Learn how to combine large-scale knowledge retrieval with AI-generated content for more accurate and context-aware responses."
            )}
            {renderItem(
              "genAI",
              "Generative AI:",
              "Explore creative AI applications using GPT-3 for text generation and other creative tools."
            )}
            {renderItem(
              "aiAgents",
              "AI Agents:",
              "Understand how to design and deploy AI-driven agents to automate tasks and interact intelligently with data."
            )}
          </div>
        </div>
      </div>

      <div className="bg-[#000000] py-20 px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left Side - ONLY heading like image */}
          <div className="bg-[#0000000] py-20 px-6">
            <div className="mx-auto flex justify-center items-start text-start">
              <h2 className="font-impact text-[#ffffff] text-[48px] font-normal md:text-[55px] uppercase">
                Frequently Asked <br /> Questions
              </h2>
            </div>
          </div>

          {/* Right Side - FAQ list */}
          <div className="w-full md:w-1/2 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                onClick={() => toggleFAQ(index)}
                className="border-b border-[#ffffff] py-3 cursor-pointer transition-all duration-300"
              >
                <div className="flex justify-between items-center">
                  <span className="text-[#ffffff] text-[15px]  font-roboto font-normal md:text-[16px]  tracking-wide uppercase">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <FaMinus className="text-[#ffffff]" />
                  ) : (
                    <FaPlus className="text-[#ffffff]" />
                  )}
                </div>
                {openIndex === index && (
                  <p className="text-gray-400 text-[14px] mt-3">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16">
        <Footer />
      </div>
    </>
  );
}

export default LaunchPage
