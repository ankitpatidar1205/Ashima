import { useState } from "react";
import axios from "axios";
import BASE_URL from "../utils/baseURL"
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; // Import Swal

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate()

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${BASE_URL}/forgot-password`,
        { email }
      );
      console.log(res,"res");
      localStorage.setItem('email', res?.data?.data?.email)
      const token = res?.data?.data?.token
      const templateParams = {
        user_email: email,
        message: `Here is your reset password link: http://localhost:5173/reset-password/${token}`,
      };

      emailjs
        .send(
          "service_68qd39f",
          "template_w3y5r24",
          templateParams,
          "yKjOHMzuhnM9AqSP6"
        )
        .then((response) => {
          setEmail("");
          navigate('/reset-password-success')
        })
        .catch((err) => {
          console.error("FAILED...", err);
        });

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f4f4f4]">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-[#047670]">
          Forgot Password
        </h2>

        <input   type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border w-full px-3 py-2 rounded mb-4 outline-none focus:ring-2 focus:ring-[#047670]"
        />

        <button
          onClick={handleForgotPassword}
          className="bg-[#047670] text-white w-full py-2 rounded hover:bg-[#035b57] transition"
        >
          Send Reset Link
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
