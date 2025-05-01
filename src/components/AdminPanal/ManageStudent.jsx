import { useEffect, useState } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import DashboardLayout from "../../Layout/DashboardLayout";
import AddStudentModal from "./AddStudent";
import {  useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteStudent, getStudents } from "../../Redux/slices/StudentSlice/StudentSlice";
import Swal from "sweetalert2";


const ManageStudents = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const { Student } = useSelector((state) => state.Student);
   console.log(Student)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getStudents());
  
  }, [dispatch]);

  const handleUpdateStudent = (student) => {
    localStorage.setItem("student", JSON.stringify(student));
    setIsModalOpen(true);
  };

  const handleViewStudent = (studentId) => {
    navigate(`/student-details/${studentId}`);
  };

  const handleDeleteStudent = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#047670",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await dispatch(deleteStudent(id)).unwrap();
          Swal.fire("Deleted!", res.message, "success")
          dispatch(getStudents());
  
        } catch (error) {
          Swal.fire("Failed!", error || "Failed to delete student", "error");
        }
      }
    });
  };
  
  
  const filteredStudents = Student?.filter((student) => {
    const matchesSearch =
      student.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email?.toLowerCase().includes(searchTerm.toLowerCase());
  
    const matchesStatus =
      statusFilter === "All" ||
      (statusFilter === "1" && student.is_active === 1) ||
      (statusFilter === "0" && student.is_active === 0);
  
    return matchesSearch && matchesStatus;
  });
  

  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Manage Students</h2>
          <button
            className="bg-[#047670] text-white px-4 py-2 rounded"
            onClick={() => setIsModalOpen(true)}
          >
            Add Student
          </button>
          <AddStudentModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>

        <div className="bg-white p-4 rounded shadow">
          <div className="flex flex-wrap gap-2 mb-4">
            <input
              type="text"
              placeholder="Search students..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border px-3 py-2 rounded w-full md:w-auto"
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

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-center text-nowrap">
              <thead className="bg-gray-50">
                <tr className="text-gray-500">
                  <th className="p-2">#</th>
                  <th className="p-2">Name</th>
                  <th className="p-2">Email</th>
                  <th className="p-2">Mobile</th>
                  <th className="p-2">Course</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents && filteredStudents.length > 0 ? (
                  filteredStudents.map((student, index) => (
                    <tr key={student.id} className="border-b">
                      <td className="p-2">{index + 1}</td>
                      <td className="p-2">
                          <strong className="cursor-pointer text-[#047670]"> {student.name} </strong>
                      </td>
                      <td className="p-2">{student.email}</td>
                      <td className="p-2">{student.mobile}</td>
                      <td className="p-2">{student.course_id}</td>
                      <td className="p-2">
                    <span className={`text-xs px-2 py-1 rounded ${
                            student.is_active === 1
                            ? "bg-green-100 text-green-600"
                           : "bg-red-100 text-red-600" }`}>
                       {student.is_active === 1 ? "Active" : "Inactive"}</span>
                      </td>

                      <td className="p-2 flex gap-2 justify-center items-center text-gray-600 text-base">
                        <button onClick={() => handleViewStudent(student.id)}>
                          <FaEye />
                        </button>
                        <button onClick={() => handleUpdateStudent(student)}>
                          <FaEdit />
                        </button>
                        <button onClick={() => handleDeleteStudent(student.id)}>
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center py-4 text-gray-500">
                      No student found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Placeholder */}
          <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
            <div>Showing 1 to 10 of {filteredStudents?.length || 0} entries</div>
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

export default ManageStudents;
