import  { useEffect, useState } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import DashboardLayout from "../../Layout/DashboardLayout";
import { Link } from "react-router-dom";
import { deleteCourse, fetchCourses, publishCourse } from "../../Redux/slices/CourseSlice/CourseSlice";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import AddMyCoursesModal from "./AddMyCoursesModal";
import useCurrency from "../../utils/useCurrency";
const MyCourses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [courseId, setCourseId] = useState(null);
  const [instructorId, setInstructorId] = useState("");
  console.log(instructorId)
  const dispatch = useDispatch();
   const currency = useCurrency();
  const { courses } = useSelector((state) => state.courses);
  console.log(courses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  useEffect(() => {
    const inst_id = localStorage.getItem("is_id");
    if (inst_id) {
      setInstructorId(inst_id);
    }
  }, []);

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
        dispatch(deleteCourse(id));
        Swal.fire("Deleted!", "The course has been deleted.", "success");
        dispatch(fetchCourses());
      }
    });
  };

  const handleEdit = (id) => {
    setCourseId(id);
    setIsModalOpen(true);
  };

  const changeStatus = (id) => {
    dispatch(publishCourse({ id, status: "1" }));
  };

const filteredCourses = courses
  ?.filter((course) =>
    course?.course_title?.toLowerCase().includes(searchTerm.toLowerCase())
  )
  ?.filter((course) => course?.instructor_id === instructorId);


  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Manage Courses</h2>
          <button className="bg-teal-700 text-white px-4 py-2 rounded"
            onClick={() => setIsModalOpen(true)} >
            Add Course
          </button>
        </div>

        <AddMyCoursesModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          courseId={courseId}
          setCourseId={setCourseId}
        />

        <div className="bg-white p-4 rounded shadow">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border px-3 py-2 rounded mb-4 w-full md:w-auto"
          />

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-center">
              <thead className="bg-gray-50">
                <tr className="text-gray-500">
                  <th>#</th>
                  <th>Image</th>
                  <th>Course Name</th>
                  <th>Instructor</th>
                  <th>Price</th>
                  <th>Mode</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
           <tbody>
  {filteredCourses && filteredCourses.length > 0 ? (
    filteredCourses?.map((course, index) => (
      <tr key={course?.id} className="border-b mb-2">
        <td>{index + 1}</td>
        <td>
          <img src={course?.course_image}
            alt={course?.course_title}
            className="w-16 h-14 object-cover rounded"
          />
        </td>
        <td>
          <Link to={`/course/${course?.id}`} className="font-semibold text-teal-700">
            {course?.course_title}
          </Link>
          <div className="text-xs text-gray-500">
            Created {new Date(course?.created_at).toLocaleDateString()}
          </div>
        </td>
        <td>{course?.instructor_details?.full_name}</td>
      <td className="p-2">
                     {currency.symbol}
                     {(parseFloat(course?.course_price) * currency.rate).toFixed(2)}
                    </td>
        <td>
          <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded">
            {course?.course_type}
          </span>
        </td>
        <td>
          <button
            onClick={() => changeStatus(course?.id)}
            disabled={course?.status === "1"}
            className={`text-xs px-2 py-1 rounded ${
              course.status === "1"
                ? "bg-green-100 text-green-600 cursor-not-allowed"
                : "bg-yellow-100 text-yellow-600"
            }`}
          >
            {course?.status === "0" ? "Draft" : "Published"}
          </button>
        </td>
        <td className="flex gap-2 mt-2 justify-center text-gray-600 text-base">
          <Link to={`/course/${course?.id}`}>
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
    ))
  ) : (
    <tr>
      <td colSpan="8" className="text-center text-gray-500 py-6">
        No Courses Available
      </td>
    </tr>
  )}
</tbody>

            </table>
          </div>

          {/* Optional Pagination */}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MyCourses;
