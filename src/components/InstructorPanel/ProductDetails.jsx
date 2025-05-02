import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import { getAllDigitalProducts } from "../../Redux/slices/DigitalProductSlice/DigitalProductSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllDigitalProducts());
  }, [dispatch]);

  // Single product based on id param
  const product = products?.data?.find((data) => data.id == id);

  // Parse images (if available)
  const productImages = product?.product_images
    ? JSON.parse(product.product_images)
    : [];

  console.log("Selected Product:", product);

  return (
    <DashboardLayout>
      <div className="p-6 max-w-5xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 bg-teal-700 p-2 text-sm rounded text-white"
        >
          ← Back
        </button>

        <div className="bg-white p-6 rounded-lg">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="bg-gray-300 w-full lg:w-1/2 h-72 flex items-center justify-center">
              {productImages.length > 0 ? (
                <img
                  src={productImages[0]}
                  alt={product?.product_title}
                  className="object-contain h-full"
                />
              ) : (
                <span>No Image Available</span>
              )}
            </div>

            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-2">
                {product?.product_title}
              </h2>

              <p className="text-gray-500 mb-4">{product?.description}</p>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl font-bold text-green-700">
                  ${product?.sale_price}
                </span>
                <span className="line-through text-gray-400">
                  ${product?.regular_price}
                </span>
              </div>

              <div className="flex gap-4 mb-4">
                <button className="bg-teal-700 text-white px-4 py-2 rounded">
                  Add to Cart
                </button>
                <button className="bg-teal-700 text-white px-4 py-2 rounded">
                  Buy Now
                </button>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <span>🔒 Lifetime Access</span>
                <span>📄 300+ Page PDF</span>
                <span>🎥 50+ Video Lessons</span>
                <span>💻 Source Code Included</span>
              </div>
            </div>
          </div>

          <div className="border-t my-6" />

          {/* Description */}
          <div>
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-gray-600 text-sm">{product?.description}</p>
          </div>

          <div className="border-t my-6" />

          {/* Features / What's Included */}
          <div>
            <h3 className="font-semibold mb-2">What's Included</h3>
            <ul className="list-disc list-inside text-gray-600 text-sm">
              <li>Complete eBook (PDF, EPUB, MOBI)</li>
              <li>50+ Video Tutorials</li>
              <li>Practice Projects & Source Code</li>
              <li>Certificate of Completion</li>
            </ul>
          </div>

          <div className="border-t my-6" />

          {/* Reviews */}
          <div>
            <h3 className="font-semibold mb-2">Customer Reviews</h3>
            <p className="text-yellow-500 mb-1">
              ★★★★★ (4.8/5 from 120 reviews)
            </p>
            <p className="text-xs text-gray-500">
              30-Day Money-Back Guarantee.
            </p>
          </div>

          <div className="border-t my-6" />

          {/* FAQs */}
          <div>
            <h3 className="font-semibold mb-2">Frequently Asked Questions</h3>
            <p className="text-sm mb-1">
              <b>How long do I have access to the course?</b>
            </p>
            <p className="text-gray-600 text-sm mb-3">
              Lifetime access after purchase.
            </p>

            <p className="text-sm mb-1">
              <b>Is the source code included?</b>
            </p>
            <p className="text-gray-600 text-sm">
              Yes, you'll receive all project source code and resources.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProductDetails;
