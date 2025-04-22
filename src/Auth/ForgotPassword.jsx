import { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email");
      return;
    }
     
    try {
      const res = await axios.post(
        "https://hrb5wx2v-6002.inc1.devtunnels.ms/api/user/forgotPassword",
        { email }
      );

      console.log(res.data);
      alert("Reset link sent successfully on your email");
      setEmail("");  // Clear field after success
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f4f4f4]">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-[#047670]">
          Forgot Password
        </h2>

        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
