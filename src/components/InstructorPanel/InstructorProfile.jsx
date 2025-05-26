import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import axiosInstance from "../../utils/axiosInstance";
import { FaEdit } from "react-icons/fa";

const ProfileLayout = () => {
  const [instructorId, setInstructorId] = useState("");
  const [instructorData, setInstructorData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    expertise: "",
    email: "",
    mobile_number: "",
    bank_account_number: "",
    ifsc_code: "",
  });
  const [profileImage, setProfileImage] = useState(null);
  const [message, setMessage] = useState("");

  // Fetch Instructor ID
  useEffect(() => {
    const inst_id = localStorage.getItem("is_id");
    if (inst_id) setInstructorId(inst_id);
  }, []);

  // Fetch Instructor Data
  const fetchInstructorData = async () => {
    try {
      const response = await axiosInstance.get(`/instructor?id=${instructorId}`);
      setInstructorData(response.data.data);
    } catch (error) {
      console.error("Error fetching instructor data:", error);
    }
  };

  useEffect(() => {
    if (instructorId) fetchInstructorData();
  }, [instructorId]);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Image Change
  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  // Toggle Edit Mode & Set Form Data
  const handleEditClick = () => {
    setFormData({
      full_name: instructorData.full_name,
      expertise: instructorData.expertise,
      email: instructorData.email,
      mobile_number: instructorData.mobile_number,
      bank_account_number: instructorData.bank_account_number,
      ifsc_code: instructorData.ifsc_code,
    });
    setProfileImage(null);
    setIsEditing(true);
  };

  // Handle Update Profile
  const handleUpdateProfile = async () => {
    try {
      const updatedData = new FormData();

      // Append text fields
      Object.entries(formData).forEach(([key, value]) => {
        updatedData.append(key, value);
      });

      // If a new image is selected, append it
      if (profileImage) {
        updatedData.append("profile_image", profileImage);
      }

      // API call
      await axiosInstance.put(`/editinstructor/${instructorId}`, updatedData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      fetchInstructorData();
      setIsEditing(false);
      setMessage("Profile updated successfully!");

      // Clear message after 3 seconds
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
              <h1 className="text-2xl font-bold text-gray-900">Instructor Profile</h1>
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

            {instructorData ? (
              <div className="bg-white rounded-lg shadow p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Profile Image */}
                <div className="col-span-1 flex flex-col items-center">
                  <div className="w-36 h-36 rounded-full overflow-hidden bg-gray-200 mb-4">
                    <img
                      src={instructorData?.avatar}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Name: {instructorData.full_name}</h2>
                  <p className="text-gray-600">Expertise: {instructorData.expertise}</p>
                </div>

                {/* Profile Details */}
                <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-teal-700 mb-2">Contact Information</h3>
                    <div className="mb-3">
                      <span className="block text-sm font-medium text-gray-600">Email</span>
                      <p className="text-gray-800">{instructorData.email}</p>
                    </div>
                    <div>
                      <span className="block text-sm font-medium text-gray-600">Mobile Number</span>
                      <p className="text-gray-800">{instructorData.mobile_number}</p>
                    </div>
                  </div>

                  <div>
  <h3 className="text-lg font-semibold text-teal-700 mb-2">Bank Details</h3>
  {instructorData?.bank_account_number ? (
    <>
      <div className="mb-3">
        <span className="block text-sm font-medium text-gray-600">Bank Account Number</span>
        <p className="text-gray-800">{instructorData.bank_account_number}</p>
      </div>
      <div>
        <span className="block text-sm font-medium text-gray-600">IFSC Code</span>
        <p className="text-gray-800">{instructorData.ifsc_code}</p>
      </div>
    </>
  ) : (
                
    <button   className="rounded-lg bg-[#047670] text-white px-4 py-2 flex items-center space-x-2 hover:bg-teal-800" onClick={handleEditClick}  >Add Bank Details</button>
  )}
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
                      { label: "Full Name", name: "full_name" },
                      { label: "Expertise", name: "expertise" },
                      { label: "Email", name: "email" },
                      { label: "Mobile Number", name: "mobile_number" },
                      { label: "Bank Account Number", name: "bank_account_number" },
                      { label: "IFSC Code", name: "ifsc_code" },
                    ].map(({ label, name }) => (
                      <div key={name}>
                        <label className="block text-sm font-medium text-gray-600">{label}</label>
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
                      <label className="block text-sm font-medium text-gray-600">Profile Image</label>
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

export default ProfileLayout;
