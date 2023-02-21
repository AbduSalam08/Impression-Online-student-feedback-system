import React from "react";
import "../../styles/Student/stuDashboard.css";
import logo from "../../assets/logo.png";
import Aos from "aos";
import { NavLink, useLocation } from "react-router-dom";

const StuDashboard = () => {
  //getting the current loaction of the browser
  const location = useLocation();
  const locate = location.pathname.split("/");
  let currentLocation = locate[locate.length - 1].replace("_", " ");

  Aos.init();

  return (
    <div>
      {/* content */}
      <div className="topNav">
        <div className="container topNavWrapper">
          <div className="logo" data-aos="fade-right">
            <img src={logo} alt="logo" />
            <p>
              Im <span>pression</span>
            </p>
          </div>
          <div className="actionBtns" data-aos="fade-left">
            <a href="#" className="atBtn">
              <i className="fa fa-bell"></i>
            </a>
            <a href="#" className="atBtn">
              <i className="fa fa-gear"></i>
            </a>
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/boy-4928338-4107714.png"
              alt="avatar"
            />
          </div>
        </div>
      </div>

      {/* links */}
      <div className="container">
        <div className="dash">
          <h3 data-aos="fade-right" data-aos-duration="600">
            {currentLocation}
          </h3>
          <div
            className="dashLinks"
            data-aos="fade-left"
            data-aos-duration="600"
          >
            <NavLink
              to="/Dashboard"
              className={({ isActive }) => (isActive ? "ClinkActive" : "Clink")}
            >
              <i className="fa fa-dashboard"></i>
            </NavLink>
            <NavLink
              to="Active_Feedbacks"
              className={({ isActive }) => (isActive ? "ClinkActive" : "Clink")}
            >
              Active Feedbacks
            </NavLink>
            <NavLink
              to="History"
              className={({ isActive }) => (isActive ? "ClinkActive" : "Clink")}
            >
              History
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StuDashboard;
