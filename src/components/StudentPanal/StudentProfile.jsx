import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import axiosInstance from "../../utils/axiosInstance";
import { FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../../Redux/slices/CourseSlice/CourseSlice";
import Select from "react-select";

const StudentProfile = () => {
  const dispatch = useDispatch();
  const { courses } = useSelector((state) => state.courses);

  const [studentId, setStudentId] = useState("");
  const [studentData, setStudentData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    student_name: "",
    email: "",
    mobile: "",
  });
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const s_id = localStorage.getItem("is_id");
    if (s_id) setStudentId(s_id);
  }, []);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const fetchStudentData = async () => {
    try {
      const response = await axiosInstance.get(`/student?id=${studentId}`);
      const student = response.data.data[0];
      setStudentData(student);
      setSelectedCourses(
        student.courses.map((c) => ({
          value: c.course_id,
          label: c.course_title,
        }))
      );
    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  };

  useEffect(() => {
    if (studentId) fetchStudentData();
  }, [studentId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditClick = () => {
    setFormData({
      student_name: studentData.student_name,
      email: studentData.email,
      mobile: studentData.mobile,
    });
    setIsEditing(true);
  };

  const handleUpdateProfile = async () => {
    try {
      const updatedData = {
        ...formData,
        course_id: JSON.stringify(selectedCourses.map((course) => course.value)),
      };

      await axiosInstance.put(`/editstudent/${studentId}`, updatedData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      fetchStudentData();
      setIsEditing(false);
      setMessage("Profile updated successfully!");
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      console.error("Error updating profile:", error);
      setMessage("Failed to update profile!");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  const courseOptions = courses.map((course) => ({
    value: course.id,
    label: course.course_title,
  }));

  return (
    <DashboardLayout>
      <div className="bg-gray-50 font-sans min-h-screen flex">
        <div className="flex-1">
          <main className="p-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900">Student Profile</h1>
              <button
                onClick={handleEditClick}
                className="rounded-lg bg-[#047670] text-white px-4 py-2 flex items-center space-x-2 hover:bg-teal-800"
              >
                <FaEdit />
                <span>Edit Profile</span>
              </button>
            </div>

            {message && (
              <div className="mb-6 p-3 rounded text-white bg-green-600">{message}</div>
            )}

            {studentData ? (
              <div className="bg-white rounded-lg shadow p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="col-span-1 flex flex-col items-center">
                  <h2 className="text-xl font-bold text-gray-900">Name: {studentData.student_name}</h2>
                </div>

                <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-teal-700 mb-2">Contact Information</h3>
                    <p className="mb-2 text-gray-800">Email: {studentData.email}</p>
                    <p className="text-gray-800">Mobile: {studentData.mobile}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-teal-700 mb-2">Enrolled Courses</h3>
                    <ul className="list-disc ml-5 text-gray-800">
                      {studentData.courses.map((course) => (
                        <li key={course.course_id}>{course.course_title}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-center text-gray-600 mt-10">Loading profile details...</p>
            )}

            {/* Edit Form Modal */}
            {isEditing && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-8 w-full max-w-lg shadow-lg">
                  <h2 className="text-xl font-bold mb-6 text-gray-900">Edit Profile</h2>

                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-600">Full Name</label>
                      <input
                        type="text"
                        name="student_name"
                        value={formData.student_name}
                        onChange={handleChange}
                        className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-600">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-600">Mobile</label>
                      <input
                        type="text"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-600">Enrolled Courses</label>
                      <Select
                        isMulti
                        name="courses"
                        options={courseOptions}
                        value={selectedCourses}
                        onChange={setSelectedCourses}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end space-x-3 mt-6">
                    <button
                      onClick={() => setIsEditing(false)}
                      className="px-4 py-2 rounded bg-gray-300 text-gray-800"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleUpdateProfile}
                      className="px-4 py-2 rounded bg-[#047670] text-white hover:bg-teal-800"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudentProfile;
