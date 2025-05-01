// import { useState, useEffect, useMemo } from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import {
//   FaHome,
//   FaBookOpen,
//   FaBox,
//   FaPlus,
//   FaComments,
//   FaChartLine,
//   FaCog,
//   FaUsers,
//   FaSignOutAlt,
//   FaChevronDown,
//   FaChevronUp,
//   FaBars,
//   FaBook,
//   FaChalkboardTeacher,
//   FaClipboardCheck,
// } from "react-icons/fa";

// const RoleBasedSidebar = ({
//   isCollapsed = false,
//   setIsCollapsed = () => {},
// }) => {
//   const location = useLocation();
//   const [role, setRole] = useState("");
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [activeRoute, setActiveRoute] = useState(location.pathname);

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (user) setRole(user.role);
//   }, []);

//   useEffect(() => {
//     if (!role) return; // wait for role to load
//     const items = getMenuItems();
//     const path = location.pathname;

//     const matching = items.find(
//       (item) =>
//         item.dropdown && item.children?.some((child) => child.path === path)
//     );

//     if (matching) {
//       setActiveDropdown(matching.label);
//     }
//   }, [location.pathname, role]);

//   const getMenuItems = () => {
//     switch (role) {
//       case "admin":
//         return [
//           { icon: <FaHome />, label: "Dashboard", path: "/admin-dashboard" },
//           {
//             icon: <FaBookOpen />,
//             label: "My Courses",
//             dropdown: true,
//             children: [
//               { label: "Web Development", path: "/web-dev" },
//               { label: "UI/UX Design", path: "/ui-ux" },
//             ],
//           },
//           { icon: <FaBox />, label: "Digital Products", path: "/products" },
//           {
//             icon: <FaPlus />,
//             label: "Create New Course",
//             path: "/create-course",
//           },
//           { icon: <FaComments />, label: "Messages", path: "/messages" },
//           { icon: <FaChartLine />, label: "Analytics", path: "/analytics" },
//           { icon: <FaCog />, label: "Settings", path: "/settings" },
//         ];
//       case "student":
//         return [
//           { icon: <FaHome />, label: "Dashboard", path: "/student-dashboard" },
//           { icon: <FaBook />, label: "My Courses", path: "/student-courses" },
//           {
//             icon: <FaClipboardCheck />,
//             label: "Assignments",
//             path: "/assignments",
//           },
//           { icon: <FaUsers />, label: "Classmates", path: "/classmates" },
//         ];
//       case "instructor":
//         return [
//           {
//             icon: <FaHome />,
//             label: "Dashboard",
//             path: "/instructor-dashboard",
//           },
//           {
//             icon: <FaBookOpen />,
//             label: "My Courses",
//             dropdown: true,
//             children: [
//               { label: "Web Development", path: "/web-dev" },
//               { label: "UI/UX Design", path: "/ui-ux" },
//             ],
//           },
//           {
//             icon: <FaBox />,
//             label: "Digital Products",
//             path: "/digital",
//           },
//           { icon: <FaPlus />, label: "Create New Course", path: "/newCourse" },
//           // { icon: <FaComments />, label: "Messages" },
//           // { icon: <FaChartLine />, label: "Analytics" },
//           // { icon: <FaCog />, label: "Settings" },

//           // { icon: <FaUsers />, label: "Students", path: "/students" },
//         ];
//       default:
//         return [];
//     }
//   };

//   const menuItems = getMenuItems();
//   // const menuItems = useMemo(() => getMenuItems(), [role]);

//   return (
//     <div
//       className={`fixed z-50 transition-all duration-300 bg-white border-r shadow-md h-screen overflow-y-auto ${
//         isCollapsed ? "w-16" : "w-64"
//       }`}
//     >
//       {/* Top Section */}
//       <div className="flex justify-between items-center p-4 border-b">
//         {!isCollapsed && <h2 className="text-3xl font-impact">AISKILLS</h2>}
//         <button onClick={() => setIsCollapsed(!isCollapsed)}>
//           <FaBars />
//         </button>
//       </div>

