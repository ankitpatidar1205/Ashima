import React, { useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import { fetchCourses } from "../Redux/slices/CourseSlice/CourseSlice";
import { createStudent } from "../Redux/slices/StudentSlice/StudentSlice";
import { addInstructor } from "../Redux/slices/InstructorSlice/InstructorSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [role, setRole] = useState("");
  const [studentForm, setStudentForm] = useState({
    full_name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    selectedCourses: [],
  });

  const [instructorForm, setInstructorForm] = useState({
    full_name: "",
    email: "",
    mobile_number: "",
    password: "",
    confirmPassword: "",
    expertise: "",
    // bank_account_number: "",
    // ifsc_code: "",
    avatar: null,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { courses } = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleStudentChange = (e) => {
    setStudentForm({ ...studentForm, [e.target.name]: e.target.value });
  };

  const handleInstructorChange = (e) => {
    const { name, value, files } = e.target;
    setInstructorForm({
      ...instructorForm,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (role === "student") {
      const { full_name, email, mobile, password, confirmPassword, selectedCourses } = studentForm;
      if (password !== confirmPassword) return toast.error("Passwords do not match!");

      const formData = {
        name: full_name,
        email,
        mobile,
        password,
        confirmPassword,
        course_id: JSON.stringify(selectedCourses.map((course) => course.value)),
      };

      try {
        await dispatch(createStudent(formData)).unwrap();
        toast.success("Student registered successfully!");
        setTimeout(() => navigate("/login"), 1500);
      } catch (err) {
        console.error("Student registration failed", err);
        toast.error("Registration failed!");
      }
    } else if (role === "instructor") {
      const {
        full_name,
        email,
        mobile_number,
        password,
        confirmPassword,
        expertise,
        // bank_account_number,
        // ifsc_code,
        avatar,
      } = instructorForm;

      if (password !== confirmPassword) return toast.error("Passwords do not match!");

      const formData = new FormData();
      formData.append("full_name", full_name);
      formData.append("email", email);
      formData.append("mobile_number", mobile_number);
      formData.append("password", password);
      formData.append("expertise", expertise);
      // formData.append("bank_account_number", bank_account_number);
      // formData.append("ifsc_code", ifsc_code);

      if (avatar) {
        formData.append("avatar", avatar);
      }

      try {
        await dispatch(addInstructor(formData)).unwrap();
        toast.success("Instructor registered successfully!");
        setTimeout(() => navigate("/login"), 1500);
      } catch (err) {
        console.error("Instructor registration failed", err);
        toast.error("Registration failed!");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FAF9F7] px-4 sm:px-6 py-8">
      <ToastContainer position="top-right" autoClose={1500} />
      <div className="w-full max-w-4xl bg-white rounded-lg shadow border border-[#1E1E1E]/10 p-5 sm:p-8">
        <button onClick={() => window.history.back()} className="text-[#047670] text-2xl mr-3">←</button>
        <h3 className="text-center text-[32px] sm:text-[28px] font-impact text-[#047670] mb-6 font-normal uppercase">Create an Account</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="role" className="block text-[14px] font-semibold mb-1">Select Role</label>
            <select id="role" onChange={handleRoleChange} value={role}
              className="w-full px-3 py-2 border border-[#1E1E1E]/10 rounded text-[14px] focus:outline-none focus:ring-2 focus:ring-[#047670]">
              <option value="">Select Role</option>
              <option value="student">Student</option>
              <option value="instructor">Instructor</option>
            </select>
          </div>

          {role === "student" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {["full_name", "email", "mobile", "password", "confirmPassword"].map((field, i) => (
                <div key={i}>
                  <label className="block text-sm font-medium mb-1">
                    {field === "full_name" && "Full Name"}
                    {field === "email" && "Email Address"}
                    {field === "mobile" && "Mobile Number"}
                    {field === "password" && "Password"}
                    {field === "confirmPassword" && "Confirm Password"}
                  </label>
                  <input
                    name={field}
                    type={field.toLowerCase().includes("password") ? "password" : (field === "email" ? "email" : "text")}
                    onChange={handleStudentChange}
                    className="border px-3 py-2 rounded w-full"
                  />
                </div>
              ))}
              {/* <div className="col-span-2">
                <label className="block text-sm font-medium mb-1">Select Courses</label>
                <Select
                  isMulti
                  options={courses.map(course => ({ value: course.id, label: course.course_title }))}
                  onChange={(selected) => setStudentForm({ ...studentForm, selectedCourses: selected })}
                  className="w-full"
                />
              </div> */}
            </div>
          )}

          {role === "instructor" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { name: "full_name", label: "Full Name", type: "text" },
                { name: "email", label: "Email Address", type: "email" },
                { name: "mobile_number", label: "Mobile Number", type: "text" },
                { name: "password", label: "Password", type: "password" },
                { name: "confirmPassword", label: "Confirm Password", type: "password" },
                { name: "expertise", label: "Area of Expertise", type: "text" },
                // { name: "bank_account_number", label: "Account Number", type: "text" },
                // { name: "ifsc_code", label: "IFSC Code", type: "text" },
              ].map((input, i) => (
                <div key={i}>
                  <label className="block text-sm font-medium mb-1">{input.label}</label>
                  <input
                    name={input.name}
                    type={input.type}
                    onChange={handleInstructorChange}
                    className="border px-3 py-2 rounded w-full"
                  />
                </div>
              ))}
              <div className="col-span-2">
                <label className="block text-sm font-medium mb-1">Profile Image</label>
                <input type="file" name="avatar" onChange={handleInstructorChange}
                  className="border px-3 py-2 rounded w-full" />
              </div>
            </div>
          )}

          {role && (
            <div className="space-y-3 mb-6">
              <button type="submit"
                className="flex items-center justify-center w-full bg-[#047670] text-white font-medium text-[18px] py-2 rounded hover:bg-[#035a57] transition">
                Sign up as {role.toUpperCase()}
              </button>
            </div>
          )}
        </form>

        <p className="text-center mt-4 text-[11px] text-[#02756A] px-2">
          By Continuing, you agree to Ai Skills Terms and Privacy Policy.
        </p>
        <div className="text-center mt-4 text-[12px] text-[#000000]">
          Already have an account?{" "}
          <Link to="/login" className="text-[#02756A] hover:underline font-semibold">Log In</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
