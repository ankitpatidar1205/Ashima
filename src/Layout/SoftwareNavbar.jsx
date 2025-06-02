
import { useEffect, useState } from "react";
import { FaMoon, FaBell, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const SoftwareNavbar = ({ isCollapsed }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [role, setRole] = useState("");
  const [userData, setUserData] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("user", user)
    if (user) setUserData(user)
  }, []);


  const handleLogout = () => {
    // localStorage.removeItem("token");
    // localStorage.removeItem("user");
     localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <div
        className={`bg-white shadow-sm px-6 py-3 flex items-center justify-between border-b fixed top-0 z-40 transition-all duration-300 ${isCollapsed
          ? "left-16 w-[calc(100%-4rem)]"
          : "left-64 w-[calc(100%-16rem)]"
          }`}
      >
        {/* Search */}
        <div className="flex items-center w-1/3">
          <input type="text" placeholder="Search courses..."
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#047670] placeholder:text-teal-700" />
        </div>

        <div className="flex items-center space-x-4 relative">
          {/* Theme Toggle */}
          {/* <FaMoon className="text-gray-600 cursor-pointer" /> */}
          {/* <span>{userData?.full_name}</span> */}
          {/* Notification Bell */}
          <div className="relative">
            <FaBell
              size={22}
              onClick={() => setNotifOpen(!notifOpen)}
              className="text-gray-600 cursor-pointer"
            />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
            {notifOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 shadow-lg rounded-md z-50">
                <div className="p-4 font-medium border-b dark:border-gray-600">
                  Notifications
                </div>
                <ul className="max-h-60 overflow-y-auto text-sm text-gray-700 dark:text-gray-200">
                  <li className="px-4 py-2 text-black hover:text-gray-100 dark:hover:bg-teal-700">
                    📢 New course added!
                  </li>
                  <li className="px-4 py-2 text-black hover:text-gray-100 dark:hover:bg-teal-700">
                    🎉 You got a badge!
                  </li>
                  <li className="px-4 py-2 text-black hover:text-gray-100 dark:hover:bg-teal-700">
                    🔔 Reminder: Complete your profile
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Profile Dropdown */}
          <div className="relative">
            <img src={userData?.avatar || `https://ui-avatars.com/api/?name=${userData?.name}&background=0D8ABC&color=fff`} alt="avatar"  className="w-8 h-8 rounded-full cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)} />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md z-50">
                <Link to={`/${userData?.role}-profile`}
                  className="flex items-center px-4 py-2 text-black hover:bg-teal-700 hover:text-white">
                  <FaUser className="mr-2" /> My Profile
                </Link>
                <Link to="/change-password" className="flex items-center px-4 py-2 text-black hover:bg-teal-700">
                  <FaCog className="mr-2" /> Change Password
                </Link>
                <button onClick={handleLogout} className="flex items-center px-4 py-2 text-black text-black-600 hover:bg-teal-700">
                  <FaSignOutAlt className="mr-2" /> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SoftwareNavbar;
