import Sidebar from "./Sidebar";
import Navbar from "./SoftwareNavbar";
import { useState } from "react";

const DashboardLayout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className="flex">
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <div className={`transition-all duration-300 flex-1 min-h-screen ${
          isCollapsed ? "pl-16" : "pl-64"}`}>
        <Navbar isCollapsed={isCollapsed} />
        <div className="py-4 mt-5">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
