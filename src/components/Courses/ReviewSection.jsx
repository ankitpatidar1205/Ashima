import { useState, useEffect, useCallback } from "react";
import { FaStar } from "react-icons/fa";
import axiosInstance from "../../utils/axiosInstance";

export default function ReviewSection({ id: course_id }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState([]);
  const [message, setMessage] = useState("");

  const student_id = localStorage.getItem("is_id");

  // ✅ Saare reviews fetch karo
  const fetchReviews = useCallback(async () => {
    try {
      const res = await axiosInstance.get("/reviews");
      console.log("Fetched reviews:", res.data.data);
      setReviews(res.data.data || []);
    } catch (err) {
      console.error("Error fetching reviews:", err);
    }
  }, []);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  // ✅ Review Submit (POST)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (rating === 0 || reviewText.trim() === "") {
      setMessage("⚠️ Please give a rating and write a review before submitting!");
      return;
    }

    try {
      const newReview = { 
        rating: Number(rating), 
        review_text: reviewText, 
        course_id, 
        student_id 
      };
      await axiosInstance.post("/reviews", newReview);

      setMessage("✅ Thank you! Your review has been submitted.");
      setRating(0);
      setReviewText("");
     await fetchReviews(); // refresh list
    } catch (err) {
      console.error("Error submitting review:", err);
      setMessage("❌ Failed to submit review. Try again.");
    }
  };

  // ✅ Frontend filter by course_id
  const filteredReviews = reviews.filter(
    (review) => Number(review.course_id) === Number(course_id)
  );

  return (
    <div className="w-full bg-white p-8 mt-8 rounded-xl shadow-md">
      <h2 className="text-3xl font-bold text-[#047670] mb-6 text-center">
        Write a Review
      </h2>

      {/* Message */}
      {message && (
        <p className="text-center mb-4 text-sm font-medium text-red-500">
          {message}
        </p>
      )}

      {/* ⭐ Star Rating */}
      <div className="flex items-center justify-center gap-2 mb-6">
        {[...Array(5)].map((_, index) => {
          const currentRating = index + 1;
          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                value={currentRating}
                onClick={() => setRating(currentRating)}
                className="hidden"
              />
              <FaStar
                size={28}
                className="cursor-pointer transition-colors"
                color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </div>

      {/* Review Textarea */}
      <div className="max-w-4xl mx-auto">
        <textarea
          className="w-full border rounded-lg p-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#047670]"
          rows="4"
          placeholder="Share your experience..."
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="max-w-4xl mx-auto">
        <button
          onClick={handleSubmit}
          className="mt-4 w-full bg-[#047670] text-white font-bold py-3 rounded-lg hover:bg-[#035a56] transition"
        >
          Submit Review
        </button>
      </div>

      {/* Display Reviews */}
      {filteredReviews.length > 0 && (
        <div className="mt-10 max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Recent Reviews
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((review) => (
              <div key={review.id}
                className="p-6 bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition">
                {/* ⭐ Rating */}
                <div className="flex items-center mb-2">
                  {[...Array(Number(review?.rating))].map((_, i) => (
                    <FaStar key={i} color="#ffc107" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 mb-3">{review?.review_text}</p>
               {/* Student Name */}
  {review?.student_name && (
    <p className="text-gray-700 mb-3 font-medium">
      by {review.student_name}
    </p>
  )}

                {/* Review Meta */}
                <p className="text-sm text-gray-500 italic">   Posted on{" "}
                  {review.created_at ? new Date(review.created_at).toLocaleDateString()  : "Recently"} </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {filteredReviews.length === 0 && (
        <p className="text-center text-gray-500 mt-6">
          No reviews yet for this course.
        </p>
      )}
    </div>
  );
}
