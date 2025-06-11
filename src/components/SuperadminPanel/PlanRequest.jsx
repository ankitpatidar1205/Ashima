import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlanEnquiry } from "../../Redux/slices/planSlice/planeSlice"
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
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch()
  const planFromStore = useSelector((state) => state?.plans?.plansenquiry || []);
  console.log("eeeeeeeeeeeee", planFromStore);

  useEffect(() => {
    dispatch(fetchPlanEnquiry())
  }, [dispatch])


  const filteredPlans = planFromStore.filter((plan) =>
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
              </tr>
            </thead>
            <tbody>
              {planFromStore.map((plan, index) => (
                <tr key={index}>
                  <td>{plan?.name}</td>
                  <td>{plan?.plan_name}</td>
                  <td>{plan?.totalUsers || 5}</td>
                  <td>{plan?.totalCustomers || 10}</td>
                  <td>{plan?.totalVendors || 11}</td>
                  <td>{plan?.totalClients || 8}</td>
                  <td>{plan?.duration}</td>
                  <td>{new Date(plan?.created_at).toLocaleDateString()}</td>

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
