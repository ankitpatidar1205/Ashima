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

        {student.length > 0 ? (
          <div className="bg-white p-6 rounded shadow flex flex-col gap-6">
            {/* Basic Info */}
            <div className="flex flex-col items-center gap-2">
              <h3 className="font-semibold">{student[0].student_name}</h3>
            </div>

            <div className="w-full grid grid-cols-2 gap-4 text-sm">
              <p>
                <strong>Email Address:</strong>
                <br />
                {student[0].email}
              </p>
              <p>
                <strong>Mobile Number:</strong>
                <br />
                {student[0].mobile}
              </p>
            </div>

            {/* Enrolled Courses */}
            {student[0]?.courses?.length > 0 ? (
              <div className="mt-6">
                <h4 className="font-semibold mb-3">Enrolled Courses</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {student[0].courses.map((course, index) => (
                    <div
                      key={index}
                      className="border p-4 rounded shadow bg-gray-50"
                    >
                      <img
                        src={course.course_image}
                        alt={course.course_title}
                        className="w-full h-40 object-cover rounded mb-3"
                      />
                      <h5 className="font-semibold">{course.course_title}</h5>
                      <p className="text-sm text-gray-600 mb-1">
                        <strong>Type:</strong> {course.course_type}
                      </p>
                      <p className="text-sm text-gray-600 mb-1">
                        <strong>Price:</strong> {course.course_price}
                      </p>
                      <p className="text-sm text-gray-600 mb-1">
                        <strong>Category:</strong> {course.category_id}
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Status:</strong>{" "}
                        {course.status === "1" ? (
                          <span className="text-green-600">Active</span>
                        ) : (
                          <span className="text-red-600">Inactive</span>
                        )}
                      </p>

                      {/* FAQs */}
                      <div className="mt-4">
                        <h6 className="font-semibold mb-2">FAQs</h6>
                        {course.faqs && course.faqs.length > 0 ? (
                          <ul className="list-disc ps-4 text-sm text-gray-700">
                            {course.faqs.map((faq, i) => (
                              <li key={i} className="mb-1">
                                <strong>Q:</strong> {faq.question}
                                <br />
                                <strong>A:</strong> {faq.answer}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-gray-500 text-sm">No FAQs available.</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-gray-500 mt-6">No courses enrolled.</p>
            )}
          </div>
        ) : (
          <p className="text-gray-500 text-center mt-10">Student not found.</p>
        )}
      </div>
    </DashboardLayout>
  );
};

export default StudentDetails;
