import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import axiosInstance from "../../utils/axiosInstance";
import { FaEdit } from "react-icons/fa";

const SuperAdminProfile = () => {
  const [adminId, setAdminId] = useState("");
  const [adminData, setAdminData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });
  const [profileImage, setProfileImage] = useState(null);
  const [message, setMessage] = useState("");

  // Fetch Admin ID from localStorage
  useEffect(() => {
    const admin_id = localStorage.getItem("is_id");
    if (admin_id) setAdminId(admin_id);
  }, []);

  // Fetch Admin Data
  const fetchAdminData = async () => {
    try {
      const response = await axiosInstance.get(`/admin/getData/${adminId}`);
      setAdminData(response.data.data);
    } catch (error) {
      console.error("Error fetching admin data:", error);
    }
  };

  useEffect(() => {
    if (adminId) fetchAdminData();
  }, [adminId]);

  // Handle input change for form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle profile image file selection
  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  // Enable edit mode and populate form with current data
  const handleEditClick = () => {
    if (!adminData) return;
    setFormData({
      name: adminData.name || "",
      email: adminData.email || "",
      address: adminData.address || "",
      phone: adminData.phone || "",
    });
    setProfileImage(null);
    setIsEditing(true);
  };

  // Update profile API call with only visible fields
  const handleUpdateProfile = async () => {
    try {
      const updatedData = new FormData();

      updatedData.append("name", formData.name);
      updatedData.append("email", formData.email);
      updatedData.append("address", formData.address);
      updatedData.append("phone", formData.phone);

      if (profileImage) {
        updatedData.append("avatar", profileImage);
      }

      await axiosInstance.put(`/admin/update/${adminId}`, updatedData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      fetchAdminData();
      setIsEditing(false);
      setMessage("Profile updated successfully!");
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      console.error("Error updating profile:", error);
      setMessage("Failed to update profile!");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <DashboardLayout>
      <div className="bg-gray-50 font-sans min-h-screen flex">
        <div className="flex-1">
          <main className="p-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900">Super Admin Profile</h1>
              <button
                onClick={handleEditClick}
                className="rounded-lg bg-[#047670] text-white px-4 py-2 flex items-center space-x-2 hover:bg-teal-800"
              >
                <FaEdit />
                <span>Edit Profile</span>
              </button>
            </div>

            {message && (
              <div className="mb-6 p-3 rounded text-white bg-green-600">{message}</div>
            )}

            {adminData ? (
              <div className="bg-white rounded-lg shadow p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Profile Image */}
                <div className="col-span-1 flex flex-col items-center">
                  <div className="w-36 h-36 rounded-full overflow-hidden bg-gray-200 mb-4">
                    <img
                      src={adminData.avatar}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Name: {adminData.name}
                  </h2>
                </div>

                {/* Profile Details */}
                <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-teal-700 mb-2">
                      Contact Information
                    </h3>
                    <div className="mb-3">
                      <span className="block text-sm font-medium text-gray-600">
                        Email
                      </span>
                      <p className="text-gray-800">{adminData.email}</p>
                    </div>
                  </div>

                  <div>
                    <div className="mb-3">
                      <span className="block text-sm font-medium text-gray-600">
                        Address
                      </span>
                      <p className="text-gray-800">{adminData.address}</p>
                    </div>
                    <div>
                      <span className="block text-sm font-medium text-gray-600">
                        Phone
                      </span>
                      <p className="text-gray-800">{adminData.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-center text-gray-600 mt-10">Loading profile details...</p>
            )}

            {/* Edit Form Modal */}
            {isEditing && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-8 w-full max-w-lg shadow-lg">
                  <h2 className="text-xl font-bold mb-6 text-gray-900">Edit Profile</h2>

                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { label: "Full Name", name: "name" },
                      { label: "Email", name: "email" },
                      { label: "Address", name: "address" },
                      { label: "Phone", name: "phone" },
                    ].map(({ label, name }) => (
                      <div key={name}>
                        <label className="block text-sm font-medium text-gray-600">
                          {label}
                        </label>
                        <input
                          type="text"
                          name={name}
                          value={formData[name]}
                          onChange={handleChange}
                          className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
                        />
                      </div>
                    ))}

                    {/* Profile Image Input */}
                    <div>
                      <label className="block text-sm font-medium text-gray-600">
                        Profile Image
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end space-x-3 mt-6">
                    <button
                      onClick={() => setIsEditing(false)}
                      className="px-4 py-2 rounded bg-gray-300 text-gray-800"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleUpdateProfile}
                      className="px-4 py-2 rounded bg-[#047670] text-white hover:bg-teal-800"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SuperAdminProfile;
