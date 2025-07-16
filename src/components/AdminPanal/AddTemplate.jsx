import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTemplate, fetchTemplates } from "../../Redux/slices/templateSlice/templateSlice";
import { fetchCategories } from "../../Redux/slices/categorySlice/categorySlice";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getStudents } from "../../Redux/slices/StudentSlice/StudentSlice";

const AddTemplateModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [templateName, setTemplateName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [studentId, setStudentId] = useState("");
  const [templateSize, setTemplateSize] = useState("A4 Portrait");
  const [borderStyle, setBorderStyle] = useState("Classic");
  const [certificateContent, setCertificateContent] = useState("");
  const [certificateImage, setCertificateImage] = useState(null);
  const [status, setStatus] = useState("0");

  const { categories } = useSelector((state) => state.categories);
  const { Student } = useSelector((state) => state.Student);
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(getStudents())
  }, [dispatch]);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("template_name", templateName);
    formData.append("category_id", categoryId);
    formData.append("student_id", studentId);
    formData.append("template_size", templateSize);
    formData.append("border_style", borderStyle);
    formData.append("certificate_content", certificateContent);
    formData.append("status", status);
    if (certificateImage) {
      formData.append("certificate", certificateImage);
    }
  
    try {
      await dispatch(addTemplate(formData)).unwrap();
      Swal.fire({
        icon: "success",
        title: "Template Created!",
        text: "Your certificate template has been successfully created.",
        confirmButtonColor: "#047670"
      }).then(() => {
        dispatch(fetchTemplates());   // fetch updated list on success ✅
        onClose();                     // close the modal
        navigate("/CertificateTemplate");
      });
    } catch (error) {
      console.error("Error adding template:", error);
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong while creating the template."
      });
    }
  };
  
  const handleCancel = () => {
   onClose()
  };
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-[600px] max-w-full p-6 rounded-lg relative overflow-y-auto max-h-[90vh]">
        <button  onClick={handleCancel}  className="absolute top-4 left-4 text-gray-500 hover:text-black">
          ← Back
        </button>
        <h2 className="text-2xl font-semibold mb-4 text-center">Add New Template</h2>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-sm font-medium">Template Name</label>
            <input type="text" value={templateName} onChange={(e) => setTemplateName(e.target.value)}
              placeholder="Enter template name" className="w-full border border-gray-300 p-2 rounded mt-1"/>
          </div>

          <div>
            <label className="text-sm font-medium">Category</label>
            <select
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded mt-1"
            >
              <option value="">Select category</option>
              {categories &&
                categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.category_name}
                  </option>
                ))}
            </select>
          </div>
        </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        
          <div>
            <label className="text-sm font-medium">Student</label>
            <select
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded mt-1"
            >
              <option value="">Select Student</option>
              {Student &&
                Student.map((Student) => (
                  <option key={Student.id} value={Student.id}>
                    {Student.name}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-sm font-medium">Template Size</label>
            <select
              value={templateSize}
              onChange={(e) => setTemplateSize(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded mt-1"
            >
              <option>A4 Portrait</option>
              <option>A4 Landscape</option>
              <option>Letter</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">Border Style</label>
            <select
              value={borderStyle}
              onChange={(e) => setBorderStyle(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded mt-1"
            >
              <option>Classic</option>
              <option>Modern</option>
              <option>Minimal</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label className="text-sm font-medium">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded mt-1"
          >
            <option value="0">Pending</option>
            <option value="1">Issued</option>
          </select>
        </div>

        <div className="border border-dashed border-gray-300 rounded p-6 text-center text-gray-500 mb-4 cursor-pointer">
          <input
            type="file"
            accept="image/png, image/jpeg"
            onChange={(e) => setCertificateImage(e.target.files[0])}
            className="hidden"
            id="uploadFile"
          />
          <label htmlFor="uploadFile" className="cursor-pointer block">
            {certificateImage ? (
              certificateImage.name
            ) : (
              <>
                Click to upload or drag and drop
                <br />
                <span className="text-xs">PNG, JPG up to 10MB</span>
              </>
            )}
          </label>
        </div>

        <div className="mb-4">
          <label className="text-sm font-medium">Certificate Content</label>
          <textarea
            value={certificateContent}
            onChange={(e) => setCertificateContent(e.target.value)}
            placeholder="Enter certificate content..."
            className="w-full border border-gray-300 p-2 rounded mt-1 h-28"
          ></textarea>
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={handleCancel}
            className="bg-gray-200 text-sm px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-[#047670] text-white text-sm px-4 py-2 rounded"
          >
            Create Template
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTemplateModal;
