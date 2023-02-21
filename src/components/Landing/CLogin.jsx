import React from "react";
import Aos from "aos";
import "../../styles/Landing page/clogin.css";
import { Link } from "react-router-dom";

function CLogin() {
  Aos.init();
  return (
    <div>
      <div className="wrapper">
        <div class="tiles-wrapper container">
          <div class="tiles-section container">
            <h1 data-aos="fade-right">Login As</h1>

            <div
              class="tiles tile-1"
              data-aos="fade-right"
              data-aos-duration="900"
            >
              <h3>Institution</h3>
              <p>
                Login as Admin for any Institutions to collect feedbacks from
                the students.
              </p>
              <Link to={"Admin"} class="toAdminLogin">
                <i class="actionBtn fa fa-arrow-right"></i>
              </Link>
              <i class="infoIcon fa fa-university"></i>
            </div>
            <div
              class="tiles tile-3"
              data-aos="fade-right"
              data-aos-duration="1100"
            >
              <h3>Student</h3>
              <p>
                Login as student to give feedback for your Institution or any
                other university.
              </p>
              <Link to={"Student"} class="toStudentLogin">
                <i class="actionBtn fa fa-arrow-right"></i>
              </Link>
              <i class="infoIcon fa fa-graduation-cap"></i>
            </div>
          </div>
          <div class="rhs">
            <img
              data-aos="fade-left"
              data-aos-duration="1100"
              src="https://cdn3d.iconscout.com/3d/premium/thumb/login-3025715-2526913.png"
              alt="Login icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CLogin;
