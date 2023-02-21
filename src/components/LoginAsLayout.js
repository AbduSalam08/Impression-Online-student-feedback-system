import React from "react";
import { Outlet } from "react-router-dom";
import CLogin from "./Landing/CLogin";
import CLoginNav from "./Landing/CLoginNav";

const LoginAsLayout = () => {
  return (
    <div>
      <CLoginNav />
      <Outlet />
    </div>
  );
};

export default LoginAsLayout;
