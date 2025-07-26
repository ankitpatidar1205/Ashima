import React, { useEffect, useState } from "react";
import { FaTrash, FaSearch } from "react-icons/fa";
import DashboardLayout from "../../Layout/DashboardLayout";
import axiosInstance from "../../utils/axiosInstance";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const LaunchNow = () => {
  const [launchInquiries, setLaunchInquiries] = useState([]);
  const [search, setSearch] = useState("");

  const fetchLaunchInquiries = async () => {
    try {
      const response = await axiosInstance.get("/launch-now");
      setLaunchInquiries(response?.data?.data || []);
    } catch (error) {
      console.error("Error fetching launch inquiries", error);
    }
  };

  useEffect(() => {
    fetchLaunchInquiries();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/launch-now/${id}`);
      toast.error("Launch Inquiry deleted successfully!");
      fetchLaunchInquiries();
    } catch (err) {
      console.error("Error deleting:", err);
      toast.error("Failed to delete!");
    }
  };

  const filteredInquiries = launchInquiries.filter((item) =>
    item?.name?.toLowerCase().includes(search.toLowerCase()) ||
    item?.email?.toLowerCase().includes(search.toLowerCase()) ||
    item?.program_name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-100 min-h-screen">
        <ToastContainer position="top-right" autoClose={3000} />

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Launch Now Inquiry</h2>
        </div>

        <div className="bg-white rounded-lg p-4 mb-4 flex flex-col md:flex-row gap-3 items-center justify-between">
          <div className="relative w-full md:w-[360px]">
            <input
              type="text"
              placeholder="Search by name, email or program..."
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
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Program</th>
                <th className="px-4 py-3">Submitted At</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredInquiries.length > 0 ? (
                filteredInquiries.map((item, index) => (
                  <tr key={item.id} className="border-b">
                    <td className="px-4 py-3">{index + 1}</td>
                    <td className="px-4 py-3">{item.name}</td>
                    <td className="px-4 py-3">{item.email}</td>
                    <td className="px-4 py-3">{item.program_name}</td>
                    <td className="px-4 py-3 text-gray-500">
                      {new Date(item.created_at).toLocaleString()}
                    </td>
                    <td className="px-4 py-3">
                      <FaTrash
                        onClick={() => handleDelete(item.id)}
                        className="text-red-600 cursor-pointer"
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-6 text-gray-500">
                    No Launch Inquiry found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default LaunchNow