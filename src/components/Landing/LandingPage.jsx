import React from "react";
import "../../styles/Landing page/landingPage.css";
import Aos from "aos";
import logo from "../../assets/logo.png";
import LandingNav from "./LandingNav";

function LandingPage() {
  Aos.init();

  return (
    <div>
      <LandingNav />
      {/* <!-- wrapper class to wrap all the content in body --> */}
      <div className="wrapper">
        {/* <!-- content 1 --> */}
        <div className="cont1 container">
          <div className="infoText">
            <h1 data-aos="fade-right" data-aos-duration="800">
              What is <br />
              Im<span>pression.</span>
            </h1>
            <p data-aos="fade-right" data-aos-duration="1000">
              Impression is a <span>online feedback system</span> with ease for
              students & institutions.
            </p>
          </div>
          <img
            data-aos="fade-left"
            data-aos-duration="1300"
            src="https://cdn3d.iconscout.com/3d/premium/thumb/product-review-3856392-3212580.png"
            alt="feedback 3d"
          />
        </div>

        {/* <!-- content 2 --> */}
        <div className="cont2 container">
          <img
            data-aos="fade-right"
            data-aos-duration="700"
            src="https://static.vecteezy.com/system/resources/previews/009/418/795/non_2x/feedback-3d-icon-illustration-for-your-website-user-interface-and-presentation-3d-render-illustration-free-png.png"
            alt="content 2 image"
          />
          <div className="infoText2">
            <h1 data-aos="fade-left" data-aos-duration="900">
              Got a <br />
              minute ?
            </h1>
            <p data-aos="fade-left" data-aos-duration="1200">
              Help Businesses & institutions to improve by giving your honest
              <span>feedback.</span>
            </p>
          </div>
        </div>

        {/* <!-- content 3 --> */}
        <div className="cont3 container">
          <div className="lhs">
            <div className="header">
              <h1 data-aos="fade-right" data-aos-duration="500">
                Privacy & Security <br />
              </h1>
              <span
                className="tagline"
                data-aos="fade-right"
                data-aos-duration="700"
              >
                No Compromise
              </span>
              <p data-aos="fade-right" data-aos-duration="900">
                Our whole business is depends on data privacy & security. <br />
                the feedbacks are <span>end-to-end encrypted</span> and, <br />
                Trusted by our main users <br />
                who use our product for give & get <span>feedbacks</span> for
                thier growth.
              </p>
            </div>
            <div
              className="cardSection"
              data-aos="fade-right"
              data-aos-duration="1100"
            >
              <div className="cardd">
                <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                <p>Customers</p>
              </div>
              <div className="cardd">
                <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                <p>Students</p>
              </div>
              <div className="cardd">
                <i className="fa fa-university" aria-hidden="true"></i>
                <p>Institutions</p>
              </div>
              <div className="cardd">
                <i className="fa fa-building" aria-hidden="true"></i>
                <p>Businesses</p>
              </div>
            </div>
          </div>
          <img
            data-aos="fade-left"
            data-aos-duration="1300"
            src="https://cdn3d.iconscout.com/3d/premium/thumb/security-check-6877543-5639689.png"
            alt="user image content 3"
          />
        </div>

        {/* <!-- content 5 --> */}
        <div className="cont5 container" data-aos="fade-up">
          <h1 data-aos="fade-up" data-aos-duration="600">
            Trusted By
          </h1>
          <p data-aos="fade-up" data-aos-duration="800">
            Impression feedback system is a great platform which is trusted by
            our valued partners & customers.
          </p>
          <div className="mnc">
            <i
              data-aos="fade-up"
              data-aos-duration="1000"
              className="fa fa-google"
            ></i>
            <i
              data-aos="fade-up"
              data-aos-duration="1100"
              className="fa fa-facebook"
            ></i>
            <i
              data-aos="fade-up"
              data-aos-duration="1200"
              className="fa fa-youtube-play"
            ></i>
            <i
              data-aos="fade-up"
              data-aos-duration="1300"
              className="fa fa-instagram"
            ></i>
            <i
              data-aos="fade-up"
              data-aos-duration="1400"
              className="fa fa-windows"
            ></i>
            <i
              data-aos="fade-up"
              data-aos-duration="1500"
              className="fa fa-amazon"
            ></i>
            <i
              data-aos="fade-up"
              data-aos-duration="1600"
              className="fa fa-github"
            ></i>
          </div>
        </div>

        {/* <!-- content 4 --> */}
        <div className="cont4 container" data-aos="fade-up">
          <h1 data-aos="fade-up" data-aos-duration="600">
            So, what do you waiting for ?
          </h1>
          <p data-aos="fade-up" data-aos-duration="800">
            Get ready to give honest reviews & feedbacks
          </p>
          <button
            className="splBtnCont4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Get started
          </button>
        </div>

        {/* <!-- footer --> */}
        <div className="footer">
          <div className="footerLogo">
            <img src={logo} alt="footer logo" />
            <p>All rights reserved @Impression-2023</p>
          </div>
          <div className="footerLinks">
            <a href="">Careers</a>
            <a href="">Privacy</a>
            <a href="">Docs</a>
            <a href="">Social</a>
            <a href="">Terms & conditions</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
