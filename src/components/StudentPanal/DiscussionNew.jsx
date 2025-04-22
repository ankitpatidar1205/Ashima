import React, { useState } from "react";
import { FaHeart, FaComment, FaShare, FaRegBookmark } from "react-icons/fa";
import DashboardLayout from "../../Layout/DashboardLayout";
import { useNavigate } from "react-router-dom";

const Dis_New = () => {
  const [activeTab, setActiveTab] = useState("New");
  const navigate = useNavigate();

  const tabs = ["Trending", "New", "Unanswered", "Most Liked"];

  const posts = [
    {
      title: "Getting Started with Next.js 14",
      tag: "Next.js",
      tagColor: "blue",
      author: "David Kim",
      time: "15 minutes ago",
      content:
        "An introduction to the new features in Next.js 14, including the Server Actions and Partial Prerendering...",
      likes: 8,
      comments: 3,
    },
    {
      title: "Tailwind CSS v4 Preview",
      tag: "CSS",
      tagColor: "green",
      author: "Lisa Chen",
      time: "45 minutes ago",
      content:
        "Exploring the upcoming features in Tailwind CSS v4 and how they will change the way we style our applications.",
      likes: 12,
      comments: 7,
    },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // Navigate to the corresponding route based on the tab
    switch (tab) {
      case "Trending":
        navigate("/descussiontrending");
        break;
      case "New":
        navigate("/descussionnew");
        break;
      case "Unanswered":
        navigate("/descussionunanswered");
        break;
      case "Most Liked":
        navigate("/descussionmostlike");
        break;
      default:
        navigate("/descussiontrending");
        break;
    }
  };

  return (
    <DashboardLayout>
      <div className="bg-gray-100 min-h-screen w-full py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 w-full px-2 md:px-6">
          {/* Left Section */}
          <div className="space-y-6">
            {/* Tabs */}
            <div className="flex flex-wrap gap-4 mb-4 border-b border-gray-300 pb-3">
              {tabs.map((tab) => (
                <button
                  key={tab}
                 onClick={() => handleTabClick(tab)}
                  className={`text-sm font-medium ${
                    activeTab === tab
                      ? "border border-gray-300 bg-gray-200 text-gray-900 px-4 py-1 rounded"
                      : "text-gray-500"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Posts */}
            <div className="space-y-4">
              {posts.map((post, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-md border border-gray-200 shadow-sm"
                >
                  <div className="flex justify-between mb-2 flex-wrap gap-2">
                    <div>
                      <h2 className="text-sm font-semibold text-gray-900">
                        {post.title}
                        <span
                          className={`ml-2 text-xs px-2 py-0.5 rounded bg-${post.tagColor}-100 text-${post.tagColor}-700`}
                        >
                          {post.tag}
                        </span>
                      </h2>
                      <p className="text-xs text-gray-500 mt-1">
                        Posted by {post.author} <span className="mx-1">•</span>{" "}
                        {post.time}
                      </p>
                    </div>
                    <FaRegBookmark className="text-gray-400 w-4 h-4 cursor-pointer" />
                  </div>

                  <p className="text-sm text-gray-700 mb-4">{post.content}</p>

                  <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm">
                    <span className="flex items-center gap-1">
                      <FaHeart /> {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaComment /> {post.comments}
                    </span>
                    <span className="flex items-center gap-1 cursor-pointer">
                      <FaShare /> Share
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Active Members */}
            <div className="bg-white p-5 rounded-md border border-gray-200 shadow-sm">
              <h3 className="font-semibold text-sm mb-4 text-gray-900">
                Active Members
              </h3>

              {[
                { name: "Alex Thompson", role: "Full Stack Developer" },
                { name: "Emily Chen", role: "UI/UX Designer" },
              ].map((member, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center mb-4 last:mb-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-300" />
                    <div>
                      <p className="font-medium text-sm text-gray-800">
                        {member.name}
                      </p>
                      <p className="text-xs text-gray-500">{member.role}</p>
                    </div>
                  </div>
                  <button className="border border-gray-400 text-sm px-4 py-1 rounded hover:bg-gray-100">
                    Follow
                  </button>
                </div>
              ))}
            </div>

            {/* Upcoming Events */}
            <div className="bg-white p-5 rounded-md border border-gray-200 shadow-sm">
              <h3 className="font-semibold text-sm mb-4 text-gray-900">
                Upcoming Events
              </h3>

              {[
                {
                  name: "React Summit 2024",
                  date: "March 15, 2024 · Virtual",
                  tag: "Free",
                  tagColor: "green",
                },
                {
                  name: "TypeScript Workshop",
                  date: "March 20, 2024 · Online",
                  tag: "Premium",
                  tagColor: "blue",
                },
              ].map((event, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 p-3 rounded-md mb-3 last:mb-0"
                >
                  <h4 className="text-sm font-medium text-gray-900">
                    {event.name}
                  </h4>
                  <p className="text-xs text-gray-500 mb-1">{event.date}</p>
                  <span
                    className={`text-xs px-2 py-0.5 rounded bg-${event.tagColor}-100 text-${event.tagColor}-700`}
                  >
                    {event.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dis_New;
