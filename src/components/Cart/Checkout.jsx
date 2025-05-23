import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Checkout= () => {
  return (
    <div className="container-fluid py-5 px-4 shadow-lg p-3 " style={{ maxWidth: "1300px" }}>
      <div className="row">
        {/* Left Column */}
        <div className="col-lg-8">
          <h2 className="fw-bold mb-4">Checkout</h2>

          {/* Section 1: Login */}
          <div className="border-bottom pb-4 mb-4">
            <h6 className="fw-bold mb-2">1. Log in or create an account</h6>
            <p style={{ fontSize: "18px" }}>
              A Udemy account is required to access your purchased courses. Please verify that your email address is correct, as we’ll use it to send your order confirmation. By signing up, you agree to our <span className="text-primary">Terms of Use</span> and <span className="text-primary">Privacy Policy</span>.
            </p>
            <div className="mb-3">
              <input type="email" placeholder="Email" className="form-control" />
            </div>
            <div className="d-flex align-item-center  mb-3 gap-2">
              <span className="text-muted" style={{ fontSize: "18px" }}>or</span>
              <button className="btn btn-outline-secondary p-1 px-2"><img src="https://img.icons8.com/color/20/000000/google-logo.png" alt="Google" /></button>
              <button className="btn btn-outline-secondary p-1 px-2"><img src="https://img.icons8.com/ios-filled/20/000000/facebook-new.png" alt="Facebook" /></button>
              <button className="btn btn-outline-secondary p-1 px-2"><img src="https://img.icons8.com/ios-filled/20/000000/mac-os.png" alt="Apple" /></button>
            </div>
            <p className="text-muted" style={{ fontSize: "18px"  }}>No password required</p>
            <button className="btn w-50 text-white fw-semibold" style={{ backgroundColor: "#007681" }}>
              Continue
            </button>
          </div>

          {/* Section 2: Payment */}
          <div className="border-bottom pb-4 mb-4">
            <h6 className="fw-bold mb-2">2. Billing address & Payment method</h6>
            <div className="text-muted">
              <i className="bi bi-lock-fill me-2"></i>Secure checkout
            </div>
          </div>

          {/* Order Details */}
          <h6 className="fw-bold mb-3 ">Order details (1 course)</h6>
          <div className="d-flex align-items-center">
            <img
              src="src/assets/Images/course.jpeg"
              alt="Course"
              className="me-3"
              style={{ width: "80px", height: "50px", objectFit: "cover", borderRadius: "4px" }}
            />
            <div className="flex-grow-1">
              <p className="mb-0 fw-semibold" style={{ fontSize: "18px" }}>
                The Complete Agentic AI Engineering Course (2025)
              </p>
            </div>
            <div className="fw-bold">₹2,049</div>
          </div>
        </div>

        {/* Right Column: Order Summary */}
        <div className="col-lg-4 mt-5 mt-lg-0">
          <div className="bg-light p-4 rounded">
            <h5 className="fw-bold mb-3">Order summary</h5>
            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted">Original Price:</span>
              <span>₹2,049</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between fw-bold fs-5">
              <span>Total (1 course):</span>
              <span>₹2,049</span>
            </div>

            {/* Info Box */}
            <div className="bg-white mt-4 p-3 rounded border">
              <p className="fw-bold mb-1">🔥 Tap into Success Now</p>
              <p className="mb-0 text-muted" style={{ fontSize: "18px" }}>
                Join <strong>100+</strong> people in your country who’ve recently enrolled in this course within last 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
