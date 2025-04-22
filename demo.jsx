import axios from "axios";
import React, { useState } from "react";
import { FaLinkedin, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2"; // Import Swal
import BASE_URL from "../../config";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
  
    // Add a default role (e.g., 'user')
    const role = 'user';  // This can be changed based on your app's requirements
  
    try {
      const response = await axios.post(`${BASE_URL}/user/signUp`, {
        email,
        password,
        role, // Add the role here
      });
      console.log("response12", response)
  
      // Display success message if the response is successful
      if (response.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Sign Up Successful!",
          text: "You have successfully created an account.",
        });
      }
    } catch (error) {
      // Display error message if the request fails
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong, please try again.",
      });
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FAF9F7] px-4 sm:px-6 py-8">
      <div className="w-full max-w-lg bg-[#FFFFFF] rounded-lg shadow border border-[#1E1E1E]/10 p-5 sm:p-8">
        <button
          onClick={() => window.history.back()}
          className="text-[#047670] text-2xl mr-3"
        >
          ←
        </button>
        <h3 className="text-center text-[36px] sm:text-[28px] md:text-[30px] font-impact text-[#047670] mb-6 font-normal uppercase">
          CREATE AN ACCOUNT
        </h3>

        {/* Social Signup Buttons */}
        <div className="space-y-3 mb-6">
          <button className="flex items-center justify-center w-full border border-[#1E1E1E]/10 text-[#000000] font-medium text-[18px] sm:text-[20px] py-2 rounded hover:bg-gray-100 transition">
            <FaLinkedin className="mr-2 text-[#047670]" />
            SIGN UP WITH LINKEDIN
          </button>

          <button className="flex items-center justify-center w-full border border-[#1E1E1E]/10 text-[#000000] font-medium text-[18px] sm:text-[20px] py-2 rounded hover:bg-gray-100 transition">
            <FaGoogle className="mr-2 text-[#DB4437]" />
            SIGN UP WITH GOOGLE
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center text-[#000000] text-[20px] mb-6">
          <hr className="flex-grow border-t border-[#1E1E1E]/70" />
          <span className="mx-3 text-[14px] text-[#1E1E1E]/70">
            Or Use Email
          </span>
          <hr className="flex-grow border-t border-[#1E1E1E]/70" />
        </div>

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-[14px] font-semibold mb-1">
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Set email value to state
              className="w-full px-3 py-2 border border-[#1E1E1E]/10 rounded text-[14px] focus:outline-none focus:ring-2 focus:ring-[#047670]"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-[14px] font-semibold mb-1">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Set password value to state
              className="w-full px-3 py-2 border border-[#1E1E1E]/10 rounded text-[14px] focus:outline-none focus:ring-2 focus:ring-[#047670]"
            />
          </div>


          <div className="mb-4">
            <label htmlFor="password" className="block text-[14px] font-semibold mb-1">
              Select Role
            </label>
            <select name="" id="" className="w-full px-3 py-2 border border-[#1E1E1E]/10 rounded text-[14px] focus:outline-none focus:ring-2 focus:ring-[#047670]">
              <option value="">Select Role</option>
              <option value="">Student</option>
              <option value="">Instructor</option>
            </select>
           
          </div>

          {/* Signup Button */}
          <button
            className="w-full bg-gray-300 text-[#1E1E1E]/50 py-2 rounded text-[16px] font-medium"
            type="submit"
          >
            SIGN UP
          </button>
        </form>

        {/* Bottom Info */}
        <p className="text-center mt-4 text-[11px] text-[#02756A] px-2">
          By Continuing, You Agree To Ai Skills Terms And Privacy Policy.
        </p>

        <div className="text-center mt-4 text-[12px] text-[#000000]">
          Already Have An Account?{" "}
          <Link
            to="/login"
            className="text-[#02756A] hover:underline font-semibold"
          >
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
