import React, { useState } from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
const OrderDetail = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Dummy order data
  const orders = [
    {
      orderId: "67AB0D6C5",
      name: "test",
      planName: "Platinum",
      price: "$500",
      status: "Success",
      paymentType: "STRIPE",
      date: "11 Feb 2025",
      coupon: "-",
      invoice: "Receipt",
    },
    {
      orderId: "6762BA7",
      name: "Workdo",
      planName: "Platinum",
      price: "$500",
      status: "Success",
      paymentType: "Aamarpay",
      date: "18 Dec 2024",
      coupon: "-",
      invoice: "-",
    },
  ];

  return (
    <DashboardLayout>
    <div className="container p-4">
      {/* Header */}
      <header className="container-fluid bg-white shadow-sm p-3 rounded mb-4">
        <div className="row align-items-center">
          {/* Search Bar */}
          

          {/* User Profile & Logout */}
          <div className="col-md-6 d-flex justify-content-md-end align-items-center mt-2 mt-md-0">
             <h3>Order Details</h3>
             </div>
        </div>
      </header>
      <div className="col-12">
        
        <input
          type="text"
          placeholder="Search..."
          className="form-control mb-2"
          style={{ width: "200px" }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Name</th>
              <th>Plan Name</th>
              <th>Price</th>
              <th>Status</th>
              <th>Payment Type</th>
              <th>Date</th>
              <th>Coupon</th>
              <th>Invoice</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders
              .filter((order) =>
                Object.values(order).some((value) =>
                  value.toLowerCase().includes(searchTerm.toLowerCase())
                )
              )
              .map((order, index) => (
                <tr key={index}>
                  <td>{order.orderId}</td>
                  <td>{order.name}</td>
                  <td>{order.planName}</td>
                  <td>{order.price}</td>
                  <td>{order.status}</td>
                  <td>{order.paymentType}</td>
                  <td>{order.date}</td>
                  <td>{order.coupon}</td>
                  <td>{order.invoice}</td>
                  <td>
                    <button className="btn btn-danger">Refund</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
    </DashboardLayout>
  );
};

export default OrderDetail;
