import React, { useEffect, useState, useCallback } from "react";
import { FaTrash, FaSearch, FaStar } from "react-icons/fa";
import DashboardLayout from "../../Layout/DashboardLayout";
import axiosInstance from "../../utils/axiosInstance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReviewManager = () => {
  const [reviews, setReviews] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // ✅ Reviews fetch function
  const fetchReviews = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get("/reviews");
      setReviews(response?.data?.data || []);
    } catch (error) {
      console.error("Error fetching reviews", error);
      toast.error("Failed to load reviews!");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  // ✅ Delete Review
  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/reviews/${id}`);
      toast.success("Review deleted successfully!");
     await fetchReviews();
    } catch (err) {
      console.error("Error deleting review:", err);
      toast.error("Failed to delete review!");
    }
  };

  // ✅ Search Filter
  const filteredReviews = reviews.filter(
    (review) =>
      review?.student_name?.toLowerCase().includes(search.toLowerCase()) ||
      review?.review_text?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-100 min-h-screen">
        <ToastContainer position="top-right" autoClose={3000} />

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Review Manager</h2>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-lg p-4 mb-4 flex flex-col md:flex-row gap-3 items-center justify-between">
          <div className="relative w-full md:w-[360px]">
            <input
              type="text"
              placeholder="Search by student or review text..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border rounded-lg text-sm focus:outline-none"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400 text-sm" />
          </div>
        </div>

       

        {/* Card View */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.length > 0 ? (
            filteredReviews.map((review) => (
              <div
                key={review.id}
                className="p-6 bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition"
              >
                {/* Rating */}
                <div className="flex items-center mb-2">
                  {[...Array(Number(review.rating))].map((_, i) => (
                    <FaStar key={i} color="#ffc107" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 mb-3">{review.review_text}</p>
                <p className="text-gray-700 mb-3 font-medium">
                  by {review?.student_name ||"anonymous"}
                </p>

                {/* Review Meta */}
                <p className="text-sm text-gray-500 italic mb-3">
                  Posted on{" "}
                  {review.created_at
                    ? new Date(review.created_at).toLocaleDateString()
                    : "Recently"}
                </p>

                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(review.id)}
                  className="text-sm bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200"
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No Reviews found
            </p>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ReviewManager;
