import { motion } from "framer-motion";
import business1 from "../../assets/business1.png";
import business2 from "../../assets/business2.png";
import business3 from "../../assets/business3.png";
import business4 from "../../assets/business4.png";
import business5 from "../../assets/business5.png";
import business6 from "../../assets/business6.png";
import business7 from "../../assets/business7.png";
import business8 from "../../assets/business8.png";
import business9 from "../../assets/business9.png";
import business10 from "../../assets/business10.png";
import business11 from "../../assets/business11.png";
import business12 from "../../assets/business12.png";
import business13 from "../../assets/business13.png";
import business14 from "../../assets/business14.png";
import business15 from "../../assets/business15.png";
import business16 from "../../assets/business16.png";
import business17 from "../../assets/business17.png";
import business18 from "../../assets/business18.png";
import business19 from "../../assets/business19.png";
import business20 from "../../assets/business20.png";
import business21 from "../../assets/business21.png";
import business22 from "../../assets/business22.png";
import business23 from "../../assets/business23.png";
import business24 from "../../assets/business24.png";
import trending1 from "../../assets/trending1.png";
import trending2 from "../../assets/trending2.png";
import trending3 from "../../assets/trending3.png";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";

const Business = () => {
  const sliderRef = useRef(null);
  const [checked, setChecked] = useState(false);
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

  const plans = [
    {
      name: "Basic",
      price: "₹0",
      description: "Perfect for getting started",
      features: ["1 User", "5 Projects", "Email Support"],
      isPopular: false,
    },
    {
      name: "Pro",
      price: "₹499/month",
      description: "For growing teams",
      features: ["5 Users", "Unlimited Projects", "Priority Email Support"],
      isPopular: true,
    },
    {
      name: "Enterprise",
      price: "₹1,499/month",
      description: "Advanced features for businesses",
      features: ["Unlimited Users", "Custom Solutions", "24/7 Support"],
      isPopular: false,
    },
  ];

  const features = [
    {
      img: business11,
      desc: "Transform your workforce. Equip your employees with in-demand AI SKILLS to enhance performance and efficiency.",
    },
    {
      img: business12,
      desc: "Flexible learning options. Choose from live sessions, hybrid courses, or video-based training to fit your team’s schedule.",
    },
    {
      img: business13,
      desc: "Real-world impact. Hands-on projects and practical exercises ensure skills translate to real business outcomes.",
    },
    {
      img: business14,
      desc: "Customized training programs. Tailor our curriculum to match your company’s goals and technological needs.",
    },
  ];
  const duplicatedLogos = [...brandLogos, ...brandLogos]; // for infinite scroll
  const options = [
    {
      title: "Expert-Led Training:",
      desc: "Learn from top industry professionals with real-world experience.",
    },
    {
      title: "Interactive Sessions:",
      desc: "Foster engagement and collaboration through live and hybrid models.",
    },
    {
      title: "Ongoing Support:",
      desc: "Post-training resources to help employees continue growing.",
    },
    {
      title: "Global Reach:",
      desc: "Empower teams from anywhere in the world with flexible online access.",
    },
  ];
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
  ];
  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="bg-[#047670] py-10 px-4 md:px-16 pt-32">
        <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text Section */}
          <div className="text-[#ffffff] md:w-1/2">
            <h2 className="text-[50px] md:text-5xl font-normal mb-4 font-impact">
              AI SKILLS For Business
            </h2>
            <p className="text-[22px] md:text-lg font-medium font-jost w-full md:w-[653px]">
              Partner With Us To Upskill Your Workforce. Empower Your Team With
              Cutting-Edge AI SKILLS Through Live, Hybrid, And Video-Based
              Courses. Our Comprehensive Training Programs Are Designed To Boost
              Productivity, Foster Innovation, And Help Your Business Stay Ahead
              In A Rapidly Evolving Tech Landscape.
            </p>
            <Link to="/aipowered">
              <button className="mt-6 text-[22px] bg-[#ffffff] text-[#047670] font-bold px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition w-[325px] h-[57px] duration-300 font-roboto">
                Contact Us
              </button>
            </Link>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src={business1}
              alt="AI SKILLS"
              className="rounded-md w-full object-cover shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Brand Logos Scrolling */}
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

      <div className="bg-[#ffffff] py-12 px-4 md:px-16">
        <h2 className="text-[#047670] text-center text-[50px] md:text-[36px] font-normal mb-10 font-impact">
          Why Partner With Us?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <p className="text-[20px] text-[#1E1E1E]  font-normal font-jost">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#fffffff] py-16 px-4 md:px-16">
        {/* Heading */}
        <h2 className="text-[#1E1E1E] text-center text-[50px] font-normal font-impact mb-12">
          What Makes Us Different?
        </h2>

        {/* Grid layout */}

        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Left Features */}
          <div className="w-full lg:w-1/2">
            {options.map((item, index) => (
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
                        <span key={i}>
                          {line}
                          <br />
                        </span>
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

      <div className="text-center mb-14">
        <h2 className="text-[50px] lg:text-[40px] font-impact font-normal text-[#047670]">
          High-Impact Learning, Fast Outcomes
        </h2>
        <p className="text-[16px] lg:text-[16px] text-[#000000] font-jost font-normal mt-2">
          Maximizing Your Bottom Line Achieve Rapid Returns With Our AI Training
          Programs Designed To Deliver Real-World Impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
        {/* Card 1 */}
        <div className="text-center px-4">
          <h4 className="text-[16px] font-bold font-jost text-[#1E1E1E] uppercase mb-2">
            Turn Skills Into Revenue
          </h4>
          <h3 className="text-[60px] font-impact text-[#047670] font-normal mb-3">
            Up to 10x ROI
          </h3>
          <p className="text-[20px] text-[#4B4B4B] font-jost font-normal leading-relaxed">
            Our AI-driven programs equip professionals with job-ready skills,
            helping companies boost productivity and drive faster results across
            real-world projects.
          </p>
        </div>

        {/* Card 2 */}
        <div className="text-center px-4">
          <h4 className="text-[16px] font-bold font-jost text-[#1E1E1E] uppercase mb-2">
            Hands-On Skills. Measurable Gains.
          </h4>
          <h3 className="text-[60px] font-impact text-[#047670] font-normal mb-3">
            80% Higher Conversion Rates
          </h3>
          <p className="text-[20px] text-[#4B4B4B] font-jost font-normal leading-relaxed">
            Companies leveraging our AI training saw a significant uptick in
            team performance—proving real learning creates real impact.
          </p>
        </div>

        {/* Card 3 */}
        <div className="text-center px-4">
          <h4 className="text-[16px] font-bold font-jost text-[#1E1E1E] uppercase mb-2">
        Real Returns, Real Fast
          </h4>
          <h3 className="text-[60px] font-impact text-[#047670] font-normal mb-3">
           +$150K Project Impact

          </h3>
          <p className="text-[20px] text-[#4B4B4B] font-jost font-normal leading-relaxed">
           Each project powered by our training brings lasting ROI—transforming skills into bottom-line
business wins.

          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between px-6 py-10 lg:px-16 lg:py-16 bg-white font-roboto mt-10 gap-10">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 space-y-4">
          <h1 className="text-[50px] text-[#000000] md:text-4xl font-normal font-impact ">
            Tired of Expensive Live <br />
            Courses or Static Video <br />
            Lessons?
          </h1>
          <p className="text-[20px] text-normal text-[#000000]">
            Get the best of both worlds with instructor-led courses designed{" "}
            <br></br>to upskill your team effectively.
          </p>
          <p className="text-[20px] text-normal text-[#000000]">
            Our platform combines the dynamic engagement of live sessions
            <br /> with the flexibility of hybrid and on-demand video courses —
            all <br />
            at a fraction of the cost.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex flex-col ml-0 lg:ml-40">
          {/* Feature 1 */}
          <div className="flex items-start gap-4">
            <img
              src={business19}
              className="w-[60px] h-[60px] bg-[#ffffff] flex items-center justify-center rounded-full"
            ></img>
            <div>
              <h3 className="text-[#047670] font-normal font-impact text-[30px]">
                Affordable, Interactive Learning
              </h3>
              <p className="text-[20px] text-[#000000] font-jost font-normal">
                No more paying exorbitant fees for traditional live training.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-4">
            <img
              src={business17}
              className="w-[60px] h-[60px] bg-[#ffffff] flex items-center justify-center rounded-full"
            ></img>
            <div>
              <h3 className="text-[#047670] font-normal font-impact text-[30px]">
                Engaging and Practical:
              </h3>
              <p className="text-[20px] text-[#000000] font-jost font-normal">
                Learn directly from industry experts while applying skills to
                real-world projects.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start gap-4">
            <img
              src={business19}
              className="w-[60px] h-[60px] bg-[#ffffff] flex items-center justify-center rounded-full"
            ></img>
            <div>
              <h3 className="text-[#047670] font-normal font-impact text-[30px]">
                Adaptive Formats
              </h3>
              <p className="text-[20px] text-[#000000] font-jost font-normal">
                Choose between live, hybrid, or video-based courses based on
                your team’s needs.
              </p>
            </div>
          </div>
        </div>
      </div>

     <div className="bg-[#047670] text-[#ffffff] px-6 py-12 lg:px-20 mt-10">
  {/* Top Title Section */}
  <div className="text-center font-semibold font-jost text-[20px] mb-16">
    <p className="text-[20px] font-jost font-semibold">Our Approach</p>
    <h2 className="text-[50px] md:text-4xl font-normal font-impact text-[#ffffff]">
      How We Accelerate Your Team’s Growth
    </h2>
  </div>

  {/* Section 1 */}
  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
    <div className="w-full lg:w-1/2">
      <h3 className="text-[30px] font-normal text-[#ffffff] font-impact mb-2">Real Business Transformation</h3>
      <p className="text-[20px] font-jost text-[#ffffff] font-semibold mt-3 leading-relaxed">
        We focus on outcomes that matter. Your team will <br />
        acquire practical, job-specific skills that drive <br />
        performance and increase profitability. Our training <br />
        delivers measurable results that move the needle <br />
        for your business.
      </p>
    </div>
    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
      <img src={business20} alt="Business" className="rounded-[4px] w-full max-w-full object-cover" />
    </div>
  </div>

  {/* Section 2 */}
  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 mt-10">
    <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
      <img src={business21} alt="Business" className="rounded-[4px] w-full max-w-full object-cover" />
    </div>
    <div className="w-full lg:w-1/2">
      <h3 className="text-[30px] font-normal text-[#ffffff] font-impact mb-2">Building Future-Ready Agility</h3>
      <p className="text-[20px] font-jost text-[#ffffff] font-semibold mt-3">
        Equip your team to adapt to the future of tech. <br />
        Our training ensures your employees are prepared <br />
        for whatever comes next, making them confident <br />
        in facing new challenges and technologies head-on.
      </p>
    </div>
  </div>

  {/* Section 3 */}
  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 mt-10">
    <div className="w-full lg:w-1/2">
      <h3 className="text-[30px] font-normal text-[#ffffff] font-impact mb-2">Real Business Transformation</h3>
      <p className="text-[20px] font-jost text-[#ffffff] font-semibold mt-3">
        We focus on outcomes that matter. Your team will <br />
        acquire practical, job-specific skills that drive <br />
        performance and increase profitability. Our training <br />
        delivers measurable results that move the needle <br />
        for your business.
      </p>
    </div>
    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
      <img src={business22} alt="Business" className="rounded-[4px] w-full max-w-full object-cover" />
    </div>
  </div>

  {/* Section 4 */}
  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 mt-10">
    <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
      <img src={business23} alt="Business" className="rounded-[4px] w-full max-w-full object-cover" />
    </div>
    <div className="w-full lg:w-1/2">
      <h3 className="text-[30px] font-normal text-[#ffffff] font-impact mb-2">Building Future-Ready Agility</h3>
      <p className="text-[20px] font-jost text-[#ffffff] font-semibold mt-3">
        Equip your team to adapt to the future of tech. <br />
        Our training ensures your employees are prepared <br />
        for whatever comes next, making them confident <br />
        in facing new challenges and technologies head-on.
      </p>
    </div>
  </div>

  {/* Section 5 */}
  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 mt-10">
    <div className="w-full lg:w-1/2">
      <h3 className="text-[30px] font-normal text-[#ffffff] font-impact mb-2">Real Business Transformation</h3>
      <p className="text-[20px] font-jost text-[#ffffff] font-semibold mt-3">
        We focus on outcomes that matter. Your team will <br />
        acquire practical, job-specific skills that drive <br />
        performance and increase profitability. Our training <br />
        delivers measurable results that move the needle <br />
        for your business.
      </p>
    </div>
    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
      <img src={business24} alt="Business" className="rounded-[4px] w-full max-w-full object-cover" />
    </div>
  </div>
</div>


      <div className="bg-[#ffffff] text-[#000000]  py-16">
        {/* Heading */}
        <h2 className="text-[50px] text-[#000000] text-center font-impact font-normal leading-tight tracking-tight uppercase">
          Look At Our Few{" "}
          <span className="text-[#047670] text-[50px] font-impact font-normal leading-tight uppercase ">
            Trending Courses
          </span>
        </h2>

        <div className="sm:px-8 lg:px-8 px-8 py-8 bg-[#ffffff] relative font-Roboto Condensed uppercase">
          <div className="relative mt-10 max-w-[1440px] mx-auto">
            <div
              ref={sliderRef}
              className="flex gap-4 overflow-x-auto pb-2 whitespace-nowrap"
            >
              {courses?.length > 0 &&
                courses.map((course, index) => (
                  <div
                    key={index}
                    className="min-w-[280px] sm:min-w-[350px] md:min-w-[400px] rounded-xl border border-[#000000] overflow-hidden shadow-lg hover:shadow-2xl transition-all bg-[#f4F3F3]"
                  >
                    <div className="relative h-[400px] sm:h-[450px] md:h-[500px] overflow-hidden bg-[#000000]">
                      <img
                        src={course.img}
                        alt={course.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />

                      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/50 to-black/20 backdrop-blur-sm px-4 pb-4 pt-4 text-white tracking-wide min-h-[220px] flex flex-col justify-end">
                        <h3 className="text-[22px] sm:text-[25px] mb-1">
                          {course.title}
                        </h3>
                        <p className="text-[16px] sm:text-[18px] mb-1">
                          {course.mentor}
                        </p>

                        <div className="flex flex-wrap justify-between items-center text-[14px] mt-1 gap-y-2">
                          <div className="flex items-center gap-1">
                            <span className="text-[#ffffff] text-[14px]">
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

                          <div>
                            <Link
                              to={`/${course.mode.toLowerCase()}`}
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
        <div className="flex justify-center mt-10">
          <Link to="/all-cources">
            <button className="bg-[#047670] text-[#Ffffff] text-[26px] font-semibold px-8 py-3  hover:bg-[#03665f] transition-all ">
              Explore All Courses
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-[#000000] text-[#ffffff] px-4 sm:px-10 lg:px-40 py-16">
        {/* Heading */}
        <h3 className="text-center text-[20px] uppercase font-semibold font-jost ">
          Sign up to get started
        </h3>
        <p className="text-center mt-3 font-jost text-[26px] uppercase font-medium  mx-auto leading-7 mb-10">
          Fill in the details below, and we’ll get in touch to explore how we
          can <br />
          support your team’s upskilling journey.
        </p>

        {/* Form Centered */}
        <form className="w-full max-w-[678px] mx-auto space-y-6">
          {/* Name */}
          <div>
            <label className="block mb-1 text-[16px] font-archivo  font-medium">
              Name <span className="text-[#ffffff]">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full bg-[#000000] text-[16px] font-archivo  font-medium text-[#ffffff] border-[1px] border-[#ffffff] px-4 py-2 rounded-[4px]"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-[16px] font-archivo mb-1 font-medium">
              Last Name <span className="text-[#ffffff]">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your last name"
              className="w-full bg-[#000000] text-[16px] font-archivo  font-medium text-[#ffffff] border-[1px] border-[#ffffff] px-4 py-2 rounded-[4px]"
            />
          </div>

          {/* Work Email */}
          <div>
            <label className="block text-[16px] font-archivo mb-1 font-medium">
              Provide Your Work Email <span className="text-[#fffffff">*</span>
            </label>
            <input
              type="email"
              placeholder="Note: Free email providers like Gmail are not allowed"
              className="w-full bg-[#000000] text-[16px] font-archivo  font-medium text-[#ffffff] border-[1px] border-[#ffffff] px-4 py-2 rounded-[4px]"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-[16px] font-archivo mb-1 font-medium">
              Phone Number <span className="text-[#ffffff]">*</span>
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full bg-[#000000] text-[16px] font-archivo  font-medium text-[#ffffff] border-[1px] border-[#ffffff] px-4 py-2 rounded-[4px]"
            />
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-[16px] font-archivo mb-1 font-medium">
              Enter Your Company Name <span className="text-[#ffffff]">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your company name"
              className="w-full bg-[#000000] text-[16px] font-archivo  font-medium text-[#ffffff] border-[1px] border-[#ffffff] px-4 py-2 rounded-[4px]"
            />
          </div>

          {/* Organization's Needs */}
          <div>
            <label className="block text-[16px] font-archivo mb-1 font-medium">
            Tell us about your team’s training goals{" "}
              <span className="text-[#ffffff]">*</span>
            </label>
            <textarea
              placeholder="Briefly describe your company’s upskilling requirements"
              rows={4}
              className="w-full bg-[#000000] text-[16px] font-archivo  font-medium text-[#ffffff] border-[1px] border-[#ffffff] px-4 py-2 rounded-[4px]"
            ></textarea>
          </div>

          {/* Interested Programs */}
          <div>
            <label className="block text-[16px] font-archivo mb-1 font-medium">
            What kind of upskilling or reskilling does your team need? Please specify the departments or
roles. <span className="text-[#ffffff]">*</span>
            </label>
            <textarea
              placeholder="Let us know which AI courses you’d like to explore for your teams"
              rows={4}
              className="w-full bg-[#000000] text-[16px] font-archivo  font-medium text-[#ffffff] border-[1px] border-[#ffffff] px-4 py-2 rounded-[4px]"
            ></textarea>
          </div>

          {/* Company Domain Name */}
          <div>
            <label className="block text-[16px] font-archivo mb-1 font-medium">
              Company Domain Name <span className="text-[#ffffff]">*</span>
            </label>
            <input
              type="text"
              placeholder="Please enter your company’s domain name"
              className="w-full bg-[#000000] text-[16px] font-archivo  font-medium text-[#ffffff] border-[1px] border-[#ffffff] px-4 py-2 rounded-[4px]"
            />
          </div>

          {/* Consent Checkbox */}
          <div className="flex items-start gap-2 text-xs">
            <input
              type="checkbox"
              className="mt-1 accent-[#047670]"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
            <p className="text-[#ffffff]">
              By signing up, you agree to receive marketing communications from
              AI SKILLS. For more details, please refer to our{" "}
              <a href="#" className="underline text-[#ffffff]">
                [Privacy Policy]
              </a>
              .
            </p>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="bg-[#047670] text-[#ffffff] px-6 py-2  hover:bg-[#03665f] transition text-[26px] font-jost font-bold"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="mt-12">
        <Footer />
      </div>
    </>
  );
};

export default Business;
