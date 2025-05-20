 import React, { useState } from "react";
import Swal from "sweetalert2";
import DashboardLayout from "../../Layout/DashboardLayout";
import { useDispatch,useSelector } from "react-redux";

const PlanPackage = () => {
    const dispatch = useDispatch()
  const [plans, setPlans] = useState([
    {
      id: 1,
      planName: "Basic Plan",
      cost: 499,
      duration: "Monthly",
      description: "Perfect for individuals starting out.",
      benefitId: "B101",
      createdAt: "2024-05-20T12:00:00Z",
    },
    {
      id: 2,
      planName: "Pro Plan",
      cost: 1299,
      duration: "Quarterly",
      description: "Great for growing businesses.",
      benefitId: "B102",
      createdAt: "2024-04-18T09:30:00Z",
    },
    {
      id: 3,
      planName: "Enterprise Plan",
      cost: 4999,
      duration: "Yearly",
      description: "Best for large teams with advanced needs.",
      benefitId: "B103",
      createdAt: "2024-03-15T15:45:00Z",
    },
  ]);

  const deletePlan = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      setPlans((prevPlans) => prevPlans.filter((plan) => plan.id !== id));
      Swal.fire("Deleted!", "Plan has been deleted.", "success");
    }
  };

  return (
    <DashboardLayout>
      <div className="container p-4">
        <div style={{display:'flex',justifyContent:'space-between'}}>  <h2 className="text-center mb-4">Plan Packages</h2>
                       <div className="col-md-6 d-flex justify-content-md-end align-items-center mt-2 mt-md-0">
                            <button className="btn btn-outline-dark" onClick={() => setShowModal(true)}>
                                Add
                            </button>
                        </div> 
                        </div>
      
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {plans?.map((plan) => (
            <div className="col" key={plan.id}>
              <div className="card border-0 shadow h-100 p-3 d-flex flex-column">
                <h2 className="text-center">{plan.planName}</h2>
                <div className="card-body flex-grow-1">
                  <h4 className="fw-bold text-center">
                    ₹{plan.cost} <span className="fs-5">/ {plan.duration}</span>
                  </h4>
                  <p className="text-muted text-center">{plan.description}</p>
                  <ul className="list-unstyled text-start">
                    <li>✅ Created At: {new Date(plan.createdAt).toLocaleDateString()}</li>
                    <li>✅ Benefit ID: {plan.benefitId}</li>
                    <li>✅ Plan ID: {plan.id}</li>
                  </ul>
                </div>
                <div className="card-footer bg-white border-0 mt-auto">
                  <button className="btn btn-primary w-100">Get Started Now</button>
                </div>
                <div className="card-footer bg-white border-0 mt-2">
                  <button className="btn btn-danger w-100" onClick={() => deletePlan(plan.id)}>Delete Plan</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PlanPackage;
