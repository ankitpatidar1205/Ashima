import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../../Redux/slices/articleSlice/articleSlice";
import { Link } from "react-router-dom";

const AllBlogs = () => {
  const dispatch = useDispatch();

  const { articles, loading } = useSelector((state) => state.articles);

  console.log(articles.data);
  useEffect(() => {
    dispatch(fetchArticles());
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
          ALL <span className="text-[#008578]">ARTICLE</span>
        </h2>
        <p className="text-[#000000] font-[400] text-[14px] font-Roboto leading-[25px] tracking-[0.5%] mt-2 text-center">
          <span>
            EXPLORE TRENDING ARTICLES AND INSIGHTS RELATED TO ARTIFICIAL
            INTELLIGENCE, INCLUDING TOOLS, TECHNIQUES, AND CAREER TIPS IN AI.
          </span>
        </p>

        {/* <div style={{ width: "100%" }}>
          <p className="text-[#000000] font-[400] text-[14px] font-Roboto leading-[25px] tracking-[0.5%] mt-2 text-center">
            <span>ENHANCE YOUR LEARNING WITH INSTANT DIGITAL</span>
            <br></br>
            <span>PRODUCTS FROM INSTANT REAL-WORLD PROJECTS TO PROMPTS.</span>
          </p>
        </div> */}
      </div>
      {/* Responsive Wrapper Added */}
      <div className="p-6 w-full">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {articles.map((item) => (
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
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllBlogs;
