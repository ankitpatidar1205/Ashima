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
  }, []);
  const courses = useSelector((state) => state?.courses?.courses);
  const course1 = courses?.find((course) => course?.id == id);
  const { instructors } = useSelector((state) => state?.instructors);
  const instructor = instructors?.find(
    (instructor) => instructor?.id == course1?.instructor_id
  );
  
  const course = {
    title: "Introduction to Web Development",
    category: "Development",
    mode: "Hybrid",
    price: "$99.99",
    students: "1,234",
    description:
      "A comprehensive course covering HTML, CSS, and JavaScript fundamentals for beginners.",
    instructor: {
      name: "John Smith",
      role: "Senior Web Developer",
      rating: "4.9",
    },
    resources: [
      { name: "Course Syllabus.pdf", icon: "📄" },
      { name: "Code Examples.zip", icon: "📁" },
    ],
    reviews: [
      { name: "Sarah Johnson", comment: "Great course content!", rating: 5 },
    ],
    syllabus: [
      {
        title: "Module 1: HTML Basics",
        points: ["Introduction to HTML", "Basic Structure", "HTML Elements"],
      },
      {
        title: "Module 2: CSS Fundamentals",
        points: ["CSS Selectors", "Box Model", "Flexbox Layout"],
      },
    ],
  };

  return (
    <DashboardLayout>
      {" "}
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="flex justify-between items-center mb-3">
          <h3 className="fw-bold">Course Details</h3>
          <button
            className="d-flex p-2 rounded align-items-center font-semibold
                       text-white bg-teal-700"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft className="me-1" /> Back
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Left Part */}
          <div className="md:col-span-2 space-y-4">
            {/* Info Box */}
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-bold text-lg">{course1.course_title}</h3>

              <div className="flex flex-wrap justify-between text-sm mt-2">
                <div>
                  Category: <b>{course.category}</b>
                </div>
                <div>
                  Course Mode: <b>{course1?.course_type}</b>
                </div>
                <div>
                  Price: <b>{course1?.course_price}</b>
                </div>
                <div>
                  Enrolled Students: <b>{course.students}</b>
                </div>
              </div>

              <p className="mt-4">{course1?.course_description}</p>
            </div>

            {/* Course Content */}
            <div className="bg-white p-4 rounded shadow">
              <h4 className="font-semibold mb-3">Course Content</h4>
              <div className="bg-gray-300 h-52 mb-4 flex justify-center items-center">
                <img
                  src={course1?.course_image}
                  alt="Course Content"
                  className="h-52"
                />
              </div>

              {/* {course.syllabus.map((module, index) => (
                <div key={index} className="border p-3 mb-2 rounded">
                  <h5 className="font-semibold mb-2">{module.title}</h5>
                  <ul className="text-sm list-disc ml-5">
                    {module.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))} */}
              {JSON.parse(course1.course_syllabus).map((module, index) => (
                <div key={index} className="border p-3 mb-2 rounded">
                  <h5 className="font-semibold mb-2">{module?.module_title}</h5>
                  <h7 className="font-semibold mb-2">
                    {module?.module_syllabus}
                  </h7>
                  <ul className="text-sm list-disc ml-5">
                    {/* {module.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))} */}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-4">
            {/* Instructor */}
            <div className="bg-white p-4 rounded shadow">
              <div className="flex items-center gap-3">
                <div className="bg-gray-200 w-12 h-12 rounded-full flex justify-center items-center">
                  <img src={instructor?.profile_image} alt="Instructor" />
                </div>
                <div>
                  <p className="font-bold">{instructor?.full_name}</p>
                  <p className="text-sm">{instructor?.role}</p>
                  <p className="text-yellow-500 text-sm">
                    ⭐ {course.instructor.rating}
                  </p>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="bg-white p-4 rounded shadow">
              <h4 className="font-semibold mb-3">Resources</h4>
              <ul className="space-y-2 text-sm">
                {course.resources.map((item, idx) => (
                  <li key={idx}>
                    {item.icon} {item.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* Student Reviews */}
            <div className="bg-white p-4 rounded shadow">
              <h4 className="font-semibold mb-3">Student Reviews</h4>
              {course.reviews.map((review, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="bg-gray-200 w-10 h-10 rounded-full flex justify-center items-center">
                    Image
                  </div>
                  <div>
                    <p className="font-medium">{review.name}</p>
                    <p className="text-yellow-500 text-sm">
                      ⭐ {review.rating}
                    </p>
                    <p className="text-sm">{review.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CoursesDetails;
