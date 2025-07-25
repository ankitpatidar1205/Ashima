import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInstructors } from "../../Redux/slices/InstructorSlice/InstructorSlice";
import { createCourse, fetchCourses, updateCourse } from "../../Redux/slices/CourseSlice/CourseSlice";
import { fetchCategories } from "../../Redux/slices/categorySlice/categorySlice";

const AddCoursesModal = ({ isOpen, onClose, courseId, setCourseId }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const fcmToken = localStorage.getItem('fcmToken')
  // console.log("fcmToken",fcmToken);
  const [formData, setFormData] = useState({
    course_title: "",
    course_description: "",
    course_type: "",
    instructor_id: "",
    course_price: "",
    course_image: null,
    category_id: "",
    course_content_video_link: "",
    test_video: null,
    status: "0",
    fcmToken
  });
  // Initialize course_syllabus with an array of objects
  const [course_syllabus, setCourseSyllabus] = useState([{ module_title: "", module_syllabus: "" }]);
  const [faqs, setFaqs] = useState([{ question: "", answer: "" }]);

  useEffect(() => {
    dispatch(getInstructors());
    dispatch(fetchCategories());
  }, [dispatch]);

  const { instructors } = useSelector((state) => state?.instructors);
  const { categories } = useSelector((state) => state?.categories);
  const { courses } = useSelector((state) => state?.courses);

  useEffect(() => {
    if (courseId) {
      // If we are editing, fetch the course data
      const courseToEdit = courses.find(course => course.id === courseId);
      if (courseToEdit) {
        setFormData({
          course_title: courseToEdit.course_title,
          course_description: courseToEdit.course_description,
          course_type: courseToEdit.course_type,
          instructor_id: courseToEdit.instructor_id,
          course_price: courseToEdit.course_price,
          course_image: courseToEdit.course_image,
          category_id: courseToEdit.category_id,
          course_content_video_link: courseToEdit.course_content_video_link,
          test_video: courseToEdit.test_video,
          status: courseToEdit.status.toString(),

        });
        setCourseSyllabus(courseToEdit.course_syllabus || [{ module_title: "", module_syllabus: "" }]); // Parse the JSON string into an array of objectscourseToEdit.course_syllabus);
        setFaqs(JSON.parse(courseToEdit.faqs) || [{ question: "", answer: "" }]); // Parse the JSON string into an array of objectscourseToEdit.faqs);
      }
    }
  }, [courseId, courses]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
  setLoading(true); // ✅ Start loader here!
    const data = new FormData();
    data.append("course_title", formData.course_title);
    data.append("course_description", formData.course_description);
    data.append("course_type", formData.course_type);
    data.append("instructor_id", formData.instructor_id);
    data.append("course_price", formData.course_price);
    data.append("category_id", formData.category_id);
    data.append("course_content_video_link", formData.course_content_video_link);
    data.append("status", formData.status);
    data.append("fcmToken", fcmToken);
    // Append course_syllabus as an array of objects
    data.append("course_syllabus", JSON.stringify(course_syllabus));

    // Append FAQs as an array of objects
    data.append("faqs", JSON.stringify(faqs));


    data.append("course_image", formData.course_image);


    data.append("test_video", formData.test_video);


    try {
      if (courseId) {
        // Update course if we are in "update" mode
        await dispatch(updateCourse({ id: courseId, formData: data }));
        setCourseId(null)
      } else {
        // Create new course if we are in "add" mode
        await dispatch(createCourse(data));
      }
      await dispatch(fetchCourses());
      onClose(); // Close modal after submit
    } catch (error) {
      console.error("Error submitting course:", error);
    } finally {
      setLoading(false); // stop loader
      // Reset form fields
      setFormData({
        course_title: "",
        course_description: "",
        course_type: "",
        instructor_id: "",
        course_price: "",
        course_image: null,
        category_id: "",
        course_content_video_link: "",
        test_video: null,
        status: "0",
      });
      setCourseId(null)
      setCourseSyllabus([{ module_title: "", module_syllabus: "" }]);
      setFaqs([{ question: "", answer: "" }]);
    }


  };

  // Handle dynamic course_syllabus changes
  const handleCourseSyllabusChange = (index, e) => {
    const newCourseSyllabus = [...course_syllabus];
    newCourseSyllabus[index][e.target.name] = e.target.value;
    setCourseSyllabus(newCourseSyllabus);
  };

  const handleAddModule = () => {
    setCourseSyllabus([...course_syllabus, { module_title: "", module_syllabus: "" }]);
  };

  // Handle dynamic FAQ changes
  const handleFaqChange = (index, e) => {
    const newFaqs = [...faqs];
    newFaqs[index][e.target.name] = e.target.value;
    setFaqs(newFaqs);
  };

  const handleAddFaq = () => {
    setFaqs([...faqs, { question: "", answer: "" }]);
  };
  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      status: e.target.checked ? "1" : "0", // If checked, set to "1", else "0"
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-[95%] md:w-[70%] lg:w-[50%] max-h-[90vh] overflow-y-auto p-5 rounded shadow relative">
        <h3 className="text-xl font-bold mb-4">{courseId ? "Update Course" : "Add New Course"}</h3>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Course Title */}
          <div>
            <label htmlFor="courseTitle" className="text-sm font-medium mb-1 block">
              Course Title
            </label>
            <input
              id="courseTitle"
              type="text"
              value={formData.course_title}
              onChange={(e) => setFormData({ ...formData, course_title: e.target.value })}
              placeholder="Enter course title"
              className="border p-2 rounded w-full"
            />
          </div>

          {/* Course Description */}
          <div>
            <label htmlFor="courseDescription" className="text-sm font-medium mb-1 block">
              Course Description
            </label>
            <textarea
              id="courseDescription"
              value={formData.course_description}
              onChange={(e) => setFormData({ ...formData, course_description: e.target.value })}
              placeholder="Enter course description"
              className="border p-2 rounded w-full"
              rows="3"
            ></textarea>
          </div>

          {/* Course Image */}
          <div>
            <label htmlFor="courseImage" className="text-sm font-medium mb-1 block">
              Course Image
            </label>
            <div className="border border-dashed p-5 rounded text-center">
              <p className="text-sm mb-1">
                Drag and drop your image here or <b>browse files</b>
              </p>
              <input
                id="course_image"
                type="file"
                accept="image/*"
                onChange={(e) => setFormData({ ...formData, course_image: e.target.files[0] })}
                className="block mt-2"
              />
            </div>
          </div>

          {/* Category */}
          <div>
            <label htmlFor="courseCategory" className="text-sm font-medium mb-1 block">
              Select Category
            </label>
            <select
              id="courseCategory"
              value={formData.category_id}
              onChange={(e) => setFormData({ ...formData, category_id: e.target.value })}
              className="border p-2 rounded w-full"
            >
              <option>Select category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.category_name}
                </option>
              ))}
            </select>
          </div>

          {/* Course Type and Instructor */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label htmlFor="courseType" className="text-sm font-medium mb-1 block">
                Course Type
              </label>
              <select
                id="courseType"
                value={formData.course_type}
                onChange={(e) => setFormData({ ...formData, course_type: e.target.value })}
                className="border p-2 rounded w-full"
              >
                <option>Select Type</option>
                <option value="Live">Live</option>
                <option value="HyBrid">HyBrid</option>
                <option value="Recorded">Recorded</option>
              </select>
            </div>

            <div>
              <label htmlFor="instructor" className="text-sm font-medium mb-1 block">
                Instructor
              </label>
              <select
                id="instructor"
                value={formData.instructor_id}
                onChange={(e) => setFormData({ ...formData, instructor_id: e.target.value })}
                className="border p-2 rounded w-full"
              >
                <option>Select Instructor</option>
                {instructors?.map((instructor) => (
                  <option key={instructor?.id} value={instructor.id}>
                    {instructor?.full_name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="price" className="text-sm font-medium mb-1 block">
                Course Price
              </label>
              <input
                id="course_price"
                type="text"
                value={formData.course_price}
                onChange={(e) => setFormData({ ...formData, course_price: e.target.value })}
                placeholder="Enter price"
                className="border p-2 rounded w-full"
              />
            </div>
          </div>

          {/* Course Syllabus */}
          <div>
            <label className="text-sm font-medium mb-1 block">Course Syllabus</label>
            {course_syllabus?.map((module, index) => (
              <div key={index} className="border p-3 rounded space-y-2 mb-3">
                <input
                  type="text"
                  name="module_title"
                  value={module?.module_title}
                  onChange={(e) => handleCourseSyllabusChange(index, e)}
                  placeholder="Module Title"
                  className="border p-2 rounded w-full"
                />
                <textarea
                  name="module_syllabus"
                  value={module?.module_syllabus}
                  onChange={(e) => handleCourseSyllabusChange(index, e)}
                  placeholder="Module description"
                  className="border p-2 rounded w-full"
                  rows="2"
                ></textarea>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddModule}
              className="text-sm text-teal-700 mt-2"
            >
              + Add Module
            </button>
          </div>

          {/* Video Link */}
          <div>
            <label className="text-sm font-medium mb-1 block">
              Course Content - Video Link
            </label>
            <input
              type="text"
              placeholder="Enter video URL"
              className="border p-2 rounded w-full"
              value={formData.course_content_video_link}
              onChange={(e) => setFormData({ ...formData, course_content_video_link: e.target.value })}
            />
          </div>

          {/* Test Video Upload */}
          <div>
            <label className="text-sm font-medium mb-1 block">Test Video</label>
            <div className="border border-dashed p-5 rounded text-center">
              <p className="text-sm mb-1">
                Upload a test video <b>browse files</b>
              </p>
              <input
                type="file"
                accept="video/*"
                onChange={(e) => setFormData({ ...formData, test_video: e.target.files[0] })}
                className="block mt-2"
              />
            </div>
          </div>

          {/* FAQs */}
          <div>
            <label className="text-sm font-medium mb-1 block">FAQs</label>
            {faqs.map((faq, index) => (
              <div key={index} className="border p-3 rounded space-y-2 mb-3">
                <input
                  type="text"
                  name="question"
                  value={faq.question}
                  onChange={(e) => handleFaqChange(index, e)}
                  placeholder="Question"
                  className="border p-2 rounded w-full"
                />
                <input
                  type="text"
                  name="answer"
                  value={faq.answer}
                  onChange={(e) => handleFaqChange(index, e)}
                  placeholder="Answer"
                  className="border p-2 rounded w-full"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddFaq}
              className="text-sm text-teal-700 mt-2"
            >
              + Add FAQ
            </button>
          </div>
          {/* Status */}
          {courseId == null && <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.status === "1"}
              onChange={handleCheckboxChange} // Handle checkbox change
            />
            <label className="text-sm">Active</label>
          </div>}


          {/* Submit and Cancel Buttons */}
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="border px-4 py-2 rounded"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-teal-700 text-white px-4 py-2 rounded flex items-center gap-2"
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                  </svg>
                  Please wait...
                </>
              ) : (
                courseId ? "Update Course" : "Save Course"
              )}
            </button>
          </div>

        </form>

        <button onClick={onClose} className="absolute top-2 right-3 text-gray-500 text-2xl">
          &times;
        </button>
      </div>
    </div>
  );
};

export default AddCoursesModal;
