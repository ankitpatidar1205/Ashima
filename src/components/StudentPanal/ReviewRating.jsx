import React from "react";
import { FaStar, FaThumbsUp, FaReply } from "react-icons/fa";
import DashboardLayout from "../../Layout/DashboardLayout";

const ReviewsRating = () => {
  return (
    <DashboardLayout>
      <div className="bg-gray-100 min-h-screen w-full py-8 px-4 md:px-8">
        <div className="bg-white rounded-lg shadow p-6 space-y-6">
          {/* Heading */}
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-900">
              Reviews & Ratings
            </h2>
            <div className="flex gap-3">
              <button className="bg-[#047670] text-white px-4 py-2 rounded text-sm">
                Write a Review
              </button>
              <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                <option>Most Relevant</option>
                <option>Most Recent</option>
              </select>
            </div>
          </div>

          {/* Rating Heading */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Python Programming Fundamentals
              <span className="text-yellow-500 inline-flex items-center ml-2">
                4.8 <FaStar className="ml-1" />
              </span>
              <span className="text-gray-500 text-sm ml-2">(328 reviews)</span>
            </h3>
          </div>

          {/* Write Review */}
          <div className="border border-gray-200 rounded p-5 space-y-4">
            <h4 className="font-semibold text-gray-900">Write Your Review</h4>

            <div className="flex items-center gap-1 text-yellow-500">
              {[...Array(5)].map((_, idx) => (
                <FaStar key={idx} />
              ))}
            </div>

            <input
              type="text"
              placeholder="Summarize your experience"
              className="border border-gray-300 rounded w-full px-3 py-2 text-sm"
            />

            <textarea
              placeholder="Share your experience with this course..."
              className="border border-gray-300 rounded w-full px-3 py-2 text-sm"
            ></textarea>

            <button className="bg-[#047670] text-white px-4 py-2 rounded text-sm">
              Submit Review
            </button>
          </div>

          {/* All Reviews */}
          <div className="space-y-6">
            {/* Single Review */}
            <div className="border-b border-gray-200 pb-4">
              <div className="flex justify-between">
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 items-center">
                    <span className="font-semibold text-gray-900">
                      Emily Johnson
                    </span>
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded">
                      Verified Student
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Excellent course! The instructor explains complex concepts
                    in a very clear and understandable way. The practical
                    exercises were particularly helpful.
                  </p>
                  <div className="flex gap-3 mt-2 text-gray-500 text-xs items-center">
                    <FaThumbsUp /> 24
                    <FaReply className="ml-2" /> Reply
                  </div>
                </div>

                <div className="text-right text-xs text-gray-500">
                  <div className="flex items-center text-yellow-500 text-sm justify-end">
                    {[...Array(5)].map((_, idx) => (
                      <FaStar key={idx} />
                    ))}
                  </div>
                  <div>1 week ago</div>
                </div>
              </div>
            </div>

            {/* Second Review with Replies */}
            <div className="border-b border-gray-200 pb-4">
              <div className="flex justify-between">
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 items-center">
                    <span className="font-semibold text-gray-900">
                      Michael Smith
                    </span>
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded">
                      Verified Student
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm">
                    The course content is well-structured but I think some
                    advanced topics could use more detailed explanations.
                  </p>
                  <div className="flex gap-3 mt-2 text-gray-500 text-xs items-center">
                    <FaThumbsUp /> 18
                    <FaReply className="ml-2" /> Reply
                  </div>
                </div>

                <div className="text-right text-xs text-gray-500">
                  <div className="flex items-center text-yellow-500 text-sm justify-end">
                    {[...Array(5)].map((_, idx) => (
                      <FaStar key={idx} />
                    ))}
                  </div>
                  <div>2 weeks ago</div>
                </div>
              </div>

              {/* Replies */}
              <div className="ml-6 mt-4 space-y-4">
                {/* Reply 1 */}
                <div className="border border-gray-200 rounded p-3">
                  <div className="flex justify-between">
                    <div className="flex flex-col gap-1">
                      <div className="flex gap-2 items-center">
                        <span className="font-semibold text-gray-900">
                          Sarah Wilson
                        </span>
                        <span className="bg-purple-100 text-purple-700 text-xs px-2 py-0.5 rounded">
                          Course Admin
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Thank you for your feedback, Michael. We're currently
                        working on expanding the advanced sections with more
                        detailed explanations and examples. Stay tuned for
                        updates!
                      </p>
                      <div className="flex gap-3 mt-2 text-gray-500 text-xs items-center">
                        <FaThumbsUp /> 8
                      </div>
                    </div>
                  </div>
                </div>

                {/* Reply 2 */}
                <div className="border border-gray-200 rounded p-3">
                  <div className="flex justify-between">
                    <div className="flex flex-col gap-1">
                      <div className="flex gap-2 items-center">
                        <span className="font-semibold text-gray-900">
                          Prof. David Chen
                        </span>
                        <span className="bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded">
                          Instructor
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Thank you for your kind feedback, Emily! I'm glad you
                        found the practical exercises helpful. We'll continue to
                        add more real-world examples in future updates.
                      </p>
                      <div className="flex gap-3 mt-2 text-gray-500 text-xs items-center">
                        <FaThumbsUp /> 12
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ReviewsRating;
