import { useState } from "react";
import axios from "axios";
import BASE_URL from "../utils/baseURL"
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ResetPassword = () => {
    const { token } = useParams();
    const [password, setpassword] = useState("");

    const handleResetPassword = async (e) => {
        e.preventDefault();
        const email = localStorage.getItem('email')
        try {
            const res = await axios.post(
                `${BASE_URL}/reset-password`,
                {
                    token, email, newPassword: password
                }
            );
            // Show success alert
            Swal.fire({
                title: "Password Reset Successful",
                text: "You can now login with your new password",
                icon: "success",
                confirmButtonText: "OK",
                confirmButtonColor: "#047670",
            }).then(() => {
                navigate('/login');
            });

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#f4f4f4]">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center text-[#047670]">
                    Reset Password
                </h2>

                <input
                    type="password"
                    placeholder="Enter Your Password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    required
                    className="border w-full px-3 py-2 rounded mb-4 outline-none focus:ring-2 focus:ring-[#047670]"
                />

                <button
                    onClick={handleResetPassword}
                    className="bg-[#047670] text-white w-full py-2 rounded hover:bg-[#035b57] transition"
                >
                    Reset Pasword
                </button>
            </div>
        </div>
    );
};

export default ResetPassword;
