 import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import DashboardLayout from "../../Layout/DashboardLayout";
import { createPlan, fetchPlans, deletePlan, updatePlan } from "../../Redux/slices/planSlice/planeSlice";
import { useDispatch, useSelector } from "react-redux";

const PlanPackage = () => {
  const dispatch = useDispatch();

  const planFromStore = useSelector((state) => state?.plans?.plans || []);
  
  const [plans, setPlans] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false); // track add vs edit mode
  const [editPlanId, setEditPlanId] = useState(null);

  const [newPlan, setNewPlan] = useState({
    name: "",
    price_monthly: "",
    price_yearly: "",
    description: "",
  });

  // Load plans from Redux store into local state (optional, depends on usage)
  useEffect(() => {
    dispatch(fetchPlans());
  }, [dispatch]);

  useEffect(() => {
    setPlans(planFromStore);
  }, [planFromStore]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPlan((prev) => ({ ...prev, [name]: value }));
  };

  // Open modal for adding new plan
  const handleAddClick = () => {
    setIsEdit(false);
    setEditPlanId(null);
    setNewPlan({
      name: "",
      price_monthly: "",
      price_yearly: "",
      description: "",
    });
    setShowModal(true);
  };

  // Open modal for editing existing plan
  const handleEdit = (id) => {
    const planToEdit = plans.find((p) => p.id === id);
    if (!planToEdit) return;

    setIsEdit(true);
    setEditPlanId(id);
    setNewPlan({
      name: planToEdit.name || "",
      price_monthly: planToEdit.price_monthly || "",
      price_yearly: planToEdit.price_yearly || "",
      description: planToEdit.description || "",
    });
    setShowModal(true);
  };

  // Add or update plan on modal submit
  const handleSubmit = async () => {
    const { name, price_monthly, price_yearly, description } = newPlan;

    if (!name || !price_monthly || !price_yearly || !description) {
      Swal.fire("Error", "Please fill in all fields", "error");
      return;
    }

    if (isEdit) {
      // Update existing plan
      await dispatch(updatePlan({ id: editPlanId, formData: newPlan }));
      Swal.fire("Success", "Plan updated successfully", "success");
    } else {
      // Create new plan
      await dispatch(createPlan(newPlan));
      Swal.fire("Success", "Plan added successfully", "success");
    }

    // Refresh plan list and close modal
    await dispatch(fetchPlans());
    setShowModal(false);
    setNewPlan({
      name: "",
      price_monthly: "",
      price_yearly: "",
      description: "",
    });
    setIsEdit(false);
    setEditPlanId(null);
  };

  const handleDelete = async (id) => {
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
      await dispatch(deletePlan(id));
      await dispatch(fetchPlans());
      Swal.fire("Deleted!", "Plan has been deleted.", "success");
    }
  };

  return (
    <DashboardLayout>
      <div className="container p-4">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2 className="text-center mb-4">Plan Packages</h2>
          <div className="col-md-6 d-flex justify-content-md-end align-items-center mt-2 mt-md-0">
            <button className="btn btn-outline-dark" onClick={handleAddClick}>
              Add
            </button>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {plans?.map((plan) => (
            <div className="col" key={plan.id}>
              <div className="card border-0 shadow h-100 p-3 d-flex flex-column">
                <h2 className="text-center">{plan?.name}</h2>
                <div className="card-body flex-grow-1">
                  <h4 className="fw-bold text-center">
                    ₹{plan.price_monthly} <span className="fs-5">/ Monthly</span> | ₹
                    {plan.price_yearly} <span className="fs-5">/ Yearly</span>
                  </h4>
                  <p className="text-muted text-center">{plan?.description}</p>
                </div>
                <div className="card-footer bg-white border-0 mt-auto d-flex justify-content-between gap-2">
                  {/* <button className="btn btn-primary w-50">Get Started Now</button> */}
                  <button
                    className="btn btn-success w-32 "
                    onClick={() => handleEdit(plan.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger w-32"
                    onClick={() => handleDelete(plan.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {showModal && (
          <div
            className="modal show fade d-block"
            tabIndex="-1"
            role="dialog"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{isEdit ? "Edit Plan" : "Add New Plan"}</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Plan Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={newPlan.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Price Monthly (₹)</label>
                    <input
                      type="number"
                      className="form-control"
                      name="price_monthly"
                      value={newPlan.price_monthly}
                      onChange={handleChange}
                      required
                      min="0"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Price Yearly (₹)</label>
                    <input
                      type="number"
                      className="form-control"
                      name="price_yearly"
                      value={newPlan.price_yearly}
                      onChange={handleChange}
                      required
                      min="0"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      name="description"
                      value={newPlan?.description}
                      onChange={handleChange}
                      rows={3}
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                  >
                    {isEdit ? "Update Plan" : "Add Plan"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default PlanPackage;
