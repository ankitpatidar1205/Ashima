import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import marketproduct1 from "../../assets/marketproduct1.png";
import marketproduct2 from "../../assets/marketproduct2.png";
import marketproduct3 from "../../assets/marketproduct3.png";
import marketproduct4 from "../../assets/marketproduct4.png";
import marketproduct5 from "../../assets/marketproduct5.png";
import marketproduct6 from "../../assets/marketproduct6.png";
import StartLearning from "../Home/StartLearning";
import { useState } from "react";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import { FaPlus, FaMinus } from "react-icons/fa";
import REviewCarrds from "../Home/ReviewCards";
import axiosInstance from "../../utils/axiosInstance";
import useCurrency from "../../utils/useCurrency";
const MarketProduct = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const {id} = useParams()
  const [product, setProduct] = useState(null);
const currency = useCurrency();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axiosInstance.get(`/product?id=${id}`);
        console.log(res.data.data)
        setProduct(res.data.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "WHAT TYPES OF DIGITAL PRODUCTS ARE AVAILABLE ON AISKILLS?",
      answer:
        "AISKILLS offers a wide range of digital products including eBooks, online courses, software tools, templates, and more.",
    },
    {
      question: "ARE THE DIGITAL PRODUCTS ON AISKILLS BEGINNER-FRIENDLY?",
      answer:
        "Yes, most of our digital products are beginner-friendly, with easy-to-follow instructions and tutorials.",
    },
    {
      question: "HOW DO I ACCESS MY PURCHASED DIGITAL PRODUCTS?",
      answer:
        "After purchase, you will receive an email with a download link or access instructions. You can also find your products in your account under 'My Purchases'.",
    },
    {
      question:
        "CAN I GET A REFUND IF I'M NOT SATISFIED WITH A DIGITAL PRODUCT?",
      answer:
        "Refunds are available within 30 days of purchase. Please contact customer support for assistance.",
    },
    {
      question: "CAN INSTRUCTORS SELL THEIR OWN DIGITAL PRODUCTS ON AISKILLS?",
      answer:
        "Yes, instructors can sell their digital products on AISKILLS. You can sign up as a seller and upload your products for sale.",
    },
    {
      question: "ARE THERE ANY FREE DIGITAL PRODUCTS AVAILABLE?",
      answer:
        "Yes, AISKILLS offers several free digital products, including free courses, templates, and resources.",
    },
    {
      question: "CAN I USE AISKILLS DIGITAL PRODUCTS FOR COMMERCIAL PROJECTS?",
      answer:
        "Some digital products are licensed for commercial use, but please review the license terms of each product before using them in commercial projects.",
    },
    {
      question: "DO I NEED SPECIAL SOFTWARE TO USE THE DIGITAL PRODUCTS?",
      answer:
        "In most cases, you don't need special software, but some products may require specific software like PDF readers or course platforms.",
    },
  ];

  return (
    <>
      <Header />
      <div className=" pt-9 flex flex-col lg:flex-row bg-[#047670] lg:h-[652px] px-4 lg:pt-14">
        {/* Left Image Section */}
        <button  onClick={() => window.history.back()}  className="absolute top-28 left-4 text-white text-2xl bg-[#047670] rounded-full p-2" >
          ←
        </button>

        <div className="flex w-full lg:w-1/2 items-center justify-center lg:justify-start p-6 lg:pl-20 ">
        {product?.product_images && (
        <img  src={JSON.parse(product.product_images)[0]}  alt={product?.product_title}
           className="w-full h-full object-contain rounded-tl-[4px] rounded-tr-[4px] mt-8" />)}
        </div>

        {/* Right Content Section */}
        <div className="relative w-full lg:absolute lg:w-[460px] bg-[#ffffff] rounded-md p-6 lg:mt-20 lg:left-[50%] xl:left-[931px] border-2 border-[#047670]">
          {/* eBook Tag */}

          <div className="text-[13px] font-roboto text-[#000000] mt-4">
           {product?.product_type}
          </div>

          {/* Title */}
          <div className="w-full text-[30px] lg:text-[30px] tracking-[0.02em] capitalize font-impact mt-2">
          {product?.product_title}
            {/* Author */}
            <div className="text-[12px] font-Jost mb-2 text-[#1E1E1ECC] p-2 rounded-md mt-2">
              By <span>{product?.author}</span>
            </div>
          </div>

          {/* Price and File */}
          <div className="text-[45px] lg:text-[32px] font-impact text-[#047670] whitespace-nowrap text-start mt-2">
            Try {currency.symbol}
                {(parseFloat(product?.sale_price) * currency.rate).toFixed(2)}
            <span className="text-[20px] text-[#1E1E1E] font-jost">
              | 1 File
            </span>
          </div>

          {/* Buy Now Button */}
          <Link to="/blog">
            <button className="w-full bg-[#047670] hover:bg-[#005b4f] text-white border border-[#047670] rounded-[12px] px-px py-[10px] flex items-center justify-center gap-[10px] text-lg lg:text-[22px] mt-3">
              Buy Now
            </button>
          </Link>

          {/* Unlock and Access Button */}
          <button className="w-full lg:w-[214px] mx-auto lg:ml-20 h-[32.33px] bg-[#ffffff] rounded-[4px] text-sm lg:text-[18px] text-[#1E1E1ECC] flex items-center justify-center gap-4 mt-2 font-jost">
            <img src={marketproduct2} alt="lock"
              className="w-[24px] h-[24px]"/>
            Unlock And Access
          </button>

          {/* PDF Download Section */}
          <div className="flex items-center border border-[#047670] justify-center gap-[12px] font-roboto p-2 rounded-[12px] mt-5">
            <img src={marketproduct1} alt="icon" className="w-6 h-6" />
            <a href="#" className="flex-1 text-center !text-[#047670] py-2 rounded-[12px] text-sm lg:text-[22px] truncate">
              Premium Glowup.PDF (128mb)
            </a>
            <img src={marketproduct2} alt="lock" className="w-6" />
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-8 mt-10">
        <div className="lg:w-[900px] bg-[#ffffff] rounded-md text-[#1E1E1E] mt-8 lg:mt-20 lg:ml-20">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
            <h2 className="text-[#047670] text-[30px] font-impact leading-[20px]">
              Related Images
            </h2>
            <div className="flex items-center gap-2 text-[#1E1E1ECC] font-jost text-[20px] mt-2 sm:mt-0 ">
              Download
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#047670"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                />
              </svg>
            </div>
          </div>

          {/* Images Row with fixed min-width */}
          <div className="flex gap-4 min-w-[850px] mt-5">
            <img
              src={marketproduct3}
              alt="img1"
              className="w-[210px] h-[140px] object-cover rounded-md"
            />
            <img
              src={marketproduct4}
              alt="img2"
              className="w-[210px] h-[140px] object-cover rounded-md"
            />
            <img
              src={marketproduct5}
              alt="img3"
              className="w-[210px] h-[140px] object-cover rounded-md"
            />
            <img
              src={marketproduct6}
              alt="img4"
              className="w-[210px] h-[140px] object-cover rounded-md"
            />
          </div>
        </div>
      </div>
{/* About This Product Section */}
<div className="lg:w-[796px] lg:ml-20">
  {/* Product Description Box */}
  <div className="bg-white p-4 rounded-md shadow text-[#1E1E1E] mb-8">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-2xl lg:text-[26px] font-impact text-[#1E1E1E]">
        About This Product
      </h2>
    </div>

    <p className="mb-4 text-base lg:text-[18px] font-Jost">
      {product?.description || "No description available."}
    </p>
  </div>

  {/* Instructor Details Box */}
  <div className="bg-white p-4 rounded-md shadow text-[#1E1E1E]">
    <h3 className="text-xl lg:text-2xl font-impact text-[#1E1E1E] mb-4 border-b pb-3">
      Now Your Instructor
    </h3>

    {product?.instructor_details ? (
      <div className="flex items-center gap-4">
        {product.instructor_details.profile_image && (
          <img src={product?.instructor_details?.profile_image}
            alt={product?.instructor_details?.full_name || "Instructor"}
            className="w-20 h-20 rounded-full object-cover border"
          />
        )}

        <div>
          {product.instructor_details.full_name && (
            <h4 className="text-lg font-bold">
              {product?.instructor_details?.full_name}
            </h4>
          )}
          {product.instructor_details.email && (
            <p className="text-sm text-gray-600">
              📧 {product?.instructor_details?.email}
            </p>
          )}
          {product.instructor_details.mobile_number && (
            <p className="text-sm text-gray-600">
              📞 {product?.instructor_details?.mobile_number}
            </p>
          )}
        </div>
      </div>
    ) : (
      <p className="text-sm text-gray-600">Instructor details not available.</p>
    )}
  </div>
</div>
      <div className="bg-[#000000] py-20 px-6 md:px-12 mt-5">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="text-[#ffffff] flex flex-col gap-4 text-start pr-20 sm:pr-20 lg:pr-40">
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
            {faqData.map((faq, index) => (
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
      <StartLearning />
      <REviewCarrds />
      <Footer />
    </>
  );
};

export default MarketProduct;
