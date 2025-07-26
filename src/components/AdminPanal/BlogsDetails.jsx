import React, { useEffect, useState } from "react";
import { FaTrash, FaSearch } from "react-icons/fa";
import DashboardLayout from "../../Layout/DashboardLayout";
import { useParams } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const BlogsDetails = () => {
  const { id: blog_id } = useParams();
  const [subBlogs, setSubBlogs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [search, setSearch] = useState("");

  const fetchSubBlogs = async () => {
    try {
      const response = await axiosInstance.get("/subblogs");
      const filtered = response?.data?.data.filter(
        (blog) => blog.blog_id === blog_id
      );
      setSubBlogs(filtered);
    } catch (error) {
      console.error("Error fetching sub-blogs", error);
    }
  };

  useEffect(() => {
    fetchSubBlogs();
  }, [blog_id]);

  const handleAddSubBlog = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("blog_id", blog_id);
    if (image) {
      formData.append("sub_blog_image", image);
    }

    try {
      await axiosInstance.post("/subblogs", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Sub blog added successfully!");
      setIsModalOpen(false);
      setTitle("");
      setDescription("");
      setImage(null);
    await fetchSubBlogs();
    } catch (error) {
      console.error("Error uploading sub-blog:", error.response?.data || error);
      toast.error("Failed to add sub blog!");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/subblogs/${id}`);
      toast.error("Sub blog deleted successfully!");
      fetchSubBlogs();
    } catch (err) {
      console.error("Error deleting:", err);
      toast.error("Failed to delete!");
    }
  };

  const filteredBlogs = subBlogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-100 min-h-screen">
        <ToastContainer position="top-right" autoClose={3000} />

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Mini Blogs</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#047670] text-white px-4 py-2 rounded-lg text-sm"
          >
            + Add Sub Blog
          </button>
        </div>

        <div className="bg-white rounded-lg p-4 mb-4 flex flex-col md:flex-row gap-3 items-center justify-between">
          <div className="relative w-full md:w-[360px]">
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border rounded-lg text-sm focus:outline-none"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400 text-sm" />
          </div>
        </div>

        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Image</th>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Description</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBlogs.length > 0 ? (
                filteredBlogs.map((item, index) => (
                  <tr key={item.id} className="border-b">
                    <td className="px-4 py-3">{index + 1}</td>
                    <td className="px-4 py-3">
                      <img
                        src={item.sub_blog_image}
                        alt="sub-blog"
                        className="w-12 h-12 object-cover rounded-full"
                      />
                    </td>
                    <td className="px-4 py-3">{item.title}</td>
                    <td className="px-4 py-3 text-gray-500">
                      {item.description}
                    </td>
                    <td className="px-4 py-3 flex gap-3 items-center">
                      <FaTrash
                        onClick={() => handleDelete(item.id)}
                        className="text-red-600 cursor-pointer"
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-500">
                    No Mini Blog found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-[95%] md:w-[500px] relative">
              <h2 className="text-xl font-semibold mb-4">Add Sub Blog</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">Title</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border px-3 py-2 rounded focus:outline-none text-sm"
                    placeholder="Enter sub blog title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Description</label>
                  <textarea
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full border px-3 py-2 rounded focus:outline-none text-sm"
                    placeholder="Enter description"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium">Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      if (e.target.files.length > 0) {
                        setImage(e.target.files[0]);
                      }
                    }}
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded border"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddSubBlog}
                  className="bg-[#047670] text-white px-4 py-2 rounded"
                >
                  Save Sub Blog
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default BlogsDetails;
