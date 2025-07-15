import React, { useEffect, useState } from "react";
import { useDispatch , useSelector} from "react-redux";
import { createArticle, fetchArticles } from "../../Redux/slices/articleSlice/articleSlice";
import { fetchCategories } from "../../Redux/slices/categorySlice/categorySlice";

const AddArticleModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    category_id: "",
    content: "",
    tags: "",
    article: null,
    status: "0", // Default status (0 = draft, 1 = published)
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("category_id", formData.category_id);
    data.append("content", formData.content);
    data.append("tags", formData.tags);
    data.append("article", formData.article);
    data.append("status", formData.status); // Status is "0" for draft or "1" for published

    try {
      await dispatch(createArticle(data));
      dispatch(fetchArticles());
      onClose(); // Close modal after submit
    } catch (error) {
      console.error("Error submitting article:", error);
    }

    // Reset form fields after submission
    setFormData({
      title: "",
      category_id: "",
      content: "",
      tags: "",
      article: null,
      status: "0",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevState) => ({
      ...prevState,
       article: file,
    }));
  };

  const handlePublishChange = () => {
    setFormData((prevState) => ({
      ...prevState,
      status: prevState.status === "1" ? "0" : "1", // Toggle between draft and publish
    }));
  };
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  const  categories  = useSelector((state) => state?.categories?.categories);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-[600px] max-w-full p-6 rounded-lg relative overflow-y-auto max-h-[90vh]">
        <button
          className="absolute right-4 top-4 text-gray-400 hover:text-black"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-1">Add New Article</h2>
        <p className="text-sm text-gray-500 mb-4">Create and publish a new blog post</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="text-sm font-medium">Blog Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter blog title..."
              className="w-full border border-gray-300 p-2 rounded mt-1"
            />
          </div>

          <div className="mb-3">
            <label className="text-sm font-medium">Category</label>
            <select
              name="category_id"
              value={formData.category_id}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded mt-1"
            >
              <option value="">Select category</option>
              {/* Replace with dynamic categories or leave as static */}
              {
                categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.category_name}
                  </option>
                ))
              }
            </select>
          </div>

          <div className="mb-3 border border-dashed border-gray-300 rounded p-6 text-center text-gray-500">
             <label htmlFor=" article" className=" cursor-pointer">
              Browse files
            </label>
            <input type="file" name="article" onChange={handleFileChange}  id=" article"/>
          </div>

          <div className="mb-3">
            <label className="text-sm font-medium">Blog Content</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Write your blog content here..."
              className="w-full border border-gray-300 p-2 rounded h-32"
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="text-sm font-medium">Tags</label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              placeholder="Add tags separated by commas..."
              className="w-full border border-gray-300 p-2 rounded mt-1"
            />
          </div>

          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.status === "1"}
                onChange={handlePublishChange}
              />
              <span className="text-sm">Publish immediately</span>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                className="bg-gray-200 px-4 py-2 rounded text-sm"
                onClick={() => setFormData((prevState) => ({ ...prevState, status: "0" }))}
              >
                Save as Draft
              </button>
              <button
                type="submit"
                className="bg-[#047670] text-white px-4 py-2 rounded text-sm"
              >
                {formData.status === "1" ? "Publish Article" : "Save as Draft"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddArticleModal;
