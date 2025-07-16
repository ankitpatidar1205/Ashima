import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDigitalProducts } from "../../Redux/slices/DigitalProductSlice/DigitalProductSlice";
import { Link } from "react-router-dom";
import useCurrency from "../../utils/useCurrency";

const DigitalProducts = () => {
  const dispatch = useDispatch();
  const currency = useCurrency();
  const products = useSelector((state) => state.products);
  // console.log(products.data);
  useEffect(() => {
    dispatch(getAllDigitalProducts());
  }, [dispatch]);
  return (
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
          {products?.data
            .slice()
            .reverse()
            .slice(0, 4)
            .map((product, index) => {
              // Parsing the product_images string into an actual array
              const productImages = JSON.parse(product.product_images);

              return (
                <>
                  <Link to={`/marketProduct/${product.id}`}>
                    {" "}
                    <div key={product.id}
                      className="w-full h-[404px] relative rounded-md overflow-hidden">
                      <img src={ productImages?.[0] || "https://via.placeholder.com/150" }  alt={product.product_title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"/>
                      <div className="absolute bottom-4 left-4 text-white font-impact uppercase">
                        <h3 className="text-[22px] leading-[28px]">
                          {product.product_title}
                        </h3>
                        <p className="font-Roboto Condensed text-sm mt-1">
                          {product.description.length > 50
                            ? `${product.description.slice(0, 50)}...`
                            : product.description}
                        </p>
                       <div className="mt-2 flex items-center justify-between w-full">
  <button className="bg-white text-black px-4 py-2 text-base rounded hover:bg-gray-200 transition">
    Learn More
  </button>
 <span className="font-bold text-lg text-white">
        {currency.symbol}
        {(parseFloat(product?.sale_price) * currency.rate).toFixed(2)}
      </span>
</div>
                      </div>
                    </div>
                  </Link>{" "}
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default DigitalProducts;
