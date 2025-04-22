// import featureicon from "../../assets/featureIcon.png";

// const FeaturedInSection = () => {
//   return (
//     <div className="bg-black py-16 px-4">
//       <div className="max-w-[1366px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-[40px]  items-center">
//         {/* Left Section - Heading & Description */}
//         <div className="text-[#ffffff] sm:translate-x-6 transition-all duration-300 sm:text-left">
//           <h2 className="font-[400] text-[40px] sm:text-[55px] leading-[50px] sm:leading-[65px] tracking-[0.5%] mb-4 font-impact">
//             FEATURED IN
//           </h2>
//           <p className="text-[14px] sm:text-[16px] leading-[22px] sm:leading-[25px] tracking-[0.5%] font-Roboto Condensed">
//             ENHANCE YOUR LEARNING WITH INSTANT DIGITAL PRODUCTS
//             <br />
//             FROM INSTANT REAL-WORLD PROJECTS TO PROMPTS.
//           </p>
//         </div>

//         {/* Right Section - Logos */}
//         <div className="w-[823] h-[117] sm:-translate-x-6 transition-all duration-300 flex justify-center sm:justify-end">
//           <img
//             src={featureicon}
//             alt="Featured In"
//             className="max-w-full h-auto"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeaturedInSection;

import featureicon from "../../assets/featureIcon.png";

const FeaturedInSection = () => {
  return (
    <div className="bg-black py-16 px-6">
      <div className="max-w-[1366px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
        {/* Left Section - Heading & Description */}
        <div className="w-full lg:w-auto text-[#ffffff] sm:translate-x-6 transition-all duration-300 sm:text-center  md:text-center lg:text-left">
          <h2 className="font-[400] text-[40px] sm:text-[55px] leading-[50px] sm:leading-[65px] tracking-[0.5%] mb-4 font-impact">
            FEATURED IN
          </h2>
          <p className="text-[14px] sm:text-[16px] leading-[22px] sm:leading-[25px] tracking-[0.5%] font-Roboto Condensed">
            ENHANCE YOUR LEARNING WITH INSTANT DIGITAL PRODUCTS
            <br />
            FROM INSTANT REAL-WORLD PROJECTS TO PROMPTS.
          </p>
        </div>

        {/* Right Section - Logos */}
        <div className="w-[823] h-[117] sm:-translate-x-6 transition-all duration-300 flex justify-center sm:justify-end">
          <img
            src={featureicon}
            alt="Featured In"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedInSection;

// import featureicon from "../../assets/featureIcon.png";

// const FeaturedInSection = () => {
//   return (
//     <div className="bg-black py-16 px-6">
//       <div className="max-w-[1366px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
//         {/* Left Section - Heading & Description */}
//         <div
//           className="w-full lg:w-auto text-[#ffffff] transition-all duration-300 text-center lg:text-left"
//           style={{ textAlign: window.innerWidth >= 1024 ? "left" : "center" }}
//         >
//           <h2 className="font-[400] text-[40px] sm:text-[55px] leading-[50px] sm:leading-[65px] tracking-[0.5%] mb-4 font-impact">
//             FEATURED IN
//           </h2>
//           <p className="text-[14px] sm:text-[16px] leading-[22px] sm:leading-[25px] tracking-[0.5%] font-Roboto Condensed">
//             ENHANCE YOUR LEARNING WITH INSTANT DIGITAL PRODUCTS
//             <br />
//             FROM INSTANT REAL-WORLD PROJECTS TO PROMPTS.
//           </p>
//         </div>

//         {/* Right Section - Logos */}
//         <div className="flex justify-center lg:justify-end">
//           <img
//             src={featureicon}
//             alt="Featured In"
//             className="max-w-[250px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[500px] h-auto"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeaturedInSection;
