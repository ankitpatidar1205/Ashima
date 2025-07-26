import React from "react";
import { FaLinkedin, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FAF9F7] px-4 sm:px-6 py-8">
      <div className="w-full max-w-lg bg-[#FFFFFF] rounded-lg shadow border border-[#1E1E1E]/10 p-5 sm:p-8">
        <h3 className="text-center text-[36px] sm:text-[28px] md:text-[30px] font-impact text-[#047670] mb-6 font-normal uppercase">
          sign up as instructor
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

        {/* Email Input */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-[14px] font-semibold mb-1"
          >
            EMAIL
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-[#1E1E1E]/10 rounded text-[14px] focus:outline-none focus:ring-2 focus:ring-[#047670]"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-[14px] font-semibold mb-1"
          >
            PASSWORD
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border border-[#1E1E1E]/10 rounded text-[14px] focus:outline-none focus:ring-2 focus:ring-[#047670]"
          />
        </div>

        {/* Signup Button */}
        <button
          className="w-full bg-gray-300 text-[#1E1E1E]/50 py-2 rounded text-[16px] font-medium cursor-not-allowed"
          disabled
        >
          SIGN UP
        </button>

        {/* Bottom Info */}
        <p className="text-center mt-4 text-[11px] text-[#02756A] px-2">
          By Continuing, You Agree To AI SKILLS Terms And Privacy Policy.
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
