
import { useEffect, useState } from "react";
import { FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const SoftwareNavbar = ({ isCollapsed }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userData, setUserData] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("user", user)
    if (user) setUserData(user)
  }, []);

  const handleLogout = () => {
     localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <div  className={`bg-white shadow-sm px-6 py-3 flex items-center justify-between border-b fixed top-0 z-40 transition-all duration-300 ${isCollapsed
          ? "left-16 w-[calc(100%-4rem)]" : "left-64 w-[calc(100%-16rem)]" }`}>
        {/* Search */}
        <div className="flex items-center w-1/3">
          
        </div>

        <div className="flex items-center space-x-4 relative">
        {(userData?.name || userData?.full_name) && (
  <span className="flex items-center gap-1">
    <span className="text-xl">👏</span> {/* Icon */}
    Hyy, {userData?.name || userData.full_name}
  </span>
)}

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
