import React from "react";
import product1 from "../../assets/Rectangle 21.png";
import product2 from "../../assets/Rectangle 22 (1).png";
import product3 from "../../assets/Rectangle 22 (2).png";
import product4 from "../../assets/Rectangle 22.png";

const products = [
  {
    id: 1,
    title: "PRODUCT NAME",
    description: "DESCRIPTION",
    image: product1,
    tag: "PRODUCT 1",
  },
  {
    id: 2,
    title: "PRODUCT NAME",
    description: "DESCRIPTION",
    image: product2,
    tag: "PRODUCT 2",
  },
  {
    id: 3,
    title: "PRODUCT NAME",
    description: "DESCRIPTION",
    image: product3,
    tag: "PRODUCT 3",
  },
  {
    id: 4,
    title: "PRODUCT NAME",
    description: "DESCRIPTION",
    image: product4,
    tag: "PRODUCT 4",
  },
];

const DigitalProducts = () => {
  return (
    // <div className="bg-white text-black py-16  mt-5 ">

    //   <div
    //     className="w-[451px] h-[131px] mx-auto"
    //     style={{
    //       lineHeight: "normal",
    //       display: "flex",
    //       flexDirection: "column",
    //       alignItems: "center",
    //       justifyContent: "center",
    //       gap: "8px",
    //     }}
    //   >
    //     <h2 className="text-[56px] sm:text-5xl font-impact uppercase mb-0 tracking-[0.5%] leading-[65px]">
    //       DIGITAL <span className="text-[#008578]">PRODUCTS</span>
    //     </h2>

    //     <div style={{ width: "100%" }}>
    //       <p className=" text-[#000] font-[400] text-[14px] font-Roboto leading-[25px] tracking-[0.5%] mt-2 text-center">
    //         ENHANCE YOUR LEARNING WITH INSTANT DIGITAL PRODUCTS <br /> FROM
    //         INSTANT REAL-WORLD PROJECTS TO PROMPTS.
    //       </p>
    //     </div>
    //   </div>

    //   <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 px-4">
    //     {products.map((product) => (
    //       <div
    //         key={product.id}
    //         className="w-full h-[404px] relative rounded-md overflow-hidden"
    //       >
    //         <img
    //           src={product.image}
    //           alt={product.title}
    //           className="w-full h-full object-cover"
    //         />
    //         <div className="absolute top-4 left-4 bg-[#4B4B4B] text-white text-sm font-bold py-1 px-3 rounded-md font-Roboto Condensed uppercase tracking-wide">
    //           {product.tag}
    //         </div>
    //         <div className="absolute bottom-4 left-4 text-white font-impact uppercase">
    //           <h3 className="text-[22px] leading-[28px]">{product.title}</h3>
    //           <p className="font-Roboto Condensed text-sm mt-1">
    //             {product.description}
    //           </p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    // <div className="bg-white text-black py-16 mt-5">
    //   {/* Title Section */}
    //   <div
    //     className="w-full sm:w-[451px] h-auto mx-auto px-4"
    //     style={{
    //       lineHeight: "normal",
    //       display: "flex",
    //       flexDirection: "column",
    //       alignItems: "center",
    //       justifyContent: "center",
    //       gap: "8px",
    //     }}
    //   >
    //     <h2 className="text-[55px] sm:text-[56px] font-impact uppercase mb-0 tracking-[0.5%] leading-[45px] sm:leading-[65px] ">
    //       DIGITAL <span className="text-[#008578]">PRODUCTS</span>
    //     </h2>

    //     <div style={{ width: "100%" }}>
    //       <p className="text-[#000] font-[400] text-[14px] font-Roboto leading-[22px] sm:leading-[25px] tracking-[0.5%] mt-2 text-center">
    //         ENHANCE YOUR LEARNING WITH INSTANT DIGITAL PRODUCTS <br /> FROM
    //         INSTANT REAL-WORLD PROJECTS TO PROMPTS.
    //       </p>
    //     </div>
    //   </div>

    //   {/* Product Grid */}
    //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 px-4">
    //     {products.map((product) => (
    //       <div
    //         key={product.id}
    //         className="w-full h-[404px] relative rounded-md overflow-hidden"
    //       >
    //         <img
    //           src={product.image}
    //           alt={product.title}
    //           className="w-full h-full object-cover"
    //         />
    //         <div className="absolute top-4 left-4 bg-[#4B4B4B] text-white text-sm font-bold py-1 px-3 rounded-md font-Roboto Condensed uppercase tracking-wide">
    //           {product.tag}
    //         </div>
    //         <div className="absolute bottom-4 left-4 text-white font-impact uppercase">
    //           <h3 className="text-[22px] leading-[28px]">{product.title}</h3>
    //           <p className="font-Roboto Condensed text-sm mt-1">
    //             {product.description}
    //           </p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="bg-white text-black py-16">
      {/* Title Section */}
      <div
        className="w-[100%] h-[131px] mx-auto px-4 sm:px-0"
        style={{
          lineHeight: "normal",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
        }}
      >
        <h2 className="text-[56px] sm:text-5xl font-impact uppercase mb-0 tracking-[0.5%] leading-[65px] text-center">
          DIGITAL <span className="text-[#008578]">PRODUCTS</span>
        </h2>

        <div style={{ width: "100%" }}>
          <p className="text-[#000000] font-[400] text-[14px] font-Roboto leading-[25px] tracking-[0.5%] mt-2 text-center">
            <span>ENHANCE YOUR LEARNING WITH INSTANT DIGITAL</span>
            <br></br>
            <span>PRODUCTS FROM INSTANT REAL-WORLD PROJECTS TO PROMPTS.</span>
          </p>
        </div>
      </div>

      {/* Responsive Wrapper Added */}
      <div className="w-full mt-16 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full h-[404px] relative rounded-md overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-[rgba(255,255,255,0.4)] text-white text-sm font-bold py-2 px-3 rounded-4 font-Roboto Condensed uppercase tracking-wide">
                {product.tag}
              </div>
              <div className="absolute bottom-4 left-4 text-white font-impact uppercase">
                <h3 className="text-[22px] leading-[28px]">{product.title}</h3>
                <p className="font-Roboto Condensed text-sm mt-1">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigitalProducts;
