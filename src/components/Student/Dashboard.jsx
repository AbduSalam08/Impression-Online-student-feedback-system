import React from "react";
import "../../styles/Student/dashboard.css";
import Aos from "aos";
import { useNavigate } from "react-router-dom";
const Dashboard = ({ Questions, usersData }) => {
  Aos.init();
  const navigate = useNavigate();
  //logout
  const logout = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="Dashboard container">
      {/* cards */}
      <div className="cardSection">
        <div
          className="totalActive cd"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <div className="lhs">
            <p className="title">Active</p>
            <h1 className="count">{Questions.length}</h1>
            <p className="info">Total active feedbacks available for you</p>
          </div>
          <div className="rhs">
            <i className="fa fa-star "></i>
          </div>
        </div>
        <div className="pending cd" data-aos="fade-up" data-aos-duration="550">
          <div className="lhs">
            <p className="title">Pending</p>
            <h1 className="count">
              {Questions.filter((e) => e.completed == false).length}
            </h1>
            <p className="info">Total Pending feedbacks from your list</p>
          </div>
          <div className="rhs">
            <i className="fa fa-clock-o"></i>
          </div>
        </div>
        <div
          className="completed cd"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <div className="lhs">
            <p className="title">Completed</p>
            <h1 className="count">
              {Questions.filter((e) => e.completed == true).length}
            </h1>
            <p className="info">Total completed feedbacks from your list</p>
          </div>
          <div className="rhs">
            <i className="fa fa-check-circle"></i>
          </div>
        </div>
      </div>

      <div className="bottomSection">
        <div className="recent" data-aos="fade-up" data-aos-duration="650">
          <p className="header">Recent Activities</p>
          <div className="rowSection">
            {Questions.map((e, id) => (
              <div className="r" key={id}>
                <p className="rv">
                  <i className="fa fa-check-circle"></i>
                  {e.Feedback_title}
                </p>
                <p className="rv">
                  {e.completed == true ? "Completed" : "Pending"}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="profile" data-aos="fade-up" data-aos-duration="700">
          <h1 className="profHeader">Profile</h1>
          <div className="profDetails">
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/boy-4928338-4107714.png"
              alt="user profile image"
            />
            <div className="infos">
              <b>{usersData[0].studentName}</b>
              <span>(Student)</span>
            </div>
          </div>
          <div className="profContent">
            <div className="pr">
              <b>Email ID </b>
              <span>{usersData[0].studentEmail}</span>
            </div>
          </div>
          <div className="profFooter">
            <div className="status">
              <div></div>Active
            </div>
            <div
              className="logoutBtn"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Logout
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <span>Are you sure want to logout ?</span>
            <div className="popActions">
              <button
                type="button"
                className="closeBtn"
                data-bs-dismiss="modal"
              >
                No
              </button>
              <button type="button" className="okBtn" onClick={logout}>
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
