import React from "react";
import { Outlet } from "react-router-dom";
import ActiveFeedbacks from "./Student/ActiveFeedbacks";

const AcTLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AcTLayout;
