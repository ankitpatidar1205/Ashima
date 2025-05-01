import React, { useState } from "react";
import { FaLinkedin, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Select from "react-select";

const courseOptions = [
  { value: "Web Development", label: "Web Development" },
  { value: "Mobile App Development", label: "Mobile App Development" },
  { value: "Data Science", label: "Data Science" },
  { value: "UI/UX Design", label: "UI/UX Design" },
  { value: "Machine Learning", label: "Machine Learning" },
];

const Signup = () => {
  const [role, setRole] = useState("");
  const [studentCourses, setStudentCourses] = useState([]);
  const [instructorCourses, setInstructorCourses] = useState([]);

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FAF9F7] px-4 sm:px-6 py-8">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow border border-[#1E1E1E]/10 p-5 sm:p-8">
        <button  onClick={() => window.history.back()}
          className="text-[#047670] text-2xl mr-3">
          ←
        </button>
        <h3 className="text-center text-[32px] sm:text-[28px] font-impact text-[#047670] mb-6 font-normal uppercase">
          CREATE AN ACCOUNT
        </h3>

        {/* Role Selector */}
        <div className="mb-6">
          <label htmlFor="role" className="block text-[14px] font-semibold mb-1">
            Select Role
          </label>
          <select
            id="role"
            onChange={handleRoleChange}
            value={role}
            className="w-full px-3 py-2 border border-[#1E1E1E]/10 rounded text-[14px] focus:outline-none focus:ring-2 focus:ring-[#047670]"
          >
            <option value="">Select Role</option>
            <option value="student">Student</option>
            <option value="instructor">Instructor</option>
          </select>
        </div>

        {/* Dynamic Forms */}
        {role === "student" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <input type="text" placeholder="Full Name" className="border px-3 py-2 rounded w-full" />
            <input type="email" placeholder="Email Address" className="border px-3 py-2 rounded w-full" />
            <input type="text" placeholder="Mobile Number" className="border px-3 py-2 rounded w-full" />
            <input type="password" placeholder="Password" className="border px-3 py-2 rounded w-full" />
            <input type="password" placeholder="Confirm Password" className="border px-3 py-2 rounded w-full" />
            <div className="col-span-2">
              <label className="block mb-1 text-sm font-medium text-gray-700">Select Courses</label>
              <Select
                isMulti
                options={courseOptions}
                value={studentCourses}
                onChange={setStudentCourses}
                className="w-full"
              />
            </div>
            <div className="flex items-center gap-2 mt-2 col-span-2">
              <input type="checkbox" />
              <span>Active</span>
            </div>
          </div>
        )}

        {role === "instructor" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <input type="text" placeholder="Full Name" className="border px-3 py-2 rounded w-full" />
              <input type="email" placeholder="Email Address" className="border px-3 py-2 rounded w-full" />
              <input type="text" placeholder="Mobile Number" className="border px-3 py-2 rounded w-full" />
              <input type="password" placeholder="Password" className="border px-3 py-2 rounded w-full" />
              <input type="password" placeholder="Confirm Password" className="border px-3 py-2 rounded w-full" />
              <input type="text" placeholder="Area of Expertise" className="border px-3 py-2 rounded w-full" />
              <input type="text" placeholder="Account Number" className="border px-3 py-2 rounded w-full" />
              <input type="text" placeholder="IFSC Code" className="border px-3 py-2 rounded w-full" />
            </div>

            <div className="mb-4">
              <p className="mb-1 font-medium text-gray-600">Profile Image</p>
              <div className="border border-dashed border-gray-400 p-6 rounded text-center">
                <div className="text-3xl text-gray-400 mb-2">📤</div>
                <p className="font-semibold mb-1">Upload a file or drag and drop</p>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>

            <div className="mb-6">
              <p className="mb-1 font-medium text-gray-600">Course Category</p>
              <Select
                isMulti
                options={courseOptions}
                value={instructorCourses}
                onChange={setInstructorCourses}
                className="w-full"
              />
            </div>

            <div className="flex items-center gap-2 mb-4">
              <input type="checkbox" />
              <span>Active</span>
            </div>
          </>
        )}

        {/* Social Signup Buttons */}
        {role && (
          <div className="space-y-3 mb-6">
            <button className="flex items-center justify-center w-full border border-[#1E1E1E]/10 text-[#000000] font-medium text-[18px] py-2 rounded hover:bg-gray-100 transition">
              <FaLinkedin className="mr-2 text-[#047670]" />
              SIGN UP AS {role.toUpperCase()} WITH LINKEDIN
            </button>

            <button className="flex items-center justify-center w-full border border-[#1E1E1E]/10 text-[#000000] font-medium text-[18px] py-2 rounded hover:bg-gray-100 transition">
              <FaGoogle className="mr-2 text-[#DB4437]" />
              SIGN UP AS {role.toUpperCase()} WITH GOOGLE
            </button>
          </div>
        )}

        {/* Terms and Navigation */}
        <p className="text-center mt-4 text-[11px] text-[#02756A] px-2">
          By Continuing, You Agree To Ai Skills Terms And Privacy Policy.
        </p>
        <div className="text-center mt-4 text-[12px] text-[#000000]">
          Already Have An Account?{" "}
          <Link to="/login" className="text-[#02756A] hover:underline font-semibold">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
