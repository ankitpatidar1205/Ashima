import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import { useNavigate } from "react-router-dom";
import { deleteDigitalProduct, getAllDigitalProducts, publishProduct,} from "../../Redux/slices/DigitalProductSlice/DigitalProductSlice";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import AddProductModal from "../InstructorPanel/AddProductModal";
import useCurrency from "../../utils/useCurrency";

const AdminDigitalProducts = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("lowToHigh");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currency = useCurrency();
  const products = useSelector((state) => state.products);




  // Fetch products from Redux store
  useEffect(() => {
    dispatch(getAllDigitalProducts());
  }, [dispatch]);

  // Filter products by search query
  const filteredProducts = products.data?.filter((product) =>
    product?.product_title?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort products by selected sort option
  const sortedProducts = filteredProducts?.sort((a, b) => {
    const aPrice = parseFloat(a.sale_price);
    const bPrice = parseFloat(b.sale_price);
    if (sortOption === "lowToHigh") return aPrice - bPrice;
    if (sortOption === "highToLow") return bPrice - aPrice;
    return 0;
  });

  // Delete product
  const handleDelete = (productId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This product will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteDigitalProduct(productId));
        Swal.fire("Deleted!", "Product has been removed.", "success");
      }
    });
  };

  // Toggle publish/draft status
  const handleToggleStatus = async (productId, currentStatus) => {
    const newStatus = currentStatus === "1" ? "0" : "1";
    await dispatch(publishProduct({ id: productId, status: newStatus }));
    await dispatch(getAllDigitalProducts());
    Swal.fire(
      "Status Updated",
      newStatus === "1" ? "Product is now Published" : "Product is now Draft",
      "success"
    );
  };

  return (
    <DashboardLayout>
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Digital Products</h2>
          <button
            onClick={() => setShowModal(true)}
            className="bg-teal-700 text-white px-4 py-2 rounded"
          >
            + Add New Product
          </button>
        </div>

        {/* Add Product Modal */}
        {showModal && <AddProductModal onClose={() => setShowModal(false)} />}

        {/* Search and Sort */}
        <div className="flex flex-wrap gap-4 mb-4">
          <input
            type="text"
            placeholder="Search products..."
            className="border px-3 py-2 rounded w-72"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            className="border px-3 py-2 rounded"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="lowToHigh">Sort low to high</option>
            <option value="highToLow">Sort high to low</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sortedProducts?.length > 0 ? (
            sortedProducts.map((product) => (
              <div key={product.id} className="border rounded p-4">
                {/* Image */}
                <div className="w-full h-40 bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img
                    src={
                      JSON.parse(product.product_images)?.[0] ||
                      "https://via.placeholder.com/150"
                    }
                    alt={product.product_title}
                    className="object-cover w-full h-full rounded"
                  />
                </div>

                {/* Status Toggle */}
                <div className="flex justify-between mt-2">
                  <span
                    onClick={() =>
                      handleToggleStatus(product.id, product.status)
                    }
                    className={`text-xs px-2 py-1 rounded cursor-pointer ${
                      product.status === "1"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {product.status === "1" ? "Published" : "Draft"}
                  </span>
                </div>

                {/* Product Info */}
                <h3 className="font-semibold mt-2">{product.product_title}</h3>
                <p className="text-sm text-gray-600">
                  {product.description.length > 50
                    ? `${product.description.slice(0, 50)}...`
                    : product.description}
                </p>

                {/* Price */}
             <div className="mt-2 font-semibold">  {currency.symbol}
                {(parseFloat(product.sale_price) * currency.rate).toFixed(2)} </div>
                {/* Action Icons */}
                <div className="flex gap-3 mt-3 text-gray-600 text-lg">
                  <i className="ri-edit-line cursor-pointer" onClick={() =>
                      navigate(`/edit-digital-product/${product.id}`)  } ></i>
                  <i
                    className="ri-eye-line cursor-pointer"
                    onClick={() => navigate(`/product-detail/${product.id}`)}
                  ></i>
                  <i
                    className="ri-delete-bin-line cursor-pointer"
                    onClick={() => handleDelete(product.id)}
                  ></i>
                </div>
              </div>
            ))
          ) : (
            <p>No products available.</p>
          )}
        </div>

        {/* Footer Pagination Controls */}
        <div className="flex justify-between items-center mt-6">
          <span className="text-sm text-gray-600">
            Showing 1-{sortedProducts?.length ?? 0} of{" "}
            {sortedProducts?.length ?? 0} products
          </span>

          <div className="flex gap-2">
            <button className="border px-3 py-1 rounded">{"<"}</button>
            <button className="bg-black text-white px-3 py-1 rounded">1</button>
            <button className="border px-3 py-1 rounded">2</button>
            <button className="border px-3 py-1 rounded">3</button>
            <button className="border px-3 py-1 rounded">{">"}</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDigitalProducts;
