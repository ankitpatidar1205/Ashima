import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import {
  getAllDigitalProducts,
  updateDigitalProduct,
} from "../../Redux/slices/DigitalProductSlice/DigitalProductSlice";
import { fetchCategories } from "../../Redux/slices/CategorySlice/CategorySlice";

const EditDigitalProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const products = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);

  const [formData, setFormData] = useState({
    productTitle: "",
    description: "",
    regularPrice: "",
    salePrice: "",
    status: 0,
    selectedCategory: null,
    image: null,
    author: "",
    productType: "",
    publishDate: "",
  });

  const [loading, setLoading] = useState(false); // Track loading state

  // Fetch products & categories on mount
  useEffect(() => {
    dispatch(getAllDigitalProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  const categoryOptions = useMemo(() => {
    return categories?.map((cat) => ({
      value: cat.id,
      label: cat.category_name,
    }));
  }, [categories]);
  
  const product = products?.data?.find((item) => item.id == id);
  
  useEffect(() => {
    if (product && categoryOptions.length) {
      const categoryOption = categoryOptions.find(
        (cat) => cat.value === product.category
      );
  
      setFormData({
        productTitle: product.product_title || "",
        description: product.description || "",
        regularPrice: product.regular_price || "",
        salePrice: product.sale_price || "",
        status: product.status || 0,
        selectedCategory: categoryOption || null,
        image: null,
        author: product.author || "",
        productType: product.product_type || "",
        publishDate: product.publish_date || "",
      });
    }
  }, [product, categoryOptions]);

  // Single handler for all input changes
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // React-select handler
  const handleCategoryChange = (selectedOption) => {
    setFormData((prev) => ({ ...prev, selectedCategory: selectedOption }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent form submission while loading
    if (loading) return;

    const submitData = new FormData();
    submitData.append("product_title", formData.productTitle);
    submitData.append("description", formData.description);
    submitData.append("regular_price", formData.regularPrice);
    submitData.append("sale_price", formData.salePrice);
    submitData.append("status", formData.status);
    submitData.append("category", formData.selectedCategory?.value);
    submitData.append("author", formData.author);
    submitData.append("product_type", formData.productType);
    submitData.append("publish_date", formData.publishDate);

    if (formData.image) {
      submitData.append("product_images", formData.image);
    }

    setLoading(true); // Set loading state to true before dispatch

    // Dispatch the update action and wait for it to complete
    await dispatch(updateDigitalProduct({ id, formData: submitData }));

    setLoading(false); // Reset loading state

    // Navigate to the digital product list after update
    navigate("/digitalproduct");
  };

  const handleCancel = () => {
  navigate("/digitalproduct")
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-2xl p-6 rounded-lg overflow-y-auto max-h-[90vh]">
        <h2 className="text-xl font-semibold mb-6">Edit Digital Product</h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm">Product Title</label>
              <input
                type="text"
                name="productTitle"
                value={formData.productTitle}
                onChange={handleChange}
                className="border px-3 py-2 w-full rounded mt-1"
              />
            </div>

            <div>
              <label className="text-sm">Category</label>
              <Select
                name="selectedCategory"
                options={categoryOptions}
                value={formData.selectedCategory}
                onChange={handleCategoryChange}
                className="w-full mt-1"
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-sm">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="border px-3 py-2 w-full rounded mt-1"
              ></textarea>
            </div>

            <div>
              <label className="text-sm">Regular Price ($)</label>
              <input
                type="text"
                name="regularPrice"
                value={formData.regularPrice}
                onChange={handleChange}
                className="border px-3 py-2 w-full rounded mt-1"
              />
            </div>

            <div>
              <label className="text-sm">Sale Price ($)</label>
              <input
                type="text"
                name="salePrice"
                value={formData.salePrice}
                onChange={handleChange}
                className="border px-3 py-2 w-full rounded mt-1"
              />
            </div>

            <div>
              <label className="text-sm">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="border px-3 py-2 w-full rounded mt-1"
              >
                <option value={0}>Draft</option>
                <option value={1}>Published</option>
              </select>
            </div>

            <div>
              <label className="text-sm">Author</label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                className="border px-3 py-2 w-full rounded mt-1"
              />
            </div>

            <div>
              <label className="text-sm">Product Type</label>
              <input
                type="text"
                name="productType"
                value={formData.productType}
                onChange={handleChange}
                className="border px-3 py-2 w-full rounded mt-1"
              />
            </div>

            <div>
              <label className="text-sm">Publish Date</label>
              <input
                type="date"
                name="publishDate"
                value={formData.publishDate}
                onChange={handleChange}
                className="border px-3 py-2 w-full rounded mt-1"
              />
            </div>
          </div>

          <div className="border border-dashed rounded mt-6 p-6 text-center">
            <p className="text-sm">Upload New Product Image (Optional)</p>
            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="mt-2"
            />
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={handleCancel}
              className="border px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-teal-700 text-white px-4 py-2 rounded"
              disabled={loading} // Disable the button while loading
            >
              {loading ? "Updating..." : "Update Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditDigitalProduct;
