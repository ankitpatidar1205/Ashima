import React from "react";

const AddRoleModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-[500px] max-w-full p-6 rounded-lg relative">
        <h2 className="text-2xl font-semibold mb-2">Create New Role</h2>
        <p className="text-sm text-gray-500 mb-4">
          Add a new role name and description
        </p>

        <div className="mb-3">
          <label className="text-sm font-medium">Role Name</label>
          <input
            type="text"
            placeholder="Enter role name"
            className="w-full border border-gray-300 p-2 rounded mt-1"
          />
        </div>

        <div className="mb-3">
          <label className="text-sm font-medium">Description</label>
          <textarea
            placeholder="Enter role description..."
            className="w-full border border-gray-300 p-2 rounded mt-1 h-24"
          ></textarea>
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="bg-gray-200 px-4 py-2 rounded text-sm"
          >
            Cancel
          </button>

          <button className="bg-[#047670] text-white px-4 py-2 rounded text-sm">
            Create Role
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddRoleModal;
