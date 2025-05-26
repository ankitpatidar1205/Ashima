 import React, { useEffect, useRef, useState } from "react";
import { FaStar, FaTrashAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCartItemById,
  deleteCartItem,
} from "../../Redux/slices/cartSlice/cartSlice";
import Header from "../../Layout/Header";

const Cart = () => {
  const userId = localStorage.getItem("is_id");
  const dispatch = useDispatch();

  // 1) initial fetch (and refetch on userId change)
  useEffect(() => {
    if (userId) {
      dispatch(fetchCartItemById(userId));
    }
  }, [dispatch, userId]);

  const cartItems = useSelector(
    (state) => state.cart.selectedItem?.items || []
  );
  const totalPrice = useSelector(
    (state) => state.cart.selectedItem?.total || 0
  );

  const [showCouponInput, setShowCouponInput] = useState(false);
  const [couponCode, setCouponCode] = useState("");

  const paypalRef = useRef();

  // PayPal button setup
  useEffect(() => {
    // clear any existing buttons
    if (paypalRef.current) paypalRef.current.innerHTML = "";

    if (window.paypal) {
      window.paypal
        .Buttons({
          style: {
            layout: "vertical",
            color: "gold",
            shape: "rect",
            label: "paypal",
          },
          createOrder: (data, actions) =>
            actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "0.01",
                    currency_code: "USD",
                  },
                },
              ],
            }),
          onApprove: (data, actions) =>
            actions.order.capture().then((details) => {
              alert("Payment Complete by " + details.payer.name.given_name);
            }),
        })
        .render(paypalRef.current);
    }
  }, []);

  // 2) remove & re-fetch
  const removeItem = (cartItemId) => {
    dispatch(deleteCartItem(cartItemId))
      .unwrap()
      .then(() => {
        // re-sync UI
        return dispatch(fetchCartItemById(userId));
      })
      .catch((err) => {
        console.error("Failed to delete item:", err);
      });
  };

  return (
    <>

      <Header />

      <div className="container-fluid py-2 px-1 px-md-1" style={{ maxWidth: "1300px" }}>
        {/* Page Title */}
        <div className="mb-4" style={{ marginTop: "100px" }}>

        </div>

        {/* Cart Content */}
        <div className="row align-items-start shadow-lg p-3">
          {/* Left Side: Course Detail */}
          <div className="p-3">
            <h2 className="fw-bold" >Shopping Cart</h2>
          </div>
          <div className="col-lg-8">
            <p className="fw-semibold text-secondary"> {cartItems?.length} Course in Cart</p>
            <hr />

            {cartItems?.map((item) => (
              <div key={item?.id} className="d-flex flex-wrap gap-3 mb-4 p-3 ">
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
                        Rs : {item?.course_price}
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
                        <FaTrashAlt className="me-1 text-danger fs-5" onClick={()=>{removeItem(item?.cart_item_id)}} /> Remove
                      </span>
                      {/* <span style={{ cursor: "pointer" }} className="hover-underline">
                        <FaRegBookmark className="me-1 text-primary" /> Save
                      </span> */}
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-1">
                    <span className="fw-bold text-success me-1">4.8</span>
                    <span className="text-warning me-1 d-flex">
                      {[...Array(5)].map((_, i) => (
                        <FaStar size={12} key={i} />
                      ))}
                    </span>
                    <span className="text-muted" style={{ fontSize: "18px" }}>
                      (1,355 ratings)
                    </span>
                  </div>
                  <hr />
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Checkout */}
          <div className="col-lg-4 mt-4 mt-lg-0">
            <h6 className="fw-bold text-dark">Total:</h6>
            <h3 className="fw-bold mb-3 text-dark">₹ {totalPrice}</h3>


            <p className="text-muted" style={{ fontSize: "14px" }}>
              You won't be charged yet
            </p>

            <hr />
            {!showCouponInput && (
              <button
                className="btn w-100 mt-2 fw-semibold"
                style={{
                  border: `2px solid #007681`,
                  color: "#007681",
                  fontSize: "14px"
                }}
                onClick={() => setShowCouponInput(true)}
              >
                Apply Coupon
              </button>
            )}

            {showCouponInput && (
              <div className="mt-2">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="form-control mb-2"
                  placeholder="Enter coupon code"
                />
                <button
                  className="btn btn-success w-100 fw-semibold"
                  onClick={() => {
                    // Handle coupon application logic here
                    alert(`Coupon applied: ${couponCode}`);
                  }}
                >
                  Submit Coupon
                </button>
              </div>
            )}
            <hr />
            <div ref={paypalRef}
              className="btn w-100 fw-semibold mb-2 text-white"
              style={{ fontSize: "14px", backgroundColor: "#007681" }}
            >
              Proceed to Checkout →
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Cart;