//       {/* Menu */}
//       <ul className="flex flex-col">
//         {menuItems.map((item, idx) => (
//           <li key={idx}>
//             {item.dropdown ? (
//               <div
//                 className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-all ${
//                   activeDropdown === item.label
//                     ? "bg-teal-700 text-white font-semibold"
//                     : "hover:bg-teal-100 text-black"
//                 }`}
//                 // onClick={() =>
//                 //   setActiveDropdown(
//                 //     activeDropdown === item.label ? null : item.label
//                 //   )
//                 // }

//                 onClick={() => {
//                   // Allow toggle only if it's not already active from route
//                   if (activeDropdown !== item.label) {
//                     setActiveDropdown(item.label);
//                   } else {
//                     // Prevent collapsing if one of its child is active
//                     const currentPath = location.pathname;
//                     const isChildActive = item.children?.some(
//                       (child) => child.path === currentPath
//                     );
//                     if (!isChildActive) {
//                       setActiveDropdown(null);
//                     }
//                   }
//                 }}
//               >
//                 <span className="text-lg">{item.icon}</span>
//                 {!isCollapsed && (
//                   <>
//                     <span className="flex-1">{item.label}</span>
//                     <span>
//                       {activeDropdown === item.label ? (
//                         <FaChevronUp />
//                       ) : (
//                         <FaChevronDown />
//                       )}
//                     </span>
//                   </>
//                 )}
//               </div>
//             ) : (
//               <NavLink
//                 to={item.path || "#"}
//                 onClick={() => setActiveRoute(item.path)} // ✅ Add this
//                 className={({ isActive }) =>
//                   `flex items-center gap-3 px-4 py-3 transition-all cursor-pointer ${
//                     isActive
//                       ? "bg-teal-700 text-white font-semibold"
//                       : "hover:bg-teal-100 text-black"
//                   }`
//                 }
//               >
//                 <span className="text-lg">{item.icon}</span>
//                 {!isCollapsed && <span className="flex-1">{item.label}</span>}
//               </NavLink>
//             )}

//             {/* Dropdown Children */}
//             {item.dropdown && activeDropdown === item.label && !isCollapsed && (
//               <ul className="ml-8 mb-2">
//                 {item.children.map((child, cidx) => (
//                   <li key={cidx}>
//                     <NavLink
//                       to={child.path}
//                       onClick={() => {
//                         setActiveRoute(""); // ✅ Clear previous active
//                         if (activeDropdown !== item.label) {
//                           setActiveDropdown(item.label);
//                         } else {
//                           const currentPath = location.pathname;
//                           const isChildActive = item.children?.some(
//                             (child) => child.path === currentPath
//                           );
//                           if (!isChildActive) {
//                             setActiveDropdown(null);
//                           }
//                         }
//                       }}
//                       className={({ isActive }) =>
//                         `block px-4 py-2 rounded transition-all ${
//                           isActive
//                             ? "bg-teal-700 text-white font-semibold"
//                             : "text-black hover:bg-teal-100"
//                         }`
//                       }
//                     >
//                       {child.label}
//                     </NavLink>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}

//         {/* Logout */}
//         <li>
//           <div
//             className="flex items-center gap-3 px-4 py-3 text-gray-800 cursor-pointer hover:bg-red-100 hover:text-red-600 transition-all"
//             onClick={() => {
//               localStorage.removeItem("user");
//               window.location.href = "/login";
//             }}
//           >
//             <FaSignOutAlt className="text-lg" />
//             {!isCollapsed && <span>Logout</span>}
//           </div>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default RoleBasedSidebar;

import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MdOutlineDashboardCustomize } from "react-icons/md";

