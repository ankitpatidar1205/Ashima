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
      
        <div className="row">
          {[
            { title: "Total Plan", value: "2" },
            { title: "Total User", value: "5" },
            { title: "Active User", value: "2" },
            { title: "Plan Request", value: "2" },
          ].map((card, index) => (
            <div className="col-md-3 col-sm-6 col-12 mb-4" key={index}>
              <div className="card h-100">
                <div className="card-body">
                  <h5>{card.title}</h5>
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
