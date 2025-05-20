import React, { useState, useEffect } from "react";
import blog1 from "../../assets/blog1.png";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../../Redux/slices/articleSlice/articleSlice";
import { fetchCategories } from "../../Redux/slices/categorySlice/categorySlice";

const Blog = () => {
  const [activeTab, setActiveTab] = useState(null);

  const dispatch = useDispatch();
  const { articles, loading } = useSelector((state) => state.articles);
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchArticles());
  }, [dispatch]);

  // Set default tab to first category when categories load
  useEffect(() => {
    if (categories.length > 0 && activeTab === null) {
      setActiveTab(categories[0].id);
    }
  }, [categories]);

  // Filter articles by activeTab (category ID)
  const filteredArticles =
    activeTab === null
      ? articles
      : articles.filter((article) => article.category_id === activeTab);

  return (
    <>
      <Header />
      {/* Hero Section */}
      <section className="hero bg-[#047670] py-24 sm:px-6 md:px-10 flex flex-col lg:flex-row justify-around gap-10 flex-wrap pt-32">
        <div className="bg-[#ffffff] rounded-lg shadow-md p-3 w-full lg:w-[670px] h-auto">
          <img
            src={blog1}
            className="w-full h-auto max-h-[360px] object-cover rounded-md"
          />
          <div className="mt-4">
            <span className="text-[12px] font-normal text-[#1E1E1E1] font-jost">
              25 Mar 2025
            </span>
            <span className="mx-2 text-[12px] font-normal text-[#1E1E1E1] font-jost">
              |
            </span>
            <span className="text-[12px] font-normal text-[#1E1E1E1] font-jost">
              Featured
            </span>
          </div>
          <h2 className="text-[24px] sm:text-[28px] md:text-[36px] text-[#047670] mt-2 font-normal font-impact">
            How to Use Large Concept Models for Text Generation?
          </h2>
          <p className="text-[16px] sm:text-[18px] font-jost font-semibold text-[#1E1E1E] mt-3">
            Explore Large Concept Models, their architecture, differences from
            LLMs, implementation guide, and applications.
          </p>
          <button className="mt-4 bg-[#047670] text-[#ffffff] text-[18px] sm:text-[20px] md:text-[22px] font-roboto border font-bold rounded-[12px] h-[57px] w-full sm:w-[355px] flex justify-center items-center">
            Best Artificial Intelligence Blogs
          </button>
        </div>

        {/* Sign-Up Form */}
        <div className="bg-[#ffffff] w-full sm:w-[400px] h-auto p-6 rounded-lg shadow-md mt-10 lg:mt-20">
          <h3 className="text-[24px] sm:text-[30px] font-normal font-impact text-[#000000]">
            Start Learning Now
          </h3>
          <p className="text-[14px] sm:text-[16px] text-[#000000] font-[500px] font-jost mt-2">
            Learn by Doing
          </p>
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
            <label className="text-[18px] font-roboto font-normal text-[#1E1E1E]">
              EMAIL
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-[#1E1E1E]/70 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />

            <label className="text-[18px] uppercase font-roboto font-normal text-[#1E1E1E]">
              enter your program
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-[#1E1E1E]/70 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your program"
            />
          </div>

          <button className="w-full h-[47px] bg-[#1E1E1E]/10 text-[#1E1E1E]/50 font-medium py-2 rounded-lg mt-4 cursor-not-allowed text-[16px] sm:text-[18px]">
            SIGN UP
          </button>

          <p className="text-[12px] font-roboto font-normal text-center text-[#047670] mt-3">
            By continuing, you agree to AI Skills{" "}
            <a href="#" className="text-[#047670]">
              Terms
            </a>{" "}
            and{" "}
            <a href="#" className="text-[#047670]">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="bg-[#ffffff] py-8 px-10">
        <h2 className="text-[50px] font-impact font-normal text-[#000000] text-center mb-12">
          <span className="text-[#000000">TRENDING </span>
          <span className="text-[#047670]">NEWSLETTER</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-4">
          {/* ALL ARTICLES button */}
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-2 py-2 rounded-full text-[16px] font-Roboto Condensed fw-bold uppercase border-1 transition-all 
                ${
                  activeTab === category.id
                    ? "bg-[#047670] text-[#fff] border-[#002726]"
                    : "bg-[#f4F3F3] text-gray-800 border-[#000000] hover:bg-[#fffaf1] hover:text-[#000000]"
                } transition duration-200 ease-in-out`}
            >
              {category.category_name}
            </button>
          ))}
          <button
            onClick={() => setActiveTab(null)}
            className={`px-2 py-2 rounded-full text-[16px] font-Roboto Condensed fw-bold uppercase border-1 transition-all 
              ${
                activeTab === null
                  ? "bg-[#047670] text-[#fff] border-[#002726]"
                  : "bg-[#f4F3F3] text-gray-800 border-[#000000] hover:bg-[#fffaf1] hover:text-[#000000]"
              } transition duration-200 ease-in-out`}
          >
            All Articles
          </button>
        </div>
      </section>

      {/* Filtered Articles */}
      <div className="p-6 w-full">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((item) => (
                <div
                  key={item.id}
                  className="w-full h-[404px] relative rounded-md overflow-hidden"
                >
                  <img
                    src={item.article}
                    alt="Article"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute bottom-4 left-4 text-white font-impact uppercase">
                    <h3 className="text-[22px] leading-[28px]">{item.title}</h3>
                    <Link to={`/singleblog/${item.id}`}>
                      <button className="px-4 py-2 bg-white text-black rounded-full hover:bg-gray-100 transition text-sm">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center col-span-full text-gray-500">
                No articles found for this category.
              </p>
            )}
          </div>
        )}
      </div>

      {/* Trending Section */}
      <section className="trending-section px-10 mt-12 mb-10">
        <h2 className="text-[50px] font-impact font-normal text-[#000000] mb-12">
          <span className="text-[#000000">TRENDING </span>
          <span className="text-[#047670]">TUTORIALS</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "DATA SCIENCE TUTORIAL",
            "HOW TO BECOME A DATA SCIENTIST",
            "LEARN TO BE A PRO",
            "DATA SCIENCE",
            "DATA SCIENCE TUTORIAL",
            "HOW TO BECOME A DATA SCIENTIST",
            "LEARN TO BE A PRO",
            "DATA SCIENCE",
          ].map((item, index) => {
            const bgColors = [
              "bg-[#09D0C6]",
              "bg-[#FF757A]",
              "bg-[#A393FF]",
              "bg-[#FEE08B]",
            ];
            return (
              <div
                key={index}
                className={`h-[216px] w-[300px] flex items-center justify-center text-center text-[#1E1E1E] font-jost font-normal text-[20px] px-2 ${
                  bgColors[index % 4]
                }`}
              >
                {item}
              </div>
            );
          })}
        </div>
      </section>

      {/* Trending Blogs Section */}
      <section className="trending-section px-10 mt-16 mb-10">
        <h2 className="text-[50px] font-impact font-normal text-[#000000] mb-12">
          <span className="text-[#000000">TRENDING </span>
          <span className="text-[#047670]">BLOGS</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "DATA SCIENCE TUTORIAL",
            "HOW TO BECOME A DATA SCIENTIST",
            "LEARN TO BE A PRO",
            "DATA SCIENCE",
            "DATA SCIENCE TUTORIAL",
            "HOW TO BECOME A DATA SCIENTIST",
            "LEARN TO BE A PRO",
            "DATA SCIENCE",
          ].map((item, index) => {
            const bgColors = [
              "bg-[#09D0C6]",
              "bg-[#FF757A]",
              "bg-[#A393FF]",
              "bg-[#FEE08B]",
            ];
            return (
              <div
                key={index}
                className={`h-[216px] w-[300px] flex items-center justify-center text-center text-[#1E1E1E] font-jost font-normal text-[20px] px-2 ${
                  bgColors[index % 4]
                }`}
              >
                {item}
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blog;
