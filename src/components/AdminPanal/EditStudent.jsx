import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../../utils/axiosInstance";
import { updateStudent } from "../../Redux/slices/StudentSlice/StudentSlice";
import { fetchCourses } from "../../Redux/slices/CourseSlice/CourseSlice";

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [studentData, setStudentData] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [selectedCourses, setSelectedCourses] = useState([]);
  const { courses } = useSelector((state) => state.courses);

  const courseOptions = courses?.map((course) => ({
    value: course.id,
    label: course.course_title,
  }));

  // Fetch available courses
  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  // Fetch student data by ID
  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await axiosInstance.get(`/student?id=${id}`);
        setStudentData(response.data.data[0]);
      } catch (error) {
        console.error("Error fetching student", error);
      }
    };

    fetchStudent();
  }, [id]);

  // Set form values from API data
  useEffect(() => {
    if (studentData) {
      console.log("Student Courses: ", studentData.courses); // ✅ check what you get
      setName(studentData.student_name);
      setEmail(studentData.email);
      setMobile(studentData.mobile);

      // Set selected courses from studentData
      const mappedCourses = studentData?.courses
        ?.filter((course) => course.course_id) // only if course_id exists
        .map((course) => ({
          label: course.course_title,
          value: course.course_id,
        }));

      setSelectedCourses(mappedCourses || []);
    }
  }, [studentData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedStudent = {
      id: studentData.id,
      student_name: name,
      email,
      mobile,
      course_id: JSON.stringify(selectedCourses.map((course) => course.value)),
    };
    console.log("Submitting: ", updatedStudent);
    await dispatch(updateStudent(updatedStudent));
    navigate("/manage-student");
  };
  

  const handleCancel = () => {
    navigate("/manage-student");
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-lg rounded p-6 relative">
        <button onClick={handleCancel} className="absolute right-4 top-4 text-xl text-black">
          ×
        </button>

        <h2 className="text-xl font-semibold mb-4">Edit Student</h2>

        {studentData ? (
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Full Name</label>
                <input type="text" className="w-full border px-3 py-2 rounded"
                  value={name}  onChange={(e) => setName(e.target.value)} />
              </div>

              <div>
                <label className="block mb-1 font-medium">Email Address</label>
                <input
                  type="email"
                  className="w-full border px-3 py-2 rounded"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Mobile Number</label>
                <input  type="text"
                  className="w-full border px-3 py-2 rounded"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}/>
              </div>

              <div>
                <label className="block mb-1 font-medium">Select Courses</label>
                <Select
                  isMulti
                  name="courses"
                  options={courseOptions}
                  value={selectedCourses}
                  onChange={setSelectedCourses}
                  className="w-full"
                />
              </div>

              <div className="flex justify-end gap-2 mt-4">
                <button type="button" onClick={handleCancel} className="border px-4 py-2 rounded">
                  Cancel
                </button>
                <button className="bg-[#047670] text-white px-4 py-2 rounded" type="submit">
                  Save Changes
                </button>
              </div>
            </div>
          </form>
        ) : (
          <p>Loading student data...</p>
        )}
      </div>
    </div>
  );
};

export default EditStudent;
