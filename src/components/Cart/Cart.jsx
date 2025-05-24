import React, { useEffect } from "react";
import { FaStar, FaTrashAlt, FaRegBookmark } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch,useSelector } from "react-redux";
import { fetchCartItemById } from "../../Redux/slices/cartSlice/cartSlice";
const Cart = () => {
  const user_id = localStorage.getItem("is_id");
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchCartItemById(user_id))
  },[])

  const cartItems = useSelector((state)=>state?.cart?.selectedItem?.items)
  console.log(cartItems)
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
          <p className="fw-semibold text-secondary"> {cartItems?.length} Course in Cart</p>
          <hr />

          {cartItems?.map((item) => (
  <div key={item?.id} className="d-flex flex-wrap gap-3 mb-4">
    {/* Course Image */}
    <img
      src={item?.course_image}
      alt="Course"
      className="rounded"
      style={{ width: "160px", height: "90px", objectFit: "cover" }}
    />

    {/* Course Info */}
    <div className="flex-grow-1">
      <div className="d-flex justify-content-between flex-wrap align-items-start mb-2">
        <div>
          <h6 className="fw-bold mb-1 text-dark">{item?.course_title}</h6>
          <p className="text-muted mb-0" style={{ fontSize: "18px" }}>
            Rs {item?.course_price}
          </p>
        </div>

        {/* Actions */}
        <div
          className="d-flex flex-column mt-2 mt-md-0 text-white px-2 py-1 rounded"
          style={{ fontSize: "14px" }}
        >
          <span
            style={{ cursor: "pointer", marginBottom: "8px" }}
            className="hover-underline"
          >
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
))}

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
