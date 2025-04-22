import { Link, useParams } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import { FaArrowLeft } from "react-icons/fa";

const DiscussionDetails = () => {
  const { id } = useParams();

  const allDiscussionData = [
    {
      id: "DSC-001",
      createdBy: "Sarah Johnson",
      email: "sarah.j@email.com",
      communityType: "General",
      totalComments: 24,
      createdDate: "Mar 15, 2024 14:30:00",
      status: "Active",
      topic: "Getting Started with EdTech",
      content:
        "This is a detailed discussion about getting started with educational technology. The content covers various aspects of implementing EdTech solutions in different learning environments.",
    },
  ];

  const discussionData = allDiscussionData.find((item) => item.id === id);

  if (!discussionData) {
    return (
      <DashboardLayout>
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-red-500">
            No Discussion Found for ID: {id}
          </h2>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Discussion Details</h2>
          <div className="flex gap-2">
            <button className="bg-red-500 text-white px-2 py-2 rounded">
              Block Discussion
            </button>
            <button className="bg-red-600 text-white px-2 py-2 rounded">
              Delete Discussion
            </button>
            <button className="bg-green-500 text-white px-2 py-2 rounded">
              Unblock Discussion
            </button>
            <Link
              to={"/community-discussion"}
              className="d-flex p-2 rounded align-items-center font-semibold
                                   text-white bg-teal-700"
            >
              <FaArrowLeft className="me-1" /> Back
            </Link>
          </div>
        </div>

        <div className="bg-white p-4 rounded mb-4 grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-500 text-sm">Discussion ID</p>
            <h4 className="font-semibold">#{discussionData.id}</h4>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Community Type</p>
            <h4 className="font-semibold">{discussionData.communityType}</h4>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Created By</p>
            <h4 className="font-semibold">{discussionData.createdBy}</h4>
            <p className="text-sm">{discussionData.email}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Created Date</p>
            <h4 className="font-semibold">{discussionData.createdDate}</h4>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Total Comments</p>
            <h4 className="font-semibold">{discussionData.totalComments}</h4>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Status</p>
            <h4 className="font-semibold text-green-600">
              {discussionData.status}
            </h4>
          </div>
        </div>

        <div className="bg-white p-4 rounded mb-4">
          <h4 className="font-semibold mb-2">{discussionData.topic}</h4>
          <p>{discussionData.content}</p>
        </div>

        <div className="bg-white p-4 rounded mb-4">
          <h4 className="font-semibold mb-2">Admin Notes</h4>
          <textarea
            className="border w-full p-2 rounded"
            placeholder="Add administrative notes here..."
          ></textarea>
        </div>

        <div className="bg-white p-4 rounded ">
          <h4 className="font-semibold mb-2">
            Comments ({discussionData.totalComments})
          </h4>

          <div className="border-b pb-2 mb-2">
            <h4 className="font-semibold">Michael Chen</h4>
            <p className="text-sm text-gray-500">Mar 16, 2024 09:15</p>
            <p className="mt-1">
              Great discussion! This helps clarify many aspects of EdTech
              implementation.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DiscussionDetails;
