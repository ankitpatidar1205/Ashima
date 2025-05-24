 import { useEffect, useState } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import DashboardLayout from "../../Layout/DashboardLayout";
import AddInstructorModal from "./AddInstructorModal";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getInstructors, deleteInstructor, updateInstructorStatus,approveRequest } from "../../Redux/slices/InstructorSlice/InstructorSlice";
import Swal from "sweetalert2";
import dayjs from 'dayjs';

const ManageInstructors = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [activeTab, setActiveTab] = useState("all");

  const { instructors } = useSelector((state) => state.instructors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInstructors());
  }, [dispatch]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#047670",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteInstructor(id))
          .unwrap()
          .then(() => {
            Swal.fire("Deleted!", "Instructor has been deleted.", "success");
            dispatch(getInstructors());
          })
          .catch(() => {
            Swal.fire("Error!", "Something went wrong.", "error");
          });
      }
    });
  };

  const handleStatusToggle = (id, currentStatus) => {
    const newStatus = currentStatus === "1" ? "0" : "1";
    Swal.fire({
      title: "Are you sure?",
      text: `Change status to ${newStatus === "1" ? "Active" : "Inactive"}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#047670",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, change it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(updateInstructorStatus({ id, status: newStatus }))
          .unwrap()
          .then(() => {
            Swal.fire("Success!", "Instructor status updated.", "success");
            dispatch(getInstructors());
          })
          .catch(() => {
            Swal.fire("Error!", "Failed to update status.", "error");
          });
      }
    });
  };
   const approve_Request = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Approve Request`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#047670",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes,  Approve!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(approveRequest(id))
          .unwrap()
          .then(() => {
            Swal.fire("Success!", "Request Approved", "success");
            dispatch(getInstructors());
          })
          .catch(() => {
            Swal.fire("Error!", "Failed to approve request.", "error");
          });
      }
    });
  };

  const filteredInstructors = instructors?.filter((instructor) => {
    const matchesSearch = instructor?.full_name?.toLowerCase()?.includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "All" || instructor.is_active === statusFilter;
    const verified = instructor?.is_verified=="1"
    return matchesSearch && matchesStatus && verified ;
  });

  const inactiveInstructors = instructors?.filter((instructor) => instructor?.is_verified == "0");
  console.log(inactiveInstructors)
  const renderTable = (data, showApprove = false) => (
    <div className="overflow-x-auto mt-4">
      <table className="w-full text-sm text-center text-nowrap">
        <thead className="bg-gray-50">
          <tr className="text-gray-500">
            <th className="p-2">SL</th>
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Mobile</th>
            <th className="p-2">Expertise</th>
            {showApprove ? (
              <>
              <th className="p-2">Requests</th>
               <th className="p-2">Date</th>
               </>
            ) : (
              <th className="p-2">Status</th>
            )}
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((instructor, index) => (
              <tr className="border-b" key={instructor.id}>
                <td className="p-2">{index + 1}</td>
                <td className="p-2">
                  <Link to={`/instructor-detail/${instructor.id}`} className="text-teal-700 hover:underline">
                    <strong>{instructor.full_name}</strong>
                  </Link>
                </td>
                <td className="p-2">{instructor.email}</td>
                <td className="p-2">{instructor.mobile_number}</td>
                <td className="p-2">{instructor.expertise}</td>
                {showApprove ? (
                  <>
                  <td className="p-2">
                    <button
                      onClick={() => approve_Request(instructor.id)}
                      className="bg-[#047670] text-white text-xs px-3 py-1 rounded hover:bg-[#035a56]"
                    >
                      Approve
                    </button>
                  </td>
                  <td>{dayjs(instructor?.created_at).format('DD MMM YYYY, hh:mm A')}</td>
                  <td className="p-2 flex gap-2 text-gray-600 text-base justify-center">
                  <Link to={`/instructor-detail/${instructor.id}`}>
                    <FaEye />
                  </Link>
                   
                  <button onClick={() => handleDelete(instructor.id)}>
                    <FaTrash />
                  </button>
                </td>
                  </>
                ) : (
                  <><td className="p-2">
                    <button
                      onClick={() => handleStatusToggle(instructor.id, instructor.is_active)}
                      className={`${
                        instructor.is_active === "1" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                      } text-xs px-2 py-1 rounded`}
                    >
                      {instructor.is_active === "1" ? "Active" : "Inactive"}
                    </button>
                  </td>
                  <td className="p-2 flex gap-2 text-gray-600 text-base justify-center">
                  <Link to={`/instructor-detail/${instructor.id}`}>
                    <FaEye />
                  </Link>
                  <Link to={`/edit-instruction/${instructor.id}`}>
                    <FaEdit />
                  </Link>
                  <button onClick={() => handleDelete(instructor.id)}>
                    <FaTrash />
                  </button>
                </td></>
                )}
                
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center py-4">
                No instructors found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );

  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Manage Instructors</h2>
          <button className="bg-[#047670] text-white px-4 py-2 rounded" onClick={() => setIsModalOpen(true)}>
            Add Instructor
          </button>
          <AddInstructorModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-4 border-b">
          <button
            className={`px-4 py-2 ${activeTab === "all" ? "border-b-2 border-[#047670] text-[#047670]" : "text-gray-500"}`}
            onClick={() => setActiveTab("all")}
          >
            All Instructors
          </button>
          <button
            className={`px-4 py-2 ${activeTab === "inactive" ? "border-b-2 border-[#047670] text-[#047670]" : "text-gray-500"}`}
            onClick={() => setActiveTab("inactive")}
          >
            New Request
          </button>
        </div>

        {/* All Instructors Tab */}
        {activeTab === "all" && (
          <div className="bg-white p-4 rounded shadow">
            <div className="flex flex-wrap gap-2 mb-4">
              <input
                type="text"
                placeholder="Search instructors..."
                className="border px-3 py-2 rounded w-full md:w-auto"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <select
                className="border px-3 py-2 rounded"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="All">All Status</option>
                <option value="1">Active</option>
                <option value="0">Inactive</option>
              </select>
            </div>
            {renderTable(filteredInstructors)}
          </div>
        )}

        {/* New Request Tab */}
        {activeTab === "inactive" && (
          <div className="bg-white p-4 rounded shadow">
            <h4 className="text-md font-medium mb-2">New Instructor Requests</h4>
            {renderTable(inactiveInstructors, true)}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default ManageInstructors;
