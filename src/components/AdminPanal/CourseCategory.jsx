import { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import DashboardLayout from "../../Layout/DashboardLayout";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { createCategory, deleteCategory, fetchCategories, editCategory, } from "../../Redux/slices/categorySlice/categorySlice";

const CourseCategory = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [editCategoryId, setEditCategoryId] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const fcmToken = localStorage.getItem('fcmToken')
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  // Delete Category
  const handleDeleteCategory = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#047670",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await dispatch(deleteCategory(id)).unwrap();
          Swal.fire("Deleted!", "Category has been deleted.", "success");
          dispatch(fetchCategories());
        } catch (error) {
          Swal.fire("Failed!", error || "Failed to delete category.", "error");
        }
      }
    });
  };

  // Add Category
  const handleAddCategory = async () => {
    if (!categoryName.trim()) {
      Swal.fire("Error!", "Category name cannot be empty.", "error");
      return;
    }
    try {
      await dispatch(createCategory({ category_name: categoryName, fcmToken })).unwrap();
      setIsAddModalOpen(false);
      setCategoryName("");
      // Swal.fire("Success!", "Category added successfully.", "success");
      dispatch(fetchCategories());
    } catch (error) {
      Swal.fire("Failed!", error || "Failed to add category.", "error");
    }
  };

  // Open Edit Modal
  const openEditModal = (category) => {
    setCategoryName(category.category_name);
    setEditCategoryId(category.id); // ✅ Corrected
    setIsEditModalOpen(true);
  };

  // Update Category
  const handleUpdateCategory = async () => {
    if (!categoryName.trim()) {
      Swal.fire("Error!", "Category name cannot be empty.", "error");
      return;
    }
    try {
      await dispatch(
        editCategory({
          id: editCategoryId,
          updatedData: { category_name: categoryName },
        })
      ).unwrap();

      setIsEditModalOpen(false);
      setCategoryName("");
      setEditCategoryId("");
      Swal.fire("Success!", "Category updated successfully.", "success");
      dispatch(fetchCategories());
    } catch (error) {
      Swal.fire("Failed!", error || "Failed to update category.", "error");
    }
  };

  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Manage Categories</h2>
          <button
            className="bg-[#047670] text-white px-4 py-2 rounded"
            onClick={() => setIsAddModalOpen(true)}
          >
            Add Category
          </button>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <div className="flex flex-wrap gap-2 mb-4">
            <input type="text" placeholder="Search Categories..." value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border px-3 py-2 rounded w-full md:w-auto" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-center text-nowrap">
              <thead className="bg-gray-50">
                <tr className="text-gray-500">
                  <th className="p-2">#</th>
                  <th className="p-2">Category Name</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {categories && categories.length > 0 ? (
                  categories
                    .filter((category) =>
                      category?.category_name?.toLowerCase()?.includes(searchTerm.toLowerCase())
                    )
                    .map((category, index) => (
                      <tr key={category.id} className="border-b">
                        <td className="p-2">{index + 1}</td>
                        <td className="p-2">{category.category_name}</td>
                        <td className="p-2 flex gap-2 justify-center items-center text-gray-600 text-base">
                          <button onClick={() => openEditModal(category)}>
                            <FaEdit />
                          </button>
                          <button
                            onClick={() => handleDeleteCategory(category.id)}
                          >
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    ))
                ) : (
                  <tr>
                    <td colSpan="3" className="text-center py-4 text-gray-500">
                      No category found.
                    </td>
                  </tr>
                )}

              </tbody>
            </table>
          </div>
          {/* Pagination Placeholder */}
          <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
            <div>
              Showing  entries
            </div>
            <div className="flex gap-2">
              <button className="border px-2 py-1 rounded">Previous</button>
              <button className="bg-[#047670] text-white px-2 py-1 rounded">1</button>
              <button className="border px-2 py-1 rounded">2</button>
              <button className="border px-2 py-1 rounded">3</button>
              <button className="border px-2 py-1 rounded">Next</button>
            </div>
          </div>
        </div>

        {/* Add Category Modal */}
        {isAddModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded shadow w-full max-w-sm">
              <h3 className="text-lg font-semibold mb-4">Add New Category</h3>
              <input
                type="text"
                placeholder="Enter category name"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                className="border px-3 py-2 rounded w-full mb-4"
              />
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => {
                    setIsAddModalOpen(false);
                    setCategoryName("");
                  }}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddCategory}
                  className="bg-[#047670] text-white px-4 py-2 rounded"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Edit Category Modal */}
        {isEditModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded shadow w-full max-w-sm">
              <h3 className="text-lg font-semibold mb-4">Edit Category</h3>
              <input
                type="text"
                placeholder="Enter category name"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                className="border px-3 py-2 rounded w-full mb-4"
              />
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => {
                    setIsEditModalOpen(false);
                    setCategoryName("");
                    setEditCategoryId("");
                  }}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdateCategory}
                  className="bg-[#047670] text-white px-4 py-2 rounded"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default CourseCategory;
