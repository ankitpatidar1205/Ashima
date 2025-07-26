

import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-white lg:pt-[150px] pt-[120px] sm:pt-[100px] pb-20 px-6 text-[#000000]">
      <div className="max-w-[1364px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-start gap-8">
        {/* Left Side */}
        <div className="w-full md:w-1/2 md:text-left">
          <p className="text-[25px] mb-0 text-[#1E1E1E] font-roboto leading-[24px] font-semibold">
            AI SKILLS
          </p>
          <h1 className="text-[32px] md:text-[40px] font-normal text-[#000000] leading-[45px] md:leading-[55px] font-impact tracking-[0.5%]">
            TO LIFT UP YOUR CAREER <br />
            MASTER THE FUTURE OF TECHNOLOGY
          </h1>
        <Link to="/all-cources"> <button className="mt-3 px-6 py-2 bg-teal-700 text-[#ffffff] font-bold text-[16px] rounded-xl shadow-md hover:bg-teal-600 transition">
            Explore Courses
          </button> </Link> 
        </div>

        <div className="w-full md:w-1/2 md:mt-0 md:ml-12">
          <p className="text-[16px] text-[#1E1E1E] font-roboto leading-[22px] tracking-[1%] mt-[10px] lg:mt-[27px] sm:mt-[10px] text-start md:text-left">
            Whether you're a Product Manager, Data Scientist, Data Analyst, or BI Engineer or any
            not code heavy role — if you're not learning AI, you're becoming obsolete.
            The market doesn’t need more traditional roles. It needs AI-powered thinkers.
            Make yourself relevant. Learn AI, lead the future.
          </p>

          <p className="text-[16px] text-[#1E1E1E] font-roboto leading-[22px] tracking-[1%] mt-[10px] lg:mt-[27px] sm:mt-[10px] text-start md:text-left">   A complete platform to provide you options to learn from Live, Hybrid, and Video courses.
          </p>
          <div className="flex justify-center items-center md:justify-center gap-4 flex-wrap mt-4">
            {/* <Link > */}
            <span className="w-[95px] py-2 rounded-xl text-[#000000] font-roboto bg-[#09D0C6] font-medium shadow-md hover:opacity-90 transition flex items-center justify-center">
              Live
            </span>


            {/* </Link> */}

            <span className="w-[95px] py-2 rounded-xl text-[#ffffff] font-roboto bg-[#1E1E1E] font-medium shadow-md hover:opacity-90 transition  flex items-center justify-center">
              Hybrid
            </span>


            <span className="w-[95px] py-2 rounded-xl text-[#ffffff] font-roboto bg-[#FF6B6B] font-medium shadow-md hover:opacity-90 transition  flex items-center justify-center">
              Video
            </span>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
