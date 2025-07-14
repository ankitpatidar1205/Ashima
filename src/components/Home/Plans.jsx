import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { fetchPlans, createPlanEnquiry } from "../../Redux/slices/planSlice/planeSlice";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom";
const PricingPlans = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const planFromStore = useSelector((state) => state?.plans?.plans || []);
  console.log(planFromStore, "");
  useEffect(() => {
    dispatch(fetchPlans());
    dispatch(fetchPlans());
  }, [dispatch]);

  const [formData, setFormData] = useState({
    name: "",
    plan_name: "",
    duration: "",
    phone: "",
    message: "",
  });
  console.log("formData", formData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.plan_name || !formData.duration || !formData.message || !formData.phone) {
      Swal.fire("All fields are required", "", "warning");
      return;
    }

    dispatch(createPlanEnquiry(formData))
      .unwrap()
      .then(() => {
        Swal.fire("Enquiry submitted successfully", "", "success");
        setShowModal(false);
        setFormData({ name: "", plan_name: "", duration: "", message: "",phone:"" });
      })
      .catch((err) => {
        Swal.fire("Failed to submit enquiry", err || "Unknown error", "error");
      });
  };


  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      {/* Main Card */}
      <div className="text-center mb-16 p-10 bg-gradient-to-r from-[#0f766e] to-[#115e55] text-white shadow-xl rounded-3xl w-full">
        <h2 className="text-4xl font-extrabold">AI is booming. Jobs are transforming</h2>
        <p className="mt-4 text-lg">
          From Zero to AI-Ready — Live, Hybrid, or Video courses. Learn Smarter, Lead Sooner.
        </p>
        {/* <button
          onClick={() => setShowModal(true)}
          className="mt-6 px-6 py-3 bg-white text-[#0f766e] font-semibold rounded-xl hover:bg-gray-200 transition-all shadow-md"
        >
         JOIN NOW
        </button> */}
       <Link to="/signup">
         <button
        
          className="mt-6 px-6 py-3 bg-white text-[#0f766e] font-semibold rounded-xl hover:bg-gray-200 transition-all shadow-md"
        >
         JOIN NOW
        </button>
        </Link>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative">
            <h3 className="text-2xl font-bold mb-4 text-center">Plan Enquiry Form</h3>
            <form className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f766e]"
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f766e]"
              />

              <select
                name="plan_name"
                value={formData.plan_name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f766e]"
              >
                <option value="">Select Plan Name</option>
                {planFromStore?.map((plan) => (
                  <option key={plan.id} value={plan.name}>
                    {plan.name}
                  </option>
                ))}
              </select>

              <select
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f766e]"
              >
                <option value="">Select Plan Type</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f766e]"
                rows="4"
              />
              <button
                type="submit"
                onClick={handleSubmit}
                className="text-center px-4 py-2 bg-[#0f766e] text-white rounded-lg hover:bg-[#115e55]"
              >
                Submit
              </button>


            </form>
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-gray-600 text-2xl hover:text-gray-800"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Plan Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {planFromStore.map((plan, idx) => {
          const isPopular = idx === 1;
          const features = plan.features ?? [];

          return (
            <div
              key={plan.id}
              className={`relative bg-white p-8 rounded-2xl border transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 hover:scale-[1.02] ${isPopular
                ? "border-teal-600 ring-2 ring-teal-500"
                : "border-gray-200"
                }`}
            >
              {isPopular && (
                <span className="absolute top-0 right-0 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-bl-2xl shadow-md">
                  ⭐ Most Popular
                </span>
              )}

              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{plan.name}</h3>
              <p className="text-4xl font-bold text-gray-900">₹{plan.price_monthly}/mo</p>
              <p className="mt-2 text-gray-600">{plan.description}</p>

              <ul className="mt-6 space-y-3 text-gray-700">
                {features.length > 0 ? (
                  features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))
                ) : (
                  <li className="text-sm text-gray-400 italic">No features listed</li>
                )}
              </ul>

              <button
                className={`mt-6 w-full py-3 px-4 rounded-lg text-white font-medium transition-transform hover:scale-[1.02] ${isPopular ? "bg-teal-700 hover:bg-teal-800" : "bg-gray-800 hover:bg-black"
                  }`}
              >
                {isPopular ? "Start Pro Plan" : "Choose Plan"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingPlans;
