import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import AddProductModal from "./AddProductModal";
import { useNavigate } from "react-router-dom";
import {
  deleteDigitalProduct,
  getAllDigitalProducts,
  publishProduct,
} from "../../Redux/slices/DigitalProductSlice/DigitalProductSlice";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

const DigitalProducts = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("lowToHigh");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllDigitalProducts());
  }, [dispatch]);

  const filteredProducts = products.data?.filter((product) =>
    product?.product_title?.toLowerCase()?.includes(searchQuery.toLowerCase())
  );

  const sortedProducts = filteredProducts?.sort((a, b) => {
    const aPrice = parseFloat(a.sale_price);
    const bPrice = parseFloat(b.sale_price);
    if (sortOption === "lowToHigh") return aPrice - bPrice;
    if (sortOption === "highToLow") return bPrice - aPrice;
    return 0;
  });

  const handleDelete = (productId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This product will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteDigitalProduct(productId));
        Swal.fire("Deleted!", "Product has been removed.", "success");
      }
    });
  };

  const handleToggleStatus = async (productId, currentStatus) => {
    const newStatus = currentStatus === "1" ? "0" : "1"; // Toggle between 1 (Published) and 0 (Draft)
  
    // Dispatch action to update the product status
   await dispatch(publishProduct({ id: productId, status: newStatus }));
   await dispatch(getAllDigitalProducts());
    // Optionally, show a success alert after updating
    Swal.fire(
      "Status Updated",
      currentStatus === "1" ? "Product is now Draft" : "Product is now Published",
      "success"
    );
  };
  
  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Digital Products</h2>
          <button  onClick={() => setShowModal(true)} className="bg-teal-700 text-white px-4 py-2 rounded">
            + Add New Product </button>
        </div>

        {showModal && <AddProductModal onClose={() => setShowModal(false)} />}

        <div className="flex flex-wrap gap-4 mb-4">
          <input type="text" placeholder="Search products..." className="border px-3 py-2 rounded w-72"  value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}/>
              <select  className="border px-3 py-2 rounded"  value={sortOption}  onChange={(e) => setSortOption(e.target.value)}>
            <option value="lowToHigh">Sort low to high</option>
            <option value="highToLow">Sort high to low</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sortedProducts?.length > 0 ? (
            sortedProducts.map((product) => (
              <div key={product.id} className="border rounded p-4">
                <div className="w-full h-40 bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img src={  JSON.parse(product.product_images)?.[0] ||  "https://via.placeholder.com/150"}
                    alt={product.product_title}  className="object-cover w-full h-full rounded" />
                </div>

                <div className="flex justify-between mt-2">
  <span
    onClick={() => handleToggleStatus(product.id, product.status)} // Add click handler
    className={`text-xs px-2 py-1 rounded cursor-pointer ${
      product.status === "1"
        ? "bg-green-100 text-green-600"
        : "bg-yellow-100 text-yellow-600"
    }`}
  >
    {product.status === "1" ? "Published" : "Draft"}
  </span>
</div>


                <h3 className="font-semibold mt-2">{product.product_title}</h3>
                <p className="text-sm text-gray-600">  {product.description.length > 50 ? `${product.description.slice(0, 50)}...`
                  : product.description}</p>

                <div className="mt-2 font-semibold">${product.sale_price}</div>
                <div className="flex gap-3 mt-3 text-gray-600 text-lg">
                  <i  className="ri-edit-line cursor-pointer"
                    onClick={() => navigate(`/edit-digital-product/${product.id}`)}></i>
                  <i onClick={() => navigate(`/product-detail/${product.id}`)}
                    className="ri-eye-line cursor-pointer" ></i>
                  <i onClick={() => handleDelete(product.id)}
                    className="ri-delete-bin-line cursor-pointer" ></i>
                </div>
              </div>
            ))
          ) : (
            <p>No products available.</p>
          )}
        </div>

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

export default DigitalProducts;
