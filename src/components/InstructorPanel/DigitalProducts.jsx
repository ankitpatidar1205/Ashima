import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import AddProductModal from "./AddProductModal";
import { useNavigate } from "react-router-dom";
import { deleteDigitalProduct, getAllDigitalProducts } from "../../Redux/slices/DigitalProductSlice/DigitalProductSlice";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2"; // Import SweetAlert

const DigitalProducts = () => {
  const [showModal, setShowModal] = useState(false);
  const [instructorId, setInstructorId] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // Added search query state
  const [sortOption, setSortOption] = useState("title"); // Added sorting state
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    const instructorid = localStorage.getItem("is_role_id");
    if (instructorid) {
      setInstructorId(instructorid);
    }
  }, []);

  useEffect(() => {
    dispatch(getAllDigitalProducts());
  }, [dispatch]);

  const filteredProducts = products.data?.filter(
    (product) => product.instructor_id === instructorId
  );

  // Filter products based on search query
  const filteredAndSearchedProducts = filteredProducts?.filter((product) =>
    product?.title?.toLowerCase()?.includes(searchQuery.toLowerCase()) 
  );

  const sortedProducts = filteredAndSearchedProducts?.sort((a, b) => {
    if (sortOption === "lowToHigh") {
      return a.sale_price - b.sale_price;
    }
    if (sortOption === "highToLow") {
      return b.sale_price - a.sale_price;
    }
   
    return 0;
  });
  

  const handleDelete =  (productId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
         dispatch(deleteDigitalProduct(productId));
        Swal.fire('Deleted!', 'The product has been deleted.', 'success');
      }
    });
  };

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Digital Products</h2>
          <button
            onClick={() => setShowModal(true)}
            className="bg-teal-700 text-white px-4 py-2 rounded"
          >
            + Add New Product
          </button>
        </div>
        {showModal && <AddProductModal onClose={() => setShowModal(false)} />}
        
        <div className="flex flex-wrap gap-4 mb-4">
        <select
  className="border px-3 py-2 rounded"
  onChange={(e) => setSortOption(e.target.value)}
>
  <option value="lowToHigh">Sort low to high</option>
  <option value="highToLow">Sort high to low</option>
</select>


          <input
            type="text"
            placeholder="Search products..."
            className="border px-3 py-2 rounded w-72"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sortedProducts?.length > 0 ? (
            sortedProducts.map((product) => (
              <div key={product.id} className="border rounded p-4">
                <div className="w-full h-40 bg-gray-300 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-cover w-full h-full rounded"
                  />
                </div>

                <div className="flex justify-between mt-2">
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      product.status === "Published"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {product.status}
                  </span>
                </div>

                <h3 className="font-semibold mt-2">{product.title}</h3>
                <p className="text-sm text-gray-600">{product.description}</p>

                <div className="mt-2 font-semibold">${product.sale_price}</div>

                <div className="flex gap-3 mt-3 text-gray-600 text-lg">
                  <i className="ri-edit-line cursor-pointer"></i>
                  <i
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="ri-eye-line cursor-pointer"
                  ></i>
                  <i
                    onClick={() => handleDelete(product.id)}
                    className="ri-delete-bin-line cursor-pointer"
                  ></i>
                </div>
              </div>
            ))
          ) : (
            <p>No products available.</p>
          )}
        </div>

        <div className="flex justify-between items-center mt-6">
          <span className="text-sm text-gray-600">
            Showing 1-3 of {sortedProducts?.length ?? 0} products
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
