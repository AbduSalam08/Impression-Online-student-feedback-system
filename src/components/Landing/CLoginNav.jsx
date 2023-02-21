import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Landing page/cloginNav.css";
import logo from "../../assets/logo.png";
import Aos from "aos";

const CLoginNav = () => {
  Aos.init();
  return (
    <div className="wrapper">
      {/* <!-- Navbar  --> */}
      <div className="nav">
        <div className="logo" data-aos="fade-right">
          <img src={logo} alt="Company logo" />
          <p>
            Im <span>pression.</span>
          </p>
        </div>
        <Link to={"/"} className="homeLink">
          <i className="fa fa-home" aria-hidden="true" data-aos="fade-left"></i>
        </Link>
      </div>
    </div>
  );
};

export default CLoginNav;
