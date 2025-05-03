import React, { useEffect, useState } from "react";
import { FaDownload, FaEdit, FaTrash, FaSearch } from "react-icons/fa";
import DashboardLayout from "../../Layout/DashboardLayout";
import AddTemplateModal from "./AddTemplate";
import { fetchTemplates, deleteTemplate } from "../../Redux/slices/templateSlice/templateSlice";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

const CertificateTemplates = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const { templates } = useSelector((state) => state.templates);
  console.log(templates);

  useEffect(() => {
    dispatch(fetchTemplates());
  }, [dispatch]);

  // Handle Delete Template
  const handleDeleteTemplate = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This template will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#047670",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteTemplate(id)).then(() => {
          Swal.fire("Deleted!", "Template has been deleted.", "success");
          dispatch(fetchTemplates()); // refetch after delete
        });
      }
    });
  };

  // Filtered Templates based on search
  const filteredTemplates = templates?.filter((item) =>
    item?.template_name?.toLowerCase()?.includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-50 min-h-screen">
        {/* Top Heading */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Certificate Templates</h2>
          <button className="bg-[#047670] text-white px-4 py-2 rounded" onClick={() => setIsModalOpen(true)}>
            + Add New Template
          </button>
          <AddTemplateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>

        {/* Search */}
        <div className="bg-white p-4 rounded shadow mb-4">
          <div className="flex flex-wrap gap-2 mb-6">
            <div className="relative w-full md:w-[40%]">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search templates..."
                className="border px-3 py-2 rounded w-full"
              />
              <FaSearch className="absolute right-3 top-3 text-gray-400" />
            </div>
          </div>

          {/* Card Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {filteredTemplates && filteredTemplates.length > 0 ? (
              filteredTemplates.map((item) => (
                <div key={item.id} className="border rounded overflow-hidden">
                  <div className="bg-gray-200 flex items-center justify-center h-[200px] text-3xl text-gray-400">
                    {item.certificate ? (
                      <img src={item.certificate} alt={item.template_name} className="h-full w-full object-cover" />
                    ) : (
                      "No Image"
                    )}
                  </div>

                  <div className="p-3">
                    <h3 className="font-semibold mb-1">{item.template_name}</h3>

                    <p className="text-xs text-gray-500 mb-1">Category: {item.category_name || "Uncategorized"}</p>
                    <p className="text-xs text-gray-500 mb-1">Size: {item.template_size}</p>
                    <p className="text-xs text-gray-500 mb-1">Border: {item.border_style}</p>
                    <p className="text-xs text-gray-500 mb-3">Status: {item.status === "1" ? "Issued" : "Pending"}</p>

                    {/* Action Buttons */}
                    <div className="flex gap-2 mb-2">
                      <button
                        onClick={() => console.log("edit", item.id)}
                        className="border p-2 rounded text-gray-600 hover:bg-gray-100"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDeleteTemplate(item.id)}
                        className="border p-2 rounded text-gray-600 hover:bg-gray-100"
                      >
                        <FaTrash />
                      </button>
                    </div>

                    <button className="border px-4 py-2 w-full flex justify-center items-center gap-2 text-sm rounded">
                      <FaDownload /> Download PDF
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-gray-500 col-span-full text-center py-8">No templates available.</div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CertificateTemplates;
