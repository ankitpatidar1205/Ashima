import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosinstance from "../../utils/axiosInstance";
import ShowTest from "./ShowTest";
import { FaArrowLeft } from "react-icons/fa";
const Test = () => {
  const { id } = useParams();
  const [questions, setQuestions] = useState([
    { question: "", option1: "", option2: "", option3: "", option4: "", correct_option: "" },
  ]);

  const handleChange = (index, field, value) => {
    const newQuestions = [...questions];
    newQuestions[index][field] = value;
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", option1: "", option2: "", option3: "", option4: "", correct_option: "" },
    ]);
  };

  const deleteQuestion = (index) => {
    const newQuestions = questions.filter((_, i) => i !== index);
    setQuestions(newQuestions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      course_id: id,
      created_by: "admin1",
      questions: questions,
    };

    try {
      const res = await axiosinstance.post( `/test`, payload);
      toast.success("Test created successfully!");
      console.log("Response:", res.data);
    } catch (error) {
      toast.error("Failed to create test!");
      console.error(error);
    }
  };

  const optionLabels = {
    option1: "A",
    option2: "B",
    option3: "C",
    option4: "D",
  };

  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-50 min-h-screen">
        <ToastContainer position="top-center" />
       <div className="flex justify-between items-center mb-4">
  <h4 className="text-2xl font-bold">Create Test</h4>
  
  <button  className="flex items-center gap-2 px-4 py-2 rounded font-semibold text-white bg-teal-700 hover:bg-teal-800"
    onClick={() => Navigate(-1)} >
    <FaArrowLeft className="text-lg" /> Back to Courses </button></div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {questions.map((q, index) => (
            <div key={index} className="p-4 bg-white shadow rounded-lg relative">
              <h4 className="text-lg font-semibold mb-3">Question {index + 1}</h4>
              <input type="text"  placeholder="Enter question"  value={q.question}
                onChange={(e) => handleChange(index, "question", e.target.value)}  className="w-full border rounded p-2 mb-3"   required />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {Object.entries(optionLabels).map(([key, label]) => (
                  <div key={key}>
                    <label className="font-medium">{label}.</label>
                    <input  type="text"  placeholder={`Option ${label}`}  value={q[key]}  onChange={(e) => handleChange(index, key, e.target.value)}
                    className="w-full border rounded p-2 mt-1"  required   />
                  </div>
                ))}
              </div>

              <select  value={q.correct_option}
                onChange={(e) => handleChange(index, "correct_option", e.target.value)} className="w-full border rounded p-2 mt-3"  required >
                <option value="">Select Correct Answer</option>
                {Object.entries(optionLabels).map(([key, label]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                ))}
              </select>

              {/* Delete Button */}
              {questions.length > 1 && (
                <button  type="button"  onClick={() => deleteQuestion(index)}
                  className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700">
                  ❌ Delete </button> )}
            </div>
          ))}

          <div className="flex gap-3 mt-4">
            <button
              type="button"
              onClick={addQuestion}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
            >
              ➕ Add Another Question
            </button>

            <button
              type="submit"
              className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800"
            >
              Submit Test
            </button>
          </div>
        </form>
      </div>
      <ShowTest id={id}/>
    </DashboardLayout>
  );
};

export default Test;
