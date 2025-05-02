import React, { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import { useDispatch, useSelector } from "react-redux";
import { getStudents } from "../../Redux/slices/StudentSlice/StudentSlice";

const StudentDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const { Student } = useSelector((state) => state.Student);

  useEffect(() => {
    dispatch(getStudents());
  }, [dispatch]);

  // Find student by id
  const student = Student.filter((item) => item.id == id);
    // console.log(student)
  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold">Student Details</h3>
          <button
            className="flex p-2 rounded items-center font-semibold text-white bg-teal-700"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft className="me-1" /> Back
          </button>
        </div>

        {student ? (
  <div className="bg-white p-6 rounded shadow flex gap-6">
    <div className="flex flex-col items-center gap-2">
     
      <h3 className="font-semibold">{student[0].name}</h3>
      <span
        className={`text-xs px-2 py-1 rounded ${
          student.is_active === 1
            ? "bg-green-100 text-green-600"
            : "bg-red-100 text-red-600"
        }`}
      >
        {student.is_active === 1 ? "Active" : "Inactive"}
      </span>
    </div>

    <div className="w-full grid grid-cols-2 gap-4 text-sm">
      <p>
        <strong>Email Address</strong>
        <br />
        {student[0].email}
      </p>
      <p>
        <strong>Mobile Number</strong>
        <br />
        {student[0].mobile}
      </p>
     
      {/* You can add placeholders for enrolled_courses, certificates, recent_activity etc. if needed */}
    </div>
  </div>
) : (
  <p className="text-gray-500 text-center mt-10">Student not found.</p>
)}

      </div>
    </DashboardLayout>
  );
};

export default StudentDetails;
