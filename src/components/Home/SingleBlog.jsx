import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from "../../Redux/slices/articleSlice/articleSlice";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";

const SingleBlog = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { articles } = useSelector((state) => state.articles);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  const blog = articles.find((item) => item.id === parseInt(id));

  if (!blog) return <p className="mt-24 text-center">Blog not found.</p>;

  return (
    <>
      {/* Header */}
      <Header />

      {/* Main Content Wrapper */}
      <div className="pt-[120px] pb-20 px-4 lg:pt-[140px] lg:pb-20 bg-white"> {/* Added padding for top and bottom spacing */}
        
        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="absolute top-28 left-4 text-white text-2xl bg-[#047670] rounded-full p-2"
        >
          ←
        </button>

        {/* Blog Article Container */}
        <div className="mx-5 p-6 border shadow-sm rounded bg-[#047670] text-white">
          <img
            src={blog.article}
            alt={blog.title}
            className="w-full h-full mb-4 rounded object-cover transition-transform duration-300 hover:scale-[0.98]"
          />
          <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
          <p className="text-white text-lg mb-2">
            <strong>Category:</strong>{" "}
            {blog.category_name || "No category name available."}
          </p>
          <p className="text-white text-lg mb-2">
            <strong>Tags:</strong> {blog.tags || "No tag available."}
          </p>
          <p className="text-white text-lg mt-4">
            {blog.content || "No description available."}
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default SingleBlog;
