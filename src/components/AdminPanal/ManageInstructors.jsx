import React, { useEffect, useState } from "react";
import { FaEye, FaEdit, FaBan, FaTrash } from "react-icons/fa";
import DashboardLayout from "../../Layout/DashboardLayout";
import AddInstructorModal from "./AddInstructorModal";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getInstructors, deleteInstructor } from "../../Redux/slices/InstructorSlice/InstructorSlice";
import Swal from "sweetalert2";

const ManageInstructors = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

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
          })
          .catch(() => {
            Swal.fire("Error!", "Something went wrong.", "error");
          });
      }
    });
  };

  // const filteredInstructors = instructors?.filter((instructor) => {
  //   const matchesSearch = instructor.full_name?.toLowerCase().includes(searchQuery.toLowerCase());
  //   const matchesStatus =
  //     statusFilter === "All" || instructor.status === statusFilter;
  
  //   return matchesSearch && matchesStatus;
  // });
  

  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Manage Instructors</h2>
          <button  className="bg-[#047670] text-white px-4 py-2 rounded"
            onClick={() => setIsModalOpen(true)}
          >
            Add Instructor
          </button>
          <AddInstructorModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>

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
            <select className="border px-3 py-2 rounded">
              <option>All Courses</option>
            </select>
            <button className="border px-3 py-2 rounded flex items-center gap-2">
              <span>Export</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-center text-nowrap">
              <thead className="bg-gray-50">
                <tr className="text-gray-500">
                  <th className="p-2">
                    <input type="checkbox" />
                  </th>
                  <th className="p-2">Instructor</th>
                  <th className="p-2">Email</th>
                  <th className="p-2">Mobile</th>
                  <th className="p-2">Courses</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {instructors && instructors.length > 0 ? (
                  instructors.map((instructor) => (
                    <tr className="border-b" key={instructor.id}>
                      <td className="p-2">
                        <input type="checkbox" />
                      </td>
                      <td className="p-2">
                        <Link
                          to={`/instructor/${instructor.id}`}
                          className="text-teal-700 hover:underline"
                        >
                          <strong>{instructor.full_name}</strong>
                          <div className="text-xs text-gray-500">
                            {instructor.expertise}
                          </div>
                        </Link>
                      </td>
                      <td className="p-2">{instructor.email}</td>
                      <td className="p-2">{instructor.mobile_number}</td>
                      <td className="p-2">{instructor.course_id}</td>
                      <td className="p-2">
                        <span
                          className={`${
                            instructor.status === "1"
                              ? "bg-green-100 text-green-600"
                              : "bg-red-100 text-red-600"
                          } text-xs px-2 py-1 rounded`}
                        >
                          {instructor.status === "1" ? "Active" : "Inactive"}
                        </span>
                      </td>
                      <td className="p-2 mt-2 flex gap-2 text-gray-600 text-base justify-center">
                        <Link to={`/instructor/${instructor.id}`}>
                          <FaEye />
                        </Link>
                        <button>
                          <FaEdit />
                        </button>
                        <button onClick={() => handleDelete(instructor.id)}>
                          <FaTrash />
                        </button>
                      </td>
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

          <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
            <div>Showing 1 to 10 of {instructors?.length || 0} results</div>
            <div className="flex gap-2">
              <button className="border px-2 py-1 rounded">Previous</button>
              <button className="bg-[#047670] text-white px-2 py-1 rounded">
                1
              </button>
              <button className="border px-2 py-1 rounded">2</button>
              <button className="border px-2 py-1 rounded">3</button>
              <button className="border px-2 py-1 rounded">Next</button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ManageInstructors;
