import React from "react";
import "../../styles/Student/pagenotfound.css";
const PageNotFound = () => {
  return (
    <div className="pnf">
      <div className="pnfWrap">
        <h1>404 Request Error 😥</h1>
        <p>Oops ! Page Not Found </p>
        <p>Check your internet connection or please try again later.</p>
      </div>
    </div>
  );
};

export default PageNotFound;
