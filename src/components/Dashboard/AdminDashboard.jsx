import { useEffect, useState } from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import axiosInstance from "../../utils/axiosInstance";

const AdminDashboard = () => {
  const [dashdata, setData] = useState({});


  useEffect(() => {
    const featchDashboardData = async () => {
      try {
        const responce = await axiosInstance.get(`/admin-dashboard`);
        console.log("response", responce.data.data);
        setData(responce.data.data); // Correct: it's an object
      } catch (error) {
        console.error("Error fetching dashboard data", error);
      }
    };

    featchDashboardData();
  }, []);

  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-50 min-h-screen">
        <h2 className="text-2xl font-semibold mb-6">Dashboard Overview</h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          <div className="bg-white p-4 rounded shadow">
            <p className="text-sm text-gray-500">Total Students</p>
            <h3 className="text-2xl font-semibold mt-1">{dashdata?.totalStudents || 0}</h3>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <p className="text-sm text-gray-500">Active Instructors</p>
            <h3 className="text-2xl font-semibold mt-1">{dashdata?.activeInstructorCount || 0}</h3>
          </div>

       

          <div className="bg-white p-4 rounded shadow">
            <p className="text-sm text-gray-500">Total Courses</p>
            <h3 className="text-2xl font-semibold mt-1">{dashdata?.totalCourses || 0}</h3>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <p className="text-sm text-gray-500">Not Verified Instructors</p>
            <h3 className="text-2xl font-semibold mt-1">{dashdata?.notVerifiedInstructorCount || 0}</h3>
          </div>
             <div className="bg-white p-4 rounded shadow">
            <p className="text-sm text-gray-500">Revenue (MTD)</p>
            <h3 className="text-2xl font-semibold mt-1">_</h3>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold mb-4">Latest Enrollments</h4>
            <ul className="space-y-2 text-sm">
              {dashdata?.recentStudents?.map((student, index) => (
                <li key={index}>
                  <strong>{student.studentName}</strong> <br />
                  {student.courseNames}
                </li>
              ))}
            </ul>
          </div>


          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold mb-4">Notifications</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-blue-500">
                New course approval request from Sarah Wilson
              </li>
              <li className="text-green-500">
                Monthly revenue report is ready
              </li>
              <li className="text-yellow-500">
                5 new student enrollments need review
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold mb-4">Recent Transactions</h4>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500">
                  <th>ID</th>
                  <th>Name</th>
                  <th>Amount</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr>
                  <td>#1234</td>
                  <td>John Smith</td>
                  <td>$299</td>
                  <td>2024-02-20</td>
                </tr>
                <tr>
                  <td>#1235</td>
                  <td>Emily Brown</td>
                  <td>$199</td>
                  <td>2024-02-19</td>
                </tr>
                <tr>
                  <td>#1236</td>
                  <td>Michael Davis</td>
                  <td>$399</td>
                  <td>2024-02-18</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold mb-4">Revenue Analytics</h4>
            <div className="h-40 bg-gray-100 flex items-center justify-center">
              {/* Add your Chart component here */}
              Chart Here
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};




export default AdminDashboard;
