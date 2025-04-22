import { useNavigate, useParams } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import { FaArrowLeft } from "react-icons/fa";

const AssessmentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const allAssessmentData = [
    {
      id: "ASM001",
      student: "John Doe",
      email: "john.doe@example.com",
      mobile: "+1 234 567 8900",
      course: "Web Development Basics",
      attemptedOn: "2024-01-20 14:30",
      score: "85/100",
      status: "Passed",
      question: "What is HTML?",
      correct: "HyperText Markup Language",
      selected: "HyperText Markup Language",
    },
    {
      id: "ASM002",
      student: "Amit Sharma",
      email: "amit.sharma@example.com",
      mobile: "+91 9876543210",
      course: "React Mastery",
      attemptedOn: "2024-02-10 12:15",
      score: "78/100",
      status: "Passed",
      question: "What is React?",
      correct: "JavaScript Library",
      selected: "JavaScript Library",
    },
    {
      id: "ASM003",
      student: "Priya Verma",
      email: "priya.verma@example.com",
      mobile: "+91 8765432109",
      course: "Python Essentials",
      attemptedOn: "2024-03-05 16:00",
      score: "65/100",
      status: "Passed",
      question: "What is Python?",
      correct: "Programming Language",
      selected: "Programming Language",
    },
  ];

  const assessmentData = allAssessmentData.find((item) => item.id === id);

  if (!assessmentData) {
    return (
      <DashboardLayout>
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-red-500">
            No Assessment Found for ID: {id}
          </h2>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Assessment Details</h2>
          <button
            className="d-flex p-2 rounded align-items-center font-semibold
                                 text-white bg-teal-700"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft className="me-1" /> Back
          </button>
        </div>

        <div className="bg-white p-4 rounded shadow mb-4 grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-500 text-sm">Assessment ID</p>
            <h4 className="font-semibold">{assessmentData.id}</h4>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Course Name</p>
            <h4 className="font-semibold">{assessmentData.course}</h4>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Student Name</p>
            <h4 className="font-semibold">{assessmentData.student}</h4>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Email</p>
            <h4 className="font-semibold">{assessmentData.email}</h4>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Mobile</p>
            <h4 className="font-semibold">{assessmentData.mobile}</h4>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Attempted On</p>
            <h4 className="font-semibold">{assessmentData.attemptedOn}</h4>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Total Score</p>
            <h4 className="font-semibold">{assessmentData.score}</h4>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Status</p>
            <h4 className="font-semibold text-green-600">
              {assessmentData.status}
            </h4>
          </div>
        </div>

        <div className="bg-white p-4 rounded shadow mb-4">
          <h4 className="font-semibold mb-2">Questions & Answers</h4>
          <p className="font-semibold mb-1">1. {assessmentData.question}</p>
          <ul className="mb-2">
            <li>A. {assessmentData.correct}</li>
            <li>B. High Text Markup Language</li>
          </ul>
          <p>Correct Answer: A</p>
          <p>Selected Answer: A</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h4 className="font-semibold mb-2">Admin Notes</h4>
          <textarea
            className="border w-full p-2 rounded"
            placeholder="Add notes about this assessment..."
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button className="bg-teal-700 text-white px-4 py-2 rounded mt-3">
            Delete Assessment
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AssessmentDetails;
