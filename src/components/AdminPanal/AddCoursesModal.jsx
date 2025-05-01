import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInstructors } from "../../Redux/slices/InstructorSlice/InstructorSlice";
import { createCourse, fetchCourses } from "../../Redux/slices/CourseSlice/CourseSlice";

const AddCoursesModal = ({ isOpen, onClose }) => {
  const [isAdmin, setIsAdmin] = useState("");
  const dispatch = useDispatch();
  const { instructors } = useSelector((state) => state.instructors);

  const [formData, setFormData] = useState({
    course_title: "",
    course_description: "",
    course_type: "",
    instructor_id: "",
    price: "",
    course_image: null,
  });

  useEffect(() => {
    dispatch(getInstructors());
  }, [dispatch]);

  useEffect(() => {
    const admin_id = localStorage.getItem("is_role_id");
    if (admin_id) {
      setIsAdmin(admin_id);
    }
  }, []);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("course_type", formData.course_type);
    data.append("instructor_id", formData.instructor_id);
    data.append("price", formData.price);
    data.append("admin_id", isAdmin);
    if (formData.image) {
      data.append("image", formData.image);
    }

     await  dispatch(createCourse(data));
   await dispatch(fetchCourses());
    onClose(); // Close modal after submit
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-[95%] md:w-[70%] lg:w-[50%] max-h-[90vh] overflow-y-auto p-5 rounded shadow relative">
        <h3 className="text-xl font-bold mb-4">Add New Course</h3>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Course Title */}
          <div>
            <label htmlFor="courseTitle" className="text-sm font-medium mb-1 block">
              Course Title
            </label>
            <input
              id="courseTitle"
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
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
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
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
                id="courseImage"
                type="file"
                accept="image/*"
                onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
                className="block mt-2"
              />
            </div>
          </div>

          {/* Type, Instructor, Price */}
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
                  <option key={instructor.id} value={instructor.id}>
                    {instructor.full_name}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="price" className="text-sm font-medium mb-1 block">
                Course Price
              </label>
              <input
                id="price"
                type="text"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                placeholder="Enter price"
                className="border p-2 rounded w-full"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="border px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button type="submit" className="bg-teal-700 text-white px-4 py-2 rounded">
              Save Course
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
