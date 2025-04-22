import { Link, useParams } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";

const RefundDetails = () => {
  const { id } = useParams();

  const refundData = [
    {
      id: "RF001",
      student: "John Smith",
      email: "john.smith@example.com",
      mobile: "+1 234 567 8900",
      course: "Advanced Web Development",
      instructor: "David Wilson",
      payment: "$199.00",
      refund: "$199.00",
      method: "Credit Card",
      paymentDate: "2024-01-10",
      refundDate: "2024-01-15",
      status: "Pending",
      reason:
        "The course content was not as described in the course outline. The advanced topics mentioned in the curriculum were not covered in detail, and the practical examples were too basic for an advanced course.",
    },
  ];

  const data = refundData.find((item) => item.id === id);

  if (!data) {
    return (
      <DashboardLayout>
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-red-500">
            No Refund Found for ID: {id}
          </h2>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Refund Request Details</h2>
          <Link
            to={"/RefundProcess"}
            className="border text-white bg-teal-700 px-4 py-2 rounded-lg text-sm"
          >
            ← Back
          </Link>
        </div>

        <div className="bg-white p-4 rounded-lg mb-4 grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-500 text-sm">Request ID</p>
            <h4 className="font-semibold">#{data.id}</h4>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Status</p>
            <h4 className="font-semibold text-yellow-600">{data.status}</h4>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Student Name</p>
            <h4 className="font-semibold">{data.student}</h4>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Email</p>
            <h4 className="font-semibold">{data.email}</h4>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Mobile</p>
            <h4 className="font-semibold">{data.mobile}</h4>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Course Name</p>
            <h4 className="font-semibold">{data.course}</h4>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Instructor Name</p>
            <h4 className="font-semibold">{data.instructor}</h4>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Payment Amount</p>
            <h4 className="font-semibold">{data.payment}</h4>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Refund Amount</p>
            <h4 className="font-semibold">{data.refund}</h4>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Payment Method</p>
            <h4 className="font-semibold">{data.method}</h4>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Payment Date</p>
            <h4 className="font-semibold">{data.paymentDate}</h4>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Refund Requested Date</p>
            <h4 className="font-semibold">{data.refundDate}</h4>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg mb-4">
          <h4 className="font-semibold mb-2">Refund Reason</h4>
          <p>{data.reason}</p>
        </div>

        <div className="bg-white p-4 rounded-lg mb-4">
          <h4 className="font-semibold mb-2">Admin Notes</h4>
          <textarea
            className="border w-full p-2 rounded"
            placeholder="Add your comments here..."
          ></textarea>
        </div>

        <div className="flex gap-4">
          <button className="bg-red-500 text-white px-4 py-2 rounded">
            Reject Refund
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Approve Refund
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default RefundDetails;
