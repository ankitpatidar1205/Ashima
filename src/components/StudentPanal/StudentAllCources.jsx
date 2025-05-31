import { useEffect, useState } from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import { Link } from "react-router-dom";
import { fetchCourses } from "../../Redux/slices/CourseSlice/CourseSlice";
import { useDispatch, useSelector } from "react-redux";
import { FaEye } from "react-icons/fa";
import useCurrency from "../../utils/useCurrency";
const StudentAllCources = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
   const currency = useCurrency();
  const { courses } = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const filteredCourses = courses?.filter((course) =>
    course?.course_title?.toLowerCase()?.includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-50 min-h-screen">
        {/* Heading */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">All Courses</h2>
        </div>

        {/* Filter Section */}
        <div className="bg-white p-4 rounded shadow mb-6">
          <div className="flex flex-wrap gap-2 mb-4">
            <input  type="text" placeholder="Search courses..." value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border px-3 py-2 rounded w-full md:w-auto"
            />
          </div>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses?.map((course) => (
            <div  key={course?.id} className="bg-white rounded shadow overflow-hidden hover:shadow-lg transition">
              <img  src={course?.course_image}
                alt={course?.course_title}
                className="w-full h-48 object-cover"/>
              <div className="p-4 flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <Link  to={`/Cource-Detail/${course?.id}`}
                    className="text-lg font-semibold text-teal-700 hover:underline">
                    {course?.course_title}
                  </Link>
                  {/* View Icon */}
                  {/* <Link  to={`/course/${course?.id}`}
                    className="text-teal-700 hover:text-teal-900"  title="View Course" >
                    <FaEye />
                  </Link> */}
                </div>

                <p className="text-sm text-gray-500">
                  Created {new Date(course?.created_at).toLocaleDateString()}
                </p>
<p className="text-gray-700">
  {course.course_description.length > 100
    ? `${course.course_description.substring(0, 100)}...`
    : course.course_description}
</p>
                <p>
                  <span className="font-semibold">Price:</span>  {currency.symbol}
                     {(parseFloat(course?.course_price) * currency.rate).toFixed(2)}
                </p>
                   
                <p>
                  <span className="font-semibold">Mode:</span>{" "}
                  <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded">
                    {course?.course_type}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-8 text-sm text-gray-500">
          <div>
            Showing 1 to {filteredCourses?.length || 0} of {courses?.length || 0} entries
          </div>
          <div className="flex gap-2">
            <button className="border px-2 py-1 rounded">Previous</button>
            <button className="bg-[#047670] text-white px-2 py-1 rounded">1</button>
            <button className="border px-2 py-1 rounded">2</button>
            <button className="border px-2 py-1 rounded">3</button>
            <button className="border px-2 py-1 rounded">Next</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudentAllCources;
