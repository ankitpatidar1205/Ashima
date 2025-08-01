import React, { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";

const ShowTest = ({ id }) => {
  const [course, setCourse] = useState(null);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        if (id) {
          const res = await axiosInstance.get(`/course?id=${id}`);
          if (res.data.success) {
            const courseData = res.data.data;
            setCourse(courseData);

            if (courseData.tests?.length > 0) {
              const parsedQuestions = JSON.parse(courseData.tests[0].questions);
              setQuestions(parsedQuestions);
            }
          }
        }
      } catch (err) {
        console.error("Error fetching test data:", err);
      }
    };

    fetchCourse();
  }, [id]);

  // delete single question
  const handleDeleteQuestion = async (indexToDelete) => {
    if (!window.confirm("Are you sure you want to delete this question?")) return;

    try {
      // filter out the deleted question
      const updatedQuestions = questions.filter((_, index) => index !== indexToDelete);

      // update DB with new question list
      await axiosInstance.put(`/test/${course.tests[0].id}`, {
        questions: JSON.stringify(updatedQuestions),
      });

      setQuestions(updatedQuestions);
      alert("Question deleted successfully!");
    } catch (error) {
      console.error("Error deleting question:", error);
      alert("Failed to delete question");
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-md rounded-lg">
      {course ? (
        <>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {course.course_title} - Test
          </h2>
          {questions.length > 0 ? (
            <div>
              {questions.map((q, index) => (
                <div
                  key={index}
                  className="mb-6 p-4 border rounded-lg bg-gray-50 shadow-sm relative"
                >
                  <p className="font-semibold text-lg">
                    Q{index + 1}: {q.question}
                  </p>
                  <ul className="list-disc ml-6 mt-2">
                    <li>Option 1: {q.option1}</li>
                    <li>Option 2: {q.option2}</li>
                    <li>Option 3: {q.option3}</li>
                    <li>Option 4: {q.option4}</li>
                  </ul>
                  <p className="mt-2 text-green-600 font-medium">
                    ✅ Correct Answer: {q[q.correct_option]}
                  </p>

                  <button
                    onClick={() => handleDeleteQuestion(index)}
                    className="absolute top-4 right-4 px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No test available for this course.</p>
          )}
        </>
      ) : (
        <p className="text-gray-600">Loading course test...</p>
      )}
    </div>
  );
};

export default ShowTest;
