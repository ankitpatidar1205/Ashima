import React, { useState } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
const initialPlans = [
  {
    name: "Workdo",
    planName: "Silver",
    totalUsers: 15,
    totalCustomers: 50,
    totalVendors: 50,
    totalClients: 15,
    duration: "Yearly",
    date: "11 Feb 2025",
  },
  {
    name: "Workdo",
    planName: "Gold",
    totalUsers: 15,
    totalCustomers: 50,
    totalVendors: 50,
    totalClients: 15,
    duration: "Yearly",
    date: "11 Feb 2025",
  },
  {
    name: "Workdo",
    planName: "Diamande",
    totalUsers: 15,
    totalCustomers: 50,
    totalVendors: 50,
    totalClients: 15,
    duration: "Yearly",
    date: "11 Feb 2025",
  },
];

const PlanRequest = () => {
  const [plans, setPlans] = useState(initialPlans);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (index) => {
    const updatedPlans = plans.filter((_, i) => i !== index);
    setPlans(updatedPlans);
  };

  const filteredPlans = plans.filter((plan) =>
    plan.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout>
    <div className="container p-4">
      {/* Header */}
      <header className="container-fluid bg-white shadow-sm p-3 rounded mb-4">
        <div className="row align-items-center">
          {/* Search Bar */}
          <div className="col-md-6">
            <div className="input-group rounded search-bar">
              <input
                type="text"
                className="form-control border-2"
                placeholder="Search..."
                style={{ width: "200px" }}
              />
              <span className="input-group-text bg-transparent border-0">
                <i className="fas fa-search"></i>
              </span>
            </div>
          </div>

          {/* User Profile & Logout */}
          {/* <div className="col-md-6 d-flex justify-content-md-end align-items-center mt-2 mt-md-0">
            <div className="me-4 fw-bold">Superadmin</div>
           
            
          </div> */}
        </div>
      </header>
      <div className="col-12">
        <h2 className="mb-3 ">Plan Request</h2>
        <input
          type="text"
          placeholder="Search..."
          className="form-control mb-2 "
          style={{ width: "200px" }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className=" table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Plan Name</th>
              <th>Total Users</th>
              <th>Total Customers</th>
              <th>Total Vendors</th>
              <th>Total Clients</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredPlans.map((plan, index) => (
              <tr key={index}>
                <td>{plan.name}</td>
                <td>{plan.planName}</td>
                <td>{plan.totalUsers}</td>
                <td>{plan.totalCustomers}</td>
                <td>{plan.totalVendors}</td>
                <td>{plan.totalClients}</td>
                <td>{plan.duration}</td>
                <td>{plan.date}</td>
                <td>
                  <button className="btn btn-warning btn-sm me-2">
                    {/* <i class="fa-solid fa-user-minus"></i> */}
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(index)}
                  >
                   Delete {/* <i className="far fa-trash-alt"></i> */}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredPlans.length === 0 && (
          <p className="text-center text-muted">No matching results found.</p>
        )}
      </div>
    </div>
    </DashboardLayout>
  );
};

export default PlanRequest;
