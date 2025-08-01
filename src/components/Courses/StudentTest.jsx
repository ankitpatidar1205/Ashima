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

  useEffect(() => {
    const fetchTest = async () => {
      try {
        const res = await axiosInstance.get(`/course/?id=${id}`);
        const course = res.data.data;
        if (course.tests && course.tests.length > 0) {
          const test = course.tests[0];
          const parsedQuestions =
            typeof test.questions === "string"
              ? JSON.parse(test.questions)
              : test.questions;

          setQuestions(parsedQuestions);
        }
      } catch (err) {
        console.error("Error fetching test:", err);
        toast.error("Failed to load test!");
      }
    };
    fetchTest();
  }, [id]);

  const handleChange = (value) => {
    setAnswers({ ...answers, [currentQ]: value });
  };

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQ > 0) {
      setCurrentQ(currentQ - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post(`/course/submit-test`, {
        courseId: id,
        answers: answers,
      });
      setSubmitted(true);
      toast.success("✅ Test submitted successfully!");
    } catch (error) {
      console.error("Submit error:", error);
      toast.error("❌ Failed to submit test.");
    }
  };

  const allAnswered = Object.keys(answers).length === questions.length;

  return (
    <>
      <Header />
      <ToastContainer position="top-center" />

      {/* Back Arrow */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-28 left-4 text-white rounded-full p-2 shadow-lg"
        style={{
          backgroundColor: "rgb(4 118 112)",
          fontSize: "2.5rem",
          fontWeight: "bold",
          lineHeight: "1",
        }}
      >
        ←
      </button>

      <div className="p-6 bg-gradient-to-br from-green-50 to-blue-50 min-h-screen">
        <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
          Course Test
        </h2>

        {questions.length === 0 ? (
          <p className="text-gray-600 text-center">No test available for this course.</p>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto relative">
            <div className="p-6 bg-white shadow-2xl rounded-2xl border border-green-300">
              <h4 className="text-xl font-semibold text-green-800 mb-4">
                Question {currentQ + 1} of {questions.length}
              </h4>
              <p className="mb-6 text-gray-800 font-medium text-lg">
                {questions[currentQ].question}
              </p>

              {["option1", "option2", "option3", "option4"].map((opt, i) => {
                const label = ["A", "B", "C", "D"][i];
                return (
                  <label
                    key={opt}
                    className={`flex items-center gap-3 mb-3 cursor-pointer p-3 rounded-xl transition ${
                      answers[currentQ] === opt
                        ? "bg-green-100 border-l-4 border-green-600"
                        : "bg-gray-50 hover:bg-green-50"
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
                      {label}. {questions[currentQ][opt]}
                    </span>
                  </label>
                );
              })}

              {/* Show Correct/Incorrect AFTER SUBMIT */}
              {submitted && (
                <p
                  className={`mt-4 font-semibold text-lg ${
                    answers[currentQ] === questions[currentQ].correct_option
                      ? "text-green-700"
                      : "text-red-600"
                  }`}
                >
                  {answers[currentQ] === questions[currentQ].correct_option
                    ? "✅ Correct!"
                    : `❌ Wrong! Correct Answer: ${
                        ["A", "B", "C", "D"][
                          ["option1", "option2", "option3", "option4"].indexOf(
                            questions[currentQ].correct_option
                          )
                        ]
                      }`}
                </p>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-6">
                <button
                  type="button"
                  onClick={prevQuestion}
                  disabled={currentQ === 0}
                  className="bg-gray-300 text-gray-700 px-5 py-2 rounded-lg font-semibold disabled:opacity-50"
                >
                  Previous
                </button>

                {currentQ < questions.length - 1 ? (
                  <button
                    type="button"
                    onClick={nextQuestion}
                    className="bg-[rgb(4,118,112)] text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition font-semibold"
                  >
                    Next
                  </button>
                ) : (
                  !submitted && (
                    <button
                      type="submit"
                      disabled={!allAnswered}
                      className={`px-6 py-2 rounded-lg font-semibold transition ${
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
      <Footer />
    </>
  );
};

export default StudentTest;
