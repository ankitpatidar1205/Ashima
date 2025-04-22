import React from "react";
import { motion } from "framer-motion";
import company1 from "../../assets/company1.png";
import company2 from "../../assets/company2.png";
import company3 from "../../assets/company3.png";
import company4 from "../../assets/company4.png";
import company5 from "../../assets/company5.png";
import company6 from "../../assets/company6.png";
import company7 from "../../assets/company7.png";

const companies = [
  company1,
  company2,
  company3,
  company4,
  company5,
  company6,
  company7,
];

const CompaniesSection = () => {
  return (
    <div className="bg-gray-50 py-20 px-6 md:px-12 font-impact overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left Static Text */}
        <div className="w-full md:w-1/3 text-left mb-6 md:mb-0">
          <h2 className="text-[25px] md:text-[30px] font-[400] leading-[40px] tracking-[0.5%] text-black">
            JOIN OVER <span className="text-red-500">100K+</span> LEARNERS
          </h2>
          <h3 className="text-[25px] md:text-[30px] font-[400] leading-[40px] tracking-[0.5%] text-black">
            TO UPSKILL HOTTEST AI SKILLS
          </h3>
        </div>

        {/* Right Scrolling Logos (Left ➡️ Right) */}

        <div className="w-full md:w-[55%] overflow-hidden relative">
        
          <motion.div
            className="flex w-max gap-6"
            animate={{ x: ["-50%", "0%"] }} // left to right scroll
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...companies, ...companies].map((logo, index) => (
              <div
                key={index}
                className="bg-[#ffffff] rounded-lg p-3 flex items-center justify-center w-[90px] h-[70px]"
              >
                <img
                  src={logo}
                  alt={`Company ${index + 1}`}
                  className="h-auto w-[70px] object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CompaniesSection;
