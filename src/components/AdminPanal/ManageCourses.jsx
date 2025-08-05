import  { useEffect, useState } from "react";
import { FaEye, FaEdit, FaTrash,FaClipboardList } from "react-icons/fa";
import DashboardLayout from "../../Layout/DashboardLayout";
import AddCoursesModal from "./AddCoursesModal";
import { Link } from "react-router-dom";
import { deleteCourse, fetchCourses,publishCourse } from "../../Redux/slices/CourseSlice/CourseSlice";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import useCurrency from "../../utils/useCurrency";
const ManageCourses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [courseId, setCourseId] = useState(null);
  const dispatch = useDispatch();
  const currency = useCurrency();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;


  const { courses } = useSelector((state) => state.courses);
  // console.log(courses)
  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]); 
     
  
   const handleDelete = async (id) => {
   Swal.fire({
    title: "Are you sure?",
    text: "You won’t be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete it!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      await dispatch(deleteCourse(id));
      Swal.fire("Deleted!", "The course has been deleted.", "success");
      await dispatch(fetchCourses());
    }
  });
};


  const handleEdit = (id) => {
    setCourseId(id)
    setIsModalOpen(true)
    
  }; 

const changeStatus = async (id, currentStatus) => {
  const updatedStatus = currentStatus === "1" ? "0" : "1";

  await dispatch(publishCourse({ id, status: updatedStatus }));
  await dispatch(fetchCourses()); // refresh list
};

const filteredCourses = courses?.filter((course) =>
  course?.course_title?.toLowerCase()?.includes(searchTerm.toLowerCase())
);

const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);

const paginatedCourses = filteredCourses.slice(
  (currentPage - 1) * itemsPerPage,
  currentPage * itemsPerPage
);

  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-50 min-h-screen">
        {/* Heading & Add Button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Manage Courses</h2>
          <button  className="bg-teal-700 text-white px-4 py-2 rounded" onClick={() => setIsModalOpen(true)}>
            Add Course
          </button>
        </div>

        <AddCoursesModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} courseId={courseId} setCourseId={setCourseId}/>

        {/* Filter Section */}
        <div className="bg-white p-4 rounded shadow">
          <div className="flex flex-wrap gap-2 mb-4">
            <input type="text" placeholder="Search courses..." value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}  className="border px-3 py-2 rounded w-full md:w-auto"/>
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
               {paginatedCourses?.map((course, index) => (

                  <tr className="border-b" key={course?.id}>
                    <td className="p-2">{index + 1}</td>
                    <td className="p-2">
                      <img src={course?.course_image} alt={course?.course_title} className="w-16 h-16 object-cover rounded"/>
                    </td>
                    <td className="p-2">
                      <div className="flex flex-col">
                        <Link  to={`/course/${course?.id}`}
                          className="font-semibold text-teal-700">  {course?.course_title} </Link>
                        <span className="text-xs text-gray-500">
                          Created {new Date(course?.created_at).toLocaleDateString()}
                        </span>
                      </div>
                    </td>
                    <td className="p-2">{course?.instructor_details?.full_name}</td>
                    <td className="p-2">
                     {currency.symbol}
                     {(parseFloat(course?.course_price) * currency.rate).toFixed(2)}
                    </td>
                    <td className="p-2">
                      <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded">
                        {course?.course_type}</span>
                    </td>
                   <td className="p-2">
            <span className={`${course.status == "1" ? "bg-green-100 text-green-600":"bg-yellow-100 text-yellow-600" } text-xs px-2 py-1 rounded`} >
           <button onClick={() => changeStatus(course?.id, course?.status)}>{course?.status == "0" ? "Draft" : "Published"}   </button>  </span></td>
                    <td className="p-2 flex mt-2 gap-2 text-gray-600 text-base">  
                       <Link to={`/add-test/${course?.id}`} className="text-gray-600">
                         <FaClipboardList />
                      </Link>  
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
  <div>
    Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
    {Math.min(currentPage * itemsPerPage, filteredCourses.length)} of {filteredCourses.length} entries
  </div>
  <div className="flex gap-2">
    <button
      className="border px-2 py-1 rounded"
      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
      disabled={currentPage === 1}
    >
      Previous
    </button>

    {[...Array(totalPages)].map((_, i) => (
      <button
        key={i}
        onClick={() => setCurrentPage(i + 1)}
        className={`px-2 py-1 rounded ${currentPage === i + 1 ? "bg-[#047670] text-white" : "border"}`}
      >
        {i + 1}
      </button>
    ))}

    <button
      className="border px-2 py-1 rounded"
      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
      disabled={currentPage === totalPages}
    >
      Next
    </button>
  </div>
</div>

        </div>
      </div>
    </DashboardLayout>
  );
};

export default ManageCourses;
