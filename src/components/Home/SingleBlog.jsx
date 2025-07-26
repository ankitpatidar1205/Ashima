import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from "../../Redux/slices/articleSlice/articleSlice";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import axiosInstance from "../../utils/axiosInstance";

const SingleBlog = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { articles } = useSelector((state) => state.articles);
  const [subBlogs, setSubBlogs] = useState([]);
  const [loadingSubBlogs, setLoadingSubBlogs] = useState(true);

  useEffect(() => {
    dispatch(fetchArticles());
    fetchSubBlogs();
  }, [dispatch, id]);

  const fetchSubBlogs = async () => {
    try {
      const res = await axiosInstance.get(`/subblogs`);
      const filtered = res.data.data.filter((item) => item.blog_id === id);
      setSubBlogs(filtered);
    } catch (err) {
      console.error("Error fetching subblogs:", err);
    } finally {
      setLoadingSubBlogs(false);
    }
  };

  const blog = articles.find((item) => item.id === parseInt(id));

  if (!blog)
    return (
      <p className="mt-24 text-center text-red-600 font-semibold">
        Blog not found.
      </p>
    );

  return (
    <>
      <Header />
      <div className="pt-[120px] px-4 lg:pt-[140px] pb-20 bg-white">
        {/* Back Button */}
        <button  onClick={() => window.history.back()}  className="absolute top-28 left-4 text-white text-2xl bg-[#047670] rounded-full p-2">  ← </button>

        {/* Main Blog */}
        <article className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">{blog.title} </h1>

        <img  src={blog.article}  alt={blog.title}  className="w-full max-h-[400px] object-cover rounded-lg mb-6"/>
          <p className="text-gray-600 text-base mb-2">
            <strong>Category:</strong>{" "}
            {blog.category_name || "No category name available."}
          </p>
          <p className="text-gray-600 text-base mb-4">
            <strong>Tags:</strong> {blog.tags || "No tag available."}
          </p>
          <div className="text-gray-800 text-lg leading-relaxed tracking-wide space-y-4">
            <p>{blog.content || "No description available."}</p>
          </div>
        </article>

        {/* Sub Blogs */}
        <section className="max-w-6xl mx-auto mt-20 px-2 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center mb-12 text-gray-900">
            Related Sub Blogs
          </h2>

          {loadingSubBlogs ? (
            <p className="text-center text-gray-500">Loading sub blogs...</p>
          ) : subBlogs.length > 0 ? (
            subBlogs.map((sub, index) => (
              <article  key={sub.id}   className="mb-20 border-b pb-12 last:border-b-0 last:pb-0">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {index + 1}. {sub?.title}
                </h3>
              <img src={sub?.sub_blog_image} alt={sub.title} className="w-full max-h-[300px] object-cover rounded-lg mb-6"/>
                <div className="text-gray-700 text-lg leading-relaxed tracking-wide space-y-4">
                  <p>{sub?.description}</p>
                </div>
              </article>
            ))
          ) : (
            <p className="text-center text-gray-500">No sub blogs found.</p>
          )}
        </section>
      </div>

      <Footer />
    </>
  );
};

export default SingleBlog;
