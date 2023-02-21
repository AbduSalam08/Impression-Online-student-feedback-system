import React from "react";
import Aos from "aos";
import "../../styles/Admin/ALogin.css";
import { handlePwd } from "../Util";
// import CLoginNav from "../Landing/CLoginNav";
import { Link } from "react-router-dom";

function ALogin() {
  Aos.init();

  return (
    <div>
      <div className="wrapper">
        {/* <!-- form --> */}
        <div className="formWrapper container">
          <Link
            to={"/loginAs"}
            data-aos="fade-right"
            className="fa fa-arrow-left backBtn"
          ></Link>
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/technical-support-5796512-4841511.png"
            alt="student"
            data-aos="fade-right"
          />
          <div className="form" data-aos="fade-left">
            <div className="header">
              <h2>Login</h2>
            </div>
            <div className="inputs">
              <div className="userName">
                <input
                  type="text"
                  className="uName inp"
                  placeholder="Administration Email ID"
                />
              </div>
              <div className="password">
                <input
                  type="password"
                  className="pwd inp"
                  placeholder="Password"
                />
                <i
                  className="fa fa-eye"
                  onClick={() => {
                    document
                      .querySelector(".pwd")
                      .setAttribute(
                        "type",
                        handlePwd(document.querySelector(".pwd"))
                      );
                  }}
                ></i>
              </div>
              <div className="formFooter">
                <a className="fp">Forgot Password ?</a>
                <button className="submitBtn">SUBMIT</button>
              </div>
            </div>
            <div className="oAuth">
              <div className="or">
                <span></span>
                <small> or </small>
                <span></span>
              </div>
              <div className="auths">
                <i className="fa fa-google"></i>
                <i className="fa fa-facebook"></i>
                <i className="fa fa-github"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ALogin;
