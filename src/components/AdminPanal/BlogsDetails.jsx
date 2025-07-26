import React, { useState } from "react";
import { FaEye, FaTrash, FaSearch } from "react-icons/fa";
import DashboardLayout from "../../Layout/DashboardLayout";
import { useParams } from "react-router-dom";

const BlogsDetails = () => {
  const {id} = useParams()
  console.log(id)
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
   
       <DashboardLayout>
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold"> Mini Blogs</h2>
        </div>
        <button   onClick={() => setIsModalOpen(true)}   className="bg-[#047670] text-white px-4 py-2 rounded-lg text-sm" >
          + Add Sub Blog
        </button>
      </div>

      {/* Search */}
      <div className="bg-white rounded-lg p-4 mb-4 flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className="relative w-full md:w-[360px]">
          <input
            type="text"
            placeholder="Search articles..."
            className="pl-10 pr-4 py-2 w-full border rounded-lg text-sm focus:outline-none"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400 text-sm" />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50">
            <tr>
              {["#", "Image", "Title", "Description", "Actions"].map((head) => (
                <th key={head} className="px-4 py-3">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map((item, idx) => (
              <tr key={idx} className="border-b">
                <td className="px-4 py-3">{idx + 1}</td>
                <td className="px-4 py-3">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="blog"
                    className="w-[40px] h-[40px] rounded-full object-cover"
                  />
                </td>
                <td className="px-4 py-3">Sub Blog Title {idx + 1}</td>
                <td className="px-4 py-3 text-gray-500">
                  A short description for sub blog {idx + 1}.
                </td>
                <td className="px-4 py-3 flex gap-3 items-center">
                  <FaEye className="text-blue-600 cursor-pointer" />
                  <FaTrash className="text-red-600 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[95%] md:w-[500px] relative">
            <h2 className="text-xl font-semibold mb-4">Add Sub Blog</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Title</label>
                <input  type="text"
                  className="w-full border px-3 py-2 rounded focus:outline-none text-sm"  placeholder="Enter sub blog title" />
              </div>
              <div>
                <label className="block text-sm font-medium">Description</label>
                <textarea
                  rows={3}
                  className="w-full border px-3 py-2 rounded focus:outline-none text-sm"
                  placeholder="Enter description"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium">Image</label>
                <input type="file" className="w-full text-sm" />
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button  onClick={() => setIsModalOpen(false)} className="px-4 py-2 rounded border">
                Cancel
              </button>
              <button className="bg-[#047670] text-white px-4 py-2 rounded">
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
