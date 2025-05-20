import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const SuperAdminDashboard = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = document.getElementById("analyticsChart").getContext("2d");
    chartRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "User Growth",
            data: [10, 20, 30, 40, 50, 60, 70],
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 2,
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      chartRef.current.destroy();
    };
  }, []);

  return (
    <div>
      {/* Dashboard Cards */}
      <div className="container mt-4">
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
        <div className="row">
          {[
            { title: "Recent Orders", value: "5" },
            { title: "Total Orders", value: "150" },
            { title: "Active Orders", value: "10" },
            { title: "Total Revenue", value: "$5000" },
          ].map((card, index) => (
            <div className="col-md-3 col-sm-6 col-12 mb-4" key={index}>
              <div className="card h-100">
                <div className="card-body">
                  <h3>{card.title}</h3>
                  <p>{card.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Graph Analytics Section */}
      <div className="container mt-4">
        <h2>Graph Analytics</h2>
        <div className="chart-container" style={{ height: "300px" }}>
          <canvas id="analyticsChart"></canvas>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
