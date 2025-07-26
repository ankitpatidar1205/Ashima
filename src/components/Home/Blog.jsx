import React, { useState, useEffect } from "react";
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



  const filteredArticles =
    activeTab === null
      ? articles
      : articles.filter((article) => article.category_id === activeTab);

  return (
    <>
      <Header />

      <section className="bg-[#ffffff] py-24 px-10 pt-32">
        <h2 className="text-[50px] font-impact font-normal text-[#000000] text-center mb-12">
          <span className="text-[#000000]">TRENDING </span>
          <span className="text-[#047670]">ARTICLES</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-4">
          {categories.map((category) => (
            <button  key={category.id}  onClick={() => setActiveTab(category.id)}
              className={`px-2 py-2 rounded-full text-[16px] font-Roboto Condensed fw-bold uppercase border-1 transition-all 
                ${
                  activeTab === category.id
                    ? "bg-[#047670] text-[#fff] border-[#002726]"
                    : "bg-[#f4F3F3] text-gray-800 border-[#000000] hover:bg-[#fffaf1] hover:text-[#000000]" } transition duration-200 ease-in-out`}  >
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

      <Footer />
    </>
  );
};

export default Blog;
