import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getInstructors } from "../../Redux/slices/InstructorSlice/InstructorSlice";

const InstructorDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { instructors } = useSelector((state) => state.instructors);

  useEffect(() => {
    dispatch(getInstructors());
  }, [dispatch]);

  // Filter the instructor matching the id from the URL params
  const selectedInstructor = instructors.find(
    (instructor) => instructor.id === Number(id)
  );

  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="flex justify-between items-center mb-3">
          <h3 className="fw-bold">Instructor Details</h3>
          <button
            className="d-flex p-2 rounded align-items-center font-semibold text-white bg-teal-700"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft className="me-1" /> Back
          </button>
        </div>

        {selectedInstructor ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Profile Card */}
            <div className="bg-white p-4 rounded shadow text-center">
              <div className="w-24 h-24 mx-auto rounded-full mb-3 overflow-hidden">
                <img
                  src={selectedInstructor.profile_image}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-lg">{selectedInstructor.full_name}</h3>
              <p className="text-sm text-gray-500">{selectedInstructor.expertise}</p>
              <span
                className={`${
                  selectedInstructor.is_active === "1"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                } text-xs px-2 py-1 rounded inline-block mt-2`}
              >
                {selectedInstructor.is_active === "1" ? "Active" : "Inactive"}
              </span>

              <div className="flex justify-around mt-4">
                <div>
                  <p className="text-sm text-gray-500">Courses</p>
                  <p className="font-bold">--</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Students</p>
                  <p className="font-bold">--</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Revenue</p>
                  <p className="font-bold">--</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white p-4 rounded shadow">
              <h4 className="font-semibold mb-3">Contact Information</h4>
              <p className="text-sm mb-1">Email</p>
              <p className="font-bold mb-2">{selectedInstructor.email}</p>
              <p className="text-sm mb-1">Phone</p>
              <p className="font-bold">{selectedInstructor.mobile_number}</p>
              <p className="text-sm mb-1">Created At</p>
              <p className="font-bold">{new Date(selectedInstructor.created_at).toLocaleString()}</p>
              <p className="text-sm mb-1">Updated At</p>
              <p className="font-bold">{new Date(selectedInstructor.updated_at).toLocaleString()}</p>
            </div>

            {/* Bank Details */}
            <div className="bg-white p-4 rounded shadow">
              <h4 className="font-semibold mb-3">Bank Details</h4>
              <p className="text-sm mb-1">Account Number</p>
              <p className="font-bold mb-2">
                {selectedInstructor.bank_account_number || "--"}
              </p>
              <p className="text-sm mb-1">IFSC Code</p>
              <p className="font-bold">
                {selectedInstructor.ifsc_code || "--"}
              </p>
            </div>
          </div>
        ) : (
          <p>Loading instructor details...</p>
        )}
      </div>
    </DashboardLayout>
  );
};

export default InstructorDetails;
