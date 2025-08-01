import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import { FaArrowLeft } from "react-icons/fa";
import { fetchCourses } from "../../Redux/slices/CourseSlice/CourseSlice";
import { useDispatch, useSelector } from "react-redux";

const CoursesDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const courses = useSelector((state) => state?.courses?.courses);
  const coursedata = courses?.find((course) => course?.id == id);

  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold">Course Details</h3>
          <button
            className="flex p-2 rounded items-center font-semibold text-white bg-teal-700"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft className="mr-2" /> Back
          </button>
        </div>
        {coursedata ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Left Part */}
            <div className="md:col-span-2 space-y-4">
              {/* Info Box */}
              <div className="bg-white p-4 rounded shadow">
                <h3 className="font-bold text-lg">{coursedata.course_title}</h3>

                <div className="flex flex-wrap justify-between text-sm mt-2">
                  <div>
                    Category: <b>{coursedata.category_name}</b>
                  </div>
                  <div>
                    Mode: <b>{coursedata.course_type}</b>
                  </div>
                  <div>
                    Price: <b>₹{coursedata.course_price}</b>
                  </div>
                </div>

                <p className="mt-4">{coursedata.course_description}</p>
                <img  src={coursedata.course_image}  alt="Course"  className="h-52 object-cover"  />
              </div>

              {/* Course Image + Syllabus */}
              <div className="bg-white p-4 rounded shadow">
                <h4 className="font-semibold mb-3">Course Content</h4>
                <div className="bg-gray-300 h-52 mb-4 flex justify-center items-center">
                  
                </div>

      {coursedata?.course_syllabus?.map((module, index) => (
  <div key={index}
   className="border border-gray-200 shadow-sm rounded-lg p-4 mb-4 bg-white hover:shadow-md transition-all duration-300" >
    <div>
      <h5 className="text-lg font-semibold text-gray-800 mb-1">{module?.module_title}</h5>
      <p className="text-gray-600">{module?.module_syllabus}</p>
    </div>
     <div className="text-end">
  <button
    className="btn btn-primary"
    onClick={() =>{ 
      localStorage.setItem("title",module?.module_title)
      localStorage.setItem("description",module?.module_syllabus)
 navigate(`/course-content/${module.id || 1}`)}}>
     View
  </button>
</div>
  </div>
))}

              </div>

              {/* Course Video */}
              <div className="bg-white p-4 rounded shadow">
                <h4 className="font-semibold mb-3"> Video</h4>
                <iframe  src={coursedata.course_content_video_link}
                  title="Course Video" className="w-full h-64" allowFullScreen ></iframe>
              </div>

              {/* Test Video */}
              <div className="bg-white p-4 rounded shadow">
                <h4 className="font-semibold mb-3">Preview  Video</h4>
                <video controls className="w-full h-64">
                  <source src={coursedata.test_video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* FAQs */}
              <div className="bg-white p-4 rounded shadow">
                <h4 className="font-semibold mb-3">FAQs</h4>
                {JSON.parse(coursedata.faqs).map((faq, index) => (
                  <div key={index} className="mb-3">
                    <p className="font-semibold">Q: {faq.question}</p>
                    <p>A: {faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Part */}
            <div className="space-y-4">
              {/* Instructor Info */}
              <div className="bg-white p-4 rounded shadow">
                <h4 className="font-semibold mb-3">Instructor</h4>
                <div className="flex items-center gap-3">
                  {coursedata.instructor_details ? (
                    <>
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img
                          src={coursedata?.instructor_details.avatar}
                          alt={coursedata?.instructor_details.full_name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-bold">
                          {coursedata.instructor_details.full_name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {coursedata.instructor_details.email}
                        </p>
                      </div>
                    </>
                  ) : (
                    <p className="text-gray-500">Instructor not assigned</p>
                  )}
                </div>
              </div>

              {/* Course Metadata */}
              <div className="bg-white p-4 rounded shadow">
                <h4 className="font-semibold mb-3">Course Metadata</h4>
                <p>
                  <b>Created At:</b>{" "}
                  {new Date(coursedata.created_at).toLocaleDateString()}
                </p>
                <p>
                  <b>Status:</b>{" "}
                  {coursedata.status === "1" ? "Active" : "Inactive"}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading course details...</p>
        )}
      </div>
    </DashboardLayout>
  );
};

export default CoursesDetails;
