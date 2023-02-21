import React, { useState } from "react";
import Aos from "aos";
import "../../styles/Admin/ALogin.css";
import { handlePwd } from "../Util";
import { Toast } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function SLogin({ usersData }) {
  //aos
  Aos.init();
  //navigator
  const navigate = useNavigate();
  //toast type
  const [toastType, setToastType] = useState("");
  const [toastFlag, setToastFlag] = useState(false);
  const [ErrorText, setErrorText] = useState("");
  //input states
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    //regEx
    // var letters = /^[A-Za-z]+$/;

    // verification & validation
    for (let index = 0; index < usersData.length; index++) {
      if (
        userName.match(usersData[index].studentEmail) &&
        password.match(usersData[index].studentPwd)
      ) {
        setToastFlag(true);
        setToastType("success");
        setErrorText("Login Success");

        setTimeout(() => {
          navigate("/Dashboard");
        }, 1000);
      } else {
        setToastFlag(true);
        setToastType("danger");
        setErrorText("Invalid Username or Password !");
      }
    }
  };

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
            src="https://cdn3d.iconscout.com/3d/premium/thumb/graduated-5691526-4741067.png"
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
                  onChange={(e) => setUsername(e.target.value)}
                  className="uName inp"
                  placeholder="Student name / Email ID"
                />
              </div>
              <div className="password">
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
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
                <a href="#" className="fp">
                  Forgot Password ?
                </a>
                <button className="submitBtn" onClick={handleSubmit}>
                  SUBMIT
                </button>
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
        <Toast
          show={toastFlag}
          delay={2000}
          autohide
          className="toastManual"
          onClose={() => setToastFlag(false)}
        >
          <Toast.Body
            className={`bg-${toastType} shadow text-center rounded-2`}
          >
            {ErrorText}
          </Toast.Body>
        </Toast>
      </div>
    </div>
  );
}

export default SLogin;
