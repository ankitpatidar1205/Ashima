
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import logo from "../assets/logo.jfif"; 
import { FaChartLine, FaUserGraduate, FaChalkboardTeacher, FaComments, FaBook, FaClipboardList, FaNewspaper, FaMoneyBillWave, FaCog,
  FaHome, FaRegEye, FaUsers, FaClipboardCheck, FaBox,  FaUserCircle,  FaQuestionCircle, FaCertificate, FaBars, FaChevronUp, FaChevronDown, FaSignOutAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const RoleBasedSidebar = ({isCollapsed = false, setIsCollapsed = () => { },}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeRoute, setActiveRoute] = useState(location.pathname);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) setRole(user.role);
  }, []);

  const handleLogout = () => {
    localStorage.clear()
    navigate("/");  
  };

  useEffect(() => {
    if (!role) return;
    const items = getMenuItems();
    const path = location.pathname;
    setActiveRoute(path);

    const matching = items.find(
      (item) =>  item.dropdown && item.children?.some((child) => child.path === path));

    if (matching) {
      setActiveDropdown(matching.label);
    }
  }, [location.pathname, role]);

  const getMenuItems = () => {
    const iconWrapper = (icon, color) => (
    <span
      className={`w-8 h-8 flex items-center justify-center rounded-lg ${color} text-white`}
    >
      {icon}
    </span>
  );
   switch (role) {
    case "admin":
      return [
        {
          icon: iconWrapper(<FaChartLine />, "bg-blue-500"),
          label: "Dashboard",
          path: "/admin-dashboard",
        },
        {
          icon: iconWrapper(<FaUserGraduate />, "bg-green-500"),
          label: "Manage Students",
          path: "/manage-student",
        },
        {
          icon: iconWrapper(<FaChalkboardTeacher />, "bg-indigo-500"),
          label: "Manage Instructors",
          path: "/manage-instructors",
        },
        {
          icon: iconWrapper(<FaBook />, "bg-yellow-500"),
          label: "Course Category",
          path: "/course-category",
        },
        {
          icon: iconWrapper(<FaComments />, "bg-purple-500"),
          label: "Messages",
          path: "/conversation",
        },
        {
          icon: iconWrapper(<FaBook />, "bg-teal-500"),
          label: "Manage Courses",
          path: "/manage-courses",
        },
        {
          icon: iconWrapper(<FaBook />, "bg-orange-500"),
          label: "Digital Products",
          path: "/admin-digital-product",
        },
        {
          icon: iconWrapper(<FaClipboardList />, "bg-pink-500"),
          label: "Assessments & Certificates",
          dropdown: true,
          children: [
            {
              label: "Templates",
              path: "/CertificateTemplate",
              icon: iconWrapper(<MdOutlineDashboardCustomize />, "bg-blue-400"),
            },
            {
              label: "Certificate Management",
              path: "/CertificateManagemnet",
              icon: iconWrapper(<FaCertificate />, "bg-green-400"),
            },
          ],
        },
        {
          icon: iconWrapper(<FaNewspaper />, "bg-red-500"),
          label: "Blogs & Articles",
          path: "/blog-articles",
        },
        {
          icon: iconWrapper(<FaNewspaper />, "bg-cyan-500"),
          label: "Launch Now",
          path: "/Launch-Now",
        },
        {
          icon: iconWrapper(<FaNewspaper />, "bg-violet-500"),
          label: "Review Manager",
          path: "/ReviewManager",
        },
        {
          icon: iconWrapper(<FaMoneyBillWave />, "bg-emerald-500"),
          label: "Manage Transactions",
          path: "/viewTranscation",
        },
        {
          icon: iconWrapper(<FaCog />, "bg-gray-500"),
          label: "Settings",
          path: "/adminSettings",
        },
      ];

    case "student":
      return [
        {
          icon: iconWrapper(<FaHome />, "bg-blue-500"),
          label: "Dashboard",
          path: "/student-dashboard",
        },
        {
          icon: iconWrapper(<FaBook />, "bg-green-500"),
          label: "All Courses",
          path: "/student-all-Courses",
        },
        {
          icon: iconWrapper(<FaBook />, "bg-indigo-500"),
          label: "My Courses",
          path: "/student-courses",
        },
        {
          icon: iconWrapper(<FaRegEye />, "bg-yellow-500"),
          label: "Digital Products",
          path: "/student-digitalProducts",
        },
        {
          icon: iconWrapper(<FaComments />, "bg-purple-500"),
          label: "Messages",
          path: "/conversation",
        }, 
         {
          icon: iconWrapper(<FaClipboardCheck />, "bg-orange-500"),
          label: "Test Results",
          path: "/Test-Results",
        },
        {
          icon: iconWrapper(<FaUsers />, "bg-teal-500"),
          label: "Certificate",
          path: "/certificate",
        },
      
      ];

    case "instructor":
      return [
        {
          icon: iconWrapper(<FaHome />, "bg-blue-500"),
          label: "Dashboard",
          path: "/instructor-dashboard",
        },
        {
          icon: iconWrapper(<FaBox />, "bg-green-500"),
          label: "My Courses",
          path: "/mycourse",
        },
        {
          icon: iconWrapper(<FaBox />, "bg-indigo-500"),
          label: "Digital Products",
          path: "/digitalproduct",
        },
        {
          icon: iconWrapper(<FaComments />, "bg-purple-500"),
          label: "Messages",
          path: "/conversation",
        },
        {
          icon: iconWrapper(<FaUserCircle />, "bg-orange-500"),
          label: "Profile",
          path: "/instructor-profile",
        },
      ];

    case "superadmin":
      return [
        {
          icon: iconWrapper(<FaHome />, "bg-blue-500"),
          label: "Dashboard",
          path: "/superadmin-dashboard",
        },
        {
          icon: iconWrapper(<FaBook />, "bg-green-500"),
          label: "Plan Package",
          path: "/plan-package",
        },
        {
          icon: iconWrapper(<FaQuestionCircle />, "bg-indigo-500"),
          label: "Plan Request",
          path: "/plan-request",
        },
          {
          icon: iconWrapper(<FaUsers />, "bg-red-500"),
          label: "User Info",
          path: "/user-info",
        },
        {
          icon: iconWrapper(<FaComments />, "bg-purple-500"),
          label: "Messages",
          path: "/conversation",
        },      
      ];

    default:
      return [];
  }
  };

  const menuItems = getMenuItems();

  const home = () => {
    navigate("/")
  }

  return (
    <div className={`fixed z-50 transition-all duration-300 bg-white border-r  h-screen overflow-y-auto ${isCollapsed ? "w-16" : "w-64"}`} >
      <div onClick={() => setIsCollapsed(!isCollapsed)}
        className="flex justify-between items-center p-2 border-b cursor-pointer hover:bg-gray-100">
        {!isCollapsed && <h2 className="text-3xl font-impact" onClick={home}>
       <img src={logo}  alt="Logo"  className="h-[30px] w-[180px] object-contain md:h-[55px] md:w-[200px]" />
        </h2>}
        <FaBars />
      </div>

      {/* Menu */}
      <ul className="flex flex-col">
        {menuItems.map((item, idx) => {
          const isDropdownActive = item.children?.some(
            (child) => child.path === activeRoute
          );

          return (
            <li key={idx}>
              {item.dropdown ? (
                <div  className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-all ${activeDropdown === item.label || isDropdownActive
                      ? "bg-teal-700 text-white font-semibold"  : "hover:bg-teal-100 text-black"}`}
                  onClick={() => {
                    setActiveRoute(""); 
                    if (activeDropdown !== item.label) {
                      setActiveDropdown(item.label);
                    } else {
                      const isChildActive = item.children?.some(
                        (child) => child.path === location.pathname
                      );
                      if (!isChildActive) {
                        setActiveDropdown(null);
                      }}}}>
                  
                  <span  className="text-lg cursor-pointer"
                    onClick={(e) => { e.stopPropagation(); setIsCollapsed((prev) => !prev); }} >
                    {item.icon}
                  </span>

                  {!isCollapsed && (
                    <>
                      <span className="flex-1">{item.label}</span>
                      <span>
                        {activeDropdown === item.label ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown /> )} </span>
                    </>
                  )}
                </div>
              ) : (
                <NavLink to={item.path || "#"}
                  onClick={() => setActiveRoute(item.path)}
                  className={`flex items-center gap-3 px-4 py-3 transition-all cursor-pointer ${activeRoute === item.path
                      ? "bg-teal-700 text-white font-semibold"
                      : "hover:bg-teal-100 text-black"
                    }`} >
                  <span  className="text-lg cursor-pointer"  onClick={(e) => {
                      e.preventDefault();  setIsCollapsed((prev) => !prev);}}>
                    {item.icon}
                  </span>
                  {!isCollapsed && <span className="flex-1">{item.label}</span>}
                </NavLink>
              )}

              {item.dropdown && activeDropdown === item.label && !isCollapsed && (
                <ul className="ml-8 mb-2">
                  {item.children.map((child, cidx) => (
                    <li key={cidx}>
                      <NavLink to={child.path} onClick={() => setActiveRoute(child.path)}
                        className={`block px-4 py-2 mt-1 rounded transition-all ${activeRoute === child.path
                            ? "bg-teal-700 text-white font-semibold"
                            : "text-black hover:bg-teal-100"}`}>
                        {child.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}

        {/* Logout */}
       <li>
  <div className="flex items-center gap-3 px-4 py-3 text-gray-800 cursor-pointer  hover:bg-red-100 hover:text-red-600 transition-all rounded-md" onClick={handleLogout}>
    <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-red-500 text-white">
      <FaSignOutAlt className="text-lg" />
    </span>
    {!isCollapsed && <span>Logout</span>}
  </div>
</li>
      </ul>
    </div>
  );
};

export default RoleBasedSidebar;
