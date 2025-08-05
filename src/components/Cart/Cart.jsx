import React, { useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartItemById, deleteCartItem } from "../../Redux/slices/cartSlice/cartSlice";
import Header from "../../Layout/Header";
import useCurrency from "../../utils/useCurrency";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axiosInstance from "../../utils/axiosInstance";

const Cart = () => {
  const userId = localStorage.getItem("is_id");
  const dispatch = useDispatch();
  const currency = useCurrency();

  useEffect(() => {
    if (userId) {
      dispatch(fetchCartItemById(userId));
    }
  }, [dispatch, userId]);

  const cartItems = useSelector((state) => state.cart.selectedItem?.items || []);
  const totalPrice = useSelector((state) => state.cart.selectedItem?.total || 0);

  const removeItem = async (cartItemId) => {
    try {
      await dispatch(deleteCartItem(cartItemId)).unwrap();
      await dispatch(fetchCartItemById(userId));
    } catch (err) {
      console.error("Failed to delete item:", err);
    }
  };

const handleSavePurchase = async (details) => {
  try {
    const purchaseData = {
      studentId: userId,
      cart_items: cartItems,   // poora cart bhej rahe hain
      paypal_details: details, // PayPal ka complete object
      amount: totalPrice,
    };

    const res = await axiosInstance.post("/payment", purchaseData);
    console.log("Purchase Saved:", res.data);
    alert("✅ Purchase successful and saved to your account!");
  } catch (error) {
    console.error("Error saving purchase:", error);
    alert("⚠️ Payment succeeded but saving failed. Please contact support.");
  }
};


  return (
    <>
      <Header />
      <div className="container-fluid py-2 px-1 px-md-1" style={{ maxWidth: "1300px" }}>
        <div className="mb-4" style={{ marginTop: "100px" }}></div>
        <div className="row align-items-start shadow-lg p-3">
          <div className="p-3">
            <h2 className="fw-bold">Shopping Cart</h2>
          </div>
          <div className="col-lg-8">
            <p className="fw-semibold text-secondary">{cartItems?.length} Course in Cart</p>
            <hr />
            {cartItems?.length === 0 ? (
              <p className="text-center py-4">No items in cart</p>
            ) : (
              cartItems.map((item) => (
                <div key={item?.cart_item_id} className="d-flex flex-wrap gap-3 mb-4 p-3 ">
                  <img
                    src={item?.course_image}
                    alt="Course"
                    className="rounded"
                    style={{ width: "160px", height: "90px", objectFit: "cover" }}
                  />
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between flex-wrap align-items-start mb-2">
                      <div>
                        <h6 className="fw-bold mb-1 text-dark">{item?.course_title}</h6>
                        <p className="text-muted mb-0" style={{ fontSize: "18px" }}>
                          {currency.symbol}{" "}
                          {(parseFloat(item?.course_price) * currency.rate).toFixed(2)}
                        </p>
                      </div>
                      <div
                        className="d-flex flex-column mt-2 mt-md-0 text-white px-2 py-1 rounded"
                        style={{ fontSize: "14px" }}
                      >
                        <span
                          style={{ cursor: "pointer", marginBottom: "8px" }}
                          className="hover-underline"
                          onClick={() => removeItem(item?.cart_item_id)}
                        >
                          <FaTrashAlt className="me-1 text-danger fs-5" /> Remove
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {cartItems?.length !== 0 && (
            <div className="col-lg-4 mt-4 mt-lg-0">
              <h6 className="fw-bold text-dark">Total:</h6>
              <h3 className="fw-bold mb-3 text-dark">₹ {totalPrice}</h3>
              <p className="text-muted" style={{ fontSize: "14px" }}>
                You won't be charged yet
              </p>

              <PayPalScriptProvider options={{
                "client-id": "AfOC2wR18Ro8ob2bgI9vz4tC4vdWfgIfe9OXeu9_clQ8Kw4xXM37Vcg4XWKCzqwUC8SbUUn0FUA0DkAg",
                currency: "USD",
              }}>
                <PayPalButtons
                  style={{ layout: "vertical" }}
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: { value: totalPrice.toString() },
                        },
                      ],
                    });
                  }}
                  onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                      console.log("Payment Details:", details);
                      handleSavePurchase(details);
                    });
                  }}
                  onError={(err) => {
                    console.error("PayPal Checkout Error", err);
                    alert("⚠️ Payment failed. Please try again.");
                  }}
                />
              </PayPalScriptProvider>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
