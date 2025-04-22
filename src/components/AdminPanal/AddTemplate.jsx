import React from "react";

const AddTemplateModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-[600px] max-w-full p-6 rounded-lg relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-500 hover:text-black"
        >
          ← Back
        </button>

        <h2 className="text-2xl font-semibold mb-4 text-center">
          Add New Template
        </h2>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-sm font-medium">Template Name</label>
            <input
              type="text"
              placeholder="Enter template name"
              className="w-full border border-gray-300 p-2 rounded mt-1"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Category</label>
            <select className="w-full border border-gray-300 p-2 rounded mt-1">
              <option>Select category</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-sm font-medium">Template Size</label>
            <select className="w-full border border-gray-300 p-2 rounded mt-1">
              <option>A4 Portrait</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">Border Style</label>
            <select className="w-full border border-gray-300 p-2 rounded mt-1">
              <option>Classic</option>
            </select>
          </div>
        </div>

        <div className="border border-dashed border-gray-300 rounded p-6 text-center text-gray-500 mb-4">
          <p>
            Click to upload or drag and drop
            <br />
            <span className="text-xs">PNG, JPG up to 10MB</span>
          </p>
        </div>

        <div className="mb-4">
          <label className="text-sm font-medium">Certificate Content</label>
          <textarea
            placeholder="Enter certificate content..."
            className="w-full border border-gray-300 p-2 rounded mt-1 h-28"
          ></textarea>
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="bg-gray-200 text-sm px-4 py-2 rounded"
          >
            Cancel
          </button>

          <button className="bg-[#047670] text-white text-sm px-4 py-2 rounded">
            Create Template
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTemplateModal;
