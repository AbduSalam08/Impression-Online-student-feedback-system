import React from "react";
import Aos from "aos";
import "../../styles/Landing page/landingNav.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function LandingNav() {
  Aos.init();

  // side menu
  const menuHandler = () => {
    document.querySelector(".sideNav").classList.add("open");
    document.querySelector(".wrapper").classList.add("makeBlur");

    document.querySelector(".fa-times").addEventListener("click", () => {
      document.querySelector(".sideNav").classList.remove("open");
      document.querySelector(".wrapper").classList.remove("makeBlur");
    });
  };

  return (
    <div>
      {/* <!-- side navbar  --> */}
      <div className="sideNav">
        <i className="fa fa-times"></i>
        <div className="navLinks">
          <button>Home</button>
          <button>About</button>
          <button>Follow Us</button>
          <button>Sign Up</button>
          <Link className="splBtn" to={"/loginAs"}>
            Login
          </Link>
        </div>
      </div>

      {/* <!-- Navbar  --> */}
      <div className="nav">
        <div className="logo" data-aos="fade-right">
          <img src={logo} alt="Company logo" />
          <p>
            Im <span>pression.</span>
          </p>
        </div>
        <i
          className="fa fa-bars"
          onClick={menuHandler}
          aria-hidden="true"
          data-aos="fade-left"
        ></i>
      </div>
    </div>
  );
}

export default LandingNav;
