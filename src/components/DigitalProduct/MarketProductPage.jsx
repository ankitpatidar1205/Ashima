import {useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StartLearning from "../Home/StartLearning";
import { useState } from "react";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import { FaPlus, FaMinus } from "react-icons/fa";
import REviewCarrds from "../Home/ReviewCards";
import axiosInstance from "../../utils/axiosInstance";
import useCurrency from "../../utils/useCurrency";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MarketProduct = () => {
  const navigate= useNavigate()
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
      question: "WHAT TYPES OF DIGITAL PRODUCTS ARE AVAILABLE ON AI SKILLS?",
      answer:
        "AI SKILLS offers a wide range of digital products including eBooks, online courses, software tools, templates, and more.",
    },
    {
      question: "ARE THE DIGITAL PRODUCTS ON AI SKILLS BEGINNER-FRIENDLY?",
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
      question: "CAN INSTRUCTORS SELL THEIR OWN DIGITAL PRODUCTS ON AI SKILLS?",
      answer:
        "Yes, instructors can sell their digital products on AI SKILLS. You can sign up as a seller and upload your products for sale.",
    },
    {
      question: "ARE THERE ANY FREE DIGITAL PRODUCTS AVAILABLE?",
      answer:
        "Yes, AI SKILLS offers several free digital products, including free courses, templates, and resources.",
    },
    {
      question: "CAN I USE AI SKILLS DIGITAL PRODUCTS FOR COMMERCIAL PROJECTS?",
      answer:
        "Some digital products are licensed for commercial use, but please review the license terms of each product before using them in commercial projects.",
    },
    {
      question: "DO I NEED SPECIAL SOFTWARE TO USE THE DIGITAL PRODUCTS?",
      answer:
        "In most cases, you don't need special software, but some products may require specific software like PDF readers or course platforms.",
    },
  ];

const HandleBuyNow = (productId) => {
  const student_id = localStorage.getItem("is_id");

  if (student_id) {
    // ✅ Product buy success
    toast.success("Product bought successfully!");
    // Yaha aap API call bhi kar sakte ho purchase ke liye
    console.log(`Student ${student_id} bought product ${productId}`);
  } else {
    // ❌ Not logged in
    toast.error("Please login to buy this product!");
     // 3 second delay before redirect
    setTimeout(() => {
      navigate("/login");
    }, 3000);
  }
};
  return (
    <>
    <ToastContainer/>
      <Header />
       <button  onClick={() => window.history.back()}  className="absolute top-28 left-4 text-white text-2xl bg-[#047670] rounded-full p-2" style={{fontSize:"2.5rem" , fontWeight:"bold"}} >
          ←  </button>
      <div className=" pt-9 flex flex-col lg:flex-row bg-[#047670] lg:h-[652px] px-4 lg:pt-14">
        {/* Left Image Section */}
      
        <div className="flex w-full lg:w-1/2 items-center justify-center lg:justify-start p-6 lg:pl-20 ">
        {product?.product_images && (
        <img  src={JSON.parse(product.product_images)[0]}  alt={product?.product_title}
           className="w-full h-full object-contain rounded-tl-[4px] rounded-tr-[4px] mt-8" />)}
        </div>

        {/* Right Content Section */}
        <div className="relative w-full lg:absolute lg:w-[460px] bg-[#ffffff] rounded-md lg:justify-start  p-6 lg:mt-20 xl:left-[780px] border-2 border-[#047670]" style={{marginTop:"7rem"}}>
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
            Try  {currency.symbol}
                {(parseFloat(product?.sale_price) * currency.rate).toFixed(2)}
          </div>

          {/* Buy Now Button */}
            <button onClick={()=> HandleBuyNow(product.id)}  className="w-full bg-[#047670] hover:bg-[#005b4f] text-white border border-[#047670] rounded-[12px] px-px py-[10px] flex items-center justify-center gap-[10px] text-lg lg:text-[22px] mt-3">
              Buy Now
            </button>
          </div>
        </div>
      

   
<div className="lg:w-[796px] lg:ml-20 mt-4">
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
