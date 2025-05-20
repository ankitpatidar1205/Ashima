import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import axios from "axios";
const ChangePassword = () => {
  const [instructorId, setInstructorId] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const inst_id = localStorage.getItem("is_id");
    if (inst_id) {
      setInstructorId(inst_id);
    }
  }, []);

  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("New password and confirm password do not match.");
      setMessage("");
      return;
    }

    try {
      const response = await axios.post(
        `/change-password/${instructorId}`,
        {
          oldPassword,
          newPassword,
          confirmPassword,
        }
      );

      if (response.data.success) {
        setMessage("Password changed successfully!");
        setError("");
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        setError(response.data.message || "Failed to change password.");
        setMessage("");
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred.");
      setMessage("");
    }
  };

  return (
    <DashboardLayout>
      <div className="bg-gray-50 font-sans min-h-screen flex">
        <div className="flex-1">
          <main className="p-8 max-w-xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Change Password</h1>
            {message && (
              <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">{message}</div>
            )}
            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">{error}</div>
            )}

            <form onSubmit={handleChangePassword} className="space-y-6">
              <div>
                <label className="block mb-2 text-gray-700 font-semibold">Old Password</label>
                <input type="password"  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  required
                  className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700 font-semibold">New Password</label>
                <input type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700 font-semibold">Confirm New Password</label>
                <input type="password" value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <button type="submit"
                className="bg-teal-600 text-white font-bold py-3 px-6 rounded hover:bg-teal-700">
                Update Password
              </button>
            </form>
          </main>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ChangePassword;
