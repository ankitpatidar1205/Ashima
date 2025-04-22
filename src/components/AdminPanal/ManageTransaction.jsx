import { FaDownload, FaRedo, FaSearch } from "react-icons/fa";
import DashboardLayout from "../../Layout/DashboardLayout";

const ManageTransaction = () => {
  const transactionData = [
    {
      id: "#TRX-2023-001",
      user: "John Doe",
      role: "Student",
      method: "Credit Card",
      amount: "$99.99",
      status: "Success",
      date: "2023-12-01 14:30",
    },
  ];

  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-50 min-h-screen">
        <h2 className="text-2xl font-semibold mb-4">Manage Transactions</h2>

        <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
          <div className="relative w-full md:w-[350px]">
            <input
              type="text"
              placeholder="Search transactions..."
              className="pl-10 pr-4 py-2 w-full border rounded-lg text-sm focus:outline-none"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400 text-sm" />
          </div>

          <div className="flex gap-2">
            <button className="border px-4 py-2 rounded-lg text-sm">
              Filters
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2">
              <FaDownload /> Export
            </button>
          </div>
        </div>

        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50">
              <tr>
                {[
                  "Transaction ID",
                  "User Name",
                  "Role",
                  "Payment Method",
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
              {transactionData.map((item, idx) => (
                <tr key={idx} className="border-b">
                  <td className="px-4 py-3">{item.id}</td>
                  <td className="px-4 py-3">{item.user}</td>
                  <td className="px-4 py-3">{item.role}</td>
                  <td className="px-4 py-3">{item.method}</td>
                  <td className="px-4 py-3">{item.amount}</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-600">
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">{item.date}</td>
                  <td className="px-4 py-3 flex gap-3 items-center">
                    <FaDownload className="text-gray-600 cursor-pointer" />
                    <FaRedo className="text-gray-600 cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="p-4 text-sm flex justify-between items-center">
            <span>Showing 1 to 10 of 50 entries</span>
            <div className="flex gap-2">
              <button className="border px-3 py-1 rounded text-sm">
                Previous
              </button>
              <button className="border px-3 py-1 rounded bg-black text-white text-sm">
                1
              </button>
              <button className="border px-3 py-1 rounded text-sm">2</button>
              <button className="border px-3 py-1 rounded text-sm">3</button>
              <button className="border px-3 py-1 rounded text-sm">Next</button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ManageTransaction;
