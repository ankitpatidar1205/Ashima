import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";

const StudentTest = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [loading, setLoading] = useState(true);

  // ✅ Get student ID from local storage
  let studentId = null;
  try {
    studentId = localStorage.getItem("is_id");
  } catch {
    studentId = null;
  }

  useEffect(() => {
    const fetchTest = async () => {
      try {
        setLoading(true);
        const res = await axiosInstance.get(`/course/?id=${id}`);
        const tests = res?.data?.data?.tests;
        if (Array.isArray(tests) && tests.length > 0) {
          setQuestions(tests);
        } else {
          setQuestions([]);
        }
      } catch (err) {
        console.error("Error fetching test:", err);
        toast.error("⚠️ Failed to load test. Please try again later.");
        setQuestions([]);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchTest();
  }, [id]);

  const handleChange = (value) => {
    setAnswers((prev) => ({ ...prev, [currentQ]: value }));
  };

  const nextQuestion = () => {
    setCurrentQ((prev) => (prev < questions.length - 1 ? prev + 1 : prev));
  };

  const prevQuestion = () => {
    setCurrentQ((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!studentId) {
      toast.error("⚠️ Student ID missing. Please log in again.");
      return;
    }

    // ✅ Format answers into required structure
    const testPayload = questions.map((q, index) => ({
      question_id: q.id,
      answer: answers[index] || null,
    }));

    try {
      await axiosInstance.post(`/submittest`, {
        course_id: id,
        student_id: studentId,
        test: testPayload,
      });

      setSubmitted(true);
      toast.success("✅ Test submitted successfully!");

      // Optional: redirect to a "Test Result" or "Dashboard" page
      setTimeout(() => navigate("/student-dashboard"), 2000);
    } catch (error) {
      console.error("Submit error:", error);
      toast.error("⚠️ Unable to submit test. Please try again.");
    }
  };

  const allAnswered =
    questions.length > 0 && Object.keys(answers).length === questions.length;

  return (
    <>
      <Header />
      <ToastContainer position="top-center" />

      <div className="bg-gradient-to-br from-green-50 to-blue-50 min-h-screen flex justify-center items-start py-24">
        <div className="w-full max-w-5xl bg-white shadow-2xl rounded-2xl p-10 relative min-h-[80vh]">
          <button
            onClick={() => navigate(-1)}
            className="absolute -top-5 -left-20 text-white rounded-full p-1 mt-4  shadow-lg"
            style={{
              backgroundColor: "rgb(4 118 112)",
              fontSize: "2rem",
              fontWeight: "bold",
              lineHeight: "1",
            }}
          >
            ←
          </button>

          <h2 className="text-3xl font-bold text-green-700 mb-10 text-center">
            Course Test
          </h2>

          {loading ? (
            <p className="text-gray-600 text-center">⏳ Loading test...</p>
          ) : questions.length === 0 ? (
            <p className="text-gray-600 text-center">
              ⚠️ No test available for this course.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="h-full">
              <div className="p-6 bg-gray-50 rounded-lg border border-green-200 shadow-sm min-h-[60vh] flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-semibold text-green-800 mb-4">
                    Question {currentQ + 1} of {questions.length}
                  </h4>
                  <p className="mb-6 text-gray-800 font-medium text-lg">
                    {questions[currentQ]?.question ||
                      "⚠️ Question not available"}
                  </p>

                  {["option1", "option2", "option3", "option4"].map(
                    (opt, i) => {
                      const label = ["A", "B", "C", "D"][i];
                      return (
                        <label
                          key={opt}
                          className={`flex items-center gap-3 mb-3 cursor-pointer p-3 rounded-xl transition ${
                            answers[currentQ] === opt
                              ? "bg-green-100 border-l-4 border-green-600"
                              : "bg-white hover:bg-green-50"
                          }`}
                        >
                          <input
                            type="radio"
                            name={`question-${currentQ}`}
                            value={opt}
                            checked={answers[currentQ] === opt}
                            onChange={() => handleChange(opt)}
                            disabled={submitted}
                            className="accent-green-600 scale-125"
                          />
                          <span className="text-gray-700 font-medium">
                            {label}. {questions[currentQ]?.[opt] || "N/A"}
                          </span>
                        </label>
                      );
                    }
                  )}
                </div>

                <div className="flex justify-between items-center mt-8">
                  <button
                    type="button"
                    onClick={prevQuestion}
                    disabled={currentQ === 0}
                    className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold disabled:opacity-50"
                  >
                    Previous
                  </button>

                  {currentQ < questions.length - 1 ? (
                    <button
                      type="button"
                      onClick={nextQuestion}
                      className="bg-[rgb(4,118,112)] text-white px-8 py-2 rounded-lg hover:bg-teal-700 transition font-semibold"
                    >
                      Next
                    </button>
                  ) : (
                    !submitted && (
                      <button
                        type="submit"
                        disabled={!allAnswered}
                        className={`px-8 py-2 rounded-lg font-semibold transition ${
                          allAnswered
                            ? "bg-blue-600 text-white hover:bg-blue-700"
                            : "bg-gray-400 text-gray-200 cursor-not-allowed"
                        }`}
                      >
                        Submit Test
                      </button>
                    )
                  )}
                </div>
              </div>
            </form>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default StudentTest;