import {
  FaHome,
  FaBookOpen,
  FaBox,
  FaPlus,
  FaComments,
  FaNewspaper,
  FaCog,
  FaUsers,
  FaSignOutAlt,
  FaChevronDown,
  FaChevronUp,
  FaBars,
  FaBook,
  FaChalkboardTeacher,
  FaRegEye,
  FaCertificate,
  FaMoneyBill,
  FaCalendarAlt,
  FaQuestionCircle,
  FaStar,
  FaUserCircle,
  FaClipboardCheck,
  FaChartLine,
  FaUserGraduate,
  FaFlag,
  FaMoneyBillWave,
  FaClipboardList,
  FaUserCog,
} from "react-icons/fa";

const RoleBasedSidebar = ({
  isCollapsed = false,
  setIsCollapsed = () => {},
}) => {
  const location = useLocation();
  const [role, setRole] = useState("");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeRoute, setActiveRoute] = useState(location.pathname);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) setRole(user.role);
  }, []);

  useEffect(() => {
    if (!role) return;
    const items = getMenuItems();
    const path = location.pathname;
    setActiveRoute(path); // Always track active route

    const matching = items.find(
      (item) =>
        item.dropdown && item.children?.some((child) => child.path === path)
    );

    if (matching) {
      setActiveDropdown(matching.label);
    }
  }, [location.pathname, role]);

  const getMenuItems = () => {
    switch (role) {
      case "admin":
        return [
          {
            icon: <FaChartLine />,
            label: "Dashboard",
            path: "/admin-dashboard",
          },

          {
            icon: <FaUserGraduate />,
            label: "Manage Students",
            path: "/manage-student",
          },

          {
            icon: <FaChalkboardTeacher />,
            label: "Manage Instructors",
            path: "/manage-instructors",
          },
          {
            icon: <FaChalkboardTeacher />,
            label: "Course Category",
            path: "/course-category",
          },
          {
            icon: <FaBook />,
            label: "Manage Courses",
            path: "/manage-courses",
          },

          {
            icon: <FaClipboardList />,
            label: "Assessments & Certificates",
            dropdown: true,
            children: [
              {
                label: "View Assessments",
                path: "/ViewAssessments",
                icon: <FaRegEye />,
              },
              {
                label: "Templates",
                path: "/CertificateTemplate",
                icon: <MdOutlineDashboardCustomize />,
              },
              {
                label: "Certificate Management",
                path: "/CertificateManagemnet",
                icon: <FaCertificate />,
              },
            ],
          },

          {
            icon: <FaNewspaper />,
            label: "Blogs / Articles",
            path: "/blog-articles",
          },

          {
            icon: <FaComments />,
            label: "Community / Discussions",
            path: "/community-discussion",
          },

          { icon: <FaUserCog />, label: "Admin Roles", path: "/admin-role" },

        

          {
            icon: <FaMoneyBillWave />,
            label: "Manage Transcations",
            dropdown: true,
            children: [
              { label: "View Transaction", path: "/viewTranscation" },
              { label: "Refund Process", path: "/RefundProcess" },
              { label: "View Analytics", path: "/PaymentAnalytics" },
            ],
          },

          { icon: <FaCog />, label: "Settings", path: "/adminSettings" },

          {
            icon: <FaFlag />,
            label: "Reported Issues",
            path: "/ReporteIssues",
          },
        ];
      case "student":
        return [
          { icon: <FaHome />, label: "Dashboard", path: "/student-dashboard" },
          { icon: <FaBook />, label: "My Courses", path: "/student-courses" },
          { icon: <FaUsers />, label: "Certificate", path: "/certificate" },

          {
            icon: <FaClipboardCheck />,
            label: "Assignments",
            path: "/assignment",
          },
          {
            icon: <FaStar />,
            label: "Review",
            path: "/reviewrating",
          },
          {
            icon: <FaQuestionCircle />,
            label: "Q&A",
            path: "/qasection",
          },

          { icon: <FaCog />, label: "Setting", path: "/student-settings" },
        ];
      case "instructor":
        return [
          {
            icon: <FaHome />,
            label: "Dashboard",
            path: "/instructor-dashboard",
          },
       
          {
            icon: <FaBox />,
            label: "My Courses",
            path: "/mycourse",
          },
          {
            icon: <FaBox />,
            label: "Digital Products",
            path: "/digitalproduct",
          },
          { icon: <FaComments />, label: "Messages", path: "/conversation" },
          { icon: <FaComments />, label: "Comments", path: "/coursecomments" },
         

          { icon: <FaMoneyBill />, label: "Earnings", path: "/earning" },
          { icon: <FaCalendarAlt />, label: "Calendar", path: "/calender" },
          { icon: <FaUserCircle />, label: "Profile", path: "/profile" },
          { icon: <FaCog />, label: "Settings", path: "/setting" },

        ];
      default:
        return [];
    }
  };

  const menuItems = getMenuItems();

  return (
    <div
      className={`fixed z-50 transition-all duration-300 bg-white border-r  h-screen overflow-y-auto ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Header */}
      {/* <div className="flex justify-between items-center p-4 border-b">
        {!isCollapsed && <h2 className="text-3xl font-impact">AISKILLS</h2>}
        <button onClick={() => setIsCollapsed(!isCollapsed)}>
          <FaBars />
        </button>
      </div> */}

      <div
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="flex justify-between items-center p-4 border-b cursor-pointer hover:bg-gray-100"
      >
        {!isCollapsed && <h2 className="text-3xl font-impact">AISKILLS</h2>}
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
                <div
                  className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-all ${
                    activeDropdown === item.label || isDropdownActive
                      ? "bg-teal-700 text-white font-semibold"
                      : "hover:bg-teal-100 text-black"
                  }`}
                  onClick={() => {
                    setActiveRoute(""); // remove previous highlight
                    if (activeDropdown !== item.label) {
                      setActiveDropdown(item.label);
                    } else {
                      const isChildActive = item.children?.some(
                        (child) => child.path === location.pathname
                      );
                      if (!isChildActive) {
                        setActiveDropdown(null);
                      }
                    }
                  }}
                >
                  {/* <span className="text-lg">{item.icon}</span> */}
                  <span
                    className="text-lg cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsCollapsed((prev) => !prev);
                    }}
                  >
                    {item.icon}
                  </span>

                  {!isCollapsed && (
                    <>
                      <span className="flex-1">{item.label}</span>
                      <span>
                        {activeDropdown === item.label ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </span>
                    </>
                  )}
                </div>
              ) : (
                <NavLink
                  to={item.path || "#"}
                  onClick={() => setActiveRoute(item.path)}
                  className={`flex items-center gap-3 px-4 py-3 transition-all cursor-pointer ${
                    activeRoute === item.path
                      ? "bg-teal-700 text-white font-semibold"
                      : "hover:bg-teal-100 text-black"
                  }`}
                >
                  {/* <span className="text-lg">{item.icon}</span> */}
                  <span
                    className="text-lg cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault(); // 🧠 Important
                      setIsCollapsed((prev) => !prev);
                    }}
                  >
                    {item.icon}
                  </span>
                  {!isCollapsed && <span className="flex-1">{item.label}</span>}
                </NavLink>
              )}

              {/* Dropdown Children */}
              {item.dropdown && activeDropdown === item.label && !isCollapsed && (
                <ul className="ml-8 mb-2">
                  {item.children.map((child, cidx) => (
                    <li key={cidx}>
                      <NavLink
                        to={child.path}
                        onClick={() => setActiveRoute(child.path)}
                        className={`block px-4 py-2 mt-1 rounded transition-all ${
                          activeRoute === child.path
                            ? "bg-teal-700 text-white font-semibold"
                            : "text-black hover:bg-teal-100"
                        }`}
                      >
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
          <div
            className="flex items-center gap-3 px-4 py-3 text-gray-800 cursor-pointer hover:bg-red-100 hover:text-red-600 transition-all"
            onClick={() => {
              localStorage.removeItem("user");
              window.location.href = "/login";
            }}
          >
            <FaSignOutAlt className="text-lg" />
            {!isCollapsed && <span>Logout</span>}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default RoleBasedSidebar;
