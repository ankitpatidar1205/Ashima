import React from "react";
import { FaStar, FaTrashAlt, FaRegBookmark } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Cart = () => {
  return (
    <div className="container-fluid py-2 px-1 px-md-1" style={{ maxWidth: "1300px" }}>
      {/* Page Title */}
      <div className="mb-4">
        <h2 className="fw-bold" >Shopping Cart</h2>
      </div>

      {/* Cart Content */}
      <div className="row align-items-start shadow-lg p-3">
        {/* Left Side: Course Detail */}
        <div className="col-lg-8">
          <p className="fw-semibold text-secondary">1 Course in Cart</p>
          <hr />

          <div className="d-flex flex-wrap gap-3">
            {/* Course Image */}
            <img
              src="src/assets/Images/course.jpeg"
              alt="Course"
              className="rounded"
              style={{ width: "160px", height: "90px", objectFit: "cover" }}
            />

            {/* Course Info */}
            <div className="flex-grow-1">
              <div className="d-flex justify-content-between flex-wrap align-items-start mb-2">
                <div>
                  <h6 className="fw-bold mb-1 text-dark">
                    The Complete Agentic AI Engineering Course (2025)
                  </h6>
                  <p className="text-muted mb-0" style={{ fontSize: "18px" }}>
                    By Ed Donner and 1 other
                  </p>
                </div>

                {/* Actions */}
                <div className="d-flex flex-column mt-2 mt-md-0 text-white px-2 py-1 rounded"
                  style={{ fontSize: "14px" }}>
                  <span style={{ cursor: "pointer", marginBottom: "8px" }} className="hover-underline">
                    <FaTrashAlt className="me-1" /> Remove
                  </span>
                  <span style={{ cursor: "pointer" }} className="hover-underline">
                    <FaRegBookmark className="me-1" /> Save
                  </span>
                </div>
              </div>

              <div className="d-flex align-items-center mb-1">
                <span className="fw-bold text-success me-1">4.8</span>
                <span className="text-warning me-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar size={12} key={i} />
                  ))}
                </span>
                <span className="text-muted" style={{ fontSize: "18px" }}>
                  (1,355 ratings)
                </span>
              </div>

     
            </div>
          </div>
        </div>

        {/* Right Side: Checkout */}
        <div className="col-lg-4 mt-4 mt-lg-0">
          <h6 className="fw-bold text-dark">Total:</h6>
          <h3 className="fw-bold mb-3 text-dark">₹2,049</h3>

          <button
            className="btn w-100 fw-semibold mb-2 text-white"
            style={{ fontSize: "14px", backgroundColor: "#007681" }}
          >
            Proceed to Checkout →
          </button>
          <p className="text-muted" style={{ fontSize: "14px" }}>
            You won't be charged yet
          </p>

          <hr />
          <button
            className="btn w-100 mt-2 fw-semibold"
            style={{
              border: `2px solid #007681`,
              color: "#007681",
              fontSize: "14px"
            }}
          >
            Apply Coupon
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
