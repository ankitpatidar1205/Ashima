import React, { useEffect, useRef } from "react";
import digitalproductsection from "../../assets/digitalproductsection.png";
import { Link, useNavigate } from "react-router-dom";
import StartLearning from "../Home/StartLearning";
import Footer from "../../Layout/Footer";
import Reviewcarrd from "../Home/ReviewCards";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getAllDigitalProducts } from "../../Redux/slices/DigitalProductSlice/DigitalProductSlice";
import useCurrency from "../../utils/useCurrency";
function DigitalProductsSection() {
  const productSectionRef = useRef(null);
  const dispatch = useDispatch();
  const currency = useCurrency();
  const [priceRange, setPriceRange] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const scrollToProducts = () => {
    if (productSectionRef.current) {
      productSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const handlePriceRangeChange = (e) => {
    setPriceRange(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const products = useSelector((state) => state.products);
  const filteredProducts = products?.data
    ?.filter((item) => {

      // Only Show Published Blog
      if (item.status != 1) return false;

      // Search filter
      if (
        searchQuery &&
        !item.product_title.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      // Price range filter
      if (priceRange === "Under 10" && item.sale_price >= 10) return false;
      if (
        priceRange === "10-50" &&
        (item.sale_price < 10 || item.sale_price > 50)
      )
        return false;
      if (priceRange === "50+" && item.sale_price <= 50) return false;

      return true;
    })
    ?.sort((a, b) => {
      if (sortOption === "A-Z")
        return a.product_title.localeCompare(b.product_title);
      if (sortOption === "Z-A")
        return b.product_title.localeCompare(a.product_title);
      if (sortOption === "Price Low-High") return a.sale_price - b.sale_price;
      if (sortOption === "Price High-Low") return b.sale_price - a.sale_price;
      return 0;
    });

  useEffect(() => {
    dispatch(getAllDigitalProducts());
  }, [dispatch]);

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
      {/* HERO SECTION */}
      <div className="pt-20">
        <div className="h-auto bg-[#0E7369] flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 py-12 gap-6">
          {/* Left Side Content */}
          <div className="text-[#ffffff] w-full lg:w-[475px]">
            <h2 className="text-[32px] md:text-[40px] font-impact uppercase">
              Digital Products
            </h2>
            <p className="text-[16px] font-roboto mt-2">
              Download expertly crafted tools, resources, and templates
              developed by top creatives.
            </p>

            <div className="flex justify-center lg:justify-start">
              <button
                onClick={scrollToProducts}
                className="inline-block mt-4 h-[50px] w-[162px] bg-[#FF757A] text-white px-6 py-2 rounded-[12px] shadow-lg font-roboto text-[18px] text-center"
              >
                Shop Now
              </button>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="w-full lg:w-auto">
            <img
              src={digitalproductsection}
              alt="Shopping carts digital"
              className="w-full max-w-[700px] h-auto rounded-[8px] shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Top Text Row */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-10 pt-8 pb-4 gap-2">
        {/* Left Side Text */}
        <div>
          <p className="text-[14px] text-[#000000] font-medium mb-1">
            {products.data.length} PRODUCTS
          </p>
          <h2
            ref={productSectionRef}
            className="text-[28px] md:text-[32px] font-impact uppercase text-[#000000] mt-4"
          >
            All Digital Products
          </h2>
        </div>

        {/* Right Side Filters */}
        <div className="flex flex-wrap items-center gap-2 font-inter mt-4">
          {/* Search */}
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search products..."
            className="border rounded-full px-4 py-2"
          />
          <select
            onChange={handlePriceRangeChange}
            className="border rounded-full px-4 py-2"
          >
            <option value="">Price Range</option>
            <option value="Under 10">Under $10</option>
            <option value="10-50">$10 - $50</option>
            <option value="50+">$50+</option>
          </select>
          <select
            onChange={handleSortChange}
            className="border rounded-full px-4 py-2"
          >
            <option value="">Sort By</option>
            <option value="A-Z">A - Z</option>
            <option value="Z-A">Z - A</option>
            <option value="Price Low-High">Price: Low to High</option>
            <option value="Price High-Low">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10 px-4 md:px-10">
        {filteredProducts?.map((item, index) => (
          <Link
            to={`/marketProduct/${item.id}`}
            key={index}
            className="block group relative"
          >
            <div className="border w-full max-w-[350px] h-auto rounded-lg shadow-sm overflow-hidden transition-all duration-300 mx-auto bg-white group-hover:bg-[#fffaf1] group-hover:shadow-lg">
              <div className="overflow-hidden">
                <img
                  src={
                    JSON.parse(item.product_images)?.[0] ||
                    "https://via.placeholder.com/310x234"
                  }
                  alt={item.product_title}
                  className="object-cover w-full h-[234px] transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-4">
                {/* Product Type */}
                <p className="text-[14px] text-[#333] mb-1">
                  {item.product_type}
                </p>

                {/* Title */}
                <h3 className="font-impact text-[18px] text-black leading-[24px] mb-2 break-words">
                  {item.product_title}
                </h3>

                {/* Author */}
                <p className="text-[13px] text-[#666] mb-2 font-jost truncate">
                  By {item.author}
                </p>

                {/* Price & Files */}
                <div className="flex items-center justify-between mt-2">
                  <p className="text-[#047670] font-impact text-[20px]">
                   {currency.symbol} 
                {(parseFloat(item.sale_price) * currency.rate).toFixed(2)}
                  </p>
                  <p className="text-[#1e1e1e] text-[13px]">1 File</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* FAQ AND REVIEWS */}
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
      <Reviewcarrd />
      <Footer />
    </>
  );
}

export default DigitalProductsSection;
