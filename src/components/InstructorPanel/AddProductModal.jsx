import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import {
  addDigitalProduct,
  getAllDigitalProducts,
} from "../../Redux/slices/DigitalProductSlice/DigitalProductSlice";
import { fetchCategories } from "../../Redux/slices/categorySlice/categorySlice";

const AddProductModal = ({ onClose }) => {
  const dispatch = useDispatch();

  const [productTitle, setProductTitle] = useState("");
  const [description, setDescription] = useState("");
  const [regularPrice, setRegularPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [status, setStatus] = useState(0); // 0 for Draft, 1 for Published
  const [productImage, setProductImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const categoryOptions = categories?.map((cat) => ({
    value: cat.id,
    label: cat.category_name,
  }));

  const handleImageChange = (e) => {
    setProductImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting product...");

    const formData = new FormData();
    formData.append("product_title", productTitle);
    formData.append("description", description);
    formData.append("regular_price", regularPrice);
    formData.append("sale_price", salePrice);
    formData.append("status", status);
    if (productImage) {
      formData.append("product_images", productImage);
    }
    if (selectedCategory) {
      formData.append("category_id", selectedCategory.value);
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
                value={productTitle}
                onChange={(e) => setProductTitle(e.target.value)}
                className="border px-3 py-2 w-full rounded mt-1"
              />
            </div>

            <div>
              <label className="text-sm">Category</label>
              <Select
                name="category"
                options={categoryOptions}
                value={selectedCategory}
                onChange={setSelectedCategory}
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
                <option value={0}>Draft</option>
                <option value={1}>Published</option>
              </select>
            </div>
          </div>

          <div className="border border-dashed rounded mt-6 p-6 text-center">
            <p className="text-sm">Upload Product Image</p>
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
