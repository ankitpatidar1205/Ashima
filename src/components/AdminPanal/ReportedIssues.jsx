// import React from "react";
// import { FaEye, FaTrash, FaFileExport } from "react-icons/fa";

// const ViewReportedIssues = () => {
//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-semibold">View Reported Issues</h2>

//         <button className="bg-black text-white px-4 py-2 rounded text-sm flex items-center gap-2">
//           <FaFileExport /> Export
//         </button>
//       </div>

//       <div className="bg-white p-4 rounded">
//         <div className="grid grid-cols-6 gap-3 mb-4">
//           <select className="border border-gray-300 p-2 rounded text-sm">
//             <option>All Issue Types</option>
//           </select>

//           <select className="border border-gray-300 p-2 rounded text-sm">
//             <option>All Users</option>
//           </select>

//           <input
//             type="date"
//             className="border border-gray-300 p-2 rounded text-sm"
//           />

//           <input
//             type="date"
//             className="border border-gray-300 p-2 rounded text-sm"
//           />

//           <select className="border border-gray-300 p-2 rounded text-sm">
//             <option>All Status</option>
//           </select>

//           <input
//             type="text"
//             placeholder="Search issues..."
//             className="border border-gray-300 p-2 rounded text-sm col-span-1"
//           />
//         </div>

//         <div className="overflow-x-auto">
//           <table className="w-full text-sm border-collapse">
//             <thead>
//               <tr className="bg-gray-100 text-gray-600 text-left">
//                 <th className="p-2">Issue ID</th>
//                 <th className="p-2">User Name</th>
//                 <th className="p-2">User Role</th>
//                 <th className="p-2">Issue Type</th>
//                 <th className="p-2">Message Preview</th>
//                 <th className="p-2">Reported Date</th>
//                 <th className="p-2">Status</th>
//                 <th className="p-2">Actions</th>
//               </tr>
//             </thead>

//             <tbody>
//               <tr className="border-b">
//                 <td className="p-2">#ISS001</td>
//                 <td className="p-2">John Doe</td>
//                 <td className="p-2">Student</td>
//                 <td className="p-2">Payment</td>
//                 <td className="p-2 truncate max-w-[150px]">
//                   Unable to process payment...
//                 </td>
//                 <td className="p-2">2024-01-20</td>
//                 <td className="p-2">
//                   <span className="bg-yellow-100 text-yellow-600 px-2 py-1 text-xs rounded">
//                     Open
//                   </span>
//                 </td>
//                 <td className="p-2 flex gap-2">
//                   <FaEye className="text-blue-600 cursor-pointer" />
//                   <FaTrash className="text-red-600 cursor-pointer" />
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         <div className="flex justify-between items-center mt-4 text-sm">
//           <span>Showing 1 to 10 of 50 results</span>

//           <div className="flex items-center gap-2">
//             <button className="border border-gray-300 px-2 py-1 rounded">
//               Previous
//             </button>

//             <button className="bg-black text-white px-3 py-1 rounded">1</button>

//             <button className="border border-gray-300 px-3 py-1 rounded">
//               2
//             </button>

//             <button className="border border-gray-300 px-3 py-1 rounded">
//               3
//             </button>

//             <button className="border border-gray-300 px-2 py-1 rounded">
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewReportedIssues;



import React from "react";
import { FaEye, FaTrash, FaFileExport } from "react-icons/fa";
import DashboardLayout from "../../Layout/DashboardLayout";

const ViewReportedIssues = () => {
  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">View Reported Issues</h2>

          <button className="bg-black text-white px-4 py-2 rounded text-sm flex items-center gap-2">
            <FaFileExport /> Export
          </button>
        </div>

        <div className="bg-white p-4 rounded">
          <div className="grid grid-cols-6 gap-3 mb-4">
            <select className="border border-gray-300 p-2 rounded text-sm">
              <option>All Issue Types</option>
            </select>

            <select className="border border-gray-300 p-2 rounded text-sm">
              <option>All Users</option>
            </select>

            <input
              type="date"
              className="border border-gray-300 p-2 rounded text-sm"
            />

            <input
              type="date"
              className="border border-gray-300 p-2 rounded text-sm"
            />

            <select className="border border-gray-300 p-2 rounded text-sm">
              <option>All Status</option>
            </select>

            <input
              type="text"
              placeholder="Search issues..."
              className="border border-gray-300 p-2 rounded text-sm col-span-1"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-600 text-left">
                  <th className="p-2">Issue ID</th>
                  <th className="p-2">User Name</th>
                  <th className="p-2">User Role</th>
                  <th className="p-2">Issue Type</th>
                  <th className="p-2">Message Preview</th>
                  <th className="p-2">Reported Date</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b">
                  <td className="p-2">#ISS001</td>
                  <td className="p-2">John Doe</td>
                  <td className="p-2">Student</td>
                  <td className="p-2">Payment</td>
                  <td className="p-2 truncate max-w-[150px]">
                    Unable to process payment...
                  </td>
                  <td className="p-2">2024-01-20</td>
                  <td className="p-2">
                    <span className="bg-yellow-100 text-yellow-600 px-2 py-1 text-xs rounded">
                      Open
                    </span>
                  </td>
                  <td className="p-2 flex gap-2">
                    <FaEye className="text-blue-600 cursor-pointer" />
                    <FaTrash className="text-red-600 cursor-pointer" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-center mt-4 text-sm">
            <span>Showing 1 to 10 of 50 results</span>

            <div className="flex items-center gap-2">
              <button className="border border-gray-300 px-2 py-1 rounded">
                Previous
              </button>

              <button className="bg-[#047670] text-white px-3 py-1 rounded">
                1
              </button>

              <button className="border border-gray-300 px-3 py-1 rounded">
                2
              </button>

              <button className="border border-gray-300 px-3 py-1 rounded">
                3
              </button>

              <button className="border border-gray-300 px-2 py-1 rounded">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ViewReportedIssues;
