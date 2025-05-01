import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { createStudent, getStudents } from "../../Redux/slices/StudentSlice/StudentSlice";
import { fetchCourses } from "../../Redux/slices/CourseSlice/CourseSlice";

const AddStudentModal = ({ isOpen, onClose }) => {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile_number, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [active, setIsActive] = useState("inactive");
  const [passwordError, setPasswordError] = useState("");
  const [isadmin, setIsAdmin] = useState("");
  const dispatch = useDispatch();
  const { courses } = useSelector((state) => state.courses);
  console.log(courses)
// Map courses to Select-compatible format
const courseOptions = courses?.map((course) => ({
  value: course.id,
  label: course.title,
}));
  useEffect(()=>{
   fetchCourses()
  },[])
  useEffect(() => {
    const admin_id = localStorage.getItem("is_role_id");
    if (admin_id) {
      setIsAdmin(admin_id);
    }
  }, []);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    } else {
      setPasswordError("");
    }

    const formData = {
      admin_id: isadmin,
      full_name,
      email,
      mobile_number,
      password,
      course_id: selectedCourses.map((course) => course.value),
     
    };

    dispatch(createStudent(formData));
    dispatch(getStudents())
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-lg rounded p-6 relative">
        <button onClick={onClose} className="absolute right-4 top-4 text-xl text-black">
          ×
        </button>

        <h2 className="text-xl font-semibold mb-4">Add New Student</h2>
<form onSubmit={handleSubmit}>
  <div className="space-y-4">
    {/* Full Name */}
    <div>
      <label className="block mb-1 font-medium">Full Name</label>
      <input type="text" placeholder="Enter full name"
        className="w-full border px-3 py-2 rounded"
        value={full_name}
        onChange={(e) => setFullName(e.target.value)} />
    </div>

    {/* Email */}
    <div>
      <label className="block mb-1 font-medium">Email Address</label>
      <input  type="email" 
        placeholder="Enter email address"
        className="w-full border px-3 py-2 rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}/>
    </div>

    {/* Mobile Number */}
    <div>
      <label className="block mb-1 font-medium">Mobile Number</label>
      <input type="text" placeholder="Enter mobile number"
        className="w-full border px-3 py-2 rounded"
        value={mobile_number}
        onChange={(e) => setMobileNumber(e.target.value)}/>
    </div>

    {/* Password */}
    <div>
      <label className="block mb-1 font-medium">Password</label>
      <input type="password"
        placeholder="Enter password"
        className="w-full border px-3 py-2 rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>   
    </div>

    {/* Confirm Password */}
    <div>
      <label className="block mb-1 font-medium">Confirm Password</label>
      <input type="password"  placeholder="Confirm password"
        className="w-full border px-3 py-2 rounded"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {passwordError && (
        <p className="text-sm text-red-600 mt-1">{passwordError}</p>
      )}
    </div>     

    {/* Course Select */}
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

  
    {/* Buttons */}
    <div className="flex justify-end gap-2 mt-4">
      <button onClick={onClose} className="border px-4 py-2 rounded">
        Cancel
      </button>
      <button
        className="bg-[#047670] text-white px-4 py-2 rounded"
        type="submit"
      >
        Save Student
      </button>
    </div>
  </div>
</form>

      </div>
    </div>
  );
};

export default AddStudentModal;
