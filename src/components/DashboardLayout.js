import React from "react";
import { Outlet } from "react-router-dom";
import StuDashboard from "./Student/StuDashboard";

const DashboardLayout = () => {
  return (
    <div className="wrapDashboard">
      <StuDashboard />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
