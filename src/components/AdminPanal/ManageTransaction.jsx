import { useEffect, useState } from "react";
import { FaSearch, FaEye, FaTrash } from "react-icons/fa";
import DashboardLayout from "../../Layout/DashboardLayout";
import { Modal, Button, Spinner } from "react-bootstrap";
import axiosInstance from "../../utils/axiosInstance";

const ManageTransaction = () => {
  const [payments, setPayments] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);

  // ✅ Fetch Payments
  const fetchPayments = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.get(`/payment`);
      if (res.data.success) {
        setPayments(res.data.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  const handleShow = (payment) => {
    setSelectedPayment(payment);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  // ✅ Delete Payment & Refresh List
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this transaction?")) {
      return;
    }
    try {
      const response = await axiosInstance.delete(`/payment/${id}`);
      if (response.data.success) {
        alert("Payment deleted successfully!");
        fetchPayments(); // 🔄 Refresh list after delete
      } else {
        alert("Failed to delete payment.");
      }
    } catch (error) {
      console.error("Error deleting payment:", error);
      alert("Error while deleting payment.");
    }
  };

  const filteredPayments = payments.filter((pay) =>
    pay?.student_name?.toLowerCase()?.includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-50 min-h-screen">
        <h2 className="text-2xl font-semibold mb-4">Manage Transactions</h2>

        {/* 🔍 Search Box */}
        <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
          <div className="relative w-full md:w-[350px]">
            <input
              type="text"
              placeholder="Search by student name..."
              className="pl-10 pr-4 py-2 w-full border rounded-lg text-sm focus:outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400 text-sm" />
          </div>
        </div>

        {/* 📌 Transactions Table */}
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          {loading ? (
            <div className="flex justify-center items-center py-10">
              <Spinner animation="border" variant="primary" />
            </div>
          ) : (
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50">
                <tr>
                  {[
                    "Transaction ID",
                    "Student Name",
                    "Amount",
                    "Status",
                    "Date & Time",
                    "Actions",
                  ].map((head) => (
                    <th key={head} className="px-4 py-3">
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {filteredPayments.map((pay, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="px-4 py-3">{pay.paypal_details?.id}</td>
                    <td className="px-4 py-3">{pay.student_name}</td>
                    <td className="px-4 py-3">${pay.amount}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          pay.paypal_details?.status === "COMPLETED"
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {pay.paypal_details?.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      {new Date(pay.created_at).toLocaleString()}
                    </td>
                    <td className="px-4 py-3 flex gap-3 items-center">
                      <FaEye
                        className="text-blue-600 cursor-pointer fs-4"
                        onClick={() => handleShow(pay)}
                      />
                      <FaTrash
                        className="text-red-600 cursor-pointer fs-5"
                        onClick={() => handleDelete(pay.id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* 📌 Modal for Payment Details */}
        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Payment Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedPayment && (
              <>
                <h5>Student: {selectedPayment.student_name}</h5>

                {/* Payer Details */}
                <p>
                  <strong>Payer Name:</strong>{" "}
                  {selectedPayment?.paypal_details?.payer?.name?.given_name}{" "}
                  {selectedPayment?.paypal_details?.payer?.name?.surname}
                </p>
                <p>
                  <strong>Payer Email:</strong>{" "}
                  {selectedPayment.paypal_details.payer.email_address}
                </p>
                <p>
                  <strong>Payer ID:</strong>{" "}
                  {selectedPayment.paypal_details.payer.payer_id}
                </p>

                {/* Merchant Details */}
                <p>
                  <strong>Merchant Email:</strong>{" "}
                  {
                    selectedPayment.paypal_details.purchase_units[0].payee
                      .email_address
                  }
                </p>
                <p>
                  <strong>Merchant ID:</strong>{" "}
                  {
                    selectedPayment.paypal_details.purchase_units[0].payee
                      .merchant_id
                  }
                </p>

                {/* Payment Info */}
                <p>
                  <strong>Status:</strong>{" "}
                  {selectedPayment.paypal_details.status}
                </p>
                <p>
                  <strong>Total Amount:</strong> ${selectedPayment.amount}
                </p>

                {/* Shipping Address */}
                <p>
                  <strong>Shipping Address:</strong>{" "}
                  {
                    selectedPayment.paypal_details.purchase_units[0].shipping
                      .address.address_line_1
                  }
                  ,{" "}
                  {
                    selectedPayment.paypal_details.purchase_units[0].shipping
                      .address.address_line_2
                  }
                  ,{" "}
                  {
                    selectedPayment.paypal_details.purchase_units[0].shipping
                      .address.admin_area_2
                  }
                  ,{" "}
                  {
                    selectedPayment.paypal_details.purchase_units[0].shipping
                      .address.admin_area_1
                  }
                  ,{" "}
                  {
                    selectedPayment.paypal_details.purchase_units[0].shipping
                      .address.postal_code
                  }
                  ,{" "}
                  {
                    selectedPayment.paypal_details.purchase_units[0].shipping
                      .address.country_code
                  }
                </p>

                {/* Courses Purchased */}
                <h6 className="mt-3">Courses Purchased:</h6>
                <table className="w-full text-sm border mt-3">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-3 py-2">Image</th>
                      <th className="px-3 py-2">Title</th>
                      <th className="px-3 py-2">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedPayment.cart_items.map((item) => (
                      <tr key={item.cart_item_id}>
                        <td className="px-3 py-2">
                          <img
                            src={item.course_image}
                            alt={item.course_title}
                            className="w-12 h-10 object-cover rounded"
                          />
                        </td>
                        <td className="px-3 py-2">{item.course_title}</td>
                        <td className="px-3 py-2">${item.course_price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </DashboardLayout>
  );
};

export default ManageTransaction;
