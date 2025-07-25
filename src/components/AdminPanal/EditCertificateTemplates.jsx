import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axiosInstance from "../../utils/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../Redux/slices/categorySlice/categorySlice";
import { updateTemplate } from "../../Redux/slices/templateSlice/templateSlice";

const EditCertificateTemplates = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const { categories } = useSelector((state) => state.categories);
  
  // form states
  const [templateName, setTemplateName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [templateSize, setTemplateSize] = useState("A4 Portrait");
  const [borderStyle, setBorderStyle] = useState("Classic");
  const [certificateContent, setCertificateContent] = useState("");
  const [status, setStatus] = useState("0");
  const [certificateImage, setCertificateImage] = useState(null);

  const fetchTemplateData = async () => {
    try {
      const response = await axiosInstance.get(`/certificate?id=${id}`);
      const data = response.data.data[0];
      if (data) {
        setTemplateName(data.template_name);
        setCategoryId(data.category_id);
        setTemplateSize(data.template_size);
        setBorderStyle(data.border_style);
        setCertificateContent(data.certificate_content);
        setStatus(data.status);
      }
    } catch (error) {
      console.error("Error fetching certificate template:", error);
    }
  };

  useEffect(() => {
    fetchTemplateData();
    dispatch(fetchCategories());
  }, [id]);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("template_name", templateName);
    formData.append("category_id", categoryId);
    formData.append("template_size", templateSize);
    formData.append("border_style", borderStyle);
    formData.append("certificate_content", certificateContent);
    formData.append("status", status);
    if (certificateImage) {
      formData.append("certificate", certificateImage);
    }
  
    try {
      await dispatch(updateTemplate({ id, formData })).unwrap();
      Swal.fire({
        icon: "success",
        title: "Template Updated!",
        text: "Your certificate template has been successfully updated.",
        confirmButtonColor: "#047670",
      }).then(() => {
        navigate("/CertificateTemplate");
      });
    } catch (error) {
      console.error("Error updating template:", error);
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong while updating the template.",
      });
    }
  };
  

  const handleCancel = () => {
    navigate("/CertificateTemplate");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-[600px] max-w-full p-6 rounded-lg relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={handleCancel}
          className="absolute top-4 left-4 text-gray-500 hover:text-black"
        >
          ← Back
        </button>
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Edit Certificate Template
        </h2>

        {/* Form fields with states */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-sm font-medium">Template Name</label>
            <input
              type="text"
              value={templateName}
              onChange={(e) => setTemplateName(e.target.value)}
              placeholder="Enter template name"
              className="w-full border border-gray-300 p-2 rounded mt-1"
            />
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
              <>Click to upload or drag and drop<br /><span className="text-xs">PNG, JPG up to 10MB</span></>
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
            Update Template
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditCertificateTemplates;
