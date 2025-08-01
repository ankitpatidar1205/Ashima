import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import { FaArrowLeft, FaEnvelope, FaPhone, FaCalendarAlt } from "react-icons/fa";
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

  const selectedInstructor = instructors.find(
    (instructor) => instructor.id === Number(id)
  );

  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Instructor Details</h3>
          <button
            className="flex items-center gap-2 px-3 py-2 rounded font-medium text-white bg-teal-700 hover:bg-teal-800 text-sm"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft /> Back
          </button>
        </div>

        {selectedInstructor ? (
          <div className="bg-white p-5 rounded-lg shadow-md w-full max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left: Profile Info */}
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <img
                  src={selectedInstructor?.avatar}
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover border-2 border-teal-600"
                />
                <h3 className="mt-3 text-lg font-semibold text-gray-800">
                  {selectedInstructor.full_name}
                </h3>
                <p className="text-gray-500 text-sm">{selectedInstructor.expertise}</p>
                <span
                  className={`mt-2 px-2 py-1 text-xs font-medium rounded-full ${
                    selectedInstructor.is_active === "1"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {selectedInstructor.is_active === "1" ? "Active" : "Inactive"}
                </span>
              </div>

              {/* Right: Contact Info */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <FaEnvelope className="text-teal-600" />
                  <span>{selectedInstructor.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaPhone className="text-teal-600" />
                  <span>{selectedInstructor.mobile_number}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-teal-600" />
                  <span>
                    Created: {new Date(selectedInstructor.created_at).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-teal-600" />
                  <span>
                    Updated: {new Date(selectedInstructor.updated_at).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600">Loading instructor details...</p>
        )}
      </div>
    </DashboardLayout>
  );
};

export default InstructorDetails;
