import React, { useEffect, useState } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import DashboardLayout from "../../Layout/DashboardLayout";
import AddCoursesModal from "./AddCoursesModal";
import { Link } from "react-router-dom";
import { deleteCourse, fetchCourses } from "../../Redux/slices/CourseSlice/CourseSlice";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";


const ManageCourses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
   const [courseId, setCourseId] = useState(null);
  const dispatch = useDispatch();
  const { courses } = useSelector((state) => state.courses);
  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]); 
     
    const { instructors } = useSelector((state) => state?.instructors);
     
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won’t be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteCourse(id))
        Swal.fire("Deleted!", "The course has been deleted.", "success");
      }
    });
  };
  const handleEdit = (id) => {
    setCourseId(id)
    setIsModalOpen(true)
    
  };  

  const filteredCourses = courses?.filter((course) =>
    course?.title?.toLowerCase()?.includes(searchTerm.toLowerCase())
  );
  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-50 min-h-screen">
        {/* Heading & Add Button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Manage Courses</h2>
          <button
            className="bg-teal-700 text-white px-4 py-2 rounded"
            onClick={() => setIsModalOpen(true)}
          >
            Add Course
          </button>
        </div>

        <AddCoursesModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          courseId={courseId}
          setCourseId={setCourseId}
        />

        {/* Filter Section */}
        <div className="bg-white p-4 rounded shadow">
          <div className="flex flex-wrap gap-2 mb-4">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border px-3 py-2 rounded w-full md:w-auto"
            />
            <button className="border px-3 py-2 rounded">Export</button>
          </div>

          {/* Table Section */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-center text-nowrap">
              <thead className="bg-gray-50">
                <tr className="text-gray-500">
                  <th className="p-2">#</th>
                  <th className="p-2">Image</th>
                  <th className="p-2">Course Name</th>
                  <th className="p-2">Instructor</th>
                  <th className="p-2">Price</th>
                  <th className="p-2">Mode</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {courses?.map((course, index) => (
                  <tr className="border-b" key={course?.id}>
                    <td className="p-2">{index + 1}</td>
                    <td className="p-2">
                      <img
                        src={course?.course_image}
                        alt={course?.course_title}
                        className="w-16 h-16 object-cover rounded"
                      />
                    </td>
                    <td className="p-2">
                      <div className="flex flex-col">
                        <Link
                          to={`/course/${course?.id}`}
                          className="font-semibold text-teal-700"
                        >
                          {course?.course_title}
                        </Link>
                        <span className="text-xs text-gray-500">
                          Created {new Date(course?.created_at).toLocaleDateString()}
                        </span>
                      </div>
                    </td>
                    <td className="p-2">{instructors?.find((instructor) => instructor?.id == course?.instructor_id)?.full_name}</td>
                    <td className="p-2">
                       {course?.course_price}
                    </td>
                    <td className="p-2">
                      <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded">
                        {course?.course_type}
                      </span>
                    </td>
                    <td className="p-2">
                      <span
                        className={`${
                          course.status =="1"  
                            ? "bg-green-100 text-green-600"
                            : "bg-yellow-100 text-yellow-600"
                        } text-xs px-2 py-1 rounded`}
                      >
                        {course?.status==0?"Draft":"Published"}
                      </span>
                    </td>
                    <td className="p-2 flex mt-2 gap-2 text-gray-600 text-base">
                      <Link to={`/course/${course?.id}`} className="text-gray-600">
                        <FaEye />
                      </Link>
                      <button onClick={() => handleEdit(course?.id)}>
                        <FaEdit />
                      </button>
                      <button onClick={() => handleDelete(course?.id)}>
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Section */}
          <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
            <div>Showing 1 to 10 of {courses?.length || 0} entries</div>
            <div className="flex gap-2">
              <button className="border px-2 py-1 rounded">Previous</button>
              <button className="bg-[#047670] text-white px-2 py-1 rounded">1</button>
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

export default ManageCourses;
