import { useEffect, useState } from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import axiosInstance from "../../utils/axiosInstance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const TestResults = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // ✅ Get student ID from local storage
  let studentId = null;
  try {
    studentId = localStorage.getItem("is_id");
  } catch {
    studentId = null;
  }

  useEffect(() => {
    const fetchResults = async () => {
      if (!studentId) {
        toast.error("⚠️ Student ID not found. Please log in again.");
        setLoading(false);
        return;
      }
      try {
        const res = await axiosInstance.get(`/studentrecord/${studentId}`);
        console.log("Results API Response:", res.data);
        if (res?.data?.success && Array.isArray(res.data.data)) {
          setResults(res.data.data);
        } else {
          setResults([]);
        }
      } catch (error) {
        console.error("Error fetching results:", error);
        toast.error("⚠️ Failed to fetch test results.");
        setResults([]);
      } finally {
        setLoading(false);
      }
    };
    fetchResults();
  }, [studentId]);

  return (
    <DashboardLayout>
      <ToastContainer position="top-center" />

      <div className="bg-gray-50 min-h-screen p-8">
        {/* Page Heading */}
        <h2 className="text-3xl font-bold text-green-700 mb-8">
          Test Results
        </h2>

        {loading ? (
          <p className="text-gray-600 text-center">⏳ Loading results...</p>
        ) : results.length === 0 ? (
          <p className="text-gray-600 text-center">
            ⚠️ No results found for this student.
          </p>
        ) : (
          <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <table className="w-full text-left border-collapse">
              <thead className="bg-green-100">
                <tr>
                  <th className="p-4 border-b">Course</th>
                  <th className="p-4 border-b">Total Attempts</th>
                  <th className="p-4 border-b">Correct Answers</th>
                  <th className="p-4 border-b">Incorrect Answers</th>
                  <th className="p-4 border-b">Accuracy (%)</th>
                  <th className="p-4 border-b text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {results.map((r, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition"
                  >
                    <td className="p-4 border-b">{r.course_name}</td>
                    <td className="p-4 border-b">{r.total_attempts}</td>
                    <td className="p-4 border-b text-green-600 font-bold">
                      {r.correct_answers}
                    </td>
                    <td className="p-4 border-b text-red-600 font-bold">
                      {r.incorrect_answers}
                    </td>
                    <td className="p-4 border-b font-semibold">
                      {r.accuracy_percent}%
                    </td>
                    <td className="p-4 border-b text-center">
                      {/* <button
                        onClick={() => navigate(`/Course-Detail/${r.course_id}`)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
                      >
                        Retake Test
                      </button> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default TestResults;
