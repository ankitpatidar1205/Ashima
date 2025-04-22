import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '../../Redux/slices/CourseSlice/CourseSlice';
import Select from "react-select";
import { addDigitalProduct, getAllDigitalProducts } from '../../Redux/slices/DigitalProductSlice/DigitalProductSlice';

const AddProductModal = ({ onClose }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [regularPrice, setRegularPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [status, setStatus] = useState("Draft");
  const [image, setImage] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null); // single course
  const [instructor_id, setInstructorId] = useState("");

  const { courses } = useSelector((state) => state.courses);
  useEffect(() => {
    dispatch(fetchCourses());
    const instructorid = localStorage.getItem("is_role_id");
    if (instructorid) {
      setInstructorId(instructorid);
    }
  }, [dispatch]);

  const courseOptions = courses?.map((course) => ({
    value: course.id,
    label: course.title,
  }));

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting product...");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("regular_price", regularPrice);
    formData.append("sale_price", salePrice);
    formData.append("status", status);
    formData.append("instructor_id", instructor_id);
    if (image) {
      formData.append("image", image);
    }
    if (selectedCourse) {
      formData.append("courses", selectedCourse.value); 
    }

   await dispatch(addDigitalProduct(formData));
   await dispatch(getAllDigitalProducts());
    console.log("Product dispatched!");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-2xl p-6 rounded-lg overflow-y-auto max-h-[90vh]">
        <h2 className="text-xl font-semibold mb-6">Add New Digital Product</h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm">Product Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border px-3 py-2 w-full rounded mt-1"
              />
            </div>

            <div>
              <label className="text-sm">Course</label>
              <Select
                name="course"
                options={courseOptions}
                value={selectedCourse}
                onChange={setSelectedCourse}
                className="w-full mt-1"
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-sm">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border px-3 py-2 w-full rounded mt-1"
              ></textarea>
            </div>

            <div>
              <label className="text-sm">Regular Price ($)</label>
              <input
                type="text"
                value={regularPrice}
                onChange={(e) => setRegularPrice(e.target.value)}
                className="border px-3 py-2 w-full rounded mt-1"
              />
            </div>

            <div>
              <label className="text-sm">Sale Price ($)</label>
              <input
                type="text"
                value={salePrice}
                onChange={(e) => setSalePrice(e.target.value)}
                className="border px-3 py-2 w-full rounded mt-1"
              />
            </div>

            <div>
              <label className="text-sm">Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="border px-3 py-2 w-full rounded mt-1"
              >
                <option>Draft</option>
                <option>Published</option>
              </select>
            </div>
          </div>

          <div className="border border-dashed rounded mt-6 p-6 text-center">
            <p className="text-sm">Upload Product Images</p>
            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-2"
            />
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="border px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-teal-700 text-white px-4 py-2 rounded"
            >
              Create Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
