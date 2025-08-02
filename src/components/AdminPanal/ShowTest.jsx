import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";

const ShowTest = ({ id }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTests = async () => {
      try {
        setLoading(true);

        if (!id) {
          setQuestions([]);
          return;
        }

        const res = await axiosInstance.get(`/course?id=${id}`);
        console.log("API Response:", res.data.data.tests);

        if (res.data.success && res.data.data.tests.length > 0) {
          setQuestions(res.data.data.tests || []);
        } else {
          setQuestions([]);
        }
      } catch (err) {
        console.error("Error fetching test data:", err);
        setQuestions([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTests();
  }, [id]);

  const handleDelete = async (qId) => {
    try {
      await axiosInstance.delete(`/deletetestquestion/${qId}`);
      setQuestions((prev) => prev.filter((q) => q.id !== qId));
    } catch (err) {
      console.error("Error deleting question:", err);
      alert("❌ Failed to delete the question. Try again.");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-lg">
      {loading ? (
        <p className="text-gray-600 text-center">⏳ Loading test questions...</p>
      ) : questions.length > 0 ? (
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Manage Test Questions
          </h2>

          {questions.map((q, index) => (
            <div
              key={q.id}
              className="mb-6 p-4 border rounded-lg bg-gray-50 shadow-sm relative"
            >
              <p className="font-semibold text-lg">
                Q{index + 1}: {q.question}
              </p>

              <div className="mt-3 space-y-2">
                {["option1", "option2", "option3", "option4"].map((optKey) => (
                  <p
                    key={optKey}
                    className={`p-2 rounded ${
                      q.correct_option === optKey
                        ? "bg-green-100 text-green-700 font-semibold"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {q[optKey]}
                    {q.correct_option === optKey && " ✅ (Correct Answer)"}
                  </p>
                ))}
              </div>

              {/* Delete Button */}
              <button
                onClick={() => handleDelete(q.id)}
                className="absolute top-3 right-3 px-3 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-center">
          ⚠️ No test available for this course.
        </p>
      )}
    </div>
  );
};

export default ShowTest;
