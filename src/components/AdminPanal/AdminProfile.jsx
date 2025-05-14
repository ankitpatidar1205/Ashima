import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Layout/DashboardLayout";

const AdminProfile = () => {
  const [adminData, setAdminData] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setAdminData(user);
    }
  }, []);

  return (
    <DashboardLayout>
      <div className="bg-gray-50 font-sans min-h-screen flex">
        <div className="flex-1">
          <main className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Profile</h1>

            {adminData ? (
              <div className="bg-white rounded-lg shadow p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-xl font-bold text-teal-700 mb-4">Basic Information</h2>
                  <p className="text-gray-800 mb-2">
                    <span className="font-semibold">Name:</span> {adminData.name}
                  </p>
                  <p className="text-gray-800 mb-2">
                    <span className="font-semibold">Email:</span> {adminData.email}
                  </p>
                  <p className="text-gray-800 mb-2">
                    <span className="font-semibold">Role:</span> {adminData.role}
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-teal-700 mb-4">Account Details</h2>
                  <p className="text-gray-800 mb-2">
                    <span className="font-semibold">User ID:</span> {adminData.id}
                  </p>
                  <p className="text-gray-800 mb-2">
                    <span className="font-semibold">Created At:</span>{" "}
                    {new Date(adminData.created_at).toLocaleDateString()}
                  </p>
                  <p className="text-gray-800 mb-2">
                    <span className="font-semibold">Updated At:</span>{" "}
                    {new Date(adminData.updated_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-center text-gray-600 mt-10">Loading admin profile...</p>
            )}
          </main>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminProfile;
